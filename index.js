let myFormEl = document.getElementById("myForm");

let phonenumberEl = document.getElementById("phonenumber");
let phoneErrMsgEl = document.getElementById("phonenumberError");

let textareaEl = document.getElementById("textarea");
let textErrMsgEl = document.getElementById("textareaerrormsg");

let clickButton = document.getElementById("button");

phonenumberEl.addEventListener("blur", function(event) {
  if (event.target.value === "") {
    phoneErrMsgEl.textContent = "Required Phonenumber*";
  } else {
    phoneErrMsgEl.textContent = "";
  }
});

textareaEl.addEventListener("blur", function(event) {
  if (event.target.value === "") {
    textErrMsgEl.textContent = "Required message*";
  } else {
    textErrMsgEl.textContent = "";
  }
});

myFormEl.addEventListener("submit", function(event) {
  event.preventDefault();
});
clickButton.addEventListener("click",function(){
  let phonenumbervalue =  phonenumberEl.value;
  let textareamsg = textareaEl.value;

  let url = 'https://wa.me/' + phonenumbervalue + '?text=' + encodeURIComponent(textareamsg);
  window.open(url, '_blank');
})