// Deshabilitar envio de formulario si hay campos no completados
(function () {
    'use strict'

// Obtener formulario para aplicar validación
var forms = document.querySelectorAll('.needs-validation')

// Validación
Array.prototype.slice.call(forms)
    .forEach(function (form) {
        form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            } else {
                alert("REGISTRADO EXITOSAMENTE")
            }
            form.classList.add('was-validated')      
        }, false)
    })
})()

// Botón cancelar
function cancelar() {
    location.reload();
}


