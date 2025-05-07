import { Header } from "components"

const Dashboard = () => {

    const user = { name: "Gusth " }
    return (
        <main className="dashboard wrapper">
            <Header
                title={`Olá ${user?.name ?? 'Guest'} 👋`}
                description="Acompanhe atividades, tendências e destinos populares em tempo real"
            />
        </main>
    )
}

export default Dashboard