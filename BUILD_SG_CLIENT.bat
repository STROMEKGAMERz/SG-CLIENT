@echo off
chcp 65001 >nul
 title SG Client - Build Installer
 echo ========================================
 echo          SG CLIENT - BUILD SETUP
 echo ========================================
 echo.
 where node >nul 2>nul
 if errorlevel 1 (
   echo Node.js nahi mila. Pehle https://nodejs.org/ se Node.js LTS install karo.
   echo Install ke baad is file ko dobara double-click karna.
   pause
   exit /b 1
 )
 echo [1/2] Required files install ho rahe hain...
 call npm install
 if errorlevel 1 (
   echo.
   echo Install fail hua. Internet connection check karke dobara try karo.
   pause
   exit /b 1
 )
 echo.
 echo [2/2] SG Client Windows installer ban raha hai...
 call npm run dist
 if errorlevel 1 (
   echo.
   echo Build fail hua. Error ke liye upar dekho.
   pause
   exit /b 1
 )
 echo.
 echo SUCCESS! Installer release folder ke andar hai.
 echo File ka naam SG Client Setup hoga.
 pause
