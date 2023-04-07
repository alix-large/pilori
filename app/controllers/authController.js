import validator from 'validator';
import bcrypt from  'bcrypt'
import User from '../models/User.js';

export const user = [];


const authController = {
    logginPage: function(req, res) {
        res.render('loggin');
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
