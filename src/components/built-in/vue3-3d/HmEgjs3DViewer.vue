<template>
  <View3D ref="view3d" :src="modelUrl" :envmap="envmapUrl" @ready="onReady">
    <slot></slot>
  </View3D>
</template>

<script>
import { View3D } from "@egjs/vue3-view3d";
import "@egjs/vue3-view3d/css/view3d-bundle.css";
import * as THREE from "three";
export default {
  name: "HmEgjs3DViewer",
  components: {
    View3D,
  },
  props: {
    /**
     * 模型链接
     */
    modelUrl: {
      type: String,
      default: "https://block-design.oss-cn-shenzhen.aliyuncs.com/3d/plant.glb",
    },
    /**
     * 环境url
     */
    envmapUrl: {
      type: String,
      default: "",
    },
    /**
     * 宽度
     */
    width: {
      type: String,
      default: "300",
    },
    /**
     * 高度
     */
    height: {
      type: String,
      default: "300",
    },
  },
  data() {
    return {
      cWidth: "300px",
      cHeight: "300px",
      View3D,
      THREE: THREE,
      view3DInstance: null,
      helper: new View3DHelper(),
    };
  },
  watch: {
    width(value) {
      this.cWidth = this.$getCssUnit(value);
    },
    height(value) {
      this.cHeight = this.$getCssUnit(value);
    },
  },
  mounted() {
    this.cWidth = this.$getCssUnit(this.width);
    this.cHeight = this.$getCssUnit(this.height);
  },
  methods: {
    onReady: function (e) {
      this.view3DInstance = e.target;
      this.$emit("ready", e);
    },
  },
};

export class View3DHelper {
  /**
   * 添加点击事件
   * @param view3D 3D对象
   * @param handleTarget 要监听的对象
   * @param clickHandle  点击后的处理
   * @param choseColor 点击后的颜色
   */
  AddMaterialCliectEvent = (
    view3D,
    handleTarget,
    clickHandle,
    choseColor = "#2ecc71"
  ) => {
    let sencTarget, lastMesh, lastColor, intersects;

    const onMouseMove = (e) => {
      let intersects = this.findMouseIntersects(
        e,
        view3D.scene.root,
        view3D.camera.threeCamera
      );

      if (intersects && sencTarget) {
        const findResult =
          intersects.findIndex(
            (p) => p.object.uuid == sencTarget.object.uuid
          ) >= 0;
        //console.log()
        if (findResult) return;
      }
      if (sencTarget) {
        sencTarget = undefined;
      }
    };

    const onMousedown = (e) => {
      let intersects = this.findMouseIntersects(
        e,
        view3D.scene.root,
        view3D.camera.threeCamera
      );
      if (handleTarget != undefined && handleTarget.length > 0) {
        intersects = this.intersectsFilter(intersects, handleTarget);
      }
      if (intersects.length > 0) {
        sencTarget = intersects[0]; //.object ;
      }
    };
    const onMouseUp = (e) => {
      if (!sencTarget || sencTarget.object == lastMesh) {
        return;
      }
      const mesh = sencTarget.object;
      if (lastMesh && lastColor) {
        lastMesh.material.color.copy(lastColor);
      }
      const material = mesh.material;
      lastMesh = mesh;
      lastColor = material.color.clone();
      if (clickHandle)
        clickHandle({
          target: e,
          choseItem: sencTarget,
          choseSet: intersects,
          choseColor,
          preColor: lastColor.clone(),
          resetMaterial: () => {
            if (!lastColor) return;
            material.color.set(lastColor.clone());
            this.refreshRenderer(view3D);
          },
        });
      requestAnimationFrame(() => {
        material.color.set(choseColor);
        this.refreshRenderer(view3D);
      });
    };
    // 注册事件处理函数
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMousedown);
    window.addEventListener("mouseup", onMouseUp);
  };
  /**
   * 添加鼠标移动事件
   * @param {*} view3D
   * @param {*} handleTarget 要监听的对象 空则全部
   * @param {*} onHoverHandle
   * @param {*} onLeaveHandle
   * @param {*} onHoverMoveHandle
   */
  AddMaterialMouseMoveEvent(
    view3D,
    handleTarget,
    onHoverHandle,
    onLeaveHandle,
    onHoverMoveHandle
  ) {
    let preObj;
    const onMouseMove = (e) => {
      let intersects = this.findMouseIntersects(
        e,
        view3D.scene.root,
        view3D.camera.threeCamera
      );
      if (handleTarget != undefined && handleTarget.length > 0) {
        intersects = this.intersectsFilter(intersects, handleTarget);
      }
      if (intersects == null || intersects.length <= 0) {
        if (preObj) {
          preObj = null;
          if (onLeaveHandle) {
            onLeaveHandle({ e, mesh: preObj?.object, target: preObj });
          }
        }
        return;
      }
      const target = intersects[0];
      // 在这里触发事件
      if (onHoverHandle) {
        if (preObj && preObj.object.uuid == target.object.uuid) {
          if (onHoverMoveHandle)
            onHoverMoveHandle({ e, mesh: preObj.object, target: preObj });
        } else {
          if (preObj && preObj.object.uuid != target.object.uuid) {
            if (onLeaveHandle)
              onLeaveHandle({ e, mesh: preObj.object, target: preObj });
          }
          onHoverHandle({ e, target });
          preObj = target;
        }
      }
    };
    window.addEventListener("mousemove", onMouseMove);
  }
  raycaster = new THREE.Raycaster();
  mouse = new THREE.Vector2();
  /**
   * 根据场景查找鼠标位置对象
   * @param {MouseEvent} e
   * @param {THREE.Scene} scene
   * @param {THREE.Camera} camera
   */
  findMouseIntersects(e, scene, camera) {
    this.mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    this.mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    this.raycaster.setFromCamera(this.mouse, camera);
    const intersects = this.raycaster.intersectObjects(scene.children, true);
    return this.raycaster.intersectObjects(scene.children, true);
  }
  _screenPosition = new THREE.Vector3();
  vector2ToPixelPosition(vector2, camera) {
    screenPosition.copy(vector2);
    screenPosition.project(camera);
    const x = ((screenPosition.x + 1) * window.innerWidth) / 2;
    const y = (-(screenPosition.y - 1) * window.innerHeight) / 2;
    // 返回像素坐标
    return { x, y };
  }
  /**
   * 对象过滤
   * @param {THREE.Intersection<any>[]} intersects
   * @param {THREE.Mesh<any>[]} checkSet
   */
  intersectsFilter(intersects, checkSet) {
    return intersects.filter(
      (p) => checkSet.findIndex((c) => p.object.uuid === c.uuid) >= 0
    );
  }
  /**
   * 3D对象闪烁
   * @param view3D
   * @param meshName
   * @param color
   * @param blinkTimes
   * @param blinkInterval
   */
  MaterialBlinkAnimator = (
    view3D,
    meshs,
    color = "#2ecc71",
    blinkTimes = 5,
    blinkInterval = 1000
  ) => {
    let findResult = [];
    if (this.isString(meshs)) {
      findResult = this.findMeshs(view3D, meshs);
      if (!findResult) {
        console.warn(`Mesh "${meshs}" not found`);
        return;
      }
    } else {
      findResult = this.isArray(meshs) ? meshs : [meshs];
    }

    const switchColor = (material, newColor) => {
      material.color.copy(newColor);
      this.refreshRenderer(view3D);
    };
    const cancleList = findResult.map((mesh) => {
      const material = mesh.material;
      const oldColor = material.color.clone();
      return this.repeatAnimation(
        (times) => {
          if (times % 2 === 0) {
            switchColor(material, new THREE.Color(color));
          } else {
            switchColor(material, oldColor);
          }
          this.refreshRenderer(view3D);
        },
        blinkInterval,
        blinkTimes,
        (t) => t % 2 == 0
      );
    });

    return () => {
      cancleList.forEach((call) => {
        call();
      });
    };
  };
  /**
   * 循环执行
   * @param fn 执行的函数
   * @param duration 时间间隔
   * @param interval 执行次数
   * @param cancleBeforCheck 取消检查 function(times)
   * @returns 返回一个取消函数
   */
  repeatAnimation(fn, duration, interval, cancleBeforCheck) {
    let times = 0;
    let cancel = false;

    function render() {
      if (cancel) {
        if (cancleBeforCheck) {
          if (cancleBeforCheck(times)) return;
        } else {
          return;
        }
      }

      if (times <= interval || interval <= 0) {
        fn(times);
        times++;
      } else {
        return;
      }

      setTimeout(() => {
        requestAnimationFrame(render);
      }, duration);
    }

    requestAnimationFrame(render);

    // 返回一个函数，用于取消动画
    return function () {
      cancel = true;
    };
  }
  /**
   * 渲染模型
   * @param view3D
   */
  refreshRenderer = (view3D) => {
    view3D.renderer.threeRenderer.render(
      view3D.scene.root,
      view3D.camera.threeCamera
    );
  };

  /**
   * 查找 对象成员
   * @param view3D
   * @param meshName
   * @param filterHandle 过滤规则 默认 material.name 或 name
   */
  findMeshs = (view3D, meshName, filterHandle = undefined) => {
    let handleMesh = this.isString(meshName) ? [meshName] : meshName;
    if (filterHandle == undefined) {
      filterHandle = (name, meshItem) => {
        const key = meshItem.material.name
          ? meshItem.material.name
          : meshItem.name;
        return key === name;
      };
    }
    const result = view3D.model.meshes.filter(
      (p) => handleMesh.findIndex((n) => filterHandle(n, p) == true) >= 0
    );
    console.log("findMeshs", result);
    return result;
  };
  isArray(target) {
    if (target == null || target == undefined) return false;
    return Array.isArray(target);
  }
  isString = (target) => {
    if (target == null || target == undefined) return false;
    return typeof target == "string";
  };
}
</script>
<style lang="less" scoped>
.view3d-wrapper {
  width: v-bind(cWidth);
  height: v-bind(cHeight);
}
</style>
