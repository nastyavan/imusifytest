Feature('invite friends');

Background((I, loginPage) => { // or Background
    I.amOnPage('#/(popup:about)');
    I.click('body > app-about > div > button'); //close about popup
    I.wait(3);
    I.amOnPage('#/home(popup:login)');
    I.wait(3);
    loginPage.sendForm('admin','admin');
    I.wait(3)
    I.amOnPage('#/home(popup:invite)');
    I.wait(3);
});

Scenario('@elements', (I, loginPage) => {
    I.see('Invite friends to join imusify','body > app-invite-friends > div > div.popup-scroll.popup_animate_inner > div > div > div.title'); //see page title
    I.seeElement('body > app-invite-friends > div > div.popup-scroll.popup_animate_inner > div > div'); //invite block
    I.seeElement('body > app-invite-friends > div > div.popup-scroll.popup_animate_inner > div > div > div.invite-inner > div'); //email image
    I.seeElement('#fiendsEmail'); //email field
    I.seeElement('body > app-invite-friends > div > div.popup-scroll.popup_animate_inner > div > div > div.invite-inner > form > div:nth-child(3) > div > button'); //invite friends button
    //I.seeElement('');
    //I.seeElement('');

});
