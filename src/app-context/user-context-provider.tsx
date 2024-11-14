import React, { useState } from 'react'
import { AppState, UserContext } from './user-context'
import { CurrentUser } from '../types/CurrentUser';

interface Props {
  children: React.ReactNode
}

const stringUserInStorage = localStorage.getItem('user');
let userInStorage;

if (stringUserInStorage != null && stringUserInStorage != undefined && stringUserInStorage != 'undefined') {
  userInStorage = JSON.parse(stringUserInStorage) as CurrentUser;
}

export const UserContextProvider: React.FunctionComponent<Props> = (props: Props): JSX.Element => {
  const [state, setState] = useState({user: {'id':userInStorage!.id, 'person_id': userInStorage!.person_id, 'username': userInStorage!.username}});

  const updateState = (newState: Partial<AppState>) => {
    setState({ ...state, ...newState })
  }

  return (
    <UserContext.Provider value={{ ...state, updateState }}>{props.children}</UserContext.Provider>
  )
}
