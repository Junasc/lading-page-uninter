// Get the modal
var modal = document.getElementById("myModal");
var modal2 = document.getElementById("myModal2");


// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var btn2 = document.getElementById("myBtn2");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];


// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}
btn2.onclick = function() {
    modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}
span2.onclick = function() {
    modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}

var termoModal = document.getElementById("termo-modal")
termoModal.onclick = function() {
    var termo = document.getElementById("termo")
    termo.checked = termoModal.checked;
    setTimeout(() => span.click(), 200)
}

var termoModal2 = document.getElementById("termo-modal2")
termoModal2.onclick = function() {
    var termo2 = document.getElementById("termo2")
    termo2.checked = termoModal2.checked;
    setTimeout(() => span2.click(), 200)
}


var checkIdade = document.getElementById("checkIdade");
checkIdade.onclick = function() {
    var cpf = document.getElementById("cpfRes");
    var cpfDiv = document.getElementById("cpfDiv");

    if (checkIdade.checked) {
        cpf.required = false;
        cpfDiv.style.display = 'none';
        cpf.disabled = true;
    } else {
        cpf.required = true;
        cpfDiv.style.display = 'block';
        cpf.disabled = false;
    }
}

var termo = document.getElementById("termo")
termo.onclick = function() {
    var termoModal = document.getElementById("termo-modal")
    termoModal.checked = termo.checked;
}

var termo2 = document.getElementById("termo2")
termo2.onclick = function() {
    var termoModal2 = document.getElementById("termo-modal2")
    termoModal2.checked = termo2.checked;
}