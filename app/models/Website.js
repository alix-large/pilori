import slugify from "slugify";
import validator from "validator";


class WebSite {
    #title;
    #description;
    #address;
    #device;
    #level;
    // dans le constructor on construit l'instance
    // on assigne nos propriétés indirectement en appelant les setter
        constructor(config) {
            this.title= config.title;
            this.description= config.description;
            this.address= config.address;
            this.device = config.device;
            this.level = config.level;
        }
    
    get title() {
        return this.#title;
    }

    get description() {
        return this.#description;
    }

    get address() {
        return this.#address;
    }

    get device() {
        return this.#device;
    }

    get level() {
        return this.#level;
    }

    get slug () {
        return slugify(this.title, {
            lower: true,
            strict: true,
          });
    }

    // tests de validation des données
    set title(value) {
        // console.log(value);
        if (typeof value !== 'string' || value.length === 0) {
            throw new Error('Le nom doit être une chaîne de caractère non vide');
        }
        this.#title = value;
    }

    set description(value) {
        this.#description = value;
    }

    set address(value) {
        if (value.length === 0 || !validator.isURL(value) ) {
            throw new Error('Adresse invalide : l\'adresse doit être une adresse de site internet. Exemple :https://nomdedomaine.com');
        }
        this.#address = value;
    }

    set device(value) {
        const allowedValues = ['Mobile', 'Ordinateur', 'Lecteur d\'écran'];
        if (typeof value !== 'undefined' && !allowedValues.includes(value)) {
            throw new Error(`3 valeurs autorisées : ${allowedValues.join(', ')}`);
        }
        this.#device = value;
    }

    set level(value) {
        const allowedValues = ['Bloquant', 'Gênant', 'Casse-tête'];
        if (typeof value !== 'undefined' && !allowedValues.includes(value)) {
          throw new Error(`3 valeurs autorisées : ${allowedValues.join(', ')}`);
    }
    this.#level = value;
    }
}

export default WebSite;
