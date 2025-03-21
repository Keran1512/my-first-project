/* Form destination validation */
function validateForm() {
  var x = document.forms["search"]["destination"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}   

/* Form date validation */
function validateForm() {
  var x = document.forms["search"]["date"].value;
  if (x == "") {
    alert("Date must be filled out");
    return false;
  }
}




