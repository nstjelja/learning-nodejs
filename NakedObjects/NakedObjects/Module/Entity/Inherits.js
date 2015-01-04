Object.prototype.Inherit = function (baseClass) {
    var constructor = this.prototype.constructor;
   
    this.prototype = new baseClass();
    this.prototype.base = baseClass.prototype.constructor.bind(this.__proto__);
    this.prototype.constructor = constructor;
};

Object.prototype.nakedObjectProperties = [];



Object.prototype.Property = function (property, defaultValue) {
    if (property == undefined || property == null || property == "") { 
        throw new Error("Property must be string");
    }

    if (this.prototype.nakedObjectProperties.filter(function (i) { return i == property}).length == 0) {
        this.prototype.nakedObjectProperties.push(property);
    }

    

    var hiddenName = "m_" + property;
    var self = this.prototype;
 
    this.prototype.__defineGetter__(property, function () {
        return self[hiddenName];
    });

    this.prototype.__defineSetter__(property, function (value) { 
        self[hiddenName] = value;
    });

    this.prototype[property] = defaultValue == undefined ? null : defaultValue;

}