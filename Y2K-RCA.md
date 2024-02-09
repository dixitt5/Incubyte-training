<!-- ## Tracking Jira Tickets: -->

## Y2K RCA

### Owner: Dixit Tilaji

## Overview:

### What happened:

This should be a description of what we saw and what happened. We’re not trying to root cause at the moment.

1. What are the symptoms of the incident?

- Symptoms include unexpected system downtime and inability to access certain features or functionalities.

2. How did we discover it?

- The incident was discovered through monitoring tools and user reports.

3. Is this an active incident?

- No, the incident is not currently active.

## What is the impact: (Sev1)

- We want to record the incident level, how it affects our SLAs, number of failed requests, users affected, dev time to fix. The idea here is to give an accurate understanding of the impact of the event backed by data.

1. Who is impacted?

- All users accessing the affected system are impacted and the system is currently unavailable.

2. What does the impact look like?

- The impact includes increased response times, loss of data, disruption to workflows and processes.

3. Was there a workaround?

- No, there is currently no workaround available.

## Timeline

This is a chronological list of events that happened during the incident. This is a great place to put in the times of when things happened, who was involved, and what was done. This is a great place to put in the times of when things happened, who was involved, and what was done.

- 10:00 AM - Incident discovered by monitoring tools and user reports.
- 10:15 AM - Incident response team assembled and began investigation.
- 10:30 AM - Root cause identified as database schema update not properly propagated across all nodes.
- 11:00 AM - Database schema update propagated across all nodes and system restored to normal functionality.

# Analysis:

## Root Cause:

Any and all pertaining information to understand what the root cause of the issues. Please include as much relevant details here, be as precise and nerdy as possible.

1. _What was the root cause of the incident?_

- The root cause of the incident was identified as a database schema update that was not properly propagated across all nodes, leading to inconsistencies and failures in data retrieval.

2. _Was there anything in the backlog that could have addressed the root cause?_

- Yes, there were tasks related to improving database synchronization and schema propagation in the backlog that could have mitigated this issue.

3. _Were there any errors that would have been indicative of this issue?_

- Yes, there were database connection errors and inconsistent data retrieval errors logged prior to the incident.

## Historical Context:

_**STILL NO BLAME**_

_It’s super useful to know how we ended up in this situation and whether we made past decisions that were the right call at the time, but lead to the current situation._

## What went well:

_Too often on incidents we focus only on what went wrong. It helps to also note things that went well and note any actions that helped reduce time to fix, time to diagnose, time to failure, etc…_

- Incident response team was able to quickly identify the root cause of the issue and restore normal functionality within an hour.
- Monitoring tools and user reports were able to quickly identify the issue and alert the incident response team.

## Other Open Action Items: 

_Non-blocking open action items that are needed to follow up for this incident. Any tooling we need to create, documentation that needs to be updated, more thorough fixes that need to be done, or more tests to be written?_

- Create a task to implement automated database schema propagation across all nodes to prevent future inconsistencies.
- Create a task to improve database connection error logging and monitoring.
