// import Img2 from '../../Img/norimmo.jpg'
import Projects from '../../projects.json'

const Cards = () =>
(
    <main className="container">
        <section className="row my-4">
            {Projects.map(({ id, name, description, picture, url }) => (
            <div className="col-4 mb-4" style={{height:"25rem"}}>
                <article className="card">
                    <img src={picture} class="card-img-top" alt="Logo Immobilier" style={{height:"15rem"}}/>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{description}</p>
                        <div className="text-center">
                            <a target="_blank" href={url} className="btn btn-primary">Visualiser</a>
                        </div>
                    </div>
                </article>
            </div>
            ))}
        </section>
    </main>
)

export default Cards;
