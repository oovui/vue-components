<template>
  <i class="oov-cssicon oov-cssicon-custom" :class="classes" :style="styles"></i>
</template>
<script>
export default {
	name: 'OCssicon',
	data() {
		return {
			styles: {
				color: this.color,
				'font-size': this.size + 'px'
			}
		}
	},
	props: {
		type: {
			type: String,
			required: true
		},
		size: {
			type: [String, Number],
			default: 14
		},
		color: {
			type: String
		}
	},
	computed: {
		classes() {
			return this.type
		}
	}
}
</script>
<style lang="scss">
.oov-cssicon {
	display: inline-block;
	outline: none;
	height: 1em;
	width: 1em;
	font-size: 14px;
	font-weight: 600;
	text-indent: -9999px;
	vertical-align: text-top;
	position: relative;
	&:hover {
		transform: scale(1.1);
	}
	&::before,
	&:after {
		content: '';
		box-sizing: inherit;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}

	&.close::before {
		width: 90%;
		border-top: 1px solid;
		transform: translate(-50%, -50%) rotate(45deg);
	}
	&.close::after {
		height: 90%;
		border-left: 1px solid;
		transform: translate(-50%, -50%) rotate(45deg);
	}
}
</style>