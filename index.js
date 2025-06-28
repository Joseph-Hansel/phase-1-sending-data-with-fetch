// Add your code here

function submitData(name, email){
    return fetch("http://localhost:3000/users",{ 
        method : "POST",
        headers: {
            "Content-Type": 'application/json',
            "Accept":  'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    })
            .then(res => res.json())
            .then((data) => {
                let div = document.createElement("div")
                div.textContent = data.id;
                document.querySelector("body").appendChild(div);
            })
            .then(data => {
                console.log("DATA:", data)
            })
            .catch(function (error) {
                let div = document.createElement("div")
                div.textContent = error.message;
                document.querySelector("body").appendChild(div);
            });
    
};
submitData();