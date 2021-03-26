#!/bin/bash

for file in $(env -i git diff --diff-filter=d --cached --name-only | grep -E '\.(scss)$')
do
  filepath=${file:9}
  ./node_modules/stylelint/bin/stylelint.js --config ".stylelintrc" "$filepath" # we only want to lint the staged changes, not any un-staged changes
  if [ $? -ne 0 ]; then
    echo "Stylelint failed on staged file '$file'. Please check your code and try again."
    exit 1 # exit with failure status
  fi
done