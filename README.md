# Personal Portfolio Website

A responsive personal portfolio built with semantic HTML, CSS, and vanilla JavaScript. No frontend framework or package installation is required.

## Project structure

```text
portfolio/
├── index.html       Main portfolio page
├── project-details.html
├── manifest.json    Installable app metadata
├── service-worker.js
├── offline.html     Offline fallback page
├── css/
│   └── style.css
├── js/
│   ├── script.js
│   └── project-details.js
├── assets/
│   ├── profile.jpg
│   ├── Anush_MN_Resume.pdf
│   └── icons/
│       ├── icon-192.png
│       └── icon-512.png
└── README.md
```

The profile photo and resume are stored in `assets/`. The two PNG icons are used by the installed app and browser tabs.

## Run locally with VS Code Live Server

1. Open the `portfolio` folder in VS Code.
2. Install the **Live Server** extension if it is not already installed.
3. Open `index.html`, then click **Go Live** in the VS Code status bar (or right-click the file and choose **Open with Live Server**).
4. The site opens in your browser with the supplied resume available to download.

## Personalize before publishing

- Replace `[Your Name]`, `[Year]`, the university placeholder, and the placeholder email in `index.html`.
- Replace GitHub and LinkedIn links with your own profiles.
- Review every skill and remove anything you do not want to claim.
- Edit project descriptions, add actual technologies, and replace the example `#contact` project links with repository/demo URLs only when those are available. The listed projects are labeled as ideas and do not imply completion or deployment.
- Replace `assets/profile.jpg` and `assets/Anush_MN_Resume.pdf` with the versions you want to publish, keeping the same filenames or updating their links in `index.html` and `service-worker.js`.
- Update the footer name placeholder.

## Install and test the PWA

The site must be served from its web root over HTTPS, or from `localhost` during development. Opening `index.html` directly with a `file://` URL does not enable service workers. VS Code Live Server is suitable for local testing.

- Check `manifest.json` in the browser's developer tools for the app name, standalone display mode, colours, and both PNG icons.
- Load both `index.html` and a project-details link. In the Application panel, confirm that `/service-worker.js` is registered and its app-shell cache is populated.
- On a supported browser, use **Install App** when it appears, or the browser's install control. The button appears only when the browser provides an installation prompt. On iPhone or iPad, use Safari's **Share > Add to Home Screen**.
- After visiting the site once, turn off the network in developer tools and reload the main page or a project-details page to confirm cached pages work. Navigate to an uncached page to see the offline fallback.
- External social links and Google Fonts still require a network connection. The contact form opens an email draft and requires a configured email app to send it; the site does not send or store submissions.

## Contact form limitation

The form validates name, email, subject, and message in the browser. **HTML, CSS, and JavaScript alone cannot securely deliver submissions to your email.** The current form intentionally does not send or store anything. Before using it for real inquiries, connect a reputable form service or your own server-side endpoint, then update the form submission code and privacy information as needed.

## Test the site

1. Use every desktop navigation link and verify the corresponding section becomes active.
2. Resize the browser to mobile width; open the menu, follow a link, and confirm the menu closes. Press Escape to close an open menu.
3. Scroll down to reveal the back-to-top button, then use it to return to the top.
4. Submit the contact form empty and with invalid email/short values; correct the errors and submit valid values. Confirm the form opens a prefilled email draft.
5. Use either **Download Resume** link to verify `assets/Anush_MN_Resume.pdf` downloads.
6. Open browser developer tools and check the Console for errors. Check the mobile and desktop layouts and try keyboard navigation.

## Publish for free

For **GitHub Pages**, push this folder to a GitHub repository and select the branch/folder containing `index.html` in the repository's Pages settings. For **Netlify**, deploy the `portfolio` folder as the site directory. Before publishing, replace personal placeholders, check all links, and add only assets you intend to make public.
