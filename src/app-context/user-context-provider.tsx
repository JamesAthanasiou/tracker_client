import React, { useState } from 'react'
import { AppState, UserContext } from './user-context'
import { CurrentUser } from '../types/CurrentUser';

interface Props {
  children: React.ReactNode
}

const stringUserInStorage = localStorage.getItem('user');
let userInStorage: CurrentUser;

if (stringUserInStorage != null && stringUserInStorage != undefined && stringUserInStorage != 'undefined') {
  userInStorage = JSON.parse(stringUserInStorage) as CurrentUser;
}

export const UserContextProvider: React.FunctionComponent<Props> = (props: Props): JSX.Element => {
  let defaultState: Partial<AppState> = {};
  
  if (userInStorage?.username) {
    defaultState = {user: {'id':userInStorage!.id, 'person_id': userInStorage!.person_id, 'username': userInStorage!.username}}
  }

  const [state, setState] = useState(defaultState);

  const updateState = (newState: Partial<AppState>) => {
    setState({ ...state, ...newState })
  }

  return (
    <UserContext.Provider value={{ ...state, updateState }}>{props.children}</UserContext.Provider>
  )
}
