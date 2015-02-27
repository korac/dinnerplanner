/**
 * Created by Kristijan on 16.2.2015..
 */
var SelectedDishView = function(container, model){

    model.addObserver(this);

    this._model = model;
    this._container = container;

    var _this = this;

    this.dishes = $("#dishes");
    this.dropdown = $("select");
    this.searchFood = "";


    this.startingFood = [];


    this.update = function() {
        this.startingFood = this._model.getAllDishes(this._model.foodType);

        this.dishes.empty();


        for (var i = 0; i < this.startingFood.length; i++) {

            var dish = this.startingFood[i];
            var dishId = dish.id;

            var htmlKod = '<div class="col-md-2 displayedFood"><div class="thumbnail" did="'
                + dishId + '"><figure><img src="images/'
                + this.startingFood[i].image + '" class="img-circle" alt=""/><figcaption>'
                + this.startingFood[i].name + '</figcaption></figure></div><p>'
                + this.startingFood[i].description + '</p></div>';
            this.dishes.append(htmlKod);
        }


    }

}