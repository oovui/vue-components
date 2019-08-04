const Utils = {
  // 判断参数是否是其中之一
  oneOf (value, validList) {
    for (let i = 0; i < validList.length; i++) {
        if (value === validList[i]) {
            return true;
        }
    }
    return false;
  }

}

//http://caibaojian.com/textarea-autoheight.html
export function calcTextareaHeight(el){
  let timer = null;
  //由于ie8有溢出堆栈问题，故调整了这里
  let setStyle = function(el, auto) {
      if (auto) el.style.height = 'auto';
      el.style.height = el.scrollHeight + 'px';
  }
  let delayedResize = function(el) {
      if (timer) {
          clearTimeout(timer);
          timer = null;
      }
      timer = setTimeout(function() {
          setStyle(el)
      }, 200);
  }
  if (el.addEventListener) {
      el.addEventListener('input', function() {
          setStyle(el, 1);
      }, false);
      setStyle(el)
  } else if (el.attachEvent) {
      el.attachEvent('onpropertychange', function() {
          setStyle(el)
      })
      setStyle(el)
  }
  if (window.VBArray && window.addEventListener) { //IE9
      el.attachEvent("onkeydown", function() {
          let key = window.event.keyCode;
          if (key == 8 || key == 46) delayedResize(el);

      });
      el.attachEvent("oncut", function() {
          delayedResize(el);
      }); //处理粘贴
  }
}

export const oneOf = Utils.oneOf;
export default Utils