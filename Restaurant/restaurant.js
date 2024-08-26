const FoodCook = new Map([["Виктор","Пицца"],["Ольга","Суши"],["Дмитрий","Десерты"]]);
/*
console.log(FoodCook);
for (let cook of FoodCook) {
    console.log(cook);
}
*/
const Visitor = new Map([["Алексей",["пицца Пиперони","десерт Тирамису"]],["Мария", ["суши Калифорния","пицца Маргарита"]], ["Ирина",["десерт Чизкейк"]]]);
for (let visitor of Visitor) {
    console.log(visitor);
};

const Cooks = new Map([["Виктор",["пицца Маргарита", "пицца Пеперони"]], ["Ольга", ["суши Филадельфия", "суши Калифорния"]],["Дмитрий", ["десерт Тирамису", "десерт Чизкейк"]]]);

for (let cook of Cooks) {
    console.log(cook);
};
