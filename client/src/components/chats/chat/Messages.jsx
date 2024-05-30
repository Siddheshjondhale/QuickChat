import React, { useEffect, useState, useRef, useContext } from 'react';
import { newMessage, getMessages } from '../../../service/api';
import MessagesGet from './MessagesGet';
import styled from '@emotion/styled';
import { Box } from '@mui/material';
import Footer from './Footer';
import { AccountContext } from '../../../context/AccountProvider';

const Wrapper = styled(Box)`
  background-image: url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png');
  background-size: 50%;
`;

const Component = styled(Box)`
  height: 78vh;
  overflow-y: scroll;
`;

function Messages({ person, account, conversation}) {
  const [inputValue, setInputValue] = useState('');
  const {socket}=useContext(AccountContext)
  const [incomingMessage, setIncomingMessage] = useState(null);
  const [file, setFile] = useState();
  const [messages, setMessages] = useState([]);
  const [imageFile, setImageFile] = useState();
  const [newMessageFlag, setNewMessageFlag] = useState(false);
  const messageListRef = useRef(null);


 useEffect(() => {
        socket.current.on('getMessage', data => {
            setIncomingMessage({
                ...data,
                createdAt: Date.now()
            })
        })
    }, []);


  useEffect(() => {
    const getMessagesData = async () => {
      let messages = await getMessages(conversation?._id);
      setMessages(messages);
    };

    conversation?._id && getMessagesData();
  }, [conversation?._id, person?._id, newMessageFlag]);

  useEffect(() => {
    const element = messageListRef.current;
    if (element) {
      element.scrollTop = element.scrollHeight;
    }
  }, [messages, newMessageFlag]);



  useEffect(() => {
        incomingMessage && conversation?.members?.includes(incomingMessage.senderId) && 
            setMessages((prev) => [...prev, incomingMessage]);
        
    }, [incomingMessage, conversation]);




  const sendText = async (e) => {
    let code = e.keyCode || e.which;

    if (code === 13 && inputValue.trim() !== '') {
      let message = {};

      if (!file) {
        message = {
          senderId: account.sub,
          recieveId: person.sub,
          conversationId: conversation._id,
          type: 'text',
          text: inputValue,
        };
      } else {
        message = {
          senderId: account.sub,
          recieveId: person.sub,
          conversationId: conversation._id,
          type: 'file',
          text: imageFile,
        };
      }
    socket.current.emit('sendMessage', message);
      await newMessage(message);

      setInputValue('');
      setFile();
      setImageFile();
      setNewMessageFlag((prev) => !prev);
    }
  };

  return (
    <Wrapper>
      <Component ref={messageListRef}>
        {messages &&
          messages.map((message) => (
            <MessagesGet key={message._id} message={message} />
          ))}
      </Component>
      <Footer
        sendText={sendText}
        setImageFile={setImageFile}
        file={file}
        setFile={setFile}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
    </Wrapper>
  );
}

export default Messages;
