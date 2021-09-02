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
		<div className='flex w-full flex-col items-center justify-center z-20 text-center '>
			{_.map(accessories, (accessory, index) => (
				<div
					key={accessory.id}
					className={`flex flex-col lg:flex-row  justify-center lg:justify-between 
          items-center w-full p-4 lg:p-8 border-2 border-solid
          border-${
						_.includes(selectedAccessoryIds, accessory.id)
							? "yellow-400"
							: "gray-200"
					} mb-6 cursor-pointer`}
					onClick={() => {
						selectAccessories(accessory.id);
					}}
				>
					<p className='font-medium lg:font-bold text-xl lg:text-2xl mb-3 lg:mb-0'>
						{accessory.label}
					</p>
					<div className='flex flex-col justify-center lg:flex-row lg:justify-between items-center'>
						<p className='mb-3 lg:mb-0 font-medium lg:font-bold justify-self-center text-gray-500 lg:text-black text-sm lg:text-2xl lg:mr-10'>
							{Intl.NumberFormat("en-US", {
								style: "currency",
								currency: "USD",
							}).format(accessory.price)}
						</p>
						<div
							className={`m-auto lg:m-0 border-2 w-8 h-8   border-solid border-${
								_.includes(selectedAccessoryIds, accessory.id)
									? "yellow-400  transition duration-500 ease-in-out bg-yellow-400 transform scale-110"
									: "gray-200"
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
