# RESTCONF UI

This repository contains an application that was built to provide a front end interface to a Cisco router running the Restconf API.

Due to not owning the endpoint myself, I replicated the data returned from the Restconf API in the `MockData` folder. The server returns the replicated data, instead of querying the API directly. All original routes used to query the API have been commented out in the `routes/apiRouter.js` and can be referenced there.

The application can be viewed [here.](https://www.google.com)

UI - Built with React.js & Bootstrap

Backend - Built with Node.js and Express.js
