export default function (req, res, next) {
  const paths = ['/admin']
  const url = req.originalUrl

  if (url.match('/*/admin*/') || paths.includes(req.originalUrl)) {
    // Will trigger the "traditional SPA mode"
    res.spa = true
  }

  next()
}
