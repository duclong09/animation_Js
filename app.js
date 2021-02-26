const navigation = document.querySelector('nav');
window.addEventListener('scroll', () => {
    console.log("duclong");
    if(window.scrollY > 30){
        navigation.classList.add('anim-nav');
    }else{
        navigation.classList.remove('anim-nav');
    }

})

window.addEventListener('click', (e) => {
    console.log("long");
    const round = document.createElement('div');
    round.className = 'clickAnim';
    round.style.top = `${e.pageY - 50}px`;
    round.style.left = `${e.pageX - 50}px`;
    document.body.appendChild(round);

    setTimeout(() => {
        round.remove();
    },1500);
})

//input:
const validationInput = document.querySelector('input');
validationInput.addEventListener('input', (e) => {
    if(e.target.value.length >= 3){
        validationInput.style.borderColor = "green";
    }else{
        validationInput.style.borderColor = "yellow";
    }
})