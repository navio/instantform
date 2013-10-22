/**
 * QuestionController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {
    
 command: function(req, res) {
    
    Question.find().exec(function (err, question) {
    		
    		console.log(question);
    		if (err) return res.send(err,500);
    		

        //res.send('<p>some html</p>'+question[0].answer);
        

       res.view({'question': question});

/*
<% _.each(corndogs, function (corndog) { %>
    <li><%= corndog.name %></li>
    <% }) %>

*/

        //res.json(question);
    });
    
    

  },  


  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to QuestionController)
   */
  _config: {}

  
};
