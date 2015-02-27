/**
 * Created by Kristijan on 25.2.2015..
 */
var MainController = function (view, model) {

    this._view = view;
    this._model = model;

    var _this = this;

    $(".mainContainer").hide();
    $(".page").hide();
    $(".mainCont").show();

    $("#createDinner").click(function () {

        $(".mainCont").hide();
        $(".mainContainer").show();
        $("#sidebar").show();
        $("#selectDish").show();
    });

    $("#selectDish").on("click", ".thumbnail", function(){

        var dishId = $(this).attr("did");
        var dish = model.getDish(parseInt(dishId));

       _this._model.setClickedDish(dishId);


        $(".page").hide();
        $("#sidebar").show();
        $("#meatBallsViewId").show();
    });

    $("#meatBallsViewId").on("click", ".btn-warning", function(){

        $(".page").hide();
        $("#sidebar").show();
        $("#selectDish").show();
    });

    $("#meatBallsViewId").on("click", ".btn-success", function(){

        var dishId = $(this).attr("did");
        model.addDishToMenu(parseInt(dishId));

        $(".page").hide();
        $("#sidebar").show();
        $("#selectDish").show();
        if(_this._model.getNumberOfGuests()) {
            $("#confirmButton").removeAttr("disabled");
            $("#confirmButton span").remove();
            $("#confirmButton").append('<span class="glyphicon glyphicon-ok-circle">');
        }
    });

    $("#sidebar").on("click", "#confirmButton", function(){


        $(".page").hide();
        $("#dinnerOverview").show();
    });

    $("#dinnerOverview").on("click", ".btn-warning", function(){

        $(".page").hide();
        $("#sidebar").show();
        $("#selectDish").show();
    });

    $("#dinnerOverview").on("click", ".btn-success", function(){

        $(".page").hide();
        $("#dinnerPreparation").show();
    });

    $("#dinnerPreparation").on("click", ".btn-warning", function () {
        $(".page").hide();
        $("#sidebar").show();
        $("#selectDish").show();
    })
}