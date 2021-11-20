/* eslint-disable no-undef */
Feature('Review A Restaurant');

Scenario('Adding Review for first restaurant in list', async ({ I }) => {
  const name = 'Automation Test E2E';
  const review = "Hi! I'm Codecept!.";

  I.amOnPage('/');
  I.seeElement('.card-title');
  I.click(locate('.card-title a').first());

  I.seeElement('#reviewForm');
  I.fillField('#inputName', name);
  I.fillField('#inputReview', review);
  I.click('#postReviewButton');
  I.see(name, locate('.customer-review-item span').last());
  I.see(review, locate('.customer-review-item p').last());
});
