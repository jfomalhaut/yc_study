import React from 'react';

const Page1 = ({ history }) => {
	
	const goToPage2 = () => {
		history.push('/page2');
	};

	return (
		<div>
			<h1>Page1 Component</h1>
			<button onClick={goToPage2}>page2이동</button>
		</div>
	);
};

export default Page1;