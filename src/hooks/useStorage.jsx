import { useState, useEffect } from "react";
import {
  projectStorage,
  projectFirestore,
  timestamp,
} from "../firebase/config";

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState();
  const [url, setUrl] = useState();

  useEffect(() => {
    const storageRef = projectStorage.ref(file.name);
    const storeRef = projectFirestore.collection("images");
    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        // console.log(snap);
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        // console.log(storeRef);
        setProgress(percentage);
      },
      (error) => {
        setError(error);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        const createdAt = timestamp();
        // console.log(url);
        storeRef.add({ url, createdAt });
        console.log(storeRef);
        setUrl(url);
      }
    );
  }, [file]);

  return { progress, url, error };
};

export default useStorage;
