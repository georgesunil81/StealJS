define(['jquery', 'can/view/stache/stache'], function($, stache) {

	console.log("jquery and can/view/stache/stache loaded correctly");

    var scope = {}; //The scope obejct will carry dynamic data for the template.
  
    $(function() { //This function is called once the static HTML is fully loaded and ready in the browser!    

    	//Get the current calendar year for the copyright footer and store it on scope for the template.
        scope.CurrentYear = new Date().getFullYear();

		$('#content-container').html(can.view("app/pages/homepage/HomepageView", scope));
    });
});
