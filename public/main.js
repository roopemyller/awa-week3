
document.addEventListener("DOMContentLoaded", () => {
    const userForm = document.getElementById("userForm")
    const getUsersButton = document.getElementById("getUsers")
    const userList = document.getElementById("userList")

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

    getUsersButton.addEventListener("click", async () => {
        try {
            const response = await fetch('/users')
            if (response.status === 201) {
                const users = await response.json()
                userList.innerHTML = ''

                users.forEach(user => {
                    const li = document.createElement("li")
                    li.textContent = `${user.name} - ${user.email}`
                    userList.append(li)
                });
            }else {
                console.log("Failed to fetch users")
            }
        }catch (error) {
            console.error("Error: ", error.message)
        }
    })
})