import _ from "lodash";
import React from "react";
import useSteps from "../../../hooks/product-builder";
import arrowRight from "../../../assets/arrowRight.svg";
import arrowLeft from "../../../assets/arrowLeft.svg";
import AnimationContainer from "../../animation-container";
import {
	formatInDollars,
	getSelectedAccessories,
	getSelectedCarModel,
	getSelectedColor,
	getStep,
} from "../../utils";

const Footer = () => {
	const {
		selectedModelId,
		selectedColorId,
		selectedAccessoryIds,
		selectedStepId,
		previousStepId,
		showAlert,
		onSelectStep,
	} = useSteps();

	const selectedModel = getSelectedCarModel(selectedModelId);
	const selectedColor = getSelectedColor(selectedColorId, selectedModel);
	const selectedAccessories = getSelectedAccessories(
		selectedAccessoryIds,
		selectedModel
	);
	const nextStep = getStep(selectedStepId + 1);
	const previousStep = getStep(selectedStepId - 1);

	const total =
		selectedModel?.initialPrice +
			selectedColor?.price +
			_.sumBy(selectedAccessories, "price") || 0;

	return (
		<footer
			className="fixed bottom-0 left-0 w-full z-50 bg-white"
			style={{ boxShadow: "0 0 39px rgb(0 0 0 / 10%)" }}
		>
			<div className="flex lg:hidden h-14 cursor-pointer">
				<button
					className={`bg-white w-full border-0 ${
						selectedStepId !== 1 ? "flex" : "hidden"
					} items-center justify-center flex px-4`}
					onClick={() => {
						if (!_.isEmpty(previousStep)) {
							onSelectStep({ step: previousStep.id });
						}
					}}
				>
					<img
						src={arrowLeft}
						alt="chevron-left"
						className="justify-self-end"
					/>
					<AnimationContainer key={selectedStepId} direction="bottom">
						<span className="text-black uppercase text-sm font-bold mx-auto">
							{previousStep?.title}
						</span>
					</AnimationContainer>
				</button>

				<button
					className="border-0 bg-yellow-500 w-full flex items-center justify-center px-4"
					onClick={() => {
						if (!_.isEmpty(nextStep)) {
							onSelectStep({ step: nextStep.id });
						}
					}}
				>
					<AnimationContainer key={selectedStepId} direction="bottom">
						<span className="text-white uppercase text-sm font-bold mx-auto">
							{nextStep?.title || "Buy now"}
						</span>
					</AnimationContainer>
					<img
						src={arrowRight}
						alt="chevron-right"
						className="justify-self-end"
					/>
				</button>
			</div>

			<div className="hidden px-10 py-6 lg:flex justify-between items-center">
				{!_.isNil(selectedModel) ? (
					<AnimationContainer direction="left">
						<div className="flex">
							<div className="pr-6 mr-6 border-r-2 border-r-solid border-r-gray">
								<img
									src={selectedModel?.img}
									alt="selected-model"
									className="w-28"
								/>
							</div>

							<div className="flex flex-col self-center ">
								<span className="text-gray-500">Total</span>

								<h5 className="font-medium text-3xl">
									{formatInDollars(total)}
								</h5>
							</div>
						</div>
					</AnimationContainer>
				) : (
					<div className="flex flex-col self-center ">
						<span className="text-gray-500">Total</span>

						<h5 className="font-medium text-3xl">{formatInDollars(total)}</h5>
					</div>
				)}

				{showAlert ? (
					<AnimationContainer direction="top">
						<div className="bg-black py-2 px-4 rounded flex justify-center items-center">
							<span className="text-white text-medium">
								Please select a model first!
							</span>
						</div>
					</AnimationContainer>
				) : null}

				<div className="flex">
					{selectedStepId !== 1 ? (
						<AnimationContainer direction="left">
							<button
								onClick={() => {
									onSelectStep({ step: selectedStepId - 1 });
								}}
								className="bg-gray-300 uppercase text-white 
								font-semibold text-l w-14 h-14  rounded-full flex
								justify-center items-center mr-4"
							>
								<img src={arrowLeft} alt="chevron-left" />
							</button>
						</AnimationContainer>
					) : null}
					<button
						onClick={() => {
							if (!_.isEmpty(nextStep) && !_.isEmpty(selectedModel)) {
								onSelectStep({ step: nextStep.id });
							}
						}}
						className={`${
							_.isNil(selectedModelId) ? "bg-gray-300" : "bg-yellow-400"
						} uppercase text-white  font-semibold text-l 
						py-4 px-4 pl-8 self-center  rounded-full flex
						justify-between items-center w-48`}
					>
						<AnimationContainer
							key={selectedStepId}
							direction={previousStepId > selectedStepId ? "bottom" : "top"}
						>
							<span> {nextStep?.title || "Buy now"}</span>
						</AnimationContainer>

						<img src={arrowRight} alt="car" className="h-full" />
					</button>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
