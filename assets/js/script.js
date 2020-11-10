
$(document).click(function (e) {
  if (!$(e.target).is("#requestdemobtn") && (!$(e.target).closest('#requestdemo').length && !$(e.target).is('#requestdemo'))) {
    console.log(e.target)
      closeDemoRequest()
  }

});

function tabclick(n){
    if(n==2) document.getElementById("tab-2-link").click()
    if(n==3){
       document.getElementById("tab-3-link").click()
      document.getElementsByClassName("nav-menu")[0].children.item(0).children.item(1).classList.remove("active")
      document.getElementsByClassName("nav-menu")[0].children.item(0).children.item(2).classList.add("active")
  
    }
}

function openForm(link_no) {
  links = ["https://www.youtube.com/embed/SwbnuaBD47E","https://www.youtube.com/embed/gY4RPn5ij8s","https://www.youtube.com/embed/dAK8w4KMa3s","https://www.youtube.com/embed/62W8hf8Oie4"]  
  document.getElementById("myForm").style.display = "block";  
  document.getElementById("myForm").innerHTML = "";
  document.getElementById("myForm").insertAdjacentHTML("afterbegin", "<iframe width='720' height='480' src='"+links[link_no]+"' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'allowfullscreen></iframe><button type='button' class='btn cancel' onclick='closeForm()'><i class='ri-close-fill'></i></button>");
}
function closeForm() {
  document.getElementById("myForm").style.display = "none";
  document.getElementById("myForm").innerHTML = "";
}

function openblog(n){
  document.getElementsByClassName("modal_blog")[n].style.display = "block";
  // console.log(n)
}

function closeblog(n){
  document.getElementsByClassName("modal_blog")[n].style.display = "none";
}

function openDemoRequest(){
  document.getElementById("requestdemodiv").style.display = "block";
  document.getElementById("requestdemo").style.display = "block";
}

function closeDemoRequest(){
  // $("#requestdemo").fadeOut(500)
  document.getElementById("requestdemo").style.display = "none";
  document.getElementById("requestdemodiv").style.display = "none";
}

window.onload = function () {

  var width = (window.innerWidth > 0) ? window.innerWidth : screen.Width;
  if(width < 575){
    document.getElementsByClassName("nav-item").item(0).classList.remove("col-3")
    document.getElementsByClassName("nav-item").item(0).classList.add("col-6")
    document.getElementsByClassName("nav-item").item(1).classList.remove("col-3")
    document.getElementsByClassName("nav-item").item(1).classList.add("col-6")
  }

  document.getElementById('tab-2-link').classList.add('active')

  var tab_clicked = 0
  document.getElementById('tab-2-link').onclick = function(){
    document.getElementsByClassName("nav-menu")[0].children.item(0).children.item(1).classList.remove("active")
    document.getElementsByClassName("nav-menu")[0].children.item(0).children.item(0).classList.add("active")
    tab_clicked = 2
  }

  document.getElementById('tab-3-link').onclick = function(){
    document.getElementsByClassName("nav-menu")[0].children.item(0).children.item(0).classList.remove("active")
    document.getElementsByClassName("nav-menu")[0].children.item(0).children.item(1).classList.add("active")
    tab_clicked = 3
  }

  window.onscroll = function () {
    if(document.getElementsByClassName("nav-menu")[0].children.item(0).children.item(0).classList.contains("active") && tab_clicked != 3){
      document.getElementsByClassName("nav-menu")[0].children.item(0).children.item(1).classList.remove("active")
      document.getElementsByClassName("nav-menu")[0].children.item(0).children.item(3).classList.remove("active")
      // document.getElementsByClassName("nav-menu")[0].children.item(0).children.item(5).classList.remove("active")

    }
    else{
      document.getElementsByClassName("nav-menu")[0].children.item(0).children.item(0).classList.remove("active")
      document.getElementsByClassName("nav-menu")[0].children.item(0).children.item(3).classList.remove("active")
      // document.getElementsByClassName("nav-menu")[0].children.item(0).children.item(5).classList.remove("active")
    }
    // console.log(document.getElementsByClassName("nav-menu")[0].children.item(0).children.item(1).classList.contains("active"))
  };
};

function showSuccessDiv() {
  // Get the snackbar DIV
  var x = document.getElementById("successBoard");

  // Add the "show" class to DIV
  x.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}