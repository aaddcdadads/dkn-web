<template>
  <div>
    <a-row :class="['p-4', `${prefixCls}--box`]" type="flex" :gutter="10" style="max-height: 800px">
      <a-col :xl="6" :lg="24" :md="24" style="margin-bottom: 10px">
        <DepartLeftTree ref="leftTree" @select="onTreeSelect" />
      </a-col>
      <a-col :xl="18" :lg="24" :md="24" style="margin-bottom: 10px">
        <div style="height: 100%; background-color: white">
          <!--引用表格-->
          <BasicTable @register="registerTable" :rowSelection="rowSelection">
            <!--插槽:table标题-->
            <template #tableTitle>
              <a-button type="primary" preIcon="ant-design:plus-outlined" v-auth="'user:add'" @click="handleCreate">
                新增</a-button>
              <a-dropdown v-if="selectedRowKeys.length > 0">
                <template #overlay>
                  <a-menu>
                    <a-menu-item key="1" @click="batchHandleDelete">
                      <Icon icon="ant-design:delete-outlined"></Icon>
                      删除
                    </a-menu-item>
                    <a-menu-item key="2" @click="batchFrozen(2)">
                      <Icon icon="ant-design:lock-outlined"></Icon>
                      冻结
                    </a-menu-item>
                    <a-menu-item key="3" @click="batchFrozen(1)">
                      <Icon icon="ant-design:unlock-outlined"></Icon>
                      解冻
                    </a-menu-item>
                  </a-menu>
                </template>
                <a-button>批量操作
                  <Icon icon="mdi:chevron-down"></Icon>
                </a-button>
              </a-dropdown>
            </template>
            <!--操作栏-->
            <template #action="{ record }">
              <TableAction :actions="getTableAction(record)" :dropDownActions="getDropDownAction(record)" />
            </template>
          </BasicTable>
        </div>
      </a-col>
    </a-row>
    
    <!--用户抽屉-->
    <UserDrawer @register="registerDrawer" @success="handleSuccess" />
    <!--修改密码-->
    <PasswordModal @register="registerPasswordModal" @success="reload" />
    <!--用户代理-->
    <UserAgentModal @register="registerAgentModal" @success="reload" />
    <!--回收站-->
    <UserRecycleBinModal @register="registerModal" @success="reload" />

  </div>
</template>

<script lang="ts" setup>
  import { provide, ref, unref } from 'vue';
  import { useDesign } from '/@/hooks/web/useDesign';
  import UserDrawer from '/@/views/system/user/UserDrawer.vue';
  import PasswordModal from '/@/views/system/user/PasswordModal.vue';
  import DepartLeftTree from './components/DepartLeftTree.vue';
  import { BasicTable, TableAction, ActionItem } from '/@/components/Table';
  import { useListPage } from '/@/hooks/system/useListPage';
  import { columns, searchFormSchema } from './address.data';
  import { list, positionList } from './address.api';
  import { useDrawer } from '/@/components/Drawer';
  import { useModal } from '/@/components/Modal';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { list as userList, deleteUser, batchDeleteUser, getImportUrl, getExportUrl, frozenBatch, syncUser } from '/@/views/system/user/user.api.ts';

  const { prefixCls } = useDesign('address-list');
  provide('prefixCls', prefixCls);

  // 给子组件定义一个ref变量
  const leftTree = ref();

  // 当前选中的部门code
  const orgCode = ref('');
  const positionInfo = ref({});

  // 列表页面公共参数、方法
  const { tableContext, onExportXls, onImportXls } = useListPage({
    tableProps: {
      api: list,
      columns,
      rowKey: 'id',
      showIndexColumn: true,
      formConfig: {
        labelWidth: 200,
        schemas: searchFormSchema,
      },
      canResize: false,
      actionColumn: {
        width: 120,
      },
      showTableSetting: false,
      // 请求之前对参数做处理
      beforeFetch(params) {
        params.orgCode = orgCode.value;
      },
    },
  });
  const { createMessage, createConfirm } = useMessage();
  const selectRows = ref([]);
  //注册drawer
  const [registerDrawer, { openDrawer }] = useDrawer();
  //密码model
  const [registerPasswordModal, { openModal: openPasswordModal }] = useModal();
  //注册table数据
  const [registerTable, { reload, updateTableDataRecord }, { rowSelection, selectedRowKeys }] = tableContext;

  // 左侧树选择后触发
  function onTreeSelect(data) {
    orgCode.value = data.orgCode;
    reload();
  }

  /**
   * 新增事件
   */
  function handleCreate() {
    openDrawer(true, {
      isUpdate: false,
      showFooter: true,
    });
  }
  /**
   * 编辑事件
   */
  async function handleEdit(record: Recordable) {
    let res = await userList({id: record.userId})
    openDrawer(true, {
      record: res.records[0],
      isUpdate: true,
      showFooter: true,
    });
  }
  /**
   * 详情
   */
  async function handleDetail(record: Recordable) {
    let res = await userList({id: record.userId})
    openDrawer(true, {
      record: res.records[0],
      isUpdate: true,
      showFooter: false,
    });
  }
  /**
   * 删除事件
   */
  async function handleDelete(record) {
    if ('admin' == record.username) {
      createMessage.warning('管理员账号不允许此操作！');
      return;
    }
    await deleteUser({ id: record.userId }, reload);
  }
  /**
   * 批量删除事件
   */
  async function batchHandleDelete() {
    let hasAdmin = unref(selectRows).filter((item) => item.username == 'admin');
    if (unref(hasAdmin).length > 0) {
      createMessage.warning('管理员账号不允许此操作！');
      return;
    }
    await batchDeleteUser({ ids: selectedRowKeys.value }, () => {
      selectedRowKeys.value = [];
      reload();
    });
  }
  /**
   * 成功回调
   */
  function handleSuccess() {
    reload();
  }

  /**
   * 打开修改密码弹窗
   */
  async function handleChangePassword(record) {
    let res = await userList({id: record.userId})
    openPasswordModal(true, { username: res.records[0].username });
  }
  /**
   * 冻结解冻
   */
  async function handleFrozen(record, status) {
    if ('admin' == record.username) {
      createMessage.warning('管理员账号不允许此操作！');
      return;
    }
    await frozenBatch({ ids: record.userId, status: status }, reload);
  }

  /**
   * 批量冻结解冻
   */
  function batchFrozen(status) {
    let hasAdmin = unref(selectRows).filter((item) => item.username == 'admin');
    if (unref(hasAdmin).length > 0) {
      createMessage.warning('管理员账号不允许此操作！');
      return;
    }
    createConfirm({
      iconType: 'warning',
      title: '确认操作',
      content: '是否' + (status == 1 ? '解冻' : '冻结') + '选中账号?',
      onOk: async () => {
        await frozenBatch({ ids: unref(selectedRowKeys).join(','), status: status }, reload);
      },
    });
  }

  /**
   * 操作栏
   */
  function getTableAction(record): ActionItem[] {
    return [
      {
        label: '编辑',
        onClick: handleEdit.bind(null, record),
        // ifShow: () => hasPermission('user:edit'),
      },
    ];
  }
  /**
   * 下拉操作栏
   */
  function getDropDownAction(record): ActionItem[] {
    return [
      {
        label: '详情',
        onClick: handleDetail.bind(null, record),
      },
      {
        label: '密码',
        onClick: handleChangePassword.bind(null, record),
      },
      {
        label: '删除',
        popConfirm: {
          title: '是否确认删除',
          confirm: handleDelete.bind(null, record),
        },
      },
      {
        label: '冻结',
        ifShow: record.status == 1,
        popConfirm: {
          title: '确定冻结吗?',
          confirm: handleFrozen.bind(null, record, 2),
        },
      },
      {
        label: '解冻',
        ifShow: record.status == 2,
        popConfirm: {
          title: '确定解冻吗?',
          confirm: handleFrozen.bind(null, record, 1),
        },
      },
    ];
  }


  // 查询职务信息
  async function queryPositionInfo() {
    const result = await positionList({ pageSize: 99999 });
    if (result) {
      let obj = {};
      result.records.forEach((position) => {
        obj[position['code']] = position['name'];
      });
      positionInfo.value = obj;
    }
  }
  queryPositionInfo();
</script>

<style lang="less" scoped>
  @import './index.less';
</style>