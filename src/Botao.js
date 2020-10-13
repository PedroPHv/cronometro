import React from 'react';
import './App.css';

const Botao = (props) => (
    <button className="stopwatch-btn stopwatch-btn-gre" onClick={props.onClick}>{props.label}</button>
  )
  
  export default Botao