const buttonElement = document.getElementById("btn-click");
const inputElement = document.getElementById("input-in");

buttonElement.onclick = function () {
  const result = inputElement.value ** 2;
  alert(`квадрат вашего числа равен ${result}`);
};
