
    function show(id){
        let ele = document.getElementById(id);
        ele.style.display ='block';
        console.log("object")

    }
    function hide(id){
        var ele = document.getElementById(id);
        ele.style.display ='none';
        console.log("object")
    }





    var glide = new Glide(".glide", {
        type: "carousel",
        perView: 3,
        autoplay: 1000,
        breakpoints: {
          // adjust the number of items shown based on screen size
          768: {
            perView: 2,
          },
          576: {
            perView: 1,
          },
        },
      });

      glide.mount();










      function clearErrors() {
        errors = document.getElementsByClassName("formerror");
        for (let item of errors) {
          item.innerHTML = "";
        }
      }

      function seterror(error) {
        element = document.getElementById('formError');
        element.getElementsByClassName("formerror")[0].innerHTML = error;
      }

      const validateForm = () => {
        const name = document.forms["myForm"]["name"].value;
        const email = document.forms["myForm"]["email"].value;
        const contact = document.forms["myForm"]["contact"].value;
        const brief = document.forms["myForm"]["brief"].value;

        if (!name || !email || !contact || !brief) {
          // Check if any fields are empty
          document.querySelectorAll(".formerror").forEach((error) => {
            error.style.display = "block";
            seterror("All feilds are required")

          });
          if(!name){
            document.forms["myForm"]["name"].focus();
            return false;
          }
          if(!email){
            document.forms["myForm"]["email"].focus();
            return false;
          }
          if(!contact){
            document.forms["myForm"]["contact"].focus();
            return false;
          }
          if(!brief){
            document.forms["myForm"]["brief"].focus();
            return false;
          }
          
        } else if (contact.length !== 10) {
          // Error message for contact number
          
          seterror("Phone number length should of 10 digits")
          return false;
        } else {
          // Validation successful
          return true;
        }
      };

      function openTab(evt, id) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tab");
        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(id).style.display = "flex";
        evt.currentTarget.className += " active";
      }


//country code script
var input = document.querySelector("#contact");
intlTelInput(input, {
  initialCountry: "auto",
  geoIpLookup: function (success, failure) {
    $.get("https://ipinfo.io", function () { }, "jsonp").always(function (resp) {
      var countryCode = (resp && resp.country) ? resp.country : "us";
      success(countryCode);
    });
  },
});





































    //   let ele = document.getElementById('card');
    //         ele.style.display="flex"
    //         let ele1 = document.getElementById("card1");
    //         let ele2 = document.getElementById("card2");
    //         let ele3 = document.getElementById("card3");
    //         ele1.style.display = "none";            
    //         ele2.style.display = "none";            
    //         ele3.style.display = "none";
            

    //   function showcard(id){
    //     if(id==='card'){
    //         let ele = document.getElementById(id);
    //         ele.style.display="flex"
    //         let ele1 = document.getElementById("card1");
    //         let ele2 = document.getElementById("card2");
    //         let ele3 = document.getElementById("card3");
    //         ele1.style.display = "none";            
    //         ele2.style.display = "none";            
    //         ele3.style.display = "none"; 
    //         console.log("object")           

    //     }
    //     else if(id==='card1'){
            
    //         let ele1 = document.getElementById("card");
    //         let ele2 = document.getElementById("card2");
    //         let ele3 = document.getElementById("card3");
    //         ele1.style.display = "none";            
    //         ele2.style.display = "none";            
    //         ele3.style.display = "none";
    //         let ele = document.getElementById(id);
    //         ele.style.display="flex";
    //         console.log("object")
    //     }
    //     else if(id==='card2'){
    //         let ele = document.getElementById(id);
    //         ele.style.display="flex";
    //         let ele1 = document.getElementById("card");
    //         let ele2 = document.getElementById("card1");
    //         let ele3 = document.getElementById("card3");
    //         ele1.style.display = "none";            
    //         ele2.style.display = "none";            
    //         ele3.style.display = "none";
    //     }
    //     else if(id==='card3'){
    //         let ele = document.getElementById(id);
    //         ele.style.display="flex";
    //         let ele1 = document.getElementById("card");
    //         let ele2 = document.getElementById("card2");
    //         let ele3 = document.getElementById("card1");
    //         ele1.style.display = "none";            
    //         ele2.style.display = "none";            
    //         ele3.style.display = "none";
    //     }




    //     return false;

    //     // // var ele = document.getElementById(id);
    //     // var ele1 = document.getElementById(id);
        
    //     // ele1.style.display ='none';
    //     // ele.style.display="flex"
    //     // console.log("object")

    // }
    