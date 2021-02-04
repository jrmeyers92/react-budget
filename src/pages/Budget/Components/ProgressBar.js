import React from "react";
import "./ProgressBar.css";

const ProgressBar = (props) => {
	return (
		<div>
			<div className='grayBar'></div>
			<div className='greenBar' style={{ width: props.percent }}></div>
		</div>
	);
};

export default ProgressBar;
