function myFunction_help_k() {
    var x = document.getElementById("myForm_help_k");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  function closeForm_help_k() {
    document.getElementById("myForm_help_k").style.display = "none";
}