Feature('explore');

Background((I, loginPage) => { // or Background
    I.amOnPage('#/(popup:about)');
    I.click('body > app-about > div > button');
    I.wait(3);
    I.amOnPage('#/home(popup:login)');
    I.wait(3);
    loginPage.sendForm('admin','admin');
    I.wait(3);
    I.amOnPage('#/browse/browse-explore');
    I.wait(5);
});

Scenario('@elements', (I, loginPage) => {

    //I.amOnPage('#/home(popup:login)');
    //loginPage.sendForm('admin', 'admin');
    //I.amOnPage('#/browse/browse-explore');
    //I.wait(3);
    I.seeElement('#menu');
    I.seeElement('body > div.main > app-browse > div.main-top > div > div');
    I.seeElement('body > div.main > app-browse > div.main-top > div > form');
    I.seeElement('body > div.main > app-browse > div.inner-scroll.browse-inner > app-browse-explore > section.tags-wrap > div.swiper-container');
    I.seeElement('body > div.main > app-browse > div.inner-scroll.browse-inner > app-browse-explore > section.filters-wrap');
    I.seeElement('body > div.main > app-browse > div.inner-scroll.browse-inner > app-browse-explore > section.filters-wrap > div.dropdowns');
    I.seeElement('body > div.main > app-browse > div.inner-scroll.browse-inner > app-browse-explore > section.filters-wrap > div.filter-btns');
    I.seeElement('body > div.main > app-browse > div.inner-scroll.browse-inner > app-browse-explore > section.filters-wrap > div.range > div.price');
    I.seeElement('body > div.main > app-browse > div.inner-scroll.browse-inner > app-browse-explore > section.filters-wrap > div.range > div.duration');
    I.seeElement('body > div.main > app-browse > div.inner-scroll.browse-inner > app-browse-explore > div');
    I.seeElement('body > div.main > app-browse > div.inner-scroll.browse-inner > app-browse-explore > div > div.thead');
    I.seeElement('body > div.main > app-browse > div.inner-scroll.browse-inner > app-browse-explore > div > div.tbody');

});

Scenario('explore', (I, loginPage) => {

    //I.amOnPage('#/home(popup:login)');
    //loginPage.sendForm('admin','admin');
    //I.waitForInvisible('body > app-preloader > div');
    //I.click('//*[@id="menu"]/div[2]/nav/a[2]');
    //I.amOnPage('#/browse/browse-explore');
    //I.waitForElement('body > app-browse > div > div.inner-scroll.browse-inner > app-browse-explore > section.tags-wrap > div.swiper-container > div', 5);
    //I.waitForElement ('body > div.main > app-browse > div.inner-scroll.browse-inner > app-browse-explore > section.tags-wrap > div.swiper-container', 3);
    I.wait(3);
    I.seeElement('body > div.main > app-browse > div.inner-scroll.browse-inner > app-browse-explore > section.tags-wrap > div.swiper-container > div');
    I.seeElement ('body > div.main > app-browse > div.inner-scroll.browse-inner > app-browse-explore > section.filters-wrap');
    I.click('body > div.main > app-browse > div.inner-scroll.browse-inner > app-browse-explore > section.filters-wrap > div.dropdowns > select:nth-child(1)');
    I.click('body > div.main > app-browse > div.inner-scroll.browse-inner > app-browse-explore > section.filters-wrap > div.dropdowns > select:nth-child(1) > option:nth-child(5)');
    I.click('body > div.main > app-browse > div.inner-scroll.browse-inner > app-browse-explore > section.filters-wrap > div.dropdowns > select:nth-child(2)');
    I.click('body > div.main > app-browse > div.inner-scroll.browse-inner > app-browse-explore > section.filters-wrap > div.dropdowns > select:nth-child(2) > option:nth-child(6)');
    I.click('body > div.main > app-browse > div.inner-scroll.browse-inner > app-browse-explore > section.filters-wrap > div.dropdowns > select:nth-child(3)');
    I.click('body > div.main > app-browse > div.inner-scroll.browse-inner > app-browse-explore > section.filters-wrap > div.dropdowns > select:nth-child(3) > option:nth-child(5)');
    I.click('body > div.main > app-browse > div.inner-scroll.browse-inner > app-browse-explore > section.filters-wrap > div.filter-btns > div.vocals.active > div > label > span');
    I.click('body > div.main > app-browse > div.inner-scroll.browse-inner > app-browse-explore > section.filters-wrap > div.filter-btns > div.loop > div');
    I.seeElement('body > div.main > app-browse > div.inner-scroll.browse-inner > app-browse-explore > div');
    I.moveCursorTo('body > div.main > app-browse > div.inner-scroll.browse-inner > app-browse-explore > div > div.tbody > div:nth-child(4)');
    I.seeElement('body > div.main > app-browse > div.inner-scroll.browse-inner > app-browse-explore > div > div.tbody > div:nth-child(4) > div:nth-child(1) > div > button');
    I.moveCursorTo('body > div.main > app-browse > div.inner-scroll.browse-inner > app-browse-explore > div > div.tbody > div:nth-child(7)');
    I.seeElement('body > div.main > app-browse > div.inner-scroll.browse-inner > app-browse-explore > div > div.tbody > div:nth-child(7) > div:nth-child(1) > div > button');
    I.wait(3);
});