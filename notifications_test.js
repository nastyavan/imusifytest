Feature('notifications');

Background((I, loginPage) => { // or Background
    I.amOnPage('#/(popup:about)');
    I.click('body > app-about > div > button');
    I.wait(3);
    I.amOnPage('#/home(popup:login)');
    I.wait(3);
    loginPage.sendForm('admin','admin');
    I.wait(3);
    I.amOnPage('#/home(popup:notifications)');
    //I.waitForVisible('#notifications');
    I.wait(3);
});

Scenario('@elements', (I,loginPage)  => {

    //I.amOnPage('#/home(popup:login)');
    //loginPage.sendForm('admin','admin');
    //I.amOnPage('#/home(popup:notifications)');
    //I.wait(3);
    //I.waitForVisible('#notifications');
    I.see('Your Notifications','#notifications > div.tit-playlist > span');
    I.seeElement('#notifications > div.inner-scroll.notifications-inner > div.foll-left');
    I.seeElement('#notifications > div.inner-scroll.notifications-inner > div.foll-right');
    I.seeElement('#notifications > div.inner-scroll.notifications-inner > div.foll-left > div:nth-child(1)');
    I.seeElement('#notifications > div.inner-scroll.notifications-inner > div.foll-left > div:nth-child(1) > div > div.user > a.user-img');
    I.seeElement('#notifications > div.inner-scroll.notifications-inner > div.foll-left > div:nth-child(1) > div > div.user > a.user-name');
    I.seeElement('#notifications > div.inner-scroll.notifications-inner > div.foll-left > div:nth-child(1) > div > div.foll-tit');
    I.seeElement('#notifications > div.inner-scroll.notifications-inner > div.foll-left > div:nth-child(1) > div > div.foll-time');
    I.moveCursorTo('#notifications > div.inner-scroll.notifications-inner > div.foll-left > div:nth-child(1)');
    I.seeElement('#notifications > div.inner-scroll.notifications-inner > div.foll-left > div:nth-child(1) > div > button');
    I.seeElement('#notifications > div.inner-scroll.notifications-inner > div.foll-right > div > div.r-one-body > div:nth-child(1)');
    I.seeElement('#notifications > div.inner-scroll.notifications-inner > div.foll-right > div > div.r-one-body > div:nth-child(1) > a.img');
    I.seeElement('#notifications > div.inner-scroll.notifications-inner > div.foll-right > div > div.r-one-body > div:nth-child(1) > a.name');
    I.seeElement('#notifications > div.inner-scroll.notifications-inner > div.foll-right > div > div.r-one-body > div:nth-child(1) > button');
    //I.seeElement('');
    //I.seeElement('');
    //I.seeElement('');

});

Scenario('test something', (I,loginPage)  => {

    //I.amOnPage('#/home(popup:login)');
    //loginPage.sendForm('admin','admin');
    //I.amOnPage('#/home(popup:notifications)');
    //I.wait(3);
    //I.waitForVisible('#notifications');
    I.click('#notifications > div.inner-scroll.notifications-inner > div.foll-right > div > div.r-one-body > div:nth-child(1) > button');
    I.seeElement('#notifications > div.inner-scroll.notifications-inner > div.foll-right > div > div.r-one-body > div:nth-child(2)');
    I.click('#notifications > div.inner-scroll.notifications-inner > div.foll-right > div > div.r-one-body > div:nth-child(2) > button');
    //I.moveCursorTo('#notifications > div.inner-scroll.notifications-inner > div.foll-left > div:nth-child(1)');
    //I.click('#notifications > div.inner-scroll.notifications-inner > div.foll-left > div:nth-child(1) > div > button');
    //I.dontSee('#notifications > div.inner-scroll.notifications-inner > div.foll-left > div:nth-child(1)');
    I.click('#notifications > button');
    I.seeElement('body');
    I.wait(3);
});
