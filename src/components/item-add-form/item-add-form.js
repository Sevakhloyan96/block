import React, { Component } from 'react';

import './item-add-from.css';

export default class ItemAddFrom extends Component{

	state ={
		label:''
	};
	onLabelChange = (e) =>{
		this.setState({
			label: e.target.value
		});
	};

	onSubmit = (e) =>{
		e.preventDefault()
		this.props.onItemAdded(this.state.label)
		this.setState({
			label:''
		});
	};

	render(){
		return(
			<form className="item-add-from d-flex" onSubmit={this.onSubmit}>
				<input type="text"className="form-control" 
					onChange={this.onLabelChange}
					placeholder='What needs to be done' 
					value={this.state.label} />

				<button className="btn btn-outline-secondary btn1" >	
					Add Item
				</button>
			</form>
		)
	}
}