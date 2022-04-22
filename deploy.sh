if [ -d "./.git" ]; then
    git add --all
    git commit -m 'deploy'
#    git push --set-upstream origin master
    git push -u origin master
else
    # rm -rf .git
    git init
    git add --all
    git commit -m 'deploy'
    # if 'error: remote origin already exists.'
    # git remote rm origin
    git remote add origin git@github.com:ychda/docs.git

    git push -f git@github.com:ychda/docs.git master:master
fi
