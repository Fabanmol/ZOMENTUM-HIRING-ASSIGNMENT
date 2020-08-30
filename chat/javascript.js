let info= document.querySelector('.person-element');
info.addEventListener('click',()=>{
	var x = document.getElementById("dispaly-form");
	var y= document.getElementById("welcome");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
})