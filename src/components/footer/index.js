import _ from "lodash";
import React from "react";
import { models, steps } from "../../constants";
import useSteps from "../../hooks/steps";
import arrowRight from "../../assets/arrowRight.svg";
import arrowLeft from "../../assets/arrowLeft.svg";
import { animated, useSpring } from "react-spring";

const Footer = () => {
	const {
		selectedModelId,
		selectedColorId,
		selectedAccessoryIds,
		selectedStepId,
		dispatch,
	} = useSteps();

	const styles = useSpring({
		reset: _.isNil(selectedModelId),
		to: { opacity: 1, x: 0 },
		from: { opacity: 0, x: -100 },
	});

	const selectedModel = _.find(models, (m) => m.id === selectedModelId);
	const selectedColor = _.find(
		selectedModel?.colors,
		(c) => c.id === selectedColorId
	);
	const selectedAccessories = _.filter(selectedModel?.accessories, (a) =>
		_.includes(selectedAccessoryIds, a.id)
	);
	const nextStep = _.find(steps, (s) => s.id === selectedStepId + 1);
	const previousStep = _.find(steps, (s) => s.id === selectedStepId - 1);

	const changeStep = (stepId) => {
		dispatch({
			type: "SELECTED_STEP_ID_UPDATE",
			payload: stepId,
		});
	};

	const total =
		selectedModel?.initialPrice +
			selectedColor?.price +
			_.sumBy(selectedAccessories, "price") || 0;

	return (
		<footer
			className='fixed  bottom-0 left-0 w-full z-50 bg-white'
			style={{ boxShadow: "0 0 39px rgb(0 0 0 / 10%)" }}
		>
			<div className='flex lg:hidden h-14 cursor-pointer'>
				<div
					className={`bg-white w-full border-0 ${
						selectedStepId !== 1 ? "flex" : "hidden"
					} items-center justify-center px-4`}
					onClick={() => {
						if (!_.isEmpty(previousStep)) {
							changeStep(previousStep.id);
						}
					}}
				>
					<img src={arrowLeft} className='justify-self-end'></img>
					<span className='text-black uppercase text-sm font-bold mx-auto'>
						{previousStep?.title}
					</span>
				</div>

				<div
					className=' border-0 bg-yellow-500 w-full flex items-center justify-center px-4'
					onClick={() => {
						if (!_.isEmpty(nextStep)) {
							changeStep(nextStep.id);
						}
					}}
				>
					<span className='text-white uppercase text-sm font-bold mx-auto'>
						{nextStep?.title || "Buy now"}
					</span>
					<img src={arrowRight} className='justify-self-end'></img>
				</div>
			</div>
			<div className='hidden px-10 py-6 lg:flex justify-between items-center'>
				<div className='flex'>
					{!_.isNil(selectedModel) ? (
						<animated.div
							style={styles}
							className='pr-6 mr-6 border-r-2 border-r-solid border-r-gray'
						>
							<img style={styles} src={selectedModel?.img} className='w-28' />
						</animated.div>
					) : null}

					<div className='flex flex-col self-center '>
						<span className='text-gray-500'>Total</span>
						<h5 className='font-medium text-3xl'>
							{Intl.NumberFormat("en-US", {
								style: "currency",
								currency: "USD",
							}).format(total)}
						</h5>
					</div>
				</div>

				<div className='flex'>
					{selectedStepId !== 1 ? (
						<button
							onClick={() => {
								changeStep(selectedStepId - 1);
							}}
							className={`bg-gray-300
				 uppercase text-white  font-semibold text-l w-14 h-14  rounded-full flex justify-center items-center mr-4`}
						>
							<img src={arrowLeft}></img>
						</button>
					) : null}
					<button
						onClick={() => {
							if (!_.isEmpty(nextStep) && !_.isEmpty(selectedModel)) {
								changeStep(nextStep.id);
							}
						}}
						className={`${
							_.isEmpty(selectedModel) ? "bg-gray-300" : "bg-yellow-400"
						} uppercase text-white  font-semibold text-l py-4 px-4 pl-8 self-center  rounded-full flex justify-between items-center w-48`}
					>
						<span> {nextStep?.title || "Buy now"}</span>
						<img src={arrowRight} className='h-full'></img>
					</button>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
