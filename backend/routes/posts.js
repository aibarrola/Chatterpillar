const router = require('express').Router();
let Post = require('../models/post.model');

router.route('/').get((req, res) =>{
    Post.find()
    .then(posts => res.json(posts))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req,res)=>{
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const status = req.body.status;
    const newPost = new Post({firstname,lastname, status})
    
    newPost.save()
    .then(() => res.json('Post added!'))
    .catch(err => res.status(400).json('Error: ' +err));

});

module.exports =router;