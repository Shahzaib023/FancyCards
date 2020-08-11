import React from 'react';


const Card =(props)=>{
	return(
		<div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-6">
			<img alt="Robots" src={`https://robohash.org/${props.id}?200x200` }/>
			<div>
			<h2> {props.name}</h2>
			<p> {props.email}</p>
			</div>
		</div>
	)
}




// class Hello extends Component {
//	render(){
//		return(
//				<div className="f1 tc">
//					<h1> Hello world</h1>
//					<p> {this.props.greetings}</p>
//				</div>
//			)
//	}
//}
//const Hello =(props) =>{
//	return(
//				<div className="f1 tc">
//					<h1> Hello world</h1>
//					<p> {props.greetings}</p>
//				</div>
//			)
//}
//export default Hello;
export default Card;