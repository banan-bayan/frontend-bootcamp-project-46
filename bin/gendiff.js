#!/usr/bin/env node
import { readFileSync } from 'node:fs';
const { Command } = require('commander');
const program = new Command();

const command = () => {
   console.log(readFileSync());
   //console.log(filepath1, filepath2);
};

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .option('-v, --version', 'output the version number')
  .option('-f, --format <type>', 'output format')
  .argument('<filepath1> <filepath2>')
  .action(command)
program.parse();
 