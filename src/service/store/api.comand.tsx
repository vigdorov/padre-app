import axios  from 'axios';


export const URL ='https://api.jsonbin.io/b/5da03e919d0fa7426b564159';


export const SC: string = '$2b$10$NFsn.O8it.7qB2gqdkR5K.CYGy.sO9HPSlL5Ylm9Us1VrrmKimxQy';

const oldURL = 'https://api.jsonbin.io/b/5da03e919d0fa7426b564159';



export const getChef = ():any => {
   return axios.get(URL, {
        headers: {'secret-key': SC}
    })
        .then((response: any) => response.data);
};

export const addNewChef = (dataItem: any):any => {

let newData = JSON.stringify(dataItem);
    return axios({
        url: URL,
        method: "PUT",
        headers: {
            'secret-key': SC,
            'Content-Type': 'application/json'
        },
        data: newData,
    })
        .then((response) => console.log(response));
};

export const getUser = ():any => {
        axios.get(``)
        .then((response) => console.log('response', response.data));
};

export const editChef = ():any => {
  return axios.put(URL, {

  }, {})
};