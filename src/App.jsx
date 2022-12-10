import React from 'react';
import { render } from 'react-dom';
import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import { marked } from 'marked';
import './App.css';
const renderer = new marked.Renderer();
const defaultMkd = `
Heading 

=======

### List
**Life List**:
  1. Shoes
  2. Money
  3. Clothes

  Another List:
    * Monique
    * Lavantay
    * Jenne
 # test heading
 ## smaller heading
[links](youtube.com)
Inline ${`code`} has ${`back-ticks around`} it.
\`\`\`
Custom Code BLock
\`\`\`
This is inline code \`<div></div>\`
> Block Quotes
![React](https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Smiley.svg/1200px-Smiley.svg.png)
~~Strike through~~.
`

const mkdToHTML = function markdownToSanitizedHTML(markdown) {
  const html = marked(markdown, {  renderer:renderer  });
  return { __html: html };
};

const HTMLPreview = function HTMLPreviewUI({ markdown }) {
  return (
    <div id="preview"
      
      dangerouslySetInnerHTML={mkdToHTML(markdown)}>
    </div>
  );
};


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { markdown: defaultMkd };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ markdown: event.target.value });
  }

  render() {
    return (
      <div>

     
      
      <h1>Markdown Previewer</h1>
      <div className="App">
      
        <Form.Control id="editor"
          as="textarea"
          
          
          defaultValue={this.state.markdown}
          onInput={this.handleChange}
          on
        />
          <HTMLPreview markdown={this.state.markdown} />
    
            

       </div>     
       </div>
    );
  }
}

export default App
