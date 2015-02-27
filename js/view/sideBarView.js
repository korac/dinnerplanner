/**
 * Created by Kristijan on 17.2.2015..
 */
var SideBarView = function(container,model){

    model.addObserver(this);

    this._model = model;
    this._container = container;


    this.numberOfGuests = $("#numberOfGuests");
    this.plusButton = $("#plusGuest");
    this.minusButton = $("#minusGuest");
    this.addedTable = $("#pendingDish");
    this.confirmButton = $("#confirmButton");
    this.overallPrice = $("#overallPrice");

    //INITIAL VALUES
    this.numberOfGuests.html(this._model.getNumberOfGuests());

    var dish = []; //uzmi sve dishes iz selectedDishes, ubaci u for petlju, i appendaj ih

    var dishPrice = [];


    this.update = function(){

        this.addedTable.empty();

        this.numberOfGuests.html(this._model.getNumberOfGuests());
        dish = this._model.getFullMenu();
        this.overallPrice.html(this._model.getTotalMenuPrice()); //ako ispisuje 0, to je zato sta je broj gostiju 0


        var finalPrice = 0;


        //Gets the price of one dish (sum of the prices of all ingredients)
        //And the overall price
        for(var j=0; j<dish.length; j++) {
            var pendingPrice = dish[j].ingredients;
            dishPrice[j] = 0;
            for (var i = 0; i < pendingPrice.length; i++){
                dishPrice[j] += pendingPrice[i].price;
            }
            finalPrice += dishPrice[j];
        }


        for(var i=0; i<dish.length; i++)
        {
            //Our variable containing our HTML code we will import
            var htmlKod = '<tr><td>'
                + dish[i].id + '</td><td>'
                + dish[i].name + '</td><td>'
                + dishPrice[i] + '</td></tr>>';
            this.addedTable.append(htmlKod);

        }



    }

    this.update();
}