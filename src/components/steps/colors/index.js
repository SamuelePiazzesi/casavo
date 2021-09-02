import _ from "lodash";
import React from "react";
import { models } from "../../../constants";
import useSteps from "../../../hooks/steps";

const StepColors = () => {
	const { selectedModelId, selectedColorId, dispatch } = useSteps();

	const selectedModel = _.find(models, (model) => model.id === selectedModelId);

	const colors = selectedModel?.colors;
	const selectedColor = _.find(colors, (c) => c.id === selectedColorId);

	const selectColor = (colorId) => {
		dispatch({
			type: "SELECTED_COLOR_ID_UPDATE",
			payload: colorId,
		});
	};
	return (
		<div className='flex w-full z-20'>
			<div className={`flex flex-col items-center justify-center w-full`}>
				<img
					src={selectedColor?.img}
					className='max-w-xs  lg:max-w-3xl mb-16'
				/>
				<ul className='flex w-full justify-center items-center'>
					{_.map(colors, (color) => (
						<li
							className={`w-10 h-10 lg:w-14 lg:h-14 border-solid border border-${
								selectedColorId === color.id
									? "yellow-400 bg-yellow-400"
									: "gray-200"
							} rounded-full mr-4 flex items-center justify-center`}
						>
							<div
								className={`w-8 h-8 lg:w-12 lg:h-12 border-solid border border-white rounded-full cursor-pointer`}
								style={{
									backgroundColor: color.hex,
								}}
								onClick={() => {
									selectColor(color.id);
								}}
							/>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default StepColors;
