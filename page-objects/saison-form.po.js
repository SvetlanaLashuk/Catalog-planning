class SaisonForm {
  static get seasonFormSelector()    { return '.ui-layout-center.panel-background'; }
  static get seasonElementSelector() { return '.col-md-3'; }

  get seasonFormElement() {return $(this.constructor.seasonFormSelector); }

  chooseSeason(seasonName) {
    const seasonElement = this.constructor.seasonElementSelector;
    return element(by.cssContainingText(seasonElement, seasonName)).click();
  }

  waitForSeasonFormDisplayed() {
    const EC = protractor.ExpectedConditions;
    browser.wait(EC.visibilityOf(this.seasonFormElement), 3000);
  }
}

module.exports = new SaisonForm();