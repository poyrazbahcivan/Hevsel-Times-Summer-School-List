const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const submitButon = document.getElementById('buton');
submitButon.addEventListener('click', (event) => {
    const username = usernameInput.value; 
    const password = passwordInput.value; 
    authenticateUser (username, password);
})
function authenticateUser(username, password) {
    if (username == "GulKarenAca" && password == "GV42818A93P6MPVXYHB3") {
        localStorage.setItem('authenticated', 'true');
        window.location.replace("menu.html");
    } else if (username == "AdanurNas" && password == "J7M6LODF83MSSSPCLJ2Q") {
        localStorage.setItem('authenticated', 'true');
        window.location.replace("menu.html");
    } else if (username == "YigitEfeNas" && password == "L2ERES8N484M82AI99L0") {
        localStorage.setItem('authenticated', 'true');
        window.location.replace("menu.html");    
    } else if (username == "ArdaBoraKarahan" && password == "G50DTH0KFTVIH7N89CCP") {
        localStorage.setItem('authenticated', 'true');
        window.location.replace("menu.html");
    } else if (username == "BedirhanAtabay" && password == "ONH90Y652O1XOIO2Y48R") {
        localStorage.setItem('authenticated', 'true');
        window.location.replace("menu.html");
    } else if (username == "BejanYilmaz" && password == "PJ8DN1CDQ36BXC3L2KKB") {
        localStorage.setItem('authenticated', 'true');
        window.location.replace("menu.html");
    } else if (username == "ElifGulceBatgi" && password == "CNB7YOTKAMJ6504AJ9GY") {
        localStorage.setItem('authenticated', 'true');
        window.location.replace("menu.html");
    } else if (username == "CemilYildiz" && password == "BT2TT6JUN850OV8Y7B91") {
        localStorage.setItem('authenticated', 'true');
        window.location.replace("menu.html");
    } else if (username == "DamlaZeryaAslan" && password == "JAUEU3KDG58L4V3BZ6IU") {
        localStorage.setItem('authenticated', 'true');
        window.location.replace("menu.html");
    } else if (username == "BelcimBadeEren" && password == "H24LH9D7RVN0MX13WGH4") {
        localStorage.setItem('authenticated', 'true');
        window.location.replace("menu.html");
    } else if (username == "BarisCavus" && password == "G2AVAZ35QLR597J1GM2R") {
        localStorage.setItem('authenticated', 'true');
        window.location.replace("menu.html");
    } else if (username == "DuruDeger" && password == "CTQCKS263ZY6WMTC9SHS") {
        localStorage.setItem('authenticated', 'true');
        window.location.replace("menu.html");
    } else if (username == "MuhammedEminAcar" && password == "91MG4UVFNWSUVA8VB25P") {
        localStorage.setItem('authenticated', 'true');
        window.location.replace("menu.html");
    } else if (username == "MuhammedEminYasul" && password == "85BA5D95PLP6L6OH9T4H") {
        localStorage.setItem('authenticated', 'true');
        window.location.replace("menu.html");
    } else if (username == "EvraHaspolat" && password == "X8X2VXA3NJP46FS7RUP4") {
        localStorage.setItem('authenticated', 'true');
        window.location.replace("menu.html");
    } else if (username == "JirDaraAkcan" && password == "BT2ABXA8S00KE78Y1M4B") {
        localStorage.setItem('authenticated', 'true');
        window.location.replace("menu.html");  
    } else if (username == "JiyanTekay" && password == "L8W1K47YQB7M7GKDMA0S") {
        localStorage.setItem('authenticated', 'true');
        window.location.replace("menu.html");   
    } else if (username == "ArdaKizilkaya" && password == "Z1JD380PRN9P35DHIC0N") {
        localStorage.setItem('authenticated', 'true');
        window.location.replace("menu.html");  
    } else if (username == "MiranDeniz" && password == "E74I2GTDPD670JGAXHCB") {
        localStorage.setItem('authenticated', 'true');
        window.location.replace("menu.html");   
    } else if (username == "SaryaGulec" && password == "15K2W2DVVL3Z4L6NB3SG") {
        localStorage.setItem('authenticated', 'true');
        window.location.replace("menu.html");   
    } else if (username == "YeldaNazUsal" && password == "J6UJG930A1RJLJC0KS4S") {
        localStorage.setItem('authenticated', 'true');
        window.location.replace("menu.html");  
    } else if (username == "ArdilUlucay" && password == "RCD1GFWNX85DALLUM6KP") {
        localStorage.setItem('authenticated', 'true');
        window.location.replace("menu.html");    
      } else if (username == "YusufDenizKuten" && password == "8AG18TZRJFHTVBI306TJ") {
        localStorage.setItem('authenticated', 'true');
        window.location.replace("menu.html");          
    } else{
        localStorage.setItem('authenticated', 'false');
    }
}

