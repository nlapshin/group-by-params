const _ = require("lodash");

module.exports = function(input = [], ...groupParams) {
	let { groups, lists } = partitionForGroupsAndLists(input, ...groupParams);

	return unionAndMapGroupsAndLists(groups, lists);

	function partitionForGroupsAndLists(input, ...groupParams) {
		let groups = {};
		let lists = {};

		input.forEach(elem => {
			let groupValues = _.map(groupParams, path => _.get(elem, path));
			let param = groupValues.join("#");

			if (!groups[param]) {
				groups[param] = makeGroup(groupParams, groupValues);
			};

			if (!lists[param]) {
				lists[param] = [];
			};

			lists[param].push(elem);
		});

		return { groups, lists };
	};

	function unionAndMapGroupsAndLists(groups, lists) {
		let output = [];
		let groupsKeys = Object.keys(groups);

		groupsKeys.forEach(name => {
			output.push({
				params: groups[name],
				values: lists[name]
			});
		})

		return output;
	};

	function makeGroup(groupParams, groupValues) {
		return groupParams.reduce((obj, param, index) => {
			return {
				...obj,
				[param]: groupValues[index]
			}
		}, {});
	};
};