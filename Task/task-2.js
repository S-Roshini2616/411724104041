function loadUsers() {

    document.getElementById("status").innerHTML = "Loading...";

    setTimeout(function () {

        fetch("https://jsonplaceholder.typicode.com/users")
        .then(function(response) {
            return response.json();
        })
        .then(function(users) {

            let data = "";

            for(let i = 0; i < users.length; i++) {

                data += "<div class='user'>" +
                        "<h3>" + users[i].name + "</h3>" +
                        "<p>Email: " + users[i].email + "</p>" +
                        "<p>Phone: " + users[i].phone + "</p>" +
                        "</div>";
            }

            document.getElementById("users").innerHTML = data;
            document.getElementById("status").innerHTML = "Loaded Successfully";
        });

    }, 2000);
}

document.getElementById("loadBtn").onclick = loadUsers;
