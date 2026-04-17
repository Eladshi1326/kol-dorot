@echo off
REM ================================================================
REM  Kol Dorot -- push to GitHub
REM  (single-file: works for first push, re-push, and fixes)
REM ================================================================

setlocal
chcp 65001 >nul
cd /d "%~dp0"

echo.
echo ================================================================
echo   Kol Dorot -- push to GitHub
echo ================================================================
echo.

REM --- [0/4] Verify git ---
where git >nul 2>nul
if errorlevel 1 (
    echo [!] git is not installed. Get it from https://git-scm.com/download/win
    pause
    exit /b 1
)

REM --- [1/4] If no .git yet, initialize from scratch ---
if not exist ".git" (
    echo [1/4] Initializing fresh git repo...
    git init -b main >nul
    git config user.name "Eladshi1326"
    git config user.email "eladshi1326@gmail.com"
    git remote add origin https://github.com/Eladshi1326/kol-dorot.git
) else (
    echo [1/4] Existing git repo found -- keeping history.
    REM Make sure remote is set correctly
    git remote set-url origin https://github.com/Eladshi1326/kol-dorot.git 2>nul
    if errorlevel 1 git remote add origin https://github.com/Eladshi1326/kol-dorot.git
)

REM Clean up any leftover locks from previous runs
if exist ".git\HEAD.lock" del /q ".git\HEAD.lock" 2>nul
if exist ".git\index.lock" del /q ".git\index.lock" 2>nul

REM --- [2/4] Stage all changes ---
echo [2/4] Staging files...
git add .

REM --- [3/4] Commit if there are changes ---
git diff --cached --quiet
if errorlevel 1 (
    echo [3/4] Creating commit...
    git commit -m "Update Kol Dorot site" >nul
    if errorlevel 1 (
        echo [!] commit failed.
        pause
        exit /b 1
    )
) else (
    echo [3/4] No new changes to commit -- pushing existing history.
)

REM --- [4/4] Push (force to overwrite any divergent history) ---
echo [4/4] Pushing to GitHub...
git push --force origin main
set PUSH_RESULT=%ERRORLEVEL%

echo.
if %PUSH_RESULT% EQU 0 (
    echo ================================================================
    echo.
    echo                  *** SUCCESS! ***
    echo.
    echo     The site is now live on GitHub:
    echo     https://github.com/Eladshi1326/kol-dorot
    echo.
    echo     Netlify will automatically detect the new commit and
    echo     rebuild within 30-60 seconds.
    echo     Watch: https://app.netlify.com
    echo.
    echo ================================================================
) else (
    echo ================================================================
    echo   [!] Push failed.
    echo       1. Make sure the repo exists at:
    echo          https://github.com/Eladshi1326/kol-dorot
    echo       2. Check GitHub authentication: gh auth status
    echo ================================================================
)

echo.
pause
endlocal
