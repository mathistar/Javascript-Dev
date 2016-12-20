/* Script to generate mock data for local development. */

/* eslint-disable no-console */

import jsf from 'json-schema-faker';
import {schema} from'./mockUserSchema';
import fs from 'fs';
import chalk from 'chalk';

jsf.format('phone', function(gen) {
  return gen.randexp('((\\(\\d{3}\\) ?)|(\\d{3}-))?\\d{3}-\\d{4}');
});

const json = JSON.stringify(jsf(schema));

fs.writeFile("./src/api/users.json", json, function (err) {
  if (err) {
    return console.log(chalk.red(err));
  } else {
    console.log(chalk.green("Mock data generated."));
  }
});
