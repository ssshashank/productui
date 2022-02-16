export default class UserModel{
    constructor(data){
        this.userId=data.userId;
        this.name=data.name;
        this.email=data.email;
        this.userName=data.userName;
        this.contact=data.contact;
        this.currentStatus=data.currentStatus;
        this.token=data.token;
    }
}
