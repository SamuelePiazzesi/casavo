import React from "react";
import useSteps from "../../../hooks/product-builder";
import _ from "lodash";
import { steps } from "../../../constants";
import { getStep } from "../../utils";

const Header = () => {
	const { selectedStepId, onSelectStep } = useSteps();

	const selectedStep = getStep(selectedStepId);

	return (
		<header
			className="flex sm:flex-col items-center
			px-4 lg:px-14 py-4 fixed top-0 left-0 w-full
			z-50 bg-white"
		>
			<h1
				className="font-semibold hidden 
				lg:block text-4xl my-6"
			>
				Product Builder
			</h1>

			<div className="flex justify-between items-center block lg:hidden mt-3 w-full">
				<h1 className="font-normal  block xl:hidden text-2xl sm:text-3xl md:text-4xl ">
					{selectedStep.subtitle}
				</h1>

				<h5 className="text-gray-500">
					Step {selectedStep.id} of {steps.length}
				</h5>
			</div>

			<nav className="lg:block hidden">
				<ul className="flex">
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
								}-400 font-semibold cursor-pointer transition 
								duration-500 ease-in-out hover:text-yellow-400`}
								onClick={() => {
									onSelectStep({
										step: step.id,
									});
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
