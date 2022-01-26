import React from "react";

class Absent extends React.Component{
    render(){
        return(
           <div className="main-part-section">
                <div className="absent">
                
                <div className="name-class-img">
                <img src="https://tse2.mm.bing.net/th?id=OIP.O8vv9O4Ku4HvFQyep-NXMAHaLG&pid=Api&P=0&w=106&h=159" className="image"></img>
                    <div className="name-class"><h5>Saurabh Mantri</h5>
                    <p>Class 4A</p>
                    </div>
                </div>
                <button className="absent-name">Absent</button>
            </div>
           </div>
        );
    }
}
export default Absent;