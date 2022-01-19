import Table from "./createTable.js";
import { columns, data } from "./tableData.js";

const table = new Table({
  columns: [...columns],
  data: [...data],
});
const app = document.getElementById("app");
table.render(app);
