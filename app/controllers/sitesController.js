
const sitesController = {
    tomatoes: function(req, res) {
        res.send('test tomates');
    },
    //fiaire un eroute paramétrée
    detail: function(req,res, next) {
        res.send('test detail');
    }
}

export default sitesController;