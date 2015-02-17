/**
 * Created by Kristijan on 17.2.2015..
 */
var DinnerOverviewView = function(container,model){

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


    console.log(dishesOnMenu);


    var dishPrice = [];

    //Gets the price of one dish (sum of the prices of all ingredients)
    for(var i=0; i<dishesOnMenu.length; i++) {
        dishPrice[i] = 0;
        for(var j=0; j<dishesOnMenu[i].ingredients.length; j++) {
            dishPrice[i] += dishesOnMenu[i].ingredients[j].price;
        }
    }

    console.log(dishPrice);

    for(var i=0; i<dishesOnMenu.length; i++) {
        var htmlKod = '<div class="col-md-3"><div class="thumbnail"><figure><img src="images/' + dishesOnMenu[i].image + '" alt=""/><figcaption>'
            + dishesOnMenu[i].name + '</figcaption></figure><span>'
            + dishPrice[i] + '</span></div></div>';
        this.dishes.append(htmlKod);
    }
}