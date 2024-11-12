import { createContext } from 'react';
import { CurrentUser } from '../types/CurrentUser'

export interface AppState {
  token?: string
  user?: CurrentUser
  updateState: (newState: Partial<AppState>) => void
}

const defaultState: AppState = {
  user: undefined,
  token: undefined,
  updateState: () => {},
}

export const UserContext = createContext<AppState>(defaultState)
