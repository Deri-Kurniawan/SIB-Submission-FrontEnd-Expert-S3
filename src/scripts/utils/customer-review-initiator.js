import RestaurantSource from '../data/restaurant-source';
import UrlParser from '../routes/url-parser';
import DateHelper from './date-helper';
import { createCustomerReviewTemplate, createRestaurantFormReviewTemplate } from '../views/templates/template-creator';

const CustomerReviewInitiator = {
  init({ customerReviewContainer, customerFormReviewContainer }) {
    this._customerReviewContainer = customerReviewContainer;
    this._customerFormReviewContainer = customerFormReviewContainer;
    this._renderForm();
  },

  _renderForm() {
    this._customerFormReviewContainer.innerHTML = createRestaurantFormReviewTemplate();
    this._isFormSubmitted();
  },

  _isFormSubmitted() {
    const reviewFormElement = document.querySelector('#reviewForm');

    reviewFormElement.addEventListener('submit', (e) => {
      e.preventDefault();

      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const inputName = document.querySelector('#inputName');
      const inputReview = document.querySelector('#inputReview');

      this._makeRequest({
        id: url.id,
        name: inputName.value,
        review: inputReview.value,
      });
    });
  },

  async _makeRequest({ id, name, review }) {
    const inputName = document.querySelector('#inputName');
    const inputReview = document.querySelector('#inputReview');
    const responseJSON = await RestaurantSource.addCustomerReview({ id, name, review });
    const date = new Date();

    if (await responseJSON.error === false) {
      this._customerReviewContainer.innerHTML += createCustomerReviewTemplate({
        id,
        name,
        review,
        date: `
        ${date.getDate()} ${DateHelper.monthNameChecker(date.getMonth())} ${date.getFullYear()}
        `,
      });

      inputName.value = '';
      inputReview.value = '';

      alert('Review has been successfuly added!');
    } else {
      alert(await responseJSON.message);
    }
  },
};

export default CustomerReviewInitiator;
