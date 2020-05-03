const urlPelotas = 'https://www.json-generator.com/api/json/get/bIOVfDVzaW?indent=2',
    urlCamisetas = 'https://www.json-generator.com/api/json/get/cfdzqUUeEO?indent=2',
    urlZapatillas = 'https://www.json-generator.com/api/json/get/cuSbIljKhu?indent=2',
    urlAros = 'https://www.json-generator.com/api/json/get/bIulZbDUya?indent=2';

function mostrarObjeto(seccion, descripcion, url) {
    var formPrincipal = $('#formPrincipal');
    $.get(url, formPrincipal.serialize())
        .done(function (response) {
            $.each(response, function (i, item) {
                formPrincipal.find(seccion + ' .seccion--container').append(
                    $(`<article id=${item.id} />`)
                        .click(function () {
                            seleccionarElemento(this, item);
                        })
                        .addClass('seccion--item')
                        .append(
                            $('<img/>').css({ 'background-image': 'url(' + item.img + ')' }),
                            $('<figcaption/>').text(item.titulo)
                        )
                );
                verificarCarrito(item);
            });
        })
        .fail(function () {
            alert('Error al buscar: ' + descripcion);
        });
}
