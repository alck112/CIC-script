// ==UserScript==
// @name         New Userscript CIC
// @version      0.1
// @description  try to take over the world!
// @author       KK112
// @match        https://cwrg.cic.hk/*
// @require      https://cdnjs.cloudflare.com/ajax/libs/axios/1.3.4/axios.min.js
// @icon         https://dev.moomoo.io/img/icons/crown.png
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

var button = document.createElement("button");
button.textContent = "Click me";
    button.style.position = 'absolute';
button.style.zIndex = '9999';
//button.addEventListener("click", function() {
//  alert("Button clicked!");
//});

    button.addEventListener("click", function() {
axios.post('https://cwrg.cic.hk/api/web/SecurityToken', { Login: 'adm00312', Password: 'pacific1122' })
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });
});
document.body.appendChild(button);

})();