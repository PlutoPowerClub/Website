## TODO:

- Use JSON which is stored in Redux state.
  - NextJS Redux: [guide here](https://redux.js.org/usage/nextjs) and [here](https://blog.logrocket.com/use-redux-next-js/#creating-slice)
  - Use [Redux persist](https://blog.logrocket.com/persist-state-redux-persist-redux-toolkit-react/) to persist values between sessions.
- Connect solar api potential (at least stored json)
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
