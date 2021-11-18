import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';
import DrawerInitiator from '../utils/drawer-initiator';
import SkipToContentInitiator from '../utils/skip-to-content-initiator';

class App {
  constructor({
    button,
    drawer,
    content,
  },
  {
    skipButton,
    skipTarget,
  }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;

    this._skipButton = skipButton;
    this._skipTarget = skipTarget;

    this._initialAppShell();
  }

  async _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });

    SkipToContentInitiator.init({
      skipButton: this._skipButton,
      skipTarget: this._skipTarget,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
