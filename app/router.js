import express from 'express';
import mainController from './controllers/mainController.js';
import sitesController from './controllers/sitesController.js';
import userController from './controllers/userController.js';
import authController from './controllers/authController.js';

const router = express.Router();

router.get('/', mainController.home); 
router.get('/mentions-legales', mainController.notices)
router.get('/plan', mainController.map)
router.get('/contact', mainController.contact)
router.get('/tomates', sitesController.tomatoes)
router.get('/tomates/denoncer', userController.denouncePage)
router.post('/tomates/denoncer', userController.denounceAction)
router.get('/tomates/:slug', sitesController.detail)

router.get('/connexion', userController.logginPage)
router.post('/connexion', userController.logginAction)

router.get('/inscription', userController.signupPage)
router.post('/inscription', userController.signupAction)

router.get('/deconnexion', userController.loggoutPage)
router.get('/profil', userController.profilPage)



export default router;