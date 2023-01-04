<!doctype html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" type="text/css" href="css/style.min.css">
    <title>Document</title>
</head>
<body>
    <section id="up" class="promo">
        <div class="container">
            <header class="header">
                <a href="#" class="header__logo">
                    <img src="icons/promo/logo.png" alt="">
                </a>
                <div class="header__official">
                    Официальный представитель
                    <span>Garmin, Polar, Suunto</span>
                </div>
                <div class="header__contacts">
                    <a href="tel:+74999228974" class="header__phone">+7 (499) 922-89-74</a>
                    <button data-modal="consultation" class="button">заказать звонок</button>
                </div>
            </header>
            <div class="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="promo__wrapper">
                <h1 class="promo__header">Подбор пульсометра</h1>
                <h2 class="promo__subheader">с учётом Вашего уровня подготовки</h2>

                <div class="promo__icons">
                    <div class="promo__icon">
                        <img src="icons/promo/icon-1.png" alt="timer">
                        Время подбора:
                        10 минут
                    </div>
                    <div class="promo__icon">
                        <img src="icons/promo/icon-2.png" alt="hand-cart">
                        Бесплатная
                        доставка
                    </div>
                    <div class="promo__icon">
                        <img src="icons/promo/icon-3.png" alt="feedback">
                        Ответим
                        на все вопросы
                    </div>
                </div>

                <button data-modal="consultation" class="button button_main">заказать консультацию</button>
                <div class="promo__link">
                    или <a href="#catalog">ПЕРЕЙТИ В КАТАЛОГ</a>
                </div>
            </div>
        </div>
    </section>
    <section class="advantages">
        <div class="container">
            <h2 class="title">НАШИ ПРЕИМУЩЕСТВА</h2>
            <div class="advantages__wrapper">
                <div class="advantages__item">
                    <img src="icons/advantages/advantages-1.png" alt="cup" class="advantages__icon">
                    <div class="advantages__subtitle">Делимся опытом</div>
                    <div class="advantages__descr">
                        Наши сотрудники всегда готовы поделиться своим опытом,
                        так как сами бегают полумарафоны, переплыли Босфор,
                        готовятся к соревнованиям по триатлону!
                    </div>
                </div>
                <div class="advantages__item">
                    <img  src="icons/advantages/advantages-2.png" alt="heart" class="advantages__icon advantages__icon_animated">
                    <div class="advantages__subtitle">Заботимся о здоровье</div>
                    <div class="advantages__descr">
                        Мы работаем для того,
                        чтобы Ваши занятия спортом шли на пользу
                        Вашему здоровью и были в радость Вам и Вашим близким!
                    </div>
                </div>
                <div class="advantages__item">
                    <img src="icons/advantages/advantages-3.png" alt="shoe" class="advantages__icon">
                    <div class="advantages__subtitle">Учим бегать</div>
                    <div class="advantages__descr">
                        Помогаем с обучением
                        правильной технике бега!
                        Дружим с крупнейшей школой бега в России - <a href="#">I LOVE RUNNING.</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="consultation">
        <div class="container">
            <h2 class="title title_left">
                Получите бесплатную консультацию<br>
                по подбору пульсометра
            </h2>
            <div class="consultation__descr">
                Просто заполните форму заявки<br>
                и мы перезвоним вам в течении 10 минут
            </div>
            <form class="feed-form" action="#">
                <input name="name" type="text" placeholder="Ваше имя">
                <input name="phone" placeholder="Ваш телефон">
                <input name="email" type="email" placeholder="Ваш E-mail">

                <button class="button button_form">заказать КОНСУЛЬТАЦИЮ</button>
            </form>
        </div>
    </section>
    <div class="carousel">
        <div class="container">
            <div class="carousel__inner">
                <div>
                    <img src="img/slider/item-1.png" alt="">
                </div>
                <div>
                    <img src="img/slider/item-2.png" alt="">
                </div>
                <div>
                    <img src="img/slider/item-3.png" alt="">
                </div>
            </div>
        </div>
    </div>
    <section id="catalog" class="catalog">
        <div class="container">
            <h2 class="title">Каталог пульсометров</h2>
            <ul class="catalog__tabs">
                <li class="catalog__tab catalog__tab_active"><div>Для фитнеса</div></li>
                <li class="catalog__tab"><div>для бега</div></li>
                <li class="catalog__tab"><div>для триатлона</div></li>
            </ul>
            <div class="catalog__content catalog__content_active">
                <div class="catalog-item">
                    <div class="catalog-item__wrapper wow animate__animated animate__fadeInUp" data-wow-delay="1s">
                        <div class="catalog-item__content catalog-item__content_active">
                            <img src="img/clock-1.png" alt="pulsometr" class="catalog-item__img">
                            <div class="catalog-item__subtitle">Пульсометр Polar FT1</div>
                            <div class="catalog-item__descr">Для первых шагов в тренировках, основанных на сердечном ритме</div>
                            <a href="" class="catalog-item__link">ПОДРОБНЕЕ</a>

                        </div>
                        <ul class="catalog-item__list catalog-item__list">
                            <li>Вы услышите звуковое оповещение о нужном пульсе во время тренировки;</li>
                            <li>Вы увидите информативный графический индикатор целевых тренировочных зон пульса;</li>
                            <li>Также Вы увидите информацию о расходе калорий за тренировку;</li>
                            <li>Вы сможете посмотреть данные по 10 тренировкам.</li>
                            <a href="" class="catalog-item__back">Назад</a>
                        </ul>

                    </div>
                    <hr>
                    <div class="catalog-item__footer">
                        <div class="catalog-item__prices">
                            <div class="catalog-item__old-price">4 750 руб.</div>
                            <div class="catalog-item__price">4 500 руб.</div>
                        </div>
                        <button class="button button_mini">КУПИТЬ</button>
                    </div>
                </div>
                <div class="catalog-item">
                    <div class="catalog-item__wrapper wow animate__animated animate__fadeInUp" data-wow-delay="1.2s">
                        <div class="catalog-item__content catalog-item__content_active">
                            <img src="img/clock-1.png" alt="pulsometr" class="catalog-item__img">
                            <div class="catalog-item__subtitle">Пульсометр Polar FT1</div>
                            <div class="catalog-item__descr">Для первых шагов в тренировках, основанных на сердечном ритме</div>
                            <a href="" class="catalog-item__link">ПОДРОБНЕЕ</a>

                        </div>
                        <ul class="catalog-item__list">
                            <li>Вы услышите звуковое оповещение о нужном пульсе во время тренировки;</li>
                            <li>Вы увидите информативный графический индикатор целевых тренировочных зон пульса;</li>
                            <li>Также Вы увидите информацию о расходе калорий за тренировку;</li>
                            <li>Вы сможете посмотреть данные по 10 тренировкам.</li>
                            <a href="" class="catalog-item__back">Назад</a>
                        </ul>
                    </div>
                    <hr>
                    <div class="catalog-item__footer">
                        <div class="catalog-item__prices">
                            <div class="catalog-item__old-price">4 750 руб.</div>
                            <div class="catalog-item__price">4 500 руб.</div>
                        </div>
                        <button class="button button_mini">КУПИТЬ</button>
                    </div>
                </div>
                <div class="catalog-item">
                    <div class="catalog-item__wrapper wow animate__animated animate__fadeInUp" data-wow-delay="1.3s">
                        <div class="catalog-item__content catalog-item__content_active">
                            <img src="img/clock-1.png" alt="pulsometr" class="catalog-item__img">
                            <div class="catalog-item__subtitle">Пульсометр Polar FT1</div>
                            <div class="catalog-item__descr">Для первых шагов в тренировках, основанных на сердечном ритме</div>
                            <a href="" class="catalog-item__link">ПОДРОБНЕЕ</a>

                        </div>
                        <ul class="catalog-item__list">
                            <li>Вы услышите звуковое оповещение о нужном пульсе во время тренировки;</li>
                            <li>Вы увидите информативный графический индикатор целевых тренировочных зон пульса;</li>
                            <li>Также Вы увидите информацию о расходе калорий за тренировку;</li>
                            <li>Вы сможете посмотреть данные по 10 тренировкам.</li>
                            <a href="" class="catalog-item__back">Назад</a>
                        </ul>
                    </div>
                    <hr>
                    <div class="catalog-item__footer">
                        <div class="catalog-item__prices">
                            <div class="catalog-item__old-price">4 750 руб.</div>
                            <div class="catalog-item__price">4 500 руб.</div>
                        </div>
                        <button class="button button_mini">КУПИТЬ</button>
                    </div>
                </div>
            </div>
            <div class="catalog__content">
                <div class="catalog-item">
                    <div class="catalog-item__wrapper">
                        <div class="catalog-item__content catalog-item__content_active">
                            <img src="img/clock-1.png" alt="pulsometr" class="catalog-item__img">
                            <div class="catalog-item__subtitle">Пульсометр Polar FT1</div>
                            <div class="catalog-item__descr">Для первых шагов в тренировках, основанных на сердечном ритме</div>
                            <a href="" class="catalog-item__link">ПОДРОБНЕЕ</a>

                        </div>
                        <ul class="catalog-item__list">
                            <li>Вы услышите звуковое оповещение о нужном пульсе во время тренировки;</li>
                            <li>Вы увидите информативный графический индикатор целевых тренировочных зон пульса;</li>
                            <li>Также Вы увидите информацию о расходе калорий за тренировку;</li>
                            <li>Вы сможете посмотреть данные по 10 тренировкам.</li>
                            <a href="" class="catalog-item__back">Назад</a>
                        </ul>
                    </div>
                    <hr>
                    <div class="catalog-item__footer">
                        <div class="catalog-item__prices">
                            <div class="catalog-item__old-price">4 750 руб.</div>
                            <div class="catalog-item__price">4 500 руб.</div>
                        </div>
                        <button class="button button_mini">КУПИТЬ</button>
                    </div>
                </div>
            </div>
            <div class="catalog__content">
                <div class="catalog-item">
                    <div class="catalog-item__wrapper">
                        <div class="catalog-item__content catalog-item__content_active">
                            <img src="img/clock-1.png" alt="pulsometr" class="catalog-item__img">
                            <div class="catalog-item__subtitle">Пульсометр Polar FT1</div>
                            <div class="catalog-item__descr">Для первых шагов в тренировках, основанных на сердечном ритме</div>
                            <a href="" class="catalog-item__link">ПОДРОБНЕЕ</a>

                        </div>
                        <ul class="catalog-item__list">
                            <li>Вы услышите звуковое оповещение о нужном пульсе во время тренировки;</li>
                            <li>Вы увидите информативный графический индикатор целевых тренировочных зон пульса;</li>
                            <li>Также Вы увидите информацию о расходе калорий за тренировку;</li>
                            <li>Вы сможете посмотреть данные по 10 тренировкам.</li>
                            <a href="" class="catalog-item__back">Назад</a>
                        </ul>
                    </div>
                    <hr>
                    <div class="catalog-item__footer">
                        <div class="catalog-item__prices">
                            <div class="catalog-item__old-price">4 750 руб.</div>
                            <div class="catalog-item__price">4 500 руб.</div>
                        </div>
                        <button class="button button_mini">КУПИТЬ</button>
                    </div>
                </div>
                <div class="catalog-item">
                    <div class="catalog-item__wrapper">
                        <div class="catalog-item__content catalog-item__content_active">
                            <img src="img/clock-1.png" alt="pulsometr" class="catalog-item__img">
                            <div class="catalog-item__subtitle">Пульсометр Polar FT1</div>
                            <div class="catalog-item__descr">Для первых шагов в тренировках, основанных на сердечном ритме</div>
                            <a href="" class="catalog-item__link">ПОДРОБНЕЕ</a>

                        </div>
                        <ul class="catalog-item__list">
                            <li>Вы услышите звуковое оповещение о нужном пульсе во время тренировки;</li>
                            <li>Вы увидите информативный графический индикатор целевых тренировочных зон пульса;</li>
                            <li>Также Вы увидите информацию о расходе калорий за тренировку;</li>
                            <li>Вы сможете посмотреть данные по 10 тренировкам.</li>
                            <a href="" class="catalog-item__back">Назад</a>
                        </ul>
                    </div>
                    <hr>
                    <div class="catalog-item__footer">
                        <div class="catalog-item__prices">
                            <div class="catalog-item__old-price">4 750 руб.</div>
                            <div class="catalog-item__price">4 500 руб.</div>
                        </div>
                        <button class="button button_mini">КУПИТЬ</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="feedback">
        <div class="container">
            <h2 class="title">отзывы клиентов</h2>
            <div class="feedback__content">
                <div class="feedback-item">
                    <div class="feedback-item__wrapper">
                        <div class="feedback-item__content wow animate__animated animate__fadeInUp" data-wow-delay="1s">
                            <img src="img/feedback/ava-1.png" alt="ava1" class="feedback-item__img">
                            <div class="feedback-item__text">
                                <div class="feedback-item__title">Ирина Иванченко</div>
                                <div class="feedback-item__subtitle">2 полумарафона</div>
                                <div class="feedback-item__descr">
                                    Не знала, что себе купить - обратилась к ребятам из RunSmart - подобрали пульсометр, который подошёл именно под мои цели и финансовые возможности.
                                    Через некоторое время решила обновить гаджет - не раздумывая обратилась туда же.
                                    <br><br>
                                    Новые цели - новый гаджет!
                                    <br><br>
                                    Спасибо, RunSmart!
                                </div>
                            </div>
                        </div>
                        <div class="feedback-item__content wow animate__animated animate__fadeInUp" data-wow-delay="1.5s">
                            <img src="img/feedback/ava-2.png" alt="ava1" class="feedback-item__img">
                            <div class="feedback-item__text">
                                <div class="feedback-item__title">Иван Сёмочкин</div>
                                <div class="feedback-item__subtitle">1 полумарафон</div>
                                <div class="feedback-item__descr">
                                    Крутая штука-пульсометр. Обычно без них бегал. Оказывается только хуже себе делал.
                                    Купил пульсометр, ещё в подарок получил тренировку. Со мной вместе провели первую тренировку,
                                    научили пользоваться новым гаджетом.
                                    Также объяснили основы анатомии, составили план тренировок на месяц вперёд.
                                    <br><br>
                                    С ними подготовился к своему первому полумарафону! Спасибо!!!
                                </div>
                            </div>
                        </div>
                        <div class="feedback-item__content wow animate__animated animate__fadeInUp" data-wow-delay="2s">
                            <img src="img/feedback/ava-3.png" alt="ava1" class="feedback-item__img">
                            <div class="feedback-item__text">
                                <div class="feedback-item__title">Юлия Дашкинa</div>
                                <div class="feedback-item__subtitle">2 полумарафона</div>
                                <div class="feedback-item__descr">
                                    Долго не могла начать бегать, т.к. до этого несколько раз начинала,
                                    но становилось тяжело и я бросала. От друзей услышала о RunSmart и о беге
                                    с контролем пульса и решила попробовать.
                                    <br><br>
                                    Позвонила, ребята поинтересовались моими целями и подобрали очень интересный
                                    вариант со скидкой! Теперь бегаю и наслаждаюсь бегом! Пробежала уже 2 полумарафона
                                    и несколько более коротких забегов и не намерена останавливаться!
                                    <br><br>
                                    Спасибо!!!

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <footer class="footer">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.453067001431!2d37.64531157119628!3d55.768002677955565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a636edcd2ad%3A0x4c2ca101e2c8c617!2z0JzRj9GB0L3QuNGG0LrQuNC5INC_0YAt0LQsIDQvMywg0JzQvtGB0LrQstCwLCDQoNC-0YHRgdC40Y8sIDEwNzA3OA!5e0!3m2!1sru!2sua!4v1602331241466!5m2!1sru!2sua"
                allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        <div class="footer__info">
            <div class="footer__content">
                <address class="footer__address">Москва, Мясницкий проезд, д.3с1</address>
                <a href="tel:84999228974" class="footer__phone">8 (499) 922-89-74</a>
                <div class="footer__social">
                    <a href="#" class="footer__social-item">
                        <img src="icons/footer/footer-icon_1.png" alt="facebook">
                    </a>
                    <a href="#" class="footer__social-item">
                        <img src="icons/footer/footer-icon_2.png" alt="instagram">
                    </a>
                    <a href="#" class="footer__social-item">
                        <img src="icons/footer/footer-icon_3.png" alt="pinterest">
                    </a>
                </div>
            </div>
        </div>
    </footer>
    <div class="overlay">
        <div class="modal" id="consultation">
            <div class="modal__close">&times;</div>
            <div class="modal__subtitle">Просто заполните форму заявки</div>
            <div class="modal__descr">и мы перезвоним вам в течении 10 минут</div>
            <form class="feed-form feed-form_mt25" action="#">
                <input name="name" placeholder="Ваше имя" type="text">
                <input name="phone" placeholder="Ваш телефон">
                <input name="email" placeholder="Ваш E-mail" type="email">

                <button class="button button_form">заказать консультацию</button>
            </form>
        </div>

        <div class="modal" id="order">
            <div class="modal__close">&times;</div>
            <div class="modal__subtitle">Ваш заказ:</div>
            <div class="modal__descr">Пульсометр Polar FT1</div>
            <form class="feed-form feed-form_mt25" action="#">
                <input name="name" required placeholder="Ваше имя" type="text">
                <input name="phone" required placeholder="Ваш телефон">
                <input name="email" required placeholder="Ваш E-mail" type="email">

                <button class="button button_form">купить</button>
            </form>
        </div>

        <div class="modal modal_mini" id="thanks">
            <div class="modal__close">&times;</div>
            <div class="modal__subtitle">Спасибо за вашу заявку!</div>
            <div class="modal__descr">Наш менеджер свяжется с вами
                в ближайшее время!</div>
        </div>
    </div>
    <a href="#up" class="pageup">
        <img src="icons/up.svg" alt="up">
    </a>
    <script src="https://code.jquery.com/jquery-1.11.0.min.js"></script>
    <script src="https://code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
    <script src="js/jquery.validate.min.js"></script>
    <script src="js/jquery.maskedinput.min.js"></script>
    <script src="js/slick.min.js"></script>
    <script src="js/wow.min.js"></script>
    <script src="js/script.js"></script>
</body>
</html>