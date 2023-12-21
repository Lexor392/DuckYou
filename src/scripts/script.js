function Copy(containerid) {
    let textarea = document.createElement('textarea');
    textarea.id = 'temp';
    textarea.style.height = 0;
    document.body.appendChild(textarea);
    textarea.value = document.getElementById(containerid).innerText;
    let selector = document.querySelector('#temp');
    selector.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
}

$('.slider').slick({
    infinite: true,
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: '<button type="button" class="slick-prev"></button>',
  nextArrow: '<button type="button" class="slick-next"></button>',
    responsive: [
        {
            breakpoint: 1940,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
        },
        {
            breakpoint: 1810,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '20px',
                slidesToShow: 3
            }
        },
        {
            breakpoint: 768,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
});
$('.sliderTwo').slick({
    infinite: true,
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: '<button type="button" class="slick-prev"></button>',
  nextArrow: '<button type="button" class="slick-next"></button>',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
});

// Получаем ссылки на изображение и звуковой файл
const img = document.getElementById('duck1');
const sound = new Audio('src/sounds/duck1.mp3');

// Вешаем обработчик события на наведение мыши на изображение
img.addEventListener('mouseover', () => {
  // Проигрываем звук
  sound.play();
});

// Добавляем обработчик события "click" на элемент с идентификатором "toCopy-one"
$('.button-copy').on('click', function() {
    // Создаем новый объект Audio
    const audio = new Audio('src/sounds/duck2.mp3');
    // Проигрываем звук
    audio.play();
  });

  $('.nav-link').on('click', function() {
      $('.modal').hide();
        $('.modal').removeClass('show');
        $('.modal-backdrop').removeClass('show');
        $('body').css("overflow", "auto");
  });

//   $(document).ready(function () {
//     var windowWidth = $(window).width();

//     if ($(window).width() <= 1920 && $(window).width() >= 990) {
//         $("meta[name='viewport']").attr("content", "width=1920");
//         $('body').css('min-width', '1920px');
//     } else
//     if ($(window).width() <= 990) {
//         $("#media").attr("href", "src/styles/media.css");
//         $("meta[name='viewport']").attr("content", "width=device-width, initial-scale=1");
//         $('body').css('min-width', 'none');
//     }
// });

// function setViewport() {
//     var windowWidth = $(window).width();
//     var viewportContent;
//     var bodyMinWidth;
  
//     if (windowWidth < 990) {
//       // Для устройств шириной менее 768px используем ширину экрана
//       viewportContent = 'width=device-width, initial-scale=1';
//       bodyMinWidth = 'auto';
//     } else {
//       // Для устройств с шириной более 768px используем фиксированную ширину
//       viewportContent = 'width=990, initial-scale=' + windowWidth / 990;
//       bodyMinWidth = '1920px';
//     }
  
//     $('meta[name="viewport"]').attr('content', viewportContent);
//     $('body, html').css('min-width', bodyMinWidth);
//   }
  
//   $(document).ready(function() {
//     setViewport();
//     $(window).on('resize', setViewport);
//   });
  