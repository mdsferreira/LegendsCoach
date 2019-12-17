import React, { useState } from 'react';

const initialState =
    {
        user: {
            name: ""
        }
    }

export const StateContext = React.createContext(
    {
        state: initialState,
        actions: { setUser: () => { } }
    });

const setUser = (state, setState, user) => {
    setState({ user })
}

export const Context = props => {

    const [state, _setState] = useState(initialState)
    const setState = (_state) => {
        const newState = { ...state, ..._state }
        _setState(newState)
    }

    const actions = {
        setUser: setUser.bind(null, state, setState)
    }

    return (
        <StateContext.Provider value={{ state, actions }} >
            {props.children}
        </StateContext.Provider>
    );

}
