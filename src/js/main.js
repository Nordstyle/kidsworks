/**
 * Закрепленное к верху меню навигации
 */
const fixedNavigationMenu = () => {
  const navigation = document.querySelector('.header');
  window.onscroll = () => {
    if(window.pageYOffset > 10) {
      navigation.style.backgroundColor = 'rgba(255,255,255,0.9)';
      navigation.style.paddingTop = '1rem';
      navigation.style.paddingBottom = '1rem';
    } else {
      navigation.style.backgroundColor = '';
      navigation.style.paddingTop = '';
      navigation.style.paddingBottom = '';
    }
  }
};
fixedNavigationMenu();

const swiper = new Swiper('.mainSlider .swiper-container', {
  slidesPerView: 1.8,
  loopAdditionalSlides: 2,
  centeredSlides: true,
  loop: true,
  navigation: {
    nextEl: '.mainSlider.swiper-button-next',
    prevEl: '.mainSlider.swiper-button-prev',
  },
  breakpoints: {
    // when window width is <= 320px
    1000: {
      slidesPerView: 1.2
    },
    660: {
      slidesPerView: 1
    },
  }
});

//Smooth scroll
const scroll = new SmoothScroll('a[href*="#"]', {
  offset: 100
});




const options = {
  slidesPerView: 6,
  freeMode: true,
  navigation: {
    prevEl: '.DoubleSlider .swiper-button-next',
    nextEl: '.DoubleSlider .swiper-button-prev'
  },
  breakpoints: {
    1000: {
      slidesPerView: 4,
    },
    667: {
      slidesPerView: 2,
    }
  }
}
const options2 = {
  ...options,
  slidesPerView: 5

}

new Swiper('.DoubleSlider__slider1', options)
new Swiper('.DoubleSlider__slider2', options2)


/* Политика конфиденциальности */
/* Шаблон страницы политики конф. */
const politic = `<div style="font-size: 1.6rem; line-height: 2.4rem;">
  <h2>Политика конфиденциальности</h2>
  <p>Настоящий документ «Политика конфиденциальности» представляет собой правила использования персональной информации Пользователя.</p>
  <p>Предоставляя свои персональные данные Пользователь даёт согласие на обработку, хранение и использование своих персональных данных на основании ФЗ № 152-ФЗ «О персональных данных» от 27.07.2006 г. в следующих целях:</p>
  <ul>
    <li>Установления с Пользователем обратной связи, включая направление уведомлений, запросов, касающихся использования Сайта, оказания услуг, обработку запросов и заявок от Пользователя.</li>
    <li>Осуществление клиентской поддержки</li>
    <li>Получения Пользователем информации о маркетинговых событиях</li>
    <li>Проведения аудита и прочих внутренних исследований с целью повышения качества предоставляемых услуг</li>
  </ul>
  <h3>Персональная информация</h3>
  <p>Под персональными данными подразумевается любая информация, предоставляемая пользователем самостоятельно, включая персональные данные пользователя, такие как:</p>
  <ul>
  <li>Фамилия, Имя, Отчество</li>
  <li>Контактный телефон</li>
  <li>Адрес электронной почты</li>
  </ul>
  А также данные, которые передаются в автоматическом режиме.
  <p>Персональные данные Пользователей хранятся исключительно на электронных носителях и обрабатываются с использованием автоматизированных систем, за исключением случаев, когда неавтоматизированная обработка персональных данных необходима в связи с исполнением требований законодательства.</p>
  <p>Компания обязуется не передавать полученные персональные данные третьим лицам, за исключением следующего случая:</p>
  <ul>
  <li>По запросам уполномоченных органов государственной власти РФ только по основаниям и в порядке, установленным законодательством РФ.</li>
  </ul>
  <p> Компания оставляет за собой право вносить изменения в одностороннем порядке в настоящие правила, при условии, что изменения не противоречат действующему законодательству РФ. Изменения условий настоящих правил вступают в силу после их публикации на Сайте.
  </p></div>
`;

const politicModal = new tingle.modal({
  stickyFooter: false,
  closeMethods: ['overlay', 'button', 'escape'],
  closeLabel: "Закрыть",
  cssClass: ['politic_wrapper', 'custom-class-2']
});

const showPolitics = () => {
  politicModal.setContent(politic);
  politicModal.open();
};

const politicHandlers = () => {
  const links = [...document.querySelectorAll('.politic__open')];
  if (!links) return null;

  links.forEach(item => {
    item.onclick = () => {
      showPolitics();
    };
  });
};
politicHandlers();




// Modal callback header
var callBackModal = new tingle.modal({
  stickyFooter: false,
  closeMethods: ['overlay', 'button', 'escape'],
  closeLabel: "Закрыть",
  cssClass: ['call__wrapper', 'custom-class-2'],
  onOpen: function(){
    const button = document.querySelector('.politic__open');

    button.onclick = (e) => {
      e.preventDefault();
      showPolitics();
    };
  },
});

// wrapper callback
const callBackWrap = () => {
  return`
    <div class="call">
      <div class="call__title">Заказать звонок</div>
      <form class="call__form">
        <div class="contacts__form_item call__item">
          <input type="text" name="name" class="contacts__form_input call__input" required/>
          <label class="contacts__form_label"> Ваше имя </label>
        </div>
        <div class="contacts__form_item call__item">
          <input type="tel" name="tel" class="contacts__form_input call__input" required/>
          <label class="contacts__form_label"> Ваш телефон </label>
        </div>
        <div class="contacts__form_offer call__offer">
          <label>
            <input type="checkbox" class="contacts__form_checkbox" id="check-modal" />
            <span />
          </label>
          <div>Я принимаю <a class="politic__open"><span>соглашение сайта</span></a> об обработке персональных данных</div>
        </div>
        <div class="contacts__form_footer">
          <button type="submit" class="button"> Отправить </button>
        </div>
      </form>
    </div>
  `;
};

const callBack = () => {
  const callBackButton = Array.prototype.slice.call(document.querySelectorAll('.header__callback'));
  if(!callBackButton) return null;

  callBackButton.forEach(item => {
    item.onclick = (e) => {
      e.preventDefault();

      callBackModal.setContent(callBackWrap());
      callBackModal.open();

      const checkbox = document.querySelector('#check-modal');
      const telInputs = [...document.querySelectorAll('input[type="tel"]')];

      telInputs.forEach(input => new Inputmask('+7 (999) 999-99-99').mask(input));

      document.querySelector(".call__form").onsubmit = (e) => {
        e.preventDefault();
        if(!checkbox.checked){
          alertify.error("Вы не приняли соглашение об обработке персональных данных");
        } else {
          sendMail('.call__form').then(() => (alertify.success("Ваша заявка отправленна"), document.querySelector(".call__form").reset()));
          callBackModal.close();
        }
      };
    };
  });
};
callBack();



/**
 * Отправка заявки контакты
 */
var contactsForm = () => {
  const form = document.querySelector(".contacts__form");
  if(!form) return null;

  const submit = document.querySelector('.footer__submit');
  const checkbox = document.querySelector('.contacts__form_checkbox');

  form.onsubmit = (e) => {
    e.preventDefault();
    if(!checkbox.checked){
      alertify.error("Вы не приняли соглашение об обработке персональных данных");
    } else {
      sendMail('.contacts__form').then(() => (alertify.success("Ваша заявка отправленна"), document.querySelector(".contacts__form").reset()));
    }
  };
};
contactsForm();


// почта
var sendMail = (selector) => {
  return fetch('/mail.php', {
    method: 'POST',
    body: new FormData(document.querySelector(selector))
  }).catch((error) => {
    alertify.error("Ошибка. Повторите отправку позже");
  });
};


/**
 * Открытие/Закрытие мобильного меню
 */
!function(){
  const body = document.querySelector('body')
  const menuButton = document.querySelector('.mobile__menu');
  const menuItems = document.querySelectorAll('.header__li a')
  const closeButton = document.querySelector('.header__close');
  const menu = document.querySelector('.header__nav');
  menuItems.forEach(el=>{
    el.onclick = () => {
      menu.style.transform = '';
      body.style.overflow = "";
    }
  })
  menuButton.onclick = () => {
    menu.style.transform = 'translateX(0%)';
    body.style.overflow = "hidden";
  }
  closeButton.onclick = () => {
    menu.style.transform = '';
    body.style.overflow = "";
  }
}()


lightGallery(document.querySelector('.DoubleSlider__slider1 .swiper-wrapper'));
lightGallery(document.querySelector('.DoubleSlider__slider2 .swiper-wrapper'));