async function Logout(req, res) {

  res.clearCookie('token')
  res.json({
    message: "Token Deleted Sucssesfully"
  })
}

export default Logout;