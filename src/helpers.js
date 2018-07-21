export const parseTextToTask = str => str.split(' -d ')

export const getCurrentFolderName = (cwd, home) => {
  if (cwd != home) return cwd.split('/').splice(-1)[0]
}


export const checkToken = () => {
  if(!process.env["TODOIST_TOKEN"]) {
    console.log("TODOIST_TOKEN environment variable is missing")
    process.exit(1)
  }
}