async function loadSystemInfo() {
    try {
        const response = await fetch("/api/system");

        const data = await response.json();

        document.getElementById("hostname").textContent =
            data.hostname;

        document.getElementById("platform").textContent =
            `${data.platform} ${data.architecture}`;

        document.getElementById("cpu").textContent =
            `${data.cpuCores} cores`;

        const usedGB =
            data.memory.used / 1024 / 1024 / 1024;

        document.getElementById("memory").textContent =
            `${usedGB.toFixed(2)} GB`;

        const uptimeHours =
            data.uptime / 3600;

        document.getElementById("uptime").textContent =
            `${uptimeHours.toFixed(1)} hours`;

    } catch (error) {
        console.error(
            "Failed to load system information:",
            error
        );
    }
}

loadSystemInfo();