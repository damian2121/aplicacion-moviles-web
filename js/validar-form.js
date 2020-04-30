(function(){
var formulario= document.form,
elementos= formulario.elements,
boton=document.getElementById('enviar');
var valnombre= function(e){
    if(formulario.nombre.value == 0){
        formulario.email.className= formulario.email.className + ' invalido';
        alert("el campo nombre está vacio");
        e.preventDefault();

    }
};

var valapellido= function(e){
    if(formulario.apellido.value == 0){
        formulario.email.className= formulario.apellido.className + ' invalido';
        alert("el campo apellido está vacio");
        e.preventDefault();
    }
};

var valemail=function(e){
    if( !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(formulario.email.value)) ) {
        alert("ingrese una direccion de mail por favor");
        formulario.email.className= formulario.email.className + ' invalido';
        e.preventDefault();
      }
      else{
          formulario.email.className= formulario.email.className.replace(" invalido", "");
      }
} 


var valdate= function(e){
    var RegExPattern = /^\d{1,2}\/\d{1,2}\/\d{2,4}$/;
    if ((!formulario.fecha.value.match(RegExPattern)) && (formulario.fecha.value="")) {
        alert("ingrese un formato de fecha correcto");
        formulario.fecha.className= formulario.fecha.className + ' invalido';
        e.preventDefault();
        
          
    } else {
        formulario.fecha.className= formulario.fecha.className.replace(" invalido", "");
        
    }
};

var valSelect= function(e){
    if(formulario.valoracion.value== 0)
          {
           alert("Selecciona Una opción");
           formulario.valoracion.className= formulario.valoracion.className +' invalido';
           e.preventDefault();
           
          }
    else{
        formulario.valoracion.className= formulario.valoracion.className.replace("");

    }

};

var validarSexo= function(e){
    if(formulario.sexo[0].checked==true || formulario.sexo[1].checked==true){
    }
    else{
        alert("elije algun sexo");
        e.preventDefault();
        
    }
    
}


var validarForm=function(e){
    valnombre(e);
    valapellido(e);
    valemail(e);
    valdate(e);
    valSelect(e);
    validarSexo(e);
};

formulario.addEventListener("submit", validarForm);
}());