import React from 'react';
import './styles.css'

export default class Home extends React.Component{

    render(){
        const Data= this.props.jsonData; //props json from parent
        console.log(Data)
    
        const jsonDisplay= 
        
            Data.map((element, index)=>
       
              <section className="section" key={index}>
    
             <ul className="Styles" >
                <li>Name:{element.firstName}</li> 
                <li>Age:{element.age}</li>  
                <li>Qualification:{element.qualification}</li> ,
                {element.address.map((c, i) => (
           <ul key={i}>
        <li >City:{c.City}</li> 
        <li >State:{c.State}</li> 
        
      </ul>
    ))}                           
             </ul>                             
            </section>   
        )
        
       return(
        <section>
          
          <h1>Sample Json Display</h1>
        {jsonDisplay}

        </section>

    )
    }


    
    

 
   
     
    
}