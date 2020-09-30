var imgs = document.querySelectorAll("img");


function changeImg(imgs){

    Array.from(imgs).forEach((img, i) => {
        let endofsrc = img.src
             console.log(endofsrc.slice(-5) , i+1)   
            console.log(endofsrc.slice(38,-4) + "_2.jpg")
            //console.log(endofsrc)
         img.addEventListener("mouseover", function(e) {

            e.target.src = ("images/" + endofsrc.slice(38,-4) + "_2.jpg")  

         })
         img.addEventListener("mouseout", function(e){
            e.target.src = `images/image${i+1}.jpg`
        });
    }) 

}


changeImg(imgs)