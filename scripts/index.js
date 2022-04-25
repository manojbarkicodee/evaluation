// Store the wallet amount to your local storage with key "amount"
let addamount=document.querySelector("#add_to_wallet")
// let amount=[]
addamount.addEventListener("click",myfun)
let sum=0
let sum2=JSON.parse(localStorage.getItem("amount"))
function myfun(){
   
    let amount=document.querySelector("#amount").value
    sum=sum+Number(amount)
    // amount1.push(sum)
    

display.innerText=sum
localStorage.setItem("amount",sum)
}
let display=document.querySelector("#wallet")

display.innerText=sum2