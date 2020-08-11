import React from 'react';

const Scroll = (props) =>{
	return(
		<div style={{overflowY: 'Scroll', border:'0px', height: '500px' }}>
			{props.children}
		</div>
		)
}

export default Scroll; 