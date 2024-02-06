import { useState } from 'react'
import './App.css'
import Notification from './components/Notification.jsx'



function App() {
  const [numberOfNotifications, setNumberOfNotifications] = useState(3)
  const privateMessage = "Hello, thanks for setting up the Chess Club. I’ve been a member for a few weeks now and I’m already having lots of fun and improving my game."
  const imageUrl = "/image-chess.webp"

  return (
    <main>
      <div className="header">
        <div className="notifications-info">
          <h1>Notifications</h1>
          <p>{numberOfNotifications}</p>
        </div>
        <button onClick={() => setNumberOfNotifications(0)}>Mark all as read</button>
      </div>
      <div className="notifications-container">
        <Notification isNew={numberOfNotifications? true : false} profileName={"Mark Webber"} notificationAction={"reacted to your recent post"} relevantLink={{message: "My first tournament today!", isGroup: false}} time={"1m"}/>
        <Notification isNew={numberOfNotifications? true : false} profileName={"Angela Gray"} notificationAction={"followed you"} relevantLink={false} time={"5m"}/>
        <Notification isNew={numberOfNotifications? true : false} profileName={"Jacob Thompson"} notificationAction={"has joined your group"} relevantLink={{message: "Chess Club", isGroup: true}} time={"1 day"}/>
        <Notification isNew={false} profileName={"Rizky Hasanuddin"} notificationAction={"has sent you a private message"} privateMessage={privateMessage}relevantLink={false} time={"5 days"}/>
        <Notification isNew={false} profileName={"Kimberly Smith"} notificationAction={"commented on your picture"} relevantLink={false} imageUrl={imageUrl}time={"1 week"}/>
        <Notification isNew={false} profileName={"Nathan Peterson"} notificationAction={"reacted to your recent post"} relevantLink={{message: "5 end-game strategies to increase your win rate", isGroup: false}} time={"2 weeks"}/>
        <Notification isNew={false} profileName={"Anna Kim"} notificationAction={"left the group"} relevantLink={{message: "Chess Club", isGroup: true}} time={"2 weeks"}/>
      </div>
    </main>
  )
}

export default App
