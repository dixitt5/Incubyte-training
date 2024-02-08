# No-Blame Root Cause Analysis

# Overview:

## What happened:

1. Symptoms:
    - If there is some issue while fetching the list of pokemons from Pokemon API, the list is not loaded on the home
      screen. Instead, a loading spinner is displayed on the screen endlessly.
2. Discovery of incident:
    - During the event of outage in the Pokemon API, or during improper call to the API from the application, this
      incident can occur
3. Is this an active incident?
    - Yes. This problem still exists in the application

## What is the impact: <Sev3>

1. _Who is impacted?_

    - The end user is affected here. Because of absence of proper handling of such error in the application, it can lead
      for user to endlessly wait for the pokemon list to load. This leads to bad user experience

2. _What does the impact look like?_

    - The user keeps on waiting for a response, as they are not informed of the actual error. Rather, the user is given
      the indication that the list is being loaded.

3. Was there work around?
    - We can handle HTTP error if the API call fails, so that the user is shown a proper response in case of such an
      incident

# Analysis:

## Root Cause:

1. _What was the root cause of the incident?_

    - API call was always assumed to be successful. Specific cases, like where the API call is failing, were not
      handled.
    - Instead, while the responses are being fetched from API, a loading spinner was shown to the user.
    - So, in case of any failure to fetch data from the API, the same loading spinner is shown to user endlessly, and
      the user is kept waiting, instead of seeing an error message

2. _Was there anything in the backlog that could have addressed the root cause?_

    - No

3. _Were there any errors that would have been indicative of this issue?_
    - In case of failed API call, the console shows HTTP error. This error was not handled properly in the application.

## Historical Context:

_**STILL NO BLAME**_

- The application relies on proper working and response from the public Pokemon API. So, if anything goes wrong with
  this API, the entire application and user experience is affected.
- If in the future this API is deprecated or faces outage then, the application will not be able to show any data to the
  end user

## What went well:

- Proper error handling was implemented in the application, and handling different types of responses from the API helps
  in making the application more robust.

## Other Open Action Items:

- Exploring the documentation of Pokemon API to understand its working and responses
- Writing tests to check different scenarios and communication with the API
