async function getResponse(){
    const text = document.getElementById("userInput").value;
    const output = document.getElementById("output");

    output.innerHTML = "Thinking....";

    const res = await fetch("http://127.0.0.1:8000/recommend",{
        method : "POST",
        headers:{
            "Content-Type" : "application/json"
        },

        body:JSON.stringify({text})
    });

    const data = await res.json();
    output.innerHTML = data.response;
}