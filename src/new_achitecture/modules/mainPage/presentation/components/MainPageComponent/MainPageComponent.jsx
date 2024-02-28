import React from "react";
import { Container } from "@material-ui/core";
import filtersClasses from "../../../../trip_search/lib/filterSearch/filter/FilterComponent.module.css";
import css from "./MainPageComponent.module.css";
import Logo_Cht from "./Logo_ChT_2.png";
import { AutoCompleteSection } from "../../../../trip_search/lib/autoComplete/AutoCompleteSection";
import CheapTripSearch from "../../../../trip_search/domain/entites/cheapTripSearch/CheapTripSearch";

export const MainPageComponent = () => {
  const SloganMain = () => (
    <div className={css.MainSlogan}>
      Find most beneficial and unusual routes between cities, combining flight,
      train, bus, ferry and rideshare.
    </div>
  );

  return (
    <Container maxWidth="xl" className={css.tb_padding}>
      {SloganMain()}

      <div className={filtersClasses.filters_sector}>
        {/*<AutoCompleteSection />*/}
        {/* <FiltersCitiesFrom /> */}
          <CheapTripSearch />
      </div>

      <div className={css.Logo_Cht_Wrapper}>
        <img className={css.Logo_Cht} src={Logo_Cht} alt="CheapTrip Logo" />
      </div>
    </Container>
  );
};
