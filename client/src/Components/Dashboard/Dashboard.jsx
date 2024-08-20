import Sidebar from "./Sidebar/Sidebar"
import Content from "./Content/Content"

const Dashboard = () => {
    return (
        <div className="app">
            <Sidebar />
            <Content />
        </div>
    )
}

export default Dashboard