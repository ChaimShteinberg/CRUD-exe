const reports = JSON.parse(localStorage.getItem("reports"));
const article = document.getElementById("reports")

for (let report of reports) {

  const section = document.createElement("section");

  const agentName = document.createElement("p");
  agentName.textContent = 'Agent Name: ' + report.agentName

  const agentCode = document.createElement("p");
  agentCode.textContent = 'Agent Code: ' + report.agentCode

  const target = document.createElement("p");
  target.textContent = 'Target: ' + report.target

  const information = document.createElement("p");
  information.textContent = 'Information: ' + report.information

  const submissionTime = document.createElement("p");
  submissionTime.textContent = "Submission Time: " + report.submissionTime

  section.append(agentName, agentCode, target, information, submissionTime);
  article.append(section)
}
