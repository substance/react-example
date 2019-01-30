/* eslint-disable */
import Application from './Application.js'

// as a convenience store $$ as an alias for ReactDOM.createElement in the global scope
window.$$ = React.createElement

ReactDOM.render(
  $$(Application), document.getElementById('root')
)
