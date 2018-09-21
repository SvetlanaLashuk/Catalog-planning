class Utils {
  /**
   * Получает значение выбранного элемента
   * @param element
   * @returns {promise.Promise<string>}
   */
  getValue(element) {
    return element.getAttribute('value');
  }

  /**
   * Получает выбранный пункт выпадающего списка
   * @param element
   * @returns {ElementFinder}
   */
  getSelectedDropdownItem(element) {
    return element.element(by.css('option:checked'));
  }

  /**
   * Клик по элементу
   * @param element
   * @returns {promise.Promise<void>}
   */
  click(element) {
    return element.click();
  }
}

module.exports = new Utils();