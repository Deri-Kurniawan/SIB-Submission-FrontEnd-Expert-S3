import {
  createCustomerReviewTemplate,
  createDrinkItemTemplate,
  createFoodItemTemplate,
} from '../views/templates/template-creator';

const DetailHelper = {
  eachFoodsMenu({ foods }) {
    let foodsString = '';
    foods.forEach((food) => {
      foodsString += createFoodItemTemplate(food);
    });
    return foodsString;
  },

  eachDrinksMenu({ drinks }) {
    let drinksString = '';
    drinks.forEach((drink) => {
      drinksString += createDrinkItemTemplate(drink);
    });
    return drinksString;
  },
  eachCustomersReview({ customerReviews }) {
    let customerReviewsString = '';
    customerReviews.forEach((customerReview) => {
      customerReviewsString += createCustomerReviewTemplate(customerReview);
    });

    return customerReviewsString;
  },
};

export default DetailHelper;
