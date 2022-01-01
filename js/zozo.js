'use strict';

$(document).ready(
  (function (_this) {
    return function () {
      let bt;
      bt = $('#back_to_top');
      if ($(document).width() > 480) {
        $(window).scroll(function () {
          let st;
          st = $(window).scrollTop();
          if (st > 30) {
            return bt.css('display', 'block');
          } else {
            return bt.css('display', 'none');
          }
        });
        return bt.click(function () {
          $('body,html').animate(
            {
              scrollTop: 0
            },
            800
          );
          return false;
        });
      }
    };
  })(this)
);
$(document).ready(
  (function (_this) {
    return function () {
      let nav, icon;
      icon = $('#menu_icon');
      nav = $('#site_nav');
      icon.click(function () {
        nav.slideToggle(250);
      });
    };
  })(this)
);
(function () {
  const between = new Date() - new Date('2017-08-21');
  const days = Math.floor(between / 1000 / 60 / 60 / 24);
  const enterTimeEle = document.querySelector('#enter_time');
  enterTimeEle.textContent = `入杭 ${days} 天了`;
})();
(function () {
  document.addEventListener('copy', function (e) {
    const clipboardData = e.clipboardData || window.clipboardData;
    if (!clipboardData) {
      return;
    }
    const selectionContent =
      window.getSelection().toString() || document.getSelection().toString();
    if (!selectionContent) {
      return;
    }
    e.preventDefault();
    clipboardData.setData(
      'text/plain',
      `${selectionContent}\r\n链接：${window.location.href}\r\n来源：馬腊咯稽\r\n转载请注明出处`
    );
  });
})();
// (function () {
//   $.ajax({
//     url: 'https://api.unsplash.com/photos/random?client_id=iJ9xWJbk75lC5KD9HBAAEsJXZGP8qsT1ariISDUcuQk',
//     crossDomain: true,
//     method: 'GET',
//     headers: {
//       Authorization: 'iJ9xWJbk75lC5KD9HBAAEsJXZGP8qsT1ariISDUcuQk'
//     },
//     data: {
//       collections: '12037308',
//       count: 1
//     },
//     success(res) {
//       const { devicePixelRatio, visualViewport } = window;
//       const { width } = visualViewport;
//       const { urls, user } = res[0];
//       const trueHeight = devicePixelRatio * width;
//       if (trueHeight > 2560) {
//         // 2K+
//         document.documentElement.style.backgroundImage = `url(${urls.full})`;
//       } else {
//         // 2K-
//         document.documentElement.style.backgroundImage = `url(${urls.regular})`;
//       }
//       if (user.first_name && user.last_name) {
//         $('#enter_time').text(
//           `Photo of the Day by ${user.first_name} ${user.last_name}`
//         );
//       } else {
//         $('#enter_time').text(`Photo from Unsplash`);
//       }
//     },
//     error(err) {
//       console.error(err);
//     }
//   });
// })();
