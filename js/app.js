$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and views
	var exampleView = new ExampleView($("#exampleView"),model);

    var selectDishView = new SelectedDishView($("#dishes"),model);

    var sideBarView = new SideBarView($("#pendingDish"),model);

    var dinnerOverviewView = new DinnerOverviewView($("#dinnerOnMenu"),model);

    var dinnerPreparationView = new DinnerPreparationView($("#mealsPreparation"),model);
});