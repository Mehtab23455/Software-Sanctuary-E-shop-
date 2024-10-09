const session = require("express-session");
const { get } = require("../routes/auth.routes");

function getSessionData(){
  const sessionData = req.session.flashedData;

  req.session.flashData = null;

  return sessionData;

}
function flashDataToSession(req, data, action){
  req.session.flashedData = data;
  req.session.save(action);
}

module.exports = {
  getSessionData: getSessionData,
  flashDataToSession: flashDataToSession
}