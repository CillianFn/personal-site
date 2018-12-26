import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Blog from './Blog'
import Projects from './Projects'
import Résumé from './Résumé'

 
const Content = () =>{
  return(
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/blog" component={Blog}/>
      <Route path="/projects" component={Projects}/>
      <Route path="/résumé" component={Résumé}/>
    </Switch>
  )
}
 
export default Content