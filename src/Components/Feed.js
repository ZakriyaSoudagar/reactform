import React from "react";


class Feed extends React.Component
{
    
    
   
    
     
    render()
    {
        
        return(
            <>
            <h1>EMPLOYEE FEEDBACK DATA</h1>
            
            { this.props.form.length >0 && this.props.form.map((value, i)=>{
                return(
                    <div className="Box">
                        <h2>Name: {value.name} | Department: {value.dept} | Rating: {value.rating}</h2>
                       
                        </div>)
            })
        }
                        <div>
                        <button className="btn" onClick={this.props.back}>Go back</button>
                    </div>
           
            </>
                
                )
        }     
        }   
    export default Feed;
