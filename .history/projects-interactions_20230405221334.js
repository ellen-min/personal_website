/**
* @author Ellen Min
* Last updated: 04-05-2023
* This is the javascript page for projects.html for my personal website.
*/

(function () {
  "use strict";

  function init() {
    let allProjects = qsa("div.project");
    for (let i = 0; i < allProjects.length; i++) {
      allProjects[i].addEventListener("mouseover", toggleHighlight);
      allProjects[i].addEventListener("mouseout", toggleHighlight);
    }
  }

  function toggleHighlight() {
    this.querySelector("h2").classList.toggle("highlighted");

    let descriptions = this.querySelectorAll("p");
    for (let i = 0; i < descriptions.length; i++) {
      let currDesc = descriptions[i];
      if (currDesc.querySelectorAll("a").length == 0) {
        currDesc.classList.toggle("highlightedDescrip");
      } else {
        currDesc.classList.toggle("workex");
      }
    }
    }

  init();

})();
