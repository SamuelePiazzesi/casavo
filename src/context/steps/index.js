import React, { createContext, useReducer, useEffect } from "react";

const StepsContext = createContext();

const StepsProvider = ({ children }) => {
	const initialState = {
		selectedStepId: 1,
		previousStepId: null,
		selectedModelId: null,
		selectedColorId: null,
		selectedAccessoryIds: [],
		animationReset: true,
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

			case "ANIMATION_RESET_UPDATE":
				return {
					...state,
					animationReset: action.payload,
				};

			default:
				throw new Error();
		}
	};

	const [state, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		dispatch({
			type: "ANIMATION_RESET_UPDATE",
			payload: true,
		});
	}, [state.selectedStepId]);

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
