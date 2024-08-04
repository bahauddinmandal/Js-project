let OTP;
const inputs = document.getElementById('inputs')

  inputs.addEventListener("input", (e) => {
     const target = e.target;
     const value = target.value;
     const nextElm = target.nextElementSibling;
   
    if(isNaN(value)){
      target.value = "";
      return;
      }
     
     nextElm ? nextElm.focus() : validateOTP();
  })

function genarateOTP(){
  OTP = Math.floor(1000 + Math.random() * 9000);
  document.getElementById("vew-otp").innerHTML = `Your OTP is : ${OTP}`;
  clr()
}

function validateOTP(){
  let typedNumber = "";
  [...inputs.children].forEach((elem) => {
    typedNumber = typedNumber + elem.value;
  });

  const result = (OTP === parseInt(typedNumber, 10));
 
  if (result) {
    const button = document.getElementById("button");
    button.disabled = false;
    button.addEventListener("click", () => {
      alert("ok");
      button.disabled = true;
     clr();
    })
  } else {
    alert("invelide");
    clr();
  }
}

function clr(){
  for(let i = 0; i <4; i++){
      inputs.children[i].value = "";
    } 
    inputs.children[0].focus();
  document.getElementById("button").disabled = true;
}


(function init(){
genarateOTP();
}());
