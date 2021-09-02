import React, { useState, useEffect } from "react";
import useSteps from "../../hooks/steps";
import StepAccessories from "./accessories";
import StepColors from "./colors";
import StepModels from "./models";
import StepSummary from "./summary";
import { useSpring, animated } from "react-spring";
import _ from "lodash";

const Steps = () => {
	const { previousStepId, selectedStepId, animationReset } = useSteps();

	const styles = useSpring({
		reset: animationReset,
		to: { opacity: 1, transform: "translate(0px, 0px)" },
		from: {
			opacity: 0,
			transform: `translate(${
				previousStepId > selectedStepId ? "-30px" : "30px"
			}, 0)`,
		},
	});

	return (
		<>
			<h1>{animationReset ? "true" : false}</h1>
			<animated.div
				style={styles}
				className={selectedStepId === 1 ? "block" : "hidden"}
			>
				<StepModels />
			</animated.div>
			<animated.div
				style={styles}
				className={selectedStepId === 2 ? "block" : "hidden"}
			>
				<StepColors />
			</animated.div>
			<animated.div
				style={styles}
				className={selectedStepId === 3 ? "block" : "hidden"}
			>
				<StepAccessories />
			</animated.div>
			<animated.div
				style={styles}
				className={selectedStepId === 4 ? "block" : "hidden"}
			>
				<StepSummary />
			</animated.div>
		</>
	);
};

export default Steps;
