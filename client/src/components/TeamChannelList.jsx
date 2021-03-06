import React from 'react'
import { AddChannel } from '../assets'
const TeamChannelList = ({ children, error = false, loading, type }) => {
    console.log(children);
    console.log(error);
    console.log(loading);
    console.log(type);

    if (error) {
        return type === 'team' ? (
            <div className="team-channel-list">
                <p className="team-channel-list__message">
                    Connection Error, Please try again after some time
                </p>
            </div>
        ) : null;
    }

    if (loading) {
        return (
            <div className="team-channel-list">
                <p className="team-channel-list__message loading">
                    {type === 'team' ? "Channels" : "Messages"} loading.......
                </p>
            </div>
        )
    }

    return (
        <div className="team-channel-list">
            <div className="team-channel-list__header">
                <p className="team-channel-list__header__title">
                    {
                        type === "team" ? "Channels" : "Direct Messages"
                    }
                </p>
                {/* button */}
            </div>
            {children}
        </div>
    )
}

export default TeamChannelList
