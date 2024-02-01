<template>
  <div style="height: 100%">
    <HmTldraw
      ref="tldraw"
      @onReady="onReady"
      @onCodeError="onCodeError"
      @onCodeOk="onCodeOk"
    ></HmTldraw>
    <button @click="setCode1">Set Code1</button>
    <button @click="setCode2">Set Code2</button>
    <button @click="setReactCode1">Set React Code1</button>
    <button @click="setReactCode2">Set React Code2</button>
    <button @click="getExportImage">Export Image</button>
    <button @click="getExportSfcImage">Export Sfc Image</button>
    <button @click="getExportJson">Export JSON</button>
    <button @click="setExportJson">Set Export JSON</button>
    <button @click="clear">Clear</button>
    <button @click="clearAll">Clear All</button>
    <button @click="changeSize">Change Size</button>
    <button @click="changePage1">Change Page1</button>
    <button @click="changePage2">Change Page2</button>
    <button @click="changePageNone">Change Page None</button>
    <button @click="setDepMaps">Set Dep Maps</button>
  </div>
</template>

<script>
const reactCode1 = `
import React from 'react';
import { Button} from 'antd';

const App: React.FC = () => (
  <div>
    <Button type="primary">Primary Button</Button>
    <Button>Default Button</Button>
    <Button type="dashed">Dashed Button</Button>
    <Button type="text">Text Button</Button>
    <Button type="link">Link Button</Button>
  </div>
);

export default App;
`

const reactCode2 = `
import React from 'react';
import { Button} from 'antd';

const App: React.FC = () => (
);

export default App;
`

const code1 = `<template>
  <div>111</div>
</template>

`;

const code2 = `<template>
  <a-button>test按钮2</a-button1>
</template>` +
          "<script></" +
          "scriptt>";

 const json1 = `{"shapes":[{"x":627.993896484375,"y":-519.9576721191406,"rotation":0,"isLocked":false,"opacity":1,"meta":{},"id":"shape:TkueXp-cy_j3-UIhfwjMD","type":"draw","props":{"segments":[{"type":"free","points":[{"x":0,"y":0,"z":0.5},{"x":-6.18,"y":0,"z":0.5},{"x":-31.9,"y":3.43,"z":0.5},{"x":-48.07,"y":9.05,"z":0.5},{"x":-64.18,"y":13.25,"z":0.5},{"x":-81.05,"y":16.07,"z":0.5},{"x":-99.73,"y":18.22,"z":0.5},{"x":-111.26,"y":20.26,"z":0.5},{"x":-125.14,"y":25.81,"z":0.5},{"x":-134.38,"y":28.45,"z":0.5},{"x":-140.7,"y":31.61,"z":0.5},{"x":-144.04,"y":33.83,"z":0.5},{"x":-145.46,"y":35.74,"z":0.5},{"x":-146.89,"y":38.12,"z":0.5},{"x":-146.89,"y":42.01,"z":0.5},{"x":-138.42,"y":44.62,"z":0.5},{"x":-128.17,"y":51.45,"z":0.5},{"x":-110.93,"y":60.07,"z":0.5},{"x":-80.88,"y":70.4,"z":0.5},{"x":-42.14,"y":82.96,"z":0.5},{"x":5.31,"y":97.65,"z":0.5},{"x":45.79,"y":109.37,"z":0.5},{"x":82.79,"y":121.7,"z":0.5},{"x":104.19,"y":129.63,"z":0.5},{"x":117.38,"y":137.27,"z":0.5},{"x":124.55,"y":142.48,"z":0.5},{"x":125.11,"y":146.38,"z":0.5},{"x":125.11,"y":148,"z":0.5},{"x":121.4,"y":152.95,"z":0.5},{"x":111.23,"y":159.05,"z":0.5},{"x":88.92,"y":168.97,"z":0.5},{"x":64.92,"y":180.11,"z":0.5},{"x":20.96,"y":193.3,"z":0.5},{"x":-42.71,"y":212.03,"z":0.5},{"x":-93.65,"y":224.76,"z":0.5},{"x":-146.33,"y":237.64,"z":0.5},{"x":-187.88,"y":241.9,"z":0.5},{"x":-216.2,"y":250.12,"z":0.5},{"x":-232.36,"y":255.04,"z":0.5},{"x":-245.42,"y":259.16,"z":0.5},{"x":-250.84,"y":260.97,"z":0.5},{"x":-251.3,"y":261.2,"z":0.5},{"x":-251.3,"y":261.43,"z":0.5},{"x":-242.82,"y":262.08,"z":0.5},{"x":-218.87,"y":262.08,"z":0.5},{"x":-180.84,"y":259,"z":0.5},{"x":-128.74,"y":259,"z":0.5},{"x":-76.65,"y":259,"z":0.5},{"x":-26.31,"y":264.72,"z":0.5},{"x":20.51,"y":264.72,"z":0.5},{"x":51.5,"y":267.53,"z":0.5},{"x":63.79,"y":267.53,"z":0.5},{"x":69.98,"y":269.39,"z":0.5},{"x":72.36,"y":270.82,"z":0.5},{"x":72.36,"y":271.05,"z":0.5},{"x":71.48,"y":271.34,"z":0.5},{"x":69.26,"y":274.68,"z":0.5},{"x":58.2,"y":283.66,"z":0.5},{"x":44.95,"y":292.03,"z":0.5},{"x":22.65,"y":301.94,"z":0.5},{"x":-14,"y":317.65,"z":0.5},{"x":-53.41,"y":333.62,"z":0.5},{"x":-90.41,"y":345.96,"z":0.5},{"x":-136.11,"y":358.22,"z":0.5},{"x":-180.08,"y":369.21,"z":0.5},{"x":-205.78,"y":378.96,"z":0.5},{"x":-219.67,"y":383.82,"z":0.5},{"x":-225.23,"y":386.91,"z":0.5},{"x":-225.46,"y":387.14,"z":0.5},{"x":-224.59,"y":387.72,"z":0.5},{"x":-211.53,"y":387.72,"z":0.5},{"x":-169.99,"y":386.66,"z":0.5},{"x":-109.1,"y":386.66,"z":0.5},{"x":-39.41,"y":386.66,"z":0.5},{"x":39.07,"y":382.73,"z":0.5},{"x":106.99,"y":385.25,"z":0.5},{"x":157.33,"y":390.97,"z":0.5},{"x":184.81,"y":394.51,"z":0.5},{"x":194.81,"y":397.18,"z":0.5},{"x":195.27,"y":397.41,"z":0.5},{"x":195.27,"y":397.64,"z":0.5},{"x":194.81,"y":397.64,"z":0.5},{"x":186.14,"y":402.97,"z":0.5},{"x":133.45,"y":417.02,"z":0.5},{"x":101.67,"y":425.69,"z":0.5},{"x":65.4,"y":432.74,"z":0.5},{"x":25.62,"y":441.12,"z":0.5},{"x":-1.86,"y":446.44,"z":0.5},{"x":-32.85,"y":453.01,"z":0.5},{"x":-60.32,"y":457.44,"z":0.5},{"x":-79,"y":460.32,"z":0.5},{"x":-92.06,"y":460.32,"z":0.5},{"x":-99,"y":460.32,"z":0.5}]}],"color":"black","fill":"none","dash":"draw","size":"m","isComplete":true,"isClosed":false,"isPen":false},"parentId":"page:page","index":"a1","typeName":"shape"},{"x":883.5533447265625,"y":-268.73602294921875,"rotation":0,"isLocked":false,"opacity":1,"meta":{},"id":"shape:XdwcwFS-9e3WjGAmWFVSH","type":"draw","props":{"segments":[{"type":"free","points":[{"x":0,"y":0,"z":0.5}]}],"color":"black","fill":"none","dash":"draw","size":"m","isComplete":true,"isClosed":false,"isPen":false},"parentId":"page:page","index":"a2","typeName":"shape"},{"x":883.5533447265625,"y":-268.73602294921875,"rotation":0,"isLocked":false,"opacity":1,"meta":{},"id":"shape:Qf99FphlFgcnBzN-CZ4Db","type":"draw","props":{"segments":[{"type":"free","points":[{"x":0,"y":0,"z":0.5}]}],"color":"black","fill":"none","dash":"draw","size":"m","isComplete":true,"isClosed":false,"isPen":false},"parentId":"page:page","index":"a3","typeName":"shape"},{"x":831.8216552734375,"y":-405.87152099609375,"rotation":0,"isLocked":false,"opacity":1,"meta":{},"id":"shape:82K0t5pIAZorEOBOs9vKX","type":"text","props":{"color":"black","size":"m","w":105.765625,"text":"123dasdasd","font":"draw","align":"middle","autoSize":true,"scale":1},"parentId":"page:page","index":"a4","typeName":"shape"},{"x":0,"y":0,"rotation":0,"isLocked":false,"opacity":1,"meta":{},"id":"shape:Kz6e3lTGUenzk26ct8X3K","type":"response","props":{"html":"","w":1024,"h":768},"parentId":"page:page","index":"a5","typeName":"shape"}],"rootShapeIds":["shape:TkueXp-cy_j3-UIhfwjMD","shape:XdwcwFS-9e3WjGAmWFVSH","shape:Qf99FphlFgcnBzN-CZ4Db","shape:82K0t5pIAZorEOBOs9vKX","shape:Kz6e3lTGUenzk26ct8X3K"],"schema":{"schemaVersion":1,"storeVersion":4,"recordVersions":{"asset":{"version":1,"subTypeKey":"type","subTypeVersions":{"image":2,"video":2,"bookmark":0}},"camera":{"version":1},"document":{"version":2},"instance":{"version":22},"instance_page_state":{"version":5},"page":{"version":1},"shape":{"version":3,"subTypeKey":"type","subTypeVersions":{"group":0,"text":1,"bookmark":1,"draw":1,"geo":7,"note":4,"line":1,"frame":0,"arrow":1,"highlight":0,"embed":4,"image":2,"video":1,"response":0}},"instance_presence":{"version":5},"pointer":{"version":1}}},"assets":[]}`
    
import HmTldraw from "/@/components/built-in/jeecg/HmTldraw.vue";
export default {
  components: {
    HmTldraw,
  },
  data() {
    return {};
  },
  mounted() {
    let self = this;
    // this.$refs.tldraw.onReadyCallback(() => {
    //   console.log("onReadyCallback")
    //   self.setCode1()
    // })
  },
  methods: {
    onCodeError(error) {
      console.log("onCodeError", error);
    },
    onCodeOk() {
      console.log("onCodeOk");
    },
    onReady() {
      console.log("onReady");
      // this.setCode1()
    },
    changeSize() {
      this.$refs.tldraw.changeSize({
        w: 1024,
        h: 768,
      });
    },
    changePage1() {
      this.$refs.tldraw.changePage({
        pageId: "page1", 
        code: code1, 
        // json: json1
      });
    },
    changePage2() {
      this.$refs.tldraw.changePage({
        pageId: "page2", 
        code: code2, 
        // json: json1
      });
    },
    changePageNone() {
      this.$refs.tldraw.changePage({
        // pageId: "page2", 
        code: code1, 
        json: json1
      });
    },
    setDepMaps(){
      this.$refs.tldraw.setDepMaps(JSON.stringify({'pdf-vue3': 'https://registry.npmmirror.com/pdf-vue3/1.0.11/files/dist/pdf-vue3.js'}));
    },
    setCode1() {
      this.$refs.tldraw.setCode(code1);
    },
    setCode2() {
      this.$refs.tldraw.setCode(code2);
    },
    setReactCode1(){
      this.$refs.tldraw.setCode(reactCode1);
    },
    setReactCode2(){
      this.$refs.tldraw.setCode(reactCode2);
    },
    clear() {
      this.$refs.tldraw.clear();
    },
    clearAll() {
      this.$refs.tldraw.clearAll();
    },
    setExportJson() {
      this.$refs.tldraw.setExportJson(json1);
    },
    async getExportImage() {
      let image = await this.$refs.tldraw.getExportImage();
      console.log("image", image);
    },
    async getExportSfcImage() {
      let image = await this.$refs.tldraw.getExportSfcImage();
      console.log("image", image);
    },
    async getExportJson() {
      let json = await this.$refs.tldraw.getExportJson();
      console.log("json", json);
    },
  },
};
</script>

<style scoped>
/deep/ .editor {
  margin-top: 30px;
}
</style>
