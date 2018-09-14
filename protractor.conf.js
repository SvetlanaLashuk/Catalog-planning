exports.config = {
  onPrepare: function () {
    browser.driver.manage().window().maximize();
  },
  seleniumAddress: 'http://localhost:4444/wd/hub',
  capabilities: {
    browserName: 'chrome'
  },
  specs: ['e2e-spec/*e2e-spec.js'],
  jasmineNodeOpts: {
    showColors: true,
  }
};