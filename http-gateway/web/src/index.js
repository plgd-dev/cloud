import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Auth0Provider } from '@auth0/auth0-react'

import { App } from '@/containers/app'
import { store } from '@/store'
import { history } from '@/store/history'
import { IntlProvider } from '@/components/intl-provider'

import reportWebVitals from './reportWebVitals'

fetch('/auth_config.json')
  .then(response => response.json())
  .then(config => {
    if (
      !config.clientID ||
      !config.domain ||
      !config.audience ||
      !config.httpGatewayAddress
    ) {
      throw new Error(
        'clientID, domain, audience and httpGatewayAddress must be set in auth_config.json'
      )
    }

    const BaseComponent = () => {
      const onRedirectCallback = appState => {
        // Use the router's history module to replace the url
        history.replace(appState?.returnTo || '/')
      }

      return (
        <Provider store={store}>
          <IntlProvider>
            <Auth0Provider
              domain={config.domain}
              clientId={config.clientID}
              redirectUri={window.location.origin}
              onRedirectCallback={onRedirectCallback}
              audience={config.audience}
              scope={config.scope}
            >
              <App config={config} />
            </Auth0Provider>
          </IntlProvider>
        </Provider>
      )
    }

    const render = () => {
      ReactDOM.render(<BaseComponent />, document.getElementById('root'))
    }

    render()

    // If you want to start measuring performance in your app, pass a function
    // to log results (for example: reportWebVitals(console.log))
    // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
    reportWebVitals()
  })
  .catch(error => {
    const rootDiv = document.getElementById('root')

    rootDiv.innerHTML = `<div class="client-error-message">${
      error.message
    }</div>`
  })
