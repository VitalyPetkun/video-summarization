module.exports = {
  afterCreate(event) {
    console.log('AFTER CREATE>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>', event)
    sendRequestToYourServer(event);
  },
}

async function sendRequestToYourServer(fileData) {
  try {
    const response = await fetch('http://192.168.1.115:3000/rest/summarize', {
      method: 'POST',
      body: JSON.stringify(fileData),
      headers: {
        'Content-Type': 'application/json',
        'client': 'test'
      },
    });

    const responseData = await response.json();
    console.log('Response from server:', responseData);
  } catch (error) {
    console.error('Error sending request to server:', error);
  }
}
