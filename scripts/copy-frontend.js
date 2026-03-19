#!/usr/bin/env node
import { cpSync, mkdirSync, rmSync, existsSync, readdirSync } from 'fs'
import { resolve, dirname, basename } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')
const dist = resolve(root, 'dist')
const pub = resolve(root, 'cms/public')

if (!existsSync(dist)) {
  console.error(`Error: ${dist} not found. Run 'vite build' first.`)
  process.exit(1)
}

mkdirSync(resolve(pub, 'uploads'), { recursive: true })

const assetsDir = resolve(pub, 'assets')
if (existsSync(assetsDir)) rmSync(assetsDir, { recursive: true })

// Copy everything from dist to cms/public
for (const entry of readdirSync(dist)) {
  cpSync(resolve(dist, entry), resolve(pub, entry), { recursive: true })
}

console.log(`Frontend built and copied to cms/public (uploads preserved).`)
