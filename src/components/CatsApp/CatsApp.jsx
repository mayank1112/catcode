import CatGrid from "../CatGrid/CatGrid";
import CatList from "../CatList/CatList";
import './CatsApp.css';

const CatsApp = ({ cats, groupedCats, selectedCats, selectCat }) => (
    <div className='catsContainer' key={selectedCats}>
        <CatList
            cats={cats}
            groupedCats={groupedCats}
            selectedCats={selectedCats}
            selectCat={selectCat}
        />
        <CatGrid cats={cats} groupedCats={groupedCats} />
    </div>
);
export default CatsApp;
