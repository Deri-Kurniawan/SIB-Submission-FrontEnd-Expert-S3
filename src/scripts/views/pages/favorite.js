import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <h2 class="section-title" tabindex="0" id="pageTitle">Favorite Restaurant</h2>
      <div class="favorite-restaurant"></div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getRestaurants();
    const restaurantFavoriteElement = document.querySelector('.favorite-restaurant');

    if (restaurants.length > 0) {
      restaurants.forEach((restaurant) => {
        restaurantFavoriteElement.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    } else {
      this._renderError();
    }
  },

  _renderError() {
    const mainContent = document.querySelector('#mainContent');
    const errorMessage = document.createElement('error-message');
    errorMessage.message = 'You don\'t have any favorite restaurant!';
    mainContent.append(errorMessage);
  },
};

export default Favorite;
