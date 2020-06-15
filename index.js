let mytime=()=>{
    let d=new Date();
    // let b= new Time()
    time.innerHTML=d.toUTCString().slice(0, -12);
    document.getElementById('date').innerHTML=d.toLocaleTimeString();
    setTimeout('mytime()',1000);

}
mytime();


 myclock=()=>{
    seconds.innerHTML++;
    if(seconds.innerHTML==59){
        min.innerHTML++;
       if (seconds.innerHTML < 10) {
           document.getElementById('seconds').innerHTML="0" + seconds.innerHTML
    //  seconds.innerHTML="m" + seconds.innerHTML;
}
seconds.innerHTML=0;
}
if(min.innerHTML==59){
    hours.innerHTML++;
    if (min.innerHTML < 10) {
        min.innerHTML="m" + min.innerHTML;
   }
    min.innerHTML=0;
}
myVar = setTimeout(myclock, 1000)
console.log(myVar)
}

myclear=()=>{
  clearTimeout(myVar);
}


let functioninput=()=>{
    mydiv.innerHTML+=event.target.innerHTML;
   }
let mydel=()=>{
  mydiv.innerHTML=mydiv.innerHTML.slice(0,-1)
}
$(document).ready(function(){
     $("#bottom").click(function(){
     document.getElementById('start').style.display="block";
    $("#start").fadeOut(3000);
    // $("phone").css("backgroundImage", "j.JPG")
    document.getElementById('phone').style.background="blue";
     $("#middle").fadeIn(6000);
     $("#timming").fadeIn(6000);
     $('#bnet').fadeIn(5000);
    // $("#phone").toggleClass('active')

        //  alert();
   })
   $('#cphone').click(function(){
           $('#timming').hide();
           $('#middle').hide();
           $('#screen1').show();
           $('#mydiv').show();
})

$('.cphone').click(function(){
    $('#screen1').hide();
    $('#mydiv').hide();
    // $('#calling').show();
    if(mydiv.innerHTML==""){
     alert('input the number you want to call')
    $('#calling').hide();
     $('#screen1').show();
     $('#mydiv').show(); 
    }
    else if(mydiv.innerHTML== "*556#"){
        $('#mainbalance').show();
    
    
      }
     else if(mydiv.innerHTML.length<11){
      alert("The number you are trying to call does not exist");
       $('#calling').hide();
     $('#screen1').show();
     $('#mydiv').show(); 
     
    }
    else if(mydiv.innerHTML== "*555*" +myarr +"#"){
        if (amount.value=="n1") {
           document.getElementById('account').innerHTML=Number(document.getElementById('account').innerHTML)+100;
      $('#mainbalance').show();
      }

       else if (amount.value=="n2") {
           document.getElementById('account').innerHTML=Number(document.getElementById('account').innerHTML)+200;
      $('#mainbalance').show();
      }

       else if (amount.value=="n4") {
           document.getElementById('account').innerHTML=Number(document.getElementById('account').innerHTML)+400;
      $('#mainbalance').show();
      }

 else if (amount.value=="n5") {
           document.getElementById('account').innerHTML=Number(document.getElementById('account').innerHTML)+500;
      $('#mainbalance').show();
      }
 else if (amount.value=="n6") {
           document.getElementById('account').innerHTML=Number(document.getElementById('account').innerHTML)+1000;
      $('#mainbalance').show();
      }
      

  }
  
  else if(mydiv.innerHTML== "*555*" + !myarr +"#"){
        alert('incorrect pin');
      }

    else{
      $('#mage').show();
        
}
})
$('#m').click(function(){
  $('#mage').hide();
   $('#calling').show();
  $('#mobile').show();
   document.getElementById('incoming').style.display="block";    
  document.getElementById('call').innerHTML=mydiv.innerHTML;
  num.innerHTML= mydiv.innerHTML;
  man.innerHTML="SIM 1";
   })
$('#a').click(function(){
  $('#mage').hide();
   $('#calling').show();
  $('#mobile').show();
   document.getElementById('incoming').style.display="block";    
  document.getElementById('call').innerHTML=mydiv.innerHTML;
  num.innerHTML= mydiv.innerHTML;
  man.innerHTML="SIM 2";

   })
$('#g').click(function(){
  $('#mage').hide();
   $('#calling').show();
  $('#mobile').show();
   document.getElementById('incoming').style.display="block";    
  document.getElementById('call').innerHTML=mydiv.innerHTML;
  num.innerHTML= mydiv.innerHTML;
  man.innerHTML="SIM 3";

   })
$('#e').click(function(){

  $('#mage').hide();
   $('#calling').show();
  $('#mobile').show();
   document.getElementById('incoming').style.display="block";    
  document.getElementById('call').innerHTML=mydiv.innerHTML;
  num.innerHTML= mydiv.innerHTML;
  man.innerHTML="SIM 4";

   })
$('.reject').click(function(a){
    $('#mobile').hide();
    $('#middle').show();
    $('#calling').hide();
    document.getElementById('mydiv').innerHTML="";    
    $('#timming').show();
    // clearTimeo(myvar)
    // seconds.innerHTML=0;
    // min.innerHTML=0;
    // hours.innerHTML=0;
    myclear();

})

$('.receive').click(function(){
    myclock();
    $('#tari').show();
    $('.receive').hide();
    $('.cut').hide();
    $('.ut').show();
})
$('.ut').click(function(){
    $('#mobile').hide();
    $('#middle').show();
    $('#calling').hide();
    document.getElementById('mydiv').innerHTML="";    
    $('#timming').show();
})
});


// =========================
// card start here
// =========================

 var myarr=[]
  let mytariff=()=>{
if (network.value=="mtn" ) {
var hid="";
var kk="";
  var me=input2.value;
  var a = Math.random()
       while(a<me){
        // kk+=Math.floor(a *2100000000000000)
     kk= Math.floor(a *2100000000000000);
       myarr.push(kk)

     a++;
       hid+="<br>" + kk
      }
       myinput.innerHTML=hid;
       console.log(myarr)


    

   if (amount.value=="n1") {
           alert("you just buy " + input2.value + " #100 MTN" );
       }
       else if (amount.value=="n2") {
           alert("you just buy " + input2.value + " #200 MTN")
       }
       else if (amount.value=="n4") {
           alert("you just buy " + input2.value + " #400 MTN")
       }
       else if (amount.value=="n5") {
           alert("you just buy " + input2.value +  " #500 MTN")
       }
       else if (amount.value=="n6") {
           alert("you just buy " + input2.value + " #1000 MTN")
       }
       else {
           alert("choose the amount you want to buy ")
           myinput.innerHTML="";
       }
      
}
 else if(network.value=="airtel") {
//     let a = Math.random()
//        let b =Math.floor(a *2100000000000000)
//    myinput.innerHTML=b;
var hid="";
  var me=input2.value;
  var a = Math.random()
       while(a<me){
     hid+="<br>"  + Math.floor(a *2100000000000000);
     a++;
       }
       myinput.innerHTML=hid;

    if (amount.value=="n1") {
           alert("you just buy "  + input2.value + " #100 Airtel Card");
       }
       else if (amount.value=="n2") {
           alert("you just buy "  + input2.value + " #200 Airtel Card")
       }
       else if (amount.value=="n4") {
           alert("you just buy "  + input2.value + " #400 Airtel Card")
       }
       else if (amount.value=="n5") {
           alert("you just buy "  + input2.value + " #500 Airtel Card")
       }
       else if (amount.value=="n6") {
           alert("you just buy "  + input2.value + " #1000 Airtel Card")
       }
       else {
           alert("choose the amount you want to buy ")
           myinput.innerHTML="";
       }

  
}
else if (network.value=="glo") {
//   let a = Math.random()
//        let b =Math.floor(a *2210000000000000)
//    myinput.innerHTML=b;
var hid="";
  var me=input2.value;
  var a = Math.random()
       while(a<me){
     hid+="<br>"  + Math.floor(a *2210000000000000);
     a++;
       }
       myinput.innerHTML=hid;


    if (amount.value=="n1") {
           alert("you just buy "  + input2.value + " #100 Glo Card");
       }
       else if (amount.value=="n2") {
           alert("you just buy "  + input2.value + " #200 Glo Card")
       }
       else if (amount.value=="n4") {
           alert("you just buy "  + input2.value + " #400 Glo Card")
       }
       else if (amount.value=="n5") {
           alert("you just buy "  + input2.value + " #500 Glo Card")
       }
       else if (amount.value=="n6") {
           alert("you just buy "  + input2.value + " #1000 Glo Card")
       }
       else {
           alert("choose the amount you want to buy ")
           myinput.innerHTML="";
       }
   


}
  else if (network.value=="etisalat") {
//     let a = Math.random()
//        let b =Math.floor(a *2210000000000000)
//    myinput.innerHTML=b;s
var hid="";
  var me=input2.value;
  var a = Math.random()
       while(a<me){
     hid+="<br>"+ Math.floor(a *2210000000000000);
     a++;
       }
       myinput.innerHTML=hid;
   if (amount.value=="n1") {
           alert("you just buy "  + input2.value + " #100 Etisalat Card");
       }
       else if (amount.value=="n2") {
           alert("you just buy "  + input2.value + " #200 Etisalat Card")
       }
       else if (amount.value=="n4") {
           alert("you just buy "  + input2.value + " #400 Etisalat Card")
       }
       else if (amount.value=="n5") {
           alert("you just buy "  + input2.value + " #500 Etisalat Card")
       }
       else if (amount.value=="n6") {
           alert("you just buy "  + input2.value + " #1000 Etisalat Card")
       }
       else {
           alert("choose the amount you want to buy ")
           myinput.innerHTML="";
       }
}

else{
    alert("choose your network");
}
}
   
