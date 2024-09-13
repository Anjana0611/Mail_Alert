module.exports= (app) => {
  
    const Monitor = require('../controllers/Monitor.contoller');

    app.post('/email_alert',Monitor.email_alert);

}


