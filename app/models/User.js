

class User {
    #email;
    #password;

    constructor(config) {
        this.email = config.email;
        this.password = config.password;
    }

    get email (){
        return this.#email;
    }
    get password (){
        return this.#password;
    }

    set email(value) {
        if (!validator.isEmail(value)) {
            throw new Error('Email invalide');
        }
        this.#email = value;
    }
    
    set password(value) {
        if (!value) {
            throw new Error('Mot de passe invalide');
        }
        this.#password = value;
    }
}

export default User;