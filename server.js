const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const mockData = [
    {name:'Mark'},
    {name:'Jill'}
]

app.get('/users',function(req, res){
    res.json({
        success: true,
        message: 'successfully got users. Nice!',
        users: mockData
    })
})

app.get('/users/:id',function(req, res) {
    console.log(req.params.id)
    res.json({
        success: true,
        message: 'got one user.',
        user: req.params.id
    })
})

app.post('/login', function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    const mockUsername = "billyTheKid";
    const mockPassword = "superSecret";

    if (username===mockUsername && password===mockPassword) {
        res.json({
            success: true,
            message: 'username and password match!',
            token: 'encrypted token goes here'
        })
    } else {
        res.json({
            success: false,
            message: 'username and password do not match.'
        })
    }
})

app.get('/profile', function(req, res){
    const mockProfile = [
        {
            name: 'Ahmad Dawud',
            profession: 'Developer',
            stack: 'Backend'
        }
    ]

    res.json({
        success: true,
        message: 'My Profile: ',
        profile: mockProfile
    })

})

app.listen(8000,function(){
    console.log("server is running");
})