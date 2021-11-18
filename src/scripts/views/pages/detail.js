import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import FavoriteButtonInitiator from '../../utils/favorite-button-initiator';
import CustomerReviewInitiator from '../../utils/customer-review-initiator';

const Detail = {
  async render() {
    return `
    <h2 class="section-title" tabindex="0" id="pageTitle">Detail Restaurant</h2>
    <div class="restaurant-detail"></div>
    <div id="customerReviewContainer"></div>
    <div id="favoriteButtonContainer"></div>
    `;
  },
  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const { restaurant } = await RestaurantSource.restaurantDetail(url.id);
    const restaurantDetailElement = document.querySelector('.restaurant-detail');
    const titlePage = document.getElementById('pageTitle');

    restaurantDetailElement.innerHTML = createRestaurantDetailTemplate(restaurant);

    FavoriteButtonInitiator.init({
      favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
      restaurant,
    });

    CustomerReviewInitiator.init({
      customerReviewContainer: document.querySelector('.customer-reviews'),
      customerFormReviewContainer: document.querySelector('#customerReviewContainer'),
    });

    titlePage.focus();
  },
};

export default Detail;
