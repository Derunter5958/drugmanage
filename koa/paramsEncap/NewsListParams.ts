
//*新闻的参数的封装

class NewsListParams {
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

export { NewsListParams }
