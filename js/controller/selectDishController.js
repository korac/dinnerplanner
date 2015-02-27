/**
 * Created by Kristijan on 21.2.2015..
 */
var SelectDishController = function(view, model){

    this._model = model;
    this._view = view;

    var _this = this;

    this._view.dropdown.change( function () {


        if(_this._view.dropdown.val() == 1){

            $("select option[value='1']").attr("selected", "selected");
            $("select option[value='2']").removeAttr("selected", "selected");
            $("select option[value='3']").removeAttr("selected", "selected");

            _this._model.setFoodType("starter");
            //console.log("foodType = " + _this._model.foodType);

        }
        else if(_this._view.dropdown.val() == 2){

            $("select option[value='2']").attr("selected", "selected");
            $("select option[value='1']").removeAttr("selected", "selected");
            $("select option[value='3']").removeAttr("selected", "selected");

            _this._model.setFoodType("main dish");
            //console.log("foodType = " + _this._model.foodType);

        }
        else if(_this._view.dropdown.val() == 3){

            $("select option[value='3']").attr("selected", "selected");
            $("select option[value='1']").removeAttr("selected", "selected");
            $("select option[value='2']").removeAttr("selected", "selected");

            _this._model.setFoodType("dessert");
            //console.log("foodType = " + _this._model.foodType);

        }

    });


    //************** SEARCH FUNCTION **************//
    $("#selectDish form").on("click", "button", function(){

       _this._view.searchFood = $("input").val();

        var starters = _this._model.getAllDishes("starter");
        var mains = _this._model.getAllDishes("main dish");
        var desserts = _this._model.getAllDishes("dessert");

        var allDishes = [];
        for(var i = 0; i<starters.length; i++) {
            allDishes.push(starters[i]);
        }
        for(var i = 0; i<starters.length; i++) {
            allDishes.push(mains[i]);
        }
        for(var i = 0; i<starters.length; i++) {
            allDishes.push(desserts[i]);
        }

        console.log(allDishes);

        for(var i = 0; i < allDishes.length; i++) {
            if (_this._view.searchFood == allDishes[i].name){
                _this._model.setFoodType(allDishes[i].type);
            }
        }
    });

/*
    for(var i = 0; i < this._model.getAllDishes(_this._model.foodType).length; i++) {
        this._view.clickedDishes[i].click(function () {
            alert("kliknia si " + _this._view.clickedDishes[i]);
        });
    }*/

    this._view.dropdown.change();


}

