import React, {Component} from 'react';
import About from './Components/About.js'
import Home from './Components/Home.js'


class App extends Component{
   
    
  
    render(){
        return(
            <div>
                
                <Home />
                <About/>

            </div>

        )
    }
}

export default App