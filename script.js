const accessKey="BzETk2qVd1zYoZey1OlZWVccSM3USDvP2nttDHNLkMI";
const form=document.getElementById("Search");
const box=document.getElementById("search box");
const Result=document.getElementById("image-container");
const More=document.getElementById("more-button");

let keyword="";
let page=1;
async function searchImages(){
    keyword=box.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=9`;
    const reponse = await fetch(url);
    const data= await reponse.json();
    
    


    const results=data.results;
     results.map((result) =>{
        const image=document.createElement("img");
        image.src=result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href=result.links.html;
        imageLink.target="_blank";
        imageLink.appendChild(image);
        Result.appendChild(imageLink);
    })
    More.style.display="block";
}



form.addEventListener("submit",(e) =>{
    e.preventDefault();
    Result.innerHTML='';
    page=1;
    searchImages();
});

More.addEventListener("click",()=>{
  page++;
  searchImages();
})
