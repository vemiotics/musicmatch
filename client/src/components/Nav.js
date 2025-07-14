import logo from '../images/stagecrunch_white.png'
import colorLogo from '../images/stagecrunch_black.png'

const Nav = ({minimal, setShowModal, showModal, setIsSignUp}) => {

    const handleClick = () => {
        setShowModal(true)
        setIsSignUp(false)
    }

    const authToken = false;
    return(
        <nav>
            <div className= "logo-container">
                <img className="logo" src={minimal ? colorLogo : logo} />
            </div>

            {!authToken && !minimal && <button 
                className="nav-button"
                onClick={handleClick}
                disabled={showModal}
                >Log in</button>}
        </nav>
    )
}

export default Nav