export const parseTextToTask = str => str.split(' -d ')

export const getCurrentFolderName = (cwd, home) => {
  if (cwd != home) return cwd.split('/').splice(-1)[0]
}
