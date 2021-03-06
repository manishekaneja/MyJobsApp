// Primary Types
type BasicInfo = {
  id: string;
  updatedAt: string;
  createdAt: string;
};

type User = {
  email: string;
  userRole: number;
  name: string;
  skills: string;
  token?: string;
} & BasicInfo;

type Job = {
  title: string;
  description: string;
  location: string;
} & BasicInfo;

// Reducer State Types
type ReducerStateType$job = {
  jobList: Job[];
  selectedJob: Job | null;
};

type ReducerStateType$user = User;

type ReducerStateType$state = {
  isLoggedIn: boolean;
  role: "candidate" | "recruiter" | null;
};

type ReducerStateType$recuiter = {
  postedJobs: Array<Job & BasicInfo>;
  selectedJobId: string;
  candiatesForSelectedJob: User[];
};

type ReducerStateType$candidate = {
  availableJobs: Array<Job & BasicInfo>;
  appliedJobs: Array<Job & BasicInfo>;
};

// Root Reducer Type
type RootState = {
  appState: ReducerStateType$state;
  user: ReducerStateType$user;
  job: ReducerStateType$job;
  recuiter: ReducerStateType$recuiter;
  candidate: ReducerStateType$candidate;
};

type ExtraThunkArguments = {
  endPointBase: string;
};

type InputObject = {
  value: string;
  validator: (value: string) => string;
  isValid: boolean;
  isTouched: boolean;
  errorMessage: string;
};
