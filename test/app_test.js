Feature('App');

Scenario('aaaaa를 볼 수 있습니다.', ({ I }) => {
  I.amOnPage('/');

  I.see('aaaaa');
});
