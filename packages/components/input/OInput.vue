<template>
  <div :class="wrapperClasses">
    <div class="input-prepend"></div>
    <div class="input-body">
      <component
        :is="type === 'textarea' ? type : 'input'"
        ref="input"
        class="input"
        :class="classes"
        :type="type"
        :value.prop="valueModel"
        :placeholder="placeholder"
        v-bind="$attrs"
        v-on="$listeners"
        @input="inputChange($event.currentTarget.value)"
        @focus="onFocus"
        @blur="onBlur"
      />
    </div>
    <div class="input-append"></div>
  </div>
</template>
<script>
import { inputClassPrefix, inputClassCustom } from "../../config/index";
import { calcTextareaHeight } from '../../utils/index';

export default {
  name: "OInput",
  data () {
    return {
      focused: false,
    }
  },
  mounted(){
    console.log(this.$attrs); 
    //自动计算高度
    if(this.type=='textarea'&&this.$attrs.hasOwnProperty('autosize')){
      let input = this.$refs.input;
      calcTextareaHeight(input);
    }
  },
  props:{
    placeholder: {
      type: String,
      default: undefined,
    },
    type: {
      type: String,
      default: 'text'
    },
    value: {}
  },
  model:{
    event:'update'
  },
  computed: {
    wrapperClasses(){
      return [ inputClassCustom,`${inputClassPrefix}-wrapper` ]
    },
    classes() {
      return {
        [`input-${this.type}`]:!!this.type,
        disabled:!!this.$attrs.hasOwnProperty("disabled"),
        readonly:!!this.$attrs.hasOwnProperty("readonly"),
        focused:!!this.focused && !this.$attrs.hasOwnProperty("readonly")
      }
    },
    valueModel:{
      get(){ return this.value },
      set(val){this.$emit('update',val)}
    }
  },
  methods:{
    focus () {
      const input = this.$refs.input;
      input.focus();
    },
    onBlur (event) {
      this.focused = false
      this.$emit('blur', event)
    },
    onFocus (event) {
      this.focused = true
      this.$emit('focus', event)
    },
    inputChange(val){
      // emit update
      this.valueModel = val;
      //emit OInput’s @input（parent scope）,can ignore
      this.$emit('input');
      this.$emit('change');
    }
  }
};
</script>
<style lang="scss">
@import '../../styles/index.scss';
.oov-input-wrapper{
  display: inline-block;
  vertical-align: top;
  &>div{
    display: inline-block;
    vertical-align: top;
  }
  input,textarea{
    width: 100%;
    height: 32px;
    font-size: 14px;
    line-height: 1.5;
    list-style: none;
    position: relative;
    display: inline-block;
    padding: 14px 11px;
    color: rgba(0, 0, 0, 0.65);
    background-color: #fff;
    background-image: none;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    transition: all 0.3s;
    outline: none;
  }
  textarea{
    padding:5px;
    height:auto;
  }
  input.focused,textarea.focused{
    border: 1px solid $oov-focused-color;
    outline: none;
  }
  input.disabled,textarea.disabled{
    color: #b1b1b1;
    background-color: #f7f7f7;
    border-color: #ececec;
    cursor: not-allowed;
  }
  input.readonly,textarea.readonly{
    color: #b1b1b1;
    background-color: #f7f7f7;
    border-color: #ececec;
  }
}

</style>


