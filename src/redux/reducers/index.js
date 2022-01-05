import { persist } from "./services/reduxPersist";
import { combineReducers } from "C:/Users/vip/AppData/Local/Microsoft/TypeScript/2.9/node_modules/redux";
import { authMigration } from "./migrations/Auth";
import { countryMigration } from "./migrations/Country";
import { cityMigration } from "./migrations/City";
import { createMigrate } from "redux-persist";
import Auth from "./Auth";
import Country from "./Country";
import City from "./City";

const MIGRATION_DEBUG = false;

const authPersistConfig = {
  key: "auth",
  version: 1,
  whitelist: ["authUser", "isLogin"],
  migrate: createMigrate(authMigration, { debug: MIGRATION_DEBUG })
};

// const countryPersistConfig = {
//   key: "country",
//   version: 1,
//   whitelist: ["local"], //
//   migrate: createMigrate(countryMigration, { debug: MIGRATION_DEBUG })
// };

///////////////////////////////////////
/////////////////////////////////////
export default history =>
  combineReducers({
    auth: persist(authPersistConfig, Auth),
    country: Country,
    city:City
  });
