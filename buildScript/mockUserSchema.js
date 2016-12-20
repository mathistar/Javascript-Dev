export const schema = {
  "type": "object",
  "properties": {
    "users": {
      "type": "array",
      "minItems": 20,
      "maxItems": 25,
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "number",
            "unique": true,
            "minimum": 1
          },
          "firstName": {
            "type": "string",
            "faker": "name.firstName"
          },
          "lastName": {
            "type": "string",
            "faker": "name.lastName",
          },
          "email": {
            "type": "string",
            "faker": "internet.email",
          },
          "phone": {
            "type": "string",
            "format": "phone",
          }
        },
        required: ['id', 'firstName', 'lastName', 'email', 'phone']
      }
    }
  },
  required: ['users']
};
