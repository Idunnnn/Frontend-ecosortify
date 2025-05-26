export const getFirebaseErrorMessage = (error) => {
    if (!error?.code) return "Terjadi kesalahan tidak diketahui.";

    switch (error.code) {
        case "auth/email-already-in-use":
            return "Email sudah digunakan. Silakan gunakan email lain.";
        case "auth/invalid-email":
            return "Email tidak valid. Periksa kembali format email Anda.";
        case "auth/weak-password":
            return "Password terlalu lemah. Gunakan minimal 8 karakter dengan kombinasi huruf dan angka.";
        case "auth/missing-password":
            return "Password harus diisi.";
        case "auth/operation-not-allowed":
            return "Metode pendaftaran belum diaktifkan di Firebase.";
        case "auth/network-request-failed":
            return "Gagal terhubung ke jaringan. Periksa koneksi internet Anda.";
        case "auth/internal-error":
            return "Terjadi kesalahan internal. Silakan coba lagi nanti.";
        default:
            return error.message || "Terjadi kesalahan. Silakan coba lagi.";
    }
};