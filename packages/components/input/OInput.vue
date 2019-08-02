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
export default {
  name: "OInput",
  data () {
    return {
      focused: false,
    }
  },
  mounted(){
    console.log(this.$attrs); 
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
        focused:!!this.focused 
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
  &>div{
    display: inline-block;
  }
  input{
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
  input.focused{
    border: 1px solid $oov-focused-color;
    outline: none;
  }
  input.disabled{
    color: #b1b1b1;
    background-color: #f7f7f7;
    border-color: #ececec;
    cursor: not-allowed;
  }
}

</style>


