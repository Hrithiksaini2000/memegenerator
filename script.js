const generatememebtn=document.querySelector(".meme-generator .generator-meme-btn");

const memetitle=document.querySelector(".meme-generator .meme-title");

const memeauthor=document.querySelector(".meme-generator .meme-author");

const memeImg=document.querySelector(".meme-generator img")

const updateDetails=(url,title,author)=>{
    memeImg.setAttribute("src", url);
    memetitle.innerHTML=title
    memeauthor.innerHTML=`Meme by: ${author}`
}
const generatememe=()=>{
    fetch("https://meme-api.com/gimme/wholesomememes").then((response)=>response.json())
    .then((data)=>{
        updateDetails(data.url,data.title,data.author)
    })
}

generatememebtn.addEventListener("click",generatememe);
generatememe();

