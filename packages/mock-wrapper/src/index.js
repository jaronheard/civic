import React from "react";
import { Global } from "@emotion/core";
import PropTypes from "prop-types";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { syncHistoryWithStore, routerMiddleware } from "react-router-redux";
import { Provider } from "react-redux";
import { Router, browserHistory } from "react-router";
// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from "redux-devtools-extension";
import {
  CardDetailPage,
  CardDetailPageEmbed,
  BrandTheme
} from "@hackoregon/component-library";
import Registry from "./utils/registry";
import RootPageDefault from "./components/RootPage";

export default function MockWrapper(
  App,
  Reducers,
  Routes = () => [],
  CardRegistry
) {
  const middlewares = [thunk, routerMiddleware(browserHistory)];

  const store = createStore(
    Reducers(),
    {},
    composeWithDevTools(applyMiddleware(...middlewares))
  );

  store.asyncReducers = {};

  // Allow for hot module replacement when applicable (dev mode)
  if (module.hot) {
    module.hot.accept("./index.js", () => {
      const nextRootReducer = Reducers(store.asyncReducers);
      store.replaceReducer(nextRootReducer);
    });
  }

  const history = syncHistoryWithStore(browserHistory, store, {
    selectLocationState(state) {
      return state.routing;
    }
  });

  const rootRoute = {
    path: "/",
    component: RootPageDefault,
    indexRoute: {
      component: App
    },
    childRoutes: [...Routes(store)]
  };

  if (CardRegistry) {
    const CardRegistryClass = new Registry(CardRegistry);

    const CardDetailWrapper = ({ params }) => (
      <>
        <Global styles={BrandTheme} />
        <CardDetailPage params={params} CardRegistry={CardRegistryClass} />
      </>
    );

    CardDetailWrapper.propTypes = {
      params: PropTypes.shape({
        slug: PropTypes.string.isRequired
      }).isRequired
    };

    const CardDetailEmbedWrapper = ({ params }) => (
      <>
        <Global styles={BrandTheme} />
        <CardDetailPageEmbed params={params} CardRegistry={CardRegistryClass} />
      </>
    );

    CardDetailEmbedWrapper.propTypes = {
      params: PropTypes.shape({
        slug: PropTypes.string.isRequired
      }).isRequired
    };

    const cardDetailRoute = {
      path: "cards/:slug",
      component: CardDetailWrapper
    };
    const cardDetailEmbedRoute = {
      path: "cards/:slug/embed(/:layout)",
      component: CardDetailEmbedWrapper
    };

    rootRoute.childRoutes.push(cardDetailRoute);
    rootRoute.childRoutes.push(cardDetailEmbedRoute);
  }

  const Wrapper = () => (
    <Provider store={store}>
      <Router history={history} routes={rootRoute} />
    </Provider>
  );

  render(<Wrapper />, document.getElementById("content"));
}
