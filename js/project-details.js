const projects = {
  "smart-campus-360": {
    title: "Smart Campus 360",
    status: "Project idea",
    illustration: "smart-campus-illustration",
    artClass: "project-art-campus",
    overview: "An integrated smart campus platform concept designed to improve access to college facilities and services.",
    areas: [
      "Campus navigation and room finding.",
      "Lost and found management.",
      "Smart canteen advance booking.",
      "Admin management for campus information and services.",
    ],
  },
  "aegisrecover-ai": {
    title: "AegisRecover AI",
    status: "Project idea",
    illustration: "aegisrecover-illustration",
    artClass: "project-art-aegis",
    overview: "An AI-assisted digital data recovery project concept focused on analysing damaged, deleted or corrupted storage data.",
    areas: [
      "Storage scanning and recovery analysis.",
      "Identification of recoverable information.",
      "File reconstruction and classification.",
      "Recovery reporting and analysis.",
    ],
    note: "Demo detection examples may use synthetic data.",
  },
  "milk-tracker": {
    title: "Milk Tracker",
    status: "Project idea",
    illustration: "milk-tracker-illustration",
    artClass: "project-art-milk",
    overview: "A dairy management system concept designed to organize milk collection and farmer payment records.",
    areas: [
      "Daily milk collection records.",
      "Milk quantity and fat readings.",
      "Farmer earnings and balance calculation.",
      "Feed deductions and payment history.",
      "Weekly and monthly reports.",
      "Multi-dairy management concept.",
    ],
  },
  "ai-scam-message-detector": {
    title: "AI Scam Message Detector",
    status: "Project idea",
    illustration: "scam-detector-illustration",
    artClass: "project-art-scam",
    overview: "An Android application project focused on identifying potentially suspicious or fraudulent messages.",
    areas: [
      "SMS message analysis.",
      "Identification of suspicious message patterns.",
      "Scam warning and notification concepts.",
      "User-friendly message safety interface.",
    ],
  },
};

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.getRegistration("/")
    .then((registration) => registration || navigator.serviceWorker.register("/service-worker.js", { scope: "/" }))
    .catch((error) => console.error("Service worker registration failed:", error));
}

const params = new URLSearchParams(window.location.search);
const projectId = params.get("project");
const project = Object.prototype.hasOwnProperty.call(projects, projectId)
  ? projects[projectId]
  : undefined;
const projectCard = document.querySelector("#project-details-card");
const errorMessage = document.querySelector("#project-details-error");

if (!project) {
  projectCard.hidden = true;
  errorMessage.hidden = false;
} else {
  document.title = `${project.title} | Project Details`;
  document.querySelector("#project-details-title").textContent = project.title;
  document.querySelector("#project-details-status").textContent = project.status;
  document.querySelector("#project-details-overview").textContent = project.overview;
  const projectArt = document.querySelector("#project-details-art");
  projectArt.classList.add(project.artClass);
  projectArt.append(document.querySelector(`#${project.illustration}`).content.cloneNode(true));

  const areasList = document.querySelector("#project-details-areas");
  project.areas.forEach((area) => {
    const item = document.createElement("li");
    item.textContent = area;
    areasList.append(item);
  });

  if (project.note) {
    const note = document.querySelector("#project-details-note");
    note.textContent = project.note;
    note.hidden = false;
  }
}
