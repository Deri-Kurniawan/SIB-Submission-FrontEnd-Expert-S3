import API_ENDPOINT from '../../globals/api-endpoint';
import DetailHelper from '../../utils/detail-helper';

const createRestaurantItemTemplate = (restaurant) => `
<div class="restaurant-item card" tabindex="0">
    <picture class="card-image" tabindex="0">
      <source media="(max-width: 600px)" srcset="${API_ENDPOINT.IMAGE_SMALL(restaurant.pictureId)}" type="image/jpeg">
      <source media="(max-width: 900px)" srcset="${API_ENDPOINT.IMAGE_MEDIUM(restaurant.pictureId)}" type="image/jpeg">
      <img class="card-image" src="${API_ENDPOINT.IMAGE_LARGE(restaurant.pictureId)}" alt="${restaurant.name} restaurant image.">
    </picture>
    <div class="card-body">
        <div class="icons">
            <span aria-label="Rating ${restaurant.rating}."><i class="rating-icon fas fa-star fa-fw"></i> ${restaurant.rating}</span>
            <span aria-label="Location at ${restaurant.city} City."><i class="location-icon fas fa-map-marker-alt fa-fw"></i> ${restaurant.city}</span>
        </div>
        <h3 class="card-title" aria-label="${restaurant.name} Restaurant.">
          <a class="card-link" href="/#/detail/${restaurant.id}" aria-label="See detail about ${restaurant.name} restaurant." tabindex="0">${restaurant.name}</a>
        </h3>
        <p class="card-description" aria-label="${restaurant.name} restaurant description. ${restaurant.description}">${restaurant.description}</p>
    </div>
</div>
`;

const createRestaurantDetailTemplate = (restaurant) => `
  <div class="card-detail">
  <picture aria-label="${restaurant.name} restaurant image." tabindex="0">
    <source media="(max-width: 600px)" srcset="${API_ENDPOINT.IMAGE_SMALL(restaurant.pictureId)}" type="image/jpeg">
    <source media="(max-width: 800px)" srcset="${API_ENDPOINT.IMAGE_MEDIUM(restaurant.pictureId)}" type="image/jpeg">
    <img class="card-detail-image" src="${API_ENDPOINT.IMAGE_LARGE(restaurant.pictureId)}" alt="${restaurant.name} restaurant image.">
  </picture>

    <table>
      <tr tabindex="0">
        <th>Name</th>
        <td>:</td>
        <td>${restaurant.name}</td>
      </tr>
      <tr tabindex="0">
        <th>Address</th>
        <td>:</td>
        <td>
          <i class="location-icon fas fa-map-marker-alt fa-fw"></i>
          ${restaurant.address}
        </td>
      </tr>
      <tr tabindex="0">
        <th>City</th>
        <td>:</td>
        <td>
          <i class="city-icon fas fa-city fa-fw"></i>
          ${restaurant.city}
        </td>
      </tr>
      <tr tabindex="0">
        <th>Description</th>
        <td>:</td>
        <td>${restaurant.description}</td>
      </tr>
      <tr tabindex="0">
        <th>Drinks</th>
        <td>:</td>
        <td>${DetailHelper.eachDrinksMenu(restaurant.menus)}</td>
      </tr>
      <tr tabindex="0">
        <th>Foods</th>
        <td>:</td>
        <td>${DetailHelper.eachFoodsMenu(restaurant.menus)}</td>
      </tr>
    </table>
  </div>

  <h3 class="section-title" tabindex="0">Customer Reviews</h3>
  <div class="customer-reviews" tabindex="0">
    ${DetailHelper.eachCustomersReview(restaurant)}
  </div>
`;

const createFavoriteButtonTemplate = () => `
  <button aria-label="mark this restaurant as favorite" id="favoriteButton" class="favorite-button" title="mark as favorite">
     <i class="far fa-heart fa-fw" aria-hidden="true"></i>
  </button>
`;

const createFavoritedButtonTemplate = () => `
  <button aria-label="remove this restaurant as not favorite" id="favoriteButton" class="favorite-button" title="remove as not favorite">
    <i class="fas fa-heart fa-fw" aria-hidden="true"></i>
  </button>
`;

const createCustomerReviewTemplate = (customerReview) => `
  <div class="customer-review-item" tabindex="0" aria-label="${customerReview.name} memberikan review pada ${customerReview.date}. Dan pesan reviewnya adalah ${customerReview.review}.">
    <span>${customerReview.name} - ${customerReview.date}</span>
    <p>${customerReview.review}</p>
  </div>
`;

const createRestaurantFormReviewTemplate = () => `
  <h3 class="section-title" tabindex="0">Add Review</h3>
  <form id="reviewForm">
    <div class="input-group">
      <label for="inputName">Name</label>
      <input type="text" id="inputName" required>
    </div>
    <div class="input-group">
      <label for="inputReview">Review</label>
      <textarea id="inputReview" required></textarea>
    </div>
    <button type="submit" id="postReviewButton">Post Review</button>
  </form>
`;

const createDrinkItemTemplate = (drink) => `
  <span class="drink-item" aria-label="${drink.name}.">
    ${drink.name}
  </span>
`;

const createFoodItemTemplate = (food) => `
  <span class="food-item" aria-label="${food.name}.">
    ${food.name}
  </span>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createFavoriteButtonTemplate,
  createFavoritedButtonTemplate,
  createCustomerReviewTemplate,
  createRestaurantFormReviewTemplate,
  createDrinkItemTemplate,
  createFoodItemTemplate,
};
