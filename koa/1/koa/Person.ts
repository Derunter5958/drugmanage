

// 接口的定义：是定义本地ts之间的【属性】和【方法】的接口
interface PersonModuleInterface{
     id:number,
     name:string
}

interface PersonModuleAddInterface{
    _id:number,
    getId:()=>{}
}

class PersonModule{
    public name:string = '';
    public  id:number = 1; 
    constructor(name:string,id:number){
       this.name = name;
       this.id = id;
    }
    public playModule():string{
       return this.name;
    }
    public setplayModule(name:string){
       this.name = name; 
    }
}

// 有点讲究： 
// 在ts里面：  导出和以前js有点不太一样

// exports 在js中应用的到出
// exports.PersonModule = PersonModule;

class PersonModuleAdd extends PersonModule implements PersonModuleInterface,PersonModuleAddInterface{
    public _id:number = 1;
    constructor(name:string,id:number,_id:number){
        super(name,id);
        this._id = _id;
    }
    getId(){
        return this._id;
    }
    setId(_id:number){
        this._id = _id;
    }
}

export {PersonModuleAdd}