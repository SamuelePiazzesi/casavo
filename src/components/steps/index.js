import React from "react";
import useSteps from "../../hooks/steps";
import StepAccessories from "./accessories";
import StepColors from "./colors";
import StepModels from "./models";
import StepSummary from "./summary";

const Steps = () => {
	const { selectedStepId } = useSteps();

	return (
		<>
			<div className={selectedStepId === 1 ? "block" : "hidden"}>
				<StepModels />
			</div>
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
