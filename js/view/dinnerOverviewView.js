/**
 * Created by Kristijan on 17.2.2015..
 */
var DinnerOverviewView = function(container,model){

    model.addObserver(this);

    this._model = model;
    this._container = container;

    this.dishes = this._container;
    this.dinnerOverviewPrice = $("#dinnerOverviewPrice");
    this.dinnerOverviewGuests = $("#dinnerOverviewGuests");

    /*var dish1 = this._model.getDish(1);
    var dish2 = this._model.getDish(100);
    var dish3 = this._model.getDish(201);


        dishesOnMenu.push(dish1);
        dishesOnMenu.push(dish2);
        dishesOnMenu.push(dish3);*/


    this.update = function() {

        this.dishesOnMenu = [];
        var dishPrice = [];

        this.dishes.empty();

        this.dishesOnMenu = this._model.getFullMenu();


        //Gets the price of one dish (sum of the prices of all ingredients)
        for (var i = 0; i < this.dishesOnMenu.length; i++) {
            dishPrice[i] = 0;
            for (var j = 0; j < this.dishesOnMenu[i].ingredients.length; j++) {
                dishPrice[i] += this.dishesOnMenu[i].ingredients[j].price;
            }
        }


        for (var i = 0; i < this.dishesOnMenu.length; i++) {
            var htmlKod = '<div class="col-md-3"><div class="thumbnail"><figure><img src="images/'
                + this.dishesOnMenu[i].image + '" alt=""/><figcaption>'
                + this.dishesOnMenu[i].name + '</figcaption></figure><span>'
                + dishPrice[i] + '</span></div></div>';
            this.dishes.append(htmlKod);
        }

        this.dinnerOverviewGuests.html(this._model.getNumberOfGuests());
        this.dinnerOverviewPrice.html(this._model.getTotalMenuPrice());
    }
}