import React,{Component,Fragment} from 'react';

class TodoList extends Component{
	constructor(props){
		super(props);
		this.state={
			inputValue:'sss',
			list:[]
		}
		this.handleChange=this.handleChange.bind(this);
	}

	handleChange(e){
		console.log('e=',this);
		this.setState({
			inputValue:e.target.value
		})
	}
	render (){


		return (
			<fragment>
				<input value={this.state.inputValue} onChange={this.handleChange}></input>
				<button>submit</button>
				<ul>

				</ul>
			</fragment>
		)
	}
}

export default TodoList;