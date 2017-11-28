// Your code here ...

module.exports = {
	'vikingTest': browser => {
		browser
		.url(browser.launchUrl)
		.waitForElementVisible('.marketing', 2000)
		.saveScreenshot('screenshots/homepage.jpg')
		.click('a[href="/sign_in"]')
		.waitForElementVisible('.btn', 2000)
		.saveScreenshot('screenshots/signIn.jpg')
		.setValue('#user_email', 'tinderholmgene@gmail.com')
		.setValue(''
		//.end();
	}
};
