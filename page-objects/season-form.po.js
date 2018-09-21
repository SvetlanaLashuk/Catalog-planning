/**
 * Page Object формы PuC.Marketing Saisons
 */
class SeasonForm {
  static get seasonFormSelector()    { return '.ui-layout-center.panel-background'; }
  static get seasonElementSelector() { return '.col-md-3'; }

  get seasonFormElement() {return $(this.constructor.seasonFormSelector); }

  /**
   * Выбор сезона по названию
   * @param seasonName название сезона
   * @returns {*}
   */
  chooseSeason(seasonName) {
    const seasonElement = this.constructor.seasonElementSelector;
    return element(by.cssContainingText(seasonElement, seasonName)).click();
  }

  /**
   * Ожидание видимости формы со списком сезонов
   * @returns {*}
   */
  waitForSeasonFormDisplayed() {
    const EC = protractor.ExpectedConditions;
    return browser.wait(EC.visibilityOf(this.seasonFormElement), 5000);
  }
}

module.exports = new SeasonForm();