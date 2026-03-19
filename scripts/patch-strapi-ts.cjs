#!/usr/bin/env node
/**
 * Patches @strapi/typescript-utils compile.js to skip compilation
 * when no tsconfig.json is found, instead of crashing with
 * "Debug Failure" on Node.js 22.
 */
const fs = require('fs')
const path = require('path')

const target = path.join(
  __dirname, '..', 'cms', 'node_modules',
  '@strapi', 'typescript-utils', 'lib', 'compile.js'
)

if (!fs.existsSync(target)) {
  console.log('patch-strapi-ts: compile.js not found, skipping')
  process.exit(0)
}

const original = fs.readFileSync(target, 'utf8')

if (original.includes('if (!configPath)')) {
  console.log('patch-strapi-ts: already patched')
  process.exit(0)
}

const patched = original.replace(
  'const configPath = getConfigPath(srcDir);',
  'const configPath = getConfigPath(srcDir);\n  if (!configPath) return;'
)

if (patched === original) {
  console.error('patch-strapi-ts: could not find target string to patch')
  process.exit(1)
}

fs.writeFileSync(target, patched)
console.log('patch-strapi-ts: patched compile.js to skip when no tsconfig')
