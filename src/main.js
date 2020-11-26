import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Dialog from "primevue/dialog";
import Button from "primevue/button";
import Panel from "primevue/panel";
import Card from "primevue/card";
import Chips from "primevue/chips";
import AutoComplete from "primevue/autocomplete";
import Dropdown from "primevue/dropdown";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

createApp(App)
  .use(router)
  .component("PvDialog", Dialog)
  .component("PvButton", Button)
  .component("PvPanel", Panel)
  .component("PvCard", Card)
  .component("PvChips", Chips)
  .component("PvAutoComplete", AutoComplete)
  .component("PvDropdown", Dropdown)
  .component("PvDataTable", DataTable)
  .component("PvColumn", Column)
  .mount("#app");
