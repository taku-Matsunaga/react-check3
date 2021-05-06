import './App.css';
import Childarea from './ChildArea';
import { useState, useCallback } from 'react';
import { BrowserRouter, Link } from "react-router-dom"
import Router from './router/Router';

function App() {
  const [text, setText] = useState('');
  const [open, setOpen] = useState(false);

  const onChangeText = (e) => setText(e.target.value);

  const onClickOpen = (e) => setOpen(!open);

  const onClickClose = useCallback(() => setOpen(false), [setOpen]);


  return (
    <BrowserRouter>
      <div className="App">
        <input value={text} onChange={onChangeText} />
        <br />
        <br />
        <button onClick={onClickOpen}>表示</button>
        <Childarea open={open} onClickClose={onClickClose} />
      </div>

      <Link to="/">Home</Link>
      <Link to="/page1">Page1</Link>
      <Link to="/page2">Page2</Link>

      <Router />

    </BrowserRouter>
  );
}

export default App;
