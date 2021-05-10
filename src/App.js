import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import { bagUrl, clouderUrl } from './utils/paths';
import { ERROR_MESSAGE, SUCCESS_MESSAGE } from './constants/lang';
import Header from './components/Header/Header.jsx';
import { CATS_GROUP_SIZE } from './constants/apiConstants';
import { updateSelectedCatsValue } from './utils/generalUtils';
import CatsApp from './components/CatsApp/CatsApp';

function App() {
  const [cats, setCats] = useState([]);
  const [selectedCats, setSelectedCats] = useState([]);
  const [groupedCats, setGroupedCats] = useState([]);
  const [successMessage, setSuccessMessage] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const [selectedCatsCount, setSelectedCatsCount] = useState(0);

  useEffect(() => {
    const fetchCats = async () => {
      const response = await axios(bagUrl());
      setCats(response.data.cats);
    }
    fetchCats();
  }, []);

  const checkCatsCompatibility = async catIds => {
    try {
      await axios(clouderUrl(catIds));
      setSuccessMessage(SUCCESS_MESSAGE);
      setGroupedCats(catIds);
    } catch (error) {
      setErrorMessage(ERROR_MESSAGE);
    } finally {
      setSelectedCats([]);
      setSelectedCatsCount(0);
    }
  };

  const selectCat = async catId => {
    if (!groupedCats.includes(catId)) {
      const selectedCatsValue = updateSelectedCatsValue(selectedCats, catId);
      if (selectedCatsValue.length === CATS_GROUP_SIZE) {
        await checkCatsCompatibility(selectedCatsValue);
      } else {
        setSelectedCatsCount(selectedCatsValue.length);
        setSelectedCats(selectedCatsValue);
      }
    }
  };
  return (
    <Fragment>
      <Header successMessage={successMessage} errorMessage={errorMessage} />
      <CatsApp
        cats={cats}
        groupedCats={groupedCats}
        selectedCats={selectedCats}
        selectCat={selectCat}
        selectedCatsCount={selectedCatsCount}
      />
    </Fragment>
  );
}

export default App;
