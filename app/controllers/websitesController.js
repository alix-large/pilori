import websites from "../data/websites.js";

console.log(websites);

const websitesController = {
    all: function(req, res) {

        if (req.query.search) {
            const filteredWebsites = websites.filter(element => element.title.toLowerCase().includes(req.query.search.toLowerCase()));
            console.log(req.query.search, filteredWebsites);
            res.render('listing', {
                websites : filteredWebsites,
                title : 'Résultats',
            });
            console.log(filteredWebsites);
        }
        else {
            res.render('listing', {
                websites,
                title : 'Tous les sites',
            });
        }
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