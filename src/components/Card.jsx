import React from "react";

// const addNewLine = (text, length=40) => {
//   if(!text) {
//     return ''
//   }

//   if (text.length > length){
//     return text.slice(0, length) + " \n " + text.slice(length);
//   } else {
//     return text
//   }
// }

export default function Card({ image, title, author, url }) {

	return (
		<div className="card">
			<div className="card-image">
				<img src={image} alt="super1" />
			</div>
			<div className="card-content">
				<div className="card-heading">
					<span className="card-series"></span>
				</div>
				<div className="card-details">
					<h4 className="card-title">{title}</h4>
				</div>
			</div>
			{/* read more button */}
			<div className="card-sub-details">
					<span>{author}</span>
					<a style={{color:"white"}}
				href={url}
			>
				Read More
			</a>
				</div>
			
		</div>
	);
}
