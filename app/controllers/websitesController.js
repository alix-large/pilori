import websites from "../data/websites.js";
import Website from "../models/Website.js";

console.log(websites);

const websitesController = {
    all: function(req, res) {
            if (req.query.search) {
                const filteredWebsites = websites.filter(element => element.title.toLowerCase().includes(req.query.search.toLowerCase()));
                // console.log(req.query.search, filteredWebsites);
                res.render('listing', {
                    websites : filteredWebsites,
                    title : 'Résultats',
                });
            }       
            else {
            res.render('listing', {
                websites,
                title : 'Tous les sites',
            })
        }
    }, 
    
    detail: function(req,res, next) {
        const askedSlug = req.params.slug;
        const foundWebsite = websites.find(element => element.slug === askedSlug);

        if (foundWebsite) {

                    res.render('detail', {foundWebsite});
        }
        else {
            next();
        }
    },

    denouncePage: function(req, res) {
        res.render('form');
    },

    denounceAction: function(req, res) {
        try{        
            const website = new Website(req.body);
            websites.push(website);
            console.log(website);
            res.redirect('/tomates/' + website.slug)
        } 
        catch (error){
            res.render('form', {message: error.message});
        }
    }
};

export default websitesController;