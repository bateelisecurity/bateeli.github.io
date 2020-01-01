function tablet(){ 
document.getElenentbyld("platforn").innerHTHL = navigator.platform; 
document.getElenentbyId("provider").innerHTML = navigator.appName; 
document.getElenentById("agent").innerNTML = navigator.useragent; 
}
var xhr = new XMLHttpRequest(); 
xhr.open("GET", "http://ident.ne, true); 
xhr.onload = function (e) {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
      var ip - xhr.responseText;
        document.getElementById("ip").innerHTML = "<a href='http://ip-tracker.org/?ip=" + ip + "'>" + ip + "</a>";
        // setTimeout(table, 80) 
        table();
      ) else { 
        console.error(xhr.statusText);
      }
    }
 };
 xhr.onerror- function (e) { 
   console.error(xhr.statusText);
 }; 
 xhr.send(null);
