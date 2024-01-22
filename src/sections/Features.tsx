import ScreenLogo from '../images/screen_icon.svg';
import BluetoothLogo from '../images/bluetooth_icon.svg';
import BatteryLogo from '../images/battery_icon.svg';
import BulbLogo from '../images/bulb_icon.svg';


const FeaturesSection = () => {
    return(
        <div className="pb-5 pb-lg-4 tm-container">
            <div className="container pb-2">
                <div className="row gy-5">
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className='text-center text-md-start pb-3 pb-md-4 pb-lg-0'>
                            <img src={ScreenLogo} alt="" className="mb-md-3 mb-lg-0 features__icon" />

                            <h2 className="pb-4 pt-5 mb-0 pt-md-4 text-uppercase features__heading text-blue-dark">highly compatible</h2>

                            <p className="text-blue-light fw-medium fs-6 mb-0 features__paragraph">Easy to use and works well with all major computer brands, gaming consoles and mobile devices. Plug & play, no installation or driver needed.</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className='text-center text-md-start pb-3 pb-md-4 pb-lg-0'>
                            <img src={BluetoothLogo} alt="" className="mb-md-3 mb-lg-0 features__icon" />

                            <h2 className="pb-4 pt-5 mb-0 pt-md-4 text-uppercase features__heading text-blue-dark">WIRELESS WITH BLUETOOTH</h2>

                            <p className="text-blue-light fw-medium fs-6 mb-0 features__paragraph">Powerful 2.4G RF technology allows you to connect the cordless keyboard from up to 30ft away. Simply plug the unifying receiver into your computer.</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className='text-center text-md-start'>
                            <img src={BatteryLogo} alt="" className="mb-md-3 mb-lg-0 features__icon" />

                            <h2 className="pb-4 pt-5 mb-0 pt-md-4 text-uppercase features__heading text-blue-dark">HIGH CAPACITY BATTERY</h2>

                            <p className="text-blue-light fw-medium fs-6 mb-0 features__paragraph">Equipped with a long-lasting built-in battery, you'll never have to spend a dime on replaceable ones. Enjoy 40 hours of usage time between charges.</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className='text-center text-md-start'>
                            <img src={BulbLogo} alt="" className="mb-md-3 mb-lg-0 features__icon" />

                            <h2 className="pb-4 pt-5 mb-0 pt-md-4 text-uppercase features__heading text-blue-dark">RGB BACKLIT MODES</h2>

                            <p className="text-blue-light fw-medium fs-6 mb-0 features__paragraph">Choose from 4 backlight brightness levels and adjustable breathing speed. Each key glows intensely in the dark and helps you type in low light conditions.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturesSection;