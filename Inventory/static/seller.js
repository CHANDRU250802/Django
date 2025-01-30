$(document).ready(function() {
    let isValid = true;
    console.log(isValid);

    $('#sellerFormSubmitBtn').on('click', function(e){
        e.preventDefault();
        
        if($('#companyName').val() === "" ){
            $('#companyName').addClass('is-invalid');
            $('#companyNameHelp').text('Company Name cannot be empty');
            $('#companyNameHelp').removeClass('text-muted').addClass('text-danger');
            $('html, body').animate({
                scrollTop:$('#companyName')
            }, 500);
            //isValid = false;
        }else{
            $('#companyName').removeClass('is-invalid').addClass('is-valid');
            $('#companyNameHelp').text('Company Name is valid');
            $('#companyNameHelp').removeClass('text-muted').removeClass('text-danger').addClass('text-success');
           //isValid = true;
        }

        if($('#gst').val() === ""){
            $('#gst').addClass('is-invalid');
            $('#GSTHelp').text('GST cannot be empty');
            $('#GSTHelp').removeClass('text-muted').addClass('text-danger');
            $('html, body').animate({
                scrollTop:$('#gst')
            }, 500);
            //isValid = false;
        }else{
            $('#gst').removeClass('is-invalid').addClass('is-valid');
            $('#GSTHelp').text('GST is valid');
            $('#GSTHelp').removeClass('text-muted').removeClass('text-danger').addClass('text-success');
            //isValid = true;
        }

        if($('#firstName').val() === "") {
            $('#firstName').addClass('is-invalid');
            $('#firstNameHelp').text('firstName cannot be empty');
            $('#firstNameHelp').removeClass('text-muted').addClass('text-danger');
            $('html, body').animate({
                scrollTop:$('#firstName')
            }, 500);
            //isValid = false;
        } else {
            $('#firstName').removeClass('is-invalid').addClass('is-valid');
            $('#firstNameHelp').text('firstName is valid');
            $('#firstNameHelp').removeClass('text-muted').removeClass('text-danger').addClass('text-success');
            //isValid = true;
        }

        if($('#lastName').val() === "") {
            $('#lastName').addClass('is-invalid');
            $('#lastNameHelp').text('lastName cannot be empty');
            $('#lastNameHelp').removeClass('text-muted').addClass('text-danger');
            $('html, body').animate({
                scrollTop:$('#lasttName')
            }, 500);
            //isValid = false;
        } else {
            $('#lastName').removeClass('is-invalid').addClass('is-valid');
            $('#lastNameHelp').text('lastName is valid');
            $('#lastNameHelp').removeClass('text-muted').removeClass('text-danger').addClass('text-success');
            //isValid = true;
        }

        if($('#email').val() === "") {
            $('#email').addClass('is-invalid');
            $('#emailHelp').text('email cannot be empty');
            $('#emailHelp').removeClass('text-muted').addClass('text-danger');
            $('html, body').animate({
                scrollTop:$('#email')
            }, 500);
            //isValid = false;
        } else {
            $('#email').removeClass('is-invalid').addClass('is-valid');
            $('#emailHelp').text('email is valid');
            $('#emailHelp').removeClass('text-muted').removeClass('text-danger').addClass('text-success');
            //isValid = true;
        }

        if($('#phone').val() === "") {
            $('#phone').addClass('is-invalid');
            $('#phoneHelp').text('phone no cannot be empty');
            $('#phoneHelp').removeClass('text-muted').addClass('text-danger');
            $('html, body').animate({
                scrollTop:$('#email')
            }, 500);
            //isValid = false;
        } else {
            $('#phone').removeClass('is-invalid').addClass('is-valid');
            $('#phoneHelp').text('phone is valid');
            $('#phoneHelp').removeClass('text-muted').removeClass('text-danger').addClass('text-success');
            //
        }
        
          if ($('#state').val() === "") {
            $('#state').addClass('is-invalid');
            //isValid = false;
        } else {
            $('#state').removeClass('is-invalid').addClass('is-valid');
        }

        if ($('#city').val() === "") {
            $('#city').addClass('is-invalid');
           // isValid = false;
        } else {
            $('#city').removeClass('is-invalid').addClass('is-valid');
        }

        if ($('#street').val().trim() === "") {
            $('#street').addClass('is-invalid');
            isValid = false;
        } else {
            $('#street').removeClass('is-invalid').addClass('is-valid');
        }

        if ($('#flat').val().trim() === "") {
            $('#flat').addClass('is-invalid');
           // isValid = false;
        } else {
            $('#flat').removeClass('is-invalid').addClass('is-valid');
        }

        if ($('#pin').val().trim() === "") {
            $('#pin').addClass('is-invalid');
           // isValid = false;
        } else {
            $('#pin').removeClass('is-invalid').addClass('is-valid');
        }

        if ($('#category').val() === "") {
            $('#category').addClass('is-invalid');
            //isValid = false;
        } else {
            $('#category').removeClass('is-invalid').addClass('is-valid');
        }

        //if (!isValid || $('.is-invalid').length > 0) {
           // alert('Please review the fields.');
        //} else {
            submitForm();
        //}
    });

    $('#companyName').on('input', function(e){
        let name = $(this).val().toUpperCase();
        $(this).val(name);
     }); 
     
     $('#firstName').on('input', function(e){
        let name = $(this).val().toUpperCase();
        $(this).val(name);
     }); 

     $('#lastName').on('input', function(e){
        let name = $(this).val().toUpperCase();
        $(this).val(name);
     }); 

    $('#phone').on('input', function () {
        var phone = $(this).val();
        phone = phone.replace(/\D/g, '')
        if (phone.length > 10) {
            phone = phone.substring(0, 10);
        } else if (phone.charAt(0) === "0" || phone.substring(0, 3) === "+91") {
            $('#phone').removeClass('is-valid').addClass('is-invalid');
            $('#phoneHelp').text('Phone number cannot start with 0 or +91');
            $('#phoneHelp').removeClass('text-muted').removeClass('text-success').addClass('text-danger');
        } else if (phone.length < 10) {
            $('#phone').removeClass('is-valid').addClass('is-invalid');
            $('#phoneHelp').text('Enter a valid phone number');
            $('#phoneHelp').removeClass('text-muted').removeClass('text-success').addClass('text-danger');
        }else{
            $('#phone').removeClass('is-invalid').addClass('is-valid');
            $('#phoneHelp').text('Phone number is valid');
            $('#phoneHelp').removeClass('text-muted').removeClass('text-danger').addClass('text-success');
        }
        $(this).val(phone);
    
    });

    $('#gst').on('input', function () {
        var gst = $(this).val().toUpperCase();
        gst = gst.replace(/[^A-Za-z0-9]/g, '');
        var gstRegex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[A-Z0-9]{1}[Z]{1}[A-Z0-9]{1}$/;
        if (gst.length > 15) {
            gst = gst.substring(0, 15);
        }else if (gst.length < 15) {
            $('#gst').removeClass('is-valid').addClass('is-invalid');
            $('#GSTHelp').text('GST number must be 15 characters long');
            $('#GSTHelp').removeClass('text-muted').removeClass('text-success').addClass('text-danger');
        }
         else if (!gstRegex.test(gst)) {
            $('#gst').removeClass('is-valid').addClass('is-invalid');
            $('#GSTHelp').text('Enter a valid GST number');
            $('#GSTHelp').removeClass('text-muted').removeClass('text-success').addClass('text-danger');
        } else {
            $('#gst').removeClass('is-invalid').addClass('is-valid');
            $('#GSTHelp').text('GST number is valid');
            $('#GSTHelp').removeClass('text-muted').removeClass('text-danger').addClass('text-success');
        }
        
        $(this).val(gst);
    });
    
    

    $('#pin').on('input', function () {
        let pin = $(this).val();
        pin = pin.replace(/\D/g, '');
        if (pin.length > 6) {
            pin = pin.substring(0, 6);
        }
        else if (pin.length < 6) {
            $('#pin').removeClass('is-valid').addClass('is-invalid');
        }
        else{
            $('#pin').removeClass('is-invalid').addClass('is-valid');
        }
        $(this).val(pin);
    });
    

    function submitForm(){
        //if(isValid){
          //  var companyName = $('#companyName').val();
           // console.log(companyName);
           // alert("The seller's company name is : " + companyName);
        //}else{
          //  return;
       // }

       if($('.is-invalid').length > 0){
            alert('Please review the fields.');
           return;
       }else{
        $('#sellerInformationForm').submit();
        // var companyName = $('#companyName').val();
        // var GST = $('#gst').val();
        // var firstName = $('#firstName').val();
        // var lastName = $('#lastName').val();
        // var phone = $('#phone').val();
        // var email = $('#email').val();
        // var country = $('#country').val();
        // var state = $('#state').val();
        // var city = $('#city').val();
        // var street = $('#street').val();
        // var flat = $('#flat').val();
        // var pin = $('#pin').val();
        // var category = $('#category').val();
        // console.log(companyName);
        // alert("The seller's company name is : " + companyName + "\n The seller's GST name is : " + GST +
        //     "\n The seller's First and Last name is : "  + firstName + " " + lastName +  " \n The seller's Phone number is : " + phone + "\n The seller's Email is : " + email + "\n The seller's country is : " + country + "\n The seller's state is : " + state + "\n The seller's city is :" + city + "\n The seller's street is :" + street + "\n The seller's flat is :" + flat + "\n The seller's pin is :" + pin + "\n The seller's category is :" + category);
       }

    }
    // Array of states for India
    const statesIndia = [
        "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh",
        "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", 
        "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", 
        "West Bengal"
    ];

    // Mapping of states to cities (example)
    const citiesByState = {
        "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Trichy", "Salem"],
        "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Nashik", "Aurangabad"],
        "Karnataka": ["Bengaluru", "Mysuru", "Hubballi", "Mangalore", "Belagavi"],
        // Add more states and cities here...
    };

    // Function to populate state dropdown
    function populateStates() {
        const stateSelect = $('#state');
        stateSelect.empty();  // Clear existing options
        stateSelect.append('<option value="">Select State</option>'); // Add default option
        
        // Populate with states
        statesIndia.forEach(state => {
            stateSelect.append(`<option value="${state}">${state}</option>`);
        });
    }

    // Function to populate city dropdown based on selected state
    function populateCities(state) {
        const citySelect = $('#city');
        citySelect.empty();  // Clear existing options
        citySelect.append('<option value="">Select City</option>'); // Add default option

        if (state && citiesByState[state]) {
            citiesByState[state].forEach(city => {
                citySelect.append(`<option value="${city}">${city}</option>`);
            });
        }
    }

    // Call function to populate states when the page loads
    populateStates();

    console.log (citiesByState["Maharashtra"])

    // When state is changed, populate cities for that state
    $('#state').change(function() {
        const selectedState = $(this).val();
        populateCities(selectedState);
    });

});


