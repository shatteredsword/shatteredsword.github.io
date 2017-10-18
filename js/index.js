function myFunction() {
	var str = "The best things in life are free";
	var patt = new RegExp("e");
	var res = patt.test(str);
	document.getElementById("demo").innerHTML = res;
}