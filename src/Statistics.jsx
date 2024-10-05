import brandIcon from "./assets/images/icon-brand-recognition.svg"
import detailIcon from "./assets/images/icon-detailed-records.svg"
import customIcon from "./assets/images/icon-fully-customizable.svg"
import boostBackground from "./assets/images/bg-boost-desktop.svg"

function Statistics() {
    return (
        <div className="stat-container">
            <div className="stat-header">
                <h2>Advanced Statistics</h2>
                <p>Track how your links are working across the web with our
                    advanced statistics dashboard</p>
            </div>
            <hr></hr>


            <div className="stat-info">
                <div className="info-one">
                    <img src={brandIcon}></img>
                    <h3>Brand Recognition</h3>
                    <p>Boost your brand recognition with each click.
                        Generic links don't mean a thing. Branded links
                        help instil confidence in your content.
                    </p>
                </div>
                <div className="info-two">
                    <img src={detailIcon}></img>
                    <h3>Detailed Records</h3>
                    <p>Gain insights into who is clicking your links.
                        Knowing when and where people engage with your
                        content helps inform better decisions.
                    </p>
                </div>
                <div className="info-three">
                    <img src={customIcon}></img>
                    <h3>Fully Customizable</h3>
                    <p>Improve brand awareness and content discoverability
                        through customizable links, supercharging audience
                        engagement.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Statistics