import React from 'react'
import { BrowserRouter, Routes as Switch, Route, Navigate } from 'react-router-dom'
import Home from '../pages/Home/Home'


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route
                    path='/Home'
                    Component={Home}
                />
                <Route
                    path='*'
                    Component={() => <Navigate to={"/Home"} />}
                />
            </Switch>
        </BrowserRouter>
    )
}
