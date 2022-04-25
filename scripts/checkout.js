// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";

// Else show "Booking successfull!" and adjust the wallet amount in real time
let amount=JSON.parse(localStorage.getItem("amount"))
let display=document.querySelector("#wallet")
display.innerText=amount
let data=JSON.parse(localStorage.getItem("movie"))
let container=document.querySelector("#movie")
function appenddata(data){
    let box=document.createElement("div")
    let head=document.createElement("h1")
head.innerText=data.Title
    let img=document.createElement("img")
    img.src=data.Poster
    box.append(head,img)
    container.append(box)
}
appenddata(data)
let btn=document.querySelector("#confirm")
btn.addEventListener("click",myfun)
function myfun(){

    let ino=document.querySelector("#number_of_seats").value
    let x=ino*100
    console.log(x)
    if((ino*100)>amount){
        alert("Insufficient Balance!")
    }
    else if((ino*100)<=amount){
        
        let sum2=Number(amount)-Number(x)
        console.log(sum2)
localStorage.setItem("amount",JSON.stringify(sum2))
        alert("Booking Successful!")
        window.location.reload()
    }
}