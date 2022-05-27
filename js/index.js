    let id = (id) => document.getElementById(id);
    let classes = (classes) => document.getElementsByClassName(classes);
    let nombreApellido = id("FormNombre"),
        eMail = id("FormEmail"),
        telefono = id("FormTelefono"),
        form = id("FormContacto"),
        suConsulta = id("FormConsulta"),
        mensajeError = classes("Error");
    
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        
        validacionFormulario(nombreApellido, 0, "Complete su nombre de usuario");
        validacionFormulario(eMail, 1, "Complete su email");
        validacionFormulario(telefono, 2, "Complete su teléfono");
        validacionFormulario(suConsulta, 3, "Complete su consulta");

        });
          

    let validacionFormulario = (id, Errores, mensajeErrorPantalla) => {

        if (id.value.trim() === "") {
          mensajeError[Errores].innerHTML = mensajeErrorPantalla;
          id.style.border = "2px solid red";
        } 
        
        else {
          mensajeError[Errores].innerHTML = "";
          id.style.border = "2px solid green";
        }

        
      };