
const userController = {
        denouncePage: function(req, res) {
            res.send('test page denonciation');
        },

        denounceAction: function(req, res) {
            res.send('test action denonciation');
        },

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
        },

        profilPage: function(req, res) {
            res.send('test page profil');
        },
};

export default userController;