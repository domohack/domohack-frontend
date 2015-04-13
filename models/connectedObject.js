define(
["backbone", "underscore"], 
function(Backbone, _) {
	
	var ConnectedObjectModel = Backbone.Model.extend({
		defaults: {
			id: 1,
			name: "test1",
			famille: "prise",
			type: "on/off",
			unite: "boolean",
			value: false
		},
		url: modelConnectedObjectUrl,
		
		initialize: function() {
		    //this.url += this.attributes.id;
		},
		
		validate: function(){
			_.each(this.attributes, function(value, key) {
				if (!value) {
					alert("Attribute " + key + " must have value.")
				}
			})
		},
		
	});
	
	return ConnectedObjectModel;
});
