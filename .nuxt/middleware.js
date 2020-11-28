const middleware = {}

middleware['admin-only'] = require('..\\middleware\\admin-only.js')
middleware['admin-only'] = middleware['admin-only'].default || middleware['admin-only']

middleware['guest'] = require('..\\middleware\\guest.js')
middleware['guest'] = middleware['guest'].default || middleware['guest']

export default middleware
