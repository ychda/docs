# Docs

由 Viteress 生成。

[https://ychda.github.io/docs](https://ychda.github.io/docs)

## deploy.sh

```bash
if [ -d "./.git" ]; then
    git add --all
    git commit -m 'deploy'
    git push
else
    # rm -rf .git
    git init
    git add --all
    git commit -m 'deploy'
    # if 'error: remote origin already exists.'
    # git remote rm origin
    git remote add origin git@github.com:ychda/docs.git

    git push -f git@github.com:ychda/docs.git main:main
fi

```

----

## ref

```bash
echo "# docs" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:ychda/docs.git
git push -u origin main
```

```bash
rm -rf .git
git init
git add --all
git commit -m 'deploy'
# if 'error: remote origin already exists.'
git remote rm origin
git remote add origin git@github.com:ychda/docs.git

git push -f git@github.com:ychda/docs.git main:main
```
