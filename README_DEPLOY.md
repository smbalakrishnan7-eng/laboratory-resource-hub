# Laboratory Resource Hub — 10-minute launch guide

This is a responsive, static website starter. It has a home page, searchable resource categories, project placeholders, team section, and public/private access guidance.

## Important security model

A static website hosted publicly (including GitHub Pages) does **not** provide private member-only pages by itself. This starter is intended as the public portal. Store restricted files in Google Drive or institution-approved storage with sign-in and correctly configured permissions. Only put links to files that the intended audience is allowed to see. Do not publish credentials, API keys, participant/patient data, confidential documents, or sensitive unpublished results.

## Fastest route: GitHub Pages

1. Sign in at https://github.com/ or create an account.
2. Create a **new repository** named `laboratory-resource-hub`.
3. For the fastest first launch, choose **Public**. This makes the website source public too. Do not add confidential material to this repository.
4. Upload `index.html`, `styles.css`, and `script.js` from this folder to the repository root. You can drag all three into GitHub's “Add file → Upload files” page.
5. Commit the files to the `main` branch.
6. Open **Settings → Pages**.
7. Under **Build and deployment**, choose **Deploy from a branch**, select branch `main` and folder `/(root)`, then Save.
8. Wait for the Pages deployment to complete. The site address will be shown in Settings → Pages, typically:
   `https://YOUR-USERNAME.github.io/laboratory-resource-hub/`
9. Open the site on your phone and computer to test it.

GitHub Pages documentation: https://docs.github.com/pages/getting-started-with-github-pages/creating-a-github-pages-site

## Add your real resources

Edit `index.html` in GitHub (click the pencil icon, then Commit changes) and replace placeholder text and `href="#access"` links with actual URLs.

Suggested structure for linked storage:
- Public resources: open-access papers, public datasets, public code repositories, published protocols.
- Lab members only: internal SOPs, unpublished work, project folders, meeting notes.
- Restricted: confidential or sensitive data, stored only in institution-approved systems with explicit access control.

For a Google Drive folder:
1. Create the folder in the appropriate lab/institution account.
2. Open **Share** and set General access to **Restricted** for private material.
3. Add the actual lab members or an approved Google Group.
4. Copy the folder link and put it into the website only if the website audience is appropriate. A link is not a substitute for access permissions.
5. Test the link in a private/incognito browser where you are not signed in. Restricted files should deny access.

## Suggested next improvements
- Replace the LR mark with your lab logo.
- Add the approved lab name, institution, supervisor, contact email, and publication links.
- Add a privacy notice and accessibility review.
- For real member-only pages, use an authenticated platform or implement a backend with login, authorization, secure storage, and audit logs. Do not try to hide private files with CSS or JavaScript.
