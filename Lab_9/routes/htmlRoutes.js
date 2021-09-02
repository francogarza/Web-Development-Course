// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");

// ===============================================================================
// ROUTING
// ===============================================================================

var tableArray = require("../data/tableData");
var waitData = require("../data/waitinglistData");

module.exports = function(app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------

  app.get("/tables", function(req, res) {
    res.render(path.join(__dirname, "../views/pages/tables.ejs"),{tableArray,waitData});
  });

  app.get("/reserve", function(req, res) {
    res.render(path.join(__dirname, "../views/pages/reserve.ejs"));
  });

  // If no matching route is found default to home
  app.get("*", function(req, res) {
    res.render(path.join(__dirname, "../views/pages/home.ejs"));
  });
};
