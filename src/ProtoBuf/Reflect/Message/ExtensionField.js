/**
 * Constructs a new Message ExtensionField.
 * @exports ProtoBuf.Reflect.Message.ExtensionField
 * @param {ProtoBuf.Reflect.Message} message Message reference
 * @param {string} rule Rule, one of requried, optional, repeated
 * @param {string} type Data type, e.g. int32
 * @param {string} name Field name
 * @param {number} id Unique field id
 * @param {Object.<string.*>=} options Options
 * @constructor
 * @extends ProtoBuf.Reflect.Message.Field
 */
var ExtensionField = function(message, rule, type, name, id, options) {
    Field.call(this, message, rule, type, name, id, options);
};

// Extends Field
ExtensionField.prototype = Object.create(Field.prototype);
