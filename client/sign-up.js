
const singUpBody = {
    "email": "ahmad@gmail.com",
    "username": "ah",
    "fullName": "Ahmad Hosseini",
    "password": "qwer1234!!!!"
};

async function singUp(body) {
    const response = await fetch(
        'localhost:3000/auth/register',
        {
            method: "POST",
            body: JSON.stringify(body)
        }
    );
    const data = await response.json();
    console.log(data);
}

singUp(singUpBody).catch(console.error);
