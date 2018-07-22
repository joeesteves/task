export const parseTextToTask = str => str.split(' -d ')

export const getCurrentFolderName = (cwd, home) => {
  if (cwd != home) return humanize(cwd.split('/').splice(-1)[0])
}

export const checkToken = () => {
  if (!process.env['TODOIST_TOKEN']) {
    console.log('TODOIST_TOKEN environment variable is missing')
    process.exit(1)
  }
}

export const isEmpty = (ary) => ary.length == 0
  
const humanize = (name) => name[0].toUpperCase() + name.slice(1)

