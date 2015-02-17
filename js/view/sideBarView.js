/**
 * Created by Kristijan on 17.2.2015..
 */
var SideBarView = function(container,model){

    this._model = model;
    this._container = container;

    this.prices = this._container;

    var dish = this._model.getDish(1);
    var pendingPrice = dish.ingredients;

    var dishPrice = 0;

    //Gets the price of one dish (sum of the prices of all ingredients)
    for(var i=0; i<pendingPrice.length; i++) {
        dishPrice += pendingPrice[i].price;
    }

    //Our variable containing our HTML code we will import
    var htmlKod = '<tr><td>'
        + dish.id + '</td><td>'
        + dish.name +'</td><td>'
        + dishPrice +'</td></tr><tr><td colspan="2">Pending</td><td>0.00</td></tr><tr><td>Overall:</td><td colspan="2" class="SEK">'
        + dishPrice + '</td></tr>';

    this.prices.append(htmlKod);
}