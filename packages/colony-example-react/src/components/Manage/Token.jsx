import React from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'
import MintTokens from '../../containers/Manage/Token/MintTokens'
import SetOwner from '../../containers/Manage/Token/SetOwner'
import ViewToken from '../../containers/Manage/Token/ViewToken'
import styles from './Token.module.scss'

const Token = () => (
  <div>
    <div className={styles.header}>
      <NavLink to="/manage/token">
        {'View Token'}
      </NavLink>
      <NavLink to="/manage/token/owner">
        {'Set Owner'}
      </NavLink>
      <NavLink to="/manage/token/mint">
        {'Mint Tokens'}
      </NavLink>
    </div>
    <Switch>
      <Route exact path="/manage/token" component={ViewToken} />
      <Route exact path="/manage/token/owner" component={SetOwner} />
      <Route exact path="/manage/token/mint" component={MintTokens} />
    </Switch>
  </div>
)

export default Token
