let show = document.getElementById('show');
let hide = document.getElementById('hide');
let txt = document.getElementById('texte')

function showHide() {
    show.addEventListener('click', function(){
        txt.style.display = "block";
    })

    hide.addEventListener('click', function() {
        txt.style.display = "none";
    })


}
    
showHide();