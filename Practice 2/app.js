// function Toggle(){
//     let element = document.body
//     element.classList.toggle("dark-mode")
// }

// let darkmode = document.querySelector(".dark-mode");
// let mode = document.querySelector(".modeChanger");
// let target = mode.textContent;
// mode.addEventListener("click", ()=>{
//     Toggle();
//     mode.textContent = "Light mode"
// })

// if (mode.addEventListener("click") && darkmode){
//     mode.textContent = target;
// }

document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".modeChanger");
  const body = document.body;
  //Default mode
  body.classList.add("light-mode");

  button.addEventListener("click", () => {
    if (body.classList.contains("light-mode")) {
      body.classList.replace("light-mode", "dark-mode");
      button.textContent = "Light Mode";
    } else {
      body.classList.replace("dark-mode", "light-mode");
      button.textContent = "Dark mode";
    }
  });
});
