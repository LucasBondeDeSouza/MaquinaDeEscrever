function typeWriter(el){
    const mainText = el.innerHTML.split("")
    el.innerHTML=''
    mainText.forEach(function(letter, i) {

        setTimeout(function(){
            el.innerHTML += letter
        }, 160 * i)
    })
}

const phrase = document.querySelector('.mainSentence')
typeWriter(phrase)