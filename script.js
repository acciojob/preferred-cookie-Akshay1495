//your JS code here. If required.
var fontsize = document.getElementById("fontsize");
var fontcolor = document.getElementById("fontcolor");

var mycookies = document.cookie.split("; ")
mycookies.map((item)=>{
	var cookieList = item.split("=");
	
	cookieList.map((para)=>{
	fontsize.value = para[1];
	fontcolor.value = para[3];
		
	})
	
})

function onSubmit(event){
	document.cookie = `fontsize=${fontsize.value}`;
	document.cookie = `fontcolor=${fontcolor.value}`;
	event.preventDefault();
}