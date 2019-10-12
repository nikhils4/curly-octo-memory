const router = require("express").Router();

router.get( '/', (request, response) => {
	response.status(200).json({
		message : "This is the default route for the Smile Again API"
	}) 
})

router.get( '/team', (request, response) => {
	response.status(200).json({
		message : "The API is built by Nikhil"
	})
})

module.exports = router;