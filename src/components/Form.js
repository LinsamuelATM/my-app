import React from "react";

class Form extends React.Component{
    render(){
        return(
            <form onSubmit={this.props.getWeather}>
            <div> 
               <input type = "text" name = "city" placeholder = "City..."/>
               <input type = "text" name = "country" placeholder = "Country..."/>
               <button>Get Weather </button>
            </div>
            </form>
        );
    }

};

export default Form;