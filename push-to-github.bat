@echo off
REM ================================================================
REM  Push kol-dorot to GitHub
REM  Usage: double-click this file, or run from cmd
REM  Expects: GitHub repo https://github.com/Eladshi1326/kol-dorot
REM           (create empty repo on github.com/new first — no README)
REM ================================================================

setlocal
chcp 65001 >nul
cd /d "%~dp0"

echo.
echo ================================================================
echo   Kol Dorot -- GitHub push
echo ================================================================
echo.

REM --- [0/6] Verify git is installed ---
where git >nul 2>nul
if errorlevel 1 (
    echo [!] git is not installed or not in PATH.
    echo     Install from: https://git-scm.com/download/win
    echo.
    pause
    exit /b 1
)

REM --- [1/6] Start fresh: remove any corrupted .git ---
if exist ".git" (
    echo [1/6] Removing existing .git folder for a clean start...
    rmdir /s /q .git
    if exist ".git" (
        echo [!] Could not remove .git folder. Close VS Code / editors and retry.
        pause
        exit /b 1
    )
)

echo [2/6] Initializing fresh git repo on branch 'main'...
git init -b main
if errorlevel 1 (
    echo [!] git init failed.
    pause
    exit /b 1
)

echo [3/6] Configuring local git identity...
git config user.name "Eladshi1326"
git config user.email "eladshi1326@gmail.com"

echo [4/6] Staging files...
git add .
if errorlevel 1 (
    echo [!] git add failed.
    pause
    exit /b 1
)

echo [5/6] Creating initial commit...
git commit -m "Initial commit: Kol Dorot Hebrew RTL editorial landing page"
if errorlevel 1 (
    echo [!] git commit failed. Check the output above.
    pause
    exit /b 1
)

echo [6/6] Adding remote and pushing to GitHub...
git remote add origin https://github.com/Eladshi1326/kol-dorot.git
git push -u origin main
if errorlevel 1 (
    echo.
    echo [!] Push failed. Common causes:
    echo     1. Repo does not exist yet -- create it at https://github.com/new
    echo        with the exact name: kol-dorot  (empty, no README)
    echo     2. Authentication -- make sure GitHub CLI or Git Credential Manager is signed in.
    echo.
    pause
    exit /b 1
)

echo.
echo ================================================================
echo  SUCCESS! Your code is on GitHub.
echo  https://github.com/Eladshi1326/kol-dorot
echo ================================================================
echo.
echo  Next: deploy on Netlify --
echo    1. Go to https://app.netlify.com
echo    2. Add new site -- Import from Git
echo    3. Select the repo 'kol-dorot'
echo    4. netlify.toml is already configured -- just click Deploy.
echo.
pause
endlocal
