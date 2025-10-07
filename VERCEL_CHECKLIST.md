# ✅ Vercel Deployment Checklist

## Before You Deploy

- [x] `vercel.json` created ✅
- [x] `vite.config.js` updated ✅
- [x] `.env.local` exists with API key ✅
- [x] `.env.local` in `.gitignore` ✅
- [x] Build tested locally (`npm run build`) ✅

## On Vercel Dashboard

- [ ] **Go to Vercel:** https://vercel.com/dashboard
- [ ] **Open project:** news-dekho-blush
- [ ] **Go to Settings → Environment Variables**
- [ ] **Add variable:**
  - Name: `VITE_NEWS_API_KEY`
  - Value: `16a838815bd848ed828b976340735419`
  - Environments: ✓ Production ✓ Preview ✓ Development
- [ ] **Click Save**
- [ ] **Go to Deployments tab**
- [ ] **Redeploy** (or push new code to trigger auto-deploy)

## After Deployment

- [ ] Visit: https://news-dekho-blush.vercel.app/
- [ ] Test home page (shows general news)
- [ ] Test /entertainment route
- [ ] Test /sports route
- [ ] Test /technology route
- [ ] Check browser console for errors (F12)
- [ ] Verify news articles are loading

## If Still Not Working

1. Open browser DevTools (F12) → Console tab
2. Check for error messages
3. Go to Vercel → Your Project → Latest Deployment → View Function Logs
4. Look for build or runtime errors
5. Common issues:
   - Environment variable not set correctly
   - API key invalid or expired
   - Exceeded News API free tier limit (100 req/day)

## Success Indicators ✅

- ✅ Page loads (not blank)
- ✅ Navbar shows with "NewsDekho" logo
- ✅ News cards appear
- ✅ All route links work
- ✅ No console errors
- ✅ Images load properly

---

**Once all checkboxes are done, your app will be live! 🚀**
