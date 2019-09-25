/*!
 *  @oovui/vue v0.0.4
 * (c) 2018-2019 itshizhan@163.com
 * Released under the MIT License.
 */
import feather from 'feather-icons';

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var defineProperty = _defineProperty;

var Utils = {
  // 判断参数是否是其中之一
  oneOf: function oneOf(value, validList) {
    for (var i = 0; i < validList.length; i++) {
      if (value === validList[i]) {
        return true;
      }
    }

    return false;
  }
}; //http://caibaojian.com/textarea-autoheight.html

function calcTextareaHeight(el) {
  var timer = null; //由于ie8有溢出堆栈问题，故调整了这里

  var setStyle = function setStyle(el, auto) {
    if (auto) el.style.height = 'auto';
    el.style.height = el.scrollHeight + 'px';
  };

  var delayedResize = function delayedResize(el) {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }

    timer = setTimeout(function () {
      setStyle(el);
    }, 200);
  };

  if (el.addEventListener) {
    el.addEventListener('input', function () {
      setStyle(el, 1);
    }, false);
    setStyle(el);
  } else if (el.attachEvent) {
    el.attachEvent('onpropertychange', function () {
      setStyle(el);
    });
    setStyle(el);
  }

  if (window.VBArray && window.addEventListener) {
    //IE9
    el.attachEvent("onkeydown", function () {
      var key = window.event.keyCode;
      if (key == 8 || key == 46) delayedResize(el);
    });
    el.attachEvent("oncut", function () {
      delayedResize(el);
    }); //处理粘贴
  }
}
var oneOf = Utils.oneOf;

//
var script = {
  name: 'Icon',
  data: function data() {
    return {
      styles: {
        display: "inline-block",
        fontStyle: "normal",
        fontVariant: "normal",
        lineHeight: 0,
        speak: "none",
        textAlign: "center",
        textDecoration: "inherit",
        textRendering: "auto",
        textTransform: "none",
        verticalAlign: "baseline"
      }
    };
  },
  computed: {
    iconHtml: function iconHtml() {
      return feather.icons[this.type].toSvg({
        color: this.color,
        width: this.size,
        height: this.size
      });
    }
  },
  props: {
    type: {
      validator: function validator(value) {
        return oneOf(value, ['activity', 'airplay', 'alert-circle', 'alert-octagon', 'alert-triangle', 'align-center', 'align-justify', 'align-left', 'align-right', 'anchor', 'aperture', 'archive', 'arrow-down-circle', 'arrow-down-left', 'arrow-down-right', 'arrow-down', 'arrow-left-circle', 'arrow-left', 'arrow-right-circle', 'arrow-right', 'arrow-up-circle', 'arrow-up-left', 'arrow-up-right', 'arrow-up', 'at-sign', 'award', 'bar-chart-2', 'bar-chart', 'battery-charging', 'battery', 'bell-off', 'bell', 'bluetooth', 'bold', 'book-open', 'book', 'bookmark', 'box', 'briefcase', 'calendar', 'camera-off', 'camera', 'cast', 'check-circle', 'check-square', 'check', 'chevron-down', 'chevron-left', 'chevron-right', 'chevron-up', 'chevrons-down', 'chevrons-left', 'chevrons-right', 'chevrons-up', 'chrome', 'circle', 'clipboard', 'clock', 'cloud-drizzle', 'cloud-lightning', 'cloud-off', 'cloud-rain', 'cloud-snow', 'cloud', 'code', 'codepen', 'command', 'compass', 'copy', 'corner-down-left', 'corner-down-right', 'corner-left-down', 'corner-left-up', 'corner-right-down', 'corner-right-up', 'corner-up-left', 'corner-up-right', 'cpu', 'credit-card', 'crop', 'crosshair', 'database', 'delete', 'disc', 'dollar-sign', 'download-cloud', 'download', 'droplet', 'edit-2', 'edit-3', 'edit', 'external-link', 'eye-off', 'eye', 'facebook', 'fast-forward', 'feather', 'file-minus', 'file-plus', 'file-text', 'file', 'film', 'filter', 'flag', 'folder-minus', 'folder-plus', 'folder', 'gift', 'git-branch', 'git-commit', 'git-merge', 'git-pull-request', 'github', 'gitlab', 'globe', 'grid', 'hard-drive', 'hash', 'headphones', 'heart', 'help-circle', 'home', 'image', 'inbox', 'info', 'instagram', 'italic', 'layers', 'layout', 'life-buoy', 'link-2', 'link', 'linkedin', 'list', 'loader', 'lock', 'log-in', 'log-out', 'mail', 'map-pin', 'map', 'maximize-2', 'maximize', 'menu', 'message-circle', 'message-square', 'mic-off', 'mic', 'minimize-2', 'minimize', 'minus-circle', 'minus-square', 'minus', 'monitor', 'moon', 'more-horizontal', 'more-vertical', 'move', 'music', 'navigation-2', 'navigation', 'octagon', 'package', 'paperclip', 'pause-circle', 'pause', 'percent', 'phone-call', 'phone-forwarded', 'phone-incoming', 'phone-missed', 'phone-off', 'phone-outgoing', 'phone', 'pie-chart', 'play-circle', 'play', 'plus-circle', 'plus-square', 'plus', 'pocket', 'power', 'printer', 'radio', 'refresh-ccw', 'refresh-cw', 'repeat', 'rewind', 'rotate-ccw', 'rotate-cw', 'rss', 'save', 'scissors', 'search', 'send', 'server', 'settings', 'share-2', 'share', 'shield-off', 'shield', 'shopping-bag', 'shopping-cart', 'shuffle', 'sidebar', 'skip-back', 'skip-forward', 'slack', 'slash', 'sliders', 'smartphone', 'speaker', 'square', 'star', 'stop-circle', 'sun', 'sunrise', 'sunset', 'tablet', 'tag', 'target', 'terminal', 'thermometer', 'thumbs-down', 'thumbs-up', 'toggle-left', 'toggle-right', 'trash-2', 'trash', 'trending-down', 'trending-up', 'triangle', 'truck', 'tv', 'twitter', 'type', 'umbrella', 'underline', 'unlock', 'upload-cloud', 'upload', 'user-check', 'user-minus', 'user-plus', 'user-x', 'user', 'users', 'video-off', 'video', 'voicemail', 'volume-1', 'volume-2', 'volume-x', 'volume', 'watch', 'wifi-off', 'wifi', 'wind', 'x-circle', 'x-square', 'x', 'youtube', 'zap-off', 'zap', 'zoom-in', 'zoom-out']);
      },
      required: true
    },
    color: {
      type: String,
      default: '#000000'
    },
    size: {
      type: String,
      default: '18'
    }
  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
/* server only */
, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  if (typeof shadowMode !== 'boolean') {
    createInjectorSSR = createInjector;
    createInjector = shadowMode;
    shadowMode = false;
  } // Vue.extend constructor export interop.


  var options = typeof script === 'function' ? script.options : script; // render functions

  if (template && template.render) {
    options.render = template.render;
    options.staticRenderFns = template.staticRenderFns;
    options._compiled = true; // functional template

    if (isFunctionalTemplate) {
      options.functional = true;
    }
  } // scopedId


  if (scopeId) {
    options._scopeId = scopeId;
  }

  var hook;

  if (moduleIdentifier) {
    // server build
    hook = function hook(context) {
      // 2.3 injection
      context = context || // cached call
      this.$vnode && this.$vnode.ssrContext || // stateful
      this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
      // 2.2 with runInNewContext: true

      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      } // inject component styles


      if (style) {
        style.call(this, createInjectorSSR(context));
      } // register component module identifier for async chunk inference


      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    }; // used by ssr in case component is cached and beforeCreate
    // never gets called


    options._ssrRegister = hook;
  } else if (style) {
    hook = shadowMode ? function () {
      style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
    } : function (context) {
      style.call(this, createInjector(context));
    };
  }

  if (hook) {
    if (options.functional) {
      // register for functional component in vue file
      var originalRender = options.render;

      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }

  return script;
}

var normalizeComponent_1 = normalizeComponent;

/* script */
const __vue_script__ = script;
/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("i", {
    staticClass: "oov-icon",
    style: { styles: _vm.styles },
    domProps: { innerHTML: _vm._s(_vm.iconHtml) }
  })
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  const __vue_inject_styles__ = undefined;
  /* scoped */
  const __vue_scope_id__ = "data-v-dfc7c0fc";
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var OIcon = normalizeComponent_1(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    undefined,
    undefined
  );

var inputClassPrefix = "oov-input";
var inputClassCustom = "oov-input-custom";
var radioClassPrefix = "oov-radio";
var radioClassCustom = "oov-radio-custom";
var checkboxClass = ['oov-checkbox oov-checkbox-custom'];

var script$1 = {
  name: "OButton",
  components: {
    Icon: OIcon
  },
  props: {
    //button:类型，默认按钮(`default`), 品牌按钮(`primary`),信息按钮(`info`),
    //成功按钮(`success`),警告按钮(`warning`),危险或错误按钮(`danger/error`).
    type: {
      validator: function validator(value) {
        return oneOf(value, ["default", "primary", "info", "success", "warning", "danger", "error"]);
      },
      default: "default"
    },
    //button形状：全圆角和直角，默认是4px圆角
    shape: {
      validator: function validator(value) {
        return oneOf(value, ["circle", "rectangle"]);
      }
    },
    //button大小:small,large,full
    size: {
      validator: function validator(value) {
        return oneOf(value, ["small", "large", "full"]);
      }
    },
    loading: Boolean,
    disabled: Boolean,
    htmlType: {
      default: "button",
      validator: function validator(value) {
        return oneOf(value, ["button", "submit", "reset"]);
      }
    },
    icon: {
      type: String,
      default: ''
    }
  },
  data: function data() {
    return {
      showSlot: true
    };
  },
  computed: {
    classes: function classes() {
      var _ref;

      return [btnClassPrefix, (_ref = {}, defineProperty(_ref, "".concat(btnClassPrefix, "-").concat(this.type), !!this.type), defineProperty(_ref, "".concat(btnClassPrefix, "-").concat(this.shape), !!this.shape), defineProperty(_ref, "".concat(btnClassPrefix, "-").concat(this.size), !!this.size), defineProperty(_ref, "".concat(btnClassPrefix, "-loading"), this.loading != null && this.loading), _ref)];
    }
  },
  methods: {
    handleClick: function handleClick(event) {
      this.$emit("click", event);
    }
  },
  mounted: function mounted() {
    this.showSlot = this.$slots.default !== undefined;
    /**
     * vm.$slots: 用来访问被 slot 分发的内容,每个具名 slot 有其相应的属性（例如：slot="foo" 中的内容将会在 vm.$slots.foo 中被找到）。
     * default 属性包括了所有没有被包含在具名 slot 中的节点。
     *****************/
  }
};

/* script */
const __vue_script__$1 = script$1;
/* template */
var __vue_render__$1 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "button",
    {
      class: _vm.classes,
      attrs: { type: _vm.htmlType, disabled: _vm.disabled },
      on: { click: _vm.handleClick }
    },
    [
      _vm.loading
        ? _c("Icon", {
            staticClass: "oov-load-loop",
            attrs: { type: "circle" }
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.icon && !_vm.loading
        ? _c("Icon", { attrs: { type: _vm.icon } })
        : _vm._e(),
      _vm._v(" "),
      _vm.showSlot
        ? _c("span", { ref: "slot" }, [_vm._t("default")], 2)
        : _vm._e()
    ],
    1
  )
};
var __vue_staticRenderFns__$1 = [];
__vue_render__$1._withStripped = true;

  /* style */
  const __vue_inject_styles__$1 = undefined;
  /* scoped */
  const __vue_scope_id__$1 = undefined;
  /* module identifier */
  const __vue_module_identifier__$1 = undefined;
  /* functional template */
  const __vue_is_functional_template__$1 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var OButton = normalizeComponent_1(
    { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
    __vue_inject_styles__$1,
    __vue_script__$1,
    __vue_scope_id__$1,
    __vue_is_functional_template__$1,
    __vue_module_identifier__$1,
    undefined,
    undefined
  );

var script$2 = {
  name: "OInput",
  data: function data() {
    return {
      focused: false
    };
  },
  mounted: function mounted() {
    console.log(this.$attrs); //自动计算高度

    if (this.type == 'textarea' && this.$attrs.hasOwnProperty('autosize')) {
      var input = this.$refs.input;
      calcTextareaHeight(input);
    }
  },
  props: {
    placeholder: {
      type: String,
      default: undefined
    },
    type: {
      type: String,
      default: 'text'
    },
    value: {}
  },
  model: {
    event: 'update'
  },
  computed: {
    wrapperClasses: function wrapperClasses() {
      return [inputClassCustom, "".concat(inputClassPrefix, "-wrapper")];
    },
    classes: function classes() {
      var _ref;

      return _ref = {}, defineProperty(_ref, "input-".concat(this.type), !!this.type), defineProperty(_ref, "disabled", !!this.$attrs.hasOwnProperty("disabled")), defineProperty(_ref, "readonly", !!this.$attrs.hasOwnProperty("readonly")), defineProperty(_ref, "focused", !!this.focused && !this.$attrs.hasOwnProperty("readonly")), _ref;
    },
    valueModel: {
      get: function get() {
        return this.value;
      },
      set: function set(val) {
        this.$emit('update', val);
      }
    }
  },
  methods: {
    focus: function focus() {
      var input = this.$refs.input;
      input.focus();
    },
    onBlur: function onBlur(event) {
      this.focused = false;
      this.$emit('blur', event);
    },
    onFocus: function onFocus(event) {
      this.focused = true;
      this.$emit('focus', event);
    },
    inputChange: function inputChange(val) {
      // emit update
      this.valueModel = val; //emit OInput’s @input（parent scope）,can ignore

      this.$emit('input');
      this.$emit('change');
    }
  }
};

/* script */
const __vue_script__$2 = script$2;
/* template */
var __vue_render__$2 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { class: _vm.wrapperClasses }, [
    _c("div", { staticClass: "input-prepend" }),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "input-body" },
      [
        _c(
          _vm.type === "textarea" ? _vm.type : "input",
          _vm._g(
            _vm._b(
              {
                ref: "input",
                tag: "component",
                staticClass: "input",
                class: _vm.classes,
                attrs: { type: _vm.type, placeholder: _vm.placeholder },
                domProps: { value: _vm.valueModel },
                on: {
                  input: function($event) {
                    return _vm.inputChange($event.currentTarget.value)
                  },
                  focus: _vm.onFocus,
                  blur: _vm.onBlur
                }
              },
              "component",
              _vm.$attrs,
              false
            ),
            _vm.$listeners
          )
        )
      ],
      1
    ),
    _vm._v(" "),
    _c("div", { staticClass: "input-append" })
  ])
};
var __vue_staticRenderFns__$2 = [];
__vue_render__$2._withStripped = true;

  /* style */
  const __vue_inject_styles__$2 = undefined;
  /* scoped */
  const __vue_scope_id__$2 = undefined;
  /* module identifier */
  const __vue_module_identifier__$2 = undefined;
  /* functional template */
  const __vue_is_functional_template__$2 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var OInput = normalizeComponent_1(
    { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
    __vue_inject_styles__$2,
    __vue_script__$2,
    __vue_scope_id__$2,
    __vue_is_functional_template__$2,
    __vue_module_identifier__$2,
    undefined,
    undefined
  );

//
var script$3 = {
  name: 'ORadio',
  props: {
    value: {
      type: [String, Number]
    },
    modelValue: {
      default: ''
    }
  },
  model: {
    prop: 'modelValue',
    event: 'update'
  },
  computed: {
    isInGroup: function isInGroup() {
      return (this.$parent && this.$parent.$options.customOption) === 'oovRadioGroup';
    },
    classes: function classes() {
      return [radioClassPrefix, radioClassCustom];
    },
    radioInputWrapperClasses: function radioInputWrapperClasses() {
      return {
        disabled: !!this.$attrs.hasOwnProperty('disabled')
      };
    },
    checked: function checked() {
      var modelValue = this.isInGroup ? this.$parent.value : this.modelValue;
      return this.value == modelValue; // return this.modelValue == this.value;
    }
  },
  methods: {
    change: function change(e) {
      var isInGroup = (this.$parent && this.$parent.$options.customOption) === 'oovRadioGroup';

      if (isInGroup) {
        // 如果在o-radio-group 中使用
        this.$parent.$emit('select', this.value);
      } else {
        // console.log(this.value===e.target.value); // true
        this.$emit('update', this.value);
      }
    }
  }
};

/* script */
const __vue_script__$3 = script$3;

/* template */
var __vue_render__$3 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("label", { class: _vm.classes }, [
    _c(
      "span",
      {
        staticClass: "radio-input-wrapper",
        class: _vm.radioInputWrapperClasses
      },
      [
        _c("span", { staticClass: "radio-icon" }),
        _vm._v(" "),
        _c(
          "input",
          _vm._b(
            {
              staticClass: "radio-input",
              attrs: { type: "radio" },
              domProps: { value: _vm.value, checked: _vm.checked },
              on: { change: _vm.change }
            },
            "input",
            _vm.$attrs,
            false
          )
        )
      ]
    ),
    _vm._v(" "),
    _c("span", { staticClass: "radio-label" }, [_vm._t("default")], 2)
  ])
};
var __vue_staticRenderFns__$3 = [];
__vue_render__$3._withStripped = true;

  /* style */
  const __vue_inject_styles__$3 = undefined;
  /* scoped */
  const __vue_scope_id__$3 = undefined;
  /* module identifier */
  const __vue_module_identifier__$3 = undefined;
  /* functional template */
  const __vue_is_functional_template__$3 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var ORadio = normalizeComponent_1(
    { render: __vue_render__$3, staticRenderFns: __vue_staticRenderFns__$3 },
    __vue_inject_styles__$3,
    __vue_script__$3,
    __vue_scope_id__$3,
    __vue_is_functional_template__$3,
    __vue_module_identifier__$3,
    undefined,
    undefined
  );

//
//
//
//
//
var script$4 = {
  name: 'ORadioGroup',
  customOption: 'oovRadioGroup',
  props: {
    value: {}
  },
  model: {
    prop: 'value',
    event: 'select'
  },
  watch: {
    value: function value(newVal) {
      this.$emit('change', newVal);
    }
  }
};

/* script */
const __vue_script__$4 = script$4;

/* template */
var __vue_render__$4 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { staticClass: "oov-radio-group oov-radio-group-custom" },
    [_vm._t("default")],
    2
  )
};
var __vue_staticRenderFns__$4 = [];
__vue_render__$4._withStripped = true;

  /* style */
  const __vue_inject_styles__$4 = undefined;
  /* scoped */
  const __vue_scope_id__$4 = undefined;
  /* module identifier */
  const __vue_module_identifier__$4 = undefined;
  /* functional template */
  const __vue_is_functional_template__$4 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var ORadioGroup = normalizeComponent_1(
    { render: __vue_render__$4, staticRenderFns: __vue_staticRenderFns__$4 },
    __vue_inject_styles__$4,
    __vue_script__$4,
    __vue_scope_id__$4,
    __vue_is_functional_template__$4,
    __vue_module_identifier__$4,
    undefined,
    undefined
  );

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

var arrayWithoutHoles = _arrayWithoutHoles;

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

var iterableToArray = _iterableToArray;

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

var nonIterableSpread = _nonIterableSpread;

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

var toConsumableArray = _toConsumableArray;

var script$5 = {
  name: 'OCheckbox',
  props: {
    modelValue: {
      type: [Boolean, Array],
      default: false
    },
    value: {},
    trueValue: {
      default: true
    },
    falseValue: {
      default: false
    }
  },
  model: {
    prop: 'modelValue',
    event: 'update'
  },
  computed: {
    isInGroup: function isInGroup() {
      return (this.$parent && this.$parent.$options.customOption) === 'oovCheckboxGroup';
    },
    classes: function classes() {
      return toConsumableArray(checkboxClass);
    },
    checkboxInputWrapperClasses: function checkboxInputWrapperClasses() {
      return {
        disabled: !!this.$attrs.hasOwnProperty('disabled')
      };
    },
    checked: function checked() {
      //单个checkbox，v-model 默认为true 或false，多个checkbox v-model 为 Array
      if (this.isInGroup) {
        return this.$parent.value.includes(this.value);
      } else {
        if (this.modelValue instanceof Array) {
          return this.modelValue.includes(this.value);
        } else {
          return this.modelValue === this.trueValue;
        }
      }
    }
  },
  methods: {
    change: function change(e) {
      var isChecked = e.target.checked;

      if (this.isInGroup) {
        var newValue = toConsumableArray(this.$parent.value);

        if (isChecked) {
          newValue.push(this.value);
        } else {
          //delete and return, will change newValue
          newValue.splice(newValue.indexOf(this.value), 1);
        }

        this.$parent.$emit('update', newValue);
      } else {
        if (this.modelValue instanceof Array) {
          //copy array
          var _newValue = toConsumableArray(this.modelValue);

          if (isChecked) {
            _newValue.push(this.value);
          } else {
            //delete and return, will change newValue
            _newValue.splice(_newValue.indexOf(this.value), 1);
          }

          this.$emit('update', _newValue);
        } else {
          this.$emit('update', isChecked ? this.trueValue : this.falseValue);
        }
      }
    }
  }
};

/* script */
const __vue_script__$5 = script$5;

/* template */
var __vue_render__$5 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("label", { class: _vm.classes }, [
    _c(
      "span",
      {
        staticClass: "checkbox-input-wrapper",
        class: _vm.checkboxInputWrapperClasses
      },
      [
        _c("span", { staticClass: "checkbox-icon" }),
        _vm._v(" "),
        _c(
          "input",
          _vm._b(
            {
              staticClass: "checkbox-input",
              attrs: { type: "checkbox" },
              domProps: { value: _vm.value, checked: _vm.checked },
              on: { change: _vm.change }
            },
            "input",
            _vm.$attrs,
            false
          )
        )
      ]
    ),
    _vm._v(" "),
    _c("span", { staticClass: "checkbox-label" }, [_vm._t("default")], 2)
  ])
};
var __vue_staticRenderFns__$5 = [];
__vue_render__$5._withStripped = true;

  /* style */
  const __vue_inject_styles__$5 = undefined;
  /* scoped */
  const __vue_scope_id__$5 = undefined;
  /* module identifier */
  const __vue_module_identifier__$5 = undefined;
  /* functional template */
  const __vue_is_functional_template__$5 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var OCheckbox = normalizeComponent_1(
    { render: __vue_render__$5, staticRenderFns: __vue_staticRenderFns__$5 },
    __vue_inject_styles__$5,
    __vue_script__$5,
    __vue_scope_id__$5,
    __vue_is_functional_template__$5,
    __vue_module_identifier__$5,
    undefined,
    undefined
  );

//
//
//
//
//
var script$6 = {
  name: 'OCheckboxGroup',
  customOption: 'oovCheckboxGroup',
  props: {
    value: {}
  },
  model: {
    prop: 'value',
    event: 'update'
  },
  watch: {
    value: function value(newVal) {
      this.$emit('change', newVal);
    }
  }
};

/* script */
const __vue_script__$6 = script$6;

/* template */
var __vue_render__$6 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { staticClass: "oov-checkbox-group oov-checkbox-group-custom" },
    [_vm._t("default")],
    2
  )
};
var __vue_staticRenderFns__$6 = [];
__vue_render__$6._withStripped = true;

  /* style */
  const __vue_inject_styles__$6 = undefined;
  /* scoped */
  const __vue_scope_id__$6 = undefined;
  /* module identifier */
  const __vue_module_identifier__$6 = undefined;
  /* functional template */
  const __vue_is_functional_template__$6 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var OCheckboxGroup = normalizeComponent_1(
    { render: __vue_render__$6, staticRenderFns: __vue_staticRenderFns__$6 },
    __vue_inject_styles__$6,
    __vue_script__$6,
    __vue_scope_id__$6,
    __vue_is_functional_template__$6,
    __vue_module_identifier__$6,
    undefined,
    undefined
  );

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$7 = {
  name: 'OSelect',
  props: {
    width: {
      type: [Number, String]
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {},
    placeholder: {
      type: String
    },
    multiple: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
    },
    filterable: {
      type: Boolean,
      default: false
    },
    filterTip: {
      type: String,
      default: '无匹配数据'
    }
  },
  model: {
    prop: 'value',
    event: 'change'
  },
  provide: function provide() {
    return {
      'select': this,
      'selectedObject': this.selectedObject
    };
  },
  data: function data() {
    return {
      showOptions: false,
      // selectedObject:this.multiple?[{value:'',label:''}]:{value:'',label:''}        
      selectedObject: this.multiple ? [] : {},
      selectHeight: 34
    };
  },
  computed: {
    selectClasses: function selectClasses() {
      return this.multiple ? 'multiple' : 'single';
    },
    singleSelectedValue: function singleSelectedValue() {
      return this.selectedObject;
    },
    multipleSelectedValue: function multipleSelectedValue() {
      //[{value:'',label:''}]
      return this.selectedObject;
    }
  },
  methods: {
    selectClick: function selectClick() {
      if (this.multiple) {
        var selectSection = this.$refs.selectSection;
        this.selectHeight = Number(selectSection.offsetHeight) + 4;
      }

      if (this.disabled) return; // if(this.showOptions) return

      this.showOptions = !this.showOptions;
    },
    closeSelect: function closeSelect() {
      this.showOptions = false;
    },
    selectModelChangeHandle: function selectModelChangeHandle() {
      console.log("selectModelChangeHandle");
    },
    //删除多选的选项
    deleteItem: function deleteItem(e, tagData) {
      console.log("deleteItem", tagData);
      console.log(this.selectedObject); //update selectedObject

      for (var i = 0; i < this.selectedObject.length; i++) {
        if (this.selectedObject[i].value === tagData.value) {
          this.selectedObject.splice(i, 1);
          break;
        }
      } //update modelValue/v-model


      for (var _i = 0; _i < this.value.length; _i++) {
        if (this.value[_i] == tagData.value) {
          this.value.splice(_i, 1);
          this.$emit('change', this.value);
          break;
        }
      }

      this.showOptions = false;
    }
  },
  mounted: function mounted() {
    console.log("select mounted");
    console.log("this multiple:", this.multiple);
    console.log("v-model:", this.value);
    console.log(this.selectedObject);
  }
};

/* script */
const __vue_script__$7 = script$7;
/* template */
var __vue_render__$7 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      directives: [
        {
          name: "clickoutside",
          rawName: "v-clickoutside",
          value: _vm.closeSelect,
          expression: "closeSelect"
        }
      ],
      staticClass: "oov-select oov-select-custom",
      class: _vm.selectClasses,
      style: "width:" + _vm.width + "px",
      on: {
        click: function($event) {
          $event.stopPropagation();
          return _vm.selectClick($event)
        }
      }
    },
    [
      !this.multiple
        ? _c(
            "div",
            { ref: "selectSection", staticClass: "select-section single" },
            [
              _c(
                "span",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.placeholder && !_vm.singleSelectedValue,
                      expression: "placeholder&&!singleSelectedValue"
                    }
                  ]
                },
                [_vm._v(_vm._s(_vm.placeholder))]
              ),
              _vm._v(" "),
              _c(
                "span",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.singleSelectedValue,
                      expression: "singleSelectedValue"
                    }
                  ]
                },
                [_vm._v(_vm._s(_vm.singleSelectedValue))]
              )
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      this.multiple
        ? _c(
            "div",
            { ref: "selectSection", staticClass: "select-section multiple" },
            [
              _c(
                "span",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value:
                        _vm.placeholder &&
                        _vm.multipleSelectedValue.length == 0,
                      expression: "placeholder&&multipleSelectedValue.length==0"
                    }
                  ]
                },
                [_vm._v(_vm._s(_vm.placeholder))]
              ),
              _vm._v(" "),
              _vm._l(_vm.multipleSelectedValue, function(item) {
                return _c(
                  "o-tag",
                  {
                    key: item.value,
                    attrs: { closable: "", value: item.value },
                    on: { close: _vm.deleteItem }
                  },
                  [_vm._v(_vm._s(item.label))]
                )
              })
            ],
            2
          )
        : _vm._e(),
      _vm._v(" "),
      _c("transition", [
        _c(
          "ul",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.showOptions,
                expression: "showOptions"
              }
            ],
            staticClass: "selct-dropdown",
            style: "top:" + _vm.selectHeight + "px"
          },
          [_vm._t("default")],
          2
        )
      ])
    ],
    1
  )
};
var __vue_staticRenderFns__$7 = [];
__vue_render__$7._withStripped = true;

  /* style */
  const __vue_inject_styles__$7 = undefined;
  /* scoped */
  const __vue_scope_id__$7 = undefined;
  /* module identifier */
  const __vue_module_identifier__$7 = undefined;
  /* functional template */
  const __vue_is_functional_template__$7 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var OSelect = normalizeComponent_1(
    { render: __vue_render__$7, staticRenderFns: __vue_staticRenderFns__$7 },
    __vue_inject_styles__$7,
    __vue_script__$7,
    __vue_scope_id__$7,
    __vue_is_functional_template__$7,
    __vue_module_identifier__$7,
    undefined,
    undefined
  );

function ArrayObjectHasValue(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (typeof array[i].value === "undefined") {
      throw new Error("array args invalid");
    }

    if (array[i].value == value) {
      return true;
    }
  }

  return false;
}

function ArrayObjectDeleteByValue(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (typeof array[i].value === "undefined") {
      throw new Error("array args invalid");
    }

    if (array[i].value == value) {
      array.splice(i, 1);
    }
  }

  return array;
}

function ArrayDeleteByValue(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] == value) {
      array.splice(i, 1);
    }
  }

  return array;
}

//
var script$8 = {
  name: 'OOption',
  inject: ['select', 'selectedObject'],
  props: {
    value: {
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      selected: false,
      index: 0,
      isFocus: false,
      hidden: false,
      searchLabel: ''
    };
  },
  methods: {
    doSelect: function doSelect() {
      //console.log(this.value,this.$slots.default[0].text);
      this.select.showOptions = false;
      var modelValue = this.select.value;

      if (modelValue instanceof Array) {
        //多选的情况下，已经存在则删除，否则添加
        var selectedObject = this.selectedObject;

        if (ArrayObjectHasValue(selectedObject, this.value)) {
          selectedObject = ArrayObjectDeleteByValue(selectedObject, this.value);
          modelValue = ArrayDeleteByValue(modelValue, this.value);
        } else {
          selectedObject.push({
            value: this.value,
            label: this.$slots.default[0].text
          });
          modelValue.push(this.value);
        }

        this.select.$emit('change', modelValue);
      } else {
        this.selectedObject.value = this.$slots.default[0].text; //change parent select v-model

        this.select.$emit('change', this.value);
      }
    },
    blur: function blur() {
      this.isFocus = false;
    }
  },
  mounted: function mounted() {
    var modelValue = this.select.value;
    console.log("v-model:", modelValue);

    if (modelValue instanceof Array) {
      console.log("multiple");

      if (modelValue.includes(this.value)) {
        this.selectedObject.push({
          value: this.value,
          label: this.$slots.default[0].text
        });
      }
    } else {
      console.log("single");

      if (modelValue == this.value) {
        this.selectedObject.value = this.$slots.default[0].text;
      }
    }
  }
};

/* script */
const __vue_script__$8 = script$8;
/* template */
var __vue_render__$8 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "li",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: !_vm.hidden,
          expression: "!hidden"
        }
      ],
      ref: "option",
      staticClass: "oov-select-option oov-select-option-custom",
      on: {
        click: function($event) {
          $event.stopPropagation();
          return _vm.doSelect($event)
        },
        mouseout: function($event) {
          $event.stopPropagation();
          return _vm.blur($event)
        }
      }
    },
    [_vm._t("default")],
    2
  )
};
var __vue_staticRenderFns__$8 = [];
__vue_render__$8._withStripped = true;

  /* style */
  const __vue_inject_styles__$8 = undefined;
  /* scoped */
  const __vue_scope_id__$8 = undefined;
  /* module identifier */
  const __vue_module_identifier__$8 = undefined;
  /* functional template */
  const __vue_is_functional_template__$8 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var OOption = normalizeComponent_1(
    { render: __vue_render__$8, staticRenderFns: __vue_staticRenderFns__$8 },
    __vue_inject_styles__$8,
    __vue_script__$8,
    __vue_scope_id__$8,
    __vue_is_functional_template__$8,
    __vue_module_identifier__$8,
    undefined,
    undefined
  );

//
//
//
var script$9 = {
  name: 'OCssicon',
  data: function data() {
    return {
      styles: {
        color: this.color,
        'font-size': this.size + 'px'
      }
    };
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
    classes: function classes() {
      return this.type;
    }
  }
};

/* script */
const __vue_script__$9 = script$9;
/* template */
var __vue_render__$9 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("i", {
    staticClass: "oov-cssicon oov-cssicon-custom",
    class: _vm.classes,
    style: _vm.styles
  })
};
var __vue_staticRenderFns__$9 = [];
__vue_render__$9._withStripped = true;

  /* style */
  const __vue_inject_styles__$9 = undefined;
  /* scoped */
  const __vue_scope_id__$9 = undefined;
  /* module identifier */
  const __vue_module_identifier__$9 = undefined;
  /* functional template */
  const __vue_is_functional_template__$9 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var OCssicon = normalizeComponent_1(
    { render: __vue_render__$9, staticRenderFns: __vue_staticRenderFns__$9 },
    __vue_inject_styles__$9,
    __vue_script__$9,
    __vue_scope_id__$9,
    __vue_is_functional_template__$9,
    __vue_module_identifier__$9,
    undefined,
    undefined
  );

//
//
//
//
//
//
//
//
//
//
var script$a = {
  name: 'OTag',
  props: {
    value: {
      default: ''
    },
    closable: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    closeHandle: function closeHandle(event) {
      this.$emit('close', event, {
        label: this.$slots.default[0].text,
        value: this.value
      });
    }
  }
};

/* script */
const __vue_script__$a = script$a;
/* template */
var __vue_render__$a = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("transition", { attrs: { name: "fade" } }, [
    _c(
      "div",
      { staticClass: "oov-tag oov-tag-custom" },
      [
        _c("span", { staticClass: "tag-text" }, [_vm._t("default")], 2),
        _vm._v(" "),
        _vm.closable
          ? _c("o-cssicon", {
              attrs: { type: "close", size: "10" },
              nativeOn: {
                click: function($event) {
                  $event.stopPropagation();
                  return _vm.closeHandle($event)
                }
              }
            })
          : _vm._e()
      ],
      1
    )
  ])
};
var __vue_staticRenderFns__$a = [];
__vue_render__$a._withStripped = true;

  /* style */
  const __vue_inject_styles__$a = undefined;
  /* scoped */
  const __vue_scope_id__$a = undefined;
  /* module identifier */
  const __vue_module_identifier__$a = undefined;
  /* functional template */
  const __vue_is_functional_template__$a = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var OTag = normalizeComponent_1(
    { render: __vue_render__$a, staticRenderFns: __vue_staticRenderFns__$a },
    __vue_inject_styles__$a,
    __vue_script__$a,
    __vue_scope_id__$a,
    __vue_is_functional_template__$a,
    __vue_module_identifier__$a,
    undefined,
    undefined
  );

//
//
//
//
//
//
//
//
var script$b = {
  name: 'OSwitch',
  model: {
    prop: 'checked'
  },
  props: {
    checked: {
      type: Boolean,
      required: true,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes: function classes() {
      return {
        checked: !!this.checked,
        disabled: !!this.disabled
      };
    }
  },
  methods: {
    toggle: function toggle() {
      var newValue = !this.checked;
      if (this.disabled) return; // v-model event

      this.$emit('input', newValue); //parent event

      this.$emit('change', newValue);
    }
  }
};

/* script */
const __vue_script__$b = script$b;
/* template */
var __vue_render__$b = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "span",
    {
      staticClass: "oov-switch oov-switch-custom",
      class: _vm.classes,
      on: { click: _vm.toggle }
    },
    [
      _c(
        "span",
        { staticClass: "switch-inner" },
        [
          _vm.checked === true ? _vm._t("open") : _vm._e(),
          _vm._v(" "),
          _vm.checked === false ? _vm._t("close") : _vm._e()
        ],
        2
      )
    ]
  )
};
var __vue_staticRenderFns__$b = [];
__vue_render__$b._withStripped = true;

  /* style */
  const __vue_inject_styles__$b = undefined;
  /* scoped */
  const __vue_scope_id__$b = undefined;
  /* module identifier */
  const __vue_module_identifier__$b = undefined;
  /* functional template */
  const __vue_is_functional_template__$b = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var OSwitch = normalizeComponent_1(
    { render: __vue_render__$b, staticRenderFns: __vue_staticRenderFns__$b },
    __vue_inject_styles__$b,
    __vue_script__$b,
    __vue_scope_id__$b,
    __vue_is_functional_template__$b,
    __vue_module_identifier__$b,
    undefined,
    undefined
  );

//
//
//
//
//
//
//
//
//
var script$c = {
  name: 'ORate',
  model: {
    prop: 'stars',
    event: 'select'
  },
  data: function data() {
    return {
      currentValue: this.stars,
      isHalf: this.allowHalf,
      hoverIndex: -1
    };
  },
  props: {
    //selected stars，v-model bind
    stars: {
      type: Number,
      default: 0,
      validator: function validator(val) {
        return val >= 0;
      }
    },
    // all stars count
    count: {
      type: Number,
      default: 5,
      validator: function validator(val) {
        return val >= 1;
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    allowHalf: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: 'star'
    },
    iconSize: {
      type: String,
      default: '18'
    }
  },
  methods: {
    mouseoverHandle: function mouseoverHandle() {},
    mouseleaveHandle: function mouseleaveHandle() {},
    moveStarHandle: function moveStarHandle(index, event) {
      if (this.disabled) return;
      this.hoverIndex = index;

      if (this.allowHalf && event.target.getAttribute('type') === 'half') {
        this.isHalf = true;
      } else {
        this.isHalf = false;
      } // emit hover-change event


      var exactlyHoverIndex = this.isHalf ? index - 0.5 : index;

      if (exactlyHoverIndex !== this.lastHoverIndex) {
        this.$emit('on-hover-change', exactlyHoverIndex);
      }

      this.lastHoverIndex = exactlyHoverIndex;
    },
    rateConfirm: function rateConfirm(index) {
      console.log("rateConfirm");
      if (this.disabled) return;
      this.currentValue = this.isHalf ? index - 0.5 : index;
      console.log("rateConfirm", this.currentValue);
      this.$emit('change', this.currentValue); //v-model

      this.$emit('select', this.currentValue);
    }
  },
  mounted: function mounted() {
    console.log("currentStar:", this.currentValue);
  }
};

/* script */
const __vue_script__$c = script$c;
/* template */
var __vue_render__$c = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "oov-rate oov-rate-custom" }, [
    _c(
      "ul",
      {
        staticClass: "rate-list",
        on: { mouseover: _vm.mouseoverHandle, mouseleave: _vm.mouseleaveHandle }
      },
      _vm._l(_vm.count, function(item, index) {
        return _c(
          "li",
          {
            key: index,
            on: {
              click: function($event) {
                return _vm.rateConfirm(index)
              },
              mousemove: function($event) {
                return _vm.moveStarHandle(index, $event)
              }
            }
          },
          [
            _c("o-icon", {
              attrs: { type: _vm.icon, color: "#f5a623", size: _vm.iconSize }
            })
          ],
          1
        )
      }),
      0
    )
  ])
};
var __vue_staticRenderFns__$c = [];
__vue_render__$c._withStripped = true;

  /* style */
  const __vue_inject_styles__$c = undefined;
  /* scoped */
  const __vue_scope_id__$c = undefined;
  /* module identifier */
  const __vue_module_identifier__$c = undefined;
  /* functional template */
  const __vue_is_functional_template__$c = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var ORate = normalizeComponent_1(
    { render: __vue_render__$c, staticRenderFns: __vue_staticRenderFns__$c },
    __vue_inject_styles__$c,
    __vue_script__$c,
    __vue_scope_id__$c,
    __vue_is_functional_template__$c,
    __vue_module_identifier__$c,
    undefined,
    undefined
  );

//
//
//
//
//
var script$d = {
  name: 'OSlider'
};

/* script */
const __vue_script__$d = script$d;

/* template */
var __vue_render__$d = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", [_vm._v("\n  slider\n")])
};
var __vue_staticRenderFns__$d = [];
__vue_render__$d._withStripped = true;

  /* style */
  const __vue_inject_styles__$d = undefined;
  /* scoped */
  const __vue_scope_id__$d = undefined;
  /* module identifier */
  const __vue_module_identifier__$d = undefined;
  /* functional template */
  const __vue_is_functional_template__$d = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var OSlider = normalizeComponent_1(
    { render: __vue_render__$d, staticRenderFns: __vue_staticRenderFns__$d },
    __vue_inject_styles__$d,
    __vue_script__$d,
    __vue_scope_id__$d,
    __vue_is_functional_template__$d,
    __vue_module_identifier__$d,
    undefined,
    undefined
  );

//
//
//
//
//
var script$e = {
  name: 'OUpload'
};

/* script */
const __vue_script__$e = script$e;

/* template */
var __vue_render__$e = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", [_vm._v("\n  update\n")])
};
var __vue_staticRenderFns__$e = [];
__vue_render__$e._withStripped = true;

  /* style */
  const __vue_inject_styles__$e = undefined;
  /* scoped */
  const __vue_scope_id__$e = undefined;
  /* module identifier */
  const __vue_module_identifier__$e = undefined;
  /* functional template */
  const __vue_is_functional_template__$e = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var OUpload = normalizeComponent_1(
    { render: __vue_render__$e, staticRenderFns: __vue_staticRenderFns__$e },
    __vue_inject_styles__$e,
    __vue_script__$e,
    __vue_scope_id__$e,
    __vue_is_functional_template__$e,
    __vue_module_identifier__$e,
    undefined,
    undefined
  );

var clickoutside = {
  bind: function bind(el, binding) {
    el._handler = function (evt) {
      if (!el.contains(evt.target) && binding.expression) {
        binding.value(evt);
      }
    };

    document.addEventListener('click', el._handler);
  },
  unbind: function unbind(el) {
    document.removeEventListener('click', el._handler);
  }
};

var components = {
  OIcon: OIcon,
  OCssicon: OCssicon,
  OButton: OButton,
  OInput: OInput,
  ORadio: ORadio,
  ORadioGroup: ORadioGroup,
  OCheckbox: OCheckbox,
  OCheckboxGroup: OCheckboxGroup,
  OSelect: OSelect,
  OOption: OOption,
  OTag: OTag,
  OSwitch: OSwitch,
  ORate: ORate,
  OSlider: OSlider,
  OUpload: OUpload
};

var install = function install(Vue) {
  Object.keys(components).forEach(function (key) {
    Vue.component(key, components[key]);
  });
  Vue.directive('clickoutside', clickoutside);
};

var plugin = {
  //eslint-disable-next-line no-undef
  version: "0.0.4",
  install: install
};

var GlobalVue = null;

if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
}

export default plugin;
