import React from "react";
import { useSpring, animated } from "react-spring";
import useSteps from "../../hooks/steps";

const AnimationContainer = ({ direction, children }) => {
	const getAnimatinDirection = () => {
		switch (direction) {
			case "top":
				return "translate(0px, 30px)";
			case "bottom":
				return "translate(0px, -30px)";
			case "left":
				return "translate(-30px, 0px)";
			case "right":
				return "translate(30px, 0px)";

			default:
				return "translate(0px, 0px)";
		}
	};

	const styles = useSpring({
		to: { opacity: 1, transform: "translate(0px, 0px)" },
		from: {
			opacity: 0,
			transform: getAnimatinDirection(),
		},
	});

	return <animated.div style={styles}>{children}</animated.div>;
};

export default AnimationContainer;
