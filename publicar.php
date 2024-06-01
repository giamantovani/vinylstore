

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre=$_POST['nombre'];
    $banda = $_POST['banda'];
    $album = $_POST['album'];
    $estado = $_POST['estado'];
    $estilo = $_POST['estilo'];
    $correo = $_POST['correo'];
    
    $mensaje = "¡Hola {$nombre}! {$album} de {$banda} ahora será verificado por LADOS B. 
    Te enviaremos un correo a: {$correo} cuando sea publicado en nuestra lista de compra 
    ¡Gracias por confiar en nosotros!";

    header("Location: confirmacion.html?mensaje=" . urlencode($mensaje));
    exit();
}

?>
