module.exports = (err, req, res, next) => {
  console.error(err.message, err)
  res.status(err?.statusCode || 500).json(err)
}
