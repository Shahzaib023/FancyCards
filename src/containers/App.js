import React,{Component} from 'react';
import Cardlist from '../components/Cardlist';
import SearchBox from'../components/SearchBox';
import Errorboundry from '../components/Errorboundry'
import Scroll from '../components/Scroll'
import './app.css'

class App extends Component {
 	constructor(){
 		super()
 		this.state={
 			robots:[],
 			searchfeild:''
 		}
 	}
 	componentDidMount(){
 		fetch('https://jsonplaceholder.typicode.com/users')
 		.then( response=> response.json())
 		.then( users=> {this.setState({robots: users})})
 	}

 	onsearchchange =(event)=>{
 		this.setState({searchfeild: event.target.value})
 		console.log( event.target.value)	
 	}

 	render(){
 		const{searchfeild, robots}=this.state;
 		const filterrobots= robots.filter( robot =>{
 			return robot.name.toLowerCase().includes(searchfeild.toLowerCase())
 		})
 		if(!robots.length)
 			return <h1> LOADING </h1>
 		else{	
 			return(
 		 		<div className='tc'>
 		 			<h1 className='f1'> ROBO  FRIENDS </h1>
 		 			<SearchBox searchchange={this.onsearchchange}/>
 		 			<Scroll>
 		 				<Errorboundry>
 		 					<Cardlist robots={filterrobots} />
 		 				</Errorboundry>
 		 			</Scroll>
 		 		</div>
 		 	);
 		} 
 	}
 }
export default App;