define(
["backbone", "underscore", "frontend/models/connectedObject"], 
function(Backbone, _, ConnectedObjectModel) {
	
	var ConnectedObjectCollection = Backbone.Collection.extend({
		model: ConnectedObjectModel,
		url : collectionConnectedObjectsUrl,
		
		sync: function(method, model, options) {
            var params = _.extend({
                type: 'GET',
                dataType: 'json',
                url: this.url,
                processData: false,
            }, options);
            
            return $.ajax(params);
        },
	});
	
	return ConnectedObjectCollection;
});
