import obiWanImg from '../../img/obi-wan-kenobi.webp';
import './Error.css';
export const Error = () => {
    const alt = "Obi Wan Kenobi";
    return (
        <div className='containerError'>
             <span>Estos no son los droides que estas buscando</span>
            <img alt={alt }src={obiWanImg} />
        </div>
    );
}