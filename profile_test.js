Feature('profile');

Background((I, loginPage) => { // or Background
    I.amOnPage('#/(popup:about)');
    I.click('body > app-about > div > button');
    I.wait(3);
    I.amOnPage('#/home(popup:login)');
    I.wait(3);
    loginPage.sendForm('admin','admin');
    I.wait(3);
    I.amOnPage('#/profile/2');
    I.wait(3);
});

Scenario('elements', (I, loginPage) => {
    //I.amOnPage('#/home(popup:login)');
    //loginPage.sendForm('admin','admin');
    //I.amOnPage('#/profile/only-me');
    I.seeElement('body > div.main > app-profile > div > div > div > div.prof-top-left > div.prof-top-follow');
    I.seeElement('body > div.main > app-profile > div > div > div > div.prof-top-left > div.profile-info');
    I.seeElement('body > div.main > app-profile > div > div > div > div.prof-top-right');
    I.seeElement('body > div.main > app-profile > div > div > div > div.tab-panel');
    I.seeElement('body > div.main > app-profile > div > div > app-only-my > div');
    I.seeElement('body > div.main > app-profile > div > div > app-only-my > div > form');
    I.seeElement('body > div.main > app-profile > div > div > app-only-my > div > div:nth-child(2)');
    I.seeElement('body > div.main > app-profile > div > div > app-only-my > div > div:nth-child(2) > div.author.foll-show');
    I.wait(3);
    //I.seeElement('');
    //I.seeElement('');
    //I.seeElement('');

});

Scenario('profile', (I, loginPage) => {
    //I.amOnPage('#/home(popup:login)');
    //loginPage.sendForm('admin','admin');
    //I.amOnPage('#/profile/only-me');
    I.click('body > div.main > app-profile > div > div > div > div.tab-panel > a:nth-child(2)');
    //I.seeElement('');
    I.click('body > div.main > app-profile > div > div > div > div.tab-panel > a:nth-child(3)');
    //I.seeElement('');
    //I.click('body > div.main > app-profile > div > div > div > div.tab-panel > a:nth-child(1)');
    //I.seeElement('');
});