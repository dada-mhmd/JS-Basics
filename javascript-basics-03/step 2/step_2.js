let show = document.getElementById('show');
let hide = document.getElementById('hide');

function showHide() {
    show.addEventListener('click', function(){
        this.style.display = "block";
    })

    hide.addEventListener('click', function() {
        this.style.display = "none";
    })
}

showHide();