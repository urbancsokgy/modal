 // Get the modal
 const modal = document.querySelector('.modal');

 function visible(){
 
   modal.classList.add('visible');
   console.log('visible');
 }
 
 function hide(){
   modal.classList.remove('visible');
   modal.classList.add('hidden');
   console.log('hidden');
   
 }
 
 // When the user clicks anywhere outside of the modal, close it
 window.onclick = function(event) {
   if (event.target == modal) {
     modal.classList.remove('visible')
     modal.classList.add('hidden');
     }
   }
  