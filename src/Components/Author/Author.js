import { Fragment } from "react";

const Author = () => (
    <Fragment>
        <section className="container fluid text-center">
            <div className="card my-3 pt-2">
                <div className="row ">
                    <div className="col-4">
                        <img src="https://www.webdesignertrends.com/wp-content/uploads/2021/03/avatar_user_1_1616684296-150x150.jpg" alt="auteur" />
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <h5 className="card-title">SAMIR BEN ABDESSALEM</h5>
                            <p className="card-text">Développeur web</p>
                            <p className="card-footer mb-0">
                                <a href="#" className="btn btn-success col-3 mx-1">HTML3/CSS3</a>
                                <a href="#" className="btn btn-success col-2 mx-1">Javascript</a>
                                <a href="#" className="btn btn-success col-2 mx-1">REACT</a>
                                <a href="#" className="btn btn-success col-2 mx-1">PHP</a>
                                <a href="#" className="btn btn-success col-2 mx-1">SYMFONY</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="container">
            <h1 className="text-center my-5">Recherche Stage Développeur Web</h1>
            <h3 className="my-3">Compétences :</h3>
            <ul className="cv">
                <li>Développement Logiciel pour Tour opérateur</li>
                <li>Développement Logiciel du personnel</li>
                <li>Développement Logiciel de gestion du stock </li>
                <li>Formateur informatique</li>
            </ul>
            <h3 className="mt-5 mb-4">Profil :</h3>
            <p className="pl-5"> 
                Ayant développé des compétences en développement informatique durant quinze années telles que
                le développement de logiciels de gestion, la programmation sous Dos/Windows et les langages
                Pascal, Visual Basic et Visual Foxpro, je suis très intéressé par l’apprentissage de nouveaux langages
                numériques, notamment le React et PHP
            </p>
            <p className="pl-5">
                Je suis curieux, rigoureux, organisé, passionné et sérieux par ailleurs j’ai
                l'esprit d'équipe et je travaille en toute autonomie.
            </p>
        </section>
    </Fragment>
)

export default Author;