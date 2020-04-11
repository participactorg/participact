import React,{Component} from 'react';

class About extends Component{
    render(){
        return (
            <div id='about'>
               <div className='container ctnr-valeurs' >

                       
                        <div className="valeurs">
                            <h1>Engagements Valeurs et Actions</h1>
                            <hr className="hr-h1"/>      
                            <div className="container" style={{}}>
                                <p>Partir certes, mais pour quoi faire ? Nous sommes Suzanne et Charlotte, étudiantes à Kedge (école de commerce)
                                    et Juba est étudiant en informatique à la Sorbonne. Nous avons voulu nous engager au sein d’un projet porteur
                                    de sens, et apporter notre aide, à l’aide des moyens dont nous disposons. Loin de la vision dépassée du volontariat
                                    traditionnel axé sur le principe du don et de la supériorité présupposée des modèles occidentaux, nous souhaitons
                                    aller à la rencontre de ces organisations qui réinventent de nouveaux modèles en connaissance de l’environnement
                                    au sein desquels elles déploient leurs actions. <br/> <br/>
                                    Créer un projet qui nous ressemble, humble, vecteur d’échanges et de projets durables, telle est notre démarche
                                </p>
                            </div>
                        </div>
                </div>

                <div className='container-perso container'>

                    <h1>Qui Sommes nous ?</h1>
                    <hr className="hr-h1"/>        
                    
                    
                    <div className="box-perso">
                        <img className='shadow-lg avatar-pres' src='image/suz.jpg' alt='teamMember'/>
                        
                        <p className="txt-pres-perso">
                            Suzanne est pleine d’énergie et n’hésite pas à s’investir pleinement dans un projet qui a du sens pour elle. 
                            Honnête avec les autres et envers elle, Suzanne avance et fait avancer les autres avec elle. C’est une personne
                            engagée dans les causes auxquelles elle croit, et cela lui donne une force véritable et un optimisme sans faille.
                            Née à Jonzac près de Bordeaux, elle passe son enfance dans un environnement paisible et part étudier à Bordeaux.
                            De formation littéraire, Suzanne a la tête sur les épaules mais pleines d’idées qu’elle veut concrétiser.<br/>
 
                            « L’ambition n’est pas de changer le monde, mais le comprendre un peu mieux ».
                        </p>
                    </div>

                    <div className="box-perso">
                        <img className='shadow-lg avatar-pres' src='image/charlotte.jpg' alt='teamMember'/>
                        
                        <p className="txt-pres-perso">
                            Charlotte c’est la positive attitude, c’est le retour à l’émerveillement, c’est la capacité à se concentrer sur ce qu’il
                            y a de plus beau dans le monde. Venue de Créteil, Charlotte créée son bout de chemin en se rappelant quotidiennement que 
                            la vie est telle un livre qu’il nous appartient d’écrire et de réinventer au quotidien. Cette fibre littéraire la rattrape 
                            d’ailleurs et la mène à s’inscrire en classe préparatoire littéraire hypokhâgne. Elle intègrera ensuite Kedge BS mais loin 
                            de sombrer dans les méandres de l’école de commerce elle s’investira dans des projets culturels comme TedX Kedge Bordeaux. 
                            Voici pour elle venu le moment de voler de ses propres ailes et des transformer ses idéaux en projet réel
                        </p>
                    </div>

                    <div className="box-perso">
                        <img className='shadow-lg avatar-pres' src='image/moi.jpg' alt='teamMember'/>
                        
                        <p className="txt-pres-perso">
                            Juba c’est la force tranquille, c’est la gentillesse, c’est la capacité à mettre l’ensemble de ses compétences
                            dans un projet qui lui tient à cœur. Tout droit venu de Saint-Denis, Juba est étudiant en informatique à la faculté 
                            de la Sorbonne. Il est actuellement dans un master tourné autour de l’entrepreneuriat et c’est sans hésiter qu’il 
                            nous rejoint pour la création de Participact. Véritable moteur du projet, il y voit un moyen de développer de nouvelles 
                            compétences et de participer au développement d’un projet porteur de sens tout en continuant ses études à Paris. Pilier 
                            et technicien du projet, il saura vous régaler avec les différentes fonctionnalités que le site offre. 
                        </p>
                    </div>
                    

               
                </div>

            </div>
        )
    }
}

export default About;