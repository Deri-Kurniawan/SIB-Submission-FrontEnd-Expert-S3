import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantSource {
  static async restaurantList() {
    try {
      const restaurants = await fetch(API_ENDPOINT.LIST);
      const responseJson = await restaurants.json();
      return responseJson;
    } catch (error) {
      return this._errorHandler(error);
    }
  }

  static async restaurantDetail(id) {
    try {
      const restaurant = await fetch(API_ENDPOINT.DETAIL(id));
      return restaurant.json();
    } catch (error) {
      return this._errorHandler(error);
    }
  }

  static async searchRestaurant(keyword) {
    try {
      const restaurant = await fetch(API_ENDPOINT.SEARCH(keyword));
      return restaurant.json();
    } catch (error) {
      return this._errorHandler(error);
    }
  }

  static async addCustomerReview({ id, name, review }) {
    try {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id, name, review,
        }),
      };
      const responseText = await fetch(API_ENDPOINT.ADD_REVIEW, options);
      return responseText.json();
    } catch (error) {
      return { error: true, message: `${error.message}! Review not successfully added!\nPlease check your internet connection!` };
    }
  }

  static _errorHandler(error) {
    return alert(`${error.message}! Please check your internet connection!`);
  }
}

export default RestaurantSource;
