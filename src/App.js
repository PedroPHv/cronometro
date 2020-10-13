import React from 'react';
import Contador from './Contador'
import Botao from './Botao'
import LabelRelogio from './LabelRelogio'
import './App.css'



class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      msegundos:0,
      segundos: 0,
      minutos: 0,
      horas: 0,
      stop: false,
      nameStop: "Stop",
      name: "Cronômetro ", 
      parcial: ""
    };
  }
   zerarCronometro() {
      this.state.horas = 0
      this.state.minutos = 0
      this.state.segundos = -1
      this.state.msegundos = 0
      this.state.parcial = ""
   }
  
  parcial(){
    let p = this.state.horas+ this.state.minutos+ ":"+ this.state.segundos + ":" +this.state.msegundos + "\n\n"
    this.state.parcial = this.state.parcial + p
  }
  
  
  pararTempo(){
    this.setState({ 
        stop: !this.state.stop 
      })
    if (this.state.stop)
      this.state.nameStop = "Stop"
    else
      this.state.nameStop = "Start"
  }
  incrementarSegundos (state) {
    this.setState(() => { 
      return {segundos: state.segundos +1}
    })
  };
  incrementarMsegundos (state) {
    this.setState(() => { 
      return {msegundos: state.msegundos +1}
    })
  };
  
  incrementar () {
    if (this.state.stop === false){
      this.setState(
        
         function (state, props) {
         
         
          if (state.msegundos >= 99){
            this.zerarMsegundos();
            this.incrementarSegundos(state);
          }
          if (state.segundos >= 60){
            this.zerar();
            this.incrementarMinuto(state);
            
          } if (state.minutos >= 60){
            this.zerarMinutos();
            this.incrementarHoras(state);
            
          }    
          return({ msegundos: state.msegundos +1})
         })
    }
  }
  
  incrementarMinuto (state) {
    this.setState(() => { 
      return {minutos: state.minutos +1}
    })
  };
  incrementarHoras (state) {
    this.setState(() => { 
      return {horas: state.horas +1}
    })
  };
  zerar () {
    this.setState({ 
      segundos: 0, 
      msegundos: 0 
    })
  }
  zerarMsegundos () {
    this.setState({ 
      msegundos: 0 
    })
  }
  zerarMinutos () {
    this.setState({ 
      segundos: 0 ,
      minutos: 0 ,
      msegunods: 0
    })
  }

  componentDidMount(){
    this.timer = setInterval(
      () => this.incrementar(), 10)
  }
  

  render(){

    return (
      <div className="main-section">
       <div className="clock-holder">
            <div className="stopwatch">
       <Contador horas={this.state.horas} minutos={this.state.minutos} segundos={this.state.segundos} msegundos={this.state.msegundos}/>
        <LabelRelogio name={this.state.name} />
        <Botao onClick={() => this.zerarCronometro()} label={"Zerar"} />
        <Botao onClick={() => this.pararTempo()} label={this.state.nameStop} />
        <Botao onClick={() => this.parcial()} label={"Parcial"} />
        <LabelRelogio name={this.state.parcial} />
        
            </div>
       </div>
      </div>
    );
}
}
 export default App