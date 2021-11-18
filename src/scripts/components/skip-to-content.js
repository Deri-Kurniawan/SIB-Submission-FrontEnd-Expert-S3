class skipToContent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = '<button class="skip-link" tabindex="0">Skip to Content</button>';
  }
}

customElements.define('skip-to-content', skipToContent);
