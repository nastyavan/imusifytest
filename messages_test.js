Feature('messages');

Background((I, loginPage) => { // or Background
    I.amOnPage('#/(popup:about)');
    I.click('body > app-about > div > button');
    I.wait(3);
    I.amOnPage('#/home(popup:login)');
    I.wait(3);
    loginPage.sendForm('admin','admin');
    I.wait(3);
    I.amOnPage('#/home(popup:messages)');
    //I.waitForVisible('#messaging');
    I.wait(3);
});

Scenario('@elements', (I,loginPage) => {

    //I.amOnPage('#/home(popup:login)');
    //loginPage.sendForm('admin','admin');
    //I.amOnPage('#/home(popup:messages)');
    //I.waitForVisible('#messaging');
    I.seeElement('#messaging > div.inner-scroll.notifications-inner > div.foll-right.foll-r-one');
    I.seeElement('#messaging > div.inner-scroll.notifications-inner > div.foll-right.foll-r-one > div.r-one-top');
    I.seeElement('#messaging > div.inner-scroll.notifications-inner > div.foll-right.foll-r-one > div.r-one-body');
    I.seeElement('#messaging > div.inner-scroll.notifications-inner > div.foll-right.foll-r-one > div.r-one-body > div.peop-one.active');
    I.seeElement('#messaging > div.inner-scroll.notifications-inner > div.foll-right.foll-r-one > div.r-one-body > div.peop-one.active > a.img');
    I.seeElement('#messaging > div.inner-scroll.notifications-inner > div.foll-right.foll-r-one > div.r-one-body > div.peop-one.active > a.name');
    I.see('Your messages','#messaging > div.inner-scroll.notifications-inner > div.tit-playlist > span');
    I.seeElement('#messaging > div.inner-scroll.notifications-inner > div.foll-left.foll-comments');
    I.seeElement('#messaging > div.inner-scroll.notifications-inner > div.foll-left.foll-comments > div:nth-child(6)');
    I.seeElement('#messaging > div.inner-scroll.notifications-inner > div.foll-left.foll-comments > div:nth-child(5) > div > a');
    I.seeElement('#messaging > div.inner-scroll.notifications-inner > div.foll-left.foll-comments > div:nth-child(5) > div > div.mess');
    I.seeElement('#messaging > div.inner-scroll.notifications-inner > div.foll-left.foll-comments > div:nth-child(5) > div > div.time');
    I.seeElement('#messaging > div.inner-scroll.notifications-inner > form');
    I.seeElement('#messaging > div.inner-scroll.notifications-inner > form > div');
    I.seeElement('#messaging > div.inner-scroll.notifications-inner > form > textarea');
    I.seeElement('#messaging > div.inner-scroll.notifications-inner > form > button');

});

Scenario('test something', (I,loginPage) => {

    //I.amOnPage('#/home(popup:login)');
    //loginPage.sendForm('admin','admin');
    //I.amOnPage('#/home(popup:messages)');
    //I.waitForVisible('#messaging');
    I.see('Your messages','#messaging > div.inner-scroll.notifications-inner > div.tit-playlist > span');
    I.seeElement('#messaging > div.inner-scroll.notifications-inner > div.foll-right.foll-r-one');
    I.seeElement('#messaging > div.inner-scroll.notifications-inner > div.foll-left.foll-comments');
    I.seeElement('#messaging > div.inner-scroll.notifications-inner > form');
    I.click('#messaging > div.inner-scroll.notifications-inner > form > textarea');
    I.fillField('#messaging > div.inner-scroll.notifications-inner > form > textarea','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquet varius scelerisque. Nulla facilisi. Vestibulum ultricies porttitor est, eget dictum.');
    I.click('#messaging > div.inner-scroll.notifications-inner > form > div > button');
    I.seeElement('#messaging > div.inner-scroll.notifications-inner > form > div > div');
    I.wait(3);
    I.click('#messaging > div.inner-scroll.notifications-inner > form > button');
    I.wait(3);
});
