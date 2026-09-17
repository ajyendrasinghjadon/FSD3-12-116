//  we use in memory database
let users = [
    {
        id: 1, 
        name: "Amit Sharma", 
        mob: "684684xxxx", 
        email: "amit.example@gmail.com"
    },
    {
        id: 2, 
        name: "Shiva Yadav", 
        mob: "954684xxxx", 
        email: "shiva.example@gmail.com"}
];

let nextId = 3;

export const getUsers = () => users;

export const addUser = (user) => {
    user.id = nextId++;
    users.push(user);
    return user;
}