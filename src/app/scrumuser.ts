export class Scrumuser {
    constructor(
        public fullname : string, 
        public email: string, 
        public password: string, 
        public type: string
    ){
        this.fullname =  fullname;
        this.email = email;
        this.password = password;
        this.type = type; 
    }
}
