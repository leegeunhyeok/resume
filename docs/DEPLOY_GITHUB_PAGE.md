# Deploy - Github Page

## 1. Create Github repository

<img alt="create repository 1" src="gp_1.jpg" width="700">

<img alt="create repository 2" src="gp_2.jpg" width="700">

## 2. Clone craeted repository

- Configuration your own template data - [Template configuration](https://github.com/leegeunhyeok/resume#-template-configuration)

## 3. Build configuration

- `src/data/_base.json`

```js
{
  "publicPath": "/dist", // set publicPath to /dist
  ...
}
```

## 4. Build

```bash
# Install dependencies
npm install

# Build
npm run build
```

and move `dist/index.html` to `./` (Repository root directory)

## 5. Commit and Push

```bash
# Staging all changes (build result included!)
git add .

# Your remote/branch
git push origin master
```

## 6. Enjoy!

🎉 Go to your Github pages!
