import React from 'react';
import { Switch, Route } from "react-router-dom";
import routerConfig from './routerConfig';
const renderRouterComponent = function (routerConfig,path='') {
  return  <Switch >{routerConfig.map((rc) => {
            const rcPath = (/^\/.?/.test(rc.path) ? `${rc.path}`: `${path}${rc.path}`).toLocaleLowerCase();
            if (rc.children) {
              return (
                    <Route
                          key={rcPath}
                          path={rcPath}
                          render={(routeProps) => {
                            return   <rc.component >
                                      {renderRouterComponent(rc.children, rcPath)}
                                    </rc.component>
                        }}
                      />
              );
            }
            return (
              <Route
                exact
                key={rcPath}
                path={rcPath}
                render={(routeProps) => {
                  return <div>
                    <rc.component {...routeProps} />
                  </div>
              }}
              />
            );
          })}</Switch>
};

const RouterComponent =function () {
  return <div>{renderRouterComponent(routerConfig)}</div>;
}
export default RouterComponent;