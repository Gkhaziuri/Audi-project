document.getElementById("news-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // ინფუთის ცვლადები
    let firstName = document.getElementById("first-name").value;
    let lastName = document.getElementById("last-name").value;
    let mail = document.getElementById("mail").value;
    let birthDate = document.getElementById("year").value
    let month = document.getElementById("month").value
    let day = document.getElementById("day").value

    // clean up
    document.getElementById("first-name").value = "";
    document.getElementById("last-name").value = "";
    document.getElementById("mail").value = "";
    console.log ("user credentials:", firstName, lastName, mail, birthDate, month, day);

});


function closeModal() {
    const modal = document.getElementById("modal-container")
    modal.style.display = "none"
}

function openModal() {
    const modal = document.getElementById("modal")
    modal.style.display = "block"
}

// function toggleAnswer(question) {
//     const answer = question.querySelector('.answer');
//     const height = answer.scrollHeight;
  
//     if (answer.style.height === '0px') {
//       answer.style.height = height + 'px';
//     } else {
//       answer.style.height = '0px';
//     }
//   }

function toggleAnswer(question) {
    const answer = question.querySelector('.answer');
    const height = answer.scrollHeight;
  
    if (answer.style.height === '0px') {
      answer.style.height = height + 'px';
      question.classList.add('show');
    } else {
      answer.style.height = '0px';
      question.classList.remove('show');
    }
  }
