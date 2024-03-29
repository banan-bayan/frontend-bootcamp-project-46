#!/usr/bin/env node
import { Command } from 'commander';
import gendiff from '../src/index.js';

const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .option('-v, --version', 'output the version number')
  .option('-f, --format <type>', 'output format', 'stylish', 'plain', 'json')
  .arguments('<filepath1> <filepath2>')
  .action((arg1, arg2) => console.log(gendiff(arg1, arg2, program.opts().format)));
program.parse();
