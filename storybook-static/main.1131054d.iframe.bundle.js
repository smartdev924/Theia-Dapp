/*! For license information please see main.1131054d.iframe.bundle.js.LICENSE.txt */
;(window.webpackJsonp = window.webpackJsonp || []).push([
  [3],
  {
    './.storybook/preview.js-generated-config-entry.js': function (
      module,
      __webpack_exports__,
      __webpack_require__,
    ) {
      'use strict'
      __webpack_require__.r(__webpack_exports__)
      var preview_namespaceObject = {}
      __webpack_require__.r(preview_namespaceObject),
        __webpack_require__.d(
          preview_namespaceObject,
          'parameters',
          function () {
            return parameters
          },
        )
      __webpack_require__('./node_modules/core-js/modules/es.object.keys.js'),
        __webpack_require__('./node_modules/core-js/modules/es.symbol.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.array.filter.js',
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.object.get-own-property-descriptor.js',
        ),
        __webpack_require__(
          './node_modules/core-js/modules/web.dom-collections.for-each.js',
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.object.get-own-property-descriptors.js',
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.object.define-properties.js',
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.object.define-property.js',
        )
      var ClientApi = __webpack_require__(
          './node_modules/@storybook/client-api/dist/esm/ClientApi.js',
        ),
        parameters = {
          actions: { argTypesRegex: '^on[A-Z].*' },
          controls: {
            matchers: { color: /(background|color)$/i, date: /Date$/ },
          },
        }
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object)
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object)
          enumerableOnly &&
            (symbols = symbols.filter(function (sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable
            })),
            keys.push.apply(keys, symbols)
        }
        return keys
      }
      function _defineProperty(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (obj[key] = value),
          obj
        )
      }
      Object.keys(preview_namespaceObject).forEach(function (key) {
        var value = preview_namespaceObject[key]
        switch (key) {
          case 'args':
            return Object(ClientApi.d)(value)
          case 'argTypes':
            return Object(ClientApi.b)(value)
          case 'decorators':
            return value.forEach(function (decorator) {
              return Object(ClientApi.f)(decorator, !1)
            })
          case 'loaders':
            return value.forEach(function (loader) {
              return Object(ClientApi.g)(loader, !1)
            })
          case 'parameters':
            return Object(ClientApi.h)(
              (function _objectSpread(target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = null != arguments[i] ? arguments[i] : {}
                  i % 2
                    ? ownKeys(Object(source), !0).forEach(function (key) {
                        _defineProperty(target, key, source[key])
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        target,
                        Object.getOwnPropertyDescriptors(source),
                      )
                    : ownKeys(Object(source)).forEach(function (key) {
                        Object.defineProperty(
                          target,
                          key,
                          Object.getOwnPropertyDescriptor(source, key),
                        )
                      })
                }
                return target
              })({}, value),
              !1,
            )
          case 'argTypesEnhancers':
            return value.forEach(function (enhancer) {
              return Object(ClientApi.c)(enhancer)
            })
          case 'argsEnhancers':
            return value.forEach(function (enhancer) {
              return Object(ClientApi.e)(enhancer)
            })
          case 'render':
            return Object(ClientApi.i)(value)
          case 'globals':
          case 'globalTypes':
            var v = {}
            return (v[key] = value), Object(ClientApi.h)(v, !1)
          case '__namedExportsOrder':
          case 'decorateStory':
          case 'renderToDOM':
            return null
          default:
            return console.log(key + ' was not supported :( !')
        }
      })
    },
    './generated-stories-entry.js': function (
      module,
      exports,
      __webpack_require__,
    ) {
      'use strict'
      ;(function (module) {
        ;(0,
        __webpack_require__(
          './node_modules/@storybook/react/dist/esm/client/index.js',
        ).configure)(
          [
            __webpack_require__(
              './src sync recursive ^\\.(?:(?:^|[\\\\/]|(?:(?:(?!(?:^|[\\\\/])\\.).)*?)[\\\\/])(?!\\.)(?=.)[^\\\\/]*?\\.stories\\.mdx)$',
            ),
            __webpack_require__(
              './src sync recursive ^\\.(?:(?:^|[\\\\/]|(?:(?:(?!(?:^|[\\\\/])\\.).)*?)[\\\\/])(?!\\.)(?=.)[^\\\\/]*?\\.stories\\.(js|jsx|ts|tsx))$',
            ),
          ],
          module,
          !1,
        )
      }.call(
        this,
        __webpack_require__(
          './node_modules/@storybook/builder-webpack4/node_modules/webpack/buildin/module.js',
        )(module),
      ))
    },
    './node_modules/css-loader/dist/cjs.js?!./node_modules/@storybook/builder-webpack4/node_modules/postcss-loader/dist/cjs.js?!./src/stories/button.css':
      function (module, exports, __webpack_require__) {
        ;(exports = __webpack_require__(
          './node_modules/css-loader/dist/runtime/api.js',
        )(!1)).push([
          module.i,
          ".storybook-button {\r\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n  font-weight: 700;\r\n  border: 0;\r\n  border-radius: 3em;\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  line-height: 1;\r\n}\r\n.storybook-button--primary {\r\n  color: white;\r\n  background-color: #1ea7fd;\r\n}\r\n.storybook-button--secondary {\r\n  color: #333;\r\n  background-color: transparent;\r\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;\r\n}\r\n.storybook-button--small {\r\n  font-size: 12px;\r\n  padding: 10px 16px;\r\n}\r\n.storybook-button--medium {\r\n  font-size: 14px;\r\n  padding: 11px 20px;\r\n}\r\n.storybook-button--large {\r\n  font-size: 16px;\r\n  padding: 12px 24px;\r\n}\r\n",
          '',
        ]),
          (module.exports = exports)
      },
    './node_modules/css-loader/dist/cjs.js?!./node_modules/@storybook/builder-webpack4/node_modules/postcss-loader/dist/cjs.js?!./src/stories/header.css':
      function (module, exports, __webpack_require__) {
        ;(exports = __webpack_require__(
          './node_modules/css-loader/dist/runtime/api.js',
        )(!1)).push([
          module.i,
          ".wrapper {\r\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\r\n  padding: 15px 20px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\nsvg {\r\n  display: inline-block;\r\n  vertical-align: top;\r\n}\r\n\r\nh1 {\r\n  font-weight: 900;\r\n  font-size: 20px;\r\n  line-height: 1;\r\n  margin: 6px 0 6px 10px;\r\n  display: inline-block;\r\n  vertical-align: top;\r\n}\r\n\r\nbutton + button {\r\n  margin-left: 10px;\r\n}\r\n\r\n.welcome {\r\n  color: #333;\r\n  font-size: 14px;\r\n  margin-right: 10px;\r\n}\r\n",
          '',
        ]),
          (module.exports = exports)
      },
    './node_modules/css-loader/dist/cjs.js?!./node_modules/@storybook/builder-webpack4/node_modules/postcss-loader/dist/cjs.js?!./src/stories/page.css':
      function (module, exports, __webpack_require__) {
        ;(exports = __webpack_require__(
          './node_modules/css-loader/dist/runtime/api.js',
        )(!1)).push([
          module.i,
          "section {\r\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n  font-size: 14px;\r\n  line-height: 24px;\r\n  padding: 48px 20px;\r\n  margin: 0 auto;\r\n  max-width: 600px;\r\n  color: #333;\r\n}\r\n\r\nsection h2 {\r\n  font-weight: 900;\r\n  font-size: 32px;\r\n  line-height: 1;\r\n  margin: 0 0 4px;\r\n  display: inline-block;\r\n  vertical-align: top;\r\n}\r\n\r\nsection p {\r\n  margin: 1em 0;\r\n}\r\n\r\nsection a {\r\n  text-decoration: none;\r\n  color: #1ea7fd;\r\n}\r\n\r\nsection ul {\r\n  padding-left: 30px;\r\n  margin: 1em 0;\r\n}\r\n\r\nsection li {\r\n  margin-bottom: 8px;\r\n}\r\n\r\nsection .tip {\r\n  display: inline-block;\r\n  border-radius: 1em;\r\n  font-size: 11px;\r\n  line-height: 12px;\r\n  font-weight: 700;\r\n  background: #e7fdd8;\r\n  color: #66bf3c;\r\n  padding: 4px 12px;\r\n  margin-right: 10px;\r\n  vertical-align: top;\r\n}\r\n\r\nsection .tip-wrapper {\r\n  font-size: 13px;\r\n  line-height: 20px;\r\n  margin-top: 40px;\r\n  margin-bottom: 40px;\r\n}\r\n\r\nsection .tip-wrapper svg {\r\n  display: inline-block;\r\n  height: 12px;\r\n  width: 12px;\r\n  margin-right: 4px;\r\n  vertical-align: top;\r\n  margin-top: 3px;\r\n}\r\n\r\nsection .tip-wrapper svg path {\r\n  fill: #1ea7fd;\r\n}\r\n",
          '',
        ]),
          (module.exports = exports)
      },
    './src sync recursive ^\\.(?:(?:^|[\\\\/]|(?:(?:(?!(?:^|[\\\\/])\\.).)*?)[\\\\/])(?!\\.)(?=.)[^\\\\/]*?\\.stories\\.(js|jsx|ts|tsx))$':
      function (module, exports, __webpack_require__) {
        var map = {
          './stories/Button.stories.tsx': './src/stories/Button.stories.tsx',
          './stories/Header.stories.tsx': './src/stories/Header.stories.tsx',
          './stories/Page.stories.tsx': './src/stories/Page.stories.tsx',
        }
        function webpackContext(req) {
          var id = webpackContextResolve(req)
          return __webpack_require__(id)
        }
        function webpackContextResolve(req) {
          if (!__webpack_require__.o(map, req)) {
            var e = new Error("Cannot find module '" + req + "'")
            throw ((e.code = 'MODULE_NOT_FOUND'), e)
          }
          return map[req]
        }
        ;(webpackContext.keys = function webpackContextKeys() {
          return Object.keys(map)
        }),
          (webpackContext.resolve = webpackContextResolve),
          (module.exports = webpackContext),
          (webpackContext.id =
            './src sync recursive ^\\.(?:(?:^|[\\\\/]|(?:(?:(?!(?:^|[\\\\/])\\.).)*?)[\\\\/])(?!\\.)(?=.)[^\\\\/]*?\\.stories\\.(js|jsx|ts|tsx))$')
      },
    './src sync recursive ^\\.(?:(?:^|[\\\\/]|(?:(?:(?!(?:^|[\\\\/])\\.).)*?)[\\\\/])(?!\\.)(?=.)[^\\\\/]*?\\.stories\\.mdx)$':
      function (module, exports, __webpack_require__) {
        var map = {
          './stories/Introduction.stories.mdx':
            './src/stories/Introduction.stories.mdx',
        }
        function webpackContext(req) {
          var id = webpackContextResolve(req)
          return __webpack_require__(id)
        }
        function webpackContextResolve(req) {
          if (!__webpack_require__.o(map, req)) {
            var e = new Error("Cannot find module '" + req + "'")
            throw ((e.code = 'MODULE_NOT_FOUND'), e)
          }
          return map[req]
        }
        ;(webpackContext.keys = function webpackContextKeys() {
          return Object.keys(map)
        }),
          (webpackContext.resolve = webpackContextResolve),
          (module.exports = webpackContext),
          (webpackContext.id =
            './src sync recursive ^\\.(?:(?:^|[\\\\/]|(?:(?:(?!(?:^|[\\\\/])\\.).)*?)[\\\\/])(?!\\.)(?=.)[^\\\\/]*?\\.stories\\.mdx)$')
      },
    './src/stories/Button.stories.tsx': function (
      module,
      __webpack_exports__,
      __webpack_require__,
    ) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Primary', function () {
          return Primary
        }),
        __webpack_require__.d(__webpack_exports__, 'Secondary', function () {
          return Secondary
        }),
        __webpack_require__.d(__webpack_exports__, 'Large', function () {
          return Large
        }),
        __webpack_require__.d(__webpack_exports__, 'Small', function () {
          return Small
        })
      __webpack_require__('./node_modules/core-js/modules/es.object.assign.js'),
        __webpack_require__('./node_modules/react/index.js')
      var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './src/stories/Button.tsx',
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js',
        )
      __webpack_exports__.default = {
        title: 'Example/Button',
        component: _Button__WEBPACK_IMPORTED_MODULE_2__.a,
        argTypes: { backgroundColor: { control: 'color' } },
      }
      var Template = function Template(args) {
        return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
          _Button__WEBPACK_IMPORTED_MODULE_2__.a,
          Object.assign({}, args),
        )
      }
      Template.displayName = 'Template'
      var Primary = Template.bind({})
      Primary.args = { primary: !0, label: 'Button' }
      var Secondary = Template.bind({})
      Secondary.args = { label: 'Button' }
      var Large = Template.bind({})
      Large.args = { size: 'large', label: 'Button' }
      var Small = Template.bind({})
      ;(Small.args = { size: 'small', label: 'Button' }),
        (Primary.parameters = Object.assign(
          { storySource: { source: '(args) => <Button {...args} />' } },
          Primary.parameters,
        )),
        (Secondary.parameters = Object.assign(
          { storySource: { source: '(args) => <Button {...args} />' } },
          Secondary.parameters,
        )),
        (Large.parameters = Object.assign(
          { storySource: { source: '(args) => <Button {...args} />' } },
          Large.parameters,
        )),
        (Small.parameters = Object.assign(
          { storySource: { source: '(args) => <Button {...args} />' } },
          Small.parameters,
        ))
    },
    './src/stories/Button.tsx': function (
      module,
      __webpack_exports__,
      __webpack_require__,
    ) {
      'use strict'
      __webpack_require__.d(__webpack_exports__, 'a', function () {
        return Button
      })
      __webpack_require__('./node_modules/core-js/modules/es.object.keys.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.array.index-of.js',
        ),
        __webpack_require__('./node_modules/core-js/modules/es.symbol.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.object.assign.js',
        ),
        __webpack_require__('./node_modules/react/index.js'),
        __webpack_require__('./src/stories/button.css')
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js',
        ),
        _excluded = ['primary', 'size', 'backgroundColor', 'label']
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {}
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {}
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source)
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key])
            return target
          })(source, excluded)
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source)
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]))
        }
        return target
      }
      var Button = function Button(_ref) {
        var _ref$primary = _ref.primary,
          primary = void 0 !== _ref$primary && _ref$primary,
          _ref$size = _ref.size,
          size = void 0 === _ref$size ? 'medium' : _ref$size,
          backgroundColor = _ref.backgroundColor,
          label = _ref.label,
          props = _objectWithoutProperties(_ref, _excluded),
          mode = primary
            ? 'storybook-button--primary'
            : 'storybook-button--secondary'
        return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(
          'button',
          Object.assign(
            {
              type: 'button',
              className: [
                'storybook-button',
                'storybook-button--' + size,
                mode,
              ].join(' '),
              style: { backgroundColor: backgroundColor },
            },
            props,
            { children: label },
          ),
        )
      }
      Button.displayName = 'Button'
      try {
        ;(Button.displayName = 'Button'),
          (Button.__docgenInfo = {
            description: 'Primary UI component for user interaction',
            displayName: 'Button',
            props: {
              primary: {
                defaultValue: { value: 'false' },
                description:
                  'Is this the principal call to action on the page?',
                name: 'primary',
                required: !1,
                type: { name: 'boolean' },
              },
              backgroundColor: {
                defaultValue: null,
                description: 'What background color to use',
                name: 'backgroundColor',
                required: !1,
                type: { name: 'string' },
              },
              size: {
                defaultValue: { value: 'medium' },
                description: 'How large should the button be?',
                name: 'size',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"small"' },
                    { value: '"medium"' },
                    { value: '"large"' },
                  ],
                },
              },
              label: {
                defaultValue: null,
                description: 'Button contents',
                name: 'label',
                required: !0,
                type: { name: 'string' },
              },
              onClick: {
                defaultValue: null,
                description: 'Optional click handler',
                name: 'onClick',
                required: !1,
                type: { name: '(() => void)' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/stories/Button.tsx#Button'] = {
              docgenInfo: Button.__docgenInfo,
              name: 'Button',
              path: 'src/stories/Button.tsx#Button',
            })
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/stories/Header.stories.tsx': function (
      module,
      __webpack_exports__,
      __webpack_require__,
    ) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'LoggedIn', function () {
          return LoggedIn
        }),
        __webpack_require__.d(__webpack_exports__, 'LoggedOut', function () {
          return LoggedOut
        })
      __webpack_require__('./node_modules/core-js/modules/es.object.assign.js'),
        __webpack_require__('./node_modules/react/index.js')
      var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './src/stories/Header.tsx',
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js',
        )
      __webpack_exports__.default = {
        title: 'Example/Header',
        component: _Header__WEBPACK_IMPORTED_MODULE_2__.a,
        parameters: { layout: 'fullscreen' },
      }
      var Template = function Template(args) {
        return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
          _Header__WEBPACK_IMPORTED_MODULE_2__.a,
          Object.assign({}, args),
        )
      }
      Template.displayName = 'Template'
      var LoggedIn = Template.bind({})
      LoggedIn.args = { user: { name: 'Jane Doe' } }
      var LoggedOut = Template.bind({})
      ;(LoggedOut.args = {}),
        (LoggedIn.parameters = Object.assign(
          { storySource: { source: '(args) => <Header {...args} />' } },
          LoggedIn.parameters,
        )),
        (LoggedOut.parameters = Object.assign(
          { storySource: { source: '(args) => <Header {...args} />' } },
          LoggedOut.parameters,
        ))
    },
    './src/stories/Header.tsx': function (
      module,
      __webpack_exports__,
      __webpack_require__,
    ) {
      'use strict'
      __webpack_require__.d(__webpack_exports__, 'a', function () {
        return Header
      })
      __webpack_require__('./node_modules/react/index.js')
      var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './src/stories/Button.tsx',
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ =
          (__webpack_require__('./src/stories/header.css'),
          __webpack_require__('./node_modules/react/jsx-runtime.js')),
        Header = function Header(_ref) {
          var user = _ref.user,
            onLogin = _ref.onLogin,
            onLogout = _ref.onLogout,
            onCreateAccount = _ref.onCreateAccount
          return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
            'header',
            {
              children: Object(
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs,
              )('div', {
                className: 'wrapper',
                children: [
                  Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(
                    'div',
                    {
                      children: [
                        Object(
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx,
                        )('svg', {
                          width: '32',
                          height: '32',
                          viewBox: '0 0 32 32',
                          xmlns: 'http://www.w3.org/2000/svg',
                          children: Object(
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs,
                          )('g', {
                            fill: 'none',
                            fillRule: 'evenodd',
                            children: [
                              Object(
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx,
                              )('path', {
                                d: 'M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z',
                                fill: '#FFF',
                              }),
                              Object(
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx,
                              )('path', {
                                d: 'M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z',
                                fill: '#555AB9',
                              }),
                              Object(
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx,
                              )('path', {
                                d: 'M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z',
                                fill: '#91BAF8',
                              }),
                            ],
                          }),
                        }),
                        Object(
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx,
                        )('h1', { children: 'Acme' }),
                      ],
                    },
                  ),
                  Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                    'div',
                    {
                      children: user
                        ? Object(
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs,
                          )(
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,
                            {
                              children: [
                                Object(
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs,
                                )('span', {
                                  className: 'welcome',
                                  children: [
                                    'Welcome, ',
                                    Object(
                                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx,
                                    )('b', { children: user.name }),
                                    '!',
                                  ],
                                }),
                                Object(
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx,
                                )(_Button__WEBPACK_IMPORTED_MODULE_1__.a, {
                                  size: 'small',
                                  onClick: onLogout,
                                  label: 'Log out',
                                }),
                              ],
                            },
                          )
                        : Object(
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs,
                          )(
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,
                            {
                              children: [
                                Object(
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx,
                                )(_Button__WEBPACK_IMPORTED_MODULE_1__.a, {
                                  size: 'small',
                                  onClick: onLogin,
                                  label: 'Log in',
                                }),
                                Object(
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx,
                                )(_Button__WEBPACK_IMPORTED_MODULE_1__.a, {
                                  primary: !0,
                                  size: 'small',
                                  onClick: onCreateAccount,
                                  label: 'Sign up',
                                }),
                              ],
                            },
                          ),
                    },
                  ),
                ],
              }),
            },
          )
        }
      Header.displayName = 'Header'
      try {
        ;(Header.displayName = 'Header'),
          (Header.__docgenInfo = {
            description: '',
            displayName: 'Header',
            props: {
              user: {
                defaultValue: null,
                description: '',
                name: 'user',
                required: !1,
                type: { name: 'User' },
              },
              onLogin: {
                defaultValue: null,
                description: '',
                name: 'onLogin',
                required: !0,
                type: { name: '() => void' },
              },
              onLogout: {
                defaultValue: null,
                description: '',
                name: 'onLogout',
                required: !0,
                type: { name: '() => void' },
              },
              onCreateAccount: {
                defaultValue: null,
                description: '',
                name: 'onCreateAccount',
                required: !0,
                type: { name: '() => void' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/stories/Header.tsx#Header'] = {
              docgenInfo: Header.__docgenInfo,
              name: 'Header',
              path: 'src/stories/Header.tsx#Header',
            })
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/stories/Introduction.stories.mdx': function (
      module,
      __webpack_exports__,
      __webpack_require__,
    ) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, '__page', function () {
          return __page
        })
      __webpack_require__('./node_modules/core-js/modules/es.object.keys.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.array.index-of.js',
        ),
        __webpack_require__('./node_modules/core-js/modules/es.symbol.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.object.assign.js',
        ),
        __webpack_require__('./node_modules/react/index.js')
      var _mdx_js_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          './node_modules/@mdx-js/react/index.js',
        ),
        _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            './node_modules/@storybook/addon-docs/dist/esm/index.js',
          ),
        _assets_code_brackets_svg__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__('./src/stories/assets/code-brackets.svg'),
        _assets_code_brackets_svg__WEBPACK_IMPORTED_MODULE_7___default =
          __webpack_require__.n(
            _assets_code_brackets_svg__WEBPACK_IMPORTED_MODULE_7__,
          ),
        _assets_colors_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          './src/stories/assets/colors.svg',
        ),
        _assets_colors_svg__WEBPACK_IMPORTED_MODULE_8___default =
          __webpack_require__.n(
            _assets_colors_svg__WEBPACK_IMPORTED_MODULE_8__,
          ),
        _assets_comments_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          './src/stories/assets/comments.svg',
        ),
        _assets_comments_svg__WEBPACK_IMPORTED_MODULE_9___default =
          __webpack_require__.n(
            _assets_comments_svg__WEBPACK_IMPORTED_MODULE_9__,
          ),
        _assets_direction_svg__WEBPACK_IMPORTED_MODULE_10__ =
          __webpack_require__('./src/stories/assets/direction.svg'),
        _assets_direction_svg__WEBPACK_IMPORTED_MODULE_10___default =
          __webpack_require__.n(
            _assets_direction_svg__WEBPACK_IMPORTED_MODULE_10__,
          ),
        _assets_flow_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          './src/stories/assets/flow.svg',
        ),
        _assets_flow_svg__WEBPACK_IMPORTED_MODULE_11___default =
          __webpack_require__.n(_assets_flow_svg__WEBPACK_IMPORTED_MODULE_11__),
        _assets_plugin_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          './src/stories/assets/plugin.svg',
        ),
        _assets_plugin_svg__WEBPACK_IMPORTED_MODULE_12___default =
          __webpack_require__.n(
            _assets_plugin_svg__WEBPACK_IMPORTED_MODULE_12__,
          ),
        _assets_repo_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          './src/stories/assets/repo.svg',
        ),
        _assets_repo_svg__WEBPACK_IMPORTED_MODULE_13___default =
          __webpack_require__.n(_assets_repo_svg__WEBPACK_IMPORTED_MODULE_13__),
        _assets_stackalt_svg__WEBPACK_IMPORTED_MODULE_14__ =
          __webpack_require__('./src/stories/assets/stackalt.svg'),
        _assets_stackalt_svg__WEBPACK_IMPORTED_MODULE_14___default =
          __webpack_require__.n(
            _assets_stackalt_svg__WEBPACK_IMPORTED_MODULE_14__,
          ),
        _excluded = ['components']
      function _extends() {
        return (
          (_extends = Object.assign
            ? Object.assign.bind()
            : function (target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = arguments[i]
                  for (var key in source)
                    Object.prototype.hasOwnProperty.call(source, key) &&
                      (target[key] = source[key])
                }
                return target
              }),
          _extends.apply(this, arguments)
        )
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {}
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {}
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source)
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key])
            return target
          })(source, excluded)
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source)
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]))
        }
        return target
      }
      var layoutProps = {}
      function MDXContent(_ref) {
        var components = _ref.components,
          props = _objectWithoutProperties(_ref, _excluded)
        return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)(
          'wrapper',
          _extends({}, layoutProps, props, {
            components: components,
            mdxType: 'MDXLayout',
          }),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)(
            _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_6__.b,
            { title: 'Example/Introduction', mdxType: 'Meta' },
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)(
            'style',
            null,
            "\n    .subheading {\n      --mediumdark: '#999999';\n      font-weight: 900;\n      font-size: 13px;\n      color: #999;\n      letter-spacing: 6px;\n      line-height: 24px;\n      text-transform: uppercase;\n      margin-bottom: 12px;\n      margin-top: 40px;\n    }\n\n    .link-list {\n      display: grid;\n      grid-template-columns: 1fr;\n      grid-template-rows: 1fr 1fr;\n      row-gap: 10px;\n    }\n\n    @media (min-width: 620px) {\n      .link-list {\n        row-gap: 20px;\n        column-gap: 20px;\n        grid-template-columns: 1fr 1fr;\n      }\n    }\n\n    @media all and (-ms-high-contrast:none) {\n    .link-list {\n        display: -ms-grid;\n        -ms-grid-columns: 1fr 1fr;\n        -ms-grid-rows: 1fr 1fr;\n      }\n    }\n\n    .link-item {\n      display: block;\n      padding: 20px 30px 20px 15px;\n      border: 1px solid #00000010;\n      border-radius: 5px;\n      transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;\n      color: #333333;\n      display: flex;\n      align-items: flex-start;\n    }\n\n    .link-item:hover {\n      border-color: #1EA7FD50;\n      transform: translate3d(0, -3px, 0);\n      box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;\n    }\n\n    .link-item:active {\n      border-color: #1EA7FD;\n      transform: translate3d(0, 0, 0);\n    }\n\n    .link-item strong {\n      font-weight: 700;\n      display: block;\n      margin-bottom: 2px;\n    }\n\n    .link-item img {\n      height: 40px;\n      width: 40px;\n      margin-right: 15px;\n      flex: none;\n    }\n\n    .link-item span {\n      font-size: 14px;\n      line-height: 20px;\n    }\n\n    .tip {\n      display: inline-block;\n      border-radius: 1em;\n      font-size: 11px;\n      line-height: 12px;\n      font-weight: 700;\n      background: #E7FDD8;\n      color: #66BF3C;\n      padding: 4px 12px;\n      margin-right: 10px;\n      vertical-align: top;\n    }\n\n    .tip-wrapper {\n      font-size: 13px;\n      line-height: 20px;\n      margin-top: 40px;\n      margin-bottom: 40px;\n    }\n\n    .tip-wrapper code {\n      font-size: 12px;\n      display: inline-block;\n    }\n  ",
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)(
            'h1',
            null,
            'Welcome to Storybook',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)(
            'p',
            null,
            "Storybook helps you build UI components in isolation from your app's business logic, data, and context.\nThat makes it easy to develop hard-to-reach states. Save these UI states as ",
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)(
              'strong',
              { parentName: 'p' },
              'stories',
            ),
            ' to revisit during development, testing, or QA.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)(
            'p',
            null,
            'Browse example stories now by navigating to them in the sidebar.\nView their code in the ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)(
              'inlineCode',
              { parentName: 'p' },
              'stories',
            ),
            ' directory to learn how they work.\nWe recommend building UIs with a ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)(
              'a',
              { parentName: 'p', href: 'https://componentdriven.org' },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)(
                'strong',
                { parentName: 'a' },
                'component-driven',
              ),
            ),
            ' process starting with atomic components and ending with pages.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)(
            'div',
            { className: 'subheading' },
            'Configure',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)(
            'div',
            { className: 'link-list' },
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)(
              'a',
              {
                className: 'link-item',
                href: 'https://storybook.js.org/docs/react/addons/addon-types',
                target: '_blank',
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)('img', {
                src: _assets_plugin_svg__WEBPACK_IMPORTED_MODULE_12___default.a,
                alt: 'plugin',
              }),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)(
                'span',
                null,
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)(
                  'strong',
                  null,
                  'Presets for popular tools',
                ),
                'Easy setup for TypeScript, SCSS and more.',
              ),
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)(
              'a',
              {
                className: 'link-item',
                href: 'https://storybook.js.org/docs/react/configure/webpack',
                target: '_blank',
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)('img', {
                src: _assets_stackalt_svg__WEBPACK_IMPORTED_MODULE_14___default.a,
                alt: 'Build',
              }),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)(
                'span',
                null,
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)(
                  'strong',
                  null,
                  'Build configuration',
                ),
                'How to customize webpack and Babel',
              ),
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)(
              'a',
              {
                className: 'link-item',
                href: 'https://storybook.js.org/docs/react/configure/styling-and-css',
                target: '_blank',
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)('img', {
                src: _assets_colors_svg__WEBPACK_IMPORTED_MODULE_8___default.a,
                alt: 'colors',
              }),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)(
                'span',
                null,
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)(
                  'strong',
                  null,
                  'Styling',
                ),
                'How to load and configure CSS libraries',
              ),
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)(
              'a',
              {
                className: 'link-item',
                href: 'https://storybook.js.org/docs/react/get-started/setup#configure-storybook-for-your-stack',
                target: '_blank',
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)('img', {
                src: _assets_flow_svg__WEBPACK_IMPORTED_MODULE_11___default.a,
                alt: 'flow',
              }),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)(
                'span',
                null,
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)(
                  'strong',
                  null,
                  'Data',
                ),
                'Providers and mocking for data libraries',
              ),
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)(
            'div',
            { className: 'subheading' },
            'Learn',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)(
            'div',
            { className: 'link-list' },
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)(
              'a',
              {
                className: 'link-item',
                href: 'https://storybook.js.org/docs',
                target: '_blank',
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)('img', {
                src: _assets_repo_svg__WEBPACK_IMPORTED_MODULE_13___default.a,
                alt: 'repo',
              }),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)(
                'span',
                null,
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)(
                  'strong',
                  null,
                  'Storybook documentation',
                ),
                'Configure, customize, and extend',
              ),
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)(
              'a',
              {
                className: 'link-item',
                href: 'https://storybook.js.org/tutorials/',
                target: '_blank',
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)('img', {
                src: _assets_direction_svg__WEBPACK_IMPORTED_MODULE_10___default.a,
                alt: 'direction',
              }),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)(
                'span',
                null,
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)(
                  'strong',
                  null,
                  'In-depth guides',
                ),
                'Best practices from leading teams',
              ),
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)(
              'a',
              {
                className: 'link-item',
                href: 'https://github.com/storybookjs/storybook',
                target: '_blank',
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)('img', {
                src: _assets_code_brackets_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
                alt: 'code',
              }),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)(
                'span',
                null,
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)(
                  'strong',
                  null,
                  'GitHub project',
                ),
                'View the source and add issues',
              ),
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)(
              'a',
              {
                className: 'link-item',
                href: 'https://discord.gg/storybook',
                target: '_blank',
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)('img', {
                src: _assets_comments_svg__WEBPACK_IMPORTED_MODULE_9___default.a,
                alt: 'comments',
              }),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)(
                'span',
                null,
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)(
                  'strong',
                  null,
                  'Discord chat',
                ),
                'Chat with maintainers and the community',
              ),
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)(
            'div',
            { className: 'tip-wrapper' },
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)(
              'span',
              { className: 'tip' },
              'Tip',
            ),
            'Edit the Markdown in',
            ' ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)(
              'code',
              null,
              'stories/Introduction.stories.mdx',
            ),
          ),
        )
      }
      ;(MDXContent.displayName = 'MDXContent'), (MDXContent.isMDXComponent = !0)
      var __page = function __page() {
        throw new Error('Docs-only story')
      }
      __page.parameters = { docsOnly: !0 }
      var componentMeta = {
          title: 'Example/Introduction',
          includeStories: ['__page'],
        },
        mdxStoryNameToKey = {}
      ;(componentMeta.parameters = componentMeta.parameters || {}),
        (componentMeta.parameters.docs = Object.assign(
          {},
          componentMeta.parameters.docs || {},
          {
            page: function page() {
              return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)(
                _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_6__.a,
                {
                  mdxStoryNameToKey: mdxStoryNameToKey,
                  mdxComponentAnnotations: componentMeta,
                },
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)(
                  MDXContent,
                  null,
                ),
              )
            },
          },
        )),
        (__webpack_exports__.default = componentMeta)
    },
    './src/stories/Page.stories.tsx': function (
      module,
      __webpack_exports__,
      __webpack_require__,
    ) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'LoggedOut', function () {
          return LoggedOut
        }),
        __webpack_require__.d(__webpack_exports__, 'LoggedIn', function () {
          return LoggedIn
        })
      __webpack_require__('./node_modules/core-js/modules/es.object.assign.js'),
        __webpack_require__('./node_modules/core-js/modules/es.promise.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.object.to-string.js',
        ),
        __webpack_require__('./node_modules/core-js/modules/es.symbol.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.symbol.description.js',
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.symbol.iterator.js',
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.string.iterator.js',
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.array.iterator.js',
        ),
        __webpack_require__(
          './node_modules/core-js/modules/web.dom-collections.iterator.js',
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.symbol.async-iterator.js',
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.symbol.to-string-tag.js',
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.math.to-string-tag.js',
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.json.to-string-tag.js',
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.object.define-property.js',
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.object.get-prototype-of.js',
        ),
        __webpack_require__(
          './node_modules/core-js/modules/web.dom-collections.for-each.js',
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.object.set-prototype-of.js',
        ),
        __webpack_require__('./node_modules/core-js/modules/es.array.slice.js')
      var react = __webpack_require__('./node_modules/react/index.js'),
        react_default = __webpack_require__.n(react),
        esm = __webpack_require__(
          './node_modules/@storybook/testing-library/dist/esm/index.js',
        ),
        Header =
          (__webpack_require__(
            './node_modules/core-js/modules/es.array.from.js',
          ),
          __webpack_require__('./src/stories/Header.tsx')),
        jsx_runtime =
          (__webpack_require__('./src/stories/page.css'),
          __webpack_require__('./node_modules/react/jsx-runtime.js'))
      function _slicedToArray(arr, i) {
        return (
          (function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr
          })(arr) ||
          (function _iterableToArrayLimit(arr, i) {
            var _i =
              null == arr
                ? null
                : ('undefined' != typeof Symbol && arr[Symbol.iterator]) ||
                  arr['@@iterator']
            if (null == _i) return
            var _s,
              _e,
              _arr = [],
              _n = !0,
              _d = !1
            try {
              for (
                _i = _i.call(arr);
                !(_n = (_s = _i.next()).done) &&
                (_arr.push(_s.value), !i || _arr.length !== i);
                _n = !0
              );
            } catch (err) {
              ;(_d = !0), (_e = err)
            } finally {
              try {
                _n || null == _i.return || _i.return()
              } finally {
                if (_d) throw _e
              }
            }
            return _arr
          })(arr, i) ||
          (function _unsupportedIterableToArray(o, minLen) {
            if (!o) return
            if ('string' == typeof o) return _arrayLikeToArray(o, minLen)
            var n = Object.prototype.toString.call(o).slice(8, -1)
            'Object' === n && o.constructor && (n = o.constructor.name)
            if ('Map' === n || 'Set' === n) return Array.from(o)
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return _arrayLikeToArray(o, minLen)
          })(arr, i) ||
          (function _nonIterableRest() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            )
          })()
        )
      }
      function _arrayLikeToArray(arr, len) {
        ;(null == len || len > arr.length) && (len = arr.length)
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]
        return arr2
      }
      var Page_Page = function Page() {
        var _React$useState2 = _slicedToArray(react_default.a.useState(), 2),
          user = _React$useState2[0],
          setUser = _React$useState2[1]
        return Object(jsx_runtime.jsxs)('article', {
          children: [
            Object(jsx_runtime.jsx)(Header.a, {
              user: user,
              onLogin: function onLogin() {
                return setUser({ name: 'Jane Doe' })
              },
              onLogout: function onLogout() {
                return setUser(void 0)
              },
              onCreateAccount: function onCreateAccount() {
                return setUser({ name: 'Jane Doe' })
              },
            }),
            Object(jsx_runtime.jsxs)('section', {
              children: [
                Object(jsx_runtime.jsx)('h2', {
                  children: 'Pages in Storybook',
                }),
                Object(jsx_runtime.jsxs)('p', {
                  children: [
                    'We recommend building UIs with a',
                    ' ',
                    Object(jsx_runtime.jsx)('a', {
                      href: 'https://componentdriven.org',
                      target: '_blank',
                      rel: 'noopener noreferrer',
                      children: Object(jsx_runtime.jsx)('strong', {
                        children: 'component-driven',
                      }),
                    }),
                    ' ',
                    'process starting with atomic components and ending with pages.',
                  ],
                }),
                Object(jsx_runtime.jsx)('p', {
                  children:
                    'Render pages with mock data. This makes it easy to build and review page states without needing to navigate to them in your app. Here are some handy patterns for managing page data in Storybook:',
                }),
                Object(jsx_runtime.jsxs)('ul', {
                  children: [
                    Object(jsx_runtime.jsx)('li', {
                      children:
                        'Use a higher-level connected component. Storybook helps you compose such data from the "args" of child component stories',
                    }),
                    Object(jsx_runtime.jsx)('li', {
                      children:
                        'Assemble data in the page component from your services. You can mock these services out using Storybook.',
                    }),
                  ],
                }),
                Object(jsx_runtime.jsxs)('p', {
                  children: [
                    'Get a guided tutorial on component-driven development at',
                    ' ',
                    Object(jsx_runtime.jsx)('a', {
                      href: 'https://storybook.js.org/tutorials/',
                      target: '_blank',
                      rel: 'noopener noreferrer',
                      children: 'Storybook tutorials',
                    }),
                    '. Read more in the',
                    ' ',
                    Object(jsx_runtime.jsx)('a', {
                      href: 'https://storybook.js.org/docs',
                      target: '_blank',
                      rel: 'noopener noreferrer',
                      children: 'docs',
                    }),
                    '.',
                  ],
                }),
                Object(jsx_runtime.jsxs)('div', {
                  className: 'tip-wrapper',
                  children: [
                    Object(jsx_runtime.jsx)('span', {
                      className: 'tip',
                      children: 'Tip',
                    }),
                    ' Adjust the width of the canvas with the',
                    ' ',
                    Object(jsx_runtime.jsx)('svg', {
                      width: '10',
                      height: '10',
                      viewBox: '0 0 12 12',
                      xmlns: 'http://www.w3.org/2000/svg',
                      children: Object(jsx_runtime.jsx)('g', {
                        fill: 'none',
                        fillRule: 'evenodd',
                        children: Object(jsx_runtime.jsx)('path', {
                          d: 'M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z',
                          id: 'a',
                          fill: '#999',
                        }),
                      }),
                    }),
                    'Viewports addon in the toolbar',
                  ],
                }),
              ],
            }),
          ],
        })
      }
      Page_Page.displayName = 'Page'
      try {
        ;(Page_Page.displayName = 'Page'),
          (Page_Page.__docgenInfo = {
            description: '',
            displayName: 'Page',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/stories/Page.tsx#Page'] = {
              docgenInfo: Page_Page.__docgenInfo,
              name: 'Page',
              path: 'src/stories/Page.tsx#Page',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      function _regeneratorRuntime() {
        _regeneratorRuntime = function _regeneratorRuntime() {
          return exports
        }
        var exports = {},
          Op = Object.prototype,
          hasOwn = Op.hasOwnProperty,
          $Symbol = 'function' == typeof Symbol ? Symbol : {},
          iteratorSymbol = $Symbol.iterator || '@@iterator',
          asyncIteratorSymbol = $Symbol.asyncIterator || '@@asyncIterator',
          toStringTagSymbol = $Symbol.toStringTag || '@@toStringTag'
        function define(obj, key, value) {
          return (
            Object.defineProperty(obj, key, {
              value: value,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            obj[key]
          )
        }
        try {
          define({}, '')
        } catch (err) {
          define = function define(obj, key, value) {
            return (obj[key] = value)
          }
        }
        function wrap(innerFn, outerFn, self, tryLocsList) {
          var protoGenerator =
              outerFn && outerFn.prototype instanceof Generator
                ? outerFn
                : Generator,
            generator = Object.create(protoGenerator.prototype),
            context = new Context(tryLocsList || [])
          return (
            (generator._invoke = (function (innerFn, self, context) {
              var state = 'suspendedStart'
              return function (method, arg) {
                if ('executing' === state)
                  throw new Error('Generator is already running')
                if ('completed' === state) {
                  if ('throw' === method) throw arg
                  return doneResult()
                }
                for (context.method = method, context.arg = arg; ; ) {
                  var delegate = context.delegate
                  if (delegate) {
                    var delegateResult = maybeInvokeDelegate(delegate, context)
                    if (delegateResult) {
                      if (delegateResult === ContinueSentinel) continue
                      return delegateResult
                    }
                  }
                  if ('next' === context.method)
                    context.sent = context._sent = context.arg
                  else if ('throw' === context.method) {
                    if ('suspendedStart' === state)
                      throw ((state = 'completed'), context.arg)
                    context.dispatchException(context.arg)
                  } else
                    'return' === context.method &&
                      context.abrupt('return', context.arg)
                  state = 'executing'
                  var record = tryCatch(innerFn, self, context)
                  if ('normal' === record.type) {
                    if (
                      ((state = context.done ? 'completed' : 'suspendedYield'),
                      record.arg === ContinueSentinel)
                    )
                      continue
                    return { value: record.arg, done: context.done }
                  }
                  'throw' === record.type &&
                    ((state = 'completed'),
                    (context.method = 'throw'),
                    (context.arg = record.arg))
                }
              }
            })(innerFn, self, context)),
            generator
          )
        }
        function tryCatch(fn, obj, arg) {
          try {
            return { type: 'normal', arg: fn.call(obj, arg) }
          } catch (err) {
            return { type: 'throw', arg: err }
          }
        }
        exports.wrap = wrap
        var ContinueSentinel = {}
        function Generator() {}
        function GeneratorFunction() {}
        function GeneratorFunctionPrototype() {}
        var IteratorPrototype = {}
        define(IteratorPrototype, iteratorSymbol, function () {
          return this
        })
        var getProto = Object.getPrototypeOf,
          NativeIteratorPrototype = getProto && getProto(getProto(values([])))
        NativeIteratorPrototype &&
          NativeIteratorPrototype !== Op &&
          hasOwn.call(NativeIteratorPrototype, iteratorSymbol) &&
          (IteratorPrototype = NativeIteratorPrototype)
        var Gp =
          (GeneratorFunctionPrototype.prototype =
          Generator.prototype =
            Object.create(IteratorPrototype))
        function defineIteratorMethods(prototype) {
          ;['next', 'throw', 'return'].forEach(function (method) {
            define(prototype, method, function (arg) {
              return this._invoke(method, arg)
            })
          })
        }
        function AsyncIterator(generator, PromiseImpl) {
          function invoke(method, arg, resolve, reject) {
            var record = tryCatch(generator[method], generator, arg)
            if ('throw' !== record.type) {
              var result = record.arg,
                value = result.value
              return value &&
                'object' == typeof value &&
                hasOwn.call(value, '__await')
                ? PromiseImpl.resolve(value.__await).then(
                    function (value) {
                      invoke('next', value, resolve, reject)
                    },
                    function (err) {
                      invoke('throw', err, resolve, reject)
                    },
                  )
                : PromiseImpl.resolve(value).then(
                    function (unwrapped) {
                      ;(result.value = unwrapped), resolve(result)
                    },
                    function (error) {
                      return invoke('throw', error, resolve, reject)
                    },
                  )
            }
            reject(record.arg)
          }
          var previousPromise
          this._invoke = function (method, arg) {
            function callInvokeWithMethodAndArg() {
              return new PromiseImpl(function (resolve, reject) {
                invoke(method, arg, resolve, reject)
              })
            }
            return (previousPromise = previousPromise
              ? previousPromise.then(
                  callInvokeWithMethodAndArg,
                  callInvokeWithMethodAndArg,
                )
              : callInvokeWithMethodAndArg())
          }
        }
        function maybeInvokeDelegate(delegate, context) {
          var method = delegate.iterator[context.method]
          if (void 0 === method) {
            if (((context.delegate = null), 'throw' === context.method)) {
              if (
                delegate.iterator.return &&
                ((context.method = 'return'),
                (context.arg = void 0),
                maybeInvokeDelegate(delegate, context),
                'throw' === context.method)
              )
                return ContinueSentinel
              ;(context.method = 'throw'),
                (context.arg = new TypeError(
                  "The iterator does not provide a 'throw' method",
                ))
            }
            return ContinueSentinel
          }
          var record = tryCatch(method, delegate.iterator, context.arg)
          if ('throw' === record.type)
            return (
              (context.method = 'throw'),
              (context.arg = record.arg),
              (context.delegate = null),
              ContinueSentinel
            )
          var info = record.arg
          return info
            ? info.done
              ? ((context[delegate.resultName] = info.value),
                (context.next = delegate.nextLoc),
                'return' !== context.method &&
                  ((context.method = 'next'), (context.arg = void 0)),
                (context.delegate = null),
                ContinueSentinel)
              : info
            : ((context.method = 'throw'),
              (context.arg = new TypeError('iterator result is not an object')),
              (context.delegate = null),
              ContinueSentinel)
        }
        function pushTryEntry(locs) {
          var entry = { tryLoc: locs[0] }
          1 in locs && (entry.catchLoc = locs[1]),
            2 in locs &&
              ((entry.finallyLoc = locs[2]), (entry.afterLoc = locs[3])),
            this.tryEntries.push(entry)
        }
        function resetTryEntry(entry) {
          var record = entry.completion || {}
          ;(record.type = 'normal'),
            delete record.arg,
            (entry.completion = record)
        }
        function Context(tryLocsList) {
          ;(this.tryEntries = [{ tryLoc: 'root' }]),
            tryLocsList.forEach(pushTryEntry, this),
            this.reset(!0)
        }
        function values(iterable) {
          if (iterable) {
            var iteratorMethod = iterable[iteratorSymbol]
            if (iteratorMethod) return iteratorMethod.call(iterable)
            if ('function' == typeof iterable.next) return iterable
            if (!isNaN(iterable.length)) {
              var i = -1,
                next = function next() {
                  for (; ++i < iterable.length; )
                    if (hasOwn.call(iterable, i))
                      return (next.value = iterable[i]), (next.done = !1), next
                  return (next.value = void 0), (next.done = !0), next
                }
              return (next.next = next)
            }
          }
          return { next: doneResult }
        }
        function doneResult() {
          return { value: void 0, done: !0 }
        }
        return (
          (GeneratorFunction.prototype = GeneratorFunctionPrototype),
          define(Gp, 'constructor', GeneratorFunctionPrototype),
          define(GeneratorFunctionPrototype, 'constructor', GeneratorFunction),
          (GeneratorFunction.displayName = define(
            GeneratorFunctionPrototype,
            toStringTagSymbol,
            'GeneratorFunction',
          )),
          (exports.isGeneratorFunction = function (genFun) {
            var ctor = 'function' == typeof genFun && genFun.constructor
            return (
              !!ctor &&
              (ctor === GeneratorFunction ||
                'GeneratorFunction' === (ctor.displayName || ctor.name))
            )
          }),
          (exports.mark = function (genFun) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype)
                : ((genFun.__proto__ = GeneratorFunctionPrototype),
                  define(genFun, toStringTagSymbol, 'GeneratorFunction')),
              (genFun.prototype = Object.create(Gp)),
              genFun
            )
          }),
          (exports.awrap = function (arg) {
            return { __await: arg }
          }),
          defineIteratorMethods(AsyncIterator.prototype),
          define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
            return this
          }),
          (exports.AsyncIterator = AsyncIterator),
          (exports.async = function (
            innerFn,
            outerFn,
            self,
            tryLocsList,
            PromiseImpl,
          ) {
            void 0 === PromiseImpl && (PromiseImpl = Promise)
            var iter = new AsyncIterator(
              wrap(innerFn, outerFn, self, tryLocsList),
              PromiseImpl,
            )
            return exports.isGeneratorFunction(outerFn)
              ? iter
              : iter.next().then(function (result) {
                  return result.done ? result.value : iter.next()
                })
          }),
          defineIteratorMethods(Gp),
          define(Gp, toStringTagSymbol, 'Generator'),
          define(Gp, iteratorSymbol, function () {
            return this
          }),
          define(Gp, 'toString', function () {
            return '[object Generator]'
          }),
          (exports.keys = function (object) {
            var keys = []
            for (var key in object) keys.push(key)
            return (
              keys.reverse(),
              function next() {
                for (; keys.length; ) {
                  var key = keys.pop()
                  if (key in object)
                    return (next.value = key), (next.done = !1), next
                }
                return (next.done = !0), next
              }
            )
          }),
          (exports.values = values),
          (Context.prototype = {
            constructor: Context,
            reset: function reset(skipTempReset) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = void 0),
                this.tryEntries.forEach(resetTryEntry),
                !skipTempReset)
              )
                for (var name in this)
                  't' === name.charAt(0) &&
                    hasOwn.call(this, name) &&
                    !isNaN(+name.slice(1)) &&
                    (this[name] = void 0)
            },
            stop: function stop() {
              this.done = !0
              var rootRecord = this.tryEntries[0].completion
              if ('throw' === rootRecord.type) throw rootRecord.arg
              return this.rval
            },
            dispatchException: function dispatchException(exception) {
              if (this.done) throw exception
              var context = this
              function handle(loc, caught) {
                return (
                  (record.type = 'throw'),
                  (record.arg = exception),
                  (context.next = loc),
                  caught && ((context.method = 'next'), (context.arg = void 0)),
                  !!caught
                )
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i],
                  record = entry.completion
                if ('root' === entry.tryLoc) return handle('end')
                if (entry.tryLoc <= this.prev) {
                  var hasCatch = hasOwn.call(entry, 'catchLoc'),
                    hasFinally = hasOwn.call(entry, 'finallyLoc')
                  if (hasCatch && hasFinally) {
                    if (this.prev < entry.catchLoc)
                      return handle(entry.catchLoc, !0)
                    if (this.prev < entry.finallyLoc)
                      return handle(entry.finallyLoc)
                  } else if (hasCatch) {
                    if (this.prev < entry.catchLoc)
                      return handle(entry.catchLoc, !0)
                  } else {
                    if (!hasFinally)
                      throw new Error('try statement without catch or finally')
                    if (this.prev < entry.finallyLoc)
                      return handle(entry.finallyLoc)
                  }
                }
              }
            },
            abrupt: function abrupt(type, arg) {
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i]
                if (
                  entry.tryLoc <= this.prev &&
                  hasOwn.call(entry, 'finallyLoc') &&
                  this.prev < entry.finallyLoc
                ) {
                  var finallyEntry = entry
                  break
                }
              }
              finallyEntry &&
                ('break' === type || 'continue' === type) &&
                finallyEntry.tryLoc <= arg &&
                arg <= finallyEntry.finallyLoc &&
                (finallyEntry = null)
              var record = finallyEntry ? finallyEntry.completion : {}
              return (
                (record.type = type),
                (record.arg = arg),
                finallyEntry
                  ? ((this.method = 'next'),
                    (this.next = finallyEntry.finallyLoc),
                    ContinueSentinel)
                  : this.complete(record)
              )
            },
            complete: function complete(record, afterLoc) {
              if ('throw' === record.type) throw record.arg
              return (
                'break' === record.type || 'continue' === record.type
                  ? (this.next = record.arg)
                  : 'return' === record.type
                  ? ((this.rval = this.arg = record.arg),
                    (this.method = 'return'),
                    (this.next = 'end'))
                  : 'normal' === record.type &&
                    afterLoc &&
                    (this.next = afterLoc),
                ContinueSentinel
              )
            },
            finish: function finish(finallyLoc) {
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i]
                if (entry.finallyLoc === finallyLoc)
                  return (
                    this.complete(entry.completion, entry.afterLoc),
                    resetTryEntry(entry),
                    ContinueSentinel
                  )
              }
            },
            catch: function _catch(tryLoc) {
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i]
                if (entry.tryLoc === tryLoc) {
                  var record = entry.completion
                  if ('throw' === record.type) {
                    var thrown = record.arg
                    resetTryEntry(entry)
                  }
                  return thrown
                }
              }
              throw new Error('illegal catch attempt')
            },
            delegateYield: function delegateYield(
              iterable,
              resultName,
              nextLoc,
            ) {
              return (
                (this.delegate = {
                  iterator: values(iterable),
                  resultName: resultName,
                  nextLoc: nextLoc,
                }),
                'next' === this.method && (this.arg = void 0),
                ContinueSentinel
              )
            },
          }),
          exports
        )
      }
      function asyncGeneratorStep(
        gen,
        resolve,
        reject,
        _next,
        _throw,
        key,
        arg,
      ) {
        try {
          var info = gen[key](arg),
            value = info.value
        } catch (error) {
          return void reject(error)
        }
        info.done ? resolve(value) : Promise.resolve(value).then(_next, _throw)
      }
      __webpack_exports__.default = {
        title: 'Example/Page',
        component: Page_Page,
        parameters: { layout: 'fullscreen' },
      }
      var Page_stories_Template = function Template(args) {
        return Object(jsx_runtime.jsx)(Page_Page, Object.assign({}, args))
      }
      Page_stories_Template.displayName = 'Template'
      var LoggedOut = Page_stories_Template.bind({}),
        LoggedIn = Page_stories_Template.bind({})
      ;(LoggedIn.play = (function () {
        var _ref2 = (function _asyncToGenerator(fn) {
          return function () {
            var self = this,
              args = arguments
            return new Promise(function (resolve, reject) {
              var gen = fn.apply(self, args)
              function _next(value) {
                asyncGeneratorStep(
                  gen,
                  resolve,
                  reject,
                  _next,
                  _throw,
                  'next',
                  value,
                )
              }
              function _throw(err) {
                asyncGeneratorStep(
                  gen,
                  resolve,
                  reject,
                  _next,
                  _throw,
                  'throw',
                  err,
                )
              }
              _next(void 0)
            })
          }
        })(
          _regeneratorRuntime().mark(function _callee(_ref) {
            var canvasElement, canvas, loginButton
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              for (;;)
                switch ((_context.prev = _context.next)) {
                  case 0:
                    return (
                      (canvasElement = _ref.canvasElement),
                      (canvas = Object(esm.b)(canvasElement)),
                      (_context.next = 4),
                      canvas.getByRole('button', { name: /Log in/i })
                    )
                  case 4:
                    return (
                      (loginButton = _context.sent),
                      (_context.next = 7),
                      esm.a.click(loginButton)
                    )
                  case 7:
                  case 'end':
                    return _context.stop()
                }
            }, _callee)
          }),
        )
        return function (_x) {
          return _ref2.apply(this, arguments)
        }
      })()),
        (LoggedOut.parameters = Object.assign(
          { storySource: { source: '(args) => <Page {...args} />' } },
          LoggedOut.parameters,
        )),
        (LoggedIn.parameters = Object.assign(
          { storySource: { source: '(args) => <Page {...args} />' } },
          LoggedIn.parameters,
        ))
    },
    './src/stories/assets/code-brackets.svg': function (
      module,
      exports,
      __webpack_require__,
    ) {
      module.exports =
        __webpack_require__.p + 'static/media/code-brackets.2e1112d7.svg'
    },
    './src/stories/assets/colors.svg': function (
      module,
      exports,
      __webpack_require__,
    ) {
      module.exports =
        __webpack_require__.p + 'static/media/colors.a4bd0486.svg'
    },
    './src/stories/assets/comments.svg': function (
      module,
      exports,
      __webpack_require__,
    ) {
      module.exports =
        __webpack_require__.p + 'static/media/comments.a3859089.svg'
    },
    './src/stories/assets/direction.svg': function (
      module,
      exports,
      __webpack_require__,
    ) {
      module.exports =
        __webpack_require__.p + 'static/media/direction.b770f9af.svg'
    },
    './src/stories/assets/flow.svg': function (
      module,
      exports,
      __webpack_require__,
    ) {
      module.exports = __webpack_require__.p + 'static/media/flow.edad2ac1.svg'
    },
    './src/stories/assets/plugin.svg': function (
      module,
      exports,
      __webpack_require__,
    ) {
      module.exports =
        __webpack_require__.p + 'static/media/plugin.d494b228.svg'
    },
    './src/stories/assets/repo.svg': function (
      module,
      exports,
      __webpack_require__,
    ) {
      module.exports = __webpack_require__.p + 'static/media/repo.6d496322.svg'
    },
    './src/stories/assets/stackalt.svg': function (
      module,
      exports,
      __webpack_require__,
    ) {
      module.exports =
        __webpack_require__.p + 'static/media/stackalt.dba9fbb3.svg'
    },
    './src/stories/button.css': function (
      module,
      exports,
      __webpack_require__,
    ) {
      var api = __webpack_require__(
          './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js',
        ),
        content = __webpack_require__(
          './node_modules/css-loader/dist/cjs.js?!./node_modules/@storybook/builder-webpack4/node_modules/postcss-loader/dist/cjs.js?!./src/stories/button.css',
        )
      'string' ==
        typeof (content = content.__esModule ? content.default : content) &&
        (content = [[module.i, content, '']])
      var options = { insert: 'head', singleton: !1 }
      api(content, options)
      module.exports = content.locals || {}
    },
    './src/stories/header.css': function (
      module,
      exports,
      __webpack_require__,
    ) {
      var api = __webpack_require__(
          './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js',
        ),
        content = __webpack_require__(
          './node_modules/css-loader/dist/cjs.js?!./node_modules/@storybook/builder-webpack4/node_modules/postcss-loader/dist/cjs.js?!./src/stories/header.css',
        )
      'string' ==
        typeof (content = content.__esModule ? content.default : content) &&
        (content = [[module.i, content, '']])
      var options = { insert: 'head', singleton: !1 }
      api(content, options)
      module.exports = content.locals || {}
    },
    './src/stories/page.css': function (module, exports, __webpack_require__) {
      var api = __webpack_require__(
          './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js',
        ),
        content = __webpack_require__(
          './node_modules/css-loader/dist/cjs.js?!./node_modules/@storybook/builder-webpack4/node_modules/postcss-loader/dist/cjs.js?!./src/stories/page.css',
        )
      'string' ==
        typeof (content = content.__esModule ? content.default : content) &&
        (content = [[module.i, content, '']])
      var options = { insert: 'head', singleton: !1 }
      api(content, options)
      module.exports = content.locals || {}
    },
    './storybook-init-framework-entry.js': function (
      module,
      __webpack_exports__,
      __webpack_require__,
    ) {
      'use strict'
      __webpack_require__.r(__webpack_exports__)
      __webpack_require__(
        './node_modules/@storybook/react/dist/esm/client/index.js',
      )
    },
    0: function (module, exports, __webpack_require__) {
      __webpack_require__(
        './node_modules/@storybook/core-server/node_modules/@storybook/core-client/dist/esm/globals/polyfills.js',
      ),
        __webpack_require__(
          './node_modules/@storybook/core-server/node_modules/@storybook/core-client/dist/esm/globals/globals.js',
        ),
        __webpack_require__('./storybook-init-framework-entry.js'),
        __webpack_require__(
          './node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js',
        ),
        __webpack_require__(
          './node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js',
        ),
        __webpack_require__(
          './node_modules/@storybook/addon-links/preview.js-generated-config-entry.js',
        ),
        __webpack_require__(
          './node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js',
        ),
        __webpack_require__(
          './node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js',
        ),
        __webpack_require__(
          './node_modules/@storybook/addon-backgrounds/preview.js-generated-config-entry.js',
        ),
        __webpack_require__(
          './node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js',
        ),
        __webpack_require__(
          './node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js',
        ),
        __webpack_require__(
          './node_modules/@storybook/addon-interactions/preview.js-generated-config-entry.js',
        ),
        __webpack_require__(
          './.storybook/preview.js-generated-config-entry.js',
        ),
        (module.exports = __webpack_require__('./generated-stories-entry.js'))
    },
    1: function (module, exports) {},
  },
  [[0, 4, 5]],
])
//# sourceMappingURL=main.1131054d.iframe.bundle.js.map
