localStorage.setItem('ver', 'inline-block');

$(document).ready(function () {
    $('article').click((elem) => seleccionarElemento(elem));
});

$(window).bind('load storage', function () {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const total = calcularTotal(carrito);

    $('#montoId').text(total);
    $('#cantidadId').text(carrito.length);
    $('.Carrito').css('display', localStorage.getItem('ver'));
});

$(document).on('scroll', function () {
    var desplazamientoActual = $(document).scrollTop();
    var controlArriba = $('.Carrito');
    if (desplazamientoActual > 150) {
        controlArriba.addClass('Carrito-top');
    }
    if (desplazamientoActual < 100) {
        controlArriba.removeClass('Carrito-top');
    }
});

function seleccionarElemento(elem, item) {
    let carrito = localStorage.getItem('carrito');
    if (!carrito) {
        carrito = [];
        localStorage.setItem('carrito', JSON.stringify(carrito));
        carrito = localStorage.getItem('carrito');
    }
    let carritoParse = JSON.parse(carrito);

    if ($(elem).hasClass('seccion--item-selecionado')) {
        $(elem).removeClass('seccion--item-selecionado');
        carritoParse = carritoParse.filter((elem) => elem.id !== item.id);
    } else {
        $(elem).addClass('seccion--item-selecionado');
        carritoParse = JSON.parse(carrito);
        carritoParse.push({ id: item.id, valor: 1000 });
    }
    localStorage.setItem('carrito', JSON.stringify(carritoParse));
}
function calcularTotal(carrito) {
    let valor = 0;
    carrito.forEach((element) => {
        valor = valor + element.valor;
    });

    return valor;
}
function verificarCarrito(item) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    if (carrito.some((element) => element.id === item.id)) {
        $(`#${item.id}`).addClass('seccion--item-selecionado');
    }
}
