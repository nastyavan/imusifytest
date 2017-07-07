Feature('recommended');

Background((I, loginPage) => { // or Background
    I.amOnPage('#/(popup:about)');
    I.click('body > app-about > div > button');
    I.wait(3);
    I.amOnPage('#/home(popup:login)');
    I.wait(3);
    loginPage.sendForm('admin','admin');
    I.wait(3);
    I.amOnPage('#/browse/recommended/popular-tracks');
    I.wait(3);

});
Scenario('@elements', (I, loginPage) => {

    //I.amOnPage('#/home(popup:login)');
    //loginPage.sendForm('admin','admin');
    //I.amOnPage('#/browse/recommended/popular-tracks');
    //I.seeElement('#menu');
    I.seeElement('body > div.main > app-browse > div.main-top > div > div');
    I.seeElement('body > div.main > app-browse > div.main-top > div > form');
    I.seeElement('body > div.main > app-browse > div.inner-scroll.browse-inner > app-browse-recommended > div > div.swiper-container');
    I.seeElement('body > div.main > app-browse > div.inner-scroll.browse-inner > app-browse-recommended > div > div.tab-panel');
    I.seeElement('body > div.main > app-browse > div.inner-scroll.browse-inner > app-browse-recommended > app-popular-tracks > div > div');
    I.seeElement('body > div.main > app-browse > div.inner-scroll.browse-inner > app-browse-recommended > app-popular-tracks > div > div > div.thead');
    I.seeElement('body > div.main > app-browse > div.inner-scroll.browse-inner > app-browse-recommended > app-popular-tracks > div > div > div.tbody');
    //I.seeElement('');

});

Scenario('@recommended', (I, loginPage) => {

    //I.amOnPage('#/home(popup:login)');
    //loginPage.sendForm('admin','admin');
    //I.waitForInvisible('body > app-preloader > div');
    //I.amOnPage('#/browse/recommended/popular-tracks');
    I.seeElement('body > div.main > app-browse > div.main-top > div > form');
    //I.click('#searchLink');         //поиск
    //I.seeElement('#searchPopup > div.popup-scroll.popup_animate_inner > div.popup-inner');      //видит попап поиска
    //I.click('#searchPopup > button');       //закрывает поиск
    I.click('body > div.main > app-browse > div.inner-scroll.browse-inner > app-browse-recommended > div > div.tab-panel > a:nth-child(2)');        //new tracks tab
    I.wait(3);
    //I.seeElement('body > div.main > app-browse > div.inner-scroll.browse-inner > app-browse-recommended > app-new-tracks > div > div > div.tbody > track-item-line:nth-child(1) > div');    //видит элемент в new tracks
    I.click('body > div.main > app-browse > div.inner-scroll.browse-inner > app-browse-recommended > div > div.tab-panel > a:nth-child(3)');        //popular artists tab
    I.wait(3);
    I.seeElement('body > div.main > app-browse > div.inner-scroll.browse-inner > app-browse-recommended > app-popular-artists > div');      //видит элемент в popular artists
    I.click('body > div.main > app-browse > div.inner-scroll.browse-inner > app-browse-recommended > div > div.tab-panel > a:nth-child(4)');        //new artists
    I.wait(3);
    I.seeElement('body > div.main > app-browse > div.inner-scroll.browse-inner > app-browse-recommended > app-new-artists > p');        //видит элемент в new artists
    I.click('body > div.main > app-browse > div.inner-scroll.browse-inner > app-browse-recommended > div > div.tab-panel > a:nth-child(5)');        //popular playlists
    I.wait(3);
    I.seeElement('body > div.main > app-browse > div.inner-scroll.browse-inner > app-browse-recommended > app-popular-playlists > p');      //видит элемент в popular playlists
    I.click('body > div.main > app-browse > div.inner-scroll.browse-inner > app-browse-recommended > div > div.tab-panel > a:nth-child(6)');        //new playlists
    I.wait(3);
    I.seeElement('body > div.main > app-browse > div.inner-scroll.browse-inner > app-browse-recommended > app-new-playlists > p');      //видит элемент в popular tracks
    I.click('body > div.main > app-browse > div.inner-scroll.browse-inner > app-browse-recommended > div > div.tab-panel > a:nth-child(1)');        //popular tracks
    I.wait(3);
    I.seeElement('body > div.main > app-browse > div.inner-scroll.browse-inner > app-browse-recommended > app-popular-tracks > div > div');     //видит элемент в popular tracks
    I.wait(3);
});