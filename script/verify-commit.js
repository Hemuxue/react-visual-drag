/* eslint-disable @typescript-eslint/no-require-imports */
const chalk = require('chalk')

const msgPath = process.env.HUSKY_GIT_PARAMS
const useEmail = process.env.GIT_AUTHOR_EMAIL

const msg = require('fs').readFileSync(msgPath, 'utf-8').trim()

console.log(msgPath)
console.log(useEmail)
