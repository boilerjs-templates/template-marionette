var Marionette = require('backbone.marionette');
var pkg = require('package.json');

module.exports = Marionette.ItemView.extend({
	template: require('templates/footer.tpl'),

	templateHelpers: {
		organization: '{{organization}}',
		version: pkg.version
	}
});