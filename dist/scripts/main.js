"use strict";var themeSwitch=document.getElementById("themeSwitch");if(themeSwitch){var initTheme=function(){var e=null!==localStorage.getItem("themeSwitch")&&"theme--dark"===localStorage.getItem("themeSwitch");(themeSwitch.checked=e)?(document.body.classList.add("theme--dark"),document.body.classList.remove("theme--default")):(document.body.classList.add("theme--default"),document.body.classList.remove("theme--dark"))},resetTheme=function(){themeSwitch.checked?(document.body.classList.add("theme--dark"),document.body.classList.remove("theme--default"),localStorage.setItem("themeSwitch","theme--dark")):(document.body.classList.remove("theme--dark"),document.body.classList.add("theme--default"),localStorage.removeItem("themeSwitch"))};initTheme(),themeSwitch.addEventListener("change",function(e){resetTheme()})}