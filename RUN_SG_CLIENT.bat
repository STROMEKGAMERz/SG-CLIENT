@echo off
chcp 65001 >nul
where node >nul 2>nul
if errorlevel 1 (
 echo Node.js LTS install karo: https://nodejs.org/
 pause
 exit /b 1
)
if not exist node_modules (
 echo Pehli baar setup ho raha hai...
 call npm install
 if errorlevel 1 pause & exit /b 1
)
call npm start
if errorlevel 1 pause
