
'use strict';

let I;

module.exports = {

  _init() {
    I = require('../steps_file.js')();
  },
    // setting locators
    fields: {
        email: '#signInName',
        password: '#signInPassword'
    },
    submitButton: 'body > app-login > div > div.popup-scroll.popup_animate_inner > div.popup-inner > div > form > div.sbm-block > button',


    sendForm(email, password) {
        I.fillField(this.fields.email, email);
        I.fillField(this.fields.password, password);
        I.click(this.submitButton);
    }

  // insert your locators and methods here
}
