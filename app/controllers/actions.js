function doClickMenu(e) {
  alert('menu was clicked: ' + e.source.title);
}


$.main.addEventListener('open', function(){	
	if (Ti.Platform.Android.API_LEVEL >= 11){
		var actionBar = $.main.getActivity().actionBar;
		actionBar.setTitle('Actions & Overflow');
		actionBar.setDisplayHomeAsUp(true);
		actionBar.onHomeIconItemSelected = function() { 
			$.main.close(); 
		};
		$.main.getActivity().invalidateOptionsMenu();
	}
	
});


