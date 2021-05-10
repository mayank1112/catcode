import { CircularProgress } from "@material-ui/core";
import CatImage from "../shared/CatImage/CatImage";
import './CatList.css';

const CatList = ({ groupedCats, selectCat, selectedCats, cats }) => (
    <div className="cats">
        {cats && cats.length ? cats.map(cat => {
            const catId = cat.join('');
            let className = 'cat';
            if (groupedCats && groupedCats.includes(catId)) {
                className += ' groupedCat';
            } else if (selectedCats && selectedCats.includes(catId)) {
                className += ' selectedCat';
            }
            return (
                <button key={catId} className={className} onClick={() => selectCat(catId)}>
                    <CatImage catId={catId} />
                </button>
            )
        }) : <CircularProgress />
        }
    </div>
);

export default CatList;
