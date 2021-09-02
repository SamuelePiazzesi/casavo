import React, { createContext, useReducer } from "react";

const StepsContext = createContext();

const StepsProvider = ({ children }) => {
	const initialState = {
		selectedStepId: 1,
		previousStepId: null,
		selectedModelId: null,
		selectedColorId: null,
		selectedAccessoryIds: [],
	};

	const reducer = (state, action) => {
		switch (action.type) {
			case "SELECTED_STEP_ID_UPDATE":
				return {
					...state,
					selectedStepId: action.payload,
				};

			case "PREVIOUS_STEP_ID_UPDATE":
				return {
					...state,
					previousStepId: action.payload,
				};

			case "SELECTED_MODEL_ID_UPDATE":
				return {
					...state,
					selectedModelId: action.payload,
				};

			case "SELECTED_COLOR_ID_UPDATE":
				return {
					...state,
					selectedColorId: action.payload,
				};

			case "SELECTED_ACCESSORY_IDS_UPDATE":
				return {
					...state,
					selectedAccessoryIds: action.payload,
				};

			default:
				throw new Error();
		}
	};

	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<StepsContext.Provider
			value={{
				...state,
				dispatch,
			}}
		>
			{children}
		</StepsContext.Provider>
	);
};

export { StepsContext, StepsProvider };
