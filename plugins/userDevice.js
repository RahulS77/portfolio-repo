export default ({ app, store }, inject) => {
  window.addEventListener('resize', function () {
    console.log(window.innerWidth);
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    const isMobile = (window.innerWidth < 1280);
    if (isMobile !== store.getters.isMobile) {
      store.dispatch('setDeviceType', isMobile);
    }
  });
  const event = new Event('resize');
  window.dispatchEvent(event);
};
