//Валидация формы на пустоту
const forms = document.querySelectorAll(".card__product_form");
const formInputs = document.querySelectorAll(".card__product_form-input");
const emptyInputs = Array.from(formInputs).filter(
  (input) => input.value === ""
);

forms.forEach(validateForm);

//вещаем функцию валидации на все формы
function validateForm(forms) {
  forms.onsubmit = function () {
    formInputs.forEach(function (input) {
      if (input.value === "") {
        input.classList.add("error");
      } else {
        input.classList.remove("error");
      }
    });

    //проверяем на пустоту каждый input
    if (emptyInputs.length !== 0) {
      return false;
    }
  };
}
