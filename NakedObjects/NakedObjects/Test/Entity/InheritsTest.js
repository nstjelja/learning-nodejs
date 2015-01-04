var assert = require('assert');
require('../../Module/Entity/Inherits.js');

describe('Inhertiance test', function() {
    it('Base object should inherit from parent object', function () {
        function Mammal() {
        }
        
        Mammal.Property("NumberOfApendages");
        
        function Dog(){
            this.NumberOfApendages = 4;
        }

        Dog.Inherit(Mammal);
        Dog.Property("Breed", "Mutt");

        var mutt = new Dog();
        
        assert.ok(mutt instanceof Dog);
        assert.ok(mutt instanceof Mammal);
        assert.equal("Mutt", mutt.Breed);
        assert.equal(4, mutt.NumberOfApendages);

    });
})
