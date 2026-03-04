$(document).ready(function () {
    // Inicializar Owl Carousel
    $(".custom-carousel").owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        center: true,
        navText: [
            "&#10094;",
            "&#10095;"
        ],
        responsive: {
            0: { items: 1 },
            768: { items: 2 },
            1024: { items: 3 }
        }
    });

    // Smooth scrolling para los enlaces del Navbar
    $('a.nav-link').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            // Animar el scroll
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 56 // Ajuste por la altura del navbar
            }, 800, function(){
                // Opcional: Agregar hash a la URL cuando termine el scroll
                // window.location.hash = hash;
            });
        }
    });
    
    // Cerrar el menú colapsable de bootstrap en móviles al hacer clic
    $('.navbar-nav>li>a').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });
});
