define(
["backbone", "underscore"], 
function(Backbone, _) {
	
	var WidgetModel = Backbone.Model.extend({
		defaults: {
			connectedObject: false,
			size: false,
		},
		
	});
	
	return WidgetModel;
});
