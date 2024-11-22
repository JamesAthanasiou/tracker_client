import { createContext } from 'react';
import { CurrentUser } from '../types/CurrentUser'

export interface AppState {
  user?: CurrentUser
  updateState: (newState: Partial<AppState>) => void
}

const defaultState: AppState = {
  user: undefined,
  updateState: () => {},
}

export const UserContext = createContext<AppState>(defaultState)
