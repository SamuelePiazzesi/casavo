import React from "react";
import useSteps from "../../hooks/steps";
import StepAccessories from "./accessories";
import StepColors from "./colors";
import StepModels from "./models";
import StepSummary from "./summary";
import { useSpring, animated } from "react-spring";

const Steps = () => {
	const { selectedStepId } = useSteps();

	const styles = useSpring({
		to: { opacity: 1, x: 0 },
		from: { opacity: 0, x: 40 },
	});

	return (
		<>
			<animated.div
				style={styles}
				className={selectedStepId === 1 ? "block" : "hidden"}
			>
				<StepModels />
			</animated.div>
			<div className={selectedStepId === 2 ? "block" : "hidden"}>
				<StepColors />
			</div>
			<div className={selectedStepId === 3 ? "block" : "hidden"}>
				<StepAccessories />
			</div>
			<div className={selectedStepId === 4 ? "block" : "hidden"}>
				<StepSummary />
			</div>
		</>
	);
};

export default Steps;
