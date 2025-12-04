import { useEffect, useState } from "react";

const STORAGE_KEY = "stream_favorites";

export default function UseFavorites() {
    const [favorites, setFavorites] = useState([]);

    // Load from localStorage saat komponen pertama kali jalan
    useEffect(() => {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
            setFavorites(JSON.parse(stored));
        }
    }, []);

    // Simpan ke localStorage setiap kali ada perubahan
    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
    }, [favorites]);

    // Tambah film
    const addFavorite = (movie) => {
        if (!favorites.find((m) => m.id === movie.id)) {
            setFavorites([...favorites, movie]);
        }
    };

    // Hapus film
    const removeFavorite = (id) => {
        setFavorites(favorites.filter((m) => m.id !== id));
    };

    // cek apakah sudah difavoritkan
    const isFavorite = (id) => {
        return favorites.some((m) => m.id === id);
    };

    return { favorites, addFavorite, removeFavorite, isFavorite };
}
