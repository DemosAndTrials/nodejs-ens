import { Router } from 'express';
const routes = new Router();

// use res.render to load up an ejs view file

/**
 * Demo pages
 */

// index page 
routes.get('/', function(req, res) {
	res.render('pages/index');
});

// about page 
routes.get('/about', function(req, res) {
	res.render('pages/about');
});

/**
 *Event Notification Service (ens) routes
 *https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/ens-get-started.htm
 */

/**
* Callback url to receive event notifications.
* https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/ens-retries-suspensions.htm
 */
routes.post('/ens/callback1', function(req, res) {
    console.log("*** callback: ", req.body);
    // TODO logic here
	return res.status(200).json(req.body);
});

routes.post('/ens/callback2', function(req, res) {
  console.log("*** callback: ", req.body);
  // TODO logic here
return res.status(200).json(req.body);
});

routes.post('/ens/callback3', function(req, res) {
  console.log("*** callback: ", req.body);
  // TODO logic here
return res.status(200).json(req.body);
});


export default routes;