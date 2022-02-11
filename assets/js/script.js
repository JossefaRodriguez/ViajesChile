$(document).ready(function () {
    // Inicio smooth scroll
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });

    //Pop Over
    $('[data-toggle="popover"]').popover()
});
$(function(){
    $("#enviarCorreo").click(function(_event)
    { alert("El correo fue enviado correctamente") }); });