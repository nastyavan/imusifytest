Feature('elements');

Background((I, loginPage) => { // or Background
    I.amOnPage('#/(popup:about)');
    I.click('body > app-about > div > button');
    I.wait(3);
    I.amOnPage('#/home(popup:login)');
    I.wait(3);
    loginPage.sendForm('admin','admin');
    I.wait(3);
    //I.amOnPage('#/home');
    //I.wait(3);
});

Scenario('@elements', (I,loginPage) => {
    //I.amOnPage('#/home(popup:login)');
    //loginPage.sendForm('admin','admin');
    //I.amOnPage('#/home');
    I.seeElement('#menu');
    I.seeElement('#menu > header');
    I.seeElement('#menu > div');
    I.seeElement('#menu > footer');
    I.wait(3);

});

Scenario('left menu', (I,loginPage) => {

    //I.amOnPage('#/home(popup:login)');
    //loginPage.sendForm('admin','admin');
    I.seeElement('#menu > div > div > a > div.img-box');
    I.seeElement('#menu > div > div > a > div.prof-user');
    I.click('#menu > div.menu-inn > div > a > div.prof-user');
    I.wait(3);
    I.seeElement('body > div.main > app-profile > app-profile-user > div > div > div');
    I.wait(3);
    I.click('#menu > header > a');
    I.click('#menu > div > div > ul > li:nth-child(1)');
    //I.waitForInvisible('body > app-preloader > div', 5);
    //I.waitForElement('body > app-messages > div', 3);
    I.wait(3);
    I.click('#messaging > button');
    I.click('#menu > div > div > ul > li:nth-child(2)');
    //I.waitForVisible('#notifications');
    I.wait(3);
    I.click('#notifications > button');
    I.moveCursorTo('#menu > div > div > ul > li:nth-child(3) > a');
    //I.waitForVisible('#menu > div > div > ul > li:nth-child(3) > div > div > ul');
    I.wait(3);
    I.moveCursorTo('#menu > div > nav > a:nth-child(2)');
    I.click('#menu > div > nav > a:nth-child(2)');
    //I.waitForVisible('body > div.main > app-browse > div.main-top');
    I.wait(3);
    I.click('#menu > div > nav > a:nth-child(3)');
    I.wait(3);
    //I.waitForVisible('#playlist > div.inner');
    I.click('#playlist > button');
    //I.wait(3);
    I.click('#menu > div > nav > a:nth-child(4)');
    //I.waitForVisible('body > div.main > app-upload > div');
    I.wait(3);
    I.click('#menu > div > nav > a:nth-child(5)');
    //I.waitForVisible('#favorites');
    I.wait(3);
    I.click('#favorites > button');
    //I.waitForVisible('body > div.main > app-upload > div');
    I.wait(3);
    I.click('#menu > div > nav > a:nth-child(1)');
    //I.waitForVisible('body > div.main > app-home > div.main-top');
    I.wait(3);
});
