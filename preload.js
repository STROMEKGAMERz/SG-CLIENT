const { contextBridge } = require("electron");

contextBridge.exposeInMainWorld("sgClient", {
  appVersion: "0.2.0",
  platform: process.platform
});