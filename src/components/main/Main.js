import './Main.css';
import Chart from '../charts/chart';


const Main = () => {
    return (
        <main>

            <div className = "main__container">

                <div className = "main__title">
                    <img src="dashboard.svg" alt="dashbord_image" style = {{ height:'20vh'}} />
                    <div className = "main__greeting" >
                        <h2>Have a Good Day !</h2>
                        <p>Welcome to your admin dashbord</p>
                    </div>
                </div>

            </div>

            <div className = "main__cards">

                <div className = "card" >
                    <i className = "fa fa-user-o fa-2x text-lightblue"></i>
                    <div className = "card_inner">
                        <p className = "text-primary-p" > Number of Registered Students:</p>
                        <span className = "font-bold text-title">1478</span>
                    </div>
                </div>
                <div className = "card" >  
                    <i className = "fa fa-eye fa-2x text-red "></i>
                    <div className = "card_inner">
                        <p className = "text-primary-p" >Times of Watching: </p>
                        <span className = "font-bold text-title"> 3485 </span>
                    </div>
                </div>
                <div className = "card" >
                    <i className = "fa fa-video-camera fa-2x text-yellow "></i>
                    <div className = "card_inner">
                        <p className = "text-primary-p" > Number of Tutorials: </p>
                        <span className = "font-bold text-title">455</span>
                    </div>
                </div>
                <div className = "card" >
                    <i className = "fa fa-thumbs-up fa-2x text-green "></i>
                    <div className = "card_inner">
                        <p className = "text-primary-p" >Number of Likes:</p>
                        <span className = "font-bold text-title">1143</span>
                    </div>
                </div>
                
            </div>

            <div className = "charts" >

                <div className = "charts__left">
                    <div className = "charts__left__title">
                        <div>
                            <h1>Login Regions</h1>
                            <p>Cupertino, California, USA</p>
                        </div>
                        <i className = "fa fa-usd"></i>
                    </div>
                    <Chart/>
                </div>
                
                <div className = "charts__right">

                    <div className = "charts__right__title">
                        <div>
                            <h1>Status Reports</h1>
                            <p>Cupertino, California, USA</p>
                        </div>
                        <i className = "fa fa-use"></i>
                    </div>

                    <div className = "charts__right__cards" >
                        <div className = "card1">
                            <h1>Income</h1>
                            <p>$147800</p>
                        </div>
                        <div className = "card2">
                            <h1>Lorem </h1>
                            <p> test </p>
                        </div>
                        <div className = "card3">
                            <h1>Lorem </h1>
                            <p> test </p>
                        </div>
                        <div className = "card4">
                            <h1>Lorem </h1>
                            <p> test </p>
                        </div>
                        
                    </div>

                </div>

            </div>

        </main>
    );
}

export default Main;
