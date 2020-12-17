// src/App.jsx

import React from 'react';

import Header from "./Header";
import Footer from './Footer';
import Note from "./Note";

function App(){
    return (
     <div>
        <Header></Header>
            <Note/>
        <Footer/>
       
     </div>
    )
}


export default App;
