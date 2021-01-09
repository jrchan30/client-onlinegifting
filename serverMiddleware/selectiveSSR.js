export default function (req, res, next) {
  const paths = [
    '/admin',
    // '/profile',
    // '/liked-items',
    // '/boxes',
    // '/carts',
    // '/transactions',
  ]
  const url = req.originalUrl
  console.log(url)

  if (paths.includes(req.originalUrl) || url.match('/*/admin*/')) {
    // Will trigger the "traditional SPA mode"
    res.spa = true
  }

  next()
}
