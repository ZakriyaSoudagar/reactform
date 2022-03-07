import React from "react";
import './Body.css'
import Feed from "./Feed";


class Body extends React.Component{
    constructor()
    {
        super();
        this.state ={
            name: "",
            dept: "",
            rating : "",
            formSubmit: true,
            user : []
        }

    }

    handleChange =(event)=>
    {
        this.setState({
            [event.target.name]:event.target.value
        })
        
    }
    submitForm = (event)=>
    {
        event.preventDefault();
        const tempObj ={
            name: this.state.name,
            dept : this.state.dept,
            rating : this.state.rating,
            
        }


        const arr = this.state.user;
        arr.push(tempObj);
        this.setState({
            user:arr,
            formSubmit: !this.state.formSubmit
        });
        console.log(this.state)
      
           }

           goBack =()=>
        {
            this.setState({formSubmit:!this.state.formSubmit})
        }
           

    

    render()
    {
        return( 
            <>
            <div>
                {this.state.formSubmit && (
                <>
                <h1>EMPLOYEE FEEDBACK FORM.</h1>
                <form>
                <label for='name'>Name:</label>
                <input id='input' type='text' name="name" placeholder="Name" onChange={this.handleChange} value={this.state.name}></input>
                <br/>

                <label className='input1' for='dept'>Department:</label>
                <input  type='text' name="dept" placeholder="Dept" onChange={this.handleChange} value={this.state.dept}></input>
                <br/>

                <label for='rating'>Rating:</label>
                <input id='input' type='number' name="Rating" placeholder="rating" onChange={this.handleChange} value={this.state.rating}></input>
                <br/>
                <button type="submit" className="btn" onClick={this.submitForm} >Submit</button>
        </form>

                

                
        </>)}
        {!this.state.formSubmit && <Feed form ={this.state.user} back={this.goBack}/>}
                    
                
            
                
                 </div>
                 </>
            )
    }
}
export default Body;







