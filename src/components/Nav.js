import colorLogo from '../images/stagecrush.png'
import logo from '../images/stagecrush.png'

const Nav = ({minimal, authToken}) => {

    return(
        <nav>
            <div className= "logo-container">
                <img className="logo" src={minimal ? colorLogo : logo} />
            </div>

            {!authToken && <button className="nav-button">Log in</button>}
        </nav>
    )
}

export default Nav