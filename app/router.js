import express from 'express';
import mainController from './controllers/mainController.js';
import websitesController from './controllers/websitesController.js';
import userController from './controllers/userController.js';
import authController from './controllers/authController.js';

const router = express.Router();

router.get('/', mainController.home); 
router.get('/mentions-legales', mainController.notices);
router.get('/plan', mainController.map);
router.get('/contact', mainController.contact);

router.get('/tomates', websitesController.all);
router.get('/tomates/denoncer', websitesController.denouncePage);
router.post('/tomates/denoncer', websitesController.denounceAction);
router.get('/tomates/:slug', websitesController.detail);

router.get('/connexion', authController.logginPage);
router.post('/connexion', authController.logginAction);
router.get('/inscription', authController.signupPage);
router.post('/inscription', authController.signupAction);
router.get('/deconnexion', authController.loggoutPage);

router.get('/profil', userController.profilPage);
//quelque soit le chemin demandé, si aucune route n'a matché, c'ets la methode Not Found qui ser aexecuté
router.use(mainController.notFound);


export default router;