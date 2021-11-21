class HeroImage extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <style>
      @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
        .hero {
          background-image: url(./images/heros/hero-image_2.jpg);
        }
      }
    </style>
    <div class="hero" style="background: url(./images/heros/hero-image_2.jpg)">
      <h2 class="hero-title" tabindex="0">DZRESTO</h2>
      <p class="hero-description" tabindex="0">Explore Your Favorite Restaurant</p>
    </div>
    `;
  }
}

customElements.define('hero-image', HeroImage);
