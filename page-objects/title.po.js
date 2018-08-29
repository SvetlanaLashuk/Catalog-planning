class Title {
  static get titleSelector() { return 'applicationTitle'; }

  get titleElement() { return element(by.binding(this.constructor.titleSelector)); }
}

module.exports = new Title();
