import Header from "../../../components/Header";

const Dashboard = () => {
    const user = { name: 'admin'};
    return (
        <main className="dashboard wrapper">
            <Header
            title = {`Welcome ${user?.name ?? 'Guest'}👋`}
            description= "Track activity, trends and popular destinations in real time"
            />

            Dashboard Page Content

        </main>


    )
}
export default Dashboard
