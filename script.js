let cups = document.querySelector('.cups')
let cupSmall = document.querySelectorAll('.small-cup')
let bigCup = document.querySelector('.cup')
let percentage = document.querySelector('.percentage')


updateBigcup()


cupSmall.forEach((cup, idx) =>{

    cup.addEventListener('click',() => highlightCups(idx))
})

function highlightCups(idx) {

if(cupSmall[idx].classList.contains('full') && !cupSmall[idx].nextElementSibling.classList.contains('full')){
    idx--
}

    cupSmall.forEach((cup, idx2)=>{
        if (idx2 <= idx) {
            cup.classList.add('full')
            
        }
        else(
            cup.classList.remove('full')
        )

    })

    updateBigcup()
    
}

function updateBigcup(){
    const fullCups = document.querySelectorAll('.small-cup.full').length
    const totalCups = cupSmall.length

    if (fullCups === 0) {
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0
        
    }
    else{

        percentage.style.visibility = 'visible'
        percentage.style.height = `${fullCups/totalCups *330 }px`
        percentage.innerHTML = `${fullCups/totalCups * 100}%`
    }


}