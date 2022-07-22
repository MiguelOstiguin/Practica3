(function(){// encerrar la función en()es para proteger el codigo
   var formulario = document.getElementById('formulario'),// se toma la información del id-formulario en html
      // se declaran las variables de acuerdoala class-formulario con cada name en el html
      nombre = formulario.nombre,
      correo = formulario.correo,
      sexo = formulario.sexo,
      terminos = formulario.terminos,
      // se declara la variable error con el id-error del html
      error = document.getElementById('error');
      // se crean las funciones para cada dato:nombre,correo,sexo,terminos
   function validarNombre(e){ // Se escribe el parametroepara que funcione e.preventDefault()
       // alert('hola');
        // esta funcion valida que si el campo de nombre esta vacio muestra un mensaje de error
       if(nombre.value == '' || nombre.value == null){// aplica la condicion si el valor del campo nombre esta vacio
           console.log('Por favor completa el nombre');// mensaje
           error.style.display = 'block'; // modifica la propiedad display que oculta el bloque de erroresyahora mostrarlo
           error.innerHTML +=  '<li>Por favor completa el nombre</li>';// muestra en pantalla el error+el siguiente

           e.preventDefault(); // utiliza el parametroepara que cuando este vacio el campo nombre mande el error
         }else{         
            error.style.display = "none";
         }
   }
    // esta funcion valida que si el campo de correo esta vacio muestra un mensaje de error
   function validarCorreo(e){// Se escribe el parametroepara que funcione e.preventDefault()
      if(correo.value == '' || correo.value == null){// aplica la condicion si el valor del campo correo esta vacio
         console.log('Por favor completa el correo');// mensaje
         error.style.display = 'block';// modifica la propiedad display que oculta el bloque de erroresyahora mostrarlo
         error.innerHTML +=  '<li>Por favor completa el correo</li>';// muestra en pantalla el error+el siguiente

         e.preventDefault();// utiliza el parametroepara que cuando este vacio el campo correo mande el error
      }else{
         error.style.display = 'none'; // si no esta vacio el campo no muestra el error error.style.display
      }
   }

   // para las siguientes funciones aplican los mismos comentarios que las funciones anteriores
   function validarSexo(e){
      if(sexo.value == '' || sexo.value == null){
          console.log('Por favor completa el sexo');
            error.style.display = 'block';
            error.innerHTML +=  '<li>Por favor completa el sexo</li>';
            
            e.preventDefault(); 
      }else{
          error.style.display = 'none';
      }
  
   }

   function validarTerminos(e){
      if(terminos.checked == false){
            console.log('Por favor acepta los terminos');
            error.style.display = 'block';
            error.innerHTML += '<li>Por favor acepta los terminos</li>';
            
            e.preventDefault(); 
      }else{
       error.style.display-'none';
      }
  
   }

   // la funcion validarformulario llamaalas funciones que validan los espacios sin llenar
   function validarFormulario(e){
      error.innerHTML = '';

      validarNombre(e); // se llamaala funcion que valida el llenado del nombre
      validarCorreo(e); // se llamaala funcion que valida el llenado del correo
      validarSexo(e);   // se llamaala funcion que valida la seleccion del sexo
      validarTerminos(e); // se llamaala funcion que valida la seleccion de los terminos
   }
   //la siguiente linea llamaala funcion validarFormulario al momento de presionar el boton
   formulario.addEventListener('submit',validarFormulario);
}())