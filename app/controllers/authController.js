import validator from 'validator';
import bcrypt from  'bcrypt'
import User from '../models/User.js';

export const users = [];


const authController = {
    //methode associée à la route connexion en get
    logginPage: function(req, res) {
        res.render('loggin');
    },
    //methode associée à la route connexion en post
    logginAction: function(req, res) {
        try {
        const foundUser = users.find(user => user.email === req.body.email);
        if (foundUser) {
            bcrypt.compare(req.body.password, foundUser.hash, function(err, result) {
                if (result) {
                    req.session.isLogged = true;
                    // on a fait le choix de ne stocker que l'email en session
                    // on sera à même de trouver les infos de l'utilisateur dans la liste à partir de ça
                    req.session.userEmail = foundUser.email; 
                    res.redirect('/profil');
                }
                else {
                    res.render('login', { alert: 'Mauvais couple identifiant/mot de passe' });
                }
            });
        }
        else {
            throw new Error('Mauvais couple identifiant/mot de passe');
        }
        } catch (error) {
            res.render('login', { alert: error.message });
        }
    },
    //methode associée à route /inscription en get, renvoie la vue register avec le formualire d'inscription
    signupPage: function(req, res) {         
        res.render('register');
    },
    //methode associée à la route '/inscription' en post. Renvoie différente réponses en fonction de la validation du mdp : redirection vers profil tout est ok ou redirection vers register (si le mdp n'est pas assez costauds)
    signupAction: function(req, res) {
        //on crée un hash
        bcrypt.hash(req.body.password, 10, (error, hash)=> {
            try {
                //on vérifie que le mot de passe est assez robuste
                const options = { minLength: 12, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1};
                if (!validator.isStrongPassword(req.body.password, options)) {
                    throw new Error('Le mot de passe doit comporter au moins 12 caractères, et au moins 1 majuscule, 1 minuscule, 1 chiffre et 1 caractère spécial');
                }
                // dès que j'ai validé le mot de passe je mémorise son hash
                req.body.hash = hash;
                // je crée un objet user
                const user = new User(req.body);
                //on le mémorise dans la liste users
                users.push(user)
                // Possibilité 1 : l'utilsateur doit se connecter 
                // res.redirect('/connexion');
                // Possibilité 2 : l'utilisateur est connecté dès son inscription
                // on le mémorise dans la session
                req.session.isLogged = true;
                req.session.userEmail = user.email;
                // on l'emmene sur son profil 
                res.redirect('/profil');
            } catch (error) {
                    res.render('register', {alert : error.message});
            }
        });
    },

    loggoutPage: function(req, res) {
    // pour se déconnecter il faut vider la session
    // méthode 1 :
    // req.session.isLogged = false;
    // req.session.userEmail = null;
    // méthode 2 :
    req.session.destroy();
    res.redirect('/');
    },
};

export default authController;
