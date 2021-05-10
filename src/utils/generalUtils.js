export const updateSelectedCatsValue = (selectedCats, catId) => {
    let selectedCatsValue = selectedCats;
    const index = selectedCatsValue && selectedCatsValue.indexOf(catId);
    if (index > -1) {
        selectedCatsValue.splice(index, 1);
    } else {
        selectedCatsValue = [
            ...selectedCats,
            catId,
        ];
    }
    return selectedCatsValue;
};