// Хедер
$("#main-menu-outer").append($("#header-contacts"));
$("#logo").after($(".phone"));
$(".phone").append("<a href='tel: +74954017771'></a>");
$(".phone").after("<div class='nav-toggle'></div>");
$("#send_request").text("Оставить заявку").clone().appendTo("#services-menu");

// Отзывы
$("#video-carousel ul li:nth-child(1) img").attr("src", "http://www.arwm.ru/sites/all/themes/default/images/video-slider/video5.jpeg");
$("#video-carousel").after("<div class='rcarousel-wrapper'></div>");
$(".rcarousel-wrapper").append($("#rcarousel-prev"));
$(".rcarousel-wrapper").append($("#rcarousel"));
$(".rcarousel-wrapper").append($("#rcarousel-next"));
$("#rcarousel img:nth-child(1)").attr("src", "http://www.arwm.ru/sites/all/themes/default/images/video-slider/video4.jpeg");
$("#rcarousel img:nth-child(2)").attr("src", "http://www.arwm.ru/sites/all/themes/default/images/video-slider/video3.jpeg");
$("#rcarousel img:nth-child(3)").attr("src", "http://www.arwm.ru/sites/all/themes/default/images/video-slider/video2.jpeg");
$("#rcarousel img:nth-child(4)").attr("src", "http://www.arwm.ru/sites/all/themes/default/images/video-slider/video1.jpeg");
$("#rcarousel img:nth-child(5)").attr("src", "http://www.arwm.ru/sites/all/themes/default/images/video-slider/video5.jpeg");

// Кейсы
$("#block-views-сдшутеы-block h2").text("").append("<span>Клиенты</span>").append("<a class='blog-link' href='/blog'>Все клиенты</a>");

// Клиенты
$("#block-views-blog-block h2").text("").append("<span>Кейсы</span>").append("<a class='blog-link' href='/blog'>Все кейсы</a>");

// Партнеры 
$("#content > div:first-child").prepend("<h2>Сертифицированные партнёры</h2>");
$("#awards_front_container .item:nth-child(3) img").attr("src", "http://www.arwm.ru/sites/all/themes/default/images/awards-ga.png");
$("#awards_front_container .item:nth-child(4) img").attr("src", "http://www.arwm.ru/sites/all/themes/default/images/sert_agency_my_target.png");
$("#awards_front_container .item:nth-child(5) img").attr("src", "http://www.arwm.ru/sites/all/themes/default/images/marin-sert.png");
$("#awards_front_container .item:nth-child(7) img").attr("src", "http://www.arwm.ru/sites/default/files/vkpartner.png");
$("#awards_front_container .item:nth-child(8) img").attr("src", "http://www.arwm.ru/sites/default/files/K50-200x75.jpg");
$("#awards_front_container .item:nth-child(9) img").attr("src", "http://www.arwm.ru/sites/default/files/CertificationWEB.png");
$("#awards_front_container .item:nth-child(10) img").attr("src", "http://www.arwm.ru/sites/all/themes/default/images/gtm.png");
$("#awards_front_container .item:nth-child(11) img").attr("src", "http://www.arwm.ru/sites/default/files/iab.png");
$("#awards_front_container .item:nth-child(12) img").attr("src", "http://www.arwm.ru/sites/default/files/sert_alytics.png");
$("#awards_front_container .item:nth-child(13) img").attr("src", "http://www.arwm.ru/sites/default/files/comagic_partner.png");
$("#awards_front_container .item:nth-child(12) img").removeAttr("style");
$("#awards_front_container .item:nth-child(13) img").removeAttr("style");

// Social-share
$("#social-share").empty();
$("#social-facebook").empty();
$("#social-facebook").append("<a href='#' class='facebook-like'>Нравится</a><p class='like-descr'>Нравится 298 людям. <a href='https://www.facebook.com/'>Зарегистрируйтесь</a>, чтобы посмотреть, что нравится друзьям.</p>");
$(".social_icons").clone().appendTo("#social-share");
$("#social-share .social_icons a:nth-child(1)").attr("href", "https://share.yandex.net/go.xml?service=facebook&url=http%3A%2F%2Flocalhost%3A3001%2F&title=%D0%A0%D0%B5%D0%BA%D0%BB%D0%B0%D0%BC%D0%BD%D0%BE%D0%B5%20%D0%B0%D0%B3%D0%B5%D0%BD%D1%82%D1%81%D1%82%D0%B2%D0%BE%20ArrowMedia%20-%20%D0%A0%D0%B5%D0%B7%D1%83%D0%BB%D1%8C%D1%82%D0%B0%D1%82%D0%B8%D0%B2%D0%BD%D0%B0%D1%8F%20%D1%80%D0%B5%D0%BA%D0%BB%D0%B0%D0%BC%D0%B0%20%D0%B2%20%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%BD%D0%B5%D1%82%D0%B5%3A%20%D0%BA%D0%BE%D0%BD%D1%82%D0%B5%D0%BA%D1%81%D1%82%D0%BD%D0%B0%D1%8F%20%D1%80%D0%B5%D0%BA%D0%BB%D0%B0%D0%BC%D0%B0%20%D0%B8%20%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%BD%D0%B5%D1%82%20%D0%BC%D0%B0%D1%80%D0%BA%D0%B5%D1%82%D0%B8%D0%BD%D0%B3");
$("#social-share .social_icons a:nth-child(2)").attr("href", "https://share.yandex.net/go.xml?service=vkontakte&url=http%3A%2F%2Flocalhost%3A3001%2F&title=%D0%A0%D0%B5%D0%BA%D0%BB%D0%B0%D0%BC%D0%BD%D0%BE%D0%B5%20%D0%B0%D0%B3%D0%B5%D0%BD%D1%82%D1%81%D1%82%D0%B2%D0%BE%20ArrowMedia%20-%20%D0%A0%D0%B5%D0%B7%D1%83%D0%BB%D1%8C%D1%82%D0%B0%D1%82%D0%B8%D0%B2%D0%BD%D0%B0%D1%8F%20%D1%80%D0%B5%D0%BA%D0%BB%D0%B0%D0%BC%D0%B0%20%D0%B2%20%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%BD%D0%B5%D1%82%D0%B5%3A%20%D0%BA%D0%BE%D0%BD%D1%82%D0%B5%D0%BA%D1%81%D1%82%D0%BD%D0%B0%D1%8F%20%D1%80%D0%B5%D0%BA%D0%BB%D0%B0%D0%BC%D0%B0%20%D0%B8%20%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%BD%D0%B5%D1%82%20%D0%BC%D0%B0%D1%80%D0%BA%D0%B5%D1%82%D0%B8%D0%BD%D0%B3");
$("#social-share .social_icons a:nth-child(3)").attr("href", "https://share.yandex.net/go.xml?service=gplus&url=http%3A%2F%2Flocalhost%3A3001%2F&title=%D0%A0%D0%B5%D0%BA%D0%BB%D0%B0%D0%BC%D0%BD%D0%BE%D0%B5%20%D0%B0%D0%B3%D0%B5%D0%BD%D1%82%D1%81%D1%82%D0%B2%D0%BE%20ArrowMedia%20-%20%D0%A0%D0%B5%D0%B7%D1%83%D0%BB%D1%8C%D1%82%D0%B0%D1%82%D0%B8%D0%B2%D0%BD%D0%B0%D1%8F%20%D1%80%D0%B5%D0%BA%D0%BB%D0%B0%D0%BC%D0%B0%20%D0%B2%20%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%BD%D0%B5%D1%82%D0%B5%3A%20%D0%BA%D0%BE%D0%BD%D1%82%D0%B5%D0%BA%D1%81%D1%82%D0%BD%D0%B0%D1%8F%20%D1%80%D0%B5%D0%BA%D0%BB%D0%B0%D0%BC%D0%B0%20%D0%B8%20%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%BD%D0%B5%D1%82%20%D0%BC%D0%B0%D1%80%D0%BA%D0%B5%D1%82%D0%B8%D0%BD%D0%B3");
$("#social-share .social_icons a:nth-child(4)").attr("href", "https://share.yandex.net/go.xml?service=twitter&url=http%3A%2F%2Flocalhost%3A3001%2F&title=%D0%A0%D0%B5%D0%BA%D0%BB%D0%B0%D0%BC%D0%BD%D0%BE%D0%B5%20%D0%B0%D0%B3%D0%B5%D0%BD%D1%82%D1%81%D1%82%D0%B2%D0%BE%20ArrowMedia%20-%20%D0%A0%D0%B5%D0%B7%D1%83%D0%BB%D1%8C%D1%82%D0%B0%D1%82%D0%B8%D0%B2%D0%BD%D0%B0%D1%8F%20%D1%80%D0%B5%D0%BA%D0%BB%D0%B0%D0%BC%D0%B0%20%D0%B2%20%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%BD%D0%B5%D1%82%D0%B5%3A%20%D0%BA%D0%BE%D0%BD%D1%82%D0%B5%D0%BA%D1%81%D1%82%D0%BD%D0%B0%D1%8F%20%D1%80%D0%B5%D0%BA%D0%BB%D0%B0%D0%BC%D0%B0%20%D0%B8%20%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%BD%D0%B5%D1%82%20%D0%BC%D0%B0%D1%80%D0%BA%D0%B5%D1%82%D0%B8%D0%BD%D0%B3");

// Футер
$("#footer div:nth-child(3)").removeAttr("style").addClass("privacy-policy");
$("#footer").append("<div class='full-version'><a href='#'>Полная версия сайта</a></div>");
$("#footer").after("<div class='contacts-block'><a href='tel: +74954017771'></a><a href='mailto:ad@arwm.ru'></a><a href='https://www.facebook.com/ArrowMedia.ru/'></a></div>");

// Меню
var toggle = document.querySelector('.nav-toggle');
var main_menu = document.querySelector('#header');

toggle.addEventListener("click", function(event) {
  main_menu.classList.toggle("main-menu-outer--active");
});


