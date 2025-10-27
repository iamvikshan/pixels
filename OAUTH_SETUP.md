# Sveltia CMS with GitHub OAuth - Deployment Guide

## ✅ Configuration Complete!

Your Sveltia CMS is now configured with GitHub OAuth authentication.

---

## 🔐 What's Been Set Up

### 1. GitHub OAuth App

- **Client ID:** `Ov23licrwQSnbtNILt3u`
- **Client Secret:** `f81bf2f19721c79416df10cb0526e0bb0c4741cb`
- **Callback URL:** Should be `https://api.netlify.com/auth/done`

### 2. Sveltia Configuration

- **Config file:** `public/admin/config.yml`
- **OAuth config:** `public/admin/config.json`
- **Repository:** `iamvikshan/pixels`
- **Branch:** `sveltia` (for testing)
- **Site URL:** `https://pixels.vikshan.me`

### 3. OAuth Flow

```
User → Sveltia Admin → GitHub OAuth → Netlify Gateway → Authenticated
```

---

## 🚀 Deployment Steps

### Step 1: Verify GitHub OAuth App Settings

Go to: https://github.com/settings/developers

Make sure your OAuth app has:

- ✅ **Homepage URL:** `https://pixels.vikshan.me`
- ✅ **Authorization callback URL:** `https://api.netlify.com/auth/done`

⚠️ **Important:** The callback URL MUST be exactly `https://api.netlify.com/auth/done`

### Step 2: Register Your Site with Netlify OAuth

Even though you're on Cloudflare Pages, you need to register with Netlify's OAuth service:

**Option A: Use Netlify's OAuth Service (Recommended)**

1. Go to: https://www.netlify.com/
2. Sign up for a free account (if you don't have one)
3. You don't need to deploy to Netlify - just need an account
4. The OAuth gateway works for ANY hosting provider

**Option B: Self-host OAuth (Advanced)**

If you prefer not to use Netlify's service, you can:

- Deploy your own OAuth server
- Use GitHub App instead of OAuth App
- Set up Cloudflare Workers for OAuth

### Step 3: Commit and Push Changes

```bash
git add .
git commit -m "feat: configure Sveltia CMS with GitHub OAuth"
git push origin sveltia
```

### Step 4: Deploy to Production

Since you're using Cloudflare Pages:

1. **Push to GitHub** (already done in Step 3)
2. **Cloudflare Pages builds automatically**
3. **Wait for deployment** to complete

### Step 5: Access Your Admin Panel

Once deployed, visit:

```
https://pixels.vikshan.me/admin
```

You should see the Sveltia CMS login screen.

---

## 🧪 Testing the OAuth Flow

### Expected Behavior:

1. **Visit:** `https://pixels.vikshan.me/admin`
2. **Click:** "Login with GitHub" (or similar button)
3. **Redirect:** To GitHub authorization page
4. **Authorize:** Grant access to your app
5. **Redirect:** Back to Sveltia admin
6. **Success:** You're logged in!

### Troubleshooting:

**Error: "Failed to load config"**

- Check that `config.yml` is accessible at `/admin/config.yml`
- Verify the file is valid YAML

**Error: "OAuth failed" or "Redirect mismatch"**

- Verify callback URL in GitHub is `https://api.netlify.com/auth/done`
- Check that client ID matches in both places

**Error: "Unauthorized"**

- Make sure you're a collaborator on the repository
- Check that the OAuth app has access to the repo

---

## 🔒 Security Notes

### Client Secret Location

⚠️ **IMPORTANT:** Your client secret (`f81bf2f19721c79416df10cb0526e0bb0c4741cb`) is currently in
this document.

**For production:**

1. This secret should NOT be committed to Git
2. The Netlify OAuth gateway handles it server-side
3. You don't need to expose it in your frontend code

**Best Practice:**

- Delete this file after setup
- Or move it to a secure location
- Regenerate the secret if accidentally exposed

### Who Can Access the Admin?

Only users who:

- ✅ Have GitHub access to `iamvikshan/pixels` repo
- ✅ Are authenticated via your OAuth app
- ✅ Have write permissions to the repository

---

## 📝 Using Sveltia in Production

### Creating Content

1. Visit `https://pixels.vikshan.me/admin`
2. Login with GitHub
3. Select "Blog" or "Portfolio"
4. Create new content
5. Save as draft or publish directly

### Editorial Workflow

Sveltia supports a full editorial workflow:

```
Draft → In Review → Ready → Published
```

- **Draft:** Not committed to Git
- **In Review:** Pull request created
- **Ready:** Approved and ready
- **Published:** Merged to main branch

### How It Works with Git

Every time you:

- **Save Draft:** Creates a branch `cms/draft-{title}`
- **Publish:** Creates a commit on your target branch
- **Edit:** Updates the existing file
- **Delete:** Removes the file from Git

All changes are version controlled!

---

## 🎯 Next Steps

### 1. Test the Setup

- [ ] Push this branch to GitHub
- [ ] Wait for Cloudflare Pages deployment
- [ ] Visit `https://pixels.vikshan.me/admin`
- [ ] Login with GitHub OAuth
- [ ] Try creating a draft blog post
- [ ] Verify the file appears in Git

### 2. Switch to Main Branch (When Ready)

Once testing is successful, update `config.yml`:

```yaml
backend:
  branch: main # Change from sveltia to main
```

This will make edits go directly to your production branch.

### 3. Invite Team Members (Optional)

Want others to edit content?

1. Add them as collaborators on GitHub
2. They can login at `/admin` with their GitHub account
3. They'll be able to create/edit content

### 4. Clean Up Tina CMS (Phase 2)

Once you're happy with Sveltia:

- Remove Tina dependencies
- Delete `tina/` folder
- Update build scripts
- Faster builds! 🚀

---

## 🆘 Common Issues

### "Cannot read config.yml"

- File must be at `public/admin/config.yml`
- Check YAML syntax (use a validator)
- Ensure it's deployed with your site

### "OAuth callback mismatch"

- GitHub app callback MUST be `https://api.netlify.com/auth/done`
- Not your site URL
- Not GitHub's default

### "No changes appear in Git"

- Check your Git history: `git log`
- Look for branches: `git branch -a`
- Draft posts create branches, not direct commits

### "Permission denied"

- Ensure you have write access to the repository
- Check GitHub app permissions
- Try re-authorizing the app

---

## 📚 Additional Resources

- [Sveltia CMS Documentation](https://github.com/sveltia/sveltia-cms)
- [GitHub OAuth Apps](https://docs.github.com/en/developers/apps/building-oauth-apps)
- [Netlify OAuth Provider](https://www.netlify.com/blog/2016/10/10/integrating-with-netlify-oauth2/)

---

**You're all set!** 🎉 Push to GitHub and test at `https://pixels.vikshan.me/admin`
