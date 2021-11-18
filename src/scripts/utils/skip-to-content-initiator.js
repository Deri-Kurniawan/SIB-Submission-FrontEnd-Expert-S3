const SkipToContentInitiator = {
  init({ skipButton, skipTarget }) {
    skipButton.addEventListener('click', (e) => {
      e.preventDefault();
      skipTarget.focus();
    });
  },
};

export default SkipToContentInitiator;
