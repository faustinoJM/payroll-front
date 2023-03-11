import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import "./home.scss"
import Sticky from 'react-stickynode';

const Home = () => {
    return (
        <div className="home">
            <Sidebar />
            <div className="homeContainer">
                <Navbar />
                <div className="listContainer">
                    <div className="listTitle">Dashboard</div>
                        Bem vindo Admin
                </div>
            </div>
        </div>
    )
}

export default Home