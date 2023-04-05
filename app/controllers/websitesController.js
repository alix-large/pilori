import websites from "../data/websites.js";

const websitesController = {
    all: function(req, res) {
        res.render('listing', {
            websites,
            title : 'Tous les sites'
        });
    },

    //fiaire un eroute paramétrée
    detail: function(req,res, next) {
        res.send('test detail');
    },

    denouncePage: function(req, res) {
        res.send('test page denonciation');
    },

    denounceAction: function(req, res) {
        res.send('test action denonciation');
    },
}

export default websitesController;