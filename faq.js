var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

document.getElementById("news-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // ინფუთის ცვლადები
    let firstName = document.getElementById("first-name").value;
    let lastName = document.getElementById("last-name").value;
    let mail = document.getElementById("mail").value;
    let birthDate = document.getElementById("year").value
    let month = document.getElementById("month").value
    let day = document.getElementById("day").value

    console.log ("user credentials:", firstName, lastName, mail, birthDate, month, day);

    let userInfo = {
      firstName: firstName,
      lastName: lastName,
      mail: mail,
      birthDate: birthDate,
      month: month,
      day: day
  };
  localStorage.setItem("userInfo", JSON.stringify(userInfo));

  // Reset form inputs
  document.getElementById("news-form").reset();

});


function closeModal() {
    const modal = document.getElementById("modal-container")
    modal.style.display = "none"
}

function openModal() {
    const modal = document.getElementById("modal")
    modal.style.display = "block"
}

function validationForm() {
  var firstName = document.forms ["news-form"]["first-name"].value
  var lastName = document.forms ["news-form"]["last-name"].value
  var email = document.forms ["news-form"]["mail"].value
  const error = document.getElementById("error");
  const submit = document.createElement("message")
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  error.style.color = "#c03"
  

if (firstName == "") {
  error.textContent = "შეიყვანეთ სახელი!"
  return false;
} 
if (lastName == "") {
  error.textContent = "შეიყვანეთ გვარი!"
  return false;
}
if (email == "") {
  error.textContent = "შეიყვანეთ მეილი!"
  return false;
} 
 if (!email.match(emailRegex)) {
  error.textContent = "შეიყვანეთ ვალიდური მეილი!"
  return false;
 }
 else {
  error.textContent = "წარმატებით გაიგზავნა!"
  error.style.color = "green"
  setTimeout(closeModal, 3000)
 }

return true



}

