Feature('App');

Scenario('아이템 리스트를 볼 수 있습니다.', ({ I }) => {
  I.amOnPage('/');

  I.see('Stellar Oversized Jumper');
  I.see('Toadstool Midi Dress');
  I.see('Empire Studded Boots');
  I.see('Pagan Round Blanket [B]');
  I.see('Lotus Awakens Armour Ring');
});
