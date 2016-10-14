'use strict';

function Lord(name, properties) {
  Person.call(this, name, properties);
}
Lord.prototype = Object.create(Person.prototype);
Lord.prototype.constructor = Lord;


