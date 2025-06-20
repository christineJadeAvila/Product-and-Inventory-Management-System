import icon from "../assets/inventory-icon.png"
import logout from "../assets/logout-btn.svg"
import xbtn from "../assets/x-btn.svg"
import { useNavigate } from "react-router-dom"
import "./styles/SideBar.scss"


type Props = {
    onClose: () => void
}

function SideBar({onClose}: Props) {
    const navigate = useNavigate()
    
    const inventory = () => {
      navigate("/inventory")
    }
    const product = () => {
        navigate("/")
    }
  return (<>
    <div className="section-container">
        <div className="sidebar-container">
            <section className="header-bar-info-container">
                <div className="user-information-container">
                    <h3 className="user-name">User Name</h3>
                    <h6 className="user-role">User Role</h6>
                </div>
                <div className="close-button" onClick={onClose}><img src={xbtn} alt="" /></div>
            </section>
            <nav className="navigation-section">
                <div onClick={inventory} className="sidebar-navigation">
                    <img className="icon" src={icon} alt="" />
                    <p className="sidebar-text">Inventory</p>
                </div>
                <div onClick={product} className="sidebar-navigation product">
                    <img className="icon" src={icon} alt="" />
                    <p className="sidebar-text">Products</p>
                </div>
            </nav>
            <footer className="footer-section">
                <p className="logout-label">Log out</p>
                <img  src={logout} alt="" className="logout-button" />
            </footer>
        </div>
    </div>
  </>
  )
}

export default SideBar