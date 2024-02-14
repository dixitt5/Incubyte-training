# ci
- instant feedback during integration, after code changes
- kind of like a checklist that lists all the things that are supposed to be working and app is always in a valid and deployable state
- the goal is to automate the process of testing and deploying the code
- if there is ci in place, then we can be confident that the software is deployable at any time
- eg: check build is working, tests are passing
- artifact - docker image, jar file, zip file, dist folder etc.
- (plan -> code ->) build -> test -> artifact

# cd (continuous delivery)
- automate the process of delivering the software to the production-ready environment for approval
- pushing code to staging/dev env, before pushing to production
- eg: load testing
- staging - exact replica of production
- dev -> staging 

# cd (continuous deployment)
- automate the process of deploying the software to the production, directly to the customer
- no wait for approval
- -> production (-> operate -> monitor)

# in github
- ci/cd is done using github actions
- resources.github.com/ci-cd
- runner system -> download the code and builds, tests

# github actions

- also has registry of actions
  - eg: actions/checkout@v2

- github/Actions 
  - 
- name
- on:
  - release:
    - types: [published]
- jobs
  - push-to-repository
    - runs-on: ubuntu-latest
    - steps
      - uses: actions/checkout@v2
      - name: push to repository
      - run: git config --global user.email=abc.gmail.com
      - with:
          token: ${{ secrets.GITHUB_TOKEN }}