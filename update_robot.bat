@echo off
echo Copying robot image...
copy "C:\Users\ym669\.gemini\antigravity\brain\d31ff2bf-698c-4725-bdc5-b07856c73c28\uploaded_image_1765828756461.png" "public\robot-hero.png"
echo Done! Robot image copied to public folder.
echo.
echo Now updating App.jsx...
powershell -Command "(Get-Content src\App.jsx) -replace 'https://placehold.co/800x600/f3f4f6/3caec3\?text=SU\+Robo\+Preview', '/robot-hero.png' | Set-Content src\App.jsx"
echo Done! App.jsx updated.
echo.
echo Refresh your browser to see the robot!
pause
