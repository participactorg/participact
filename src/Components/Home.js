import React, {Component} from 'react';

class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            hover : false
        }
    }

    showanim(n){
        this.setState({hover:n})
    }


    render(){
        return (

            <div className='container-fluid bg page'>
               
                
                <div  className='ctnr-home-txt'>
                    <img className='logo-fp'src='image/2x/titre.png' alt='ParticipAct'/>
                    <div className='pres' style={{}}>
                        <p>Participact met en relation un public intéressé par un volontariat utile avec des organisations
                            locales (associations, ONG, coopératives, et autres) à la recherche de volontaires. Il s’agit
                            d’une plateforme d’échange entre des personnes des quatre coins du monde ayant toutes en commun 
                            cette envie de participer à un projet humaniste et porteur de sens.<br/>   
                            <strong> ParticipAct aspire à créer du lien !</strong>
                        
                            <br/>
                            Transparence, collaboration et action locale sont les valeurs de Participact
                            <br/>
                            À vous maintenant, volontaires, organisations, associations, entrepreneurs de rejoindre notre action !
                        </p> 

                    </div>
                </div>

                <div className='ctnr-home-btns' >
                    
                    <a  href='#about' className='btnGen btn' onMouseOver={()=>this.showanim(true)} onMouseLeave={()=>this.showanim(false)}>En savoir plus</a>
                    {this.state.hover ? <img className='item-scroll' src='image/down.png' alt='scroll down'></img> : <div className='item-void-scroll'></div>}


                </div>
                
    
            </div>
        )
    }
}

export default Home;