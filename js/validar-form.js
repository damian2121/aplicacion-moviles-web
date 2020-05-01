localStorage.setItem('ver', 'none');
$(document).ready(function () {
    let form = $('#form');
    form.find('input ,select, div').each(function () {
        $(this).blur(function () {
            $(this).removeClass('invalido');
        });
    });
    $('#enviar').click(() => {
        let datos = [];
        let flags = true;
        form.find('input ,select ,textarea').each(function () {
            if ((this.name !== 'comentario' && !this.value) || this.value === '0') {
                $(this).addClass('invalido');
                alert('Los Siguientes campos son obligatorios ' + this.name);
                flags = false;
            } else if (this.name === 'email' && valEmail(this.value)) {
                $("#form > input[type='email']").addClass('invalido');
                alert('El email ingresado es invalido');
                flags = false;
            } else if (
                this.name === 'sexo' &&
                !$("input[name='sexo']:radio").is(':checked') &&
                !$('#radioGenero').hasClass('invalido')
            ) {
                $('#radioGenero').addClass('invalido');
                alert('Debe seleccionar Genero');
                flags = false;
            }
            if (flags) {
                datos.push(this);

                if (this.name === 'sexo' && !this.checked) {
                    datos.pop();
                }
            } else {
                datos = [];
            }
        });
        let myDatos = {};
        if (datos.length > 0) {
            datos.map((elem) => {
                if (elem.name === 'valoracion') {
                    myDatos[elem.name] = elem.options[elem.value].innerText;
                } else {
                    myDatos[elem.name] = elem.value;
                }
            });

            alert(JSON.stringify(myDatos));
        }
    });
    $("input[name='sexo']:radio").click(() => {
        $('#radioGenero').removeClass('invalido');
    });

    $("#form > input[type='text']").keypress(function ({ charCode, which }) {
        var regex = new RegExp('^[a-zA-Z ]+$');
        var key = String.fromCharCode(!charCode ? which : charCode);
        if (!regex.test(key)) {
            event.preventDefault();
            return false;
        }
    });

    $("#form > input[type='email']").blur(function ({ target: { value } }) {
        if (valEmail(value)) {
            $(this).addClass('invalido');
            alert('El email ingresado es invalido');
        }
    });

    $('#idCancelar').click(() => {
        var opcion = confirm('Desea cancelar la operacion');
        if (opcion) {
            window.history.back();
        }
    });
});

function valEmail(email) {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    if (!emailReg.test(email)) {
        return true;
    }
}
$('.Carrito').css('display', 'none');
