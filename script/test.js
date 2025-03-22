let headingElement = document.getElementById("page-heading");  
console.log(headingElement);

/* Form destination validation */
function validateForm(search) {
  var x = document.forms["search.destination"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}   

/* Form date validation */
function validateForm(search) {
  var x = document.forms["search.date"].value;
  if (x == "") {
    alert("Date must be filled out");
    return false;
  }
}




