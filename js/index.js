// Get the validate button element
let validateBtn = document.getElementById("validateBtn");

validateBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    let resultCont = document.getElementById("result");
    resultCont.innerHTML = `<p>Validating...</p>`;

    let key = "ema_live_v5Gun8NoCiDAF231iTo4tG5Ad0VZgpKE2WeZVp19";
    
    let email = document.getElementById("email").value;
    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`;
    
    try {
        console.log('Making request to:', url);
        let res = await fetch(url);
        console.log('Response status:', res.status);
        
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status} - ${res.statusText}`);
        }
        
        let result = await res.json();
        let str = ``;
        for (let property of Object.keys(result)){
            if(result[property] !== null && result[property] !== undefined) {
                str = str + `<p><strong>${property}:</strong> ${result[property]}</p>`;
            }
        }
        console.log('Result:', result);
        resultCont.innerHTML = str;
    } catch (error) {
        console.error('Error:', error);
        resultCont.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
    }
});
