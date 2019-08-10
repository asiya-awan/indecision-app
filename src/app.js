import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));


// class OldSyntax {
//     constructor() {
//         this.name = 'Asia';
//     }

//      getName() {   
//         return this.name;        
//     }
// }
// const oldSyntax = new OldSyntax();
// console.log(oldSyntax);
// console.log(oldSyntax.getName());
// const oldName = oldSyntax.getName;
// //console.log('oldSyntax func in new var:', oldName());

// class NewSyntax {
//     name = 'NEw ASIA';

//     getName = () => {
//         return this.name;
//     }
// }

// const newSyntax = new NewSyntax();
// console.log(newSyntax);
// console.log(newSyntax.getName());
// const newName = newSyntax.getName;
// console.log('NewSyntax func in new var:',newName());