# Technology Outreach Hawaii Website

Internal documentation for the Technology Outreach Hawaii nonprofit website development team.

## 🚀 Local Development Setup

### Prerequisites

You'll need these installed on your development machine:

- **Ruby** (version 2.7 or higher)
- **Bundler** gem (`gem install bundler`)
- **Git**

### Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/technology-outreach-hawaii/technology-outreach-hawaii.github.io.git
   cd technology-outreach-hawaii.github.io
   ```

2. **Install Ruby dependencies**
   ```bash
   bundle install
   ```

3. **Start the development server**
   ```bash
   bundle exec jekyll serve --host=0.0.0.0 --port=4000
   ```

4. **View the site**
   Open your browser to `http://localhost:4000`

The site will automatically rebuild when you make changes to files.

## 📁 Project Structure

```
├── _config.yml              # Jekyll configuration
├── _data/
│   └── members.yml          # Team member information
├── _includes/               # Reusable template components
│   ├── banner.html
│   ├── calendar.html
│   ├── navigation.html
│   └── sponsor.html         # Sponsor acknowledgments
├── _layouts/                # Page templates
├── _posts/                  # Blog posts (YYYY-MM-DD-title.md format)
├── _localResources/         # Local Hawaii resources
├── _onlineResources/        # Online learning resources
├── _sass/                   # SCSS stylesheets
├── assets/                  # Static assets (images, CSS, JS)
└── fullcalendar/           # Calendar library
```

## 🛠️ Tech Stack

- **Jekyll 3.x** - Static site generator
- **GitHub Pages** - Automatic hosting and deployment
- **Bootstrap** - CSS framework for responsive design
- **FullCalendar** - Interactive event calendar
- **SCSS** - CSS preprocessing

## 🚀 Deployment Process

### Automatic Deployment

The site automatically deploys when changes are pushed to the `main` branch:

1. **GitHub Actions** workflow (`pages-build-deployment`) triggers automatically
2. **Jekyll build** processes using the `github-pages` gem configuration
3. **Deployment** to GitHub Pages hosting
4. **Live site** updates at both:
   - Primary: `https://techoutreachhi.org/`
   - GitHub Pages: `https://technology-outreach-hawaii.github.io/`

### Build Configuration

The site uses Jekyll's GitHub Pages integration with these key dependencies:
- `jekyll` ~> 3.0
- `github-pages` gem (handles GitHub Pages compatibility)
- `jekyll-sitemap` plugin
- `webrick` and `thin` for local development

## 📝 Content Management

### Adding Blog Posts

Create files in `_posts/` with format `YYYY-MM-DD-title.md`:

```markdown
---
layout: post
title: "Your Post Title"
date: 2024-01-01
tags: [update, event]
---

Your post content here...
```

### Managing Team Members

Edit `_data/members.yml`:

```yaml
- name: "Name"
  role: "Role"
  image: "assets/images/profiles/filename.jpg"
  bio: "Bio information"
```

### Updating Sponsors

Sponsor information is in `_includes/sponsor.html`. To update:

1. Add new sponsor logo to `assets/images/sponsor/`
2. Update the HTML in the sponsor include file
3. Remove old sponsor assets if no longer needed

### Managing Resources

**Local Resources** (`_localResources/`): Hawaii-specific programs and organizations
**Online Resources** (`_onlineResources/`): Online learning platforms and tools

Each resource needs frontmatter:
```markdown
---
layout: resource
title: "Resource Name"
description: "Brief description"
website: "https://example.com"
---
```

## 🎨 Styling & Assets

### SCSS Architecture
- `_sass/1-helpers/` - Variables, mixins, utilities
- `_sass/2-base/` - Base styles, resets
- `_sass/3-layout/` - Header, footer, navigation, layout components
- `_sass/5-templates/` - Page-specific styles
- `_sass/bootstrap/` - Bootstrap framework files

### Images
Store images in organized folders under `assets/images/`:
- `profiles/` - Team member photos
- `sponsor/` - Sponsor logos
- `blog/` - Blog post images
- `carousel/` - Homepage carousel images

## 🧪 Testing & Troubleshooting

### Before Pushing Changes

1. **Test locally**: `bundle exec jekyll serve --host=0.0.0.0 --port=4000`
2. **Check all pages load** without errors
3. **Verify mobile responsiveness**
4. **Test any new functionality**

### Common Issues

**Bundle install fails:**
```bash
gem update bundler
bundle update
```

**Site not reflecting changes:**
```bash
bundle exec jekyll clean
bundle exec jekyll serve --host=0.0.0.0 --port=4000
```

**SCSS compilation errors:**
- Check syntax in `_sass/` files
- Verify imports in `assets/css/styles.scss`

## 🤝 Development Workflow

1. **Create feature branches** for significant changes
2. **Test thoroughly** on your local development environment
3. **Submit pull requests** for team review when appropriate
4. **Direct commits to main** are acceptable for small updates (content, typos, etc.)

### Branch Naming Suggestions
- `feature/description` - New features
- `fix/description` - Bug fixes
- `content/description` - Content updates
- `documentation/description` - Documentation

## 📞 Support

For technical questions or site issues:
- **Repository issues**: Use GitHub issues for tracking
- **Development questions**: Contact the tech team
- **Content updates**: Coordinate with content managers

---

**Technology Outreach Hawaii** - Internal Development Documentation