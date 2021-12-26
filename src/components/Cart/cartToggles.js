const toggleCartPopupBG = (e) => {
  const fadedBg = document.querySelector('.faded-bg');
  const cartPopup = document.querySelector('.cart-popup-container');
  if (e.nativeEvent.path[0] === fadedBg) {
    fadedBg.classList.toggle('faded-bg-active');
    cartPopup.classList.toggle('cart-popup-active');
  }
};

const toggleCartPopup = () => {
  const fadedBg = document.querySelector('.faded-bg');
  const cartPopup = document.querySelector('.cart-popup-container');
  fadedBg.classList.toggle('faded-bg-active');
  cartPopup.classList.toggle('cart-popup-active');
};

export { toggleCartPopup, toggleCartPopupBG };
