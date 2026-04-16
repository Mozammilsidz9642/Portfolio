const text=["Web Developer","UI Designer","Freelancer"];
let i=0,j=0,current="",isDeleting=false;
const typingElement=document.getElementById("typing");

function type(){
if(!typingElement){return}
current=text[i];
if(!isDeleting){
typingElement.innerHTML=current.substring(0,j++);
if(j>current.length){isDeleting=true;setTimeout(type,1000);return}}
else{
typingElement.innerHTML=current.substring(0,j--);
if(j<0){isDeleting=false;i=(i+1)%text.length}}
setTimeout(type,isDeleting?50:100)}

type();
