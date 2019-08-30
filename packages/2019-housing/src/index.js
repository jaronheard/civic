import App from "./components/App";
import Routes from "./routes";
import Reducers from "./state";
import HousingDisplacement from "./components/HousingDisplacement";
import BlackPopulationChange from "./components/BlackPopulationChange";
import HomeLoanApprovals from "./components/HomeLoanApprovals";

const CardRegistry = [
  {
    slug: "home-loan-approvals",
    component: HomeLoanApprovals
  },
  {
    slug: "black-population-change",
    component: BlackPopulationChange
  },
  {
    slug: "housing-displacement",
    component: HousingDisplacement
  }
  // leave space for card injection
];

export { App, Routes, Reducers, CardRegistry };
