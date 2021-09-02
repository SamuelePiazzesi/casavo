import React from "react";
import useSteps from "../../hooks/steps";
import _ from "lodash";
import { steps } from "../../constants";

const Header = () => {
	const { selectedStepId, dispatch, selectedModel } = useSteps();

	const selectedStep = _.find(steps, (s) => s.id === selectedStepId);

	const selectStep = (id) => {
		if (!_.isEmpty(selectedModel)) {
			dispatch({
				type: "SELECTED_STEP_ID_UPDATE",
				payload: id,
			});
		}
	};

	return (
		<header className='flex sm:flex-col items-center px-4 sm:px-14 py-4 fixed top-0 left-0 w-full z-50 bg-white'>
			<h1 className='font-semibold  hidden lg:block text-5xl mt-4 mt-14 mb-10'>
				Product Builder
			</h1>
			<div className='flex justify-between items-center block lg:hidden mt-3 w-full'>
				<h1 className='font-normal  block lg:hidden text-2xl sm:text-3xl md:text-4xl '>
					{selectedStep.subtitle}
				</h1>

				<h5 className='text-gray-500'>
					Step {selectedStep.id} of {steps.length}
				</h5>
			</div>

			<nav className='sm:block hidden'>
				<ul className='flex'>
					{_.map(steps, (step, index) => (
						<li
							key={index}
							className={`${
								selectedStep?.id === step.id
									? "border-b-2 border-yellow-400"
									: ""
							} `}
						>
							<span
								className={`text-base py-2 px-3 uppercase text-${
									selectedStep?.id === step.id ? "yellow" : "gray"
								}-400 font-semibold cursor-pointer`}
								onClick={() => {
									selectStep(step.id);
								}}
							>
								{step.title}
							</span>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
};

export default Header;
