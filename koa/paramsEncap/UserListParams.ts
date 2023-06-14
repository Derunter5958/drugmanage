
//*用户的参数的封装

class UserListParams {
    public id:number = 1;
    constructor(id:number){
        this.id = id;
    }
    getId(){
        return this.id;
    }
    setId(_id:number){
        this.id = _id;
    }
}

export { UserListParams }
