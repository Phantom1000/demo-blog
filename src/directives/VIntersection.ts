export default {
  mounted(el: Element, binding: { value: () => Promise<void> }) {
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          binding.value()
        }
      },
      {
        rootMargin: '0px',
        threshold: 1.0
      }
    )

    obs.observe(el)
  },

  name: 'intersection'
}
