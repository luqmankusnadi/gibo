import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Dialog from "primevue/dialog";
import Button from "primevue/button";
import Panel from "primevue/panel";
import Card from "primevue/card";
import Chips from "primevue/chips";
import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

var AWS = require("aws-sdk");
AWS.config.update({
  region: "ap-northeast-1",
  endpoint: "https://dynamodb.ap-northeast-1.amazonaws.com"
});

var docClient = new AWS.DynamoDB.DocumentClient();

var table = "GiboCharacter";

var name = "Amber";

var params = {
  TableName: table,
  Key: {
    Name: name
  }
};

docClient.get(params, function(err, data) {
  if (err) {
    console.error(
      "Unable to read item. Error JSON:",
      JSON.stringify(err, null, 2)
    );
  } else {
    console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
  }
});

createApp(App)
  .use(router)
  .component("PvDialog", Dialog)
  .component("PvButton", Button)
  .component("PvPanel", Panel)
  .component("PvCard", Card)
  .component("PvChips", Chips)
  .mount("#app");
