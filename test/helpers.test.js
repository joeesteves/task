import { parseTextToTask, getCurrentFolderName, isEmpty } from '../src/helpers'

test('#String to content and due_string', () => {
  expect(parseTextToTask("hola -d mañana")).toEqual(["hola", "mañana"])
})

test('#getCurrentFolderName', () => {
    expect(getCurrentFolderName('home/user/myFolder', 'home/user')).toEqual('MyFolder')
    expect(getCurrentFolderName('home/user', 'home/user')).toBe(undefined)
})

test('#isEmpty', () => {
  expect(isEmpty([])).toBeTruthy()
})