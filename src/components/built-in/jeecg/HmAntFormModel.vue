<template>
	<a-spin :spinning="confirmLoading">
		<a-form
			ref="form"
			:model="model"
			:rules="rules"
			:validator="validator"
			@validate="onValidate"
			@finish="onFinish"
		>
		<a-row>
			<a-col v-for="formItem in formItems" :key="formItem.name" 
				:span="formItem.span">
				<a-form-item v-if="formItem.type === 'input'" :label="formItem.label" v-bind="validateInfos[formItem.name]">
					<a-input v-model:value="model[formItem.name]" :placeholder="formItem.placeholder"/>
				</a-form-item>

				<a-form-item v-if="formItem.type === 'input-number'" :label="formItem.label" v-bind="validateInfos[formItem.name]">
					<a-input-number v-model:value="model[formItem.name]" :placeholder="formItem.placeholder"/>
				</a-form-item>

				<a-form-item v-if="formItem.type === 'select'" :label="formItem.label" v-bind="validateInfos[formItem.name]">
					<a-select v-model:value="model[formItem.name]" :placeholder="formItem.placeholder">
						<a-select-option v-for="option in formItem.options" :key="option.value" 
							:value="option.value">{{ option.label }}</a-select-option>
					</a-select>
				</a-form-item>

				<a-form-item v-if="formItem.type === 'radio'" :label="formItem.label" v-bind="validateInfos[formItem.name]">
					<a-radio v-model:checked="model[formItem.name]"/>
				</a-form-item>

				<a-form-item v-if="formItem.type === 'date'" :label="formItem.label" v-bind="validateInfos[formItem.name]">
					<a-date-picker v-model:value="model[formItem.name]"/>
				</a-form-item>
			</a-col>
		</a-row>
		<a-row>
			<a-col :span="18" style="text-align: center">
				<span>&nbsp;</span>
			</a-col>
			<a-col :span="2" style="text-align: center">
				<a-button @click="cancel">取消</a-button>
			</a-col>
			<a-col :span="2" style="text-align: center">
				<a-button @click="resetForm">重置</a-button>
			</a-col>
			<a-col :span="2" style="text-align: center">
				<a-button @click="submitForm">提交</a-button>
			</a-col>
		</a-row>
		</a-form>
	</a-spin>
</template>

<script>
import _ from 'lodash';
import moment from 'moment';
import { ref, reactive, watch, computed, onMounted } from 'vue';
import { useForm } from '@ant-design-vue/use';

export default {
	name: "HmAntFormModel",
	props: {
		/**
		 * 表单字段
		 */
		formItems: {
			type: Array,
			default: function() {
				return [{
					type: 'input',
					label: '输入框',
					span: 4,
					placeholder: '请输入文字',
					name: 'item-input',
					default: null
				}, {
					type: 'input-number',
					label: '数字输入框',
					span: 4,
					placeholder: '请输入数字',
					name: 'item-input-number',
					default: 0
				}, {
					type: 'select',
					label: '选择器',
					span: 4,
					placeholder: '请选择',
					name: 'item-select',
					default: 0,
					options: [{
						label: '选项1', value: 0
					}, {
						label: '选项2', value: 1
					}, {
						label: '选项3', value: 2
					}]
				}, {
					type: 'radio',
					label: '单选框',
					span: 4,
					name: 'item-radio',
					default: false
				}, {
					type: 'date',
					label: '日期',
					span: 4,
					placeholder: '请选择',
					name: 'item-date',
					default: moment()
				}]
			}
		},
		/**
		 * 表单验证规则
		 */
		rules: {
			type: Object,
			default: function() {
				return {
					'item-input': [
						{
							required: true,
							message: 'Please input name',
						},
					],
					'item-input-number': [
						{
							required: true,
							message: 'Please input number',
						},
					],
					'item-select': [
						{
							required: true,
							message: 'Please select type'
						},
					],
				}
			}
		},
		/**
		 * 自定义校验
		 */
		validator: {
			type: Function,
		},
	},
	setup(props, { emit }) {
		const confirmLoading = ref(false);
		const model = reactive({});

		const initModel = function(formItems) {
			_.each(formItems, item => {
				model[item.name] = item.default;
			})
		}
		initModel(props.formItems);

		const rulesRef = reactive(props.rules);
		const { resetFields, validate, validateInfos } = useForm(model, rulesRef);
		const submitForm = function (e) {
			console.log(`表单内容：`, model)
			emit("submit", e);

			validate()
				.then(() => {
          console.log('开始提交表单');
        })
        .catch(err => {
          console.log('error', err);
        });
		};
		return {
			confirmLoading, model,
			initModel, resetFields, validate, validateInfos, submitForm
		}
	},
	watch: {
		formItems(value) {
			this.initModel(value);
		}
	},
	methods: {
		onValidate: function (e) {
			this.$emit("validate", e);
		},
		onFinish: function (e) {
			this.$emit("finish", e);
		},
		resetForm: function (e) {
			this.$emit("reset", e);
		},
		/**
		 * @TODO: 取消表单填写
		 */
		cancel: function (e) {
			
		}
	},
};
</script>

<style scoped>
.container {
	min-height: 150px;
	height: 100%;
	height: 1px;
}
</style>