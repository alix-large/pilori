import websites from "../data/websites.js";

const mainController = {
    home: function(req, res) {
        res.render('list', { 
            websites : websites.slice(0, 2), 
        });
    },

    notices: function(req, res) {
        res.send('test route/notices');
    },

    map:function(req, res) {
        res.send('test route/map');
    },

    contact:function(req, res) {
        res.send('test route/contact');
    }

};

export default mainController;