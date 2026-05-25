const app = require("./src/app");
const chalk = require("chalk");
const figlet = require("figlet");
const boxen = require("boxen");
const gradient = require("gradient-string");

const env = require("./src/config/env");

const PORT = env.PORT;

app.listen(PORT, () => {
  console.log(
    gradient.pastel.multiline(
      figlet.textSync(env.APP_NAME || "NODE API", {
        horizontalLayout: "default",
      })
    )
  );

  console.log(
    boxen(
      chalk.green(`Server Running on http://localhost:${PORT}`),
      {
        padding: 1,
        margin: 1,
        borderStyle: "round",
        borderColor: "green",
      }
    )
  );

  console.log(
    chalk.cyan.bold("Backend Started Successfully\n")
  );
});