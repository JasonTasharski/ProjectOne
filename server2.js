var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    request = require('request'),
    cors = require('cors'),
    User = require('./models/user'),
    env = process.env,
    Event = require('./models/event'),
    Report = require('./models/report');

var session = require('express-session');

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
// configure session
app.use(session({
  saveUninitialized: true,
  resave: true,
  secret: 'SomethingNotGuessable',
  cookie: { maxAge: 60000 }
}));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// custom middleware to manage our sessions
app.use('/', function (req, res, next) {
  // saves userId in session for logged-in user
  req.login = function (user) {
    req.session.userId = user.id;
  };
  // finds user currently logged in based on `session.userId`
  req.currentUser = function (callback) {
    User.findOne({_id: req.session.userId}, function (err, user) {
      req.user = user;
      callback(null, user);
    });
  };
  // destroy `session.userId` to log out user
  req.logout = function () {
    req.session.userId = null;
    req.user = null;
  };
  next();  // required for middleware
});

mongoose.connect(
  process.env.MONGOLAB_URI ||
  process.env.MONGOHQ_URL || 
  'mongodb://localhost/3WServer'); // identifies database; NEVER IN REQUEST; can be anything and still RESTful

// ROUTES //

// HOME
app.get('/', function (req, res) {  
  res.sendFile(__dirname + '/public/view/index.html');
});

// GET API
app.get('/api/events', function (req, res) {
  request('https://www.kimonolabs.com/api/7imxs5lg?kimbypage=1?apikey=' + env.MY_API_KEY, function (error, response, body) {
    res.json(body); // parse out of string before processing
  })
});
app.get('/api/reports', function (req, res) {
  Report.find(function (err, reports) {
    res.json(reports);
  });
});
app.get('/api/users', function (req, res) {
  request('https://www.kimonolabs.com/api/7imxs5lg?kimbypage=1?apikey=' + env.MY_API_KEY, function (error, response, body) {
    res.json(body); // parse out of string before processing
  })
});

// SCRAPE
app.get('/scrape', function (req, res) { // Manually get data, process; works by inputing url/scrape; later do it with a script, not a route, to make it run once a day
  var apiData;
  request('https://www.kimonolabs.com/api/7imxs5lg?kimbypage=1?apikey=' + env.MY_API_KEY, function (error, response, body) {
    // code to save into database, process ALL WITHIN THIS FUNCTION
    apiData = JSON.parse(body);
    var page = apiData.results[0];
    var newReport = new Report({
      dateFiled: page.collection1[0].dateLocation, // Note: same as...
      locationFiled: page.collection1[0].dateLocation, // ...this. Process dateLocation!
      title: page.collection1[0].title,
      newsSource: "The Hindu",
      sourceUrl: page.url,
      sampleText: page.collection2[0].text
    });
    newReport.redundant(newReport.sourceUrl);
  });
    //}
    // Report.find(function (err, reports) {
    //   res.json(reports);
    // });
});


// Show CREATE USER page
app.get('/user/new', function (req, res) {
  req.currentUser(function (err, user) {
    // redirect if current user
    if (user) {
      res.redirect('/profile');
    } else {
      res.sendFile(__dirname + '/public/view/newUser.html');
    }
  });
});

// CREATE USER
app.post('/user/new/send', function(req, res){ // the submit new user should send this request
  console.log("server received signup form data: ", req.body.user);
  var newUser = req.body.user;  // depending on how you set up your form, front-end
  User.createSecure(newUser, function (err, user) {
    // log user in automatically when created
    req.login(user); // needs a login function
    res.redirect('/profile'); 
  });
});

// Show LOGIN page
app.get('/user/login', function (req, res) {
  req.currentUser(function (err, user) {
    // redirect if current user
    if (user) {
      res.redirect('/profile');
    } else {
      res.sendFile(__dirname + '/public/view/login.html');
    }
  });
});

// LOGIN
app.post('/user/login/send', function(req,res){
  console.log("Login data received");
  var userData = {
    email: req.body.email,
    password: req.body.password
  };
  User.authenticate
})

// Show PROFILE page
app.get('/user/profile', function (req, res) {
  // finds user currently logged in
  req.currentUser(function (err, user) {
    if (user) {
      res.send('Welcome ' + user.email);
    // redirect if there is no current user
    } else {
      res.redirect('/login');
    }
  });
});

// logout route (destroys session)
app.get('/user/logout', function (req, res) {
  req.logout();
  res.redirect('/'); // redirects home
});

app.listen(process.env.PORT || 3000, function () {
  console.log('server started on localhost:3000');
});