const reports = JSON.parse(localStorage.getItem("reports"));

for (let report of reports) {

  const section = document.createElement("section");

  const agentName = document.createElement("p");
  agentName.textContent = report.agentName

  const agentCode = document.createElement("p");
  agentCode.textContent = report.agentCode

  const target = document.createElement("p");
  target.textContent = report.target

  const information = document.createElement("p");
  information.textContent = report.information

  const submissionTime = document.createElement("p");
  submissionTime.textContent = report.submissionTime

  section.append(agentName, agentCode, target, information, submissionTime);
  document.body.append(section)
}
