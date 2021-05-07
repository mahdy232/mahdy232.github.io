function req()
{
var x =document.getElementById("fname").value;
var y =document.getElementById("lname").value;
var Personal =document.getElementById("Personal").value;
var Number =document.getElementById("Number").value;
var Email = document.getElementById("Email").value;
var UserName =document.getElementById("UserName").value;
var Password = document.getElementById("Password").value;
var Dgree = document.getElementById("Dgree").value;
var Graduate = document.getElementById("Graduate").value;
var myfile = document.getElementById("myfile").value;
if(x == "" && y == "" && Personal == "" &&  Number == ""&& Email == ""&& UserName == ""&& Password == ""&& Dgree == ""&&  Graduate == ""&& myfile == "")
{
alert("All labels are empty");
}
else if(document.getElementById("fname").value == ""){

x.style.border-color = "red";

}
else if(lname == ""){
alert("Last Name  is empty");
}
else if(Personal == ""){
alert("Personal WebSite is empty");
}
else if(Number == ""){
alert(" A Phone Number is empty");
}
else if(Email == ""){
alert("Email  is empty");
}
else if(UserName == ""){
alert("UserName  is empty");
}
else if(Password == ""){
alert("Password is empty");
}
else if(Dgree == ""){
alert("Dgree is empty");
}
else if(Graduate == ""){
alert("When will you graduate is empty");
}
else if(myfile == ""){
alert("myfile is empty");
}
if(Email != ""){
var x = Email;
var start = Email.indexOf("@");
var y = "";
for(var i = start + 1; i < x.length;i++){
y+=x[i];
}
alert(y);
}
if(UserName != ""){
var z = UserName;
var end = UserName.indexOf(".");
var a = "";
for(var i = 0; i < end;i++){
a+=z[i];
}
alert(a);
}

if(fname != ""){
if(isNaN(fname) == false){
alert("First Name error");
}
}}

if(lname != ""){
if(isNaN(lname) == false){
alert("Last Name error");
}}
     
if(empty(Number) ){
if(isNaN(Number) == true){
alert("Number is error");
}}

if(Email != ""){
if(isNaN(Email) == true){
alert("Email is error");
}}

if(UserName != ""){
if(isNaN(UserName) == false){
alert("UserName is error");
}}

if(Password != ""){
if(isNaN(Password) == false){
alert("Password is error");
}}

if(empty(Dgree) ){
if(isNaN(Dgree) == true){
alert("Dgree is error");
}}

if(Graduate != ""){
if(isNaN(Graduate) == true){
alert("Graduate is error");
}}

if(myfile != ""){
if(isNaN(myfile) == true){
alert("myfile is error");
  }}
                                                           



function usem(){
var email1 = document.getElementById("Email").value;
var name   = email1.substring(0, email1.lastIndexOf("@"));
alert( "The application of" + name +" is saved!"  )

}

function RES(){  
   document.getElementById("myForm").reset();  
 }  
 
let sort=1;
function fields(Num)
{
    if(Num==sort)
        sort+=1;
    else
    {
        alert("Enter the rows in order")
    }
  }
