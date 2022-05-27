    let id = (id) => document.getElementById(id);
    let classes = (classes) => document.getElementsByClassName(classes);
    let nombreApellido = id("FormNombre"),
        eMail = id("FormEmail"),
        telefono = id("FormTelefono"),
        form = id("FormContacto"),
        suConsulta = id("FormConsulta"),
        mensajeError = classes("Error");
    
    //Evitamos que se envíe el formulario si alguno de los campos está vacío 

    form.addEventListener("submit", (e) => {
        
        let esNombreValido = validacionFormulario(nombreApellido, 0, "Complete su nombre y su apellido");
        let esEmailValido = validacionFormulario(eMail, 1, "Complete su email");
        let esTelValido = validacionFormulario(telefono, 2, "Complete su teléfono");
        let esConsultaValida = validacionFormulario(suConsulta, 3, "Complete su consulta");

        if (esNombreValido&&esEmailValido&&esTelValido&&esConsultaValida){

        }

        else {
        e.preventDefault();
        }
        

        });
          

    let validacionFormulario = (id, Errores, mensajeErrorPantalla) => {

        if (id.value.trim() === "") {
          mensajeError[Errores].innerHTML = mensajeErrorPantalla;
          id.style.border = "2px solid red";
          return false;
        } 
        
        else {
          mensajeError[Errores].innerHTML = "";
          id.style.border = "2px solid green";
          return true;
        }
    };   

      //Limpiamos los campos, los mensajes de error y los resaltados al tocar "Limpiar"

      form.addEventListener("reset", (e) => {
        
        let esNombreLimpio = limpiezaFormulario(nombreApellido, 0, "");
        let esEmailLimpio = limpiezaFormulario(eMail, 1, "");
        let esTelLimpio = limpiezaFormulario(telefono, 2, "");
        let esConsultaLimpia = limpiezaFormulario(suConsulta, 3, "");

        if (esNombreLimpio&&esEmailLimpio&&esTelLimpio&&esConsultaLimpia){

        }

        else {
        e.preventDefault();
        }
        

        });
          

    let limpiezaFormulario = (id, Errores, mensajeErrorLimpio) => {

        if (id.value.trim() > 0) 
        {
          mensajeError[Errores].innerHTML = mensajeErrorLimpio;
          id.style.border = "";
          return true;
        } 
        
        else {
          mensajeError[Errores].innerHTML = mensajeErrorLimpio;
          id.style.border = "";
          return true;
        }
        

      };
