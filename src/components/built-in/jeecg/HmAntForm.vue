<template>
    <a-form
        :form="form"
        :hideRequiredMark="hideRequiredMark"
        :labelAlign="labelAlign"
        :layout="layout"
        :labelCol="labelCol"
        :wrapperCol="wrapperCol"
        :selfUpdate="selfUpdate"
        :colon="colon"
        :extra="extra"
        :hasFeedback="hasFeedback"
        :help="help"
        :htmlFor="htmlFor"
        :label="label"
        :required="required"
        :validateStatus="validateStatus"
        :len="len"
        :max="max"
        :message="message"
        :min="min"
        :pattern="pattern"
        :transform="transform"
        :type="type"
        :validator="validator"
        :whitespace="whitespace"
        @submit="onSubmit"
    >
    <slot />
        <!-- 额外的提示信息 -->
        <slot name="extra"></slot>
        <!-- 提示信息 -->
        <slot name="help"></slot>
        <!-- label 标签的文本 -->
        <slot name="label"></slot>
    </a-form>
</template>

<script>

export default {
    name: "HmAntForm",
    props: {
        /**
         * form对象
         */
        form: {
            type: Object,
        },
        /**
         * 隐藏必选标记
         */
        hideRequiredMark: {
            type: Boolean,
        },
        /**
         * label 标签的文本对齐方式
         */
        labelAlign:{
            type: String,
            default: 'right',
        },
        /**
         * 表单布局
         */
        layout: {
            type: String,
            default: 'horizontal',
        },
        /**
         * label 标签布局
         */
        labelCol:{
            type: Object,
        },
        /**
         * 输入控件设置布局样式
         */
        wrapperCol:{
            type: Object,
        },
        /**
         * 自定义字段更新逻辑
         */
        selfUpdate:{
            type: Boolean,
        },
        /**
         * Form.Item 的 colon 的默认值
         */
        colon:{
            type: Boolean,
            default: true,
        },
        /**
         * 额外的提示信息
         */
        extra:{
            type: String,//string|slot
        },
        /**
         * 展示校验状态图标
         */
        hasFeedback:{
            type: Boolean,
        },
        /**
         * 提示信息
         */
        help:{
            type: String,//string|slot
        },
        /**
         * 设置子元素 label htmlFor 属性
         */
        htmlFor:{
            type: String,
        },
        /**
         * label 标签的文本
         */
        label:{
            type: String,//string|slot
        },
        /**
         * 是否必填
         */
        required:{
            type: Boolean,
        },
        /**
         * 校验状态
         */
        validateStatus:{
            type: String,
        },
        /**
         * 字段长度
         */
        len:{
            type: Number,
        },
        /**
         * 最大长度
         */
        max:{
            type: Number,
        },
        /**
         * 校验文案
         */
        message:{
            type: String,
        },
        /**
         * 最小长度
         */
        min:{
            type: Number,
        },
        /**
         * 正则表达式校验
         */
        pattern:{
            type: RegExp,
        },
        /**
         * 校验前转换字段值
         */
        transform:{
            type: Function,
        },
        /**
         * 内建校验类型
         */
        type:{
            type: String,
            default: "string",
        },
        /**
         * 自定义校验
         */
        validator:{
            type: Function,
        },
        /**
         * 必选时，空格是否会被视为错误
         */
        whitespace:{
            type: Boolean,
        }
    },
    data() {
        return {};
    },
    methods: {
        onSubmit: function (e) {
            this.$emit("submit", e);
        },
    },
}
</script>

<style scoped>

</style>