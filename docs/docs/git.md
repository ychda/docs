# git 命令

- 新建分支 
  `git branch main` 
- 切换分支 
  `git checkout main` 
- 新建并切换分支 
  `git checkout -b main` 
- 把 main 分支 合并到 master 分支   
  `git checkout master`  
  `git merge --no-ff main` 
- 以图表的方式查看分支 
  `git log --graph` 
- 查看当前仓库执行过的操作 
  `git reflog` 
- 修改上一次提交 
  `git commit --amend -m "commit-info"` 
- ~~合并最后两次提交记录~~ 
  `git rebase -i HEAD~2` 
- 设置远程仓库 
  `git remote add origin git@github.com:ychda/git-test.git` 
    `-u` 参数可以在推送的时候，将 origin 仓库的 master 分支设置为本地仓库当前分支的 upstream 。  
  `git push -u origin master`  
- 其他分支例如 main 分支推送到远程仓库 
  `git push -u origin main` 
- 从远程仓库 origin/gh-pages 获取至本地仓库 gh-pages 
  `git checkout -b gh-pages origin/gh-pages` 
- 删除分支 gh-pages 
  `git branch -d gh-pages` 
  强制删除使用 `git branch -D gh-pages`

# GibHub 命令

在 GitHub 中输入 `?` ，也就是 `Shift + /` 可弹出一个对话框，列出可用于该页面的键盘快捷键。 您可以使用这些键盘快捷键对站点执行操作，而无需使用鼠标导航。[GitHub Docs 使用帮助](https://docs.github.com/cn/get-started/using-github/keyboard-shortcuts)

