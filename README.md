This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Create Next.JS project
```
npm create next-app my-portfolio
```

# Add to Git
```
cd my-portfolio
git init 
git add . && git commit -m "first commit" 
git branch -M main 
git remote add origin git@github.com:ABC/XYZ.git 
git push -u origin main
```

# Install Dependencies
## TailWind
```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
https://tailwindcss.com/docs/guides/nextjs

## React-Icons
```
npm add react-icons
```

# Generate static webpages (SSG)
## Change build
Open `package.json`
and change build to 
```
"build": "next build && next export"
```
## Build and Export
```bash
npm run build
```
### Fix the build-error
```
TypeError: Failed to parse URL from /Users/Shared/my-portfolio/node_modules/next/dist/server/lib/squoosh/mozjpeg/mozjpeg_node_dec.wasm
```
Solution: `npm i sharp`

## Copy from out
Copy contents from `out` folder to the S3 bucket. 


# Run Server

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
