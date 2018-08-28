/**
 * @overview
 * @copyright     Copyright (c) PETER-SERVICE RnD, 2018.
 */

class Utils {
  getValue(element) {
    return element.getAttribute('value');
  }

  getOptionValue(element) {
    return element.element(by.css('option:checked')).getText();
  }
}

module.exports = new Utils();