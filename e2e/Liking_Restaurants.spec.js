const assert = require('assert');

/* eslint-disable no-undef */
Feature('Favoriting Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('favoriting one restaurant', async ({ I }) => {
  I.see("You don't have any favorite restaurant!", 'error-message');

  I.amOnPage('/');

  I.seeElement('.restaurant-item .card-title > a.card-link');

  const firstRestaurant = locate('.restaurant-item .card-title > a.card-link').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item');
  const favoritedRestaurantTitle = await I.grabTextFrom('.restaurant-item .card-title');

  assert.strictEqual(firstRestaurantTitle, favoritedRestaurantTitle);
});
