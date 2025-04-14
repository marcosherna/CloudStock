// helpers/schemaUtils.js

function omitFields(schema, fields) {
  const result = { ...schema };
  fields.forEach((field) => delete result[field]);
  return result;
}

function pickFields(schema, fields) {
  const result = {};
  fields.forEach((field) => {
    if (schema[field]) result[field] = schema[field];
  });
  return result;
}

function makeOptional(schema, fields) {
  const result = { ...schema };

  fields.forEach((field) => {
    if (result[field]) {
      const { exists, ...rest } = result[field];
      result[field] = {
        ...rest,
        optional: true,
      };
    }
  });

  return result;
}

function mergeSchemas(...schemas) {
  return Object.assign({}, ...schemas);
}

function omitValidators(schema, fields, validators) {
  const result = { ...schema };

  fields.forEach((field) => {
    if (result[field]) {
      result[field] = { ...result[field] };
      validators.forEach((validator) => {
        delete result[field][validator];
      });
    }
  });

  return result;
}

module.exports = {
  omitFields,
  pickFields,
  makeOptional,
  mergeSchemas,
  omitValidators,
};
