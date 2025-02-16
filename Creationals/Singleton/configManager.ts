import { configManager } from "./config-manager";

configManager.setConfig('apiUrl', 'localhost');
console.log(configManager.getConfig('apiUrl'));