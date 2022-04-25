// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
let amount=JSON.parse(localStorage.getItem("amount"))
let display=document.querySelector("#wallet")
let id;
display.innerText=amount
let url="https://www.omdbapi.com/?s=kgf&apikey=a51bf06f"
let search=document.querySelector("#search")
async function searchmovies(){
    let url=`https://www.omdbapi.com/?s=${search.value}=&apikey=a51bf06f`
    try{
        let data=await fetch(url)
        let data1=await data.json()
        return data1
        // appenddata(data1)
    }catch(err){
        console.log(err)
    }
}
function appenddata(data3){
    let container=document.querySelector("#movies")
    container.innerHTML=""
    let data4=data3.Search
    if(data4===undefined){
        return false
    }
    data4.map((el)=>{

let box=document.createElement("div")
let img=document.createElement("img")
img.src=el.Poster
let name=document.createElement("p")
name.innerText=el.Title
let btn=document.createElement("button")
btn.innerText="book now"
btn.setAttribute("class","book_now")
btn.addEventListener("click",function(){
checkout(el)
})
box.append(img,name,btn)
container.append(box)

    })
}
async function main(){
let data5=await searchmovies()


appenddata(data5)
}
function debounce(main){
if(id){
    clearTimeout(id)
}
id=setTimeout(function(){
main()
},1000)
}
function checkout(el){
    console.log(el)
    localStorage.setItem("movie",JSON.stringify(el))
    window.location.href="checkout.html"
}