
const singUpBody = {
    "email": "ahmad@gmail.com",
    "username": "ah",
    "fullName": "Ahmad Hosseini",
    "password": "qwer1234!!!!"
};

async function singUp(body) {
    const response = await fetch(
        'http://localhost:3000/auth/register', // Added 'http://' to the URL
        {
            method: "POST",
            headers: { "Content-Type": "application/json" }, // Added headers for JSON content
            body: JSON.stringify(body)
        }
    ); // Added missing closing parenthesis
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data); // Added missing semicolon
}

singUp(singUpBody).catch(console.error);
