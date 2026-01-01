@echo off
echo Copying new street delivery image...
copy "C:\Users\ym669\.gemini\antigravity\brain\d31ff2bf-698c-4725-bdc5-b07856c73c28\robot_on_street_scene_1765829418187.png" "public\robot-street.png"
echo Done! Image copied.
echo.
echo Updating website...
powershell -Command "(Get-Content src\App.jsx) -replace '/robot-hero.png', '/robot-street.png' | Set-Content src\App.jsx"
echo Done! Website updated.
echo.
echo Refresh your browser (Ctrl+R) to see it!
pause
