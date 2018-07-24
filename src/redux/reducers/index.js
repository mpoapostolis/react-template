import { LOGOUT } from "../actions/names"
import { auth } from "./auth"
import { ui } from "./ui"
import { reports } from "./reports"
import { filters } from "./filters"
import { customers } from "./customers"
import { combineReducers } from "redux"

const appReducer = combineReducers({
  auth,
  ui,
  reports,
  customers,
  filters
})

const rootReducer = (state, action) => {
  if (action.type === LOGOUT) {
    state = {}
  }

  return appReducer(state, action)
}

export default rootReducer
