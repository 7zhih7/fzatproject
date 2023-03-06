function myFunction() {
    var x = document.getElementById("myForm");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
}