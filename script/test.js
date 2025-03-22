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

/* Form time validation */
function validateForm(search) {
  var x = document.forms["search.time"].value;
  if (x == "") {
    alert("Time must be filled out");
    return false;
  }
} 

/* Form name validation */
function validateForm(search) {
  var x = document.forms["search.name"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}

/* Form email validation */ 
function validateForm(search) {
  var x = document.forms["search.email"].value;
  if (x == "") {
    alert("Email must be filled out");
    return false;
  }
}

/* Form phone validation */
function validateForm(search) {
  var x = document.forms["search.phone"].value;
  if (x == "") {
    alert("Phone must be filled out");
    return false;
  }
}

/* Form message validation */
function validateForm(search) {
  var x = document.forms["search.message"].value;
  if (x == "") {
    alert("Message must be filled out");
    return false;
  }
}

/* Form validation */
function validateForm(search) {
  var x = document.forms["search"].value;
  if (x == "") {
    alert("Form must be filled out");
    return false;
  }
}










