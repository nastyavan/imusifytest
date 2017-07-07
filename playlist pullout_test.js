Feature('playlist');

Background((I, loginPage) => { // or Background
    I.amOnPage('#/(popup:about)');
    I.click('body > app-about > div > button');
    I.wait(3);
    I.amOnPage('#/home(popup:login)');
    I.wait(3);
    loginPage.sendForm('admin','admin');
    I.wait(3);
    I.amOnPage('#/home(popup:playlist)');
    I.wait(3);
});

Scenario('@elements', (I,loginPage) => {
    //I.amOnPage('#/home(popup:login)');
    //loginPage.sendForm('admin','admin');
    //I.amOnPage('#/home(popup:playlist)');
    I.wait(3);
    I.see('Your Playlist','#playlist > div.tit-playlist > span');
    I.seeElement('#playlist > div.tit-playlist > button');
    I.seeElement('#playlist > div.inner > div.icons-wrap');
    I.seeElement('#playlist > div.inner > div.song-flex-table.playlist');
    I.seeElement('#playlist > div.inner > div.song-flex-table.playlist > div.thead');
    I.seeElement('#playlist > div.inner > div.song-flex-table.playlist > div.tbody');
    I.click('#playlist > button');
    I.wait(3);
});

Scenario('playlist', (I,loginPage) => {

    //I.amOnPage('#/home(popup:login)');
    //loginPage.sendForm('admin','admin');
    //I.amOnPage('#/home(popup:playlist)');
    I.waitForVisible('#playlist');
    I.see('Your Playlist','#playlist > div.tit-playlist > span');
    I.seeElement('#playlist > div.tit-playlist > button');
    I.seeElement('#playlist > div.inner');
    I.seeElement('#playlist > div.inner > div.icons-wrap');
    I.seeElement('#playlist > div.inner > div.song-flex-table.playlist');
    I.moveCursorTo('#playlist > div.inner > div.song-flex-table.playlist > div.tbody > div:nth-child(1)');
    I.click('//*[@id="playlist"]/div[3]/div[3]/div[2]/div[4]/div[1]/button');
    I.moveCursorTo('#playlist > div.inner > div.song-flex-table.playlist > div.tbody > div:nth-child(4)');
    I.seeElement('//*[@id="playlist"]/div[3]/div[3]/div[2]/div[4]/div[1]/button');
    I.click('#playlist > button');
    I.seeElement('body');
    I.wait(3);
});
