import React from 'react';

// function copyColor(e) {
// 	console.log(e);
// }

export default function Colors({ hex }) {
	return (
		<div style={{ backgroundColor: hex }} className='color'>
			<div className='hex-value'>{hex}</div>
		</div>
	);
}
