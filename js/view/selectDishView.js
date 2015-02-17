/**
 * Created by Kristijan on 16.2.2015..
 */
var SelectedDishView = function(container, model){

    this.selectingDish = container.find("#filter");

    var filter =

    this.selectingDish.html(model.getAllDishes("main dish", filter));

}