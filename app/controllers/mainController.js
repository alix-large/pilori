import websites from "../data/websites.js";

const mainController = {
    home: function(req, res) {
        res.render('list', { 
            websites : websites.slice(0, 3), 
        });
        console.log(websites);
    },

    notices: function(req, res) {
        res.render('construction', {
            websites,
            title : 'Mentions légales',
        });
    },

    map:function(req, res) {
        res.render('construction', {
            websites,
            title : 'Plan du site',
        });
    },

    contact:function(req, res) {
        res.render('construction', {
            websites,
            title:'Contact',
        });
    }

};

export default mainController;