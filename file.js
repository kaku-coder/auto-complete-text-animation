let contenor=document.querySelector(".contenor")
const careers =["Developer","Designer","Web Developer","Freelancer"]
let careersindex = 0

let chacrectorindex =0



function updatetext(){
    contenor.innerHTML=`   <h1>I Am a ${careers[careersindex].slice(0,chacrectorindex)}</h1>`;
    chacrectorindex++
    if(chacrectorindex==careers[careersindex].length){
        careersindex++
        chacrectorindex=0
    }
    if (careersindex === careers.length) {
        careersindex=0
    }
    setTimeout(updatetext,400)
}
updatetext()