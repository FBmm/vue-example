module.exports = function (router) {
  const tokens = {
    admin: {
      token: 'admin-token'
    },
    editor: {
      token: 'editor-token'
    }
  }
  router.post('/user/login', (req, res) => {
    const { username } = req.body
    // console.log(req)
    console.log(req.body)
    const token = tokens[username]
    res.send({
      code: 0,
      data: token
    });
  })
}
