// CONTROLADORES SLIDERS
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
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        // pantallas desde 576px hasta 991px
        576: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        // pantallas de 992px en adelante
        768: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        991: {
          slidesPerView: 3,
          spaceBetween: 20,
        }
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

    new Swiper(".bloques-detalle-mobile", {
      loop: true,             // que se repita en bucle
      speed: 800,             // velocidad de transición
      slidesPerView: 1,
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

// PLAY HOVER VIDEOS
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

// SUBMENU HEADER
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

// BTN BUSCADOR AVANZADO
document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('toggleBuscador');
  const buscadorAvanzado = document.querySelector('.buscador-avanzado');
  if (buscadorAvanzado) {
    toggle.addEventListener('change', function () {
      if (this.checked) {
        buscadorAvanzado.style.display = 'flex'; // o 'block' según tu diseño
      } else {
        buscadorAvanzado.style.display = 'none';
      }
    });
  }
});

// ANCLA AL TOP
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

// TABS DETALLE TOUR
document.addEventListener('DOMContentLoaded', function() {
  const tourSection = document.querySelector('.tour');
  
  if (tourSection) {
    const tabLinks = tourSection.querySelectorAll('.menu-tour a');
    const tabPanels = tourSection.querySelectorAll('.panel-tour');
    
    function switchTab(event) {
      event.preventDefault();
      
      // Solo hacer cambios si el tab clickeado no está activo
      if (!this.classList.contains('activo')) {
        // Remover clase activo de todos los tabs y paneles
        tabLinks.forEach(link => link.classList.remove('activo'));
        tabPanels.forEach(panel => panel.classList.remove('activo'));
        
        // Agregar clase activo al tab clickeado
        this.classList.add('activo');
        
        // Mostrar el panel correspondiente
        const targetPanelId = this.getAttribute('data-rel');
        const targetPanel = document.getElementById(targetPanelId);
        
        if (targetPanel) {
          targetPanel.classList.add('activo');
        }
      }
    }
    
    // Agregar event listeners a cada tab
    tabLinks.forEach(link => {
      link.addEventListener('click', switchTab);
    });
  }
});

// MENU MOBILE
document.addEventListener("DOMContentLoaded",()=>{
  const btnMenu = document.querySelector('.btn-menu-mobile');
  const menuMobile = document.querySelector('header .box-nav');
  btnMenu?.addEventListener('click',e => {
    e.preventDefault();
    btnMenu.classList.toggle('open');
    menuMobile.classList.toggle('visible');
  });
  // const items = document.querySelectorAll('.item-vida');
  // items.forEach(item=>{
  //   item.addEventListener("click",()=>{
  //     item.classList.toggle('visible');
  //   });
  // })
});

// ANCLAS DETALLE
document.addEventListener('DOMContentLoaded', function () {
  // Código para el botón "toUp" - solo si existe
  const toUpButton = document.getElementById('toUp');
  if (toUpButton) {
    toUpButton.addEventListener('click', function (e) {
      e.preventDefault();
      smoothScrollTo(0);
    });
  }

  // Código para los anclas - solo si existen
  const links = document.querySelectorAll("a.ancla");
  if (links.length > 0) {  // Verifica que haya al menos un enlace
    for (const link of links) {
      link.addEventListener("click", clickHandler);
    }
  }

  function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    if (!href) return;  // Verifica que el href exista
    
    const targetElement = document.querySelector(href);
    if (!targetElement) return;  // Verifica que el elemento objetivo exista
    
    const offsetTop = targetElement.offsetTop - 150;
    smoothScrollTo(offsetTop);
  }

  function smoothScrollTo(targetPosition) {
    let scrolling = true;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 800;
    let startTime = null;

    const animation = (currentTime) => {
      if (!scrolling) return;
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      
      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    function easeInOutQuad(t, b, c, d) {
      t /= d/2;
      if (t < 1) return c/2*t*t + b;
      t--;
      return -c/2 * (t*(t-2) - 1) + b;
    }

    const cancelScroll = () => {
      scrolling = false;
      window.removeEventListener('wheel', cancelScroll);
      window.removeEventListener('touchstart', cancelScroll);
      window.removeEventListener('keydown', cancelScroll);
    };

    window.addEventListener('wheel', cancelScroll, { passive: true });
    window.addEventListener('touchstart', cancelScroll, { passive: true });
    window.addEventListener('keydown', cancelScroll);

    requestAnimationFrame(animation);
  }
});


  































