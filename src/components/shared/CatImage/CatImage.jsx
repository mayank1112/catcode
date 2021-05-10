import { catImageUrl } from "../../../utils/paths";

const CatImage = ({ catId }) => (
    <img alt='Cat' src={catImageUrl(catId)} />
);

export default CatImage;
