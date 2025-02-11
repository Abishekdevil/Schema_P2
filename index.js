const express = require('express');
const { resolve } = require('path');
const app = express();
const port = 3010;


app.use(express.static('static'));
app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});


app.get('/test', (req, res) => {
  res.json({ message: 'Test route is working!', status: 200 });
});


app.use((req, res, next) => {
  res.status(404).json({ error: 'Not Found' });
});



if (require.main === module) {
  app.listen(port, () => {
    console.log(`Test server running at http://localhost:${port}`);
  });

}



module.exports = app;