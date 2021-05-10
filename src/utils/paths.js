import { BASE_URL, CAT_BAG_URI, CAT_SEPARATOR, CLOUDER_URI } from "../constants/apiConstants";

export const clouderUrl = catIds => `${BASE_URL}${CLOUDER_URI}?` +
    `${CAT_SEPARATOR}=${catIds[0]}&` +
    `${CAT_SEPARATOR}=${catIds[1]}&` +
    `${CAT_SEPARATOR}=${catIds[2]}`;

export const catImageUrl = catId => `${BASE_URL}/static/cats/${catId}.png`;
export const bagUrl = () => `${BASE_URL}${CAT_BAG_URI}`;
