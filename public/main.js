
document.addEventListener("DOMContentLoaded", () => {
    const userForm = document.getElementById("userForm")
    userForm.addEventListener("submit", async (e) => {
        e.preventDefault()
        let name = document.getElementById("name").value 
        let email = document.getElementById("email").value 

        try {
            const response = await fetch('/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email }),
            })
            const result = await response.json()
            alert(result.message)
        }catch(error){
            console.log("error: " + error.message)
        }
    })  
})