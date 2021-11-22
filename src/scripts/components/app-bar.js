class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <h1 class="brand-logo" aria-label="brand logo DZRESTO" tabindex="0">DZRESTO</h1>

    <button type="button" id="menu-toggle" aria-label="drawer menu">
      <i class="icon fas fa-bars fa-fw"></i>
    </button>

    <nav>
      <ul class="nav-menu">
        <li class="menu-item"><a href="https://deri-kurniawan.github.io/SIB-Submission-FrontEnd-Expert-S3/#/">Home</a></li>
        <li class="menu-item"><a href="https://deri-kurniawan.github.io/SIB-Submission-FrontEnd-Expert-S3/#/favorite">Favorite</a></li>
        <li class="menu-item">
          <a href="https://github.com/deri-kurniawan" target="_blank" rel="noopener">About Us</a>
        </li>
      </ul>
    </nav>
    `;
  }
}

customElements.define('app-bar', AppBar);
