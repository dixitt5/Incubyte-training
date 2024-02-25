# notes

- exchange of services
- expectation is that we learn new technologies
- shortcuts, key promoter, git

# agile

- open to changes
- meetings
- frequent releases
- feedback
- daily scrum meetings
- team centric
- incremental development
- delivering value continuously
- people over processes
- it is a methodology, so can be changed according to people you are working with
- responding to change over following a plan
- customer collaboration over contract negotiation

# incremental development

- small changes
- take feedback and keep looking back to old code so that we can improve it and add new features
- iterative development

# iterations

- 2 weeks
- day1 - iteration planning
- day5 - refinement of backlogs
  - finding new details for backlog items
- day14 - retrospective
  - what went well
  - what went wrong
  - what can be improved
- kai zen - improvement
- 1 kaizen in one iteration -> better tracking

# lead time

- time taken from the time a task is started to the time it is completed
- in minutes

# throughput

- number of tasks completed in a given time

# kanban way vs scrum way

# estimation

- a balance bw accuracy and precision
- range is better than fixed numbers
- estimates are better when in relative to previous tasks and their estimates
- estimates make more sense when they are done upfront and not in the middle of the task or towards the end of it

# best practises

- class names (Year -> YearShould)
- passing in constructor (year has a representation)
- method names (boolean -> isLeap)
- live templates for assert and test
- fluid tests -> assertJ
- proper naming in demos as well

# comments

- regex
- exceptional cases
- follow specific order of methods in the code
- javadocs (documentation)
- legal notice, compliance
- todo
- consequences
- for why (in case of exceptions), not for what

- method name and test names should be enough docs

- bad comments
  - redundant
  - not evolve with time
  - misplaced
  - commented code
  - too many comments
  - misleading
  - journal comments
  - too obvious comments
  - position marker
  - debugging comments

# formatting

- consistent
- convention
- readability

# variable

- close to where they are used

# catching bugs

- development
  - tdd
- build
- qa
- production

- as we go on further, the time of fixing bugs increases

# right definition of time

- time it takes to code -> wrong definition of time
- shipping product which can be used without bugs -> right definition of time

# upcoming

- pairing
- team topology
- devex
- mocking
- refactoring
- testing with zombies

# books

- clean code by robert c martin
- java by comparison
- tidy first java
- working effectively with legacy code

- clean agile

# homework

## books to read

- clean series
- accelerate book
- state of devops report from google
- devex paper
- space paper

# shortcuts

- ctrl alt n
- ctrl shift m - method
- ctrl shift p - parameter

# developer experience (devex)

- free food, transport services etc are the old ways, are not effective
- devex is about making the life of a developer easier
- things that work are: collaboration, tools, documentation etc
- 3 dimensions of devex
  - feedback loop
  - flow state
  - cognitive load
- devex is to improved so that the entire team can perform better without having to worry about the tools and the environment

# feedback loop

- open to feedback
- quick feedback
- constructive and specific feedback

- tests for faster feedback
- cicd pipeline

  - ci stages

    1. build
    2. tests
    3. security checks
    4. deployment to different environments

  - max 10-15 minutes for ci

- wip should be minimum
- lead time for a change should be minimum
- code review and pr reviews time should be minimum

# flow state (state of being in your work)

- documentation should be good
- nothing is in between you and your work
- no context switching
- you and your work become one

- how to get ot flwo state

  - knowledge of tools
  - knowledge
  - no context switching

- productivity comes in chunks of 20-30 minutes (pomodoro)
- batching meetings before of after lunch (or certain time), so there are no interruptions in the middle of the work

- lenses of flow state:
  - personal
    - code works, test cases pass
  - team productivity
    - deployed does not mean released
  - market productivity
    - done something which was done in longer time before is now done faster. eg: AI

## book

- goal

# cognitive load

- dont jump to easy changes, make the change easy
- make the code easy to understand and handle complexity at the time you encounter it, instead of for now making the easy change
- time to takes to understand the code should be minimum

# bad team cultures

- not team centric (my work is done, i wont help further)

# unit tests practises

- not want to interact with outside system

  - take long time to interact
  - directory can change
  - file permission

- working with something outside of our system -> DI

# SEAM

# types of tdd

- mockist
- londonton
- detroit
- classist

# E shaped knowledge

# ding an sich

- one in itself
- communication is part of your ding an sich
  - CBEL

### roles

- dev
- qa
- platform
- manager/lead
- product analyst
- ui/ux

# devOps topologies

# brook's law

# conway's law

- system design = system communication structure

# inverse conway's law

- make the team structure as per what you want the system design to be

# testing zombies

# refactoring

# outside in

# dhh/joel

- in running system, we should add new h/w, instead of wasting time on optimizing the old one by dev

# contract test

# reach group activity

## books

- software engineering in google
- sre at google

- mythical man month

# java by comparison improvements

- Static Analysis

  - better variable names
  - extract method
  - extract related variables to a class (combine similar fields are extract them to a class)
  - avoid negations
  - avoid nested if else
  - more indentations increase cognitive complexity (need to know more context)
    - max 2 levels of indentation
    - extract the deepest level of indentation to a method (all the needed params for the method will be available at that level)
    - write test for legacy code:
      - start with shallowest level of indentation
      - easier to test
  - guard clauses
    - guards the logic below it (eg: early return)
  - move method
    - vs extract method
  - enums instead of magic numbers
  - remove commented code
  - structural changes first, then behavioural changes
  - reduce parameters
  - remove useless comments
  - avoid nested ternary operators
  - dont specify logic inside method parameters
  - extracting conditional to a method

- ResultData

  - try catch

- tests should be simple, extracting methods in tests should be done carefully, as they must also be tested for functionality

- length of varible directly proportional to the scope of variable
- if the variable is far away from where it is used, it should have a longer name

# primitive obsession

# single responsibility principle

- method/class should have only one reason to change
- if a class has more than one reason to change, it should be split into multiple classes
- eg: render html invoice

# inline method

# DAMP - descriptive and meaningful phrases

# WET - write everything twice (before refactoring)

# SLAP - single level of abstraction principle

# n+1 problem

# hyrum's law

- as a system grows and more users depend on it, even the most obscure or unintended behaviors of the system become relied upon by someone. This can happen despite the creators' intentions or attempts to maintain consistency.
- Hashmap is supposed to be unordered, but if someone is using it as ordered by many people, then it becomes a problem
- Unit tests may not run in order, but if someone is using it in order

# screaming architecture

- directory structure, method and variable name should be domain specific

# exceptions

- keep throwing exceptions before the actual logic so that the debugging and

# try with resource

# immutable over mutable state

- dont use setters as much as possible
- use final and restrict access to object as much as possible

# pure functions

- no side effects
- same input, same output everytime

# command and query

# zombie test

- z - zero
- o - one
- m - many
- b - boundary
- i - interface
- e - exercise exception
- s - simple

# hw

- sonar cognitive complexity pdf paper

# future

- unsupported exceptions live template (create)
- fizzbuzz kata
- pairing techniques
- crud operation with outside in approach in micronaut/nestjs / whatever tech you are working on [later stage]
- 3 amigos video [https://cucumber.io/school/] (sign up and first video)
- open discussion (with narendra and akshay) [last session]
- guidelines and skill categories in handbook [Software Craftsperson Expertise Levels and Guidelines | Incubyte] (https://incubyte.co/handbook/software-craftsperson-expertise-levels-and-guidelines)

# be atleast l2 by the end of internship

- taking things to closure
- do consistently
- making impact

# quality

- be able to receive feedback and able to refine yourself
- be able to match what user is expecting from you
- in pairing itself, one of you is customer and other one is service provider. the provider can improve only when the customer is able to give feedback

# opportunities of feedback

- skills
- discipline
  - everyone holds everyone accountable
  - dont be late
  - interrupting each other
- conduct
- communication
- preparedness
  - eg: joining a call
  - dont be a silent listener
  - be active in the meeting
- appropriateness
  - eg: jokes

# REACH feedback

- R - real time
  - dont be waiting for the right time to give the feedback
  - dont let the feedback build up
- E - express intent
  - why you need to give the feedback
  - what is the purpose of the feedback
- A - actually happened (fact, feeling, need)
  - feedback for something that actually happened, instead of hearsay
  - not always about actual incident, but also about how you felt
- C - consequences
  - what happened because of the incident
  - what can be the impact
- H - help offered

  - how can the person improve
  - how can you help the person improve
  - to inquire, as in the right way. not to be condencending
  - if you give people solution, it may become offensive. you can lead them to the solution so they arrive at the solution themselves

- there can be gap between offering feedback and offering help. see if they could come to some solution
- you have to be humble while giving feedback
- dont make the feedback laughable. they can become defensive
- dont need to give feedback necessarily in the moment, if there is nothing
- you can acknowledge them if they start doing better after the feedback
- this is about giving the feedback in the right way

# inviting feedback

- ask for feedback
- be open to feedback. giving feedback is difficult. so be open to it
- be a listener and dont try to control the narrative

  - ask open questions instead of asking leading questions
  - dont keep preconceived notions

- dont defend yourself or explain yourself
- ask only clarifying questions
- dont make promises on the spot
- thank the feedback giver and mean it

# books

- refactoring by martin fowler

# feedback

- ask questions and express concerns
- better written communication
- expression in points, think before you actually speaking
