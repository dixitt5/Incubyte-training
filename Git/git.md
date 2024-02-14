# Git
- VCS
- Developed by Linus Torvalds
- cloning gives entire history and all branches
- stores snapshot of the entire state of the project, 
- adds data, almost never deletes stuff
- integrity hash -> for differentiating b/w different commits
- states
  - commited, modified, staged
  - commited -> stores in .git memory (db)
  - 
  - staging == index == cached
- config
  - global --global
  - user --system
  - project (go into directory)
- commit 
  - log your changes
  - message is always required
- git remote show origin
- git switch
- git checkout 
- git stash
  - temporary storage
  - save to some storage
  - stack
  - apply and pop
- git checkout vs git switch

- zsh plugins
  - git
  - zsh-autosuggestions
  - zsh-syntax- higlightig
  - z
  - sudo
  - fzf
- git revert
  - adds a commit to undo the commit 

# tag
- pointer to some commit and all changes up until that commit