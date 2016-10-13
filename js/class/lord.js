'use strict';

function Lord(name, properties) {
  // Call the parent constructor, making sure (using call)
  // that "this" is set correctly during the call
  Person.call(this, name);

  // Initialize our specific properties
  this.properties = properties;
}
Lord.prototype = Object.create(Person.prototype);

// Set the "constructor" property to refer to Student
Lord.prototype.constructor = Lord;