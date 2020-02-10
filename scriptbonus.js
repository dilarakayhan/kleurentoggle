let toggleNav = function () {
  let getMenu = document.querySelector(".menu");
  let getMenuUl = document.querySelector(".menu ul");
  let getColorList = document.querySelectorAll(".menu li");
  let getCheckBox = document.querySelector(".radio-button");

  // Closes / Opens Menu
  if (getMenuUl.style.display === "none") {
    getMenuUl.style.display = "block";
  } else {
    getMenuUl.style.display = "none";
  }

  // Clickable color links changes background
  let changeColor = function () {
    //Color:Orange
    getColorList[0].addEventListener("click", function () {
      //Ik wilde de radiobutton samenvoegen met de onClick achtergrond kleurevent
      // if (getCheckBox[0].clicked = true) { 
      document.body.style.background = "#FFAB66";
    });
    //Color: Purple
    getColorList[1].addEventListener("click", function () {
      document.body.style.background = "#9D77A6";
    });
    //Color: Green
    getColorList[2].addEventListener("click", function () {
      document.body.style.background = "#4CBE88";
    });
    //Color: Yellow
    getColorList[3].addEventListener("click", function () {
      document.body.style.background = "#FFE700";
    });
    //Color: Blue
    getColorList[4].addEventListener("click", function () {
      document.body.style.background = "#006DB2";
    });
  };

  changeColor();
};
