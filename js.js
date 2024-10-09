const password = "rishi"; 

function login() {
    const passwordInput = document.getElementById("passwordInput").value;
    
   
    if (passwordInput === password) {
       
        window.location.href = "index.html";
    } else {
        
        alert("Incorrect password. Please try again.");
    }
}
