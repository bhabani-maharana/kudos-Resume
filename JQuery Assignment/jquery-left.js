$(document).ready(function() {
    var Stat; var Passmatch; 
    $('.warning').hide();
    $('#submit').bind('click', function(event) {
        Stat=0; Passmatch=0;
        var Fname = $('#fname');    var lname = $('#lname');
        
        var Email = $('#Email');
        var Phone1 = $('#ph1');     var Phone2 = $("#ph2");
        var Pass = $('input[name=password]');   var Cpass = $('input[name=confpassword]');
        var Add1 = $('textarea[name=add1]');    var Add2 = $('textarea[name=add2]');
        var City = $('#city1');
        var Country1 = $('#scountry1');     var State1 = $('#sstate1');
        
        if(Fname.val().length === 0 || /[0-9()+*-/]/.test(Fname.val()) === true) {
            Fname.attr('class','errorstyle');
            Stat++;console.log(Stat);
            
        }
        if(lname.val().length === 0 || /[0-9()+*-/]/.test(lname.val()) === true) {
            lname.attr('class','errorstyle');
            Stat++;
        }
        if(/^[a-zA-Z0-9.]+@+[a-zA-Z]+?\.[a-zA-Z]{2,3}$/.test(Email.val()) === false) {
            Email.attr('class','errorstyle');
            Stat++;
        }
        if(Pass.val() !== Cpass.val() || Pass.val().length === 0) {
            //alert("** Password doesn't match");
            Pass.attr('class','errorstyle');
            Cpass.attr('class','errorstyle'); Passmatch++;
            $('.warning').text("Password doesn't  match").show(800);
        }

        var RadioValue = $("input[name='gender']:checked").val();
        if(!RadioValue){
                Stat++; $('.btn').effect("shake", {times:3}, 1000);
            }

        if(Phone1.val().length !== 10) {
            Phone1.attr('class','errorstyle');
            Stat++;
        }
        if(Phone2.val().length !== 10) {
            //Phone2.attr('class','errorstyle');
        }
        if(Add1.val().length === 0 || Add2.val().length === "") {
            Stat++;
        }
        if(City.val() === "") {
            City.attr('class','errorstyle');
            Stat++;
        }
        if(Country1.val() === 'null' || State1.val() === 'null') {
            //alert("** Please specify Country and State"); 
            Stat++;
        }
        if(Stat === 0 && Passmatch === 0) {
            $('#mymodal').css("display","block");
        }
        else if(Stat > 0) {
            //alert("** Seems like some fields are missing");
            $('.warning').text("Looks like you missed " +Stat+" field(s)").show(800);
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
            Stat++;  
        }
    });

    $('#ph1').keyup(function() {
        if((/^([0-9]{3})([0-9]{7})$/).test($(this).val())) {
            $('#phoneformat').text("");
        }
        else {
            $('#phoneformat').text("Enter a valid number");  
            Stat++;
        }
    });

});
