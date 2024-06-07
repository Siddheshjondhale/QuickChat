import { Server } from "socket.io";

const io=new Server(9000,{
    cors:{
        origin:'https://messaging-app-latest-jy49.vercel.app/'
    }
})

let users=[]
const addUser = (userData, socketId) => {
    !users.some(user => user.sub === userData.sub) && users.push({ ...userData, socketId });
}


const getUser = (userId) => {
    console.log(users,"in get users")
    return users.find(user => user.sub === userId);
}
const removeUser = (socketId) => {
    users = users.filter(user => user.socketId !== socketId);
};

io.on('connection',(socket)=>{
    console.log("connection established")


socket.on("addUsers",userData=>{
    console.log("Adding user ",userData)
    addUser(userData,socket.id)
    io.emit('getUsers',users)
})

    socket.on('sendMessage', (data) => {
        console.log(data.recieveId)
        const usersss = getUser(data.recieveId);
        console.log(usersss)
        io.to(usersss.socketId).emit('getMessage', data)
    })


 socket.on('disconnect', () => {
        console.log("User disconnected");
        removeUser(socket.id);
        io.emit('getUsers', users); // Update all clients with the new list of users
    });

})