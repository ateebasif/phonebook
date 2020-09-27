const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors');

// TODO: FIXME: Enable Cors only for dev
if (process.env.NODE_ENV !== 'production') {
  console.log('here');
  app.use(cors());
}
// middleware
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('build'));

let contactList = [
  {
    _id: new Date().getTime(),
    name: 'Ateeb',
    address: '165',
    bio: 'something',
    phoneNumber: '12345',
    profilePicture: '',
  },
];

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/contact', (req, res) => {
  res.send(contactList);
});

app.post('/contact', (req, res) => {
  const newContact = { _id: new Date().getTime(), ...req.body };
  contactList = [...contactList, { ...newContact }];
  setTimeout(() => {
    res.send(newContact);
  }, 2000);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
