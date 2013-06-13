$.table.addEventListener('click', function(e){
	var controller = Alloy.createController(e.row.value);
	controller.getView().open();
});

$.index.open();
