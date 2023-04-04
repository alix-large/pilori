
const websitesController = {
    list: function(req, res) {
        res.send('test tomates');
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