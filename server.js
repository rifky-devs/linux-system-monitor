const express = require("express");
const os = require("os");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static("public"));

app.get("/api/health", (req, res) => {
    res.json({
        status: "online",
        service: "Linux System Monitor",
        timestamp: new Date().toISOString()
    });
});

app.get("/api/system", (req, res) => {
    const totalMemory = os.totalmem();
    const freeMemory = os.freemem();
    const usedMemory = totalMemory - freeMemory;

    res.json({
        hostname: os.hostname(),
        platform: os.platform(),
        architecture: os.arch(),
        cpuCores: os.cpus().length,
        uptime: os.uptime(),
        memory: {
            total: totalMemory,
            used: usedMemory,
            free: freeMemory
        }
    });
});

app.listen(PORT, () => {
    console.log(
        `Linux System Monitor running at http://localhost:${PORT}`
    );
});