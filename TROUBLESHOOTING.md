# Troubleshooting Common Errors

## Common Next.js Errors and Solutions

### 1. "Cannot find module" errors
**Solution**: Make sure dependencies are installed
```bash
npm install
```

### 2. Port 3000 already in use
**Solution**: Kill the process or use a different port
```bash
# Windows PowerShell
Get-Process -Name node | Stop-Process

# Or use different port
npm run dev -- -p 3001
```

### 3. TypeScript errors
**Solution**: Check if types are installed
```bash
npm install --save-dev @types/react @types/react-dom @types/node
```

### 4. Tailwind CSS not working
**Solution**: Verify PostCSS config exists
- Check `postcss.config.js` exists
- Check `tailwind.config.js` exists
- Restart the dev server

### 5. "Module not found" for components
**Solution**: Check import paths
- Make sure `tsconfig.json` has correct paths
- Use `@/` prefix for imports from root

### 6. Build errors
**Solution**: Clear Next.js cache
```bash
# Delete .next folder
Remove-Item -Recurse -Force .next

# Rebuild
npm run build
```

## Quick Fixes

### Reset Everything
```bash
# Delete node_modules and package-lock.json
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json

# Reinstall
npm install

# Clear Next.js cache
Remove-Item -Recurse -Force .next

# Start fresh
npm run dev
```

### Check Node Version
Make sure you're using Node.js 18 or higher:
```bash
node --version
```

### Check for Syntax Errors
```bash
npm run lint
```

## Still Having Issues?

1. **Share the exact error message** from your terminal
2. **Check the browser console** for client-side errors
3. **Check the terminal output** for server-side errors
4. **Verify all files exist** - especially `app/layout.tsx` and `app/page.tsx`

