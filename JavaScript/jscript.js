//------------------------------------------ JavaScript Valley-------------------------->

    function myfunction() {
        var fn = document.getElementById("fname").value;   var stat=0;
        var ln = document.getElementById("lname").value;
        var em = document.getElementById("email").value;
        var ph = document.getElementById("ph1").value;
        var addr = document.forms["form2"]["add1"].value;
        var city = document.forms["form2"]["city"].value;
        var pass = document.forms["form1"]["password"].value;
        var cpass = document.forms["form1"]["confpassword"].value;   
        var modal2 = document.getElementById('mymodal2');
          //if(document.getElementById("fname") == undefined || document.getElementById("lname") == undefined )
          //  alert("Required");

        if(/[0-9]/.test(fn) == true || fn.length == 0) {
            alert("**Enter a valid First Name"); document.getElementById("fname").style.backgroundColor="rgba(37, 35, 37, 0.411)"; stat++; }
  

        if(/[0-9]/.test(ln) == true || ln.length == 0) {
            alert("**Enter a valid Last Name"); document.getElementById("lname").style.backgroundColor="rgba(37, 35, 37, 0.411)"; stat++;}


        if(/[a-zA-Z0-9]+@+gmail.com/.test(em) == false) {
            alert("**Enter a valid Email"); document.getElementById("email").style.backgroundColor="rgba(37, 35, 37, 0.411)"; stat++;}


        if(pass != cpass) {
           alert("**Password doesn't match."); document.forms["form1"]["password"].style.backgroundColor="rgba(37, 35, 37, 0.411)"; 
           document.forms["form1"]["confpassword"].style.backgroundColor="rgba(37, 35, 37, 0.411)"; stat++;}


        if(ph.length != 10) {
           alert("**Enter a valid Phone Number"); document.getElementById("ph1").style.backgroundColor="rgba(37, 35, 37, 0.411)"; stat++;}
   
        if(addr == "") {
            alert("**Fill out Address"); document.forms["form2"]["add1"].style.backgroundColor="rgba(37, 35, 37, 0.411)"; stat++;}

        if(city == "") {
            alert("**Fill out City"); document.forms["form2"]["city"].style.backgroundColor="rgba(37, 35, 37, 0.411)"; stat++;}
    
        if(stat == 0)
            modal2.style.display="block";
    } 
    
    function focusin(id){
        //document.getElementById(id).style.backgroundColor='transparent';
        id.style.backgroundColor='rgba(62, 32, 68, 0.9)';
    }
    function focusout(id) {
        id.style.backgroundColor='transparent';
    }

    var modal = document.getElementById('mymodal');
    var check = document.getElementById('checkin');
    var span = document.getElementsByClassName("close")[0];
    
    check.onclick = function() {
        if(check.checked == true)
            modal.style.display="block";
    }
    span.onclick = function() {
        modal.style.display="none";
    }
   
    window.onclick = function(event) {
        //this.console.log("Window clicked",event.target)
        if(event.target == modal){
            modal.style.display="none"; 
            this.check.checked=false;
        }
    }

    // Captcha Generation and storing in <p>
    var n1 = Math.floor(Math.random().toFixed(2)*100);
    var n2 = Math.floor(Math.random().toFixed(2)*100);
    document.getElementById('captcha').innerHTML = n1 + " + " + n2;
    
    //When Refresh button is Pressed
    function refreshfunc() {
        n1 = Math.floor(Math.random().toFixed(2)*100);
        n2 = Math.floor(Math.random().toFixed(2)*100);
        document.getElementById('captcha').innerHTML = n1 + " + " + n2;
        document.getElementById('verify').style.background="none";
        document.getElementsByClassName('capinput')[0].value = "";
    }

    function verify_captcha() {
        if((n1 + n2) == parseInt(document.getElementsByClassName('capinput')[0].value) ) {
            document.getElementById('verify').style.background="url('verified.png') no-repeat center";
            document.getElementById('verify').style.backgroundSize="80%";
            setTimeout(() => {
                modal.style.display="none";
            }, 1500); 
            check.checked=true;
        }
        else {
            document.getElementById('verify').style.background="url('notverified.jfif') no-repeat center";
            document.getElementById('verify').style.backgroundSize="80%";
            setTimeout(() => {
                refreshfunc();
            }, 1500); 
            check.checked=false;
            
        }
    }