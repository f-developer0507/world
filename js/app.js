// mode js start
const body = document.querySelector("body");
const btnWrapper = document.querySelector(".btn-wrapper");
const lightBtn = document.querySelector(".light-btn");
const darkBtn = document.querySelector(".dark-btn");

lightBtn.addEventListener("click", function () {
  body.classList.remove("dark");
  lightBtn.classList.add("active");
  darkBtn.classList.remove("active");
});

darkBtn.addEventListener("click", function () {
  body.classList.add("dark");
  lightBtn.classList.remove("active");
  darkBtn.classList.add("active");
});

// mode js end

// form js start
const countriesForm = document.querySelector(".countries__form-wrapper");
const countriesSelect = document.createElement("select");

// countriesOption.value =

countriesSelect.classList.add("countries__select");

countriesSelect.name = "user-select";

op.map((item) => {
  const countriesOption = document.createElement("option");

  countriesOption.classList.add("countries__option");
  countriesOption.value = item.value;
  countriesOption.textContent = item.opText;

  countriesSelect.append(countriesOption);
});

countriesForm.append(countriesSelect);
// form js end

// countries js start
const ElCountries = document.querySelector(".countries-row");
const countriesList = document.createElement("ul");

countries.map((item) => {
  const countriesItem = document.createElement("li");
  const itemImgWrapper = document.createElement("div");
  const countriesImg = document.createElement("img");
  const countriesContentWrapper = document.createElement("div");
  const countriesItemTitle = document.createElement("h3");
  const countriesPopulaion = document.createElement("strong");
  const countriesPopulaionText = document.createElement("p");
  const countriesRegion = document.createElement("strong");
  const countriesRegionText = document.createElement("p");
  const countriesCapital = document.createElement("strong");
  const countriesCapitalText = document.createElement("p");


  countriesList.classList.add("countries__list");
  countriesItem.classList.add("countries__item");
  itemImgWrapper.classList.add("countries__img-wrapper");
  countriesImg.classList.add("countries__wrapper-img");
  countriesContentWrapper.classList.add("countries__content-wrapper");
  countriesItemTitle.classList.add("countries__title");
  countriesPopulaion.classList.add("countries__populaion");
  countriesPopulaionText.classList.add("countries__populaion-text");
  countriesRegion.classList.add("countries__region");
  countriesRegionText.classList.add("countries__region-text");
  countriesCapital.classList.add("countries__capital");
  countriesCapitalText.classList.add("countries__capital-text");

  countriesImg.src = item.img;
  countriesItemTitle.textContent = item.name;
  countriesPopulaion.textContent = item.population;
  countriesPopulaionText.textContent = item.populationText;
  countriesRegion.textContent = item.region;
  countriesRegionText.textContent = item.regionText;
  countriesCapital.textContent = item.capital;
  countriesCapitalText.textContent = item.capitalText;

  countriesCapital.append(countriesCapitalText);
  countriesRegion.append(countriesRegionText);
  countriesPopulaion.append(countriesPopulaionText);
  countriesContentWrapper.append(
    countriesItemTitle,
    countriesPopulaion,
    countriesRegion,
    countriesCapital
  );
  itemImgWrapper.append(countriesImg);
  countriesItem.append(itemImgWrapper, countriesContentWrapper);
  countriesList.append(countriesItem);
});

ElCountries.append(countriesList);
// countries js end
