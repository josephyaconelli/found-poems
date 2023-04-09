import React, { useEffect, useState } from 'react'
import './App.css';
import { ConnectionManager } from './ConnectionManager';
import { socket } from './socket';


const App = () => {

  const [isConnected, setIsConnected] = useState(socket.isConnected);
  const [events, setEvents] = useState([])
  const [document, setDocument] = useState("a bunch of text like this".split(' '))

  useEffect(() => {
    socket.emit('chat message', document);
  }, [document])
  
  useEffect(() => {
    function onConnect() {
      setIsConnected(true)
    }

    function onDisconnect() {
      setIsConnected(false)
    }

    function onEvent(value) {
      setEvents(prev => [...prev, value])
    }

    socket.on('connect', onConnect)
    socket.on('disconnect', onDisconnect)
    socket.on('document', onEvent)

    return () => {
      socket.off('connect', onConnect)
      socket.off('disconnect', onDisconnect)
      socket.off('document', onEvent)
    }
  }, [])



  return (
    <div className="App">
      <div><span>Connetion Status: {isConnected ? 'connected' : 'disconnected'}</span></div>
      {document.map((word, i) => (<span onClick={() => setDocument(d => d.filter((_, idx) => i !== idx))}>{word}&nbsp;</span>))}
      <br/>
      <ConnectionManager/>
    </div>
  );
}

export default App;
