exports.getPosts = (req, res, next) => {
    res.status(200).json({
        posts: [{
            title: 'First Post',
            content: 'this is my first post'
        }]
    });


};