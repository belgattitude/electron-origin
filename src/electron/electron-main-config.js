import os from "os";
import path from "path";

export default class ElectronMainConfig {

  constructor() {

  }

  getFFBinariesConfig() {
    const platform = os.platform();
    let binariesPath = "";
    if (process.env.NODE_ENV === "production") {
      binariesPath = path.join(process.resourcesPath, "bin");
    } else {
      if (platform !== "linux" && platform !== "darwin" && platform !== "win32") {
        console.error("Unsupported platform.");
        process.exit(1);
      }
      const arch = os.arch();
      if (platform === "darwin" && arch !== "x64") {
        console.error("Unsupported architecture.");
        process.exit(1);
      }
      let basePath = path.join(__dirname, "..", "..");
      binariesPath = path.join(basePath, "ffbinaries", platform, arch);
    }
    return {
      path: binariesPath,
      ffmpeg: path.join(binariesPath, platform === "win32" ? "ffmpeg.exe" : "ffmpeg"),
      ffprobe: path.join(binariesPath, platform === "win32" ? "ffprobe.exe" : "ffprobe"),
    };
  }

}
