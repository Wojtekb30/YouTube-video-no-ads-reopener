let params = new URLSearchParams(document.location.search);
let name = params.get("url");
var x = document.getElementById("filmikabcd");
x.setAttribute("src", "https://www.youtube-nocookie.com/embed/"+name);
