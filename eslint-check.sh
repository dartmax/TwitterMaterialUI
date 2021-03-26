#!/bin/bash
echo "Husky script was called!"
for file in $(env -i git diff --diff-filter=d --cached --name-only | grep -E '\.(js|jsx|ts|tsx)$')
do
  filepath=${file:9}
  ./node_modules/eslint/bin/eslint.js --config ".eslintrc.js" "$filepath" && tsc --project ./tsconfig.json --noEmit # we only want to lint the staged changes, not any un-staged changes
  if [ $? -ne 0 ]; then
    echo "ESLint or TypesScript checking failed on staged file '$file'. Please check your code and try again. You can run ESLint manually via npm run eslint and TS via tsc --project ./tsconfig.json --noEmit."
    exit 1 # exit with failure status
  fi
done