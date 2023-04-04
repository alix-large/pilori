import WebSite from "../models/Website.js";

const WebSites = [

    new WebSite('Oclock.io', 'Il y a un gros problème. Je constate de très gros soucis pour naviguer et c\'est impossible d\'utiliser correctement tous les boutons à disposition.','https://oclock.io/', 'Mobile',  'Bloquant'),
    new WebSite('NPM', '', 'https://www.npmjs.com/', '', ''),
    new WebSite('Google',  'Il y a un tout petit problème.', 'https://www.google.com/', 'Ordinateur', 'Casse tête'),
    new WebSite('Wikipédia', "C'est pas jojo", 'https://fr.wikipedia.org/', 'Mobile', 'Bloquant'),
]

export default WebSites;