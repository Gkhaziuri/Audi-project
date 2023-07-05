document.getElementById("news-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // ინფუთის ცვლადები
    let firstName = document.getElementById("first-name").value;
    let lastName = document.getElementById("last-name").value;
    let mail = document.getElementById("mail").value;
    let birthDate = document.getElementById("year").value
    let month = document.getElementById("month").value
    let day = document.getElementById("day").value

    let firstCheckboxYes = document.getElementById("first-checkbox-yes")
    let firstCheckboxNo = document.getElementById("first-checkbox-no")
    let secondCheckboxSecondhand = document.getElementById("second-checkbox-secondhand")
    let secondCheckboxNew = document.getElementById("second-checkbox-new")
    let secondCheckboxNo = document.getElementById("second-checkbox-no")
    let thirdCheckboxService = document.getElementById("third-checkbox-about-service")
    let thirdCheckboxCars = document.getElementById("third-checkbox-about-cars")
    let thirdCheckboxBrand = document.getElementById("third-checkbox-about-brand")
    


    firstCheckboxYes.addEventListener("click", function(){
        firstCheckboxYes.checked = true;
        firstCheckboxNo.checked = false;
    })
    firstCheckboxNo.addEventListener("click", function(){
        firstCheckboxYes.checked = false;
        firstCheckboxNo.checked = true;
    })

    // 
    // secondCheckboxSecondhand.addEventListener("click", function(){
    //     secondCheckboxSecondhand.checked = true;
    //     secondCheckboxNew.checked = false;
    //     secondCheckboxNo.checked = false;
    // })
    // secondCheckboxNew.addEventListener("click", function(){
    //     secondCheckboxSecondhand.checked = false;
    //     secondCheckboxNew.checked = true;
    //     secondCheckboxNo.checked = false;
    // })
    // secondCheckboxNo.addEventListener("click", function(){
    //     secondCheckboxSecondhand.checked = false;
    //     secondCheckboxNew.checked = false;
    //     secondCheckboxNo.checked = true;
    // })

    // thirdCheckboxService.addEventListener("click", function(){
    //     thirdCheckboxService.checked = true;
    //     thirdCheckboxCars.checked = false;
    //     thirdCheckboxBrand.checked = false;
    // })
    // thirdCheckboxCars.addEventListener("click", function(){
    //     thirdCheckboxService.checked = false;
    //     thirdCheckboxCars.checked = true;
    //     thirdCheckboxBrand.checked = false;
    // })
    // thirdCheckboxBrand.addEventListener("click", function(){
    //     thirdCheckboxService.checked = false;
    //     thirdCheckboxCars.checked = false;
    //     thirdCheckboxBrand.checked = true;
    // })


    // clean up
    document.getElementById("first-name").value = "";
    document.getElementById("last-name").value = "";
    document.getElementById("mail").value = "";
    console.log ("user credentials:", firstName, lastName, mail, birthDate, month, day);

});


function closeModal() {
    const modal = document.getElementById("modal")
    modal.style.display = "none"
}

function openModal() {
    const modal = document.getElementById("modal")
    modal.style.display = "block"
}

function expandDiv(element) {
    element.classList.toggle('expanded');
  }
