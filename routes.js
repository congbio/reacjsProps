import List from './component/List';
import React from 'react';
const routes = [{
    path : '/',
	exact : true,
	main : ()=> <Home />
},
{
    path : 'list',
	exact : true,
	main : ({history})=> <List history={history} />
},
{
   
	path : '/products/:id/edit',
	exact : true,
    main : ({history,match})=> <List match ={match} history={history}/>
}
];
export default routes;