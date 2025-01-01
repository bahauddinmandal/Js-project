let OTP;
const inputs = document.querySelectorAll(".otp-input");

    inputs.forEach((input, index) => {
        input.addEventListener("input", (e) => {
            if (e.target.value.length === 1 && index < inputs.length - 1) {
                inputs[index + 1].focus();
            }
        });

        input.addEventListener("keydown", (e) => {
            if (e.key === "Backspace" && !input.value) {
                if (index > 0) {
                    inputs[index - 1].focus();
                }
            } else if (e.key === "ArrowRight") {
                if (index < inputs.length - 1) {
                    inputs[index + 1].focus();
                }
            } else if (e.key === "ArrowLeft") {
                if (index > 0) {
                    inputs[index - 1].focus();
                }
            }
        });
    });

    function genarateOTP(){
        OTP = Math.floor(1000 + Math.random() * 9000);
        document.getElementById("vew-otp").innerHTML = `Your OTP is : ${OTP}`;
        clr()
      }

      function validateOTP(){
        let typedNumber = "";
        inputs.forEach((elem) => {
          typedNumber = typedNumber + elem.value;
        });
      
        const result = (OTP === parseInt(typedNumber, 10));
       
        result ? alert("ok") : alert("invelide");
          clr();
      }


    function clr(){
        inputs.forEach((input) =>{
            input.value =''
        })
          inputs.children[0].focus();
        document.getElementById("button").disabled = true;
      }



(function init(){
     genarateOTP();
}());
        