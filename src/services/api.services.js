import http from "../http-common";

class APIService {
  upload(file, onUploadProgress) {
    let formData = new FormData();

    formData.append("file", file);

    return http.post("/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress,
    });
  }

  getFiles() {
    return http.get("/files");
  }

  // Get a play
  getPlay(companyId, eventName) {
    return http.get("/play/" + companyId + "/" + eventName);
  }

  // Create a play
  createPlay(formData) {
    return http.post("/new_play", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  // Create a play
  updatePlay(formData) {
    return http.post("/new_play", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  // Create a subscription
  createSubscription(formData) {
    return http.post("/subscription", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }
}

export default new APIService();