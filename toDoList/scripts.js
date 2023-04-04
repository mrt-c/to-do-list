document
  .querySelector("#add-button")
  .addEventListener("click", function (event) {
    if (document.querySelector("#new-task").value != "") {
      let a = document.createElement("li");
      a.innerHTML = `${
        document.querySelector("#new-task").value
      } <button class="del">delete</button>`;
      document
        .querySelector("#task-list")
        .insertAdjacentElement("afterbegin", a);
      document.querySelector("#new-task").value = "";
    }
    event.preventDefault();
  });
document
  .querySelector("#task-list")
  .addEventListener("click", function (event) {
    let target = event.target;
    if (target.className == "del") {
      target.parentElement.remove();
    } else {
      if (target.style.textDecorationLine != "line-through") {
        target.style.textDecorationLine = "line-through";
      } else {target.style.textDecorationLine = ""}
    }
  });
