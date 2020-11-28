Feature('App');

Scenario('not found 페이지를 볼 수 있습니다.', ({ I }) => {
  I.amOnPage('/not-found');

  I.see('not found');
});
