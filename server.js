const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mailgun = require('mailgun-js')({ apiKey: '5db82617d0a35ae3d47c14979fb3bacf-324e0bb2-72625408', domain: 'sandboxf65c3eb4a8e3417aa6478081f630c760.mailgun.org' });

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cors());

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/ind.html");
});

app.post('/saksham', (req, res) => {
  const email = req.body.email;
  const data = {
    from: 'sakshamror023@gmail.com',
    to: email,
    subject: 'Deakin newsletter',
    text: 'Thanks for registering to our newsletter.',
  };

  mailgun.messages().send(data, (error, body) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Error sending email' });
    } else {
      console.log('Email sent to user:', body);
      res.status(200).json({ message: 'Email sent successfully' });
    }
  });
});

app.listen(5050, () => {
  console.log('Server is running at port 5050');
});
