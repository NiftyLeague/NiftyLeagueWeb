module.exports = {
  // Type check TypeScript files
  '**/*.(ts|tsx)': () => 'yarn tsc --noEmit',
  // Lint then format TypeScript and JavaScript files
  '**/*.(ts|tsx|js)': filenames => [
    `next lint --fix --file ${filenames.map(file => file.split(process.cwd())[1]).join(' --file ')}`,
    `yarn prettier --write ${filenames.join(' ')}`,
  ],
  // Format MarkDown and JSON
  '**/*.(md|json)': filenames => `yarn prettier --write ${filenames.join(' ')}`,
};
