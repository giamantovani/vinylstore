
function validacionBanda(event){
    
    const name = document.getElementById('nombre').value;
    if (name.length < 3) {
        alert('El nombre debe tener al menos 3 caracteres');
        event.preventDefault();
        return false;
    } else {
        return true;
    }
}