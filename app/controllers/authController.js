const authController = {
    logginPage: function(req, res) {
        res.send('test page connexion');
    },

    logginAction: function(req, res) {
        res.send('test action connexion');
    },

    signupPage: function(req, res) {
        res.send('test page inscription');
    },

    signupAction: function(req, res) {
        res.send('test action inscription');
    },

    loggoutPage: function(req, res) {
        res.send('test page déconnexion');
    }
};

export default authController;
