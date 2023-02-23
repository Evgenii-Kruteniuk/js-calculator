const inputANode = document.querySelector(".js-input-a");
const inputBNode = document.querySelector(".js-input-b");
const selectOperationNode = document.querySelector(".js-select-operation");
const btnResultNode = document.querySelector(".js-btn-result");
const outputNode = document.querySelector(".js-output span");
const btnAcNode = document.querySelector(".js-btn-ac");
const btnHiddenAllNode = document.querySelector(".js-hidden");
const main = document.querySelector(".main");

btnResultNode.addEventListener("click", () => {
  let a = Number(inputANode.value);
  const b = Number(inputBNode.value);
  const operation = selectOperationNode.value;

  const result = calculate({ a, b, operation });

  outputNode.innerHTML = result;
});

btnAcNode.addEventListener("click", () => {
  inputANode.value = "";
  inputBNode.value = "";
  selectOperationNode.value = "";
  outputNode.innerHTML = "";
});

btnHiddenAllNode.addEventListener("click", () => {
  main.classList.toggle("active");
});
