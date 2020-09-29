var shoeSize = prompt('what is your shoe size ?');
var birthYear = prompt("when did u born ?");

function func() {
    shoeSize *= 2
    shoeSize += 5
    shoeSize *= 50
    shoeSize = shoeSize - birthYear
    shoeSize += 1766
     window.alert(shoeSize); 
    
    }
func();