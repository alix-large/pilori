import websites from "../data/websites.js";

const mainController = {
    home: function(req, res) {
        res.render('list', { 
            websites : websites.slice(0, 3), 
        });
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
    },

    notFound:function(req, res) {
        res.status(404).render('error', {
            message: 'La page demandée n\'a pas été trouvée.',
        });
    }
};

export default mainController;