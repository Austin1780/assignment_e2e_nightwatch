// Your code here ...
const password = require("../../password");

module.exports = {
  vikingTest: browser => {
    browser
      .url(browser.launchUrl)
      .waitForElementVisible(".marketing", 2000)
      .saveScreenshot("screenshots/homepage.jpg")
      .click('a[href="/sign_in"]')
      .waitForElementVisible(".btn", 2000)
      .saveScreenshot("screenshots/signIn.jpg")
      .setValue("#user_email", password["email"])
      .setValue("#user_password", password["password"])
      .click("input[type='submit']")
      .waitForElementVisible(".loki-framework", 2000)
      .saveScreenshot("screenshots/dashboard.jpg")
      .url(
        "http://www.vikingcodeschool.com/dashboard#/testing-javascript/assignment-viking-code-school-exploration"
      )
      .click(
        "img[ng-title='LN01368: Assignment: Viking Code School exploration']"
      );
    //.end();
  }
};
