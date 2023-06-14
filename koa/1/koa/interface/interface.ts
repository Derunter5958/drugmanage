
// ts面向对象中：  interface接口

// 定义属性和方法的

// 在Ts面向对象中导出接口的方式：export

// 用户功能定义
export interface UserListInterface<type,typeAdd>{  
    id:type | typeAdd,  
    UserListMethod:() => void;  // 定义了一个方法:UserListMethod
    SigleUserListMethod:(_id?:typeAdd)=>void;  //  ?: 可以有_id  也可以没有_id
}  

// 新闻功能定义
export interface NewsListInterface{
    NewsListMethod:() => void;  
    AddNewsListMethod:() => void;
}

// 地图功能定义
export interface MapsListInterface{
    id:number,
    MapsListMethod:()=>void;
    SigleMapsListMethod:()=>void;
}


