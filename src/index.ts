const tick = () => {
  window.requestAnimationFrame(tick);
};

tick();
