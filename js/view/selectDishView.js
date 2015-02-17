/**
 * Created by Kristijan on 16.2.2015..
 */
var SelectedDishView = function(container, model){

    this._model = model;
    this._container = container;

    this.dishes = this._container;

    var startingFood = this._model.getAllDishes("starter");

    for(var i=0; i<startingFood.length; i++) {
        var htmlKod = '<div class="col-md-2"><div class="thumbnail"><figure><img src="images/'
            + startingFood[i].image + '" alt=""/><figcaption>'
            + startingFood[i].name + '</figcaption></figure></div><p>'
            + startingFood[i].description + '</p></div>';
        this.dishes.append(htmlKod);
    }

}