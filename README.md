# Yitian Jin's Academic Homepage

This repository contains the source for [yj244-jyt.github.io](https://yj244-jyt.github.io), a bilingual academic homepage built with [Academic Pages](https://github.com/academicpages/academicpages.github.io).

The English homepage is served at `/`, and the Chinese homepage is served at `/zh/`. GitHub Actions builds and deploys the Jekyll site after each push to `main`.

## Local preview

```bash
bundle config set --local path vendor/bundle
bundle install
bundle exec jekyll serve
```

Then open `http://localhost:4000`.

## Content

- `_pages/about.md`: English homepage
- `_pages/zh.md`: Chinese homepage
- `_config.yml`: site identity and public profile links
- `images/profile.jpg`: profile photo

The theme is MIT-licensed. See `LICENSE` for the upstream license notice.
