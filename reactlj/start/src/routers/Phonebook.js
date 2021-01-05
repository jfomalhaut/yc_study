import React, { useState } from 'react';

const regexOnlyNumber = /[^0-9]/;

const filed = {
	name: '',
	phonenumber: '',
	job: '',
};

const Phonebook = () => {
	const [info, setInfo] = useState(filed);
	const { name, phonenumber, job } = info;

	const onChangeValue = (ev) => {
		const { target: { value, name } } = ev;


		if (name === 'phonenumber') {
			if (regexOnlyNumber.test(value)) {
				const _value = value.replace(/[^0-9]/g, '');
				setInfo({
					...info,
					[name]: _value
				});
				return;
			}
		}
		
		setInfo({
			...info,
			[name]: value
		});
	};

	return (
		<div>
			<input value={name} name="name" onChange={onChangeValue} placeholder="name" />
			<input value={phonenumber} name="phonenumber" onChange={onChangeValue} placeholder="phonenumber" />
			<input value={job} name="job" onChange={onChangeValue} placeholder="job" />
			<button>입력</button>
		</div>
	);
};

export default Phonebook;
