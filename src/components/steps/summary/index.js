import _ from "lodash";
import React from "react";
import { models } from "../../../constants";
import useSteps from "../../../hooks/steps";

const StepSummary = () => {
	const { selectedModelId, selectedAccessoryIds, selectedColorId } = useSteps();

	const selectedModel = _.find(models, (model) => model.id === selectedModelId);

	const accessories = selectedModel?.accessories;
	const colors = selectedModel?.colors;

	const selectedColor = _.find(colors, (c) => c.id === selectedColorId);
	const selectedAccessories = _.filter(accessories, (a) =>
		_.includes(selectedAccessoryIds, a.id)
	);

	return (
		<div className='flex w-full flex-col items-center justify-center z-20'>
			<h4 className='uppercase mt-8 text-xl'>Model</h4>
			<img src={selectedColor?.img} className='max-w-2xl my-8' />
			<h1 className='font-semibold text-4xl'>{selectedModel?.title}</h1>

			<p className='my-8 text-md leading-relaxed text-lg text-gray-500 text-center'>
				{selectedModel?.description}
			</p>

			<h4 className='uppercase mt-8 text-xl'>Color</h4>

			<div className='flex my-8 items-center w-full justify-center'>
				<div
					className={`w-14 h-14 border-solid border-2 border-gray-200 rounded-full mr-4`}
					style={{
						backgroundColor: selectedColor?.hex,
					}}
				/>

				<h1 className='font-normal text-2xl'>
					{selectedColor?.label} -{" "}
					{Intl.NumberFormat("en-US", {
						style: "currency",
						currency: "USD",
					}).format(selectedColor?.price)}
				</h1>
			</div>

			<h4 className='uppercase mt-8 text-xl'>Accessories</h4>

			<ul className='list-disc my-8 flex flex-col w-full items-center justify.center'>
				{selectedAccessories.length ? (
					<>
						{_.map(selectedAccessories, (accessory, index) => (
							<li className='text-gray-500 '>{accessory.label}</li>
						))}
					</>
				) : (
					<li className='text-gray-500 '>No Accessories selected</li>
				)}
			</ul>
		</div>
	);
};

export default StepSummary;
