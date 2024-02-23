<template>
	<div class="inline">
		<input :type="password ? 'password' : 'text'" ref="input" @input="handleInput" @blur="handleBlur($event.target.value)" :placeholder="placeholder" />
	</div>
</template>
<script>
export default {
	props: {
		type: {
			type: String,
			requided: true,
		},
		placeholder: {
			type: String,
		},
		password: {
			default: false,
		},
		modelValue: [String, Number],
	},
	data() {
		return {};
	},
	computed: {
		nativeInputValue() {
			return this.modelValue === null || this.modelValue === undefined ? "" : String(this.modelValue);
		},
	},
	methods: {
		handleInput(event) {
			let value = event.target.value;
			this.$emit("update:modelValue", value);
			this.$emit("input", value);
			this.$nextTick(this.setNativeInputValue);
		},
		setNativeInputValue() {
      console.log('i22222nput',this.$refs.input)
			const input = this.$refs.input;
			if (input.value === this.nativeInputValue) return;
			input.value = this.nativeInputValue;
		},

	
	},
	mounted() {
		this.setNativeInputValue();
	},
};
</script>
<style  scoped>
.inline {
	display: inline-block;
	
}
input {
		width: 100%;
		height: 100%;
		padding-left: 5px;
	}
</style>