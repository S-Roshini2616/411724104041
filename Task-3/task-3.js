let messages = [];
const input = document.getElementById("messageInput");
const addBtn = document.getElementById("addBtn");
const clearBtn = document.getElementById("clearBtn");
const charCount = document.getElementById("charCount");
const status = document.getElementById("status");
const messagesDiv = document.getElementById("messages");
input.addEventListener("input", () => {
    charCount.textContent = input.value.length;
});
function displayMessages() {
    messagesDiv.innerHTML = "";
    messages.forEach((msgObj) => {
        const div = document.createElement("div");
        div.className = "message";
        div.textContent = msgObj.text;
        div.id = msgObj.id;
        messagesDiv.appendChild(div);
    });
}
addBtn.addEventListener("click", () => {
    const message = input.value.trim();
    const promise = new Promise((resolve, reject) => {
        if (message.length >= 3) {
            resolve(message);
        } else {
            reject("Message must contain at least 3 characters");
        }
    });
    promise
        .then((msg) => {
            status.textContent = "Message Added Successfully";
            const id = "msg" + Date.now();
            messages.push({
                id: id,
                text: msg
            });
            displayMessages();
            input.value = "";
            charCount.textContent = 0;
            setTimeout(() => {
                messages = messages.filter(item => item.id !== id);
                displayMessages();
                status.textContent = "Message Expired";
            }, 10000);
        })
        .catch((error) => {
            status.textContent = error;
        });
});
clearBtn.addEventListener("click", () => {
    messages = [];
    messagesDiv.innerHTML = "";
    status.textContent = "All Messages Cleared";
});