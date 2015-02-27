$(function() {

	//We instantiate our model
	var model = new DinnerModel();

    var selectDishView = new SelectedDishView($("#selectDish"),model);
    var sideBarView = new SideBarView($('#sidebar'),model);
    var dinnerOverviewView = new DinnerOverviewView($("#dinnerOnMenu"),model);
    var dinnerPreparationView = new DinnerPreparationView($("#mealsPreparation"),model);
    var meatBallsView = new MeatBallsView($("#meatBallsViewId"),model);
    var firstPageView = new FirstPageView($("#mainCont"), model);

    var selectDishController = new SelectDishController(selectDishView,model);
    var sideBarController = new SideBarController(sideBarView,model);
    var firstPageController = new FirstPageController(firstPageView,model);
    //var meatBallsController = new MeatBallsController(meatBallsView,model);
    var mainController = new MainController(firstPageView, model);

});