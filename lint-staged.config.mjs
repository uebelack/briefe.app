// Format every supported staged file, then lint only the app/components sources
// (matching the scope of `pnpm lint`). Commands within the array run sequentially,
// so oxfmt --write always completes before oxlint reads the files.
const isLintable = (file) => /(^|\/)(app|components)\//.test(file);

export default {
  "*.{js,mjs,jsx,ts,tsx,mts,cts,css}": (files) => {
    const tasks = [`oxfmt --write ${files.join(" ")}`];
    const sources = files.filter(isLintable);
    if (sources.length > 0) {
      tasks.push(`oxlint ${sources.join(" ")}`);
    }
    return tasks;
  },
};
