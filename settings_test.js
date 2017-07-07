Feature('settings');

Background((I, loginPage) => { // or Background
    I.amOnPage('#/(popup:about)');
    I.click('body > app-about > div > button');
    I.wait(3);
    I.amOnPage('#/home(popup:login)');
    I.wait(3);
    loginPage.sendForm('admin','admin');
    //I.amOnPage('#/home');
    I.wait(3);
    I.moveCursorTo('#menu > div > div > ul > li:nth-child(3) > a');
    I.wait(3)
})


Scenario('@elements', (I) => {
    I.seeElement('#menu > div > div > ul > li:nth-child(3) > div > div > ul > li:nth-child(1)');
    I.seeElement('#menu > div > div > ul > li:nth-child(3) > div > div > ul > li:nth-child(2)');
    I.seeElement('#menu > div > div > ul > li:nth-child(3) > div > div > ul > li:nth-child(3)');
    I.seeElement('#menu > div > div > ul > li:nth-child(3) > div > div > ul > li:nth-child(4)');
    I.seeElement('#menu > div > div > ul > li:nth-child(3) > div > div > ul > li:nth-child(5)');
    I.seeElement('#menu > div > div > ul > li:nth-child(3) > div > div > ul > li:nth-child(6)');
    I.seeElement('#menu > div > div > ul > li:nth-child(3) > div > div > ul > li:nth-child(7)');
    I.seeElement('#menu > div > div > ul > li:nth-child(3) > div > div > ul > li:nth-child(8)');
    I.seeElement('#menu > div > div > ul > li:nth-child(3) > div > div > ul > li:nth-child(9)');

});

Scenario('settings dropdown @account', (I) => {
    I.click('#menu > div > div > ul > li:nth-child(3) > div > div > ul > li:nth-child(1) > a');             //account
    I.wait(3);
    I.seeElement('body > div.main > app-account > div > div.inner-scroll.account-inner > app-change-pass > div.acc-left > form');
});

Scenario('settings dropdown edit @profile', (I) => {
    I.click('#menu > div > div > ul > li:nth-child(3) > div > div > ul > li:nth-child(2) > a');             //edit profile
    I.wait(3);
    I.see('Edit your profile','body > div.main > app-profile > app-edit-profile > div > div.popup-scroll.popup_animate_inner > div > form > div.title');
});

Scenario('settings dropdown @edit track', (I) => {
    I.click('#menu > div > div > ul > li:nth-child(3) > div > div > ul > li:nth-child(3) > a');             //edit track
    I.wait(3);
    I.see('Upload','body > div.main > app-upload > div > div > div.one-block > a');
});

Scenario('settings dropdown upload @track', (I) => {
    I.click('#menu > div > div > ul > li:nth-child(3) > div > div > ul > li:nth-child(4) > a');             //upload track
    I.wait(3);
    I.see('Upload','body > div.main > app-upload > div > div > div.one-block > a');
});

Scenario('settings dropdown @roles', (I) => {
    I.click('#menu > div > div > ul > li:nth-child(3) > div > div > ul > li:nth-child(5) > a');             //roles
    I.wait(3);
    I.see('What do you do?','body > app-roles > div > div.popup-scroll.popup_animate_inner > div > div > div.title');
});

Scenario('settings dropdown @membership', (I) => {
    I.click('#menu > div > div > ul > li:nth-child(3) > div > div > ul > li:nth-child(6) > a');             //membership
    I.wait(3);
    I.see('Choose Membership - Imusify','body > app-membership > div > div.popup-scroll.popup_animate_inner > div > div > div.title');
});

//Scenario('settings dropdown apply gift coupon', (I) => {
    //I.click('#menu > div > div > ul > li:nth-child(3) > div > div > ul > li:nth-child(7)');             //apply gift coupon
    //I.wait(3);
    //I.see
//});

Scenario('settings dropdown @invite friends', (I) => {
    I.click('#menu > div > div > ul > li:nth-child(3) > div > div > ul > li:nth-child(8) > a');             //invite friends
    I.wait(3);
    I.see('Invite friends to join imusify','body > app-invite-friends > div > div.popup-scroll.popup_animate_inner > div > div > div.title');
});

Scenario('settings dropdown @sign out', (I) => {
    I.click('#menu > div > div > ul > li:nth-child(3) > div > div > ul > li:nth-child(9) > a');             //sign out
    I.wait(3);
    I.seeElement('#menu > div > div > a:nth-child(1)');
});