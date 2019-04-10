import * as mkdirp from 'mkdirp'
import { resolve } from 'path'
import { writeFile, readFile, exists } from 'fs'
import { promisify } from 'util'

export const dbAbsolutePath = resolve(__dirname, './db.json')
export const mkdirpAsync = promisify(mkdirp)
export const existsAsync = promisify(exists)
export const readFileAsync = promisify(readFile)
export const writeFileAsync = promisify(writeFile)

export async function readFileAsyncJson(filePath: string) {
  const file = await readFileAsync(filePath)
  const asString = file.toString('utf8')
  const obj = JSON.parse(asString)
  return obj
}

export async function writeFileAsyncJson(filePath: string, value: any) {
  const asString =
    typeof value === 'string' ? value : JSON.stringify(value, undefined, 2)
  await writeFileAsync(filePath, asString)
}

export function toDir(filePath: string) {
  const pieces = filePath.split('/')
  pieces.pop()
  return pieces.join('/')
}

export async function ensureFile(filePath: string) {
  const doesFileExist = await existsAsync(filePath)
  if (doesFileExist === false) {
    const dir = toDir(filePath)
    mkdirpAsync(dir)
    await writeFileAsync(filePath, '{}')
  }
}
