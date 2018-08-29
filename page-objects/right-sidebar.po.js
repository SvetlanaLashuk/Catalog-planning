class Werberplanung {
  static get cancelButtonSelector() { return '.btn-primary.fa.fa-undo'; }
  static get textSelector()         { return '.cp-text-color '; }

  get buttonElement() { return $(this.constructor.cancelButtonSelector); }
  get textElement()   { return $(this.constructor.textSelector); }

  get numberElement() {
    return element(by.model('publication.name'));
  }

  get typeElement() {
    return element(by.model('publication.type'));
  }

  get dateElement() {
    return element(by.model('dateItem'));
  }

  get priceElement() {
    return element(by.model('publication.priceType'));
  }

  get countryElement() {
    return element(by.model('publication.country'));
  }

  get commentElement() {
    return element(by.model('publication.description'));
  }

  /**
   * Получает пункт выпадающего списка
   * @param optionName
   * @returns {ElementFinder}
   */
   getDropdownItem (optionName) {
     return element(by.css('[label="' + optionName + '"]'));
  }
}

module.exports = new Werberplanung();
