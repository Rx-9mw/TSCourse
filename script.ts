type Pizza = {
    name: string,
    price: number,
    id: number,
}
type Order = {
    pizza: Pizza,
    status: 'ordered' | 'completed' | 'shipping' | 'delivered',
    id: number
}

let nextPizzaId = 1;

const menu : Pizza[]= [
    {name: 'a', price: 8, id: nextPizzaId++},
    {name: 'b', price: 2, id: nextPizzaId++},
    {name: 'c', price: 13, id: nextPizzaId++},
    {name: 'd', price: 90, id: nextPizzaId++},
];

let cashInRegister : number = 100;
let nextOrderId : number = 0;
const orderQueue : Order[] = [];

const addNewPizza = (pizzaObj : Omit<Pizza, 'id'>) : Pizza => {
    const pizza : Pizza = {
        ...pizzaObj,
        id: nextPizzaId++,
    }
    menu.push(pizza);
    return pizza;
}


// const addToArray = <T>(array : T[], item : T) : T[]=> {
//     array.push(item);
//     return array;
// }

// addToArray<Pizza>(menu, {id: nextPizzaId++, name: 'x', price: 12});
// addToArray<Order>(orderQueue, {id: nextPizzaId++, pizza: menu[2], status: 'completed'});


const placeOrder = (pizzaName : string) : Order | undefined=> {
    const pizza = menu.find((pizzaObj) => {
        return pizzaObj.name === pizzaName;
    })
    if (!pizza) {
        console.error('pizza does not exist in the menu');
        return;
    }
    cashInRegister += pizza.price;
    nextOrderId++;
    const order : Order = {pizza: pizza, status: 'ordered', id: nextOrderId};
    orderQueue.push(order);
    return order;
}

const completeOrder = (orderId : number) : Order | undefined => {
    const order = orderQueue.find((orderedPizza => orderedPizza.id === orderId));
    if (!order) {
        console.error("Can't find order with this id.")
        return;
    }
    order.status = 'completed';
    return order;
}

const getPizzaDetail = (identifier : string | number) : Pizza | undefined => {
    if(typeof identifier === 'number'){
        return menu.find((pizza) => {
            return pizza.id === identifier;
        })
    } else if( typeof identifier === 'string'){
        return menu.find((pizza) => {
            return pizza.name.toLowerCase() === identifier.toLowerCase();
        })
    } else {
        throw new TypeError('Parameter `identifier` must be either a string or a number');
    }
}

addNewPizza({name: 'e', price: 15});

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
