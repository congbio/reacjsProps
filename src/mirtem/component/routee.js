import React from 'react';
import List from '../App';
import App from './App';
import Left from './left';
import Right from './right'


const routes = [{
    path: '/',
    exact: true,
    main: () => <App />
},
{
    path: '/About',
    exact: true,
    main: ({ history }) => <Left history={history} />
},
{
    path: '/Contact',
    exact: true,
    main: ({ history }) => <Right history={history} />
},
{
    path: '/Admin',
    exact: true,
    main: ({ history }) => <List history={history} />
},
{
    path: "*",
    main: () => <div>Error</div>
}
];
export default routes;