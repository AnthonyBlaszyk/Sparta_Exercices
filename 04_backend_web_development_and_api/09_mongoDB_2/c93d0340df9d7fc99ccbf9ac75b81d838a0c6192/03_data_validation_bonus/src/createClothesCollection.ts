import * as mongo from "mongodb";

export const sweaterProperties = {
  // write your sweater properties here
  required: ["_id", "name", "color", "category", "size"],
  additionalProperties: false,
  properties: {
    _id: { bsonType: "objectId" },
    name: {
      bsonType: "string",
      maxLength: 30,
      description: "must be a string and is required",
    },
    color: {
      bsonType: "string",
      maxLength: 15,
      description: "must be a string and is required",
    },
    category: {
      bsonType: "string",
      enum: ["sweater"],
    },
    size: {
      bsonType: "string",
      enum: ["XXS", "XS", "S", "M", "L", "XL", "XXL", "XXXL"],
      description: "must be a string listed in enum and is required",
    },
  },
};

export const shoesProperties = {
  // write your shoes properties here
  required: ["_id", "name", "color", "category", "size"],
  additionalProperties: false,
  properties: {
    _id: { bsonType: "objectId" },
    name: {
      bsonType: "string",
      maxLength: 30,
      description: "must be a string and is required",
    },
    color: {
      bsonType: "string",
      maxLength: 15,
      description: "must be a string and is required",
    },
    category: {
      bsonType: "string",
      enum: ["shoes"],
    },
    size: {
      bsonType: "int",
      minimum: 30,
      maximum: 50,
      description: "must be an int between 30 ans 50 and is required",
    },
    material: {
      bsonType: "string",
      enum: ["leather", "textile", "synthetic"],
      description: "must be a string listed in enum",
    },
  },
};

export const pantsProperties = {
  // write your pants properties here
  required: ["_id", "name", "color", "category", "size"],
  additionalProperties: false,
  properties: {
    _id: { bsonType: "objectId" },
    name: {
      bsonType: "string",
      maxLength: 30,
      description: "must be a string and is required",
    },
    color: {
      bsonType: "string",
      maxLength: 15,
      description: "must be a string and is required",
    },
    category: {
      bsonType: "string",
      enum: ["pants"],
    },
    size: {
      bsonType: "object",
      additionalProperties: false,
      required: "width",
      properties: {
        width: {
          bsonType: "int",
          minimum: 32,
          maximum: 46,
          description: "must be an int between 32 ans 46 and is required",
        },
        cut: {
          bsonType: "string",
          enum: ["slim", "skinny", "regular", "straight"],
          description: "must be a string listed in enum",
        },
      },
    },
  },
};

export const clothesValidator = {
  // write your validator here
  validator: {
    $jsonSchema: {
      bsonType: "object",
      additionalProperties: false,
      oneOf: [shoesProperties, pantsProperties, sweaterProperties],
    },
  },
};

export function createClothesCollection(db: mongo.Db): Promise<mongo.Collection> {
  return db.createCollection("clothes", clothesValidator);
}
