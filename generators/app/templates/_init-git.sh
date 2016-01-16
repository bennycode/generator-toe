#!/bin/sh

git add .
git commit -m "Project setup"
git remote add origin git@github.com:<%= setup.organizationName %>/<%= setup.projectName %>.git
git push -u origin master
