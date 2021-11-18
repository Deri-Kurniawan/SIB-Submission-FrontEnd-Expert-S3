class PageLoader extends HTMLElement {
  connectedCallback() {
    this.classList.add('d-none');
    this.render();
  }

  render() {
    this.innerHTML = `
      <style>
        .loader,
        .loader:before,
        .loader:after {
          border-radius: 50%;
          width: 2.5em;
          height: 2.5em;
          -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
          -webkit-animation: loadAnim 1.8s infinite ease-in-out;
          animation: loadAnim 1.8s infinite ease-in-out;
        }
      
        .loader {
          color: #AA8B77;
          font-size: 10px;
          margin: 80px auto;
          position: relative;
          text-indent: -9999em;
          -webkit-transform: translateZ(0);
          -ms-transform: translateZ(0);
          transform: translateZ(0);
          -webkit-animation-delay: -0.16s;
          animation-delay: -0.16s;
        }
      
        .loader:before,
        .loader:after {
          content: '';
          position: absolute;
          top: 0;
        }
      
        .loader:before {
          left: -3.5em;
          -webkit-animation-delay: -0.32s;
          animation-delay: -0.32s;
        }
      
        .loader:after {
          left: 3.5em;
        }
      
        @-webkit-keyframes loadAnim {
        
          0%,
          80%,
          100% {
            box-shadow: 0 2.5em 0 -1.3em;
          }
        
          40% {
            box-shadow: 0 2.5em 0 0;
          }
        }
      
        @keyframes loadAnim {
        
          0%,
          80%,
          100% {
            box-shadow: 0 2.5em 0 -1.3em;
          }
        
          40% {
            box-shadow: 0 2.5em 0 0;
          }
        }
      </style>
      
      <div></div>
    `;
  }
}

customElements.define('page-loader', PageLoader);
