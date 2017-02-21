angular
  .module("ClashApp")
  .factory("ConfigFactory",
    function($localStorage, $location) {
      let apiURL
      if (document.location.href.includes("local")) {
        apiURL = "http://localhost:8000/";
        console.log("config - local");
      } else {
        apiURL = "https://pacific-bastion-75389.herokuapp.com/";
        console.log("config - heroku");
        // apiURL = "https://pacific-bastion\-75389.herokuapp.com/";
        // console.log("config - heroku");
      };
      return {
        apiURL: apiURL
      }
    });
