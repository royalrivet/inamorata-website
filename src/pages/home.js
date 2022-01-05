import React, {useState, useEffect, useRef} from "react";
import {Link} from "react-router-dom";
import {useInView} from "react-intersection-observer";
import {
    file1,file2, file3, file4, file5, logo1
} from '../images/'
import SecondPage from "../components/second_page";




function HomePage() {
    
    // create a scorll useEffect
    const [scrollY, setScrollY] = useState(0)
    const handleScroll = ()=> setScrollY(window.scrollY)
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return ()=> window.removeEventListener('scroll', handleScroll)
    }, []);

    //get the current height of the page --- this way the pages can be set to the current for all size viewports
    const initPageHeight = window.innerHeight
    const [pageHeight, setPageHeight] = useState(initPageHeight)
    const handleHeight = ()=> setPageHeight(window.innerHeight)
    useEffect(()=>{
        window.addEventListener('resize', handleHeight)
        return ()=> window.removeEventListener('onresize', handleHeight)
    },[])
    
    return(
        <div className="pageContent">
            <div className="navbar container">
                <Link to="/" className="nav home">HOME</Link>
                <Link to="/event" className="nav event">EVENTS</Link>
                <Link to="/about" className="nav about">ABOUT</Link> 
            </div>
            <div className="page container">
                <div className="page one logo" style={{ height: `${pageHeight}px`}}>
                    <p>OF MIXOLOGY IN'AMORATA</p>
                    <img src={logo1} alt="In'amorata Logo" id="page1" style={{ height: `${pageHeight * 0.8}px`,  transform: `translateY(${scrollY * 0.5}px)`}}/>
                    <p>BARTENDER UNDERGROUND</p>
                    
                </div>
                <div class="empty scroll" style={{height:`${pageHeight}px`}}></div>

                <div className="page two" style={{ height: `${pageHeight}px`}}>
                    <SecondPage data={pageHeight} scroll={scrollY}></SecondPage>
                </div>
                <div class="empty scroll" style={{height:`${pageHeight* 1.2}px`}}></div>

                <div className="page three">
                    <p>SPECIALIY COCKTAILS</p>
                    <img src={file4} alt="Specialty Cocktails Anamorata" id="page3" />
                </div>
                <div class="empty scroll" style={{height:`${pageHeight}px`}}></div>

                <div className="page four">
                    <p>CONSULTING AND EVENTS PLANNING</p>
                    <img src={file3} alt="Cassie creating Customer request" id="page4" />
                </div>
                <div class="empty scroll" style={{height:`${pageHeight}px`}}></div>
            </div>
        </div>
    )


}

export default HomePage