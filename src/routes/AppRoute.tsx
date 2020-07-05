import React from 'react'
import { Route } from 'react-router'

const AppRoute = ({ component: Component, layout: Layout, ...rest } : any) => (
    <Route {...rest} 
        render={props => (
            <Layout>
                <Component {...props}/>
            </Layout>
        )}/>
)

export default AppRoute