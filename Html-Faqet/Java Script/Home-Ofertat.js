
function myFunction() {
  var x = document.getElementsByClassName("Container");
  if (x.style.display === "none") {
    var t =  document.getElementById("SonyContainer");
    t.style.display = "none";
    var z =  document.getElementById("SamsungContainer");
    z.style.display = "none";
   x.style.display = "inline-block"
  } else {
    x.style.display = "inline-block";
  }
}


function myFunction2() {
  var y = document.getElementById("SamsungContainer");
  if (y.style.display === "none") {
   var t =  document.getElementById("FujitsuContainer");
   t.style.display = "none";
   var z =  document.getElementById("SonyContainer");
   z.style.display = "none";
   y.style.display = "inline-block";

  } else {
    y.style.display = "inline-block";
  }
}

function myFunction3 () {
  var z = document.getElementById("SonyContainer");
  if (z.style.display === "none"){
   
    var t =  document.getElementById("FujitsuContainer");
    t.style.display = "none";
    var s =  document.getElementById("SamsungContainer");
    s.style.display = "none";
    z.style.display = "inline-block";

  }else{
    z.style.display = "inline-block";
  }
}



