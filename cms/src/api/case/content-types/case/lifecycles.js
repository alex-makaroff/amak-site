"use strict";

const COMPONENT_MAP = {
  website: "case.website-details",
  design: "case.design-details",
};

function validateTypeDetails(data) {
  const { type, details } = data;
  if (!type || !details) return;

  if (!Array.isArray(details) || details.length !== 1) {
    throw new Error(
      `Case must have exactly 1 details component, got ${details ? details.length : 0}`
    );
  }

  const component = details[0];
  const expected = COMPONENT_MAP[type];
  if (!expected) {
    throw new Error(`Unknown case type: ${type}`);
  }

  if (component.__component !== expected) {
    throw new Error(
      `Case type "${type}" requires component "${expected}", but got "${component.__component}"`
    );
  }
}

module.exports = {
  beforeCreate(event) {
    validateTypeDetails(event.params.data);
  },
  beforeUpdate(event) {
    if (event.params.data.details !== undefined || event.params.data.type !== undefined) {
      validateTypeDetails(event.params.data);
    }
  },
};
