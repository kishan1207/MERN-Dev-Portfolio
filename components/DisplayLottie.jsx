import React from "react";
import Lottie from "react-lottie";

const GreetingLottie = ({ animationPath }) => {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationPath,
	};

	return (
		<div onClick={() => null}>
			<Lottie options={defaultOptions} />
		</div>
	);
};

export default GreetingLottie;
