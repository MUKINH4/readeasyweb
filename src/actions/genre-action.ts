const API_URL = "http://localhost:8080/genres"

export async function createGenre(initialState: any, formData: FormData) {
    
    const data = {
        name: formData.get("name"),
        icon: formData.get("icon")
    }

    const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    }
    fetch(API_URL, options)
}

export async function getGenres() {
    const response = await fetch(API_URL)
    return await response.json();
}