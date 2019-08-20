export default {
  bind (el, binding) {
    el._handler = evt => {
      if (!el.contains(evt.target) && binding.expression) {
        binding.value(evt)
      }
    }

    document.addEventListener('click', el._handler)
  },
  unbind (el) {
    document.removeEventListener('click', el._handler)
  }
}