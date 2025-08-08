// window.addEventListener('DOMContentLoaded', (event) => {
//   const existeSlideHome = document.getElementById('slide-home');
//   if (!existeSlideHome) return;

//   const splide = new Splide('#slide-home', {
//     type: 'slide',
//     arrows: true,
//     pagination: false,
//     speed: 800,
//     autoplay: true, 
//     interval: 4000,      
//     pauseOnHover: true,   
//   });

//   splide.mount();
// });

 document.addEventListener('DOMContentLoaded', function () {
    new Swiper(".mySwiper", {
      loop: true,             // que se repita en bucle
      speed: 800,             // velocidad de transición
      autoplay: {
        delay: 4000,          // cada 4 segundos
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    new Swiper(".proyectosDestacados", {
      loop: true,             // que se repita en bucle
      speed: 800,             // velocidad de transición
      slidesPerView: 3,
      spaceBetween: 20,
      autoplay: {
        delay: 4000,          // cada 4 segundos
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    new Swiper(".bloques-detalle", {
      loop: true,             // que se repita en bucle
      speed: 800,             // velocidad de transición
      slidesPerView: 3,
      spaceBetween: 00,
      autoplay: {
        delay: 4000,          // cada 4 segundos
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });





  });

document.addEventListener('DOMContentLoaded', () => {
  const containers = document.querySelectorAll('.media-container');

  // Si no hay ningún elemento, no hace nada
  if (!containers.length) return;

  containers.forEach(container => {
    const video = container.querySelector('video');
    if (!video) return; // seguridad por si falta el video

    container.addEventListener('mouseenter', () => {
      video.currentTime = 0;
      video.play();
    });

    container.addEventListener('mouseleave', () => {
      video.pause();
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const toggles = document.querySelectorAll('.submenu-toggle');

  toggles.forEach(function(toggle) {
    toggle.addEventListener('click', function (e) {
      e.preventDefault();
      const parentLi = this.parentElement;

      // Cierra otros submenús abiertos
      document.querySelectorAll('.has-submenu.activo').forEach(function(otherLi) {
        if (otherLi !== parentLi) {
          otherLi.classList.remove('activo');
        }
      });

      // Toggle solo el clickeado
      parentLi.classList.toggle('activo');
    });
  });

  // Cierra el submenú si se hace clic fuera
  document.addEventListener('click', function(e) {
    const isClickInsideMenu = e.target.closest('.has-submenu');
    if (!isClickInsideMenu) {
      document.querySelectorAll('.has-submenu.activo').forEach(function(openLi) {
        openLi.classList.remove('activo');
      });
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('toggleBuscador');
  const buscadorAvanzado = document.querySelector('.buscador-avanzado');

  if (toggle && buscadorAvanzado) {
    toggle.addEventListener('change', function () {
      if (this.checked) {
        buscadorAvanzado.style.display = 'flex'; // o 'block' según tu diseño
      } else {
        buscadorAvanzado.style.display = 'none';
      }
    });
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const toUpButton = document.getElementById('toUp');

  if (toUpButton) {
    toUpButton.addEventListener('click', function (e) {
      e.preventDefault();

      let scrolling = true;

      const scrollToTop = () => {
        if (!scrolling) return; // Detener si el usuario interrumpe

        const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

        if (currentScroll > 0) {
          window.scrollTo(0, currentScroll - currentScroll / 10);
          requestAnimationFrame(scrollToTop);
        }
      };

      scrollToTop();

      // Si el usuario usa el mouse o teclado, cancela el scroll automático
      const cancelScroll = () => {
        scrolling = false;
        window.removeEventListener('wheel', cancelScroll);
        window.removeEventListener('touchstart', cancelScroll);
        window.removeEventListener('keydown', cancelScroll);
      };

      window.addEventListener('wheel', cancelScroll, { passive: true });
      window.addEventListener('touchstart', cancelScroll, { passive: true });
      window.addEventListener('keydown', cancelScroll);
    });
  }
});



  































