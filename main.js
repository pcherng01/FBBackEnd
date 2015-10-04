
// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
Parse.Cloud.define("hello", function(request, response) {
	console.log("Hello");
	response.success("Hello world!");
});

// Other
Parse.Cloud.define("pair", function(request, response) {
 	
		
		var Users= Parse.Object.extend("Users");
		var user = new Users();
	
		user.set("userId",request.params.userID);
		user.set("likes", request.params.likes);
		
		user.save(null, {
		success: function(gameScore) {
		response.success("calling pair successfully");
		alert('New object created with objectId: ' + gameScore.id);
		},
		error: function(gameScore, error) {
			alert('failed to created new object ' + error.message);
		}
		});
	
	
/*
	var likeQuery = new Parse.Query(LikeData);
	var eventQuery = new Parse.Query(Events);
	
	var eventData = eventQuery.and(request.params.userId, request.params.eventId);

	eventQuery.find({
		success: function(results) {
     		response.success(results);
		},
		error: function(error) {
			 // There was an error.
    		response.error(error);
		}
	});*/
	
});
