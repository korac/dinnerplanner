/**
 * Created by Kristijan on 17.2.2015..
 */
var DinnerPreparationView = function(container, model){

    model.addObserver(this);

    this._model = model;
    this._container = container;

    this.dishes = this._container;
    this.dinnerPreparationGuests = $("#dinnerPreparationGuests");

    /*var dish1 = this._model.getDish(1);
    var dish2 = this._model.getDish(100);
    var dish3 = this._model.getDish(201);
    */

    this.update = function(){

        this.dishes.empty();

        this.dishesOnMenu = [];
        this.dishesOnMenu = this._model.getFullMenu();


        for (var i = 0; i < this.dishesOnMenu.length; i++) {
            var htmlKod = '<div class="firstMeal col-md-12"><div class="col-md-2 description"><img src="images/'
                + this.dishesOnMenu[i].image + '" class="img-circle" alt=""/></div><div class="col-md-4"><h3>' + this.dishesOnMenu[i].name + '</h3><span>'
                + this.dishesOnMenu[i].description + '</span></div><div class="col-md-6"><h3>Preparation</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ornare fermentum ligula sed rutrum. In non massa ac turpis feugiat tincidunt. Nunc imperdiet interdum nisl quis placerat.</p></div></div>';
            this.dishes.append(htmlKod);
        }

        this.dinnerPreparationGuests.html(this._model.getNumberOfGuests());

    }


}