<template>
    <a-table
            ref="table"
            :columns="cColumns"
            row-key="id"
            :scroll="scroll"
            :data-source="cData"
            :bordered="bordered"
            :row-class-name="
          rowClassName.class ||
          function () {
            return null;
          }
        "
            :row-selection="rowSelectFlag ? rowSelection : null"
            :pagination="paginationHidden ? false : cPagination"
            @change="onChange"
            :customRow="customRow"
            :size="size"
    >
        <template #actions="{ record ,index}">
          <span
                  v-show="isFlatAction"
                  v-for="action in actions"
                  :key="action.name"
          >
            <template v-if="action.widget === 'edit'">
              <a-button
                      v-if="editableData[index]"
                      :type="action.type || 'primary'"
                      :size="action.size || 'default'"
                      :shape="action.shape"
                      @click="save(index, record, action)"
              >保存
              </a-button>
              <a-button v-if="!editableData[index]"
                        :type="action.type || 'primary'"
                        :size="action.size || 'default'"
                        :shape="action.shape"
                        :disabled="!record?.editable"
                        @click="edit(index, record)">编辑
              </a-button>
            </template>
            <template v-else-if="action.widget === 'delete'">
              <a-popconfirm
                      title="是否删除?"
                      @confirm="onDelete(index, record, action)"
              >
                <a-button :type="action.type || 'primary'"
                          :size="action.size || 'default'"
                          :shape="action.shape">删除
                </a-button>
              </a-popconfirm>
            </template>
            <template v-else>
              <i
                      v-if="action.name.indexOf('fa-') === 0"
                      :class="'action-icon fa ' + action.name"
                      :style="`font-size: ${action.size}px; color: ${
                  action.color || null
                }`"
                      @click="action.callback(record, index)"
              ></i>
              <a-button
                      v-if="action.name.indexOf('fa-') !== 0"
                      class="action-btn"
                      :type="action.type || 'primary'"
                      :size="action.size || 'default'"
                      :shape="action.shape"
                      @click="action.callback(record, index)"
              >
                <template v-if="action.icon" #icon>
                  <i :class="'fa ' + action.icon"/>
                </template>
                {{ action.name }}
              </a-button>
            </template>
          </span>

            <a-dropdown v-if="!isFlatAction">
                <template #overlay>
                    <a-menu>
                        <a-menu-item
                                v-for="action in cActions"
                                :key="action.name"
                                @click="action.callback(record, index)"
                        >{{ action.name }}
                        </a-menu-item
                        >
                    </a-menu>
                </template>
                <a-button>
                    操作
                    <i class="fa fa-angle-down"/>
                </a-button>
            </a-dropdown>
        </template>
        <template v-for="col in dynColumns" #[col.dataIndex]="{ column, text, record, index }">
            <div class="editable-cell">
                <template
                        v-if="(_isBoolean(record?.editable) && record.editable) || record?.editable?.includes(column.dataIndex)">
                    <div
                            v-if="column.editWidget?.type === 'Input' && editableData[index]"
                            class="editable-cell-input-wrapper"
                    >
                        <a-input v-model:value="editableData[index][column.dataIndex]"/>
                    </div>
                    <div v-else-if="column.editWidget?.type === 'Select' &&
                editableData[index]">
                        <a-select v-model:value="editableData[index][column.dataIndex]"
                                  :options="column.editWidget?.options"/>
                    </div>
                    <div v-else-if="column.editWidget?.type === 'DatePicker' &&
                editableData[index]">
                        <a-date-picker v-model:value="editableData[index][column.dataIndex]"
                                       :valueFormat="column.editWidget.valueFormat || 'YYYY-MM-DD'"/>
                    </div>
                    <div v-else-if="column.editWidget?.type === 'DateTimePicker' &&
                editableData[index]">
                        <a-date-picker v-model:value="editableData[index][column.dataIndex]" :showTime="true"
                                       :valueFormat="column.editWidget?.valueFormat || 'YYYY-MM-DD HH:mm:ss'"/>
                    </div>
                    <div v-else class="editable-cell-text-wrapper">
                        {{ text || " " }}
                    </div>
                </template>
                <div v-else class="editable-cell-text-wrapper">
                    {{ text || " " }}
                </div>
            </div>
        </template>
    </a-table>
</template>
<script>
import {cloneDeep, isBoolean} from "lodash";
import HmAntTable from "/@/components/built-in/jeecg/HmAntTable.vue";

export default {
    name: "HmAntEditingTable",
    extends: HmAntTable,
    props: {
        /**
         *  表格大小
         *  @type Enum
         *  @options ['default', 'middle', 'small']
         */
        size: {
            type: String,
            default: "small"
        }
    },
    data() {
        return {
            _excludedSlots: ['actions', 'action', 'operation'],
            editableData: {}
        }
    },
    computed: {
        dynColumns() {
            return this.cColumns.filter(item => !this._excludedSlots.includes(item.dataIndex))
        }
    },
    methods: {
        edit(index, record) {
            this.editableData[index] = cloneDeep(
                this.cData.filter((item, i) => index === i)[0]
            );
            this.$emit("edit", index, record);
        },
        save(index, record, action) {
            Object.assign(
                this.cData.filter((item, i) => index === i)[0],
                this.editableData[index]
            );
            delete this.editableData[index];
            action.callback(record, index);
            this.$emit("save", index, record);
        },
        onDelete(index, record, action) {
            this.cData = this.cData.filter((item, i) => i !== index);
            action.callback(record, index);
            this.$emit("onDelete", index);
        },
        _isBoolean(obj) {
            return isBoolean(obj)
        }
    }
};
</script>
<style scoped>

</style>
