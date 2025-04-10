import { redirect } from "next/navigation"

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
    const response = await fetch(API_URL, options)


    if (!response.ok) {
        const errors = await response.json()
        return {
            values: {
                name: formData.get("name"),
                icon: formData.get("icon")
            },
            error: {
                name: errors.find(e => e.field === "name")?.message,
                icon: errors.find(e => e.field === "icon")?.message
            }
        }
    }
    redirect("/genres")
}

export async function getGenres() {
    const response = await fetch(API_URL)
    return await response.json();
}