/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {
        email:{
          type: 'string'
        },
        username:{
          type: 'string'
        },
        firstName:{
          type: 'string'
        },
        lastName:{
          type: 'string'
        },
        isAdmin:{
          type: 'boolean',
          defaultsTo: false
        },
        active:{
          type: 'boolean',
          defaultsTo: false
        },
        getFullName: function() {
            return this.fullName || ((this.firstName || "") + (this.lastName ? " " + this.lastName : ""));
        },
        toJSON: function() {
            var obj = this.toObject();
            return {
              id: obj.id,
              username: obj.username,
              firstName: obj.firstName,
              lastName: obj.lastName,
              fullName: this.getFullName()
            }
        }
    }
};
