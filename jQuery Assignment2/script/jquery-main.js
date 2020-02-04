$(document).ready(function() {
    
    var Stat; 
    var Empty; var Check_error={"firstname": 0, "lastname": 0, "emailid": 0, "gender": 0, "phoneno": 0, "panno": 0, "aadharno": 0, "city": 0, "pincode": 0};
    var Fname = $('#fname');
    var Lname = $('#lname');
    var Email = $('#Email');
    var Gender = $("input[name = 'gender']");
    var Phone = $('#ph1');
    var Pannum = $('#pan');
    var AadharNum = $('#aadhar');
    var Address1 = $('#add1');
    var City1 = $('#city');
    var Pin1 = $('#pin');

    $('.warningend').hide();

    Stat =0, Empty=0;
    Fname.keyup(function() {
        if(/[0-9()+*-/]/.test($(this).val()) === true) {
            $(this).prev().attr('class','incorrecticon');
            $(this).addClass('errorstyle');
            Check_error.firstname = 1; 
        }
        if(/[0-9()+*-/]/.test($(this).val()) === false){
            $(this).prev().attr('class','correcticon');
            $(this).removeClass('errorstyle');
            Check_error.firstname = 0;
        }
    });

    Lname.keyup(function() {
        if(/[0-9()+*-/]/.test($(this).val()) === true) {
            $(this).prev().attr('class','incorrecticon');
            $(this).addClass('errorstyle');
            Check_error.lastname = 1; 
        }
        if(/[0-9()+*-/]/.test($(this).val()) === false){
            $(this).prev().attr('class','correcticon');
            $(this).removeClass('errorstyle');
            Check_error.lastname = 0; 
        }
    });

    Email.keyup(function() {
        if(/^[a-zA-Z0-9.]+@+[a-zA-Z]+?\.[a-zA-Z]{2,3}$/.test(Email.val()) === false) {
            $(this).prev().attr('class','incorrecticon');
            $(this).addClass('errorstyle');
            Check_error.emailid = 1; 
        }
        if(/^[a-zA-Z0-9.]+@+[a-zA-Z]+?\.[a-zA-Z]{2,3}$/.test(Email.val()) === true){
            $(this).prev().attr('class','correcticon');
            $(this).removeClass('errorstyle');
            Check_error.emailid = 0; 
        }
    });

    var Testnum = /^[0-9]{10}$/;
    Phone.keyup(function() {
        if(Testnum.test($(this).val()) === true && Phone.val().length !== 0) {
            $('#verifyicon4').attr('class','correcticon');
            $(this).attr('class', 'errorfocusout');
            Check_error.phoneno = 0; 
            
        }
        if(Testnum.test($(this).val()) === false && Phone.val().length !== 0) {
            $('#verifyicon4').attr('class','incorrecticon');
            $(this).removeClass('errorfocusout').addClass('errorstyle');
            Check_error.phoneno = 1; 
        }
    });

    Pannum.keyup(function() {
        var Testpan = /([A-Z]){5}([0-9]){4}([A-Z]){1}$/;
        if(Testpan.test(Pannum.val().toUpperCase()) === true && Pannum.val().length !== 0) {
            $(this).prev().attr('class','correcticon');
            $(this).removeClass('errorstyle');
            Check_error.panno = 0; 
        }
        if(Testpan.test(Pannum.val().toUpperCase()) === false && Pannum.val().length !== 0) {
            $(this).prev().attr('class','incorrecticon');
            $(this).addClass('errorstyle');
            Check_error.panno = 1; 
        }

    });

    AadharNum.keyup(function() {
        if(AadharNum.val().length === 12) {
            $(this).prev().removeAttr('class').attr('class','correcticon');
            $(this).attr('class', 'errorfocusout');
            Check_error.aadharno = 0; 
        }
        if(AadharNum.val().length !== 12) {
            $(this).prev().attr('class','incorrecticon');
            $(this).addClass('errorstyle');
            Check_error.aadharno = 1; 
        }

    });

    function checkGender(){
        console.log("JEKS");
        if(!Gender.is(':checked')){            // Checks Gender before moving to Phone Number
            Empty = 1;  
            $('.radiobtn').effect("shake", {times:1}, 100);
        }
        else {
            Empty =0; 
        }
    };

    var Maxphone = 5;
    var Addphone = $('.test');
    var Add_button = $('.addicon');
    var x = 1;

    //When user clicks Add Phone Button
    var arr_phone = [];
    $(Add_button).click(function(e) {
        e.preventDefault();
        if( x < Maxphone) {
            x++;
            $(Addphone).append('<div style="display: inline-flex"><input type="number" class="js-input2" id="ph'+x+'" name="phoneno" placeholder="Phone Number" required/><div class="removeicon"></div><div class="child-icon"></div></div>');
            arr_phone.push('ph'+x);   
        }
    });

    $(Addphone).on('click', ".removeicon", function(e) {
        e.preventDefault();
        $(this).parent('div').remove();
        //arr_phone.pop('ph'+x);
        x--;
    });

    $('.js-input').keyup(function() {
        if($(this).val().length === 0) {
            $(this).prev().removeAttr('class');
            $(this).removeClass('errorstyle');
            $('#verifyicon4').removeAttr('class','incorrecticon');
            Empty = 1;
        }
        else {
            Empty = 0;
        }
    });

    $('body').on('keyup','.js-input2',function() {
        if(Testnum.test($(this).val()) === true && $(this).val().length !== 0) {
            $('.child-icon').removeClass('incorrecticon').addClass('correcticon');
            $(this).removeClass('errorstyle').addClass('errorfocusout');
            Check_error.phoneno = 0; 
            
        }
        if(Testnum.test($(this).val()) === false && $(this).val().length !== 0) {
            $('.child-icon').removeClass('correcticon').addClass('incorrecticon');
            $(this).removeClass('errorfocusout').addClass('errorstyle');
            Check_error.phoneno = 1; 
        }
        if($(this).val().length === 0) {
            $(this).removeClass("errorfocusout errorstyle");
            $('.child-icon').removeClass("incorrecticon correcticon");
        }
    });


// Validate Address Card
    $selectCountries("country", "state");

    $('body').on('keyup','.js-city',function() {
        if(/[0-9()+*-/]/.test($(this).val()) === true) {
            $(this).prev().attr('class','incorrecticon');
            $(this).removeClass('errorfocusout').addClass('errorstyle');
            Check_error.city = 1; 
        }
        if(/[0-9()+*-/]/.test($(this).val()) === false && $(this).val().length !== 0) {
            $(this).prev().attr('class','correcticon');
            $(this).removeClass('errorstyle').addClass('errorfocusout');
            Check_error.city = 0; 
        }
    });

    $('body').on('keyup','.js-pincode',function() {
        if($(this).val().length === 6) {
            $(this).prev().removeAttr('class').attr('class','correcticon');
            $(this).removeClass('errorstyle').addClass('errorfocusout');
            Check_error.pincode = 0; 
        }
        if($(this).val().length < 6 && $(this).val().length >= 1 || $(this).val().length > 6) {
            $(this).prev().attr('class','incorrecticon');
            $(this).removeClass('errorfocusout').addClass('errorstyle');
            Check_error.pincode = 1; 
        }
    });

// Duplicate Address CARD--------------------------
    var i = 3;
    $('#addaddress').click(function(e) {
        e.preventDefault();
        if(i < 8) {
        var str = '<div class="card-'+i+'" style="margin-top:0;"><div class="card-image2"></div><div class="content'+
        i+'"><div class="form-bottom"><p class="addressinfo"> Address Information'+(i-1)+'</p><form action="" name="form'+
        i+'" ><div><textarea class="js-input js-add2" name="address" id="add'+
        (i-1)+'" maxlength="40" required></textarea><label>Address</label></div><div><div class="verifyicon"></div><input type="text" style="margin-top:20px; width:263px" class="js-input js-city js-add2" name="city" id="city'+
        (i-1)+'" maxlength="20" required><label>City</label></div><div class="selectcountry js-country"><p><span for="scountry1" class="lcountry">Country</span><br><select class="js-add2" id="country'+
        (i-1)+'"></select></p><p><span for="sstate1" class="lstate">State</span><br><select class="js-state js-add2" id="state'+
        (i-1)+'"></select></p></div><div><div class="verifyicon"></div><input type="text" style="margin-top: 20px; width: 40%" class="js-input js-pincode js-add2" name="pincode" id="pin'+
        (i-1)+'" required><label>PIN Code</label></div></form></div></div><div class="removeicon" style="position: absolute; right:0" ></div></div>';
        
        $('#multiplecards').append(str);
        
        $(".card-"+i).addClass('card-2');
        $(".content"+i).addClass('content2');
        
    //Auto Arrange Address ----------------------
        $selectCountries("country"+(i-1), "state"+(i-1)); 
        i++;
        }
        
    });

    $('#multiplecards').on('click', ".removeicon", function(e) {
        e.preventDefault();
        $(this).parent('div').remove();
        i--;
    });
    
    
    //-------------------- VERIFY CAPTCHA ------------------------------
    var Num1 = Math.floor(Math.random() * 10);
    var Num2 = Math.floor(Math.random() * 10);
    var symbol = "/*+-";
    var oper = {'/' : function(a, b){return parseInt(a/b)}, '*': function(a, b){return a*b} ,'+': function(a, b){return a+b}, '-': function(a, b){return a-b}};

    var Gensymbol = symbol[Math.floor(Math.random() * symbol.length)];
    $('#captcha').text(Num1+" "+Gensymbol+" "+Num2);
    console.log(oper[Gensymbol](Num1,Num2));

    function refreshfunc() {
        Num1 = Math.floor(Math.random().toFixed(2)*10);
        Num2 = Math.floor(Math.random().toFixed(2)*10);
        Gensymbol = symbol[Math.floor(Math.random() * symbol.length)];
        $('#captcha').text(Num1+" "+Gensymbol+" "+Num2);
        $('#verify').attr('style', 'background:none');
        $('#capinput').val("");
    }

    $('#ok').click(function() {
        if(oper[Gensymbol](Num1, Num2) == $('#capinput').val() && $('#capinput').val().length != 0) {
            $('#verify').removeAttr('style').attr('class','verifiedicon');
            console.log('working'); 
            setTimeout(() => {
                $('#mymodal').css("display", "none");
            }, 1500);
            $('.card-1').hide();
            $('.card-2').hide();
            
            // Fetch Dynamic Phone Numbers & Address
            var multiple_phone ="" ;
            var multiple_add2 = "";
            var str2 = '<p style="color: white; font-size:30px">Employee Details<p><div class="profilepic2" id="profile2"></div><div class="potrait" style="width: 50%;background-color: bisque;margin: 10% 25%;'+
                        'font-family: "Roboto Slab", serif; text-align: left; padding: 20px" ><p>Name: <label class="name">'+$('#fname').val()+" "+$('#lname').val()+'</label></p>'+
                        '<p>Email: <label>'+$('#Email').val()+'</label></p>'+
                        '<p>Gender: <label>'+Gender.val()+'</label></p>'+
                        '<p>Phone Number: <label>'+$('#ph1').val()+'</label></p>';
            
            $('.js-input2').each(function(index, item){
                var val = $(item).val();
                var id = $(item).attr('id');
                multiple_phone += val+" | ";
            });
            $('.js-add2').each(function(index, item){
                var val2 = $(item).val();
                var id = $(item).attr('id');
                multiple_add2 += val2+", ";
            });
            var str_alt = '<p>Alternate Phone: <label>'+multiple_phone+'</label></p>';
            var str3 =  '</label></p>'+
                        '<p>PAN: <label>'+$('#pan').val()+'</label></p>'+
                        '<p>Aadhar Number: <label>'+$('#aadhar').val()+'</label></p>'+
                        '<p>Address: <label>'+$('#add1').val()+'</label></p>'+
                        '<p>Country: <label>'+$('#country').val()+'</label></p>'+
                        '<p>State: <label>'+$('#state').val()+'</label></p>'+
                        '<p>City: <label>'+$('#city').val()+'</label></p>'+
                        '<p>PIN Code: <label>'+$('#pin').val()+'</label></p>';
            var str4 =  '<p>Alternate Address: <label>'+multiple_add2+'</label></p></div>';
            $('#final-details').append(str2+str_alt+str3+str4);
            
        }
        else {
            $('#verify').removeAttr('style').attr('class','notverifiedicon');
            setTimeout(() => {
                refreshfunc();
            }, 1500); 
        }
    });

    $('.close').click(function() {
        $('#mymodal').css("display", "none");
    })

    $('#cancel').click(function() {
            $('#mymodal').css("display", "none");
    });

    $('.refresh').click(function() {
        refreshfunc();
    });


    //------------------ ON SUBMIT BUTTON ---------------------------

    $('#submit').click(function() {
        checkGender();
        // console.log("hello");
        
        if(Fname.val().length === 0 || Lname.val().length === 0 || Email.val().length === 0 || !Gender.is(':checked') || Phone.val().length === 0 ||
            Pannum.val().length === 0 || AadharNum.val().length === 0 || Address1.val().length === 0 || City1.val().length === 0 ||
            Pin1.val().length === 0 || $('.js-country').val() === '-1' || $('.js-state').val() === '') {
            Empty++;
        }
        
        if(Empty > 0) {
            $('.warningend').text("Kindly fill all the fields").show(500);
            window.addEventListener('mouseup', function(e) {
                $('.warningend').hide(500);
            });
            
        }
        var count = 0;
        $.each(Check_error, function(key,item) {
            if(item === 1) {
                count++;
            }
        });
        if(count > 0) {
            $('.warningend').text("Looks like you entered "+count+" invalid inputs").show(800);
            window.addEventListener('mouseup', function(e) {
                $('.warningend').hide(500);
            });
        }

        if(Empty === 0 && count === 0) {
            $('#mymodal').css("display","block");
        }
        Empty = 0;
    });

    $('#profile2').hide();
//------------ PROFILE PICTURE-------------

    $('#profile').on('drop', function(e) {
        $('#profile').removeClass('dragging');
    
        if (e.originalEvent) {
        var file = e.originalEvent.dataTransfer.files[0];
        console.log(file);
        
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function(e) {
            $('#profile').css('background-image', 'url(' + reader.result + ')');
            $('#profile2').show();
            $('#profile2').css('background-image', 'url(' + reader.result + ')');
        };
        }
        
        $('.drop').hide();
        $('#mediaFile').css('margin-top', '90px');
    });

    $('#rprofile').on('click', function(e) {
        $('#mediaFile').click();
    });

    window.addEventListener("dragover", function(e) {
        e = e || event;
        e.preventDefault();
    }, false);
    window.addEventListener("drop", function(e) {
        e = e || event;
        e.preventDefault();
    }, false);

    $('#mediaFile').change(function(e) {   
        var input = e.target;
        if (input.files && input.files[0]) {
        var file = input.files[0];  
        var reader = new FileReader();  
        reader.readAsDataURL(file);
        reader.onload = function(e) {
            console.log(reader.result);
            $('#profile').css('background-image', 'url(' + reader.result + ')');
            $('body').on('click','#profile2',function() {
                $(this).css('background-image', 'url(' + reader.result + ')');
            })
        };
        }
        $('.drop').hide();
        $('#mediaFile').css('margin-top', '90px');
       });


    $('#clear').click(function() {
        $('input').val('');
        $('input').removeClass('errorstyle');
        
    });




});
