import React, { useEffect, useState } from 'react';

const Counter = () => {
	const [count, setCount] = useState(0);

	const increasement = () => {
		setCount(count + 1);
	};

	const decreasement = () => {
		setCount(count - 1);
	};

	const test = () => {
		console.log('test작동');
	}

	useEffect(() => {
		if (count % 5 === 0 && count !== 0) {
			alert('count는 5의 배수입니다');
		}
	}, [count]);

	useEffect(() => {
		console.log('Rendering');
		// setCount(100);
	}, []);

	return (
		<div>
			<h1>{count}</h1>
			<button onClick={decreasement}>감소</button>
			<button onClick={increasement}>증가</button>
			<button onClick={test}>TEST</button>
		</div>
	);
};

export default Counter;