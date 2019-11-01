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
 */
routes.post('/ens/callback', function(req, res) {
    console.log("*** callback: ", req.body);
	return res.status(200).json(req.body);
});

/**
* Registers a new callback to receive event notifications.
 */
routes.post('/ens/register', function(req, res) {
  console.log("*** register: ", req.body);
return res.status(200).json(req.body);
});

/**
* Verifies a callback so that it can receive notifications.
 */
routes.post('/ens/verify', function(req, res) {
  console.log("*** verify: ", req.body);
return res.status(200).json(req.body);
});

export default routes;