function updateTime() {
  const estElement = document.getElementById("est");
  const sgnElement = document.getElementById("sgn");

  const now = new Date();

  // Get EST time
  const estTime = new Date(
    now.toLocaleString("en-US", { timeZone: "America/New_York" })
  );
  estElement.textContent = estTime.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  // Get SGN time
  const sgnTime = new Date(
    now.toLocaleString("en-US", { timeZone: "Asia/Ho_Chi_Minh" })
  );
  sgnElement.textContent = sgnTime.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
}

setInterval(updateTime, 1000);
updateTime(); // Initial call to set time immediately
