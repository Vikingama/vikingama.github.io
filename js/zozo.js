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
// (function () {
//     $.ajax({
//         url: 'https://api.unsplash.com/photos/random?client_id=iJ9xWJbk75lC5KD9HBAAEsJXZGP8qsT1ariISDUcuQk',
//         crossDomain: true,
//         method: 'GET',
//         headers: {
//             Authorization: 'iJ9xWJbk75lC5KD9HBAAEsJXZGP8qsT1ariISDUcuQk'
//         },
//         data: {
//             collections: '12037308',
//             count: 1,
//         },
//         success(res) {
//             const { devicePixelRatio, visualViewport } = window;
//             const { width } = visualViewport;
//             const { urls, user } = res[0];
//             const trueHeight = devicePixelRatio * width;
//             if (trueHeight > 2560) {
//                 // 2K+
//                 document.documentElement.style.backgroundImage = `url(${urls.full})`;
//             } else {
//                 // 2K-
//                 document.documentElement.style.backgroundImage = `url(${urls.regular})`;
//             }
//             document.documentElement.classList.add("success");
//             if (user.first_name && user.last_name) {
//                 $('#enter_time').text(`Photo of the Day by ${user.first_name} ${user.last_name}`);
//             } else {
//                 $('#enter_time').text(`Photo from Unsplash`);
//             }
//         },
//         error(err) {
//             document.documentElement.classList.add("error");
//             console.error(err);
//         }
//     });
// })();
(function () {
    const between = new Date() - new Date('2017-08-21');
    const years = Math.floor(between / 1000 / 60 / 60 / 24 / 365);
    const days = Math.floor(between / 1000 / 60 / 60 / 24 - years * 365);
    $('#enter_time').text(`入杭 ${years} 年又 ${days} 天了`);
})();
