var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var nextPizzaId = 1;
var menu = [
    { name: 'a', price: 8, id: nextPizzaId++ },
    { name: 'b', price: 2, id: nextPizzaId++ },
    { name: 'c', price: 13, id: nextPizzaId++ },
    { name: 'd', price: 90, id: nextPizzaId++ },
];
var cashInRegister = 100;
var nextOrderId = 0;
var orderQueue = [];
var addNewPizza = function (pizzaObj) {
    var pizza = __assign(__assign({}, pizzaObj), { id: nextPizzaId++ });
    menu.push(pizza);
    return pizza;
};
// const addToArray = <T>(array : T[], item : T) : T[]=> {
//     array.push(item);
//     return array;
// }
// addToArray<Pizza>(menu, {id: nextPizzaId++, name: 'x', price: 12});
// addToArray<Order>(orderQueue, {id: nextPizzaId++, pizza: menu[2], status: 'completed'});
var placeOrder = function (pizzaName) {
    var pizza = menu.find(function (pizzaObj) {
        return pizzaObj.name === pizzaName;
    });
    if (!pizza) {
        console.error('pizza does not exist in the menu');
        return;
    }
    cashInRegister += pizza.price;
    nextOrderId++;
    var order = { pizza: pizza, status: 'ordered', id: nextOrderId };
    orderQueue.push(order);
    return order;
};
var completeOrder = function (orderId) {
    var order = orderQueue.find((function (orderedPizza) { return orderedPizza.id === orderId; }));
    if (!order) {
        console.error("Can't find order with this id.");
        return;
    }
    order.status = 'completed';
    return order;
};
var getPizzaDetail = function (identifier) {
    if (typeof identifier === 'number') {
        return menu.find(function (pizza) {
            return pizza.id === identifier;
        });
    }
    else if (typeof identifier === 'string') {
        return menu.find(function (pizza) {
            return pizza.name.toLowerCase() === identifier.toLowerCase();
        });
    }
    else {
        throw new TypeError('Parameter `identifier` must be either a string or a number');
    }
};
addNewPizza({ name: 'e', price: 15 });
placeOrder('c');
completeOrder(1);
console.log(menu);
console.log(cashInRegister);
console.log(orderQueue);
// let myName : string = 'name';
// let numberOfWheels : number = 4;
// let isStudent : boolean = false;
// type Food = string;
// let pizza: Food = 'pizzzaaa';
// type Person = {
//     name: string,
//     age: number,
//     isStudent: boolean,
// }
// let person: Person = {
//     name: 'a',
//     age: 21,
//     isStudent: true,
// }
// let person2: Person = {
//     name: 'b',
//     age: 24,
//     isStudent: false,
// }
// type UserRole = 'guest' | 'user' | 'admin' | 'member';
// let userRole : UserRole = 'guest';
