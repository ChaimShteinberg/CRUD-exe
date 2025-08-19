const reports = JSON.parse(localStorage.getItem("reports"));
const article = document.getElementById("reports");

for (let [index, report] of reports.entries()) {
  const section = document.createElement("section");
  section.className = "report";
  section.id = `report${index}`;

  const agentName = document.createElement("p");
  agentName.id = "agentName";
  agentName.textContent = "Agent Name: " + report.agentName;

  const agentCode = document.createElement("p");
  agentCode.id = "agentCode";
  agentCode.textContent = "Agent Code: " + report.agentCode;

  const target = document.createElement("p");
  target.id = "target";
  target.textContent = "Target: " + report.target;

  const information = document.createElement("p");
  information.id = "information";
  information.textContent = "Information: " + report.information;

  const submissionTime = document.createElement("p");
  submissionTime.id = "submissionTime";
  submissionTime.textContent = "Submission Time: " + report.submissionTime;

  const features = document.createElement("section");
  features.className = "features";

  const edit = document.createElement("button");
  edit.className = "edit";
  edit.textContent = "edit report";

  features.append(edit);

  section.append(
    agentName,
    agentCode,
    target,
    information,
    submissionTime,
    features
  );
  article.append(section);
}

article.addEventListener("click", (e) => {
  if (e.target.className === "edit") {
    const section = e.target.closest(".report");
  }
});
