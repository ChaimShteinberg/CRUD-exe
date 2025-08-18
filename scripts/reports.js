import Report from "../modules/report.module.js";

const SendReport = document.getElementById("SendReport");

SendReport.addEventListener("click", (event) => {
  event.preventDefault();

  const agentName = document.getElementById("agentName").value;
  const agentCode = document.getElementById("agentCode").value;
  const target = document.getElementById("target").value;
  const information = document.getElementById("information").value;
  const submissionTime = new Date();

  const report = new Report(
    agentName,
    agentCode,
    target,
    information,
    submissionTime
  );
  let reports;
  reports = JSON.parse(localStorage.getItem("reports"));
  if (!reports) {
    reports = [];
  }
  reports.push(report);
  localStorage.setItem("reports", JSON.stringify(reports));
});
