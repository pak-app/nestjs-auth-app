const readline = require('readline');
const axios = require('axios');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ask(question) {
  return new Promise((resolve) => rl.question(question, resolve));
}

async function run() {
  try {
    const identifier = await ask('Enter your email or username: ');
    const password = await ask('Enter your password: ');

    console.log('\n🔐 Logging in...');

    // Step 1: Login
    const loginRes = await axios.post('http://localhost:3000/auth/login', {
      identifier,
      password,
    });

    const token = loginRes.data.access_token;
    console.log('✅ Login successful. Token received:\n', token);

    // Step 2: Test Auth
    console.log('\n🔎 Testing authorization...');
    const testRes = await axios.get('http://localhost:3000/auth/test', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log('✅ Authorization test result:');
    console.log(testRes.data);
  } catch (error) {
    if (error.response) {
      console.error('❌ Error:', error.response.data);
    } else {
      console.error('❌ Unexpected Error:', error.message);
    }
  } finally {
    rl.close();
  }
}

run();
