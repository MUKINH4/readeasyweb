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

<<<<<<< HEAD

    if (!response.ok) {
        const errors = await response.json()
=======
    if (!response.ok) {
        const errors = await response.json()
        console.log(errors.find(e => e.field === "icon")?.message)
>>>>>>> 3b83538df21e641b4371836d3c8f949c5f6d5553
        return {
            values: {
                name: formData.get("name"),
                icon: formData.get("icon")
            },
<<<<<<< HEAD
            error: {
=======
            errors: {
>>>>>>> 3b83538df21e641b4371836d3c8f949c5f6d5553
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