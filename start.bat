@echo off
title Minecraft Server Starter
:start
echo Dang khoi dong server...
java -Xmx4G -Xms4G -jar server.jar nogui
echo.
echo Server da dung. Tu dong restart sau 5 giay.
echo Nhan Ctrl+C de huy.
timeout /t 5
goto start