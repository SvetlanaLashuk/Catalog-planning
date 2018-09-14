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
   * @returns {*}
   */
  getSelectedDropdownItem(element) {
    return element.element(by.css('option:checked'));
  }
}

module.exports = new Utils();