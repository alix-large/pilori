import express from 'express';
import slugify from 'slugify';
import * as dotenv from "dotenv";
import session from 'express-session';
import router from './app/router.js';
import addUserData from './app/middlewares/addUser.data.js';

import mainController from './app/controllers/mainController.js';

dotenv.config();

const port = process.env.PORT || 3000;
const app = express ();

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.urlencoded({ extended: true }));
app.use(express.static('./inte-pilori/public'));

app.use(session({
    resave: true, // la session est réenregistrée meme si elle n'est pas modifiée
    secret: process.env.APP_SECRET, // ajoute une part d'aléatoire dans la génération des id de session imprédictible
    saveUninitialized: true, // génère un id de session pour tous ceux qui n'en ont pas encore
}));

app.use(addUserData);
app.use(router);

// router.use(mainController.notFound);

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});