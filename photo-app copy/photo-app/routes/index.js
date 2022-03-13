//module.exports = function(req, res){
exports.index = function(req, res){
  //  getHomePage: (req, res) => {
        let query = "SELECT * FROM `POSTS` ORDER BY TIMESTAMP DESC"; // query database to get all the players

        // execute query
        db.query(query, (err, result) => {
            if (err) {
                res.redirect('/');
            }
            res.render('index.ejs', {
                title: "Welcome to photo-app | View posts"
                ,posts: result
            });
        });
  //  },
};
