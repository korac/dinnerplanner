/**
 * Created by Kristijan on 17.2.2015..
 */
var DinnerPreparationView = function(container, model){

    this._model = model;
    this._container = container;

    this.dishes = this._container;

    var dish1 = this._model.getDish(1);
    var dish2 = this._model.getDish(100);
    var dish3 = this._model.getDish(201);

    var dishesOnMenu = [];

    dishesOnMenu.push(dish1);
    dishesOnMenu.push(dish2);
    dishesOnMenu.push(dish3);

    for(var i=0; i<dishesOnMenu.length; i++) {
        var htmlKod = '<div class="firstMeal col-md-12"><div class="col-md-2 description"><img src="images/'
            + dishesOnMenu[i].image + '" alt=""/></div><div class="col-md-4"><h3>' + dishesOnMenu[i].name + '</h3><span>'
            + dishesOnMenu[i].description + '</span></div><div class="col-md-6"><h3>Preparation</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ornare fermentum ligula sed rutrum. In non massa ac turpis feugiat tincidunt. Nunc imperdiet interdum nisl quis placerat.</p></div></div>';
        this.dishes.append(htmlKod);
    }
}