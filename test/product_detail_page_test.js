Feature('App');

Scenario('아이템 상세 페이지를 볼 수 있습니다.', ({ I }) => {
  I.amOnPage('/products/1');

  I.see('Stellar Oversized Jumper');
});
