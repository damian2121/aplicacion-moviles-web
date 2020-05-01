localStorage.setItem('ver', 'inline-block');

$(document).ready(function () {
    $('#montoId').text(localStorage.getItem('monto'));

    $('article').click(function () {
        let monto = localStorage.getItem('monto');
        if (!monto) {
            localStorage.setItem('monto', 0);
            monto = localStorage.getItem('monto');
        }
        if ($(this).hasClass('seccion--item-selecionado')) {
            $(this).removeClass('seccion--item-selecionado');
            localStorage.setItem('monto', Number.parseFloat(monto) - 1000);
        } else {
            $(this).addClass('seccion--item-selecionado');
            localStorage.setItem('monto', Number.parseFloat(monto) + 1000);
        }
    });
});

$(window).bind('storage', function (e) {
    $('#montoId').text(localStorage.getItem('monto'));
    $('.Carrito').css('display', localStorage.getItem('ver'));
});
$(document).on('scroll', function () {
    var desplazamientoActual = $(document).scrollTop();
    console.log(desplazamientoActual);
    var controlArriba = $('.Carrito');
    if (desplazamientoActual > 150) {
        controlArriba.addClass('Carrito-top');
    }
    if (desplazamientoActual < 100) {
        controlArriba.removeClass('Carrito-top');
    }
});
