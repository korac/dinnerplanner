/**
 * Created by Kristijan on 24.2.2015..
 */
var FirstPageView = function(container,model){

    model.addObserver(this);

    this._model = model;
    this._container = container;

    this.createDinner = this._container.find("#createDinner");

    this.update = function() {

        this.hide = function () {
            this._container.addClass("hide");
        }

    }

}