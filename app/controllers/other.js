$.main.addEventListener('open', function(){	
	if (Ti.Platform.Android.API_LEVEL >= 11){
		var actionBar = $.main.getActivity().actionBar;
		actionBar.setTitle('Other');
		actionBar.setDisplayHomeAsUp(true);
		actionBar.onHomeIconItemSelected = function() { 
			$.main.close(); 
		};
		$.main.getActivity().invalidateOptionsMenu();
	}
});

function changeTitle(){
	if (Ti.Platform.Android.API_LEVEL >= 11){
		var actionBar = $.main.getActivity().actionBar;
		actionBar.setTitle(actionBar.getTitle()=='Other' ? 'Title' : 'Other');	
	}	
};

