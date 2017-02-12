angular
  .module("ClashApp")
  .factory("ConfigFactory",
    function($localStorage, $location) {
      let apiURL
      if (document.location.href.includes("herokuapp")) {
        apiURL = "https://pacific-bastion-75389.herokuapp.com";
        console.log("config - heroku");
      } else {
        apiURL = "http://localhost:8000/";
        console.log("config - local");
      };
      return {
        apiURL: apiURL
      }
    });
