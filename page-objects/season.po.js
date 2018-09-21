/**
 * Page Object характеристик сезона
 */
class Season {

  /**
   * Название сезона
   * @returns {ElementFinder}
   */
  get name() {
    return element(by.model('item.identity'));
  }

  /**
   * Тип сезона
   * @returns {ElementFinder}
   */
  get seasonType() {
    return element(by.model('item.name'));
  }

  /**
   * Дата начала сезона
   * @returns {ElementFinder}
   */
  get startDate() {
    let date = element.all(by.model('dateItem'));
    return date.get(0);
  }

  /**
   * Дата конца сезона
   * @returns {ElementFinder}
   */
  get endDate() {
    let date = element.all(by.model('dateItem'));
    return date.get(1);
  }
}

module.exports = new Season();