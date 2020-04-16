import React,{Component} from 'react';

class About extends Component{
    render(){
        return (
            <div id='about'>
               <div className='container ctnr-valeurs' >

                       
                        <div className="valeurs">
                            <h1>Engagements Valeurs et Actions</h1>
                            <hr className="hr-h1"/>      
                            <div className="container">
                                <p>
                                    Partir certes, mais pour quoi faire ? Nous sommes Suzanne, Charlotte et Juba, trois 
                                    étudiants en management et informatique, et c’est la question que nous nous sommes 
                                    posées lors de notre année de césure. On souhaitait nous engager au sein d’un projet 
                                    porteur de sens, et apporter notre aide avec les moyens dont nous disposions. Un triste 
                                    constat s’est révélé à nous : il est bien plus difficile d’aider qu’il n’y paraît. 
                                    <br/>
                                    Beaucoup d’offres de volontariats existent sur internet mais nombre d’entre elles sont issues
                                    d’agences de volontourisme, ou d’ONG internationales.
                                    <br/> 
                                    Pas ou très peu d’offre ou même de visibilité de la part d’organisations locales. 
                                    Proposer son aide aux organisations les plus demandeuses d’aide n’est pas chose aisée.
                                    <br/>
                                    <br/> 
                                    L’idée de Participact est alors née : proposer un support qui mettrait en lien des organisations 
                                    qui auraient le plus besoin de volontaires, avec des personnes qui souhaiteraient aider de manière 
                                    véritablement utile. 
                                    <br/>
                                    Nous partons donc rencontrer et échanger avec les personnes qui composent ces organisations. 
                                    Ces organisations font toutes partie de l’ESS, à travers différentes problématiques (sociales, 
                                    environnementales, entrepreneuriales, etc) et chacune d’entre elles représente un apport incroyable de connaissance, 
                                    puisqu’elles proposent, incarnent, et réinventent les nouveaux modèles d’une économie alternative. 
                                    <br/>
                                    <br/>
                                    <div style={{textAlign:'center'}}><strong>Participact est un projet qui nous ressemble,
                                     humble, vecteur d’échanges et de projets durables.</strong></div>

                                </p>
                            </div>


                            <h2>Notre équipe</h2>
                            <hr className="hr-h1"/>        
                    
                            <div style={{display:'flex', justifyContent:'space-around', flexWrap:'wrap'}}>
                                <div className="box-perso">
                                    <a href='https://www.linkedin.com/in/suzanne-grenard-360b06166/'>
                                        <img className='shadow-lg avatar-pres' src='image/suz.jpg' alt='teamMember'/>
                                        <p className='name'>Suzanne</p>
                                    </a>
                                    
                                </div>

                                <div className="box-perso">
                                    <a href='https://www.linkedin.com/in/charlotte-deflandre-749a0217a/'>
                                        <img className='shadow-lg avatar-pres' src='image/charlotte.jpg' alt='teamMember'/>
                                        <p className='name'>Charlotte</p>
                                    </a>
                                    
                                </div>

                                <div className="box-perso">
                                    <a href='https://renardfestif.github.io/myresume/'>
                                        <img className='shadow-lg avatar-pres' src='image/moi.jpg' alt='teamMember'/>
                                        <p className='name'>Juba</p>
                                    </a>
                                
                                </div>

                            </div>

                            

                        </div>
                        
                    </div>

                    <a className='btn contact-btn' href="mailto:participact.org@gmail.com"><h2> Contactez-nous !</h2></a>

            </div>
        )
    }
}

export default About;