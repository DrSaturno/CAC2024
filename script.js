document.getElementById('contact-form').addEventListener('submit', function (event) {
    var form = event.target;
    var valid = true;

    // Verifica que todos los campos requeridos estén completos
    if (!form.nombre.value || !form.apellido.value || !form.celular.value || !form.email.value || !form.cultivador.value || !form.preferencia.value) {
        valid = false;
    }

    if (!form.terminos.checked) {
        valid = false;
    }

    if (!valid) {
        event.preventDefault();
        alert('Por favor, completa todos los campos requeridos y acepta los términos y condiciones.');
    }
});
// Añade evento clic al botón del menú para alternar la clase "open" en el menú desplegable
document.getElementById('menu-btn').addEventListener('click', function() {
    document.getElementById('dropdown-menu').classList.toggle('open');
});
