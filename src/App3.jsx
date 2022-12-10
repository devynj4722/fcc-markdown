import { useState, useEffect, useRef } from 'react'
import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import './App.css'
import { marked } from 'marked';
function App() {
 const renderer = new marked.Renderer();


const defaultMkd = `
Heading 

=======

### List
Life List:
  1. Shoes
  2. Money
  3. Clothes

  Another List:
    * Monique
    * Lavantay
    * Jenne



`
 const [text, setText] = useState(defaultMkd)



useEffect(() => {
 
})
const mktohtml = (markdown) => {
  const html = marked(markdown, { renderer:renderer });
  return { __html: html };
}
 const Preview = ({markdown}) => {
  return (
    <div id="preview" dangerouslySetInnerHTML={mktohtml(markdown)}></div>
     

    
  );
};
 
      
   

 
  return (
    <div className="App">
    <Form.Control id="editor"
          as="textarea"
          
          value={text}
          defaultValue={defaultMkd}
          onInput={(e)=> {
            setText(e.target.value)
          }}
          on
        />
      <div class='preview'  autofocus>

    <Preview markdown={text} />
      </div>

      
    </div>
  )
}

export default App
