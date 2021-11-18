class ErrorMessage extends HTMLElement {
  set message(data) {
    this._message = data;
    this.render();
  }

  render() {
    this.innerHTML = `
    <style>
    .alert-error {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 4em;
      margin-bottom: 2em;
      background: rgb(250, 55, 55);
      color: white;
    }
    </style>
    
    <div class="alert-error">${this._message}</div>
    `;
  }
}

customElements.define('error-message', ErrorMessage);
