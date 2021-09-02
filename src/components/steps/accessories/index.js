import React from "react";
import useSteps from "../../../hooks/steps";
import _ from "lodash";
import { models } from "../../../constants";
import checkIcon from "../../../assets/icon-check.svg";

const StepAccessories = () => {
	const { selectedModelId, selectedAccessoryIds, dispatch } = useSteps();

	const selectedModel = _.find(models, (model) => model.id === selectedModelId);

	const accessories = selectedModel?.accessories;

	const selectAccessories = (accessoryId) => {
		let accessories = _.cloneDeep(selectedAccessoryIds);

		if (_.includes(accessories, accessoryId)) {
			accessories = _.remove(accessories, (a) => a !== accessoryId);
		} else {
			accessories = accessories.concat(accessoryId);
		}

		dispatch({
			type: "SELECTED_ACCESSORY_IDS_UPDATE",
			payload: accessories,
		});
	};

	return (
		<div className='flex w-full flex-col items-center justify-center z-20'>
			{_.map(accessories, (accessory, index) => (
				<div
					key={accessory.id}
					className={`flex justify-between 
          items-center w-full p-8 border border-solid
          border-${
						_.includes(selectedAccessoryIds, accessory.id)
							? "yellow-400"
							: "gray-200"
					} mb-6 cursor-pointer`}
					onClick={() => {
						selectAccessories(accessory.id);
					}}
				>
					<p className='font-bold text-2xl'>{accessory.label}</p>
					<div className='flex justify-between items-center'>
						<p className='font-bold justify-self-center text-2xl mr-10'>
							{Intl.NumberFormat("en-US", {
								style: "currency",
								currency: "USD",
							}).format(accessory.price)}
						</p>
						<div
							className={` border border-solid border-${
								_.includes(selectedAccessoryIds, accessory.id)
									? "yellow-400 bg-yellow-400 w-10 h-10"
									: "gray-200 w-8 h-8"
							}`}
						>
							<img src={checkIcon} alt='check' />
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default StepAccessories;
