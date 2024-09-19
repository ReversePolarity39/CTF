const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

const users = {
    alice: 'password123', // username: password
    bob: 'qwerty'
};

app.get('/', (req, res) => {
    res.render('index', { isAdmin: req.cookies.isAdmin === 'true' });
});

app.get('/login', (req, res) => {
    res.render('login', { error: null });
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (users[username] && users[username] === password) {
        res.cookie('isAdmin', 'false', { httpOnly: true });
        res.redirect('/');
    } else {
        res.render('login', { error: 'Invalid credentials' });
    }
});

app.get('/admin', (req, res) => {
    if (req.cookies.isAdmin === 'true') {
        res.send('Congratulations! You found the admin flag: FLAG{admin_access}');
    } else {
        res.send('Access denied. You are not an admin.');
    }
});

// Robots.txt vulnerability
app.get('/robots.txt', (req, res) => {
    res.type('text/plain');
    res.send('User-agent: *\nDisallow: /flag\n');
});

app.get('/flag', (req, res) => {
    res.send('You found the flag: FLAG{robots_txt}');
});

// User token vulnerability
app.get('/profile', (req, res) => {
    const userToken = Buffer.from('user:regular_user', 'utf-8').toString('base64');
    res.send(`Here is your user token: ${userToken}`);
});

app.get('/validate-token', (req, res) => {
    const token = req.query.token;
    const decoded = Buffer.from(token, 'base64').toString('utf-8');
    if (decoded === 'user:regular_user') {
        res.send('Congratulations! You found the token flag: FLAG{user_token}');
    } else {
        res.send('Invalid token.');
    }
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});