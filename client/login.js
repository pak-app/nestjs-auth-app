const axios = require('axios');

async function loginAndTest() {
    try {
        // Step 1: Send POST request to /auth/login to get the JWT token
        const loginResponse = await axios.post('http://localhost:3000/auth/login', {
            username: 'your-username', // Replace with actual username
            password: 'your-password', // Replace with actual password
        });

        const token = loginResponse.data.token; // Assuming the token is in the `token` field
        console.log('JWT Token:', token);

        // Step 2: Use the token to send a request to /auth/test
        const testResponse = await axios.get('http://localhost:3000/auth/test', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        console.log('Response from /auth/test:', testResponse.data);
    } catch (error) {
        console.error('Error:', error.response ? error.response.data : error.message);
    }
}

loginAndTest().catch(console.error);