import React, {useEffect, useRef, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Chat from "./Components/Chat/Chat";
import SearchGroup from "./Components/SearchGroup/SearchGroup";
import SearchResults from "./Components/SearchResults/SearchResults";
import PostService from "./API/PostService";
import Fuse from "fuse.js";

function App() {
    const options = {
        keys: ['text'],
        threshold: 0.35
    };
    const [searchTerm,setSearchTerm] = useState('');
    const [filteredMessages,setFilteredMessages] = useState<any>([]);
    const [messages,setMessages] = useState<any>([]);
    const [fuse,setFuse] = useState<Fuse<any> | null>(null);

    useEffect(() => {
        if (messages.length > 0) {
            setFuse(new Fuse(messages, options));
        }
    }, [messages]);
    useEffect(() => {
        PostService.getAll().then((response)=>{
            setMessages(response.data);
        })
    }, []);
    useEffect(() => {
        if (fuse && searchTerm !== '') {
            const result = fuse.search(searchTerm);
            const messagesFound = result.map((item: any) => item.item);
            setFilteredMessages(messagesFound);
        } else {
            setFilteredMessages([]);
        }
    }, [searchTerm]);
  return (
      <div className="flex flex-row jc-space-between">
        <Chat messages={messages}/>
          <div>
              <SearchGroup searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
              <SearchResults messages={filteredMessages}/>
          </div>
      </div>
  );
}

export default App;
