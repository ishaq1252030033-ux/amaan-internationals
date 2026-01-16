# Fix PowerShell Execution Policy Error

## Quick Fix (Recommended)

Run this command in PowerShell **as Administrator**:

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

Then try running `npm run dev` again.

## Alternative Solutions

### Option 1: Bypass for Current Session Only
```powershell
Set-ExecutionPolicy -ExecutionPolicy Bypass -Scope Process
npm run dev
```

### Option 2: Use Command Prompt (CMD) Instead
1. Open **Command Prompt** (not PowerShell)
2. Navigate to your project:
   ```cmd
   cd "E:\Desktop\Amaan Internationals"
   ```
3. Run:
   ```cmd
   npm run dev
   ```

### Option 3: Run PowerShell as Administrator
1. Right-click on PowerShell
2. Select "Run as Administrator"
3. Navigate to your project
4. Run: `npm run dev`

## Why This Happens

Windows PowerShell has security policies that prevent scripts from running. This is a security feature, but it blocks npm commands.

## Recommended Solution

**Set execution policy for current user only** (safest option):
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

This allows:
- ✅ Scripts you write locally
- ✅ Scripts signed by trusted publishers
- ✅ npm and other tools to work
- ❌ Unsigned remote scripts (still blocked for security)

