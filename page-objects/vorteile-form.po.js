/**
 * Page Object формы PuC.Marketing Vorteile
 */
class VorteileForm {
  static get vorteileFormSelector()     { return '.ui-layout-center.panel-background'; }
  static get vorteileElementSelector()  { return 'span'; }
  static get modalWindowSelector()      { return '.modal-content'; }
  static get plusButtonSelector()       { return '.btn-primary.glyphicon.glyphicon-plus'; }
  static get minusButtonSelector()      { return '.btn-primary.glyphicon.glyphicon-minus'; }
  static get buttonMWSelector()         { return '.btn-default.ng-binding'; }
  static get saveButtonSelector()       { return '.btn.btn-default.btn-primary.fa.fa-floppy-o'; }

  get vorteileFormElement() { return $(this.constructor.vorteileFormSelector); }
  get modalWindowElement()  { return $(this.constructor.modalWindowSelector); }
  get plusButtonElement()   { return $(this.constructor.plusButtonSelector); }
  get minusButtonElement()  { return $(this.constructor.minusButtonSelector); }
  get saveButtonElement()   { return $(this.constructor.saveButtonSelector); }

  /**
   * Выбор льготы по названию
   * @param name название льготы
   * @returns {*}
   */
  chooseLine(name) {
    const lineElement = this.constructor.vorteileElementSelector;
    return element(by.cssContainingText(lineElement, name));
  }

  /**
   * Ожидание видимости формы Vorteile
   * @returns {*}
   */
  waitForVorteileFormDisplayed() {
    const EC = protractor.ExpectedConditions;
    return browser.wait(EC.visibilityOf(this.vorteileFormElement), 5000);
  }

  /**
   * Ожидание видимости модалького окошка
   * @returns {*}
   */
  waitForModalWindowDisplayed() {
    const EC = protractor.ExpectedConditions;
    return browser.wait(EC.visibilityOf(this.modalWindowElement), 5000);
  }

  /**
   * Название льготы
   * @returns {ElementFinder}
   */
  get name() {
    return element(by.model('item.name'));
  }

  /**
   * Клик по кнопке на модальном окошке
   * @param name текст кнопки
   * @returns {*}
   */
  modalWindowButton(name) {
    const button = this.constructor.buttonMWSelector;
    return element(by.cssContainingText(button, name)).click();
  }

  /**
   * Клик по кнопке добавления льготы
   * @returns {*}
   */
  plusButton() {
    return this.plusButtonElement.click();
  }

  /**
   * Клик по кнопке удаления льготы
   * @returns {*}
   */
  minusButton() {
    return this.minusButtonElement.click();
  }

  /**
   * Клик по кнопке сохранить изменения
   * @returns {*}
   */
  saveButton() {
    return this.saveButtonElement.click();
  }
}

module.exports = new VorteileForm();