$(document).ready(function() {
    var stat; $('.warning').hide();
    $('#submit').bind('click', function(event) {
        stat=0;
        var fname = $('#fname');    var lname = $('#lname');
        
        var email = $('#Email');
        var phone1 = $('#ph1');     var phone2 = $("#ph2");
        var pass = $('input[name=password]');   var cpass = $('input[name=confpassword]');
        var add1 = $('textarea[name=add1]');    var add2 = $('textarea[name=add2]');
        var city = $('#city1');
        var country1 = $('#scountry1');     var state1 = $('#state1');
        
        if(fname.val().length == 0 || /[0-9()+*-/]/.test(fname.val()) == true) {
            fname.attr('class','errorstyle');
            stat++;console.log(stat);
            
        }
        if(lname.val().length == 0 || /[0-9()+*-/]/.test(lname.val()) == true) {
            lname.attr('class','errorstyle');
            stat++;
        }
        if(/^[a-zA-Z0-9.]+@+[a-zA-Z]+?\.[a-zA-Z]{2,3}$/.test(email.val()) == false) {
            email.attr('class','errorstyle');
            stat++;
        }
        if(pass.val() != cpass.val() || pass.val() == 0) {
            alert("** Password doesn't match");
            pass.attr('class','errorstyle');
            cpass.attr('class','errorstyle'); stat++;
        }

        var radioValue = $("input[name='gender']:checked").val();
        if(!radioValue){
                stat++; $('.btn').effect("shake", {times:3}, 1000);
            }

        if(phone1.val().length != 10) {
            phone1.attr('class','errorstyle');
            stat++;
        }
        if(phone2.val().length != 10) {
            //phone2.attr('class','errorstyle');
        }
        if(add1.val() == "" || add2.val() == "") {
            stat++;
        }
        if(city.val() == "") {
            city.attr('class','errorstyle');
            stat++;
        }
        if(country1.val() == 'null' || state1.val() == 'null') {
            //alert("** Please specify country and state"); 
            stat++;
        }
        if(stat == 0) {
            $('#mymodal').css("display","block");
        }
        else if(stat > 0) {
            //alert("** Seems like some fields are missing");
            $('.warning').text("Looks like you missed " +stat+" field(s)").show(800);
            window.addEventListener('mouseup', function(e) {
                $('.warning').hide(500);
            });
        }
    }); 

    $('.js-input').focusin(function(){
        //$(this).css("background-color", "rgba(62, 32, 68, 0.9)");
        //$(this).addClass('errorfocusin');
        $(this).attr('class','errorfocusin');
    });
    $('.js-input').focusout(function(){
        //$(this).css("background-color", "transparent");
        //$(this).addClass('errorfocusout');
        $(this).attr('class','errorfocusout');
    });

    //Check Password Strength----------------------------------------
    $('#pass').keyup(function() {
        var sample = /^(?=.*[!@#$%^&()*])[a-zA-Z0-9!@#$%^&()*]{7,15}$/;
        if(sample.test($(this).val())) {
            $('#passformat').text("");
        }
        else {
            $('#passformat').text("Password must contain atleast 1 digit and special character & 7 char long");  
            stat++;  
        }
    });

    $('#ph1').keyup(function() {
        if((/^([0-9]{3})([0-9]{7})$/).test($(this).val())) {
            $('#phoneformat').text("");
        }
        else {
            $('#phoneformat').text("Enter a valid number");  
            stat++;
        }
    });

});