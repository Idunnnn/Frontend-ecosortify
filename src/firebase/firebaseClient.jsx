import { auth, provider } from "./config";
import { signInWithPopup } from "firebase/auth";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const continueWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    const token = await user.getIdToken();
    document.cookie = `firebase_id_token=${token}; path=/; max-age=86400; Secure; SameSite=Strict`;

    console.log("Berhasil login: ", user.displayName, user.email, user);
  } catch (error) {
    console.error("gagal login: ", error.message);
  }
};


export const isUserLogIn = () => {
  const auth = getAuth();

  return new Promise((resolve) => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const token = await user.getIdToken();
        alert(`User sudah login. Token: ${token}`);
        resolve(token);
      } else {
        alert("User belum login");
        resolve(null);
      }
    });
  });
};
