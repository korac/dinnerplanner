/**
 * Created by Kristijan on 18.2.2015..
 */
var MeatBallsView = function(container,model){

    model.addObserver(this);

    this._model = model;
    this._container = container;

    this.dishes = this._container.find("#foodAndIngredients");

    //new object containing specific dish (in this case the one with id=100)
    this.update = function() {

        this.dishes.empty();

        this.displayedFood = this._model.getDish(this._model.clickedDish);
        var numGuests = this._model.getNumberOfGuests();

        //getting the length of the array of the ingredients of dish id=100
        var ingredientsNum = this.displayedFood.ingredients.length;

        //new array for the ingredients of the dish
        var tableIngredients = [];

        //putting the ingredients in the array
        for (var i = 0; i < ingredientsNum; i++) {
            tableIngredients[i] = this.displayedFood.ingredients[i];
        }

        //variable containing html code of our table; overall price of the dish (sum of the prices of all ingredients)
        var tableHtml;
        var overallPrice = 0;

        for (var i = 0; i < ingredientsNum; i++) {
            tableHtml += '<tr><td>'
            + tableIngredients[i].quantity
            + " "
            + tableIngredients[i].unit + '</td><td>'
            + tableIngredients[i].name + '</td><td>SEK</td><td>'
            + tableIngredients[i].price + '</td></tr>';
            overallPrice += tableIngredients[i].price;
        }


        var htmlKod = '<div class=" col-md-6 displayedFood"><h2>'
            + this.displayedFood.name + '</h2><img src="images/'
            + this.displayedFood.image + '" alt="" class="img-circle"/><p>'
            + this.displayedFood.description + '</p><button class="btn btn-warning"><span class="glyphicon glyphicon-chevron-left"></span> Back to selected dish</button></div><div class="col-md-4 ingredients">'
            + '<table class="table"><tr><th>INGREDIENTS FOR '
            + numGuests + ' PEOPLE</th></tr>'
            + tableHtml
            + '<tr><td><button class="btn btn-success btn-sm btn-block" did=" ' + this.displayedFood.id + ' ">Confirm dish <span class="glyphicon glyphicon-ok-circle"></span></button></td><td colspan="2" class="lastSEK">per person / SEK</td><td>'
            + overallPrice + '</td></tr></table></div>';

        this.dishes.append(htmlKod);
    }

}