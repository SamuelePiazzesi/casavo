import React from "react";
import { models } from "../../../constants";
import useSteps from "../../../hooks/product-builder";
import checkIcon from "../../../assets/icon-check.svg";

const StepModels = () => {
	const { selectedModelId, dispatch } = useSteps();

	const selectModel = (model) => {
		dispatch({
			type: "SELECTED_MODEL_ID_UPDATE",
			payload: model,
		});
		dispatch({
			type: "SELECTED_COLOR_ID_UPDATE",
			payload: model?.colors[0],
		});

		dispatch({
			type: "SELECTED_ACCESSORY_IDS_UPDATE",
			payload: [],
		});
	};

	return (
		<div className="flex flex-col lg:flex-row w-full h-full z-20">
			{models.map((model, index) => (
				<div
					key={index}
					onClick={() => {
						if (model.id === selectedModelId) {
							selectModel(null);
						} else {
							selectModel(model);
						}
					}}
					className={`${
						index === 0 ? "mr-8" : ""
					} flex flex-col items-center justify-center	 py-8 w-full lg:w-3/6 border-solid border-2 border-${
						selectedModelId === model.id ? "yellow-400" : "gray-200"
					} rounded-sm cursor-pointer mb-6 lg:mb-none`}
				>
					<h1 className="font-semibold text-3xl lg:text-4xl mt-2 mb-4 lg:mb-6">
						{model.title}
					</h1>
					<img
						alt={model.title}
						src={model.img}
						className="max-w-xs lg:max-w-sm mb-6 lg:mb-7"
					/>
					<span className="text-gray-500 mb-3 text-sm lg:text-base">
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
						<img src={checkIcon} alt="check" />
					</div>
				</div>
			))}
		</div>
	);
};

export default StepModels;
