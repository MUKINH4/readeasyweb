import NavBar from "@/components/NavBar";

export default function DashboardPage() {
    return (
        <>
            <NavBar active="dashboard"/>

            <main className="flex justify-center items-center">
                <div className="bg-[#8BAAAD] min-w-2/3 p-6 rounded m-6">
                    <h2 className="text-lg font-bold">Dashboard</h2>
                </div>
            </main>
        </>
    )
}