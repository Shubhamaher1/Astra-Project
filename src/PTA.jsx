import React from "react";
import App from "./App";


class PTA extends React.Component {


    myFunction() {

        const colo = document.getElementById("count").style.color;

        if (colo != "red") {
            const countlike = document.getElementById("count").innerHTML;
            document.getElementById("count").innerHTML = parseInt(countlike) + 1;
            document.getElementById("count").style.color = "red";
            document.getElementById("likebtn").style.color = "red";
        } else {
            const countlike = document.getElementById("count").innerHTML;
            document.getElementById("count").innerHTML = parseInt(countlike) - 1;
            document.getElementById("count").style.color = "blue";
            document.getElementById("likebtn").style.color = "blue";

        }


        console.log("function is working");

    }
    popup() {
        const Feedbacstore=[];
        if(screen.width>630){
            const divm = document.createElement("div");
        const div0 = document.createElement("div");
        divm.setAttribute("id","newdiv");
        divm.setAttribute("className","newdiv");
        div0.innerHTML="Only Collage Admin see your Feedback";
        const div1= document.createElement("div");
        const div2=document.createElement("div");
       
        const newelement = document.createElement("input");
        newelement.setAttribute("type", "textbox");
        newelement.setAttribute("id", "newelement");
        const sbtn= document.createElement("button");
        sbtn.setAttribute("id","submitbtn");
       // sbtn.addEventListener("click",send());
        

        sbtn.innerHTML="Send";
        sbtn.addEventListener("click",()=>{
            Feedbacstore.push(newelement.value);
            divm.remove();
        });
        const removebt= document.createElement("button");
        removebt.addEventListener("click", ()=>{
            newelement.value="";
        });
        removebt.setAttribute("id","removebtn");
       // removebt.addEventListener("click",remove());
        removebt.innerHTML="Resate";
        div2.appendChild(sbtn);
        div2.appendChild(removebt);
        div1.appendChild(newelement);
        divm.appendChild(div0);
        divm.appendChild(div1);
        divm.appendChild(div2);
        const apend = document.getElementById("section-two");
        apend.appendChild(divm);
       

        }else{
            let text;
            let person= prompt("Only Collage Admin see your Feedback");
            
            if(person==null){
                alert("Please Enter right Feedback");
            }else{

                Feedbacstore.push(person);
            }
        }

        console.log("button click");

    }
    pta(){
       if(screen.width<630){
           const pta= document.getElementById("pta-name-pta");
           pta.innerHTML="PTA";
       }
    }

    render() {
        return (
            <div className="main-part-sectionpta" >
                <section className="section-one">
                    <div className="main-pta" id="main-pta">


                        <div className="pta">
                            <div className="name-class-img1" >
                                <img src="https://tse2.mm.bing.net/th?id=OIP.O8vv9O4Ku4HvFQyep-NXMAHaLG&pid=Api&P=0&w=106&h=159" className="image1"></img>
                                <div className="name-class1"><h5>Saurabh Mantri</h5>
                                    <p>Class 4A</p>
                                </div>
                            </div>
                            <button className="pta-name-pta" id="pta-name-pta" onLoad={this.pta}>Announcement</button>
                        </div>

                        < div className="pta-body" id="pta-body">
                            <div className="pta-name-commint1">
                                School will be closed tommarow due  rain,<br></br> any change to School reopeninig will be <br></br>notifed.

                            </div>
                            <div></div>


                        </div>
                        <hr className="line"></hr>
                        <div className="comment-like">
                            <div className="like">
                                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                                <i onClick={this.myFunction} className="fa fa-thumbs-up" id="likebtn"></i>
                                <div className="count" id="count" onClick={this.myFunction}> 120</div>
                            </div>
                            <div className="comment" id="comment">
                                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                                <i onClick={this.popup} className="fa fa-comment"></i>
                                <div className="sendfeedback" onClick={this.popup}>Send Feedback</div>

                            </div>
                        </div>


                    </div>
                </section>
                <section className="section-two" id="section-two"></section>
            </div>
        );
    }
}
export default PTA;