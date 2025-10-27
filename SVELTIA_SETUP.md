# Sveltia CMS Setup Guide

## ✅ Phase 1 Complete: Sveltia CMS Installation

Sveltia CMS has been installed and configured for your Pixels photography portfolio!

### What's Been Set Up

1. **Admin Interface** - `/public/admin/index.html`
   - Loads Sveltia CMS from CDN
   - No build dependencies needed

2. **Configuration** - `/public/admin/config.yml`
   - Blog collection (maps to `src/content/blog/`)
   - Portfolio collection (maps to `src/content/portfolio/`)
   - Editorial workflow enabled (draft/review/publish)
   - Local backend enabled for testing

3. **Git Configuration** - Updated `.gitignore`
   - Removed Tina-specific exclusions
   - Clean for Sveltia

---

## 🚀 Local Testing (Available Now!)

### Access the Admin Panel

**URL:** http://localhost:4321/admin

### Using Local Backend (No GitHub OAuth Needed)

Sveltia CMS is configured with `local_backend: true`, which means you can test it locally without
GitHub OAuth:

1. **Start the dev server:**

   ```bash
   bun run start
   ```

2. **Open admin panel:**

   ```
   http://localhost:4321/admin
   ```

3. **Click "Work with Local Repository"** (or similar button)

4. **Edit content** - Changes are saved directly to your local MDX files

5. **Commit via Git** - Sveltia creates commits automatically

---

## 🔐 GitHub OAuth Setup (For Production)

To enable production access at `https://yoursite.com/admin`, you need to set up GitHub OAuth.

### Step 1: Create GitHub OAuth App

1. Go to: https://github.com/settings/developers
2. Click **"New OAuth App"**
3. Fill in the details:

   ```
   Application name: Pixels CMS
   Homepage URL: https://your-site.pages.dev
   Authorization callback URL: https://api.netlify.com/auth/done
   ```

   **Note:** Sveltia uses Netlify's OAuth gateway by default. You can also use:
   - Your own OAuth gateway
   - GitHub App (more secure)

4. Click **"Register application"**

### Step 2: Get Credentials

After creating the app:

1. Copy the **Client ID**
2. Click **"Generate a new client secret"**
3. Copy the **Client Secret** (save it securely!)

### Step 3: Update Sveltia Config

In `/public/admin/config.yml`, update the backend section:

```yaml
backend:
  name: github
  repo: iamvikshan/pixels
  branch: main # or sveltia if you want to edit this branch
  # Add these OAuth settings:
  # base_url: https://api.netlify.com
  # auth_endpoint: auth
```

**Note:** The OAuth gateway is already configured to use Netlify's by default.

### Alternative: Use GitHub App (Recommended for Production)

For better security, you can use a GitHub App instead:

1. Go to: https://github.com/settings/apps/new
2. Create new GitHub App with permissions:
   - Contents: Read & Write
   - Metadata: Read-only
3. Install the app on your repository
4. Update config.yml with App credentials

---

## 📝 Using Sveltia CMS

### Creating New Content

1. **Go to admin:** http://localhost:4321/admin (local) or https://yoursite.com/admin (prod)
2. **Login:** GitHub OAuth (prod) or Local mode (dev)
3. **Select collection:** Blog or Portfolio
4. **Click "New Blog Post"** or "New Portfolio"
5. **Fill in fields** - All your Astro content collection fields are mapped
6. **Save draft** - Creates a draft in editorial workflow
7. **Publish** - Commits to Git and deploys

### Editorial Workflow

Sveltia includes a powerful workflow:

```
Draft → In Review → Ready → Published
```

- **Draft:** Work in progress, not published
- **In Review:** Ready for review by others
- **Ready:** Approved, ready to publish
- **Published:** Committed to Git, live on site

### Media Management

Upload images directly in Sveltia:

- Drag & drop images
- Automatic optimization
- Stored in `public/images/uploads/`
- Committed to Git with your content

---

## 🎯 Key Features

### What Makes Sveltia Better

✅ **100% Free** - No paid plans, no limits ✅ **Git-Based** - All content in your repository ✅
**Fast & Modern** - Built with Svelte ✅ **Excellent Media Handling** - Drag-drop, resize, optimize
✅ **Editorial Workflow** - Draft/review/publish states ✅ **Local Development** - Test without
GitHub OAuth ✅ **Production Ready** - Built-in OAuth, secure

### Comparison to Tina CMS

| Feature          | Tina CMS       | Sveltia CMS  |
| ---------------- | -------------- | ------------ |
| Git-based        | ✅             | ✅           |
| Free             | Limited        | ✅ Unlimited |
| Build step       | Required       | Not needed   |
| Dependencies     | 2 npm packages | 0 (CDN)      |
| Production admin | Via Tina Cloud | Built-in     |
| Workflow         | Basic          | Advanced     |
| Speed            | Good           | Faster       |

---

## 🔧 Configuration Tips

### Change Branch for Editing

To edit a different branch (e.g., this `sveltia` branch):

```yaml
backend:
  name: github
  repo: iamvikshan/pixels
  branch: sveltia # Change this
```

### Add More Collections

Want to manage other content? Add to `config.yml`:

```yaml
collections:
  - name: "pages"
    label: "Pages"
    folder: "src/pages"
    # ... fields
```

### Custom Media Storage

Use Cloudflare Images, Cloudinary, or other CDN:

```yaml
media_library:
  name: cloudinary
  config:
    cloud_name: your_cloud_name
    api_key: your_api_key
```

---

## 🚀 Next Steps (Phase 2)

Now that Sveltia is set up, we can:

1. **Remove Tina CMS** - Clean up dependencies
2. **Test Sveltia** - Create/edit content
3. **Set up GitHub OAuth** - Enable production access
4. **Deploy** - Push to production
5. **Migrate existing editors** - If you have team members

---

## 📚 Resources

- [Sveltia CMS Docs](https://github.com/sveltia/sveltia-cms)
- [Configuration Reference](https://github.com/sveltia/sveltia-cms#configuration)
- [GitHub OAuth Guide](https://docs.github.com/en/developers/apps/building-oauth-apps/creating-an-oauth-app)

---

## ✨ What's Different from Tina

### Advantages

- ✅ No build dependencies
- ✅ Faster builds (no Tina build step)
- ✅ Better media management
- ✅ Editorial workflow
- ✅ 100% free forever

### Trade-offs

- YAML config vs TypeScript (less type-safe)
- Different admin UI (but modern and fast)
- Need GitHub OAuth for production (one-time setup)

---

**You can start using Sveltia locally right now!** Visit http://localhost:4321/admin and click "Work
with Local Repository" to test it out.
