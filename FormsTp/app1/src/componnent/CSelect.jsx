import React, { Component } from 'react'

export default class CSelect extends Component {
    constructor(props){
        super(props)
        this.state={selected:this.props.options[0]}
    }
    handleChange=(e)=>{
        this.setState({selected:e.target.value})
    }
    handleClick=()=>{
        alert(this.state.selected)
    }
    
    render() {
    return (
      <form>
        <select onChange={this.handleChange}>
            {
                this.props.options.map(
                    option=><option value={option}>{option}</option>
                )
            }
        </select>
        <button type="button" onClick={this.handleClick}>Afficher L'option</button>
      </form>
    )
  }
}
