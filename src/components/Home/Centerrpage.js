import React from 'react';
import '../../style/centerrpage.css'

function Centerrpage() {
    return (
        <div>
            <div className="videoTag">
                <video  autoPlay loop muted>
                    <source src='https://blinglane.com/cdn/shop/videos/c/vp/66a51219bc534d048c7fd206d5906a2c/66a51219bc534d048c7fd206d5906a2c.HD-1080p-4.8Mbps-21158017.mp4?v=0' type="video/mp4" />
                </video>
            </div>
        </div>
    );
}

export default Centerrpage;
