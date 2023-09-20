import {readdirSync} from "fs";

export const routeRender = (app) => {
  console.log("Loading routes from: " + app.settings.routePath);
  readdirSync(app.settings.routePath).forEach(function (file) {
    var route = app.settings.routePath + file.substr(0, file.indexOf("."));
    console.log("Adding route:" + route);
    require(route)(app);
  });
};
