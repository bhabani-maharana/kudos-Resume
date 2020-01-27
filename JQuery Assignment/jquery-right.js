$(document).ready(function() {  
   
  //Copy Current address to Permanent address
    $('#sameaddress').change(function() {
        if($(this).prop("checked") == true) {
            $('#inpadd2').text($('#inpadd1').val());
            $('#scountry2').css("background-color", "rgba(145, 131, 158, 0.7)").attr('disabled', 'true');
            $('#sstate2').css("background-color", "rgba(145, 131, 158, 0.7)").attr('disabled', 'true');
            $('#city2').hide(); $('#lblcity2').hide();
        }
        else {
            $('#inpadd2').text("");
            $('#scountry2').css("background-color","rgba(225, 202, 247, 0.7)").removeAttr('disabled');
            $('#sstate2').removeAttr('disabled').css("background-color","rgba(225, 202, 247, 0.7)");
            $('#city2').show(); $('#lblcity2').show();
        }
    });

    //Verify CAPTCHA---------------------------------
    var n1 = Math.floor(Math.random().toFixed(2)*100);
    var n2 = Math.floor(Math.random().toFixed(2)*100);
    var symbol = "/*+-";
    var oper = {'/' : function(a, b){return parseInt(a/b)}, '*': function(a, b){return a*b} ,'+': function(a, b){return a+b}, '-': function(a, b){return a-b}};

    var gensymbol = symbol[Math.floor(Math.random() * symbol.length)];
    $('#captcha').text(n1+" "+gensymbol+" "+n2);
    console.log(oper[gensymbol](n1,n2));

    function refreshfunc() {
        n1 = Math.floor(Math.random().toFixed(2)*100);
        n2 = Math.floor(Math.random().toFixed(2)*100);
        gensymbol = symbol[Math.floor(Math.random() * symbol.length)];
        $('#captcha').text(n1+" "+gensymbol+" "+n2);
        $('#verify').attr('style', 'background:none');
        $('#capinput').val("");
    }

    $('#ok').click(function() {
        if(oper[gensymbol](n1, n2) == $('#capinput').val() && $('#capinput').val().length != 0) {
            $('#verify').removeAttr('style').attr('class','verifiedicon');
            console.log('working'); 
            setTimeout(() => {
                $('#mymodal').css("display", "none");
            }, 1500);
            setTimeout(() => {
                $('#mymodal2').css("display", "block");
            }, 1800);
        
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


});