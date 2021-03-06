import React from "react";
import { models } from "../../../constants";
import useSteps from "../../../hooks/product-builder";
import checkIcon from "../../../assets/icon-check.svg";
import { formatInDollars } from "../../utils";

const StepModels = () => {
	const { selectedModelId, onSelectCarModel } = useSteps();

	return (
		<div className="flex flex-col lg:flex-row w-full h-full z-20">
			{models.map((model, index) => (
				<button
					key={index}
					onClick={() => {
						if (model.id === selectedModelId) {
							onSelectCarModel({ id: null, colorId: null });
						} else {
							onSelectCarModel({ id: model.id, colorId: model.colors[0].id });
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
						from {formatInDollars(model.initialPrice)}
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
				</button>
			))}
		</div>
	);
};

export default StepModels;
