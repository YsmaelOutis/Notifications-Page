const Notification = ({isNew, profileName, notificationAction, relevantLink, time, privateMessage, imageUrl}) => {
    const srcProfileName = profileName.toLowerCase().replace(/ /g, '-')

    return (
        <>
            <div className={`notification-container ${isNew && `new-notification-container`}`}>
                <img src={`avatar-${srcProfileName}.webp`} alt="avatar" className="avatar"/>
                <div className="private-message-container">
                    <div className="notification">
                        <div className="notification-body">
                            <div className="notification-text"><a className='profile-name'>{profileName}</a>&nbsp; {notificationAction} <a className={`relevant-link ${relevantLink.isGroup && "group"}`}>&nbsp; {relevantLink && relevantLink.message}</a><div className={`${isNew && `new-notification-icon`}`}></div></div>
                            <p className='time'>{time} ago</p>
                        </div>
                        {imageUrl && <img src={imageUrl} className="notification-image" />}
                    </div>
                    {privateMessage && <p className='private-message'>{privateMessage}</p>}
                </div>
            </div>
        </>
    )
}

export default Notification