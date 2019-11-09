import axios  from 'axios';

//URL списка шефов
export const URLC ='https://api.jsonbin.io/b/5da9e92a120fad237297de9b';
//URL списка еды
export const URLF ='https://api.jsonbin.io/b/5da9debaaa62eb2c1ae63d27';
//URL того что творится в корзине
export const URLB ='https://api.jsonbin.io/b/5dc29cf6c9b247772abb456c';
//URL списка заказов
export const URLO ='https://api.jsonbin.io/b/5dad583d216dda6932c49f54';



export const SC: string = '$2b$10$NFsn.O8it.7qB2gqdkR5K.CYGy.sO9HPSlL5Ylm9Us1VrrmKimxQy';

export const getChef = ():any => {
   return axios.get(`${URLC}/latest`, {
       headers: {'secret-key': SC}
    })
        .then((response: any) => {
            return response.data.chef;
        });
};
export const getBasket = ():any => {
    return axios.get(`${URLB}/latest`, {
        headers: {'secret-key': SC}
    })
        .then((response: any) => {
            return response.data.basket;
        });
};
export const getFood = ():any => {
    return axios.get(`${URLF}/latest`, {
        headers: {'secret-key': SC}
    })
        .then((response: any) => response.data.food);
};

export const getOrders = ():any => {
    return axios.get(`${URLO}/latest`, {
        headers: {'secret-key': SC}
    })
        .then((response: any) => response.data.orders);
};

export const addNewOrder = (orders: any):any => {
    return axios.put(URLO,{orders}, {
        headers: {
            'secret-key': SC,
            'Content-Type': 'application/json'
        },
    })
};
export const addNewBasket = (basket: any):any => {
    return axios.put(URLB,{basket}, {
        headers: {
            'secret-key': SC,
            'Content-Type': 'application/json'
        },
    })
        .then((response) => console.log(response));
};

export const addNewChef = (chef: any):any => {
       return axios.put(URLC,{chef}, {
        headers: {
            'secret-key': SC,
            'Content-Type': 'application/json'
        },
    })
        .then((response) => console.log(response));
};
export const addNewFood = (food: any):any => {
    return axios.put(URLF,{food}, {
        headers: {
            'secret-key': SC,
            'Content-Type': 'application/json'
        },
    })
        .then((response) => console.log(response));
};

export const getUser = ():any => {
        axios.get(``)
        .then((response) => console.log('response', response.data));
};

export const editChef = ():any => {
  return axios.put(URLC, {

  }, {})
};