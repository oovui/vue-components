/*!
 *  @oovui/vue v0.0.2
 * (c) 2018-2019 itshizhan@163.com
 * Released under the MIT License.
 */
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import feather from 'feather-icons';

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
};
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
      "default": '#000000'
    },
    size: {
      type: String,
      "default": '18'
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
  const __vue_scope_id__ = undefined;
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var Icon = normalizeComponent_1(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    undefined,
    undefined
  );

var btnClassPrefix = "oov-btn";

var script$1 = {
  name: "OButton",
  components: {
    Icon: Icon
  },
  props: {
    //button:类型，默认按钮(`default`), 品牌按钮(`primary`),信息按钮(`info`),
    //成功按钮(`success`),警告按钮(`warning`),危险或错误按钮(`danger/error`).
    type: {
      validator: function validator(value) {
        return oneOf(value, ["default", "primary", "info", "success", "warning", "danger", "error"]);
      },
      "default": "default"
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
      "default": "button",
      validator: function validator(value) {
        return oneOf(value, ["button", "submit", "reset"]);
      }
    },
    icon: {
      type: String,
      "default": ''
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

      return [btnClassPrefix, (_ref = {}, _defineProperty(_ref, "".concat(btnClassPrefix, "-").concat(this.type), !!this.type), _defineProperty(_ref, "".concat(btnClassPrefix, "-").concat(this.shape), !!this.shape), _defineProperty(_ref, "".concat(btnClassPrefix, "-").concat(this.size), !!this.size), _defineProperty(_ref, "".concat(btnClassPrefix, "-loading"), this.loading != null && this.loading), _ref)];
    }
  },
  methods: {
    handleClick: function handleClick(event) {
      this.$emit("click", event);
    }
  },
  mounted: function mounted() {
    this.showSlot = this.$slots["default"] !== undefined;
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

var components = {
  Icon: Icon,
  OButton: OButton
};

var install = function install(Vue) {
  Object.keys(components).forEach(function (key) {
    Vue.component(key, components[key]);
  });
};

var plugin = {
  //eslint-disable-next-line no-undef
  version: "0.0.2",
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
