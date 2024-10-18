import React from 'react'

const SectionTitle = ({title}) => {
  return (
		<div className="title flex items-center justify-center mb-6 ">
			<h2 className="font-bold text-lg md:text-2xl text-center border-b-2 border-b-gray-700 pb-4">
				{title}
			</h2>
		</div>
	);
}

export default SectionTitle