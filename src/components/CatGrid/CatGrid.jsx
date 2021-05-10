import CatImage from "../shared/CatImage/CatImage";
import './CatGrid.css';

const CatGrid = ({ cats, groupedCats }) => (
    <div className='grid'>
        {cats && cats.length ? cats.map((cat, index) => (
            <div className='gridItem' key={index}>
                {groupedCats[index] && (
                    <CatImage catId={groupedCats[index]} />
                )}
            </div>
        )) : null}
    </div>);

export default CatGrid;
