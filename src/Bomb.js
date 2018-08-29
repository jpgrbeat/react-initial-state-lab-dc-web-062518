import React, {Component} from 'react'

export default class Bomb extends Component{
  constructor(props){
    super(props)
    this.state={
      secondsLeft:this.props.initialCount
    }
  }
  render(){
    let str;
  {this.state.secondsLeft === 0 ? str = 'Boom!': str =`${this.state.secondsLeft} seconds left before I go boom!`}
  return str;
  }

}
