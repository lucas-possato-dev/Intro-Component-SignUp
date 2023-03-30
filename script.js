const spanContainer = document.querySelectorAll(".form-container span");
const spanImg = document.querySelectorAll(".errorIcon")
const submitBtn = document.querySelector(".submit");
const inputAll = document.querySelectorAll("form input");
const input = document.querySelector("input");
let formData = {}; // objeto para armazenar os dados do formulário

input.addEventListener("input", function(event) {
  formData[input.name] = input.value; // atualiza o valor do objeto com o valor atual do input
});

function handleClick(event) {
  inputAll.forEach((input) => {
    if(input.value === "") {
      event.preventDefault();
      errorForm();  
    }
  }) 
}

function errorForm() {
  
  spanContainer.forEach((span) => {
    if(span.innerText === ""){
      span.classList.add("errorMessage"); 
    } 
    if(span.classList.contains("errorMessage")) {
      span.classList.add("error");
    }
    spanImg.forEach((img) => {
    if(img.classList.contains("errorIcon")) {
      img.classList.add("selected");
    }
    })
  inputAll.forEach((input) => {
    if(input.classList.contains("submit") === false && input.value === "") {
      input.classList.add("error");
      input.nextElementSibling.nextElementSibling.classList.add("error");
    } else {
      input.classList.remove("error");
      input.nextElementSibling.nextElementSibling.classList.remove("error");
      input.nextElementSibling.classList.remove("selected");

    }
  })  
  })
}

function resetForm() {
  spanContainer.forEach((span) => {
    span.classList.remove("errorMessage");
  })
  spanContainer.forEach((span) => {
    span.classList.remove("error");
  })
  inputAll.forEach((input) => {
    input.value = "";
  });
  formData = {};
  }



submitBtn.addEventListener("click", handleClick);