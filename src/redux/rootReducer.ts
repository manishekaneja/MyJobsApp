import { combineReducers } from "redux";
import { reducer$applicationState } from "../redux-thunk/applicationState/applicationState";
import { reducer$user } from "../redux-thunk/auth/userReducer";
import { reducer$candidate } from "../redux-thunk/candidates/candidateReducer";
import { reducer$job } from "../redux-thunk/job/jobReducer";
import { reducer$recuiter } from "../redux-thunk/recruiters/recruiterReducer";

const rootReducer = combineReducers({
  appState: reducer$applicationState,
  user: reducer$user,
  job: reducer$job,
  recuiter: reducer$recuiter,
  candidate:reducer$candidate
});

export default rootReducer;
