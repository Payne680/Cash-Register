// query selectors:

const billAmt = document.querySelector("#bill-amt");
const cashGiven = document.querySelector('#pay-amt');
const submitButton = document.querySelector('#btn-check');
const numNotes = document.querySelectorAll(".notes-change");
const message = document.querySelector(".usr-msg");


const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

submitButton.addEventListener("click", function validateBillAndCashAmount() {
  showMessage("");
  if (billAmt.value > 0) {
    if (cashGiven.value >= billAmt.value) {
      const amountToBeReturned = cashGiven.value - billAmt.value;
      calculateChange(amountToBeReturned);
    }
    else {
      showMessage("Do you wanna wash plates?");
    }
  } 
  else {
    showMessage("Invalid Bill Amount");
  }
});

function calculateChange(amountToBeReturned) {
  for (let i = 0; i < availableNotes.length; i++) {
    const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
    amountToBeReturned = amountToBeReturned % availableNotes[i];
    numNotes[i].innerText = numberOfNotes;
  }
}
function showMessage(msg) {
  message.style.display = "block";
  message.innerText = msg;
}