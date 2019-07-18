var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = "block";

}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
} 

// document.getElementById("textValue").addEventListener("click", function(evt) {
//     var txtResult = document.getElementById("text").value;
//     document.getElementById('result').textContent = txtResult;
// });


function sendValueInInput() //функція)))
     {
       let input = document.getElementById('myInput'); //змінна інпут = значення id майІнпут
       let div = document.getElementById('myDiv'); //змінна дів = значення id майДів
       let inputValue = input.value;      //змінна "значення інпуту" = значення інпуту))))
      return div.innerText= inputValue;  //повертає значення інпуту в майДів
    }

    function showResult()
    {
        let inputText = document.getElementById('typeSmth');
        let getResult = document.getElementById('result');
        let result = inputText.value;
        return getResult.innerText = result;
    }

    