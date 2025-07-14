import TinderCard from "react-tinder-card"
import { useState } from "react"
import ChatContainer from "../components/ChatContainer"


const Dashboard = () => {

    const characters = [
        {
          name: 'Richard Hendricks',
          url: 'https://vemiotics.com/wp-content/uploads/2024/09/screenshot-2024-06-28-at-4.17.30e280afpm.png'
        },
        {
          name: 'Erlich Bachman',
          url: 'https://vemiotics.com/wp-content/uploads/2024/09/screenshot-2024-06-28-at-4.17.30e280afpm.png'
        },
        {
          name: 'Monica Hall',
          url: 'https://vemiotics.com/wp-content/uploads/2024/09/screenshot-2024-06-28-at-4.17.30e280afpm.png'
        },
        {
          name: 'Jared Dunn',
          url: 'https://vemiotics.com/wp-content/uploads/2024/09/screenshot-2024-06-28-at-4.17.30e280afpm.png'
        },
        {
          name: 'Dinesh Chugtai',
          url: 'https://vemiotics.com/wp-content/uploads/2024/09/screenshot-2024-06-28-at-4.17.30e280afpm.png'
        }
      ]
    const [lastDirection, setLastDirection] = useState()
  
    const swiped = (direction, nameToDelete) => {
      console.log('removing: ' + nameToDelete)
      setLastDirection(direction)
    }
  
    const outOfFrame = (name) => {
      console.log(name + ' left the screen!')
    }

    return(
        <div className="dashboard">
             <ChatContainer/>
            <div className="swipe-container">
                <div className="card-container">

                    {characters.map((character) =>
                        <TinderCard 
                            className='swipe' 
                            key={character.name} 
                            onSwipe={(dir) => swiped(dir, character.name)} 
                            onCardLeftScreen={() => outOfFrame(character.name)}>
                            <div style={{ backgroundImage: 'url(' + character.url + ')' }} 
                                className='card'>
                            <h3>{character.name}</h3>
                            </div>
                        </TinderCard>
                    )}

                    <div className="swipe-info">
                        
                        {lastDirection ? <p>You swiped {lastDirection}</p> : <p/>}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard