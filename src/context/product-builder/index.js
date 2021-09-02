import React, { createContext, useReducer } from "react";
import _ from "lodash";

const ProductBuilderContext = createContext();

const ProductBuilderProvider = ({ children }) => {
	const initialState = {
		selectedStepId: 1,
		previousStepId: null,
		selectedModel: null,
		selectedColorId: null,
		selectedAccessoryIds: [],
		showAlert: false,
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

			case "SHOW_ALERT_UPDATE":
				return {
					...state,
					showAlert: action.payload,
				};

			default:
				throw new Error();
		}
	};

	const onToggleAlert = (show) => {
		dispatch({
			type: "SHOW_ALERT_UPDATE",
			payload: show,
		});
	};

	const onSelectCarModel = ({ id, colorId }) => {
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

		onToggleAlert(false);
	};

	const onSelectColor = ({ colorId }) => {
		dispatch({
			type: "SELECTED_COLOR_ID_UPDATE",
			payload: colorId,
		});
	};

	const onSelectStep = ({ step }) => {
		if (!_.isNil(state.selectedModelId)) {
			dispatch({
				type: "SELECTED_STEP_ID_UPDATE",
				payload: step,
			});

			dispatch({
				type: "PREVIOUS_STEP_ID_UPDATE",
				payload: state.selectedStepId,
			});
		} else {
			onToggleAlert(true);
		}
	};

	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<ProductBuilderContext.Provider
			value={{
				...state,
				onSelectCarModel,
				onSelectColor,
				onSelectStep,
				dispatch,
			}}
		>
			{children}
		</ProductBuilderContext.Provider>
	);
};

export { ProductBuilderContext, ProductBuilderProvider };
