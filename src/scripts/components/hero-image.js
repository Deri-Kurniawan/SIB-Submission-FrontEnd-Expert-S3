class HeroImage extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <style>
      .hero {
        background-image: url(./images/heros/hero-image_2.jpg);
      }

      @media only screen and (max-width: 480px) {
        .hero {
          background-image: url(./images/heros/hero-image_2-small.jpg);
        }
      }

      @media only screen and (max-width: 800px) {
        .hero {
          background-image: url(./images/heros/hero-image_2-small.jpg);
        }
      }
    </style>
    <div class="hero">
      <h2 class="hero-title" tabindex="0">DZRESTO</h2>
      <p class="hero-description" tabindex="0">Explore Your Favorite Restaurant</p>
    </div>
    `;
  }
}

customElements.define('hero-image', HeroImage);
