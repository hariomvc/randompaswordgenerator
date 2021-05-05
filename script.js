 var el_down = document.getElementById("password");
 var str = '';

 function uppercase_include() {
   str = str + 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
 }

 function lowercase_include() {
   str = str + 'abcdefghijklmnopqrstuvwxyz';
 }

 function numbers_include() {
   str = str + '0123456789';
 }

 function symbols_include() {
   str = str + '@#$&*%!';
 }


 var n = window.prompt("Enter the number of Digit you want in your password:")


 function generateP() {
   var pass = '';

   for (i = 1; i <= n; i++) {
     var char = Math.floor(Math.random() * str.length + 1);
     pass += str.charAt(char)
   }

   return pass;
 }

 function generate_password() {
   el_down.innerHTML = generateP();
 }
