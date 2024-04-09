document.addEventListener("DOMContentLoaded",function(){
    var sliders = document.querySelectorAll('.slider');
    sliders.forEach(function(slider){
        var sl = slider.querySelectorAll('img'); // obtiene las imagenes de las clases sliders
        var i=0; //indice de la imagen
        function mostrarImagen(index){
            sl.forEach(function(slide){
                slide.style.display = 'none';
            });
            sl[i].style.display = 'block';
        }
        function cambiarAnterior(){
            i = (i-1+sl.length)%sl.length;
            mostrarImagen(i);
        }
        function cambiarSiguiente(){
            i = (i+1)%sl.length;
            mostrarImagen(i);
        }
        sl.addEventListener('click',function(event){
            var clicX = event.clientX; //obtengo la posición X del click
            var screenWidth = window.innerWidth; // obtengo el ancho de la pantalla
            var centroPantalla = screenWidth / 2; // el centro de la pantalla
            if(clicX<centroPantalla){
                cambiarAnterior();
            }else{
                cambiarSiguiente();
            }
        });
        mostrarImagen(i);
    });
});