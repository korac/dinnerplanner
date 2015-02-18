/**
 * Created by Kristijan on 18.2.2015..
 */
var MeatBallsView = function(container,model){

    this._model = model;
    this._container = container;

    this.dishes = this._container;

    //new object containing specific dish (in this case the one with id=100)
    var displayedFood = this._model.getDish(100);

    var numGuests = this._model.getNumberOfGuests();

    //getting the length of the array of the ingredients of dish id=100
    var ingredientsNum = displayedFood.ingredients.length;

    //new array for the ingredients of the dish
    var tableIngredients = [];

    //putting the ingredients in the array
    for(var i=0; i<ingredientsNum; i++ ){
        tableIngredients[i] = displayedFood.ingredients[i];
    }

    //variable containing html code of our table; overall price of the dish (sum of the prices of all ingredients)
    var tableHtml;
    var overallPrice = 0;

    for(var i=0; i<ingredientsNum; i++){
        tableHtml += '<tr><td>'
        + tableIngredients[i].quantity
        + " "
        + tableIngredients[i].unit + '</td><td>'
        + tableIngredients[i].name + '</td><td>SEK</td><td>'
        + tableIngredients[i].price + '</td></tr>';
         overallPrice += tableIngredients[i].price;
    }



    var htmlKod = '<div class=" col-md-6 displayedFood"><h2>'
        + displayedFood.name + '</h2><img src="images/'
        + displayedFood.image + '" alt="" class="img-circle"/><p>'
        + displayedFood.description + '</p><button class="btn btn-warning">Back to selected dish</button></div><div class="col-md-4 ingredients">'
        + '<table class="table"><tr><th>INGREDIENTS FOR '
        + numGuests + ' PEOPLE</th></tr>'
        + tableHtml
        + '<tr><td><button class="btn btn-warning btn-sm btn-block">Confirm dish</button></td><td colspan="2" class="lastSEK">SEK</td><td>'
        + overallPrice +'</td></tr></table></div>';

    this.dishes.append(htmlKod);
}