import _ from "lodash";
import { models, steps } from "../../constants";

export const getStep = (id = 1) => {
	if (_.isNil(id)) {
		return;
	}

	return _.find(steps, (s) => s.id === id);
};

export const getSelectedCarModel = (id = 1) => {
	if (_.isNil(id)) {
		return;
	}

	return _.find(models, (m) => m.id === id);
};

export const getSelectedColor = (id = "", model = {}) => {
	if (_.isNil(id) || _.isNil(model)) {
		return;
	}
	return _.find(model.colors, (c) => c.id === id);
};

export const getSelectedAccessories = (ids = [], model = {}) => {
	if (_.isEmpty(ids) || _.isNil(model)) {
		return [];
	}

	return _.filter(model.accessories, (a) => _.includes(ids, a.id));
};
