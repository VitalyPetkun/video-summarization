module.exports = {
  lifecycles: {
    async afterCreate(result, data) {
      await sendRequestToYourServer(result);
    },
    async afterUpdate(result, params, data) {
      await sendRequestToYourServer(result);
    }
  }
};

async function sendRequestToYourServer(fileData) {
  try {
    const response = await fetch('http://192.168.1.115:3000/rest/signin', {
      method: 'POST',
      body: JSON.stringify(fileData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const responseData = await response.json();
    console.log('Response from server:', responseData);
  } catch (error) {
    console.error('Error sending request to server:', error);
  }
}
