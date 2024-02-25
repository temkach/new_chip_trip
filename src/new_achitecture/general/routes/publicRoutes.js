import { MainPage, PassengerPage, BusPage, CarrierPage, TransferPage } from "../../modules";
import TransferViewComponent from "../../modules/trip_search/domain/entites/TransferCard/TransferView/TransferViewComponent";
import { Contacts } from "../../modules/contacts/presentation/pages";
import { MainPageComponent } from "../../modules/mainPage/presentation/components/MainPageComponent/MainPageComponent";

import {
  MAIN_ROUTE,
  PASSENGER_ROUTE,
  BUS_ROUTE,
  DRIVER_ROUTE,
  TRANSFER_ROUTE,
  CONTACTS_ROUTE,
} from "../utils/constants/constants";

export const publicRoutes = [
  // {
  //   path: MAIN_ROUTE,
  //   Component: MainPage,
  // },
  {
    path: MAIN_ROUTE,
    Component: MainPageComponent,
  },
  {
    path: `${PASSENGER_ROUTE}/:trip`,
    Component: TransferViewComponent,
  },
  {
    path: PASSENGER_ROUTE,
    Component: PassengerPage,
  },
  {
    path: BUS_ROUTE,
    Component: BusPage,
  },
  {
    path: DRIVER_ROUTE,
    Component: CarrierPage,
  },
  {
    path: TRANSFER_ROUTE,
    Component: TransferPage,
  },
  {
    path: CONTACTS_ROUTE,
    Component: Contacts,
  },
];
