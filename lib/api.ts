const API_URL = "http://127.0.0.1:8000/api";

export async function getLatestNews() {
    const res = await fetch(`${API_URL}/news`, { cache: "no-store" });
    if (!res.ok) return [];
    return res.json();
}

export async function getNewsDetail(id: string) {
    const res = await fetch(`${API_URL}/news/${id}`, { cache: "no-store" });
    if (!res.ok) return null;
    return res.json();
}
