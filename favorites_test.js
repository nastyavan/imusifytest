Feature('favorites');

Background((I, loginPage) => { // or Background
    I.amOnPage('#/(popup:about)');
    I.click('body > app-about > div > button');
    I.wait(3);
    I.amOnPage('#/home(popup:login)');
    I.wait(3);
    loginPage.sendForm('admin','admin');
    I.wait(3);
    I.amOnPage('#/home(popup:favorites)');
    //I.waitForVisible('#favorites',3);
    I.wait(3);

});

Scenario('@elements', (I, loginPage) => {
    //I.waitForVisible('#favorites');
    I.see('Your Favorites','#favorites > div.tit-playlist > span');
    I.seeElement('#favorites > div.inner-scroll.favorites-inner');
    I.seeElement('#favorites > div.inner-scroll.favorites-inner > div:nth-child(1) > div > div.feed-box > div > div');
    I.seeElement('#favorites > div.inner-scroll.favorites-inner > div:nth-child(1) > div > div.foll-body > div.foll-track > button');
    I.seeElement('#favorites > div.inner-scroll.favorites-inner > div:nth-child(1) > div > div.foll-body > div.foll-track > div.track-info');
    I.seeElement('#favorites > div.inner-scroll.favorites-inner > div:nth-child(1) > div > div.foll-body > div.foll-track > div.track-timeline > div');
    I.seeElement('#favorites > div.inner-scroll.favorites-inner > div:nth-child(1) > div > div.foll-body > div.action-btns');
    I.seeElement('#favorites > div.inner-scroll.favorites-inner > div:nth-child(2)');
});

Scenario('favorites', (I, loginPage) => {
    //I.amOnPage('#/home(popup:login)');
    //loginPage.sendForm('admin','admin');
   // I.amOnPage('#/home(popup:favorites)');
    //I.waitForVisible('#favorites');
    I.see('Your Favorites','#favorites > div.tit-playlist > span');
    I.seeElement('#favorites > div.inner-scroll.favorites-inner');
    I.seeElement('#favorites > div.inner-scroll.favorites-inner > div:nth-child(1)');
    I.click('#favorites > div.inner-scroll.favorites-inner > div:nth-child(1) > div > div.foll-body > div.foll-track > button');
    I.seeElement('#favorites > div.inner-scroll.favorites-inner > div:nth-child(1) > div > div.foll-body > div.foll-track > div.track-timeline > div');
    I.seeElement('#favorites > div.inner-scroll.favorites-inner > div:nth-child(1) > div > div.foll-body > div.action-btns');
    I.click('#favorites > div.inner-scroll.favorites-inner > div:nth-child(1) > div > div.foll-body > div.action-btns > button.action-btn.like');
    I.click('#favorites > div.inner-scroll.favorites-inner > div:nth-child(1) > div > div.foll-body > div.action-btns > button.action-btn.share');
    I.click('#favorites > div.inner-scroll.favorites-inner > div:nth-child(1) > div > div.foll-body > div.action-btns > button.action-btn.add');
    I.click('#favorites > div.inner-scroll.favorites-inner > div:nth-child(1) > div > div.foll-body > div.action-btns > button.action-btn.repost');
    I.click('#favorites > button');
    I.seeElement('body');
    I.wait(3);
});