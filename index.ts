const downloader = async (url: string, filename: string): Promise<void> => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
    }

    const blob = await response.blob();
    const objectUrl = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = objectUrl;
    link.download = filename;
    document.body.appendChild(link); // Required for Firefox
    link.click();

    document.body.removeChild(link); // Cleanup
    URL.revokeObjectURL(objectUrl); // Release memory
  } catch (error) {
    console.error("Download failed:", error);
    throw error; // Re-throw the error for further handling
  }
};

export default downloader;
