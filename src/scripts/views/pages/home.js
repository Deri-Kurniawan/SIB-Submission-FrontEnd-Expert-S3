import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <h2 class="section-title" tabindex="0" id="pageTitle">Explore Restaurant</h2>
      <div class="restaurant-list"></div>
    `;
  },

  async afterRender() {
    const { restaurants } = await RestaurantSource.restaurantList();
    const restaurantElement = document.querySelector('.restaurant-list');

    restaurants.forEach((restaurant) => {
      restaurantElement.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
