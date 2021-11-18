class FooterCopyright extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    const getFullYear = new Date().getFullYear();

    this.innerHTML = `
      <p>Copyright &copy; ${getFullYear} - <strong>DZRESTO</strong></p>
    `;
  }
}

customElements.define('footer-copyright', FooterCopyright);
