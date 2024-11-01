## TODO:

- Top of dashboard should have explanation of the idea - tagline next to pluto explaining what it is. Like "Join 247 neighbors in saving energy & money" with Pluto! .

- Login page

  - nextjs login example learn how to

  user journey after that:
  -How to join the individual households into an area (Persons A, B, and C have their own login with their own data and data on community A, Persons D, E, F have their own login and data and data on community B)

- Dashboard

  - think about whether to have energy generated from solar on there, or just in terms of use (e.g. percentage of use is solar)
    -and whether to have energy sold or whether this is just abstracted

- Community Cashback

  - improve this so it has like a thermometer on its side thing for a goal, and then link to another page to vote and set what that goal is.
  - Page:
    Building A Solar Community

    Choice of projects:

    Solar panels for local school

    Solar panels for my neighbour

    Solar panel farm

    Solar panels for a community project (community garden/food bank/playground)

    Make your own solar project

    Each project has a money goal (three options: A) a boilerplate estimate B) a tool to help estimate by the user inputting data C) the user can input their own estimate)

    An estimate of goal completion time (changed as more data comes in)

    You can vote on projects to complete as a community

    Links to businesses that will build these projects on a discount (they buy into the scheme with Octopus)

    Links to government website on solar grants

- Use JSON which is stored in Redux state.
  - Keep going through Redux essentials tutorial from here: [text](https://redux.js.org/tutorials/essentials/part-3-data-flow)
  - then NextJS Redux: [guide here](https://redux.js.org/usage/nextjs) and [here](https://blog.logrocket.com/use-redux-next-js/#creating-slice)
  - and use [Redux persist](https://blog.logrocket.com/persist-state-redux-persist-redux-toolkit-react/) to persist values between sessions.
- Connect solar api potential (as stored json for now)
- Use to change the value of community energy chart json (at this point this will be stored in state)
- Work out how to integrate these python functions (see ts rewrite in ideas folder):
  - If you go to https://github.com/PlutoPowerClub/LibreGrid/blob/main/LibreGrid/core.py, these are the functions one could use to get data for the dashboard. More context is however in the notebook I used to write these, https://github.com/PlutoPowerClub/LibreGrid/blob/main/nbs/00_core.ipynb , there's an example workflow on how to set up the database. That might be nice for pulling data.
  - Let me know what you think and what other functionalities I could add to the database so that it can support some of the plots
  - I have to admit though... can't say all this stuff is very thoroughly tested... (dw about for now)
- Usage - dummy data or phil’s meter, work on connecting up

**N.B. to edit deployed site have to sync fork in jack repo**

## (later) TODO:

- Edit map
  - add map controls like on brutalist map
  - some of buildings should be green on start on map - ones with solar.
  - use live building data instead of geojson - think about how to get this with geojson and
  - edit into separate components.
  - use next js server action when update data with click on map ([see here](https://www.youtube.com/watch?v=O94ESaJtHtM))
- Grab weather forecast from api endpoint.
- Community cashback could be a slider, like gameshow thing, or like to total value
- Fix deploy on cloudflare - plutopower.app not working currently.
- Community page full height like dashboard screen
- Styling

  - make full size on desktop
  - make mobile friendly, start with iphone se and work up.

- Tips Page
  - Could include:
    - When to store energy (bar graph) (changes with more data)
    - When to sell energy (bar graph) (changes with more data)
