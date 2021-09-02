import React from "react";
import { models } from "../../../constants";
import useSteps from "../../../hooks/steps";
import checkIcon from "../../../assets/icon-check.svg";

const StepModels = () => {
	const { selectedModelId, dispatch } = useSteps();

	const selectModel = (id, colorId) => {
		dispatch({
			type: "SELECTED_MODEL_ID_UPDATE",
			payload: id,
		});
		dispatch({
			type: "SELECTED_COLOR_ID_UPDATE",
			payload: colorId,
		});

		dispatch({
			type: "SELECTED_ACCESSORY_IDS_UPDATE",
			payload: [],
		});
	};
	return (
		<div className='flex w-full z-20'>
			{models.map((model, index) => (
				<div
					key={index}
					onClick={() => {
						if (model.id === selectedModelId) {
							selectModel(null, null);
						} else {
							selectModel(model.id, model.colors[0].id);
						}
					}}
					className={`${
						index === 0 ? "mr-8" : ""
					} flex flex-col items-center justify-center	 py-8 w-3/6 border-solid border-2 border-${
						selectedModelId === model.id ? "yellow-400" : "gray-200"
					} rounded-sm cursor-pointer`}
				>
					<h1 className='font-semibold text-4xl mt-2 mb-6'>{model.title}</h1>
					<img alt={model.title} src={model.img} className='max-w-sm mb-7' />
					<span className='text-gray-500 mb-3'>
						from{" "}
						{Intl.NumberFormat("en-US", {
							style: "currency",
							currency: "USD",
						}).format(model.initialPrice)}
					</span>
					<div
						className={`w-10 h-10 border-solid border-2 border-${
							selectedModelId === model.id
								? "yellow-400 bg-yellow-400"
								: "gray-200"
						} rounded-full`}
					>
						<img src={checkIcon} alt='check' />
					</div>
				</div>
			))}
		</div>
	);
};

export default StepModels;
