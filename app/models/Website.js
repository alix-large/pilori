import validator from "validator";

class WebSite {
    #title;
    #description;
    #address;
    #device;
    #level;
    // dans le constructor on construit l'instance
    // on assigne nos propriétés indirectement en appelant les setter
        constructor(title, description, address, device, level) {
            this.title= title;
            this.description= description;
            this.address= address;
            this.device = device;
            this.level = level;
        }
    // tests de validation des données
    set title(value) {
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
        this.#device = value;
    }

    set level(value) {
        this.#level = value;
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
}

export default WebSite;
