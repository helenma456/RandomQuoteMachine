import QuoteBox from '../src/Components/Quote-box'
import './index.css';
import { useState, useEffect } from 'react';

function App() {

  const [color, setColor] = useState()
  const [text, setText] = useState('')
  const [author, setAuthor] = useState('')

  const colors = {
    color : ['#16a085','#27ae60','#2c3e50','#f39c12','#e74c3c','#9b59b6','#FB6964','#342224','#472E32','#BDBB99','#77B1A9','#73A857']
  };

  const changeColor = () => {
    setColor(colors.color[Math.ceil(Math.random()*11)]);
    fetchQuote()
  }

  const fetchQuote = (() => {
    const random = Math.ceil(Math.random()*102)
    fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
      .then((response) => response.json())
        .then(json => {
          setText(json.quotes[random].quote)
          setAuthor(json.quotes[random].author)
        })
  })

  useEffect(() => {
    const random = Math.ceil(Math.random()*102)
    fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
      .then((response) => response.json())
      .then(json => {
      setText(json.quotes[random].quote)
      setAuthor(json.quotes[random].author)
    })
  }, [])

  return (
    <div className="App transition" style={{backgroundColor:color}}>
      <QuoteBox
        color={color}
        changeColor={changeColor}
        text={text}
        author={author}
      /> 
    </div>
  );
}

export default App;
