import React from 'react';



export default class Form extends React.Component{
   
   
   
    
    constructor(){
    	super();

    	this.state = {
            formData:'',
    		FirstName:'',
    		City:'',
    		Pincode:''
    	}
    }

    handleChange = (event) => {
    	this.setState({
    		[event.target.name] : event.target.value
    	})
    }

    componentDidMount(){

        const formData = localStorage.getItem('formData');
    
        this.setState({
            formData
        })

        console.log(FormData)
    }

    handleSubmit = (event) => {
   
     event.preventDefault(); //to avoid refresh after submit

     const {formData} =this.state // destructuring

     localStorage.setItem("formData",'')

     console.log(formData)
        
    }

    // componentWillUpdate(prevProps,nextState){
    //  localStorage.setItem("FormData",JSON.stringify(nextState))
        
    // }

    render(){

        const jsonData = [
            {
               firstName:
                   {
                       type:"string",
                       required:true
                   },
               address:{
                   type:"object",
                   schema:{
                       addressLine1:{type:"string",required:true},
                       addressLine2:{type:"string",required:true},
                       city:{type:"string",required:true},
                       state:{type:"string",required:true},
                       pincode:{type:"number",required:true},
                   }
               }
           }
           
           ]

    let arrSample = [];
    Object.keys(JSON).forEach(function(key) {
        arrSample.push(JSON[key]);
      console.log(arrSample);
    });
           
     

    	return(
    <div>

    <form>
     
    FirstName:     <input type="text" name="FirstName" value={this.state.FirstName} onChange={this.handleChange}/>
    
    City :           <input type="text" name='City' value={this.state.City} onChange={this.handleChange}/>
    
    Pincode :  <input type= "number" name="Pincode" value={this.state.Pincode} onChange={this.handleChange} />




    <button type="submit" onClick={this.handleSubmit} > Generate </button>

    </form>


    <section  style={{marginTop:'100px'}}>

    
          <textarea
            style={{width:'300px', height:'200px'}}
            
            value={jsonData.map(e => JSON.stringify(e).replace(/{|}/g, '')).join('\n')} 
            
            onChange={this.handleChange}
          />
        
    
    </section>

    
        
        <p>FirstName:"{this.state.FirstName}"</p>
        <p>City:"{this.state.City}"</p>
        <p>Pincode:"{this.state.Pincode}"</p>

        

    
    </div>
       
   
		)
    }
	

	
}