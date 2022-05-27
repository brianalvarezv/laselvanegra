    let id = (id) => document.getElementById(id);
    let classes = (classes) => document.getElementsByClassName(classes);
    let nombreApellido = id("FormNombre"),
        eMail = id("FormEmail"),
        telefono = id("FormTelefono"),
        form = id("FormContacto"),
        suConsulta = id("FormConsulta"),
        mensajeError = classes("Error");
    
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
