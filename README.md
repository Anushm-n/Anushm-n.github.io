# Personal Portfolio Website

A responsive personal portfolio built with semantic HTML, CSS, and vanilla JavaScript. No frontend framework or package installation is required.

## Project structure

```text
portfolio/
├── index.html       Page content and portfolio sections
├── css/
│   └── style.css    Theme, layout, responsive styles, and motion
├── js/
│   └── script.js    Navigation, scroll behavior, resume check, and form validation
├── assets/
│   ├── profile.png  Add your own profile photo here
│   └── resume.pdf   Add your own resume here
└── README.md        Setup, editing, testing, and publishing notes
```

The `assets` folder is intentionally empty until you add your own photo and resume. The page shows a photo placeholder and keeps the resume download hidden until you add your own PDF.

## Run locally with VS Code Live Server

1. Open the `portfolio` folder in VS Code.
2. Install the **Live Server** extension if it is not already installed.
3. Open `index.html`, then click **Go Live** in the VS Code status bar (or right-click the file and choose **Open with Live Server**).
4. The site opens in your browser. The resume availability check works when served over Live Server.

## Personalize before publishing

- Replace `[Your Name]`, `[Year]`, the university placeholder, and the placeholder email in `index.html`.
- Replace GitHub and LinkedIn links with your own profiles.
- Review every skill and remove anything you do not want to claim.
- Edit project descriptions, add actual technologies, and replace the example `#contact` project links with repository/demo URLs only when those are available. The listed projects are labeled as ideas and do not imply completion or deployment.
- Add your own `assets/profile.png`. To show it instead of the illustrated placeholder, replace the `.portrait-placeholder` element in `index.html` with an image, for example:

  ```html
  <img class="profile-photo" src="assets/profile.png" alt="Portrait of [Your Name]">
  ```

  Add image styling in `css/style.css` to make it fill the portrait frame. Use a reasonably sized, compressed image.
- Add your actual resume PDF at `assets/resume.pdf`. Then, in `index.html`, remove the `hidden` attribute from the **Download Resume** link and update the placeholder status text. Until then, the button stays hidden, so visitors cannot click a missing file.
- Update the footer name placeholder.

## Contact form limitation

The form validates name, email, subject, and message in the browser. **HTML, CSS, and JavaScript alone cannot securely deliver submissions to your email.** The current form intentionally does not send or store anything. Before using it for real inquiries, connect a reputable form service or your own server-side endpoint, then update the form submission code and privacy information as needed.

## Test the site

1. Use every desktop navigation link and verify the corresponding section becomes active.
2. Resize the browser to mobile width; open the menu, follow a link, and confirm the menu closes. Press Escape to close an open menu.
3. Scroll down to reveal the back-to-top button, then use it to return to the top.
4. Submit the contact form empty and with invalid email/short values; correct the errors and submit valid values. The page should say the demo does not send messages.
5. Confirm the resume placeholder appears before adding a PDF. Add your own `assets/resume.pdf`, remove `hidden` from its link in `index.html`, and reload using Live Server to verify the download.
6. Open browser developer tools and check the Console for errors. Check the mobile and desktop layouts and try keyboard navigation.

## Publish for free

For **GitHub Pages**, push this folder to a GitHub repository and select the branch/folder containing `index.html` in the repository's Pages settings. For **Netlify**, deploy the `portfolio` folder as the site directory. Before publishing, replace personal placeholders, check all links, and add only assets you intend to make public.
