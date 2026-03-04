$(document).ready(function () {
    // Inicializar Owl Carousel responsivo
    $(".custom-carousel").owlCarousel({
        loop: true,
        nav: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        center: true,
        navText: [
            "<i class='fas fa-chevron-left'></i>", 
            "<i class='fas fa-chevron-right'></i>"
        ],
        responsive: {
            0: { 
                items: 1, 
                margin: 10,
                stagePadding: 30 // Muestra un borde de la sig. tarjeta en móvil (Mejora UX)
            },
            768: { 
                items: 2, 
                margin: 20,
                stagePadding: 0
            },
            1024: { 
                items: 3, 
                margin: 30,
                stagePadding: 0
            }
        }
    });

    // Smooth scrolling para los enlaces del Navbar
    $('a.nav-link').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            
            // Animar el scroll
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 55 // Descuento altura del navbar
            }, 600); // 600ms para que no sea muy lento en móviles
        }
    });
    
    // Auto-colapsar el menú hamburguesa en móviles tras tocar un enlace
    $('.navbar-nav>li>a').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });
});
