function scrollAppear(){
    var introText = document.querySelector('.intro-text');
    var introPosition = introText.getBoundingClientRect().top;
    console.log(introPosition);
    var screenPosition = window.innerHeight ;

    if(introPosition < screenPosition){
       introText.classList.add('intro-appear');
    }
}
//scrollAppear();
window.addEventListener('scroll', scrollAppear);