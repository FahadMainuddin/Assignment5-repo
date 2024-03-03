

const seatPrice =document.getElementById("seat-price")
console.log(seatPrice);



const allBtn =document.getElementsByClassName("card-body")
console.log(allBtn);

for ( const btn of allBtn) {
   btn.addEventListener("click", function (event){

    const seat = event.target.parentNode.childNodes[1].innerText;



  
    // console.log(event.target.parentNode.childNodes[1].innerText);

// Update Seat
const seatsAvailable = document.getElementById("seats-available");
document.getElementById("seats-available").innerText = seatsAvailable - parseInt(card-body);






const selectedSeat =document.getElementById("seat-position-1");
  


const div =document.createElement("div")


const p1 = document.createElement("p");
p1.innerText =seat;
 
div.appendChild(p1);

selectedSeat.appendChild(div)
updateTotalCost(seatPrice)
updateGrandTotal();

 } ) 
}

function updateGrandTotal (status){
    const totalCost =getConvertedValue("Price-total")

if(status==undefined) {

    document.getElementById("grand-total-value").innerText = totalCost;
}
  else{
    const couponCode = document.getElementById("coupon-code").value;
  
  if (couponCode == "Couple 20" || " NEW15"){
      const discounted =totalCost  *.2;
      document.getElementById("grand-total-value").innerText = totalCost - discounted;
  }
    else{
        alert("Enter your valid coupon code")
    }

}

    

}








function updateTotalCost(seatPrice){

const totalCost =getConvertedValue("Price-total")
console.log(totalCost);
const sum = totalCost + 550;
console.log(sum);
document.getElementById("Price-total").innerText = sum;


}














function getConvertedValue(id){
    console.log(id)
    const  seat = document.getElementById(id).innerText;
    console.log(seat)
const convertSeat = parseInt(seat);
return convertSeat;
 
}

