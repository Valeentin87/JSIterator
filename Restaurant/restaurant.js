const FoodCook = new Map([["Виктор","Пицца"],["Ольга","Суши"],["Дмитрий","Десерты"]]);

const Visitor = new Map([["Алексей",["пицца Пиперони","десерт Тирамису"]],["Мария", ["суши Калифорния","пицца Маргарита"]], ["Ирина",["десерт Чизкейк"]]]);


const Cooks = new Map([["Виктор",["пицца Маргарита", "пицца Пеперони"]], ["Ольга", ["суши Филадельфия", "суши Калифорния"]],["Дмитрий", ["десерт Тирамису", "десерт Чизкейк"]]]);

class Restaurant {
    foodCookList; // информация о приготавливаемых поварами блюдах
    visitorList; // информация о сделанных посетителями заказах
    
    constructor(foodCookList, visitorList){
        this.foodCookList = foodCookList;
        this.visitorList = visitorList;
    };
    /**
     * метод позволяет выдать информацию о том, какие блюда готовит сейчас тот или иной поварам
     */
    getInfoCookМакing(){
    }
    
    mapToArr() {
                const mapArrOrder = [...this.visitorList];
        const arrOrder = mapArrOrder.map(([key, value]) => ({key,value}));
        return arrOrder;
    }
    
    [Symbol.iterator]() {
        return new RestaurantIter(this);
    }
}

class RestaurantIter {
 _route; // доступ до итерируемого объекта
 _nextIdx; // указатель следующего значения

 constructor(route) {
  this._route = route;
  this._nextIdx = 0;
 }
 

 next() {
    const len = this._route.mapToArr().length;
    let data = this._route.mapToArr()[this._nextIdx];
    

  if (this._nextIdx === len) {
   return { done: true } // проверка на последний элемент
  }
  
  const result = {
   value: data,
   done: false
  }

  this._nextIdx++;

  return result;
 }
}


/**
* метод позволяет выдать информацию о том, какие блюда заказал клиент
*/
const getOrderInfo = (restEx,visitor) => {
    let res = '';
    let dataList = [];
    for (item of restEx) {
        dataList.push(item);
    }
    
    for (vis of dataList) {
        //console.log("!!!! ",vis);
        let key = vis.key;
        //console.log("%%% ", key)
        let value = vis.value;
        if (key === visitor) {
            res = `посетитель ${visitor} заказал: \n\t\t\t ${value}`;
            console.log(res);
            return res; 
        }
    }
    res = `посетитель ${visitor} ничего не заказал`;
    console.log(res);
    
    return res;
    };



const restaurant = new Restaurant(FoodCook, Visitor);
getOrderInfo(restaurant,'Иван');
