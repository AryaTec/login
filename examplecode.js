function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  $(".g-signin2").css("display", "none");
  $(".boxcont").css("display", "none");

  $(function () {
    $(".container").click(function () {
      if ($(this).is(":checked")) {
        $("#page1").show();
      } else {
        $("#page2").show();
      }
    });
  });
  /*
  function myFunction() {
    var checkBox1 = document.getElementById("manager");
    var checkBox2 = document.getElementById("HR");
    var text1 = document.getElementById("page1");
    var text2 = document.getElementById("page2");
    if (checkBox1.checked == true) {
      text1.style.display = "block";
    } else if (checkBox2.checked == true) {
      text2.style.display = "block";
    }
  }
  */
}
