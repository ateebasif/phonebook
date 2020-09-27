const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors');

// TODO: FIXME: Enable Cors only for dev
app.use(cors());
// middleware
app.use(express.json());
app.use(express.urlencoded());

let contactList = [
  {
    _id: new Date().getTime(),
    name: 'Ateeb',
    address: '165',
    bio: 'something',
    phoneNumber: '12345',
    profilePicture: 'hehwijh',
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
  console.log('REQ', req);
  console.log('Req Body', req.body);
  setTimeout(() => {
    res.send(newContact);
  }, 2000);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
