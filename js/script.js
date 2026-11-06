document.documentElement.classList.add("js");

const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".primary-navigation");
const navigationLinks = [...document.querySelectorAll(".nav-link")];
const backToTopButton = document.querySelector(".back-to-top");
const contactForm = document.querySelector("#contact-form");
const formFeedback = document.querySelector("#form-feedback");

// Keep the mobile menu state in sync with its accessible button label.
function closeNavigation() {
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation menu");
  navigation.classList.remove("is-open");
}

menuToggle.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  menuToggle.setAttribute("aria-label", isExpanded ? "Open navigation menu" : "Close navigation menu");
  navigation.classList.toggle("is-open", !isExpanded);
});

navigationLinks.forEach((link) => {
  link.addEventListener("click", closeNavigation);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeNavigation();
    closeSkillDetails();
  }
});

// Highlight the navigation item for the section currently in view.
const sections = [...document.querySelectorAll("main section[id]")];
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;

    navigationLinks.forEach((link) => {
      const isCurrentSection = link.getAttribute("href") === `#${entry.target.id}`;
      link.classList.toggle("is-active", isCurrentSection);
      if (isCurrentSection) {
        link.setAttribute("aria-current", "location");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  });
}, { rootMargin: "-30% 0px -60% 0px" });

sections.forEach((section) => sectionObserver.observe(section));

const revealElements = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}

const skillDetails = {
  c: {
    name: "C",
    introduction: "Programming fundamentals learned and practised with C.",
    topics: ["Variables and data types", "Operators and expressions", "Conditional statements", "Loops", "Functions", "Arrays and strings", "Pointers", "Structures"],
  },
  java: {
    name: "Java",
    introduction: "Java syntax and object-oriented programming fundamentals.",
    topics: ["Object-oriented programming basics", "Classes and objects", "Data types and variables", "Conditional statements and loops", "Methods", "Inheritance and polymorphism basics", "Exception handling basics"],
  },
  python: {
    name: "Python",
    introduction: "Python programming fundamentals and common data structures.",
    topics: ["Variables and data types", "Operators", "Conditional statements", "Loops", "Functions", "Lists, tuples and dictionaries", "File handling basics"],
  },
  html: {
    name: "HTML",
    introduction: "Core HTML structure and common page elements.",
    topics: ["HTML document structure", "Headings and paragraphs", "Links and images", "Lists and tables", "Forms and input fields", "Semantic HTML elements"],
  },
  css: {
    name: "CSS",
    introduction: "Styling and layout fundamentals for web pages.",
    topics: ["Selectors and properties", "Colors and backgrounds", "Margins and padding", "Flexbox and Grid basics", "Responsive design", "Transitions and animations"],
  },
  javascript: {
    name: "JavaScript",
    introduction: "JavaScript fundamentals for interactive web pages.",
    topics: ["Variables and data types", "Operators", "Functions", "Conditional statements and loops", "Arrays and objects", "DOM manipulation", "Event handling", "Form validation basics"],
  },
  php: {
    name: "PHP",
    introduction: "PHP fundamentals for server-side scripting and forms.",
    topics: ["PHP syntax", "Variables and data types", "Conditional statements and loops", "Functions", "Form handling", "Database connection basics"],
  },
  mysql: {
    name: "MySQL",
    introduction: "Database and table operations practised with MySQL.",
    topics: ["Database creation", "Table creation", "INSERT, UPDATE and DELETE", "SELECT queries", "Primary and foreign keys", "Joins", "Database management"],
  },
  sql: {
    name: "SQL",
    introduction: "Queries and basic data operations using SQL.",
    topics: ["SELECT statements", "WHERE conditions", "ORDER BY", "GROUP BY", "Aggregate functions", "Joins", "Basic CRUD operations"],
  },
  vscode: {
    name: "VS Code",
    introduction: "Editor features used while working on development projects.",
    topics: ["Code editing", "Extensions", "Integrated terminal", "Debugging basics", "Running HTML, CSS and JavaScript projects"],
  },
  git: {
    name: "Git",
    introduction: "Version control basics practised for tracking project changes.",
    topics: ["Repository initialization", "git add and git commit", "git status", "git push and git pull", "Branch basics", "Version control"],
  },
  github: {
    name: "GitHub",
    introduction: "Repository hosting and collaboration basics.",
    topics: ["Creating repositories", "Uploading projects", "README files", "Repository management", "GitHub collaboration basics"],
  },
  xampp: {
    name: "XAMPP",
    introduction: "Local development environment basics for PHP and MySQL projects.",
    topics: ["Apache server", "MySQL server", "phpMyAdmin", "Local website hosting", "Running PHP and MySQL projects locally"],
  },
};

const skillButtons = [...document.querySelectorAll(".skill-button")];
const skillDetailsPanel = document.querySelector("#skill-details");
const skillDetailsTitle = document.querySelector("#skill-detail-title");
const skillDetailsIntro = document.querySelector("#skill-detail-intro");
const skillTopics = document.querySelector("#skill-topics");
const skillDetailsClose = document.querySelector(".skill-details-close");
let activeSkillButton = null;

function closeSkillDetails() {
  if (skillDetailsPanel.hidden) return;

  skillDetailsPanel.hidden = true;
  skillDetailsPanel.classList.remove("is-open");
  activeSkillButton?.setAttribute("aria-expanded", "false");
  activeSkillButton?.focus();
  activeSkillButton = null;
}

skillButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const skill = skillDetails[button.dataset.skill];
    if (!skill) return;

    activeSkillButton?.setAttribute("aria-expanded", "false");
    activeSkillButton = button;
    button.setAttribute("aria-expanded", "true");
    skillDetailsTitle.textContent = skill.name;
    skillDetailsIntro.textContent = skill.introduction;
    skillTopics.replaceChildren(...skill.topics.map((topic) => {
      const item = document.createElement("li");
      item.textContent = topic;
      return item;
    }));

    skillDetailsPanel.hidden = false;
    skillDetailsPanel.classList.remove("is-open");
    void skillDetailsPanel.offsetWidth;
    skillDetailsPanel.classList.add("is-open");
    skillDetailsClose.focus();
  });
});

skillDetailsClose.addEventListener("click", closeSkillDetails);

function updateBackToTopVisibility() {
  backToTopButton.classList.toggle("is-visible", window.scrollY > 500);
}

window.addEventListener("scroll", updateBackToTopVisibility, { passive: true });
backToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
updateBackToTopVisibility();

document.querySelector("#current-year").textContent = String(new Date().getFullYear());

const fieldRules = {
  name: { element: document.querySelector("#contact-name"), error: document.querySelector("#name-error"), message: "Enter your name (at least 2 characters)." },
  email: { element: document.querySelector("#contact-email"), error: document.querySelector("#email-error"), message: "Enter a valid email address." },
  subject: { element: document.querySelector("#contact-subject"), error: document.querySelector("#subject-error"), message: "Enter a subject (at least 3 characters)." },
  message: { element: document.querySelector("#contact-message"), error: document.querySelector("#message-error"), message: "Enter a message (at least 10 characters)." },
};

function validateField(field) {
  const value = field.element.value.trim();
  const minimumLength = field.element.minLength > 0 ? field.element.minLength : 1;
  const isValid = field.element.validity.valid && value.length >= minimumLength;
  field.element.setAttribute("aria-invalid", String(!isValid));
  field.error.textContent = isValid ? "" : field.message;
  return isValid;
}

Object.values(fieldRules).forEach((field) => {
  field.element.addEventListener("input", () => {
    if (field.element.hasAttribute("aria-invalid")) {
      validateField(field);
    }
    formFeedback.textContent = "";
  });
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const isFormValid = Object.values(fieldRules).map(validateField).every(Boolean);

  if (!isFormValid) {
    formFeedback.textContent = "Please correct the highlighted fields.";
    contactForm.querySelector('[aria-invalid="true"]').focus();
    return;
  }

  const formData = new FormData(contactForm);
  const name = formData.get("name").trim();
  const email = formData.get("email").trim();
  const subject = formData.get("subject").trim();
  const message = formData.get("message").trim();
  const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
  const mailtoUrl = `mailto:anushmn2005@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  formFeedback.textContent = "Your email draft is ready. Please review it and press Send in your email application.";
  window.location.href = mailtoUrl;
});
