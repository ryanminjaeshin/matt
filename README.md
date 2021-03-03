## What we're looking for in this exercise...

**Make a working UI that fulfills requirements.**
Working software is what we deliver, if it doesn't work the rest is irrelevant.

**Communicate to your interviewer what approach you're taking at any given time.**
We communicate frequently to ensure the team is working together.

**While you work, call out any optimizations you could foresee happening in the future.**
We're not fans of premature optimization, but showing us you know where to go for optimizations is valuable.

## Instructions

Create a chart by following the steps below:

**1. Update the UI to resemble `step1.png` using the sample data.**
Each chart bar must have its name below it and its value above it. The sample data is in `data.js`.

**2. Implement the filter functionality.**
Allow the user to filter out chart bars with a value below the filter input's value. The bars that are filtered out are designated by their red color. (See `step2.png`.)

**3. Add the average chart bar.**
Add an additional chart bar that represents the average of all chart bars which pass the filter (the light blue ones). The average bar must update as the filter value changes. It is distinguished by its darker blue color. (See `step3.png`.)

**4. Simulate a network request that retrieves the sample data through the use of the `fetchData`.**
`fetchData` is a small custom function in `fetchData.js` that simulates a `fetch` API request for the sample data. Replace the data imported from `data.js` with the data received from `fetchData`.

## To Start App, Please Run Following Scripts
### npm run server
### npm start
