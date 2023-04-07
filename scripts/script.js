document.getElementById('send').addEventListener("click", send);
document.getElementById('reset').addEventListener("click", reset);

function send(){
    alert('Sent!');
}

function reset(){
    document.getElementById('email').value = "";
    document.getElementById('feedback').value = "";
}

function showNotification(){
    const notification = new notification("New Desktop Notification", {
        body: "Welcome to my Website!"
    })
}

if (Notification.permission === "granted"){
    showNotification();
} else if (Notification.permission !== "denied"){
    Notification.requestPermission().then(permission=>{
        if (permission === "granted"){
            showNotification();
        }
    })
}