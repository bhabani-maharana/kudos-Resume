//------------------------------------------ JavaScript Valley-------------------------->
var modal = document.getElementById('mymodal');
var addr = document.forms["form2"]["add1"];
var pass = document.forms["form1"]["password"];
var oper = {'/' : function(a, b){return parseInt(a/b)}, '*': function(a, b){return a*b} ,'+': function(a, b){return a+b}, '-': function(a, b){return a-b}}; var i=0;
var symbol = "/*+-";

    function myfunction() {
        var fn = document.getElementById("fname");   var stat=0; 
        var ln = document.getElementById("lname");
        var em = document.getElementById("Email");
        var ph = document.getElementById("ph1");
        var addr2 = document.forms["form2"]["add2"];
        var country1 = document.getElementById('scountry1');
        var state1 = document.getElementById('sstate1');
        var city = document.forms["form2"]["city1"];
        var cpass = document.forms["form1"]["confpassword"];   

        if(/[0-9()+*-/]/.test(fn.value) == true || fn.value.length == 0) {
            fn.style.backgroundColor="rgba(37, 35, 37, 0.411)"; stat++; 
        }
  
        if(/[0-9()+*-/]/.test(ln.value) == true || ln.value.length == 0) {
            ln.style.backgroundColor="rgba(37, 35, 37, 0.411)"; stat++;
        }

        if(/^[a-zA-Z0-9.]+@+[a-zA-Z]+?\.[a-zA-Z]{2,3}$/.test(em.value) == false) {
            em.style.backgroundColor="rgba(37, 35, 37, 0.411)"; stat++;
        }

        if(pass.value != cpass.value || pass.value == 0) {
            alert("** Password doesn't match");
           pass.style.backgroundColor="rgba(37, 35, 37, 0.411)"; 
           cpass.style.backgroundColor="rgba(37, 35, 37, 0.411)"; stat++;
        }

        if(ph.value.length < 10) {
           ph.style.backgroundColor="rgba(37, 35, 37, 0.411)"; stat++;
        }
   
        if(addr.value.length == 0 || addr2.value.length == 0) {
            /*addr.style.backgroundColor="rgba(37, 35, 37, 0.411)";*/ stat++;
        }

        if(city.value == "") {
            city.style.backgroundColor="rgba(37, 35, 37, 0.411)"; stat++;
        }
        
        if(country1.value == 'null' || state1.value == 'null') {
            alert("** Please specify your Country and State"); stat++;
        }

        if(stat == 0) {
            modal.style.display="block";
        }
        else if( stat > 0 ) {
            alert("**Seems like some field are Empty or Invalid");
        }
    } 
    
    function focusin(id){
        //document.getElementById(id).style.backgroundColor='transparent';
        id.style.backgroundColor='rgba(62, 32, 68, 0.9)';
    }
    function focusout(id) {
        id.style.backgroundColor='transparent';
    }

    var check = document.getElementById('checkin');
    var modalClose = document.getElementsByClassName("close")[0];
    var modal2 = document.getElementById('mymodal2');

    function strength(id) {
        if(id.value.match(/\d/) && id.value.match(/[a-z]/i) && id.value.match(/[!@#$%^&*()_+]/) && id.value.length >= 7) {
            document.getElementById('passformat').innerHTML = "";
        }
        else {
            document.getElementById('passformat').innerHTML = "Password must contain atleast 1 digit and 1 special character";    
        }
    }

    function phonestrength(id) {
        if(id.value.match(/^([0-9]{3})([0-9]{7})$/)) {
            document.getElementById('phoneformat').innerHTML = "";
        }
        else {
            document.getElementById('phoneformat').innerHTML = "Invalid Phone Number";
        }
    }

    // When Current address is same as Permanent Address
    var country2 = document.getElementById('scountry2');
    var state2 = document.getElementById('sstate2');
    var city2 = document.getElementById('city2');
    var lbcity2 = document.getElementById('lblcity2');
    function copyaddress(id) {
        if(id.checked == true) {
            document.getElementById('inpadd2').value = addr.value;
            country2.disabled = true;
            state2.disabled = true;
            city2.hidden = true; lbcity2.style.display = 'none';
            country2.style.backgroundColor="rgba(145, 131, 158, 0.7)";
            state2.style.backgroundColor="rgba(145, 131, 158, 0.7)";
        }
        else {
            document.getElementById('inpadd2').value = "";
            country2.disabled = false;
            state2.disabled = false;
            city2.hidden = false; lblcity2.style.display = "block";
            country2.style.backgroundColor="rgba(225, 202, 247, 0.7)";
            state2.style.backgroundColor="rgba(225, 202, 247, 0.7)";
        }
    }

    modalClose.onclick = function() {
        modal.style.display="none";
    };
   
    window.onclick = function(event) {
        //this.console.log("Window clicked",event.target)
        if(event.target == modal){
            modal.style.display="none"; 
           // this.check.checked=false;
        }
    };

    // Captcha Generation and storing in <p>
    var n1 = Math.floor(Math.random().toFixed(2)*100);
    var n2 = Math.floor(Math.random().toFixed(2)*100);
    var gensymbol = symbol[Math.floor(Math.random() * symbol.length)];
    document.getElementById('captcha').innerHTML = n1 + gensymbol + n2;
    
    //When Refresh button is Pressed
    function refreshfunc() {
        n1 = Math.floor(Math.random().toFixed(2)*100);
        n2 = Math.floor(Math.random().toFixed(2)*100);
        gensymbol = symbol[Math.floor(Math.random() * symbol.length)];
        document.getElementById('captcha').innerHTML = n1 + gensymbol + n2;
        document.getElementById('verify').style.background="none";
        document.getElementsByClassName('capinput')[0].value = "";
    }

    function verify_captcha() {
        if(oper[gensymbol](n1, n2) == parseInt(document.getElementsByClassName('capinput')[0].value) ) {
            document.getElementById('verify').style.background="url('verified.png') no-repeat center";
            document.getElementById('verify').style.backgroundSize="80%";
            setTimeout(() => {
                modal.style.display="none";
            }, 1500);
            setTimeout(() => {
                modal2.style.display="block";
            }, 1800);
            
        }
        else {
            document.getElementById('verify').style.background="url('notverified.jfif') no-repeat center";
            document.getElementById('verify').style.backgroundSize="80%";
            setTimeout(() => {
                refreshfunc();
            }, 1500); 
            
        }
    }