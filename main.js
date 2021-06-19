


let currentDroppable = null;

    ovni.onmousedown = function(event) {

      let shiftX = event.clientX - ovni.getBoundingClientRect().left;
      let shiftY = event.clientY - ovni.getBoundingClientRect().top;

      ovni.style.position = 'absolute';
      ovni.style.zIndex = 1000;
      document.body.append(ovni);

      moveAt(event.pageX, event.pageY);

      function moveAt(pageX, pageY) {
        ovni.style.left = pageX - shiftX + 'px';
        ovni.style.top = pageY - shiftY + 'px';
      }

      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);

        ovni.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        ovni.hidden = false;

        if (!elemBelow) return;

        let droppableBelow = elemBelow.closest('.miss');
        if (currentDroppable != droppableBelow) {
          if (currentDroppable) { // nulo cuando no estábamos sobre un droppable antes de este evento
            leaveDroppable(currentDroppable);
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) { // nulo si no vamos a pasar por un droppable ahora
            // (tal vez solo dejó el desplegable
            enterDroppable(currentDroppable);
          }
        }
      }

      document.addEventListener('mousemove', onMouseMove);

      ovni.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        ovni.onmouseup = null;
      };

    };

    function enterDroppable(elem) {
    	//cambia el color y la imagen
      elem.style.background = 'pink';
      elem.style.borderRadius='15px';
      document.getElementById('ovni').src = "img/explocion.png";
      funcionVida();
    }

    function leaveDroppable(elem) {
      elem.style.background = '';
    }

    ovni.ondragstart = function() {
      return true;
    };


//temporisador

	
	let i=0;
	let time=document.querySelector('.tiempo');
	x=setInterval(function(){

		time.innerHTML=i;
			i++;
	},1000);

	n=100;
	//detener
	function detener(){
		clearInterval(x);
			clearInterval(z);
setInterval("actualizar()",2000);
	}
	let puntito=document.querySelector('.puntotes');
	z=setInterval(function(){

		puntito.innerHTML=n;
			n=n+100;
	},1000);
	let vidass=1;

//vida
 function funcionVida(){
 	
 	detener();
 	const life=document.querySelector('.vidas');
 	

 }
 function actualizar(){
	vidass=vidass-1;
 
    alert('Te quedaste sin vidas GAME OVER');

    window.location.href ="index.html";



	}
 



//

