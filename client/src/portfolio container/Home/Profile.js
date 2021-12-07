import React from 'react'
import Typical from 'react-typical'

export default function Profile() {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <a href="https://www.facebook.com/profile.php?id=100005960736517">
                            <i className='fa fa-facebook-square'></i>
                        </a>
                        <a href="#">
                            <i className='fa fa-google-plus-square'></i>
                        </a>
                        <a href='#'>
                            <i className='fa fa-instagram'></i>
                        </a>
                        <a href='#'>
                            <i className='fa fa-youtube-square'></i>
                        </a>
                        <a href='#'>
                            <i className='twitter'></i>
                        </a>

                    </div>
                    <div className="profile-details-name">
                            <span className="primary-text">
                                {" "}
                                Hello I'm <span className="highlighted-text">Anjan Kumar</span>
                            </span>

                    </div>
                    <div className="profile-deatils-role">
                        <span className='primary-text'>
                            {" "}
                            <h1>
                                {" "}
                                <Typical
                                    loop={Infinity}
                                    steps={[
                                        "Enthusiastic Developer ",
                                        1500,
                                        "FrontEnd Developer",
                                        1500,
                                        "Graphics Designer",
                                        1500,
                                    ]}
                                />
                            </h1>
                            <span className ="profile-role-tagline">
                                Knack of building applications with front end.
                            </span>
                        </span>
                    </div>

                    <div className="profile-option">
                        <button className="btn primary-btn">
                            {" "}
                            Hire me {" "}
                        </button>
                        <a href=""></a>
                    </div>

                </div>

            </div>
            
        </div>
    )
}
