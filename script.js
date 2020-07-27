const button = document.getElementsByClassName("btn");
const display = document.getElementById("display");
// const equalButton = document.getElementById("btn-equals");

const allClearBtn = document.getElementById("all-clear");

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function (e) {
    if (e.target.id == "all-clear") {
      display.value = "";
    } else if (e.target.id == "btn-equals") {
      if (!display.value) {
        display.value = "";
      } else {
        const displayContent = display.value;
        const evaluation = eval(displayContent);
        //   console.log(evaluation);
        display.value = evaluation;
      }
    } else if (e.target.id == "delete") {
      const displayValue = display.value;
      const displayValueAfter = displayValue.slice(0, displayValue.length - 1);
      display.value = displayValueAfter;
      console.log(displayValueAfter);
    } else {
      const input = e.target.value;

      display.value += input;
    }
  });
}
