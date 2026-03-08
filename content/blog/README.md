# Blog Content Management

This folder contains all blog articles for the VaR Risk Analytics website.

## How to Add a New Article

### 1. Create a New Markdown File

Create a new `.md` file in this folder with a URL-friendly filename, e.g., `my-new-article.md`.

### 2. Add Frontmatter

Every article must start with frontmatter (metadata) in this format:

```yaml
---
title: "Your Article Title"
date: "2026-03-08"
readTime: "5 min read"
tags: ["Tag1", "Tag2", "Tag3"]
featured: false
slug: "my-new-article"
---
```

**Frontmatter Fields:**
- `title` (required): The article title displayed on cards and page
- `date` (required): Publication date in YYYY-MM-DD format
- `readTime` (required): Estimated reading time, e.g., "5 min read"
- `tags` (required): Array of tags/categories (2-3 recommended)
- `featured` (optional): Set to `true` to make this the featured article
- `slug` (required): URL-friendly identifier, must match the filename

### 3. Write Your Content

After the frontmatter, write your article in Markdown format:

```markdown
# Your Main Heading

Introduction paragraph here...

## Section Heading

Content here with **bold** and *italic* text.

- Bullet points
- More bullets

1. Numbered lists
2. More items

> Blockquotes for important quotes

[Link text](/#cta)
```

### 4. Update the Blog Component (Temporary)

Until dynamic loading is implemented, also add your article to:
`src/sections/Blog.tsx`

Find the `blogPosts` object and add your article to all three language arrays (en, zh, cn).

### 5. Build and Deploy

```bash
npm run build
```

## Markdown Tips

- Use `#` for main title (H1)
- Use `##` for section headings (H2)
- Use `###` for subsections (H3)
- Use `**text**` for bold
- Use `*text*` for italic
- Use `[link text](URL)` for links
- Use `![alt text](image-path.jpg)` for images
- Use triple backticks for code blocks

## Example Article

See `understanding-var-risk.md` for a complete example.
