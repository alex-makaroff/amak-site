#!/usr/bin/env node
import { readFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
import { execSync } from 'child_process'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')

// Load root .env (don't override existing env vars)
try {
  const content = readFileSync(resolve(root, '.env'), 'utf8')
  for (const line of content.split(/\r?\n/)) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#')) continue
    const eq = trimmed.indexOf('=')
    if (eq === -1) continue
    const key = trimmed.slice(0, eq).trim()
    const val = trimmed.slice(eq + 1).trim()
    if (!(key in process.env)) process.env[key] = val
  }
} catch (e) {
  console.error('Warning: could not read root .env:', e.message)
}

const cmd = process.argv[2] || 'start'
const cmsDir = resolve(root, 'cms')
const strapiModule = resolve(cmsDir, 'node_modules', '@strapi', 'strapi', 'bin', 'strapi.js')
execSync(`"${process.execPath}" "${strapiModule}" ${cmd}`, {
  cwd: cmsDir,
  stdio: 'inherit',
  env: process.env,
})

