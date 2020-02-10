//============ DEFAULT CODE FOR INPUT VALIDATION STYLE ========================    
ErrorFunc = function(eventid){
    $(eventid).prev().attr('class','incorrecticon');
    $(eventid).addClass('errorstyle');
};

CorrectFunc = function(eventid) {
    $(eventid).prev().attr('class','correcticon');
    $(eventid).removeClass('errorstyle'); 
};

$('body').on("keyup", ".js-input",function() {          //Universal Function for Empty Fields
    if(!$(this).val()) {
        $(this).prev().removeAttr('class');
        $(this).removeClass('errorstyle');
    }
});

$('body').on('keyup','.js-phone2',function() {           // For Dynamic Phone Numbers
    if($(this).val()) {
        if($(this).val().match(/^[0-9]{10}$/)) {
            $(this).next().next().removeClass('incorrecticon').addClass('correcticon');
            $(this).removeClass('errorstyle').addClass('errorfocusout');
        }
        else {
            $(this).next().next().removeClass('correcticon').addClass('incorrecticon');
            $(this).removeClass('errorfocusout').addClass('errorstyle'); 
        }
    }
    else {
        $(this).removeClass("errorfocusout errorstyle");
        $(this).next().next().removeClass("incorrecticon correcticon");
    }
});

VerifyAltphone = function(id) {
    if($(id).val().match(/^[0-9]{10}$/)) 
        return 0;
    else if(!$(id).val())
        CheckEmpty($(id).val());
    else    
        return 1; 
}

var test = /^[a-zA-Z]+$/;
VerifyAltadd = function(cityid, pinid) {
    if(cityid.match(test) && pinid.match(test) === false)
        return 2;
    else if(cityid.match(test) === false || pinid.match(test) === false)
        return 1;
    else
        return 0;
}

//---------------------- VERIFY CAPTCHA ----------------------------------------------------
var Num1 = Math.floor(Math.random() * 10);
var Num2 = Math.floor(Math.random() * 10);
var symbol = "/*+-";
var oper = {'/' : function(a, b){return parseInt(a/b)}, '*': function(a, b){return a*b} ,'+': function(a, b){return a+b}, '-': function(a, b){return a-b}};

var Gensymbol = symbol[Math.floor(Math.random() * symbol.length)];
$('#captcha').text(Num1+" "+Gensymbol+" "+Num2);

function refreshfunc() {
    Num1 = Math.floor(Math.random().toFixed(2)*10);
    Num2 = Math.floor(Math.random().toFixed(2)*10);
    Gensymbol = symbol[Math.floor(Math.random() * symbol.length)];
    $('#captcha').text(Num1+" "+Gensymbol+" "+Num2);
    $('#verify').attr('style', 'background:none');
    $('#capinput').val("");
}

$('.close, #cancel').click(function() {
    $('#mymodal').css("display", "none");
})    
$('.refresh').click(function() {
    refreshfunc();
});
