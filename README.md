# 🧩 POC 1: Host a Static Website on AWS S3

This project demonstrates how to host a **static frontend website** on **AWS S3**, make it publicly accessible, and set up **CI/CD automation** using **GitHub Actions**.

The process is divided into **3 stages**:

- **Stage 1:** Manual S3 hosting  
- **Stage 2:** Push code to GitHub & document  
- **Stage 3:** Automate everything with CI/CD  

---

## 🪄 Stage 1 — Host a Static Site Manually

### 🎯 Goal
Host a static HTML site on **Amazon S3** and make it publicly accessible.

### 🧰 Steps

1. **Create or choose a frontend app**
   - Start with a simple static HTML file:
     ```bash
     mkdir s3-static-site
     cd s3-static-site
     echo "<h1>Hello from my S3 static website!</h1>" > index.html
     ```

2. **Create an S3 bucket**
   - Go to **AWS Console → S3 → Create bucket**
   - Name it something unique, e.g. `yourname-static-site`
   - Uncheck “Block all public access”
   - Confirm that the bucket will be public

3. **Upload your files**
   - Upload `index.html` (and any CSS/JS files if available)

4. **Enable static website hosting**
   - Go to **Properties → Static website hosting**
   - Enable hosting
   - Set:
     - Index document: `index.html`
     - Error document: `error.html` (optional)
   - Save changes

5. **Get the website endpoint**
   - Copy the generated URL (it will look like this):
     ```
     http://yourname-static-site.s3-website-us-east-1.amazonaws.com
     ```
   - Visit the link in your browser 🎉

---

## 🗂️ Stage 2 — Push Project to GitHub

### 🎯 Goal
Store the project in a **public GitHub repo** and document how it works.

### 🧰 Steps

1. **Initialize Git**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - static site"
