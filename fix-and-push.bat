@echo off
REM ================================================================
REM  Kol Dorot -- fix CSS and push to GitHub
REM  Repairs .git locks from previous session and pushes the fix.
REM ================================================================

setlocal
chcp 65001 >nul
cd /d "%~dp0"

echo.
echo ================================================================
echo   Kol Dorot -- fix CSS + push to GitHub
echo ================================================================
echo.

REM --- [1/4] Clean up .git locks left by sandbox ---
echo [1/4] Cleaning up any .git locks...
if exist ".git\HEAD.lock" del /q ".git\HEAD.lock" 2>nul
if exist ".git\index.lock" del /q ".git\index.lock" 2>nul
if exist ".git\objects\maintenance.lock" del /q ".git\objects\maintenance.lock" 2>nul
REM Remove any stale tmp_obj files
for /r ".git\objects" %%f in (tmp_obj_*) do del /q "%%f" 2>nul

REM --- [2/4] Show status ---
echo [2/4] Current git status:
git status --short
echo.

REM --- [3/4] Stage and commit any pending changes (safe if nothing to do) ---
echo [3/4] Staging the CSS fix (if not already committed)...
git add src/index.css
git diff --cached --quiet
if errorlevel 1 (
    git commit -m "Fix: remove duplicate closing brace in index.css"
    if errorlevel 1 (
        echo [!] commit failed. Aborting.
        pause
        exit /b 1
    )
) else (
    echo     Nothing new to commit -- proceeding straight to push.
)

REM --- [4/4] Push ---
echo [4/4] Pushing to GitHub...
git push origin main
set PUSH_RESULT=%ERRORLEVEL%

echo.
if %PUSH_RESULT% EQU 0 (
    echo ================================================================
    echo   *** SUCCESS! ***
    echo ================================================================
    echo.
    echo   Your fix is live on GitHub:
    echo   https://github.com/Eladshi1326/kol-dorot
    echo.
    echo   Netlify will automatically pick up this commit and rebuild.
    echo   Check: https://app.netlify.com -- your new deploy is in progress.
    echo.
    echo ================================================================
) else (
    echo ================================================================
    echo   [!] Push failed. Likely causes:
    echo       - Authentication not set up
    echo       - No internet
    echo ================================================================
)

echo.
pause
endlocal
