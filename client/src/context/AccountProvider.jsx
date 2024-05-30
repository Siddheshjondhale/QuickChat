    import { createContext, useEffect, useRef, useState } from "react"

    import {io} from 'socket.io-client'

    export const AccountContext=createContext(null);


    const AccountProvider =({children})=>{


        const[account,setAccount] = useState(null);
        const[person,setPerson] = useState({});
        const[active,setActive]=useState([])
        const socket=useRef()
        const [newMessageFlag, setNewMessageFlag]=useState(false)

        useEffect(()=>{

            socket.current = io('https://messagingappsocket.onrender.com');


            // socket.current = io('https://messagingappsocket.onrender.com');
            // socket.current=io('ws://localhost:9000')
        }, [])
        return(

            <AccountContext.Provider value={
                
                {account,setAccount,
                person, setPerson,socket,active,setActive,newMessageFlag,setNewMessageFlag
                }
               
            
            }
                
                
                >

            {children}

            </AccountContext.Provider>


    
        )

    }
    export default AccountProvider;