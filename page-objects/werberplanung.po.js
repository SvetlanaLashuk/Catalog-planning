/**
 * Page object вкладки Werberplanung
 */
class Werberplanung {
  static get cancelButtonSelector() { return '.btn-primary.fa.fa-undo'; }
  static get textSelector() { return '.cp-text-color '; }

  get buttonElement() { return $(this.constructor.cancelButtonSelector); }
  get textElement() { return $(this.constructor.textSelector); }

  /**
   * Название публикации
   * @returns {ElementFinder}
   */
  get numberElement() {
    return element(by.model('publication.name'));
  }

  /**
   * Тип публикации
   * @returns {ElementFinder}
   */
  get typeElement() {
    return element(by.model('publication.type'));
  }

  /**
   * Дата публикации
   * @returns {ElementFinder}
   */
  get dateElement() {
    return element(by.model('dateItem'));
  }

  /**
   * Цена публикации
   * @returns {ElementFinder}
   */
  get priceElement() {
    return element(by.model('publication.priceType'));
  }

  /**
   * Страна публикации
   * @returns {ElementFinder}
   */
  get countryElement() {
    return element(by.model('publication.country'));
  }

  /**
   * Комментарий к публикации
   * @returns {ElementFinder}
   */
  get commentElement() {
    return element(by.model('publication.description'));
  }

  /**
   * Получает пункт выпадающего списка
   * @param optionName
   * @returns {ElementFinder}
   */
  getDropdownItem(optionName) {
    return element(by.css('[label="' + optionName + '"]'));
  }

  /**
   * Заполняет поле номер и возвращает его значение
   * @param data файл со строковыми значениями
   * @param utils класс со вспомогательными методами
   * @returns {promise.Promise<string>}
   */
  fillNumberField(data, utils) {
    const numberElement = this.numberElement;
    return numberElement.clear().then(function () {
      return numberElement.sendKeys(data.enteredNumber).then(function () {
        return utils.getValue(numberElement);
      })
    });
  }

  /**
   * Заполняет поле даты и возвращает его значение
   * @param data файл со строковыми значениями
   * @param utils класс со вспомогательными методами
   * @returns {promise.Promise<string>}
   */
  fillDateField(data, utils) {
    const dateElement = this.dateElement;
    return dateElement.clear().then(function () {
      return dateElement.sendKeys(data.enteredDate).then(function () {
        return utils.getValue(dateElement);
      });
    });
  }

  /**
   * Выбирает тип публикации из выпадающего списка
   * @param utils класс со вспомогательными методами
   * @returns {promise.Promise<string>}
   */
  selectPublicationType(utils) {
    const typeElement = this.typeElement;
    return typeElement.all(by.tagName('option')).get(0).click().then(function () {
      return utils.getSelectedDropdownItem(typeElement).getText();
    });
  }

  /**
   * Выбирает цену из выпадающего списка
   * @param data файл со строковыми значениями
   * @param utils класс со вспомогательными методами
   * @returns {promise.Promise<string>}
   */
  selectPrice(data, utils) {
    const priceElement = this.priceElement;
    return this.getDropdownItem(data.price.option2).click().then(function () {
      return utils.getSelectedDropdownItem(priceElement).getText();
    });
  }

  /**
   * Выбирает страну из выпадающего списка
   * @param data файл со строковыми значениями
   * @param utils класс со вспомогательными методами
   * @returns {promise.Promise<string>}
   */
  selectCountry(data, utils) {
    const countryElement = this.countryElement;
    return this.getDropdownItem(data.country.option4).click().then(function () {
      return utils.getSelectedDropdownItem(countryElement).getText();
    });
  }

  /**
   * Заполняет поле комментария и возвращает его значение
   * @param data файл со строковыми значениями
   * @param utils класс со вспомогательными методами
   * @returns {promise.Promise<string>}
   */
  fillCommentField(data, utils) {
    const commentElement = this.commentElement;
    return commentElement.sendKeys(data.comment).then(function () {
      return  utils.getValue(commentElement);
    });
  }
}

module.exports = new Werberplanung();
