import React, { useState, useEffect } from "react";
import useSteps from "../../hooks/steps";
import StepAccessories from "./accessories";
import StepColors from "./colors";
import StepModels from "./models";
import StepSummary from "./summary";
import { useSpring, animated } from "react-spring";
import _ from "lodash";
import AnimationContainer from "../animation-container";

const Steps = () => {
	const { selectedStepId, previousStepId } = useSteps();

	const renderSteps = () => {
		switch (selectedStepId) {
			case 1:
				return <StepModels />;

			case 2:
				return <StepColors />;

			case 3:
				return <StepAccessories />;

			case 4:
				return <StepSummary />;

			default:
				return <></>;
		}
	};

	return (
		<div key={selectedStepId}>
			<AnimationContainer
				direction={previousStepId > selectedStepId ? "left" : "right"}
			>
				{renderSteps()}
			</AnimationContainer>
		</div>
	);
};

export default Steps;
