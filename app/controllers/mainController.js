
const mainController = {
    home: function(req, res) {
        res.send('test route');
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