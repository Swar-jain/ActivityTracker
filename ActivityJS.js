function myFunction() {
 var i =  document.getElementById("hp").textContent;
 var j = parseInt(i, 10);
 j = j-1;
 document.getElementById("hp").innerHTML = j;
}
