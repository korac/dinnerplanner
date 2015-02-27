/**
 * Created by Kristijan on 23.2.2015..
 */
var SideBarController = function (view, model) {

    this._view = view;
    this._model = model;

    var _this = this;

    this._view.plusButton.on("click", function(){
        _this._model.setNumberOfGuests(model.getNumberOfGuests() + 1);
        if(typeof _this._model.getFullMenu() !== "undefined" && _this._model.getFullMenu().length > 0)
        {
            $("#confirmButton").removeAttr("disabled");
            $("#confirmButton span").remove();
            $("#confirmButton").append('<span class="glyphicon glyphicon-ok-circle">');
        }
    });

    this._view.minusButton.click(function(){
        _this._model.setNumberOfGuests(_this._model.getNumberOfGuests() - 1);
    });



}

