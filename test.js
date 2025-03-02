function validateForm() {
  var x = document.forms["search"]["destination"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}   

