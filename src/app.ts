import SomeClass from './strategy_example';
import { LogToConsole, LogToFile, LogToRemoteServer, NoLogging } from './logger'

const sas = new SomeClass(new LogToConsole());
console.log('to console');
sas.doSomething();

console.log('');

console.log('to a remote server.');
sas.setLogger(new LogToRemoteServer());
sas.doSomething();

console.log('');

console.log('no logging now.');
sas.setLogger(new NoLogging());
sas.doSomething();