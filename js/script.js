const hamburger = document.querySelector('.hamburger'),
    overlay = document.querySelector('.menu_overlay'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu_close'),
    menuLink = document.querySelectorAll('.menu_link');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

overlay.addEventListener('click', () => {
    menu.classList.remove('active');
});

menuLink.forEach(element => {
    element.addEventListener('click', () => {
        menu.classList.remove('active');
    });
});

const counters = document.querySelectorAll('.skills_ratings-counter'),
    section = document.querySelector('.skills_ratings'),
    lines = document.querySelectorAll('.skills_ratings-line span');

function showCounter() {
    counters.forEach((element, i) => {
        lines[i].style.opacity = 1;
        lines[i].style.width = element.innerHTML;
    });
}

function hideCounter() {
    counters.forEach((element, i) => {
        lines[i].style.opacity = 0;
        lines[i].style.width = 0;
    });
}

window.addEventListener('scroll', () => {
    const screenPosition = window.pageYOffset;

    if (screenPosition >= 3510 || screenPosition <= 2760) {
        hideCounter();
    } else {
        showCounter();
    }

});

// Слайдер для изображений;

const imageUrls = [
    'img/jpg/main_ph_1.jpg',
    'img/jpg/main_ph_2.jpg',
    'img/jpg/main_ph_3.jpg'
  ];
  
  function startImageSlider(imageUrls) {
    let currentIndex = 0;
    const sliderImages = document.querySelectorAll('.promo_slider img');
  
    setInterval(() => {
      currentIndex = (currentIndex + 1) % imageUrls.length;
      sliderImages.forEach((img, index) => {
        if (index === currentIndex) {
          img.style.display = 'block';
        } else {
          img.style.display = 'none';
        }
      });
    }, 5000); // меняем изображение каждые 5 секунд
  }
  
  startImageSlider(imageUrls);
  