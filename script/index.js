let opinions = document.querySelectorAll(".review")
console.log(opinions)
opinions.forEach(initSlideShow)

function initSlideShow(slideshow) {
    let opinions = document.querySelectorAll(".review")
    console.log(opinions)
    let index = 0, time = 6000;
    if(index === 0){
        opinions[index].classList.add("displayedOpinion")
        opinions[index+1].classList.add("displayedOpinion")
        opinions[index+2].classList.add("displayedOpinion")

    }
    else if(index === opinions.length){
        opinions[index].classList.add("displayedOpinion")
        opinions[index-1].classList.add("displayedOpinion")
        opinions[index-2].classList.add("displayedOpinion")
    }
    else{
        opinions[index].classList.add("displayedOpinion")
        opinions[index+1].classList.add("displayedOpinion")
        opinions[index-1].classList.add("displayedOpinion")
        }
    setInterval(() => {
        if(index === 0){
            opinions[index].classList.remove("displayedOpinion")
            opinions[index+1].classList.remove("displayedOpinion")
            opinions[index+2].classList.remove("displayedOpinion")
    
        }
        else if(index === opinions.length-1){
            opinions[index].classList.remove("displayedOpinion")
            opinions[index-1].classList.remove("displayedOpinion")
            opinions[index-2].classList.remove("displayedOpinion")
        }
        else{
            opinions[index].classList.remove("displayedOpinion")
            opinions[index+1].classList.remove("displayedOpinion")
            opinions[index-1].classList.remove("displayedOpinion")
            }
        index++
        console.log(index === opinions.length-1)
        if (index === opinions.length){
            index = 0;
        }
        if(index === 0){
            opinions[index].classList.add("displayedOpinion")
            opinions[index+1].classList.add("displayedOpinion")
            opinions[index+2].classList.add("displayedOpinion")
    
        }
        else if(index === opinions.length-1){
            opinions[index].classList.add("displayedOpinion")
            opinions[index-1].classList.add("displayedOpinion")
            opinions[index-2].classList.add("displayedOpinion")
        }
        else{
            opinions[index].classList.add("displayedOpinion")
            opinions[index+1].classList.add("displayedOpinion")
            opinions[index-1].classList.add("displayedOpinion")
            }
    }, time);
}