$(document).ready(function() {
    
    var Empty, Count;
    var Check_error = { "fname": 0, "lname": 0, "emailid": 0, "gender": 0, "phoneno": 0, "panno": 0, "aadharno": 0, "city": 0, "pincode": 0 };
    var Alt_phone = 0;
    var Nameregx = /[0-9()+*-/ ]/;
    var Email = $('#Email');  var Emailregx = /^[a-zA-Z0-9.]+@+[a-zA-Z]+?\.[a-zA-Z]{2,3}$/;
    var Gender = $("input[name = 'gender']");
    var Phone = $('#ph1');
    var Pannum = $('#pan');   var Panregx = /([A-Z]){5}([0-9]){4}([A-Z]){1}$/;
    var Aadharnum = $('#aadhar');
    var Add_phone = $('.phone-list');
    var Add_button = $('.addicon');

    $('.warningend').hide();    $('.new-user').hide();
    $('#finaldetails').hide();  $('.profilepic2').hide();
//-------------------------------------------------------------------------------
    
     $('.form-top').on("keyup", '#fname, #lname', function() {      // First Name, Last Name selector event
        var s = $(this).attr('id');
        if(Nameregx.test($(this).val())) { 
            ErrorFunc(this);    
            Check_error.s = 1;
            console.log(Check_error.s);
            
         }
         else {
             CorrectFunc(this);
             Check_error.s = 0;
         }
     });

     Email.keyup(function() {                   // Email selector event
         if(!Emailregx.test(Email.val())) {
             ErrorFunc(this);
             Check_error.emailid = 1; 
         }
         else {
             CorrectFunc(this);
             Check_error.emailid = 0; 
         }
     });

     Phone.keyup(function() {                   // Phone number selector event
         if($(this).val()) {
            if($(this).val().match(/^[0-9]{10}$/)) {
                $('#verifyicon4').attr('class','correcticon');
                $(this).attr('class', 'errorfocusout');
                Check_error.phoneno = 0;    
            }
            else {
                $('#verifyicon4').attr('class','incorrecticon');
                $(this).removeClass('errorfocusout').addClass('errorstyle');
                Check_error.phoneno = 1; 
            }
        }
        else {
            Check_error.phoneno = 0;
        }
     });

     Pannum.keyup(function() {                  // PAN Number selector event
        if($(this).val()) {
            if(Panregx.test(Pannum.val().toUpperCase()) === true) {
                CorrectFunc(this);
                Check_error.panno = 0; 
            }
            else {
                ErrorFunc(this);
                Check_error.panno = 1; 
            }
        }
        else {
            Check_error.panno = 0;
        }
     });

     Aadharnum.keyup(function() {               // Aadhar Number selector event
         if($(this).val()) {
            if(Aadharnum.val().length === 12 && $(this).val().match(/^[0-9]+$/)) {
                CorrectFunc(this);
                Check_error.aadharno = 0; 
            }
            else {
                ErrorFunc(this);
                Check_error.aadharno = 1; 
            }
         }
         else {
             Check_error.aadharno = 0;
         }
     });

     $('body').on("keyup",'.js-city', function() {          // GLOBAL City selector event
        if($(this).val()) {
            if(!$(this).val().match(/^[a-zA-Z]+$/)) {
                ErrorFunc(this);
                Check_error.city = 1;
            }
            else {
                CorrectFunc(this);
                Check_error.city = 0;
            }
        }
        else{
            Check_error.city = 0;
        }
     });

     $selectCountries("country", "state");              

     $('body').on("keyup",'.js-pincode', function() {           //GLOBAL PIN Code Validation
        if($(this).val()) {
            if($(this).val().match(/^[0-9]+$/) && $(this).val().length === 6) {
                CorrectFunc(this);
                Check_error.pincode = 0;
            }
            else {
                ErrorFunc(this);
                Check_error.pincode = 1;
            }
        }
        else {
            Check_error.pincode = 0;
        }
     });

//======================================================================================
    var x = 1;
    //When user clicks Add Phone Button
    $(Add_button).click(function(e) {
        e.preventDefault();
        x++;
        $(Add_phone).append('<div class="alt-addphone" style="display: inline-flex"><input type="text" class="js-phone2" name="phoneno" maxlength="10" placeholder="Phone Number" required/><div class="removeicon"></div><div class="child-icon"></div></div>');   
    });

    $(Add_phone).on('click', ".removeicon", function(e) {
        e.preventDefault();
        $(this).parent('div').remove();
        x--;
    });
//======================================================================================
//----------------Duplicate Address CARD--------------------------
    var i = 2;
    $('#addaddress').click(function(e) {
        e.preventDefault();
        i++;
        var str = '<div class="card-'+i+'" style="margin-top:0;"><div class="card-image2"></div><div class="content'+
        i+'"><div class="form-bottom"><p class="addressinfo"> Address Information'+(i-1)+'</p><div class="card form-'+
        i+'" ><div><textarea class="js-input js-add1 js-add2" name="address" id="add'+
        (i-1)+'" maxlength="40" required></textarea><label>Address</label></div><div><div class="verifyicon"></div><input type="text" style="margin-top:20px; width:263px" class="js-input js-city js-add2" name="city" id="city'+
        (i-1)+'" maxlength="20" required><label>City</label></div><div class="selectcountry js-country"><p><span for="scountry1" class="lcountry">Country</span><br><select class="js-country js-add2" id="country'+
        (i-1)+'"></select></p><p><span for="sstate1" class="lstate">State</span><br><select class="js-state js-add2" id="state'+
        (i-1)+'"></select></p></div><div><div class="verifyicon"></div><input type="text" style="margin-top: 20px; width: 40%" maxlength="6" class="js-input js-pincode js-add2" name="pincode" id="pin'+
        (i-1)+'" required><label>PIN Code</label></div></div></div></div><div class="removeicon" style="position: absolute; right:0" ></div></div>';

        $('#multiplecards').append(str);
        //Check_error_add2.push
        $(".card-"+i).addClass('card-2');
        $(".content"+i).addClass('content2');        
        $selectCountries("country"+(i-1), "state"+(i-1));   //Auto Arrange Address 
    });

    $('#multiplecards').on('click', ".removeicon", function(e) {
        e.preventDefault();
        $(this).parent('div').remove();
        i--;
    });

    //------------------ ON SUBMIT BUTTON ---------------------------

     $('#submit').click(function() {
        Empty = 0; Count = 0;
        $('.form-1').find('input').each(function(key,value) { //Gets data from form1 and calls CheckEmpty()
            CheckEmpty($(value).val());
        });

        for(var j = 2; j <= i; j++) {           // Checks Empty fields in form-2 Address
            CheckEmpty2($('.form-'+j));
            if(j>2) {
                Count += VerifyAltadd($('#city'+(j-1)).val(), $('#pin'+(j-1)).val());
            }
        }  

        $('.alt-addphone').find('input').each(function(key,value) {  // Verifies data from Dynamic Phone Numbers
            Count += VerifyAltphone($(value));
        });

        $.each(Check_error, function(key,item){        //Checks status of Input Fields
            if(item === 1)
                Count++;
        });
        if($('#profile').css('background-image') === 'none') {
            $('.warningend').text("Upload Your Profile Picture").show(500);
            setTimeout(() => {
                $('.warningend').hide(500);
            }, 1500);
        } 
        if(Count > 0) {
            $('.warningend').text("Looks like you entered "+Count+" invalid inputs").show(500);
            setTimeout(() => {
                $('.warningend').hide(500);
            }, 1500);
        }
        else if(Count === 0 && Empty === 0 && $('#profile').css('background-image') != 'none'){
            $('#mymodal').css("display","block");
            
        }
    });

    $('#ok').click(function() {
        if(oper[Gensymbol](Num1, Num2) == $('#capinput').val() && $('#capinput').val().length != 0) {
            $('#verify').removeAttr('style').attr('class','verifiedicon');
            console.log('working'); 
            setTimeout(() => {
                $('#mymodal').css("display", "none");
            }, 1500);
            $('.card-1').hide();
            $('.card-2').hide();
            
            var multiple_phone = ""; var multiple_add2 = "";
            $('.js-phone2').each(function(index, item){
                var val = $(item).val();
                var id = $(item).attr('id');
                multiple_phone += val+" | ";
            });
            $('.js-add2').each(function(index, item){
                var val2 = $(item).val();
                var id = $(item).attr('id');
                multiple_add2 += val2+", ";
            });
            $('#finaldetails').show();
            $('.e-name').text($('#fname').val() +" "+ $('#lname').val());
            $('.e-email').text(Email.val()); $('.e-gender').text(Gender.val());
            $('.e-contact').text(Phone.val());
            $('.e-altcontact').text(multiple_phone);
            $('.e-address').text($.trim($('.js-add1').val()));
            $('.e-city').text($('.js-city').val());
            $('.e-country').text($('.js-country').val());    $('.e-state').text($('.js-state').val());
            $('.e-pin').text($('.js-pincode').val());
            $('.e-altaddress').text(multiple_add2);
            $('.profilepic2').show();
            $('.new-user').show();
            $('#submit,#clear').hide(); 
        }
        else {
            $('#verify').removeAttr('style').attr('class','notverifiedicon');
            setTimeout(() => {
                refreshfunc();
            }, 1500); 
        }
    });
         
//------------ PROFILE PICTURE-------------
    var reader;
    $('#profile').on('drop', function(e) {
        if (e.originalEvent) {
            var file = e.originalEvent.dataTransfer.files[0];
            reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function(e) {
                $('#profile, #profile2').css('background-image', 'url(' + reader.result + ')');
            };
        }
        $('.drop').hide();
        $('#mediaFile').css('margin-top', '90px');
    });

    $('#rprofile').on('click', function(e) {
        $('#mediaFile').click();
    });

    $('#mediaFile').change(function(e) {   
        var input = e.target;
        if (input.files && input.files[0]) {
        var file = input.files[0];
        var ext = file.name.split('.').pop().toLowerCase();
        if($.inArray(ext, ['png','jpg','jpeg']) == -1) {
            alert('invalid extension!');
        }
        var reader = new FileReader();  
        reader.readAsDataURL(file);
        reader.onload = function(e) {
            $('#profile, #profile2').css('background-image', 'url(' + reader.result + ')');
        };
        }
        $('.drop').hide();
        $('#mediaFile').css('margin-top', '90px');
       });
//================================================================================
    $('.new, #clear').click(function() {
        location.reload(true);
    })
//============= DEFAULT CODE TO CHECK EMPTY FIELDS ==============================
    CheckEmpty = function(elementvalue) {
        if(!elementvalue) {
            Empty++; 
        }
        if(Empty > 0) {
            $('.warningend').text('Please Fill All the Fields').show(500);
            setTimeout(() => {
                $('.warningend').hide(500);
            }, 1500);
        }
    };

    CheckEmpty2 = function(addressid) {
        addressid.find('input').each(function(key,value) { //Gets data from form2 and calls CheckEmpty()
            CheckEmpty($(value).val());
        });

        if(addressid.find('.js-country').val() === '-1' || addressid.find('.js-state').val() === '') {
            Empty++;
        } 
        CheckEmpty(addressid.find('.js-add1').val());     
    }

});
