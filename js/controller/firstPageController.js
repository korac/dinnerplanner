/**
 * Created by Kristijan on 24.2.2015..
 */
var FirstPageController = function(view, model){

    this._view = view;
    this._model = model;

    var _this = this;

    _this._view.createDinner.click(function(){
        _this._view.hide();
    });
}