<template>
	<li class="oov-select-option oov-select-option-custom"
	 	@click.stop="doSelect"
    @mouseout.stop="blur"
    v-show="!hidden"
    ref="option">
		<slot></slot>
	</li>
</template>
<script>
export default {
	name:'OOption',
	inject: ['select'],
	props:{
		value:{
      required: true
		},
		disabled: {
      type: Boolean,
      default: false
    }
	},
	data () {
    return {
      selected: false,
      index: 0,
      isFocus: false,
      hidden: false,
      searchLabel: ''
    }
	},
	methods: {
    doSelect () {
      console.log(this.value)
    },
    blur () {
      this.isFocus = false
    }
  },
  mounted(){
    console.log(this.select)
  }
}
</script>
<style lang="scss">
  .oov-select-option{
    height: 32px;
    line-height: 32px;
    padding: 0 8px;
    &:hover{
      background-color: #fafafa;
      font-weight: 600;
      color: rgba(0, 0, 0, 0.65);
    }
  }
</style>