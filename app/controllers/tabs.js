$.main.addEventListener('open', function(){	
	if (Ti.Platform.Android.API_LEVEL >= 11){
		var actionBar = $.main.getActivity().actionBar;
		actionBar.setTitle('Tabs');
		actionBar.setDisplayHomeAsUp(true);
		actionBar.onHomeIconItemSelected = function() { 
			$.main.close(); 
		};
		$.main.getActivity().invalidateOptionsMenu();
	}
	
});