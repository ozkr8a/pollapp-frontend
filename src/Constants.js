const prod = {
  url: {
   API_URL: 'https://dis-or-dat-poll-app.herokuapp.com/'
  }
 };

 const dev = {
  url: {
   API_URL: 'http://localhost:3000/'
  }
 };

 export const config = process.env.NODE_ENV === 'development' ? dev : prod;