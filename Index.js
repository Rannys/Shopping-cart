
var plus = document.querySelectorAll('.plus')
var moins = document.querySelectorAll('.moins')
var totalP = document.querySelector('.total')






Array.from(plus).map(el => {
    el.addEventListener("click", function () {
        let nbr = parseInt(el.nextElementSibling.innerHTML) + 1
        el.nextElementSibling.innerHTML = nbr   
        var price = el.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML;
        totalP.innerHTML =parseInt(price) + parseInt(totalP.innerHTML )
    })
})
Array.from(moins).map(el => {
    el.addEventListener("click", function () {
        let nbr = parseInt(el.previousElementSibling.innerHTML) - 1
        if (nbr >=0){
            el.previousElementSibling.innerHTML--
            var price = el.nextElementSibling.innerHTML;
        totalP.innerHTML =parseInt(totalP.innerHTML )-parseInt(price)
        }         
    })   
})

var changecolor = document.querySelectorAll('.like')
changecolor.forEach(el => {
    el.addEventListener('click', function(){
        el.classList.toggle('red-like')
    })
})
var remove = document.querySelectorAll ('.remove')
remove.forEach(el=>{
    el.addEventListener('click',function(){
         el.parentElement.remove()
    } )
})
 











