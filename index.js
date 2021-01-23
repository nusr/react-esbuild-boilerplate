(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
  var __commonJS = (callback, module) => () => {
    if (!module) {
      module = {exports: {}};
      callback(module.exports, module);
    }
    return module.exports;
  };
  var __exportStar = (target, module, desc) => {
    __markAsModule(target);
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && key !== "default")
          __defProp(target, key, {get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable});
    }
    return target;
  };
  var __toModule = (module) => {
    if (module && module.__esModule)
      return module;
    return __exportStar(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", {value: module, enumerable: true}), module);
  };

  // node_modules/object-assign/index.js
  var require_object_assign = __commonJS((exports, module) => {
    /*
    object-assign
    (c) Sindre Sorhus
    @license MIT
    */
    "use strict";
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;
    function toObject(val) {
      if (val === null || val === void 0) {
        throw new TypeError("Object.assign cannot be called with null or undefined");
      }
      return Object(val);
    }
    function shouldUseNative() {
      try {
        if (!Object.assign) {
          return false;
        }
        var test1 = new String("abc");
        test1[5] = "de";
        if (Object.getOwnPropertyNames(test1)[0] === "5") {
          return false;
        }
        var test2 = {};
        for (var i4 = 0; i4 < 10; i4++) {
          test2["_" + String.fromCharCode(i4)] = i4;
        }
        var order2 = Object.getOwnPropertyNames(test2).map(function(n4) {
          return test2[n4];
        });
        if (order2.join("") !== "0123456789") {
          return false;
        }
        var test3 = {};
        "abcdefghijklmnopqrst".split("").forEach(function(letter) {
          test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
          return false;
        }
        return true;
      } catch (err) {
        return false;
      }
    }
    module.exports = shouldUseNative() ? Object.assign : function(target, source) {
      var from;
      var to = toObject(target);
      var symbols;
      for (var s3 = 1; s3 < arguments.length; s3++) {
        from = Object(arguments[s3]);
        for (var key in from) {
          if (hasOwnProperty.call(from, key)) {
            to[key] = from[key];
          }
        }
        if (getOwnPropertySymbols) {
          symbols = getOwnPropertySymbols(from);
          for (var i4 = 0; i4 < symbols.length; i4++) {
            if (propIsEnumerable.call(from, symbols[i4])) {
              to[symbols[i4]] = from[symbols[i4]];
            }
          }
        }
      }
      return to;
    };
  });

  // node_modules/react/cjs/react.development.js
  var require_react_development = __commonJS((exports) => {
    /** @license React v17.0.1
     * react.development.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var _assign = require_object_assign();
        var ReactVersion = "17.0.1";
        var REACT_ELEMENT_TYPE = 60103;
        var REACT_PORTAL_TYPE = 60106;
        exports.Fragment = 60107;
        exports.StrictMode = 60108;
        exports.Profiler = 60114;
        var REACT_PROVIDER_TYPE = 60109;
        var REACT_CONTEXT_TYPE = 60110;
        var REACT_FORWARD_REF_TYPE = 60112;
        exports.Suspense = 60113;
        var REACT_SUSPENSE_LIST_TYPE = 60120;
        var REACT_MEMO_TYPE = 60115;
        var REACT_LAZY_TYPE = 60116;
        var REACT_BLOCK_TYPE = 60121;
        var REACT_SERVER_BLOCK_TYPE = 60122;
        var REACT_FUNDAMENTAL_TYPE = 60117;
        var REACT_SCOPE_TYPE = 60119;
        var REACT_OPAQUE_ID_TYPE = 60128;
        var REACT_DEBUG_TRACING_MODE_TYPE = 60129;
        var REACT_OFFSCREEN_TYPE = 60130;
        var REACT_LEGACY_HIDDEN_TYPE = 60131;
        if (typeof Symbol === "function" && Symbol.for) {
          var symbolFor = Symbol.for;
          REACT_ELEMENT_TYPE = symbolFor("react.element");
          REACT_PORTAL_TYPE = symbolFor("react.portal");
          exports.Fragment = symbolFor("react.fragment");
          exports.StrictMode = symbolFor("react.strict_mode");
          exports.Profiler = symbolFor("react.profiler");
          REACT_PROVIDER_TYPE = symbolFor("react.provider");
          REACT_CONTEXT_TYPE = symbolFor("react.context");
          REACT_FORWARD_REF_TYPE = symbolFor("react.forward_ref");
          exports.Suspense = symbolFor("react.suspense");
          REACT_SUSPENSE_LIST_TYPE = symbolFor("react.suspense_list");
          REACT_MEMO_TYPE = symbolFor("react.memo");
          REACT_LAZY_TYPE = symbolFor("react.lazy");
          REACT_BLOCK_TYPE = symbolFor("react.block");
          REACT_SERVER_BLOCK_TYPE = symbolFor("react.server.block");
          REACT_FUNDAMENTAL_TYPE = symbolFor("react.fundamental");
          REACT_SCOPE_TYPE = symbolFor("react.scope");
          REACT_OPAQUE_ID_TYPE = symbolFor("react.opaque.id");
          REACT_DEBUG_TRACING_MODE_TYPE = symbolFor("react.debug_trace_mode");
          REACT_OFFSCREEN_TYPE = symbolFor("react.offscreen");
          REACT_LEGACY_HIDDEN_TYPE = symbolFor("react.legacy_hidden");
        }
        var MAYBE_ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = "@@iterator";
        function getIteratorFn(maybeIterable) {
          if (maybeIterable === null || typeof maybeIterable !== "object") {
            return null;
          }
          var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
          if (typeof maybeIterator === "function") {
            return maybeIterator;
          }
          return null;
        }
        var ReactCurrentDispatcher = {
          current: null
        };
        var ReactCurrentBatchConfig = {
          transition: 0
        };
        var ReactCurrentOwner = {
          current: null
        };
        var ReactDebugCurrentFrame = {};
        var currentExtraStackFrame = null;
        function setExtraStackFrame(stack) {
          {
            currentExtraStackFrame = stack;
          }
        }
        {
          ReactDebugCurrentFrame.setExtraStackFrame = function(stack) {
            {
              currentExtraStackFrame = stack;
            }
          };
          ReactDebugCurrentFrame.getCurrentStack = null;
          ReactDebugCurrentFrame.getStackAddendum = function() {
            var stack = "";
            if (currentExtraStackFrame) {
              stack += currentExtraStackFrame;
            }
            var impl = ReactDebugCurrentFrame.getCurrentStack;
            if (impl) {
              stack += impl() || "";
            }
            return stack;
          };
        }
        var IsSomeRendererActing = {
          current: false
        };
        var ReactSharedInternals = {
          ReactCurrentDispatcher,
          ReactCurrentBatchConfig,
          ReactCurrentOwner,
          IsSomeRendererActing,
          assign: _assign
        };
        {
          ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
        }
        function warn(format) {
          {
            for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              args[_key - 1] = arguments[_key];
            }
            printWarning("warn", format, args);
          }
        }
        function error(format) {
          {
            for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
              args[_key2 - 1] = arguments[_key2];
            }
            printWarning("error", format, args);
          }
        }
        function printWarning(level, format, args) {
          {
            var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame2.getStackAddendum();
            if (stack !== "") {
              format += "%s";
              args = args.concat([stack]);
            }
            var argsWithFormat = args.map(function(item) {
              return "" + item;
            });
            argsWithFormat.unshift("Warning: " + format);
            Function.prototype.apply.call(console[level], console, argsWithFormat);
          }
        }
        var didWarnStateUpdateForUnmountedComponent = {};
        function warnNoop(publicInstance, callerName) {
          {
            var _constructor = publicInstance.constructor;
            var componentName = _constructor && (_constructor.displayName || _constructor.name) || "ReactClass";
            var warningKey = componentName + "." + callerName;
            if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
              return;
            }
            error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", callerName, componentName);
            didWarnStateUpdateForUnmountedComponent[warningKey] = true;
          }
        }
        var ReactNoopUpdateQueue = {
          isMounted: function(publicInstance) {
            return false;
          },
          enqueueForceUpdate: function(publicInstance, callback, callerName) {
            warnNoop(publicInstance, "forceUpdate");
          },
          enqueueReplaceState: function(publicInstance, completeState, callback, callerName) {
            warnNoop(publicInstance, "replaceState");
          },
          enqueueSetState: function(publicInstance, partialState, callback, callerName) {
            warnNoop(publicInstance, "setState");
          }
        };
        var emptyObject = {};
        {
          Object.freeze(emptyObject);
        }
        function Component(props, context, updater) {
          this.props = props;
          this.context = context;
          this.refs = emptyObject;
          this.updater = updater || ReactNoopUpdateQueue;
        }
        Component.prototype.isReactComponent = {};
        Component.prototype.setState = function(partialState, callback) {
          if (!(typeof partialState === "object" || typeof partialState === "function" || partialState == null)) {
            {
              throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
            }
          }
          this.updater.enqueueSetState(this, partialState, callback, "setState");
        };
        Component.prototype.forceUpdate = function(callback) {
          this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
        };
        {
          var deprecatedAPIs = {
            isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
            replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
          };
          var defineDeprecationWarning = function(methodName, info) {
            Object.defineProperty(Component.prototype, methodName, {
              get: function() {
                warn("%s(...) is deprecated in plain JavaScript React classes. %s", info[0], info[1]);
                return void 0;
              }
            });
          };
          for (var fnName in deprecatedAPIs) {
            if (deprecatedAPIs.hasOwnProperty(fnName)) {
              defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
            }
          }
        }
        function ComponentDummy() {
        }
        ComponentDummy.prototype = Component.prototype;
        function PureComponent(props, context, updater) {
          this.props = props;
          this.context = context;
          this.refs = emptyObject;
          this.updater = updater || ReactNoopUpdateQueue;
        }
        var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
        pureComponentPrototype.constructor = PureComponent;
        _assign(pureComponentPrototype, Component.prototype);
        pureComponentPrototype.isPureReactComponent = true;
        function createRef() {
          var refObject = {
            current: null
          };
          {
            Object.seal(refObject);
          }
          return refObject;
        }
        function getWrappedName(outerType, innerType, wrapperName) {
          var functionName = innerType.displayName || innerType.name || "";
          return outerType.displayName || (functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName);
        }
        function getContextName(type) {
          return type.displayName || "Context";
        }
        function getComponentName(type) {
          if (type == null) {
            return null;
          }
          {
            if (typeof type.tag === "number") {
              error("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue.");
            }
          }
          if (typeof type === "function") {
            return type.displayName || type.name || null;
          }
          if (typeof type === "string") {
            return type;
          }
          switch (type) {
            case exports.Fragment:
              return "Fragment";
            case REACT_PORTAL_TYPE:
              return "Portal";
            case exports.Profiler:
              return "Profiler";
            case exports.StrictMode:
              return "StrictMode";
            case exports.Suspense:
              return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
              return "SuspenseList";
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_CONTEXT_TYPE:
                var context = type;
                return getContextName(context) + ".Consumer";
              case REACT_PROVIDER_TYPE:
                var provider = type;
                return getContextName(provider._context) + ".Provider";
              case REACT_FORWARD_REF_TYPE:
                return getWrappedName(type, type.render, "ForwardRef");
              case REACT_MEMO_TYPE:
                return getComponentName(type.type);
              case REACT_BLOCK_TYPE:
                return getComponentName(type._render);
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return getComponentName(init(payload));
                } catch (x3) {
                  return null;
                }
              }
            }
          }
          return null;
        }
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var RESERVED_PROPS = {
          key: true,
          ref: true,
          __self: true,
          __source: true
        };
        var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;
        {
          didWarnAboutStringRefs = {};
        }
        function hasValidRef(config) {
          {
            if (hasOwnProperty.call(config, "ref")) {
              var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.ref !== void 0;
        }
        function hasValidKey(config) {
          {
            if (hasOwnProperty.call(config, "key")) {
              var getter = Object.getOwnPropertyDescriptor(config, "key").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.key !== void 0;
        }
        function defineKeyPropWarningGetter(props, displayName) {
          var warnAboutAccessingKey = function() {
            {
              if (!specialPropKeyWarningShown) {
                specialPropKeyWarningShown = true;
                error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            }
          };
          warnAboutAccessingKey.isReactWarning = true;
          Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: true
          });
        }
        function defineRefPropWarningGetter(props, displayName) {
          var warnAboutAccessingRef = function() {
            {
              if (!specialPropRefWarningShown) {
                specialPropRefWarningShown = true;
                error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            }
          };
          warnAboutAccessingRef.isReactWarning = true;
          Object.defineProperty(props, "ref", {
            get: warnAboutAccessingRef,
            configurable: true
          });
        }
        function warnIfStringRefCannotBeAutoConverted(config) {
          {
            if (typeof config.ref === "string" && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
              var componentName = getComponentName(ReactCurrentOwner.current.type);
              if (!didWarnAboutStringRefs[componentName]) {
                error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);
                didWarnAboutStringRefs[componentName] = true;
              }
            }
          }
        }
        var ReactElement = function(type, key, ref, self2, source, owner, props) {
          var element = {
            $$typeof: REACT_ELEMENT_TYPE,
            type,
            key,
            ref,
            props,
            _owner: owner
          };
          {
            element._store = {};
            Object.defineProperty(element._store, "validated", {
              configurable: false,
              enumerable: false,
              writable: true,
              value: false
            });
            Object.defineProperty(element, "_self", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: self2
            });
            Object.defineProperty(element, "_source", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: source
            });
            if (Object.freeze) {
              Object.freeze(element.props);
              Object.freeze(element);
            }
          }
          return element;
        };
        function createElement(type, config, children) {
          var propName;
          var props = {};
          var key = null;
          var ref = null;
          var self2 = null;
          var source = null;
          if (config != null) {
            if (hasValidRef(config)) {
              ref = config.ref;
              {
                warnIfStringRefCannotBeAutoConverted(config);
              }
            }
            if (hasValidKey(config)) {
              key = "" + config.key;
            }
            self2 = config.__self === void 0 ? null : config.__self;
            source = config.__source === void 0 ? null : config.__source;
            for (propName in config) {
              if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                props[propName] = config[propName];
              }
            }
          }
          var childrenLength = arguments.length - 2;
          if (childrenLength === 1) {
            props.children = children;
          } else if (childrenLength > 1) {
            var childArray = Array(childrenLength);
            for (var i4 = 0; i4 < childrenLength; i4++) {
              childArray[i4] = arguments[i4 + 2];
            }
            {
              if (Object.freeze) {
                Object.freeze(childArray);
              }
            }
            props.children = childArray;
          }
          if (type && type.defaultProps) {
            var defaultProps = type.defaultProps;
            for (propName in defaultProps) {
              if (props[propName] === void 0) {
                props[propName] = defaultProps[propName];
              }
            }
          }
          {
            if (key || ref) {
              var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
              if (key) {
                defineKeyPropWarningGetter(props, displayName);
              }
              if (ref) {
                defineRefPropWarningGetter(props, displayName);
              }
            }
          }
          return ReactElement(type, key, ref, self2, source, ReactCurrentOwner.current, props);
        }
        function cloneAndReplaceKey(oldElement, newKey) {
          var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
          return newElement;
        }
        function cloneElement(element, config, children) {
          if (!!(element === null || element === void 0)) {
            {
              throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
            }
          }
          var propName;
          var props = _assign({}, element.props);
          var key = element.key;
          var ref = element.ref;
          var self2 = element._self;
          var source = element._source;
          var owner = element._owner;
          if (config != null) {
            if (hasValidRef(config)) {
              ref = config.ref;
              owner = ReactCurrentOwner.current;
            }
            if (hasValidKey(config)) {
              key = "" + config.key;
            }
            var defaultProps;
            if (element.type && element.type.defaultProps) {
              defaultProps = element.type.defaultProps;
            }
            for (propName in config) {
              if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                if (config[propName] === void 0 && defaultProps !== void 0) {
                  props[propName] = defaultProps[propName];
                } else {
                  props[propName] = config[propName];
                }
              }
            }
          }
          var childrenLength = arguments.length - 2;
          if (childrenLength === 1) {
            props.children = children;
          } else if (childrenLength > 1) {
            var childArray = Array(childrenLength);
            for (var i4 = 0; i4 < childrenLength; i4++) {
              childArray[i4] = arguments[i4 + 2];
            }
            props.children = childArray;
          }
          return ReactElement(element.type, key, ref, self2, source, owner, props);
        }
        function isValidElement(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        var SEPARATOR = ".";
        var SUBSEPARATOR = ":";
        function escape(key) {
          var escapeRegex = /[=:]/g;
          var escaperLookup = {
            "=": "=0",
            ":": "=2"
          };
          var escapedString = key.replace(escapeRegex, function(match) {
            return escaperLookup[match];
          });
          return "$" + escapedString;
        }
        var didWarnAboutMaps = false;
        var userProvidedKeyEscapeRegex = /\/+/g;
        function escapeUserProvidedKey(text) {
          return text.replace(userProvidedKeyEscapeRegex, "$&/");
        }
        function getElementKey(element, index2) {
          if (typeof element === "object" && element !== null && element.key != null) {
            return escape("" + element.key);
          }
          return index2.toString(36);
        }
        function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
          var type = typeof children;
          if (type === "undefined" || type === "boolean") {
            children = null;
          }
          var invokeCallback = false;
          if (children === null) {
            invokeCallback = true;
          } else {
            switch (type) {
              case "string":
              case "number":
                invokeCallback = true;
                break;
              case "object":
                switch (children.$$typeof) {
                  case REACT_ELEMENT_TYPE:
                  case REACT_PORTAL_TYPE:
                    invokeCallback = true;
                }
            }
          }
          if (invokeCallback) {
            var _child = children;
            var mappedChild = callback(_child);
            var childKey = nameSoFar === "" ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;
            if (Array.isArray(mappedChild)) {
              var escapedChildKey = "";
              if (childKey != null) {
                escapedChildKey = escapeUserProvidedKey(childKey) + "/";
              }
              mapIntoArray(mappedChild, array, escapedChildKey, "", function(c3) {
                return c3;
              });
            } else if (mappedChild != null) {
              if (isValidElement(mappedChild)) {
                mappedChild = cloneAndReplaceKey(mappedChild, escapedPrefix + (mappedChild.key && (!_child || _child.key !== mappedChild.key) ? escapeUserProvidedKey("" + mappedChild.key) + "/" : "") + childKey);
              }
              array.push(mappedChild);
            }
            return 1;
          }
          var child;
          var nextName;
          var subtreeCount = 0;
          var nextNamePrefix = nameSoFar === "" ? SEPARATOR : nameSoFar + SUBSEPARATOR;
          if (Array.isArray(children)) {
            for (var i4 = 0; i4 < children.length; i4++) {
              child = children[i4];
              nextName = nextNamePrefix + getElementKey(child, i4);
              subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
            }
          } else {
            var iteratorFn = getIteratorFn(children);
            if (typeof iteratorFn === "function") {
              var iterableChildren = children;
              {
                if (iteratorFn === iterableChildren.entries) {
                  if (!didWarnAboutMaps) {
                    warn("Using Maps as children is not supported. Use an array of keyed ReactElements instead.");
                  }
                  didWarnAboutMaps = true;
                }
              }
              var iterator = iteratorFn.call(iterableChildren);
              var step;
              var ii = 0;
              while (!(step = iterator.next()).done) {
                child = step.value;
                nextName = nextNamePrefix + getElementKey(child, ii++);
                subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
              }
            } else if (type === "object") {
              var childrenString = "" + children;
              {
                {
                  throw Error("Objects are not valid as a React child (found: " + (childrenString === "[object Object]" ? "object with keys {" + Object.keys(children).join(", ") + "}" : childrenString) + "). If you meant to render a collection of children, use an array instead.");
                }
              }
            }
          }
          return subtreeCount;
        }
        function mapChildren(children, func, context) {
          if (children == null) {
            return children;
          }
          var result = [];
          var count = 0;
          mapIntoArray(children, result, "", "", function(child) {
            return func.call(context, child, count++);
          });
          return result;
        }
        function countChildren(children) {
          var n4 = 0;
          mapChildren(children, function() {
            n4++;
          });
          return n4;
        }
        function forEachChildren(children, forEachFunc, forEachContext) {
          mapChildren(children, function() {
            forEachFunc.apply(this, arguments);
          }, forEachContext);
        }
        function toArray(children) {
          return mapChildren(children, function(child) {
            return child;
          }) || [];
        }
        function onlyChild(children) {
          if (!isValidElement(children)) {
            {
              throw Error("React.Children.only expected to receive a single React element child.");
            }
          }
          return children;
        }
        function createContext(defaultValue, calculateChangedBits) {
          if (calculateChangedBits === void 0) {
            calculateChangedBits = null;
          } else {
            {
              if (calculateChangedBits !== null && typeof calculateChangedBits !== "function") {
                error("createContext: Expected the optional second argument to be a function. Instead received: %s", calculateChangedBits);
              }
            }
          }
          var context = {
            $$typeof: REACT_CONTEXT_TYPE,
            _calculateChangedBits: calculateChangedBits,
            _currentValue: defaultValue,
            _currentValue2: defaultValue,
            _threadCount: 0,
            Provider: null,
            Consumer: null
          };
          context.Provider = {
            $$typeof: REACT_PROVIDER_TYPE,
            _context: context
          };
          var hasWarnedAboutUsingNestedContextConsumers = false;
          var hasWarnedAboutUsingConsumerProvider = false;
          var hasWarnedAboutDisplayNameOnConsumer = false;
          {
            var Consumer = {
              $$typeof: REACT_CONTEXT_TYPE,
              _context: context,
              _calculateChangedBits: context._calculateChangedBits
            };
            Object.defineProperties(Consumer, {
              Provider: {
                get: function() {
                  if (!hasWarnedAboutUsingConsumerProvider) {
                    hasWarnedAboutUsingConsumerProvider = true;
                    error("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?");
                  }
                  return context.Provider;
                },
                set: function(_Provider) {
                  context.Provider = _Provider;
                }
              },
              _currentValue: {
                get: function() {
                  return context._currentValue;
                },
                set: function(_currentValue) {
                  context._currentValue = _currentValue;
                }
              },
              _currentValue2: {
                get: function() {
                  return context._currentValue2;
                },
                set: function(_currentValue2) {
                  context._currentValue2 = _currentValue2;
                }
              },
              _threadCount: {
                get: function() {
                  return context._threadCount;
                },
                set: function(_threadCount) {
                  context._threadCount = _threadCount;
                }
              },
              Consumer: {
                get: function() {
                  if (!hasWarnedAboutUsingNestedContextConsumers) {
                    hasWarnedAboutUsingNestedContextConsumers = true;
                    error("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?");
                  }
                  return context.Consumer;
                }
              },
              displayName: {
                get: function() {
                  return context.displayName;
                },
                set: function(displayName) {
                  if (!hasWarnedAboutDisplayNameOnConsumer) {
                    warn("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", displayName);
                    hasWarnedAboutDisplayNameOnConsumer = true;
                  }
                }
              }
            });
            context.Consumer = Consumer;
          }
          {
            context._currentRenderer = null;
            context._currentRenderer2 = null;
          }
          return context;
        }
        var Uninitialized = -1;
        var Pending = 0;
        var Resolved = 1;
        var Rejected = 2;
        function lazyInitializer(payload) {
          if (payload._status === Uninitialized) {
            var ctor = payload._result;
            var thenable = ctor();
            var pending = payload;
            pending._status = Pending;
            pending._result = thenable;
            thenable.then(function(moduleObject) {
              if (payload._status === Pending) {
                var defaultExport = moduleObject.default;
                {
                  if (defaultExport === void 0) {
                    error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))", moduleObject);
                  }
                }
                var resolved = payload;
                resolved._status = Resolved;
                resolved._result = defaultExport;
              }
            }, function(error2) {
              if (payload._status === Pending) {
                var rejected = payload;
                rejected._status = Rejected;
                rejected._result = error2;
              }
            });
          }
          if (payload._status === Resolved) {
            return payload._result;
          } else {
            throw payload._result;
          }
        }
        function lazy(ctor) {
          var payload = {
            _status: -1,
            _result: ctor
          };
          var lazyType = {
            $$typeof: REACT_LAZY_TYPE,
            _payload: payload,
            _init: lazyInitializer
          };
          {
            var defaultProps;
            var propTypes;
            Object.defineProperties(lazyType, {
              defaultProps: {
                configurable: true,
                get: function() {
                  return defaultProps;
                },
                set: function(newDefaultProps) {
                  error("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                  defaultProps = newDefaultProps;
                  Object.defineProperty(lazyType, "defaultProps", {
                    enumerable: true
                  });
                }
              },
              propTypes: {
                configurable: true,
                get: function() {
                  return propTypes;
                },
                set: function(newPropTypes) {
                  error("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                  propTypes = newPropTypes;
                  Object.defineProperty(lazyType, "propTypes", {
                    enumerable: true
                  });
                }
              }
            });
          }
          return lazyType;
        }
        function forwardRef(render) {
          {
            if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
              error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).");
            } else if (typeof render !== "function") {
              error("forwardRef requires a render function but was given %s.", render === null ? "null" : typeof render);
            } else {
              if (render.length !== 0 && render.length !== 2) {
                error("forwardRef render functions accept exactly two parameters: props and ref. %s", render.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined.");
              }
            }
            if (render != null) {
              if (render.defaultProps != null || render.propTypes != null) {
                error("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
              }
            }
          }
          var elementType = {
            $$typeof: REACT_FORWARD_REF_TYPE,
            render
          };
          {
            var ownName;
            Object.defineProperty(elementType, "displayName", {
              enumerable: false,
              configurable: true,
              get: function() {
                return ownName;
              },
              set: function(name) {
                ownName = name;
                if (render.displayName == null) {
                  render.displayName = name;
                }
              }
            });
          }
          return elementType;
        }
        var enableScopeAPI = false;
        function isValidElementType(type) {
          if (typeof type === "string" || typeof type === "function") {
            return true;
          }
          if (type === exports.Fragment || type === exports.Profiler || type === REACT_DEBUG_TRACING_MODE_TYPE || type === exports.StrictMode || type === exports.Suspense || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI) {
            return true;
          }
          if (typeof type === "object" && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
              return true;
            }
          }
          return false;
        }
        function memo4(type, compare) {
          {
            if (!isValidElementType(type)) {
              error("memo: The first argument must be a component. Instead received: %s", type === null ? "null" : typeof type);
            }
          }
          var elementType = {
            $$typeof: REACT_MEMO_TYPE,
            type,
            compare: compare === void 0 ? null : compare
          };
          {
            var ownName;
            Object.defineProperty(elementType, "displayName", {
              enumerable: false,
              configurable: true,
              get: function() {
                return ownName;
              },
              set: function(name) {
                ownName = name;
                if (type.displayName == null) {
                  type.displayName = name;
                }
              }
            });
          }
          return elementType;
        }
        function resolveDispatcher() {
          var dispatcher = ReactCurrentDispatcher.current;
          if (!(dispatcher !== null)) {
            {
              throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");
            }
          }
          return dispatcher;
        }
        function useContext2(Context, unstable_observedBits) {
          var dispatcher = resolveDispatcher();
          {
            if (unstable_observedBits !== void 0) {
              error("useContext() second argument is reserved for future use in React. Passing it is not supported. You passed: %s.%s", unstable_observedBits, typeof unstable_observedBits === "number" && Array.isArray(arguments[2]) ? "\n\nDid you call array.map(useContext)? Calling Hooks inside a loop is not supported. Learn more at https://reactjs.org/link/rules-of-hooks" : "");
            }
            if (Context._context !== void 0) {
              var realContext = Context._context;
              if (realContext.Consumer === Context) {
                error("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?");
              } else if (realContext.Provider === Context) {
                error("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
              }
            }
          }
          return dispatcher.useContext(Context, unstable_observedBits);
        }
        function useState(initialState2) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useState(initialState2);
        }
        function useReducer(reducer2, initialArg, init) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useReducer(reducer2, initialArg, init);
        }
        function useRef(initialValue) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useRef(initialValue);
        }
        function useEffect2(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useEffect(create, deps);
        }
        function useLayoutEffect(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useLayoutEffect(create, deps);
        }
        function useCallback2(callback, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useCallback(callback, deps);
        }
        function useMemo(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useMemo(create, deps);
        }
        function useImperativeHandle(ref, create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useImperativeHandle(ref, create, deps);
        }
        function useDebugValue(value, formatterFn) {
          {
            var dispatcher = resolveDispatcher();
            return dispatcher.useDebugValue(value, formatterFn);
          }
        }
        var disabledDepth = 0;
        var prevLog;
        var prevInfo;
        var prevWarn;
        var prevError;
        var prevGroup;
        var prevGroupCollapsed;
        var prevGroupEnd;
        function disabledLog() {
        }
        disabledLog.__reactDisabledLog = true;
        function disableLogs() {
          {
            if (disabledDepth === 0) {
              prevLog = console.log;
              prevInfo = console.info;
              prevWarn = console.warn;
              prevError = console.error;
              prevGroup = console.group;
              prevGroupCollapsed = console.groupCollapsed;
              prevGroupEnd = console.groupEnd;
              var props = {
                configurable: true,
                enumerable: true,
                value: disabledLog,
                writable: true
              };
              Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props
              });
            }
            disabledDepth++;
          }
        }
        function reenableLogs() {
          {
            disabledDepth--;
            if (disabledDepth === 0) {
              var props = {
                configurable: true,
                enumerable: true,
                writable: true
              };
              Object.defineProperties(console, {
                log: _assign({}, props, {
                  value: prevLog
                }),
                info: _assign({}, props, {
                  value: prevInfo
                }),
                warn: _assign({}, props, {
                  value: prevWarn
                }),
                error: _assign({}, props, {
                  value: prevError
                }),
                group: _assign({}, props, {
                  value: prevGroup
                }),
                groupCollapsed: _assign({}, props, {
                  value: prevGroupCollapsed
                }),
                groupEnd: _assign({}, props, {
                  value: prevGroupEnd
                })
              });
            }
            if (disabledDepth < 0) {
              error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
            }
          }
        }
        var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
        var prefix;
        function describeBuiltInComponentFrame(name, source, ownerFn) {
          {
            if (prefix === void 0) {
              try {
                throw Error();
              } catch (x3) {
                var match = x3.stack.trim().match(/\n( *(at )?)/);
                prefix = match && match[1] || "";
              }
            }
            return "\n" + prefix + name;
          }
        }
        var reentry = false;
        var componentFrameCache;
        {
          var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
          componentFrameCache = new PossiblyWeakMap();
        }
        function describeNativeComponentFrame(fn, construct) {
          if (!fn || reentry) {
            return "";
          }
          {
            var frame = componentFrameCache.get(fn);
            if (frame !== void 0) {
              return frame;
            }
          }
          var control;
          reentry = true;
          var previousPrepareStackTrace = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          var previousDispatcher;
          {
            previousDispatcher = ReactCurrentDispatcher$1.current;
            ReactCurrentDispatcher$1.current = null;
            disableLogs();
          }
          try {
            if (construct) {
              var Fake = function() {
                throw Error();
              };
              Object.defineProperty(Fake.prototype, "props", {
                set: function() {
                  throw Error();
                }
              });
              if (typeof Reflect === "object" && Reflect.construct) {
                try {
                  Reflect.construct(Fake, []);
                } catch (x3) {
                  control = x3;
                }
                Reflect.construct(fn, [], Fake);
              } else {
                try {
                  Fake.call();
                } catch (x3) {
                  control = x3;
                }
                fn.call(Fake.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (x3) {
                control = x3;
              }
              fn();
            }
          } catch (sample) {
            if (sample && control && typeof sample.stack === "string") {
              var sampleLines = sample.stack.split("\n");
              var controlLines = control.stack.split("\n");
              var s3 = sampleLines.length - 1;
              var c3 = controlLines.length - 1;
              while (s3 >= 1 && c3 >= 0 && sampleLines[s3] !== controlLines[c3]) {
                c3--;
              }
              for (; s3 >= 1 && c3 >= 0; s3--, c3--) {
                if (sampleLines[s3] !== controlLines[c3]) {
                  if (s3 !== 1 || c3 !== 1) {
                    do {
                      s3--;
                      c3--;
                      if (c3 < 0 || sampleLines[s3] !== controlLines[c3]) {
                        var _frame = "\n" + sampleLines[s3].replace(" at new ", " at ");
                        {
                          if (typeof fn === "function") {
                            componentFrameCache.set(fn, _frame);
                          }
                        }
                        return _frame;
                      }
                    } while (s3 >= 1 && c3 >= 0);
                  }
                  break;
                }
              }
            }
          } finally {
            reentry = false;
            {
              ReactCurrentDispatcher$1.current = previousDispatcher;
              reenableLogs();
            }
            Error.prepareStackTrace = previousPrepareStackTrace;
          }
          var name = fn ? fn.displayName || fn.name : "";
          var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
          {
            if (typeof fn === "function") {
              componentFrameCache.set(fn, syntheticFrame);
            }
          }
          return syntheticFrame;
        }
        function describeFunctionComponentFrame(fn, source, ownerFn) {
          {
            return describeNativeComponentFrame(fn, false);
          }
        }
        function shouldConstruct(Component2) {
          var prototype = Component2.prototype;
          return !!(prototype && prototype.isReactComponent);
        }
        function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
          if (type == null) {
            return "";
          }
          if (typeof type === "function") {
            {
              return describeNativeComponentFrame(type, shouldConstruct(type));
            }
          }
          if (typeof type === "string") {
            return describeBuiltInComponentFrame(type);
          }
          switch (type) {
            case exports.Suspense:
              return describeBuiltInComponentFrame("Suspense");
            case REACT_SUSPENSE_LIST_TYPE:
              return describeBuiltInComponentFrame("SuspenseList");
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_FORWARD_REF_TYPE:
                return describeFunctionComponentFrame(type.render);
              case REACT_MEMO_TYPE:
                return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
              case REACT_BLOCK_TYPE:
                return describeFunctionComponentFrame(type._render);
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                } catch (x3) {
                }
              }
            }
          }
          return "";
        }
        var loggedTypeFailures = {};
        var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame$1.setExtraStackFrame(null);
            }
          }
        }
        function checkPropTypes(typeSpecs, values, location, componentName, element) {
          {
            var has = Function.call.bind(Object.prototype.hasOwnProperty);
            for (var typeSpecName in typeSpecs) {
              if (has(typeSpecs, typeSpecName)) {
                var error$1 = void 0;
                try {
                  if (typeof typeSpecs[typeSpecName] !== "function") {
                    var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                    err.name = "Invariant Violation";
                    throw err;
                  }
                  error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                } catch (ex) {
                  error$1 = ex;
                }
                if (error$1 && !(error$1 instanceof Error)) {
                  setCurrentlyValidatingElement(element);
                  error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                  setCurrentlyValidatingElement(null);
                }
                if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                  loggedTypeFailures[error$1.message] = true;
                  setCurrentlyValidatingElement(element);
                  error("Failed %s type: %s", location, error$1.message);
                  setCurrentlyValidatingElement(null);
                }
              }
            }
          }
        }
        function setCurrentlyValidatingElement$1(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              setExtraStackFrame(stack);
            } else {
              setExtraStackFrame(null);
            }
          }
        }
        var propTypesMisspellWarningShown;
        {
          propTypesMisspellWarningShown = false;
        }
        function getDeclarationErrorAddendum() {
          if (ReactCurrentOwner.current) {
            var name = getComponentName(ReactCurrentOwner.current.type);
            if (name) {
              return "\n\nCheck the render method of `" + name + "`.";
            }
          }
          return "";
        }
        function getSourceInfoErrorAddendum(source) {
          if (source !== void 0) {
            var fileName = source.fileName.replace(/^.*[\\\/]/, "");
            var lineNumber = source.lineNumber;
            return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
          }
          return "";
        }
        function getSourceInfoErrorAddendumForProps(elementProps) {
          if (elementProps !== null && elementProps !== void 0) {
            return getSourceInfoErrorAddendum(elementProps.__source);
          }
          return "";
        }
        var ownerHasKeyUseWarning = {};
        function getCurrentComponentErrorInfo(parentType) {
          var info = getDeclarationErrorAddendum();
          if (!info) {
            var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
            if (parentName) {
              info = "\n\nCheck the top-level render call using <" + parentName + ">.";
            }
          }
          return info;
        }
        function validateExplicitKey(element, parentType) {
          if (!element._store || element._store.validated || element.key != null) {
            return;
          }
          element._store.validated = true;
          var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
          if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
            return;
          }
          ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
          var childOwner = "";
          if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
            childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
          }
          {
            setCurrentlyValidatingElement$1(element);
            error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
            setCurrentlyValidatingElement$1(null);
          }
        }
        function validateChildKeys(node, parentType) {
          if (typeof node !== "object") {
            return;
          }
          if (Array.isArray(node)) {
            for (var i4 = 0; i4 < node.length; i4++) {
              var child = node[i4];
              if (isValidElement(child)) {
                validateExplicitKey(child, parentType);
              }
            }
          } else if (isValidElement(node)) {
            if (node._store) {
              node._store.validated = true;
            }
          } else if (node) {
            var iteratorFn = getIteratorFn(node);
            if (typeof iteratorFn === "function") {
              if (iteratorFn !== node.entries) {
                var iterator = iteratorFn.call(node);
                var step;
                while (!(step = iterator.next()).done) {
                  if (isValidElement(step.value)) {
                    validateExplicitKey(step.value, parentType);
                  }
                }
              }
            }
          }
        }
        function validatePropTypes(element) {
          {
            var type = element.type;
            if (type === null || type === void 0 || typeof type === "string") {
              return;
            }
            var propTypes;
            if (typeof type === "function") {
              propTypes = type.propTypes;
            } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_MEMO_TYPE)) {
              propTypes = type.propTypes;
            } else {
              return;
            }
            if (propTypes) {
              var name = getComponentName(type);
              checkPropTypes(propTypes, element.props, "prop", name, element);
            } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
              propTypesMisspellWarningShown = true;
              var _name = getComponentName(type);
              error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
            }
            if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
              error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
            }
          }
        }
        function validateFragmentProps(fragment) {
          {
            var keys = Object.keys(fragment.props);
            for (var i4 = 0; i4 < keys.length; i4++) {
              var key = keys[i4];
              if (key !== "children" && key !== "key") {
                setCurrentlyValidatingElement$1(fragment);
                error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                setCurrentlyValidatingElement$1(null);
                break;
              }
            }
            if (fragment.ref !== null) {
              setCurrentlyValidatingElement$1(fragment);
              error("Invalid attribute `ref` supplied to `React.Fragment`.");
              setCurrentlyValidatingElement$1(null);
            }
          }
        }
        function createElementWithValidation(type, props, children) {
          var validType = isValidElementType(type);
          if (!validType) {
            var info = "";
            if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
              info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
            }
            var sourceInfo = getSourceInfoErrorAddendumForProps(props);
            if (sourceInfo) {
              info += sourceInfo;
            } else {
              info += getDeclarationErrorAddendum();
            }
            var typeString;
            if (type === null) {
              typeString = "null";
            } else if (Array.isArray(type)) {
              typeString = "array";
            } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
              typeString = "<" + (getComponentName(type.type) || "Unknown") + " />";
              info = " Did you accidentally export a JSX literal instead of a component?";
            } else {
              typeString = typeof type;
            }
            {
              error("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
            }
          }
          var element = createElement.apply(this, arguments);
          if (element == null) {
            return element;
          }
          if (validType) {
            for (var i4 = 2; i4 < arguments.length; i4++) {
              validateChildKeys(arguments[i4], type);
            }
          }
          if (type === exports.Fragment) {
            validateFragmentProps(element);
          } else {
            validatePropTypes(element);
          }
          return element;
        }
        var didWarnAboutDeprecatedCreateFactory = false;
        function createFactoryWithValidation(type) {
          var validatedFactory = createElementWithValidation.bind(null, type);
          validatedFactory.type = type;
          {
            if (!didWarnAboutDeprecatedCreateFactory) {
              didWarnAboutDeprecatedCreateFactory = true;
              warn("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.");
            }
            Object.defineProperty(validatedFactory, "type", {
              enumerable: false,
              get: function() {
                warn("Factory.type is deprecated. Access the class directly before passing it to createFactory.");
                Object.defineProperty(this, "type", {
                  value: type
                });
                return type;
              }
            });
          }
          return validatedFactory;
        }
        function cloneElementWithValidation(element, props, children) {
          var newElement = cloneElement.apply(this, arguments);
          for (var i4 = 2; i4 < arguments.length; i4++) {
            validateChildKeys(arguments[i4], newElement.type);
          }
          validatePropTypes(newElement);
          return newElement;
        }
        {
          try {
            var frozenObject = Object.freeze({});
            new Map([[frozenObject, null]]);
            new Set([frozenObject]);
          } catch (e3) {
          }
        }
        var createElement$1 = createElementWithValidation;
        var cloneElement$1 = cloneElementWithValidation;
        var createFactory = createFactoryWithValidation;
        var Children = {
          map: mapChildren,
          forEach: forEachChildren,
          count: countChildren,
          toArray,
          only: onlyChild
        };
        exports.Children = Children;
        exports.Component = Component;
        exports.PureComponent = PureComponent;
        exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
        exports.cloneElement = cloneElement$1;
        exports.createContext = createContext;
        exports.createElement = createElement$1;
        exports.createFactory = createFactory;
        exports.createRef = createRef;
        exports.forwardRef = forwardRef;
        exports.isValidElement = isValidElement;
        exports.lazy = lazy;
        exports.memo = memo4;
        exports.useCallback = useCallback2;
        exports.useContext = useContext2;
        exports.useDebugValue = useDebugValue;
        exports.useEffect = useEffect2;
        exports.useImperativeHandle = useImperativeHandle;
        exports.useLayoutEffect = useLayoutEffect;
        exports.useMemo = useMemo;
        exports.useReducer = useReducer;
        exports.useRef = useRef;
        exports.useState = useState;
        exports.version = ReactVersion;
      })();
    }
  });

  // node_modules/react/index.js
  var require_react = __commonJS((exports, module) => {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_development();
    }
  });

  // node_modules/scheduler/cjs/scheduler.development.js
  var require_scheduler_development = __commonJS((exports) => {
    /** @license React v0.20.1
     * scheduler.development.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var enableSchedulerDebugging = false;
        var enableProfiling = true;
        var requestHostCallback;
        var requestHostTimeout;
        var cancelHostTimeout;
        var requestPaint;
        var hasPerformanceNow = typeof performance === "object" && typeof performance.now === "function";
        if (hasPerformanceNow) {
          var localPerformance = performance;
          exports.unstable_now = function() {
            return localPerformance.now();
          };
        } else {
          var localDate = Date;
          var initialTime = localDate.now();
          exports.unstable_now = function() {
            return localDate.now() - initialTime;
          };
        }
        if (typeof window === "undefined" || typeof MessageChannel !== "function") {
          var _callback = null;
          var _timeoutID = null;
          var _flushCallback = function() {
            if (_callback !== null) {
              try {
                var currentTime = exports.unstable_now();
                var hasRemainingTime = true;
                _callback(hasRemainingTime, currentTime);
                _callback = null;
              } catch (e3) {
                setTimeout(_flushCallback, 0);
                throw e3;
              }
            }
          };
          requestHostCallback = function(cb) {
            if (_callback !== null) {
              setTimeout(requestHostCallback, 0, cb);
            } else {
              _callback = cb;
              setTimeout(_flushCallback, 0);
            }
          };
          requestHostTimeout = function(cb, ms) {
            _timeoutID = setTimeout(cb, ms);
          };
          cancelHostTimeout = function() {
            clearTimeout(_timeoutID);
          };
          exports.unstable_shouldYield = function() {
            return false;
          };
          requestPaint = exports.unstable_forceFrameRate = function() {
          };
        } else {
          var _setTimeout = window.setTimeout;
          var _clearTimeout = window.clearTimeout;
          if (typeof console !== "undefined") {
            var requestAnimationFrame = window.requestAnimationFrame;
            var cancelAnimationFrame = window.cancelAnimationFrame;
            if (typeof requestAnimationFrame !== "function") {
              console["error"]("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
            }
            if (typeof cancelAnimationFrame !== "function") {
              console["error"]("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
            }
          }
          var isMessageLoopRunning = false;
          var scheduledHostCallback = null;
          var taskTimeoutID = -1;
          var yieldInterval = 5;
          var deadline = 0;
          {
            exports.unstable_shouldYield = function() {
              return exports.unstable_now() >= deadline;
            };
            requestPaint = function() {
            };
          }
          exports.unstable_forceFrameRate = function(fps) {
            if (fps < 0 || fps > 125) {
              console["error"]("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
              return;
            }
            if (fps > 0) {
              yieldInterval = Math.floor(1e3 / fps);
            } else {
              yieldInterval = 5;
            }
          };
          var performWorkUntilDeadline = function() {
            if (scheduledHostCallback !== null) {
              var currentTime = exports.unstable_now();
              deadline = currentTime + yieldInterval;
              var hasTimeRemaining = true;
              try {
                var hasMoreWork = scheduledHostCallback(hasTimeRemaining, currentTime);
                if (!hasMoreWork) {
                  isMessageLoopRunning = false;
                  scheduledHostCallback = null;
                } else {
                  port.postMessage(null);
                }
              } catch (error) {
                port.postMessage(null);
                throw error;
              }
            } else {
              isMessageLoopRunning = false;
            }
          };
          var channel = new MessageChannel();
          var port = channel.port2;
          channel.port1.onmessage = performWorkUntilDeadline;
          requestHostCallback = function(callback) {
            scheduledHostCallback = callback;
            if (!isMessageLoopRunning) {
              isMessageLoopRunning = true;
              port.postMessage(null);
            }
          };
          requestHostTimeout = function(callback, ms) {
            taskTimeoutID = _setTimeout(function() {
              callback(exports.unstable_now());
            }, ms);
          };
          cancelHostTimeout = function() {
            _clearTimeout(taskTimeoutID);
            taskTimeoutID = -1;
          };
        }
        function push(heap, node) {
          var index2 = heap.length;
          heap.push(node);
          siftUp(heap, node, index2);
        }
        function peek(heap) {
          var first = heap[0];
          return first === void 0 ? null : first;
        }
        function pop(heap) {
          var first = heap[0];
          if (first !== void 0) {
            var last = heap.pop();
            if (last !== first) {
              heap[0] = last;
              siftDown(heap, last, 0);
            }
            return first;
          } else {
            return null;
          }
        }
        function siftUp(heap, node, i4) {
          var index2 = i4;
          while (true) {
            var parentIndex = index2 - 1 >>> 1;
            var parent = heap[parentIndex];
            if (parent !== void 0 && compare(parent, node) > 0) {
              heap[parentIndex] = node;
              heap[index2] = parent;
              index2 = parentIndex;
            } else {
              return;
            }
          }
        }
        function siftDown(heap, node, i4) {
          var index2 = i4;
          var length = heap.length;
          while (index2 < length) {
            var leftIndex = (index2 + 1) * 2 - 1;
            var left = heap[leftIndex];
            var rightIndex = leftIndex + 1;
            var right = heap[rightIndex];
            if (left !== void 0 && compare(left, node) < 0) {
              if (right !== void 0 && compare(right, left) < 0) {
                heap[index2] = right;
                heap[rightIndex] = node;
                index2 = rightIndex;
              } else {
                heap[index2] = left;
                heap[leftIndex] = node;
                index2 = leftIndex;
              }
            } else if (right !== void 0 && compare(right, node) < 0) {
              heap[index2] = right;
              heap[rightIndex] = node;
              index2 = rightIndex;
            } else {
              return;
            }
          }
        }
        function compare(a3, b3) {
          var diff = a3.sortIndex - b3.sortIndex;
          return diff !== 0 ? diff : a3.id - b3.id;
        }
        var NoPriority = 0;
        var ImmediatePriority = 1;
        var UserBlockingPriority = 2;
        var NormalPriority = 3;
        var LowPriority = 4;
        var IdlePriority = 5;
        var runIdCounter = 0;
        var mainThreadIdCounter = 0;
        var profilingStateSize = 4;
        var sharedProfilingBuffer = typeof SharedArrayBuffer === "function" ? new SharedArrayBuffer(profilingStateSize * Int32Array.BYTES_PER_ELEMENT) : typeof ArrayBuffer === "function" ? new ArrayBuffer(profilingStateSize * Int32Array.BYTES_PER_ELEMENT) : null;
        var profilingState = sharedProfilingBuffer !== null ? new Int32Array(sharedProfilingBuffer) : [];
        var PRIORITY = 0;
        var CURRENT_TASK_ID = 1;
        var CURRENT_RUN_ID = 2;
        var QUEUE_SIZE = 3;
        {
          profilingState[PRIORITY] = NoPriority;
          profilingState[QUEUE_SIZE] = 0;
          profilingState[CURRENT_TASK_ID] = 0;
        }
        var INITIAL_EVENT_LOG_SIZE = 131072;
        var MAX_EVENT_LOG_SIZE = 524288;
        var eventLogSize = 0;
        var eventLogBuffer = null;
        var eventLog = null;
        var eventLogIndex = 0;
        var TaskStartEvent = 1;
        var TaskCompleteEvent = 2;
        var TaskErrorEvent = 3;
        var TaskCancelEvent = 4;
        var TaskRunEvent = 5;
        var TaskYieldEvent = 6;
        var SchedulerSuspendEvent = 7;
        var SchedulerResumeEvent = 8;
        function logEvent(entries) {
          if (eventLog !== null) {
            var offset = eventLogIndex;
            eventLogIndex += entries.length;
            if (eventLogIndex + 1 > eventLogSize) {
              eventLogSize *= 2;
              if (eventLogSize > MAX_EVENT_LOG_SIZE) {
                console["error"]("Scheduler Profiling: Event log exceeded maximum size. Don't forget to call `stopLoggingProfilingEvents()`.");
                stopLoggingProfilingEvents();
                return;
              }
              var newEventLog = new Int32Array(eventLogSize * 4);
              newEventLog.set(eventLog);
              eventLogBuffer = newEventLog.buffer;
              eventLog = newEventLog;
            }
            eventLog.set(entries, offset);
          }
        }
        function startLoggingProfilingEvents() {
          eventLogSize = INITIAL_EVENT_LOG_SIZE;
          eventLogBuffer = new ArrayBuffer(eventLogSize * 4);
          eventLog = new Int32Array(eventLogBuffer);
          eventLogIndex = 0;
        }
        function stopLoggingProfilingEvents() {
          var buffer = eventLogBuffer;
          eventLogSize = 0;
          eventLogBuffer = null;
          eventLog = null;
          eventLogIndex = 0;
          return buffer;
        }
        function markTaskStart(task, ms) {
          {
            profilingState[QUEUE_SIZE]++;
            if (eventLog !== null) {
              logEvent([TaskStartEvent, ms * 1e3, task.id, task.priorityLevel]);
            }
          }
        }
        function markTaskCompleted(task, ms) {
          {
            profilingState[PRIORITY] = NoPriority;
            profilingState[CURRENT_TASK_ID] = 0;
            profilingState[QUEUE_SIZE]--;
            if (eventLog !== null) {
              logEvent([TaskCompleteEvent, ms * 1e3, task.id]);
            }
          }
        }
        function markTaskCanceled(task, ms) {
          {
            profilingState[QUEUE_SIZE]--;
            if (eventLog !== null) {
              logEvent([TaskCancelEvent, ms * 1e3, task.id]);
            }
          }
        }
        function markTaskErrored(task, ms) {
          {
            profilingState[PRIORITY] = NoPriority;
            profilingState[CURRENT_TASK_ID] = 0;
            profilingState[QUEUE_SIZE]--;
            if (eventLog !== null) {
              logEvent([TaskErrorEvent, ms * 1e3, task.id]);
            }
          }
        }
        function markTaskRun(task, ms) {
          {
            runIdCounter++;
            profilingState[PRIORITY] = task.priorityLevel;
            profilingState[CURRENT_TASK_ID] = task.id;
            profilingState[CURRENT_RUN_ID] = runIdCounter;
            if (eventLog !== null) {
              logEvent([TaskRunEvent, ms * 1e3, task.id, runIdCounter]);
            }
          }
        }
        function markTaskYield(task, ms) {
          {
            profilingState[PRIORITY] = NoPriority;
            profilingState[CURRENT_TASK_ID] = 0;
            profilingState[CURRENT_RUN_ID] = 0;
            if (eventLog !== null) {
              logEvent([TaskYieldEvent, ms * 1e3, task.id, runIdCounter]);
            }
          }
        }
        function markSchedulerSuspended(ms) {
          {
            mainThreadIdCounter++;
            if (eventLog !== null) {
              logEvent([SchedulerSuspendEvent, ms * 1e3, mainThreadIdCounter]);
            }
          }
        }
        function markSchedulerUnsuspended(ms) {
          {
            if (eventLog !== null) {
              logEvent([SchedulerResumeEvent, ms * 1e3, mainThreadIdCounter]);
            }
          }
        }
        var maxSigned31BitInt = 1073741823;
        var IMMEDIATE_PRIORITY_TIMEOUT = -1;
        var USER_BLOCKING_PRIORITY_TIMEOUT = 250;
        var NORMAL_PRIORITY_TIMEOUT = 5e3;
        var LOW_PRIORITY_TIMEOUT = 1e4;
        var IDLE_PRIORITY_TIMEOUT = maxSigned31BitInt;
        var taskQueue = [];
        var timerQueue = [];
        var taskIdCounter = 1;
        var currentTask = null;
        var currentPriorityLevel = NormalPriority;
        var isPerformingWork = false;
        var isHostCallbackScheduled = false;
        var isHostTimeoutScheduled = false;
        function advanceTimers(currentTime) {
          var timer = peek(timerQueue);
          while (timer !== null) {
            if (timer.callback === null) {
              pop(timerQueue);
            } else if (timer.startTime <= currentTime) {
              pop(timerQueue);
              timer.sortIndex = timer.expirationTime;
              push(taskQueue, timer);
              {
                markTaskStart(timer, currentTime);
                timer.isQueued = true;
              }
            } else {
              return;
            }
            timer = peek(timerQueue);
          }
        }
        function handleTimeout(currentTime) {
          isHostTimeoutScheduled = false;
          advanceTimers(currentTime);
          if (!isHostCallbackScheduled) {
            if (peek(taskQueue) !== null) {
              isHostCallbackScheduled = true;
              requestHostCallback(flushWork);
            } else {
              var firstTimer = peek(timerQueue);
              if (firstTimer !== null) {
                requestHostTimeout(handleTimeout, firstTimer.startTime - currentTime);
              }
            }
          }
        }
        function flushWork(hasTimeRemaining, initialTime2) {
          {
            markSchedulerUnsuspended(initialTime2);
          }
          isHostCallbackScheduled = false;
          if (isHostTimeoutScheduled) {
            isHostTimeoutScheduled = false;
            cancelHostTimeout();
          }
          isPerformingWork = true;
          var previousPriorityLevel = currentPriorityLevel;
          try {
            if (enableProfiling) {
              try {
                return workLoop(hasTimeRemaining, initialTime2);
              } catch (error) {
                if (currentTask !== null) {
                  var currentTime = exports.unstable_now();
                  markTaskErrored(currentTask, currentTime);
                  currentTask.isQueued = false;
                }
                throw error;
              }
            } else {
              return workLoop(hasTimeRemaining, initialTime2);
            }
          } finally {
            currentTask = null;
            currentPriorityLevel = previousPriorityLevel;
            isPerformingWork = false;
            {
              var _currentTime = exports.unstable_now();
              markSchedulerSuspended(_currentTime);
            }
          }
        }
        function workLoop(hasTimeRemaining, initialTime2) {
          var currentTime = initialTime2;
          advanceTimers(currentTime);
          currentTask = peek(taskQueue);
          while (currentTask !== null && !enableSchedulerDebugging) {
            if (currentTask.expirationTime > currentTime && (!hasTimeRemaining || exports.unstable_shouldYield())) {
              break;
            }
            var callback = currentTask.callback;
            if (typeof callback === "function") {
              currentTask.callback = null;
              currentPriorityLevel = currentTask.priorityLevel;
              var didUserCallbackTimeout = currentTask.expirationTime <= currentTime;
              markTaskRun(currentTask, currentTime);
              var continuationCallback = callback(didUserCallbackTimeout);
              currentTime = exports.unstable_now();
              if (typeof continuationCallback === "function") {
                currentTask.callback = continuationCallback;
                markTaskYield(currentTask, currentTime);
              } else {
                {
                  markTaskCompleted(currentTask, currentTime);
                  currentTask.isQueued = false;
                }
                if (currentTask === peek(taskQueue)) {
                  pop(taskQueue);
                }
              }
              advanceTimers(currentTime);
            } else {
              pop(taskQueue);
            }
            currentTask = peek(taskQueue);
          }
          if (currentTask !== null) {
            return true;
          } else {
            var firstTimer = peek(timerQueue);
            if (firstTimer !== null) {
              requestHostTimeout(handleTimeout, firstTimer.startTime - currentTime);
            }
            return false;
          }
        }
        function unstable_runWithPriority(priorityLevel, eventHandler) {
          switch (priorityLevel) {
            case ImmediatePriority:
            case UserBlockingPriority:
            case NormalPriority:
            case LowPriority:
            case IdlePriority:
              break;
            default:
              priorityLevel = NormalPriority;
          }
          var previousPriorityLevel = currentPriorityLevel;
          currentPriorityLevel = priorityLevel;
          try {
            return eventHandler();
          } finally {
            currentPriorityLevel = previousPriorityLevel;
          }
        }
        function unstable_next(eventHandler) {
          var priorityLevel;
          switch (currentPriorityLevel) {
            case ImmediatePriority:
            case UserBlockingPriority:
            case NormalPriority:
              priorityLevel = NormalPriority;
              break;
            default:
              priorityLevel = currentPriorityLevel;
              break;
          }
          var previousPriorityLevel = currentPriorityLevel;
          currentPriorityLevel = priorityLevel;
          try {
            return eventHandler();
          } finally {
            currentPriorityLevel = previousPriorityLevel;
          }
        }
        function unstable_wrapCallback(callback) {
          var parentPriorityLevel = currentPriorityLevel;
          return function() {
            var previousPriorityLevel = currentPriorityLevel;
            currentPriorityLevel = parentPriorityLevel;
            try {
              return callback.apply(this, arguments);
            } finally {
              currentPriorityLevel = previousPriorityLevel;
            }
          };
        }
        function unstable_scheduleCallback(priorityLevel, callback, options) {
          var currentTime = exports.unstable_now();
          var startTime;
          if (typeof options === "object" && options !== null) {
            var delay = options.delay;
            if (typeof delay === "number" && delay > 0) {
              startTime = currentTime + delay;
            } else {
              startTime = currentTime;
            }
          } else {
            startTime = currentTime;
          }
          var timeout;
          switch (priorityLevel) {
            case ImmediatePriority:
              timeout = IMMEDIATE_PRIORITY_TIMEOUT;
              break;
            case UserBlockingPriority:
              timeout = USER_BLOCKING_PRIORITY_TIMEOUT;
              break;
            case IdlePriority:
              timeout = IDLE_PRIORITY_TIMEOUT;
              break;
            case LowPriority:
              timeout = LOW_PRIORITY_TIMEOUT;
              break;
            case NormalPriority:
            default:
              timeout = NORMAL_PRIORITY_TIMEOUT;
              break;
          }
          var expirationTime = startTime + timeout;
          var newTask = {
            id: taskIdCounter++,
            callback,
            priorityLevel,
            startTime,
            expirationTime,
            sortIndex: -1
          };
          {
            newTask.isQueued = false;
          }
          if (startTime > currentTime) {
            newTask.sortIndex = startTime;
            push(timerQueue, newTask);
            if (peek(taskQueue) === null && newTask === peek(timerQueue)) {
              if (isHostTimeoutScheduled) {
                cancelHostTimeout();
              } else {
                isHostTimeoutScheduled = true;
              }
              requestHostTimeout(handleTimeout, startTime - currentTime);
            }
          } else {
            newTask.sortIndex = expirationTime;
            push(taskQueue, newTask);
            {
              markTaskStart(newTask, currentTime);
              newTask.isQueued = true;
            }
            if (!isHostCallbackScheduled && !isPerformingWork) {
              isHostCallbackScheduled = true;
              requestHostCallback(flushWork);
            }
          }
          return newTask;
        }
        function unstable_pauseExecution() {
        }
        function unstable_continueExecution() {
          if (!isHostCallbackScheduled && !isPerformingWork) {
            isHostCallbackScheduled = true;
            requestHostCallback(flushWork);
          }
        }
        function unstable_getFirstCallbackNode() {
          return peek(taskQueue);
        }
        function unstable_cancelCallback(task) {
          {
            if (task.isQueued) {
              var currentTime = exports.unstable_now();
              markTaskCanceled(task, currentTime);
              task.isQueued = false;
            }
          }
          task.callback = null;
        }
        function unstable_getCurrentPriorityLevel() {
          return currentPriorityLevel;
        }
        var unstable_requestPaint = requestPaint;
        var unstable_Profiling = {
          startLoggingProfilingEvents,
          stopLoggingProfilingEvents,
          sharedProfilingBuffer
        };
        exports.unstable_IdlePriority = IdlePriority;
        exports.unstable_ImmediatePriority = ImmediatePriority;
        exports.unstable_LowPriority = LowPriority;
        exports.unstable_NormalPriority = NormalPriority;
        exports.unstable_Profiling = unstable_Profiling;
        exports.unstable_UserBlockingPriority = UserBlockingPriority;
        exports.unstable_cancelCallback = unstable_cancelCallback;
        exports.unstable_continueExecution = unstable_continueExecution;
        exports.unstable_getCurrentPriorityLevel = unstable_getCurrentPriorityLevel;
        exports.unstable_getFirstCallbackNode = unstable_getFirstCallbackNode;
        exports.unstable_next = unstable_next;
        exports.unstable_pauseExecution = unstable_pauseExecution;
        exports.unstable_requestPaint = unstable_requestPaint;
        exports.unstable_runWithPriority = unstable_runWithPriority;
        exports.unstable_scheduleCallback = unstable_scheduleCallback;
        exports.unstable_wrapCallback = unstable_wrapCallback;
      })();
    }
  });

  // node_modules/scheduler/index.js
  var require_scheduler = __commonJS((exports, module) => {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_scheduler_development();
    }
  });

  // node_modules/scheduler/cjs/scheduler-tracing.development.js
  var require_scheduler_tracing_development = __commonJS((exports) => {
    /** @license React v0.20.1
     * scheduler-tracing.development.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var DEFAULT_THREAD_ID = 0;
        var interactionIDCounter = 0;
        var threadIDCounter = 0;
        exports.__interactionsRef = null;
        exports.__subscriberRef = null;
        {
          exports.__interactionsRef = {
            current: new Set()
          };
          exports.__subscriberRef = {
            current: null
          };
        }
        function unstable_clear(callback) {
          var prevInteractions = exports.__interactionsRef.current;
          exports.__interactionsRef.current = new Set();
          try {
            return callback();
          } finally {
            exports.__interactionsRef.current = prevInteractions;
          }
        }
        function unstable_getCurrent() {
          {
            return exports.__interactionsRef.current;
          }
        }
        function unstable_getThreadID() {
          return ++threadIDCounter;
        }
        function unstable_trace(name, timestamp, callback) {
          var threadID = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : DEFAULT_THREAD_ID;
          var interaction = {
            __count: 1,
            id: interactionIDCounter++,
            name,
            timestamp
          };
          var prevInteractions = exports.__interactionsRef.current;
          var interactions = new Set(prevInteractions);
          interactions.add(interaction);
          exports.__interactionsRef.current = interactions;
          var subscriber = exports.__subscriberRef.current;
          var returnValue;
          try {
            if (subscriber !== null) {
              subscriber.onInteractionTraced(interaction);
            }
          } finally {
            try {
              if (subscriber !== null) {
                subscriber.onWorkStarted(interactions, threadID);
              }
            } finally {
              try {
                returnValue = callback();
              } finally {
                exports.__interactionsRef.current = prevInteractions;
                try {
                  if (subscriber !== null) {
                    subscriber.onWorkStopped(interactions, threadID);
                  }
                } finally {
                  interaction.__count--;
                  if (subscriber !== null && interaction.__count === 0) {
                    subscriber.onInteractionScheduledWorkCompleted(interaction);
                  }
                }
              }
            }
          }
          return returnValue;
        }
        function unstable_wrap(callback) {
          var threadID = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : DEFAULT_THREAD_ID;
          var wrappedInteractions = exports.__interactionsRef.current;
          var subscriber = exports.__subscriberRef.current;
          if (subscriber !== null) {
            subscriber.onWorkScheduled(wrappedInteractions, threadID);
          }
          wrappedInteractions.forEach(function(interaction) {
            interaction.__count++;
          });
          var hasRun = false;
          function wrapped() {
            var prevInteractions = exports.__interactionsRef.current;
            exports.__interactionsRef.current = wrappedInteractions;
            subscriber = exports.__subscriberRef.current;
            try {
              var returnValue;
              try {
                if (subscriber !== null) {
                  subscriber.onWorkStarted(wrappedInteractions, threadID);
                }
              } finally {
                try {
                  returnValue = callback.apply(void 0, arguments);
                } finally {
                  exports.__interactionsRef.current = prevInteractions;
                  if (subscriber !== null) {
                    subscriber.onWorkStopped(wrappedInteractions, threadID);
                  }
                }
              }
              return returnValue;
            } finally {
              if (!hasRun) {
                hasRun = true;
                wrappedInteractions.forEach(function(interaction) {
                  interaction.__count--;
                  if (subscriber !== null && interaction.__count === 0) {
                    subscriber.onInteractionScheduledWorkCompleted(interaction);
                  }
                });
              }
            }
          }
          wrapped.cancel = function cancel() {
            subscriber = exports.__subscriberRef.current;
            try {
              if (subscriber !== null) {
                subscriber.onWorkCanceled(wrappedInteractions, threadID);
              }
            } finally {
              wrappedInteractions.forEach(function(interaction) {
                interaction.__count--;
                if (subscriber && interaction.__count === 0) {
                  subscriber.onInteractionScheduledWorkCompleted(interaction);
                }
              });
            }
          };
          return wrapped;
        }
        var subscribers = null;
        {
          subscribers = new Set();
        }
        function unstable_subscribe(subscriber) {
          {
            subscribers.add(subscriber);
            if (subscribers.size === 1) {
              exports.__subscriberRef.current = {
                onInteractionScheduledWorkCompleted,
                onInteractionTraced,
                onWorkCanceled,
                onWorkScheduled,
                onWorkStarted,
                onWorkStopped
              };
            }
          }
        }
        function unstable_unsubscribe(subscriber) {
          {
            subscribers.delete(subscriber);
            if (subscribers.size === 0) {
              exports.__subscriberRef.current = null;
            }
          }
        }
        function onInteractionTraced(interaction) {
          var didCatchError = false;
          var caughtError = null;
          subscribers.forEach(function(subscriber) {
            try {
              subscriber.onInteractionTraced(interaction);
            } catch (error) {
              if (!didCatchError) {
                didCatchError = true;
                caughtError = error;
              }
            }
          });
          if (didCatchError) {
            throw caughtError;
          }
        }
        function onInteractionScheduledWorkCompleted(interaction) {
          var didCatchError = false;
          var caughtError = null;
          subscribers.forEach(function(subscriber) {
            try {
              subscriber.onInteractionScheduledWorkCompleted(interaction);
            } catch (error) {
              if (!didCatchError) {
                didCatchError = true;
                caughtError = error;
              }
            }
          });
          if (didCatchError) {
            throw caughtError;
          }
        }
        function onWorkScheduled(interactions, threadID) {
          var didCatchError = false;
          var caughtError = null;
          subscribers.forEach(function(subscriber) {
            try {
              subscriber.onWorkScheduled(interactions, threadID);
            } catch (error) {
              if (!didCatchError) {
                didCatchError = true;
                caughtError = error;
              }
            }
          });
          if (didCatchError) {
            throw caughtError;
          }
        }
        function onWorkStarted(interactions, threadID) {
          var didCatchError = false;
          var caughtError = null;
          subscribers.forEach(function(subscriber) {
            try {
              subscriber.onWorkStarted(interactions, threadID);
            } catch (error) {
              if (!didCatchError) {
                didCatchError = true;
                caughtError = error;
              }
            }
          });
          if (didCatchError) {
            throw caughtError;
          }
        }
        function onWorkStopped(interactions, threadID) {
          var didCatchError = false;
          var caughtError = null;
          subscribers.forEach(function(subscriber) {
            try {
              subscriber.onWorkStopped(interactions, threadID);
            } catch (error) {
              if (!didCatchError) {
                didCatchError = true;
                caughtError = error;
              }
            }
          });
          if (didCatchError) {
            throw caughtError;
          }
        }
        function onWorkCanceled(interactions, threadID) {
          var didCatchError = false;
          var caughtError = null;
          subscribers.forEach(function(subscriber) {
            try {
              subscriber.onWorkCanceled(interactions, threadID);
            } catch (error) {
              if (!didCatchError) {
                didCatchError = true;
                caughtError = error;
              }
            }
          });
          if (didCatchError) {
            throw caughtError;
          }
        }
        exports.unstable_clear = unstable_clear;
        exports.unstable_getCurrent = unstable_getCurrent;
        exports.unstable_getThreadID = unstable_getThreadID;
        exports.unstable_subscribe = unstable_subscribe;
        exports.unstable_trace = unstable_trace;
        exports.unstable_unsubscribe = unstable_unsubscribe;
        exports.unstable_wrap = unstable_wrap;
      })();
    }
  });

  // node_modules/scheduler/tracing.js
  var require_tracing = __commonJS((exports, module) => {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_scheduler_tracing_development();
    }
  });

  // node_modules/react-dom/cjs/react-dom.development.js
  var require_react_dom_development = __commonJS((exports) => {
    /** @license React v17.0.1
     * react-dom.development.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var React6 = require_react();
        var _assign = require_object_assign();
        var Scheduler = require_scheduler();
        var tracing = require_tracing();
        var ReactSharedInternals = React6.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        function warn(format) {
          {
            for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              args[_key - 1] = arguments[_key];
            }
            printWarning("warn", format, args);
          }
        }
        function error(format) {
          {
            for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
              args[_key2 - 1] = arguments[_key2];
            }
            printWarning("error", format, args);
          }
        }
        function printWarning(level, format, args) {
          {
            var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame2.getStackAddendum();
            if (stack !== "") {
              format += "%s";
              args = args.concat([stack]);
            }
            var argsWithFormat = args.map(function(item) {
              return "" + item;
            });
            argsWithFormat.unshift("Warning: " + format);
            Function.prototype.apply.call(console[level], console, argsWithFormat);
          }
        }
        if (!React6) {
          {
            throw Error("ReactDOM was loaded before React. Make sure you load the React package before loading ReactDOM.");
          }
        }
        var FunctionComponent2 = 0;
        var ClassComponent = 1;
        var IndeterminateComponent = 2;
        var HostRoot = 3;
        var HostPortal = 4;
        var HostComponent = 5;
        var HostText = 6;
        var Fragment = 7;
        var Mode = 8;
        var ContextConsumer = 9;
        var ContextProvider = 10;
        var ForwardRef = 11;
        var Profiler = 12;
        var SuspenseComponent = 13;
        var MemoComponent = 14;
        var SimpleMemoComponent = 15;
        var LazyComponent = 16;
        var IncompleteClassComponent = 17;
        var DehydratedFragment = 18;
        var SuspenseListComponent = 19;
        var FundamentalComponent = 20;
        var ScopeComponent = 21;
        var Block = 22;
        var OffscreenComponent = 23;
        var LegacyHiddenComponent = 24;
        var enableProfilerTimer = true;
        var enableFundamentalAPI = false;
        var enableNewReconciler = false;
        var warnAboutStringRefs = false;
        var allNativeEvents = new Set();
        var registrationNameDependencies = {};
        var possibleRegistrationNames = {};
        function registerTwoPhaseEvent(registrationName, dependencies) {
          registerDirectEvent(registrationName, dependencies);
          registerDirectEvent(registrationName + "Capture", dependencies);
        }
        function registerDirectEvent(registrationName, dependencies) {
          {
            if (registrationNameDependencies[registrationName]) {
              error("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", registrationName);
            }
          }
          registrationNameDependencies[registrationName] = dependencies;
          {
            var lowerCasedName = registrationName.toLowerCase();
            possibleRegistrationNames[lowerCasedName] = registrationName;
            if (registrationName === "onDoubleClick") {
              possibleRegistrationNames.ondblclick = registrationName;
            }
          }
          for (var i4 = 0; i4 < dependencies.length; i4++) {
            allNativeEvents.add(dependencies[i4]);
          }
        }
        var canUseDOM = !!(typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined");
        var RESERVED = 0;
        var STRING = 1;
        var BOOLEANISH_STRING = 2;
        var BOOLEAN = 3;
        var OVERLOADED_BOOLEAN = 4;
        var NUMERIC = 5;
        var POSITIVE_NUMERIC = 6;
        var ATTRIBUTE_NAME_START_CHAR = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD";
        var ATTRIBUTE_NAME_CHAR = ATTRIBUTE_NAME_START_CHAR + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040";
        var ROOT_ATTRIBUTE_NAME = "data-reactroot";
        var VALID_ATTRIBUTE_NAME_REGEX = new RegExp("^[" + ATTRIBUTE_NAME_START_CHAR + "][" + ATTRIBUTE_NAME_CHAR + "]*$");
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var illegalAttributeNameCache = {};
        var validatedAttributeNameCache = {};
        function isAttributeNameSafe(attributeName) {
          if (hasOwnProperty.call(validatedAttributeNameCache, attributeName)) {
            return true;
          }
          if (hasOwnProperty.call(illegalAttributeNameCache, attributeName)) {
            return false;
          }
          if (VALID_ATTRIBUTE_NAME_REGEX.test(attributeName)) {
            validatedAttributeNameCache[attributeName] = true;
            return true;
          }
          illegalAttributeNameCache[attributeName] = true;
          {
            error("Invalid attribute name: `%s`", attributeName);
          }
          return false;
        }
        function shouldIgnoreAttribute(name, propertyInfo, isCustomComponentTag) {
          if (propertyInfo !== null) {
            return propertyInfo.type === RESERVED;
          }
          if (isCustomComponentTag) {
            return false;
          }
          if (name.length > 2 && (name[0] === "o" || name[0] === "O") && (name[1] === "n" || name[1] === "N")) {
            return true;
          }
          return false;
        }
        function shouldRemoveAttributeWithWarning(name, value, propertyInfo, isCustomComponentTag) {
          if (propertyInfo !== null && propertyInfo.type === RESERVED) {
            return false;
          }
          switch (typeof value) {
            case "function":
            case "symbol":
              return true;
            case "boolean": {
              if (isCustomComponentTag) {
                return false;
              }
              if (propertyInfo !== null) {
                return !propertyInfo.acceptsBooleans;
              } else {
                var prefix2 = name.toLowerCase().slice(0, 5);
                return prefix2 !== "data-" && prefix2 !== "aria-";
              }
            }
            default:
              return false;
          }
        }
        function shouldRemoveAttribute(name, value, propertyInfo, isCustomComponentTag) {
          if (value === null || typeof value === "undefined") {
            return true;
          }
          if (shouldRemoveAttributeWithWarning(name, value, propertyInfo, isCustomComponentTag)) {
            return true;
          }
          if (isCustomComponentTag) {
            return false;
          }
          if (propertyInfo !== null) {
            switch (propertyInfo.type) {
              case BOOLEAN:
                return !value;
              case OVERLOADED_BOOLEAN:
                return value === false;
              case NUMERIC:
                return isNaN(value);
              case POSITIVE_NUMERIC:
                return isNaN(value) || value < 1;
            }
          }
          return false;
        }
        function getPropertyInfo(name) {
          return properties.hasOwnProperty(name) ? properties[name] : null;
        }
        function PropertyInfoRecord(name, type, mustUseProperty, attributeName, attributeNamespace, sanitizeURL2, removeEmptyString) {
          this.acceptsBooleans = type === BOOLEANISH_STRING || type === BOOLEAN || type === OVERLOADED_BOOLEAN;
          this.attributeName = attributeName;
          this.attributeNamespace = attributeNamespace;
          this.mustUseProperty = mustUseProperty;
          this.propertyName = name;
          this.type = type;
          this.sanitizeURL = sanitizeURL2;
          this.removeEmptyString = removeEmptyString;
        }
        var properties = {};
        var reservedProps = [
          "children",
          "dangerouslySetInnerHTML",
          "defaultValue",
          "defaultChecked",
          "innerHTML",
          "suppressContentEditableWarning",
          "suppressHydrationWarning",
          "style"
        ];
        reservedProps.forEach(function(name) {
          properties[name] = new PropertyInfoRecord(name, RESERVED, false, name, null, false, false);
        });
        [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(_ref) {
          var name = _ref[0], attributeName = _ref[1];
          properties[name] = new PropertyInfoRecord(name, STRING, false, attributeName, null, false, false);
        });
        ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(name) {
          properties[name] = new PropertyInfoRecord(name, BOOLEANISH_STRING, false, name.toLowerCase(), null, false, false);
        });
        ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(name) {
          properties[name] = new PropertyInfoRecord(name, BOOLEANISH_STRING, false, name, null, false, false);
        });
        [
          "allowFullScreen",
          "async",
          "autoFocus",
          "autoPlay",
          "controls",
          "default",
          "defer",
          "disabled",
          "disablePictureInPicture",
          "disableRemotePlayback",
          "formNoValidate",
          "hidden",
          "loop",
          "noModule",
          "noValidate",
          "open",
          "playsInline",
          "readOnly",
          "required",
          "reversed",
          "scoped",
          "seamless",
          "itemScope"
        ].forEach(function(name) {
          properties[name] = new PropertyInfoRecord(name, BOOLEAN, false, name.toLowerCase(), null, false, false);
        });
        [
          "checked",
          "multiple",
          "muted",
          "selected"
        ].forEach(function(name) {
          properties[name] = new PropertyInfoRecord(name, BOOLEAN, true, name, null, false, false);
        });
        [
          "capture",
          "download"
        ].forEach(function(name) {
          properties[name] = new PropertyInfoRecord(name, OVERLOADED_BOOLEAN, false, name, null, false, false);
        });
        [
          "cols",
          "rows",
          "size",
          "span"
        ].forEach(function(name) {
          properties[name] = new PropertyInfoRecord(name, POSITIVE_NUMERIC, false, name, null, false, false);
        });
        ["rowSpan", "start"].forEach(function(name) {
          properties[name] = new PropertyInfoRecord(name, NUMERIC, false, name.toLowerCase(), null, false, false);
        });
        var CAMELIZE = /[\-\:]([a-z])/g;
        var capitalize = function(token) {
          return token[1].toUpperCase();
        };
        [
          "accent-height",
          "alignment-baseline",
          "arabic-form",
          "baseline-shift",
          "cap-height",
          "clip-path",
          "clip-rule",
          "color-interpolation",
          "color-interpolation-filters",
          "color-profile",
          "color-rendering",
          "dominant-baseline",
          "enable-background",
          "fill-opacity",
          "fill-rule",
          "flood-color",
          "flood-opacity",
          "font-family",
          "font-size",
          "font-size-adjust",
          "font-stretch",
          "font-style",
          "font-variant",
          "font-weight",
          "glyph-name",
          "glyph-orientation-horizontal",
          "glyph-orientation-vertical",
          "horiz-adv-x",
          "horiz-origin-x",
          "image-rendering",
          "letter-spacing",
          "lighting-color",
          "marker-end",
          "marker-mid",
          "marker-start",
          "overline-position",
          "overline-thickness",
          "paint-order",
          "panose-1",
          "pointer-events",
          "rendering-intent",
          "shape-rendering",
          "stop-color",
          "stop-opacity",
          "strikethrough-position",
          "strikethrough-thickness",
          "stroke-dasharray",
          "stroke-dashoffset",
          "stroke-linecap",
          "stroke-linejoin",
          "stroke-miterlimit",
          "stroke-opacity",
          "stroke-width",
          "text-anchor",
          "text-decoration",
          "text-rendering",
          "underline-position",
          "underline-thickness",
          "unicode-bidi",
          "unicode-range",
          "units-per-em",
          "v-alphabetic",
          "v-hanging",
          "v-ideographic",
          "v-mathematical",
          "vector-effect",
          "vert-adv-y",
          "vert-origin-x",
          "vert-origin-y",
          "word-spacing",
          "writing-mode",
          "xmlns:xlink",
          "x-height"
        ].forEach(function(attributeName) {
          var name = attributeName.replace(CAMELIZE, capitalize);
          properties[name] = new PropertyInfoRecord(name, STRING, false, attributeName, null, false, false);
        });
        [
          "xlink:actuate",
          "xlink:arcrole",
          "xlink:role",
          "xlink:show",
          "xlink:title",
          "xlink:type"
        ].forEach(function(attributeName) {
          var name = attributeName.replace(CAMELIZE, capitalize);
          properties[name] = new PropertyInfoRecord(name, STRING, false, attributeName, "http://www.w3.org/1999/xlink", false, false);
        });
        [
          "xml:base",
          "xml:lang",
          "xml:space"
        ].forEach(function(attributeName) {
          var name = attributeName.replace(CAMELIZE, capitalize);
          properties[name] = new PropertyInfoRecord(name, STRING, false, attributeName, "http://www.w3.org/XML/1998/namespace", false, false);
        });
        ["tabIndex", "crossOrigin"].forEach(function(attributeName) {
          properties[attributeName] = new PropertyInfoRecord(attributeName, STRING, false, attributeName.toLowerCase(), null, false, false);
        });
        var xlinkHref = "xlinkHref";
        properties[xlinkHref] = new PropertyInfoRecord("xlinkHref", STRING, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
        ["src", "href", "action", "formAction"].forEach(function(attributeName) {
          properties[attributeName] = new PropertyInfoRecord(attributeName, STRING, false, attributeName.toLowerCase(), null, true, true);
        });
        var isJavaScriptProtocol = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i;
        var didWarn = false;
        function sanitizeURL(url) {
          {
            if (!didWarn && isJavaScriptProtocol.test(url)) {
              didWarn = true;
              error("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(url));
            }
          }
        }
        function getValueForProperty(node, name, expected, propertyInfo) {
          {
            if (propertyInfo.mustUseProperty) {
              var propertyName = propertyInfo.propertyName;
              return node[propertyName];
            } else {
              if (propertyInfo.sanitizeURL) {
                sanitizeURL("" + expected);
              }
              var attributeName = propertyInfo.attributeName;
              var stringValue = null;
              if (propertyInfo.type === OVERLOADED_BOOLEAN) {
                if (node.hasAttribute(attributeName)) {
                  var value = node.getAttribute(attributeName);
                  if (value === "") {
                    return true;
                  }
                  if (shouldRemoveAttribute(name, expected, propertyInfo, false)) {
                    return value;
                  }
                  if (value === "" + expected) {
                    return expected;
                  }
                  return value;
                }
              } else if (node.hasAttribute(attributeName)) {
                if (shouldRemoveAttribute(name, expected, propertyInfo, false)) {
                  return node.getAttribute(attributeName);
                }
                if (propertyInfo.type === BOOLEAN) {
                  return expected;
                }
                stringValue = node.getAttribute(attributeName);
              }
              if (shouldRemoveAttribute(name, expected, propertyInfo, false)) {
                return stringValue === null ? expected : stringValue;
              } else if (stringValue === "" + expected) {
                return expected;
              } else {
                return stringValue;
              }
            }
          }
        }
        function getValueForAttribute(node, name, expected) {
          {
            if (!isAttributeNameSafe(name)) {
              return;
            }
            if (isOpaqueHydratingObject(expected)) {
              return expected;
            }
            if (!node.hasAttribute(name)) {
              return expected === void 0 ? void 0 : null;
            }
            var value = node.getAttribute(name);
            if (value === "" + expected) {
              return expected;
            }
            return value;
          }
        }
        function setValueForProperty(node, name, value, isCustomComponentTag) {
          var propertyInfo = getPropertyInfo(name);
          if (shouldIgnoreAttribute(name, propertyInfo, isCustomComponentTag)) {
            return;
          }
          if (shouldRemoveAttribute(name, value, propertyInfo, isCustomComponentTag)) {
            value = null;
          }
          if (isCustomComponentTag || propertyInfo === null) {
            if (isAttributeNameSafe(name)) {
              var _attributeName = name;
              if (value === null) {
                node.removeAttribute(_attributeName);
              } else {
                node.setAttribute(_attributeName, "" + value);
              }
            }
            return;
          }
          var mustUseProperty = propertyInfo.mustUseProperty;
          if (mustUseProperty) {
            var propertyName = propertyInfo.propertyName;
            if (value === null) {
              var type = propertyInfo.type;
              node[propertyName] = type === BOOLEAN ? false : "";
            } else {
              node[propertyName] = value;
            }
            return;
          }
          var attributeName = propertyInfo.attributeName, attributeNamespace = propertyInfo.attributeNamespace;
          if (value === null) {
            node.removeAttribute(attributeName);
          } else {
            var _type = propertyInfo.type;
            var attributeValue;
            if (_type === BOOLEAN || _type === OVERLOADED_BOOLEAN && value === true) {
              attributeValue = "";
            } else {
              {
                attributeValue = "" + value;
              }
              if (propertyInfo.sanitizeURL) {
                sanitizeURL(attributeValue.toString());
              }
            }
            if (attributeNamespace) {
              node.setAttributeNS(attributeNamespace, attributeName, attributeValue);
            } else {
              node.setAttribute(attributeName, attributeValue);
            }
          }
        }
        var REACT_ELEMENT_TYPE = 60103;
        var REACT_PORTAL_TYPE = 60106;
        var REACT_FRAGMENT_TYPE = 60107;
        var REACT_STRICT_MODE_TYPE = 60108;
        var REACT_PROFILER_TYPE = 60114;
        var REACT_PROVIDER_TYPE = 60109;
        var REACT_CONTEXT_TYPE = 60110;
        var REACT_FORWARD_REF_TYPE = 60112;
        var REACT_SUSPENSE_TYPE = 60113;
        var REACT_SUSPENSE_LIST_TYPE = 60120;
        var REACT_MEMO_TYPE = 60115;
        var REACT_LAZY_TYPE = 60116;
        var REACT_BLOCK_TYPE = 60121;
        var REACT_SERVER_BLOCK_TYPE = 60122;
        var REACT_FUNDAMENTAL_TYPE = 60117;
        var REACT_SCOPE_TYPE = 60119;
        var REACT_OPAQUE_ID_TYPE = 60128;
        var REACT_DEBUG_TRACING_MODE_TYPE = 60129;
        var REACT_OFFSCREEN_TYPE = 60130;
        var REACT_LEGACY_HIDDEN_TYPE = 60131;
        if (typeof Symbol === "function" && Symbol.for) {
          var symbolFor = Symbol.for;
          REACT_ELEMENT_TYPE = symbolFor("react.element");
          REACT_PORTAL_TYPE = symbolFor("react.portal");
          REACT_FRAGMENT_TYPE = symbolFor("react.fragment");
          REACT_STRICT_MODE_TYPE = symbolFor("react.strict_mode");
          REACT_PROFILER_TYPE = symbolFor("react.profiler");
          REACT_PROVIDER_TYPE = symbolFor("react.provider");
          REACT_CONTEXT_TYPE = symbolFor("react.context");
          REACT_FORWARD_REF_TYPE = symbolFor("react.forward_ref");
          REACT_SUSPENSE_TYPE = symbolFor("react.suspense");
          REACT_SUSPENSE_LIST_TYPE = symbolFor("react.suspense_list");
          REACT_MEMO_TYPE = symbolFor("react.memo");
          REACT_LAZY_TYPE = symbolFor("react.lazy");
          REACT_BLOCK_TYPE = symbolFor("react.block");
          REACT_SERVER_BLOCK_TYPE = symbolFor("react.server.block");
          REACT_FUNDAMENTAL_TYPE = symbolFor("react.fundamental");
          REACT_SCOPE_TYPE = symbolFor("react.scope");
          REACT_OPAQUE_ID_TYPE = symbolFor("react.opaque.id");
          REACT_DEBUG_TRACING_MODE_TYPE = symbolFor("react.debug_trace_mode");
          REACT_OFFSCREEN_TYPE = symbolFor("react.offscreen");
          REACT_LEGACY_HIDDEN_TYPE = symbolFor("react.legacy_hidden");
        }
        var MAYBE_ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = "@@iterator";
        function getIteratorFn(maybeIterable) {
          if (maybeIterable === null || typeof maybeIterable !== "object") {
            return null;
          }
          var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
          if (typeof maybeIterator === "function") {
            return maybeIterator;
          }
          return null;
        }
        var disabledDepth = 0;
        var prevLog;
        var prevInfo;
        var prevWarn;
        var prevError;
        var prevGroup;
        var prevGroupCollapsed;
        var prevGroupEnd;
        function disabledLog() {
        }
        disabledLog.__reactDisabledLog = true;
        function disableLogs() {
          {
            if (disabledDepth === 0) {
              prevLog = console.log;
              prevInfo = console.info;
              prevWarn = console.warn;
              prevError = console.error;
              prevGroup = console.group;
              prevGroupCollapsed = console.groupCollapsed;
              prevGroupEnd = console.groupEnd;
              var props = {
                configurable: true,
                enumerable: true,
                value: disabledLog,
                writable: true
              };
              Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props
              });
            }
            disabledDepth++;
          }
        }
        function reenableLogs() {
          {
            disabledDepth--;
            if (disabledDepth === 0) {
              var props = {
                configurable: true,
                enumerable: true,
                writable: true
              };
              Object.defineProperties(console, {
                log: _assign({}, props, {
                  value: prevLog
                }),
                info: _assign({}, props, {
                  value: prevInfo
                }),
                warn: _assign({}, props, {
                  value: prevWarn
                }),
                error: _assign({}, props, {
                  value: prevError
                }),
                group: _assign({}, props, {
                  value: prevGroup
                }),
                groupCollapsed: _assign({}, props, {
                  value: prevGroupCollapsed
                }),
                groupEnd: _assign({}, props, {
                  value: prevGroupEnd
                })
              });
            }
            if (disabledDepth < 0) {
              error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
            }
          }
        }
        var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
        var prefix;
        function describeBuiltInComponentFrame(name, source, ownerFn) {
          {
            if (prefix === void 0) {
              try {
                throw Error();
              } catch (x3) {
                var match = x3.stack.trim().match(/\n( *(at )?)/);
                prefix = match && match[1] || "";
              }
            }
            return "\n" + prefix + name;
          }
        }
        var reentry = false;
        var componentFrameCache;
        {
          var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
          componentFrameCache = new PossiblyWeakMap();
        }
        function describeNativeComponentFrame(fn, construct) {
          if (!fn || reentry) {
            return "";
          }
          {
            var frame = componentFrameCache.get(fn);
            if (frame !== void 0) {
              return frame;
            }
          }
          var control;
          reentry = true;
          var previousPrepareStackTrace = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          var previousDispatcher;
          {
            previousDispatcher = ReactCurrentDispatcher.current;
            ReactCurrentDispatcher.current = null;
            disableLogs();
          }
          try {
            if (construct) {
              var Fake = function() {
                throw Error();
              };
              Object.defineProperty(Fake.prototype, "props", {
                set: function() {
                  throw Error();
                }
              });
              if (typeof Reflect === "object" && Reflect.construct) {
                try {
                  Reflect.construct(Fake, []);
                } catch (x3) {
                  control = x3;
                }
                Reflect.construct(fn, [], Fake);
              } else {
                try {
                  Fake.call();
                } catch (x3) {
                  control = x3;
                }
                fn.call(Fake.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (x3) {
                control = x3;
              }
              fn();
            }
          } catch (sample) {
            if (sample && control && typeof sample.stack === "string") {
              var sampleLines = sample.stack.split("\n");
              var controlLines = control.stack.split("\n");
              var s3 = sampleLines.length - 1;
              var c3 = controlLines.length - 1;
              while (s3 >= 1 && c3 >= 0 && sampleLines[s3] !== controlLines[c3]) {
                c3--;
              }
              for (; s3 >= 1 && c3 >= 0; s3--, c3--) {
                if (sampleLines[s3] !== controlLines[c3]) {
                  if (s3 !== 1 || c3 !== 1) {
                    do {
                      s3--;
                      c3--;
                      if (c3 < 0 || sampleLines[s3] !== controlLines[c3]) {
                        var _frame = "\n" + sampleLines[s3].replace(" at new ", " at ");
                        {
                          if (typeof fn === "function") {
                            componentFrameCache.set(fn, _frame);
                          }
                        }
                        return _frame;
                      }
                    } while (s3 >= 1 && c3 >= 0);
                  }
                  break;
                }
              }
            }
          } finally {
            reentry = false;
            {
              ReactCurrentDispatcher.current = previousDispatcher;
              reenableLogs();
            }
            Error.prepareStackTrace = previousPrepareStackTrace;
          }
          var name = fn ? fn.displayName || fn.name : "";
          var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
          {
            if (typeof fn === "function") {
              componentFrameCache.set(fn, syntheticFrame);
            }
          }
          return syntheticFrame;
        }
        function describeClassComponentFrame(ctor, source, ownerFn) {
          {
            return describeNativeComponentFrame(ctor, true);
          }
        }
        function describeFunctionComponentFrame(fn, source, ownerFn) {
          {
            return describeNativeComponentFrame(fn, false);
          }
        }
        function shouldConstruct(Component) {
          var prototype = Component.prototype;
          return !!(prototype && prototype.isReactComponent);
        }
        function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
          if (type == null) {
            return "";
          }
          if (typeof type === "function") {
            {
              return describeNativeComponentFrame(type, shouldConstruct(type));
            }
          }
          if (typeof type === "string") {
            return describeBuiltInComponentFrame(type);
          }
          switch (type) {
            case REACT_SUSPENSE_TYPE:
              return describeBuiltInComponentFrame("Suspense");
            case REACT_SUSPENSE_LIST_TYPE:
              return describeBuiltInComponentFrame("SuspenseList");
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_FORWARD_REF_TYPE:
                return describeFunctionComponentFrame(type.render);
              case REACT_MEMO_TYPE:
                return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
              case REACT_BLOCK_TYPE:
                return describeFunctionComponentFrame(type._render);
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                } catch (x3) {
                }
              }
            }
          }
          return "";
        }
        function describeFiber(fiber) {
          var owner = fiber._debugOwner ? fiber._debugOwner.type : null;
          var source = fiber._debugSource;
          switch (fiber.tag) {
            case HostComponent:
              return describeBuiltInComponentFrame(fiber.type);
            case LazyComponent:
              return describeBuiltInComponentFrame("Lazy");
            case SuspenseComponent:
              return describeBuiltInComponentFrame("Suspense");
            case SuspenseListComponent:
              return describeBuiltInComponentFrame("SuspenseList");
            case FunctionComponent2:
            case IndeterminateComponent:
            case SimpleMemoComponent:
              return describeFunctionComponentFrame(fiber.type);
            case ForwardRef:
              return describeFunctionComponentFrame(fiber.type.render);
            case Block:
              return describeFunctionComponentFrame(fiber.type._render);
            case ClassComponent:
              return describeClassComponentFrame(fiber.type);
            default:
              return "";
          }
        }
        function getStackByFiberInDevAndProd(workInProgress2) {
          try {
            var info = "";
            var node = workInProgress2;
            do {
              info += describeFiber(node);
              node = node.return;
            } while (node);
            return info;
          } catch (x3) {
            return "\nError generating stack: " + x3.message + "\n" + x3.stack;
          }
        }
        function getWrappedName(outerType, innerType, wrapperName) {
          var functionName = innerType.displayName || innerType.name || "";
          return outerType.displayName || (functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName);
        }
        function getContextName(type) {
          return type.displayName || "Context";
        }
        function getComponentName(type) {
          if (type == null) {
            return null;
          }
          {
            if (typeof type.tag === "number") {
              error("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue.");
            }
          }
          if (typeof type === "function") {
            return type.displayName || type.name || null;
          }
          if (typeof type === "string") {
            return type;
          }
          switch (type) {
            case REACT_FRAGMENT_TYPE:
              return "Fragment";
            case REACT_PORTAL_TYPE:
              return "Portal";
            case REACT_PROFILER_TYPE:
              return "Profiler";
            case REACT_STRICT_MODE_TYPE:
              return "StrictMode";
            case REACT_SUSPENSE_TYPE:
              return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
              return "SuspenseList";
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_CONTEXT_TYPE:
                var context = type;
                return getContextName(context) + ".Consumer";
              case REACT_PROVIDER_TYPE:
                var provider = type;
                return getContextName(provider._context) + ".Provider";
              case REACT_FORWARD_REF_TYPE:
                return getWrappedName(type, type.render, "ForwardRef");
              case REACT_MEMO_TYPE:
                return getComponentName(type.type);
              case REACT_BLOCK_TYPE:
                return getComponentName(type._render);
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return getComponentName(init(payload));
                } catch (x3) {
                  return null;
                }
              }
            }
          }
          return null;
        }
        var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
        var current = null;
        var isRendering = false;
        function getCurrentFiberOwnerNameInDevOrNull() {
          {
            if (current === null) {
              return null;
            }
            var owner = current._debugOwner;
            if (owner !== null && typeof owner !== "undefined") {
              return getComponentName(owner.type);
            }
          }
          return null;
        }
        function getCurrentFiberStackInDev() {
          {
            if (current === null) {
              return "";
            }
            return getStackByFiberInDevAndProd(current);
          }
        }
        function resetCurrentFiber() {
          {
            ReactDebugCurrentFrame.getCurrentStack = null;
            current = null;
            isRendering = false;
          }
        }
        function setCurrentFiber(fiber) {
          {
            ReactDebugCurrentFrame.getCurrentStack = getCurrentFiberStackInDev;
            current = fiber;
            isRendering = false;
          }
        }
        function setIsRendering(rendering) {
          {
            isRendering = rendering;
          }
        }
        function getIsRendering() {
          {
            return isRendering;
          }
        }
        function toString(value) {
          return "" + value;
        }
        function getToStringValue(value) {
          switch (typeof value) {
            case "boolean":
            case "number":
            case "object":
            case "string":
            case "undefined":
              return value;
            default:
              return "";
          }
        }
        var hasReadOnlyValue = {
          button: true,
          checkbox: true,
          image: true,
          hidden: true,
          radio: true,
          reset: true,
          submit: true
        };
        function checkControlledValueProps(tagName, props) {
          {
            if (!(hasReadOnlyValue[props.type] || props.onChange || props.onInput || props.readOnly || props.disabled || props.value == null)) {
              error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.");
            }
            if (!(props.onChange || props.readOnly || props.disabled || props.checked == null)) {
              error("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
            }
          }
        }
        function isCheckable(elem) {
          var type = elem.type;
          var nodeName = elem.nodeName;
          return nodeName && nodeName.toLowerCase() === "input" && (type === "checkbox" || type === "radio");
        }
        function getTracker(node) {
          return node._valueTracker;
        }
        function detachTracker(node) {
          node._valueTracker = null;
        }
        function getValueFromNode(node) {
          var value = "";
          if (!node) {
            return value;
          }
          if (isCheckable(node)) {
            value = node.checked ? "true" : "false";
          } else {
            value = node.value;
          }
          return value;
        }
        function trackValueOnNode(node) {
          var valueField = isCheckable(node) ? "checked" : "value";
          var descriptor = Object.getOwnPropertyDescriptor(node.constructor.prototype, valueField);
          var currentValue = "" + node[valueField];
          if (node.hasOwnProperty(valueField) || typeof descriptor === "undefined" || typeof descriptor.get !== "function" || typeof descriptor.set !== "function") {
            return;
          }
          var get2 = descriptor.get, set2 = descriptor.set;
          Object.defineProperty(node, valueField, {
            configurable: true,
            get: function() {
              return get2.call(this);
            },
            set: function(value) {
              currentValue = "" + value;
              set2.call(this, value);
            }
          });
          Object.defineProperty(node, valueField, {
            enumerable: descriptor.enumerable
          });
          var tracker = {
            getValue: function() {
              return currentValue;
            },
            setValue: function(value) {
              currentValue = "" + value;
            },
            stopTracking: function() {
              detachTracker(node);
              delete node[valueField];
            }
          };
          return tracker;
        }
        function track(node) {
          if (getTracker(node)) {
            return;
          }
          node._valueTracker = trackValueOnNode(node);
        }
        function updateValueIfChanged(node) {
          if (!node) {
            return false;
          }
          var tracker = getTracker(node);
          if (!tracker) {
            return true;
          }
          var lastValue = tracker.getValue();
          var nextValue = getValueFromNode(node);
          if (nextValue !== lastValue) {
            tracker.setValue(nextValue);
            return true;
          }
          return false;
        }
        function getActiveElement(doc) {
          doc = doc || (typeof document !== "undefined" ? document : void 0);
          if (typeof doc === "undefined") {
            return null;
          }
          try {
            return doc.activeElement || doc.body;
          } catch (e3) {
            return doc.body;
          }
        }
        var didWarnValueDefaultValue = false;
        var didWarnCheckedDefaultChecked = false;
        var didWarnControlledToUncontrolled = false;
        var didWarnUncontrolledToControlled = false;
        function isControlled(props) {
          var usesChecked = props.type === "checkbox" || props.type === "radio";
          return usesChecked ? props.checked != null : props.value != null;
        }
        function getHostProps(element, props) {
          var node = element;
          var checked = props.checked;
          var hostProps = _assign({}, props, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: checked != null ? checked : node._wrapperState.initialChecked
          });
          return hostProps;
        }
        function initWrapperState(element, props) {
          {
            checkControlledValueProps("input", props);
            if (props.checked !== void 0 && props.defaultChecked !== void 0 && !didWarnCheckedDefaultChecked) {
              error("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", getCurrentFiberOwnerNameInDevOrNull() || "A component", props.type);
              didWarnCheckedDefaultChecked = true;
            }
            if (props.value !== void 0 && props.defaultValue !== void 0 && !didWarnValueDefaultValue) {
              error("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", getCurrentFiberOwnerNameInDevOrNull() || "A component", props.type);
              didWarnValueDefaultValue = true;
            }
          }
          var node = element;
          var defaultValue = props.defaultValue == null ? "" : props.defaultValue;
          node._wrapperState = {
            initialChecked: props.checked != null ? props.checked : props.defaultChecked,
            initialValue: getToStringValue(props.value != null ? props.value : defaultValue),
            controlled: isControlled(props)
          };
        }
        function updateChecked(element, props) {
          var node = element;
          var checked = props.checked;
          if (checked != null) {
            setValueForProperty(node, "checked", checked, false);
          }
        }
        function updateWrapper(element, props) {
          var node = element;
          {
            var controlled = isControlled(props);
            if (!node._wrapperState.controlled && controlled && !didWarnUncontrolledToControlled) {
              error("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components");
              didWarnUncontrolledToControlled = true;
            }
            if (node._wrapperState.controlled && !controlled && !didWarnControlledToUncontrolled) {
              error("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components");
              didWarnControlledToUncontrolled = true;
            }
          }
          updateChecked(element, props);
          var value = getToStringValue(props.value);
          var type = props.type;
          if (value != null) {
            if (type === "number") {
              if (value === 0 && node.value === "" || node.value != value) {
                node.value = toString(value);
              }
            } else if (node.value !== toString(value)) {
              node.value = toString(value);
            }
          } else if (type === "submit" || type === "reset") {
            node.removeAttribute("value");
            return;
          }
          {
            if (props.hasOwnProperty("value")) {
              setDefaultValue(node, props.type, value);
            } else if (props.hasOwnProperty("defaultValue")) {
              setDefaultValue(node, props.type, getToStringValue(props.defaultValue));
            }
          }
          {
            if (props.checked == null && props.defaultChecked != null) {
              node.defaultChecked = !!props.defaultChecked;
            }
          }
        }
        function postMountWrapper(element, props, isHydrating2) {
          var node = element;
          if (props.hasOwnProperty("value") || props.hasOwnProperty("defaultValue")) {
            var type = props.type;
            var isButton = type === "submit" || type === "reset";
            if (isButton && (props.value === void 0 || props.value === null)) {
              return;
            }
            var initialValue = toString(node._wrapperState.initialValue);
            if (!isHydrating2) {
              {
                if (initialValue !== node.value) {
                  node.value = initialValue;
                }
              }
            }
            {
              node.defaultValue = initialValue;
            }
          }
          var name = node.name;
          if (name !== "") {
            node.name = "";
          }
          {
            node.defaultChecked = !node.defaultChecked;
            node.defaultChecked = !!node._wrapperState.initialChecked;
          }
          if (name !== "") {
            node.name = name;
          }
        }
        function restoreControlledState(element, props) {
          var node = element;
          updateWrapper(node, props);
          updateNamedCousins(node, props);
        }
        function updateNamedCousins(rootNode, props) {
          var name = props.name;
          if (props.type === "radio" && name != null) {
            var queryRoot = rootNode;
            while (queryRoot.parentNode) {
              queryRoot = queryRoot.parentNode;
            }
            var group = queryRoot.querySelectorAll("input[name=" + JSON.stringify("" + name) + '][type="radio"]');
            for (var i4 = 0; i4 < group.length; i4++) {
              var otherNode = group[i4];
              if (otherNode === rootNode || otherNode.form !== rootNode.form) {
                continue;
              }
              var otherProps = getFiberCurrentPropsFromNode(otherNode);
              if (!otherProps) {
                {
                  throw Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
                }
              }
              updateValueIfChanged(otherNode);
              updateWrapper(otherNode, otherProps);
            }
          }
        }
        function setDefaultValue(node, type, value) {
          if (type !== "number" || getActiveElement(node.ownerDocument) !== node) {
            if (value == null) {
              node.defaultValue = toString(node._wrapperState.initialValue);
            } else if (node.defaultValue !== toString(value)) {
              node.defaultValue = toString(value);
            }
          }
        }
        var didWarnSelectedSetOnOption = false;
        var didWarnInvalidChild = false;
        function flattenChildren(children) {
          var content = "";
          React6.Children.forEach(children, function(child) {
            if (child == null) {
              return;
            }
            content += child;
          });
          return content;
        }
        function validateProps(element, props) {
          {
            if (typeof props.children === "object" && props.children !== null) {
              React6.Children.forEach(props.children, function(child) {
                if (child == null) {
                  return;
                }
                if (typeof child === "string" || typeof child === "number") {
                  return;
                }
                if (typeof child.type !== "string") {
                  return;
                }
                if (!didWarnInvalidChild) {
                  didWarnInvalidChild = true;
                  error("Only strings and numbers are supported as <option> children.");
                }
              });
            }
            if (props.selected != null && !didWarnSelectedSetOnOption) {
              error("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>.");
              didWarnSelectedSetOnOption = true;
            }
          }
        }
        function postMountWrapper$1(element, props) {
          if (props.value != null) {
            element.setAttribute("value", toString(getToStringValue(props.value)));
          }
        }
        function getHostProps$1(element, props) {
          var hostProps = _assign({
            children: void 0
          }, props);
          var content = flattenChildren(props.children);
          if (content) {
            hostProps.children = content;
          }
          return hostProps;
        }
        var didWarnValueDefaultValue$1;
        {
          didWarnValueDefaultValue$1 = false;
        }
        function getDeclarationErrorAddendum() {
          var ownerName = getCurrentFiberOwnerNameInDevOrNull();
          if (ownerName) {
            return "\n\nCheck the render method of `" + ownerName + "`.";
          }
          return "";
        }
        var valuePropNames = ["value", "defaultValue"];
        function checkSelectPropTypes(props) {
          {
            checkControlledValueProps("select", props);
            for (var i4 = 0; i4 < valuePropNames.length; i4++) {
              var propName = valuePropNames[i4];
              if (props[propName] == null) {
                continue;
              }
              var isArray2 = Array.isArray(props[propName]);
              if (props.multiple && !isArray2) {
                error("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", propName, getDeclarationErrorAddendum());
              } else if (!props.multiple && isArray2) {
                error("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", propName, getDeclarationErrorAddendum());
              }
            }
          }
        }
        function updateOptions(node, multiple, propValue, setDefaultSelected) {
          var options2 = node.options;
          if (multiple) {
            var selectedValues = propValue;
            var selectedValue = {};
            for (var i4 = 0; i4 < selectedValues.length; i4++) {
              selectedValue["$" + selectedValues[i4]] = true;
            }
            for (var _i = 0; _i < options2.length; _i++) {
              var selected = selectedValue.hasOwnProperty("$" + options2[_i].value);
              if (options2[_i].selected !== selected) {
                options2[_i].selected = selected;
              }
              if (selected && setDefaultSelected) {
                options2[_i].defaultSelected = true;
              }
            }
          } else {
            var _selectedValue = toString(getToStringValue(propValue));
            var defaultSelected = null;
            for (var _i2 = 0; _i2 < options2.length; _i2++) {
              if (options2[_i2].value === _selectedValue) {
                options2[_i2].selected = true;
                if (setDefaultSelected) {
                  options2[_i2].defaultSelected = true;
                }
                return;
              }
              if (defaultSelected === null && !options2[_i2].disabled) {
                defaultSelected = options2[_i2];
              }
            }
            if (defaultSelected !== null) {
              defaultSelected.selected = true;
            }
          }
        }
        function getHostProps$2(element, props) {
          return _assign({}, props, {
            value: void 0
          });
        }
        function initWrapperState$1(element, props) {
          var node = element;
          {
            checkSelectPropTypes(props);
          }
          node._wrapperState = {
            wasMultiple: !!props.multiple
          };
          {
            if (props.value !== void 0 && props.defaultValue !== void 0 && !didWarnValueDefaultValue$1) {
              error("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components");
              didWarnValueDefaultValue$1 = true;
            }
          }
        }
        function postMountWrapper$2(element, props) {
          var node = element;
          node.multiple = !!props.multiple;
          var value = props.value;
          if (value != null) {
            updateOptions(node, !!props.multiple, value, false);
          } else if (props.defaultValue != null) {
            updateOptions(node, !!props.multiple, props.defaultValue, true);
          }
        }
        function postUpdateWrapper(element, props) {
          var node = element;
          var wasMultiple = node._wrapperState.wasMultiple;
          node._wrapperState.wasMultiple = !!props.multiple;
          var value = props.value;
          if (value != null) {
            updateOptions(node, !!props.multiple, value, false);
          } else if (wasMultiple !== !!props.multiple) {
            if (props.defaultValue != null) {
              updateOptions(node, !!props.multiple, props.defaultValue, true);
            } else {
              updateOptions(node, !!props.multiple, props.multiple ? [] : "", false);
            }
          }
        }
        function restoreControlledState$1(element, props) {
          var node = element;
          var value = props.value;
          if (value != null) {
            updateOptions(node, !!props.multiple, value, false);
          }
        }
        var didWarnValDefaultVal = false;
        function getHostProps$3(element, props) {
          var node = element;
          if (!(props.dangerouslySetInnerHTML == null)) {
            {
              throw Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
            }
          }
          var hostProps = _assign({}, props, {
            value: void 0,
            defaultValue: void 0,
            children: toString(node._wrapperState.initialValue)
          });
          return hostProps;
        }
        function initWrapperState$2(element, props) {
          var node = element;
          {
            checkControlledValueProps("textarea", props);
            if (props.value !== void 0 && props.defaultValue !== void 0 && !didWarnValDefaultVal) {
              error("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", getCurrentFiberOwnerNameInDevOrNull() || "A component");
              didWarnValDefaultVal = true;
            }
          }
          var initialValue = props.value;
          if (initialValue == null) {
            var children = props.children, defaultValue = props.defaultValue;
            if (children != null) {
              {
                error("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
              }
              {
                if (!(defaultValue == null)) {
                  {
                    throw Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
                  }
                }
                if (Array.isArray(children)) {
                  if (!(children.length <= 1)) {
                    {
                      throw Error("<textarea> can only have at most one child.");
                    }
                  }
                  children = children[0];
                }
                defaultValue = children;
              }
            }
            if (defaultValue == null) {
              defaultValue = "";
            }
            initialValue = defaultValue;
          }
          node._wrapperState = {
            initialValue: getToStringValue(initialValue)
          };
        }
        function updateWrapper$1(element, props) {
          var node = element;
          var value = getToStringValue(props.value);
          var defaultValue = getToStringValue(props.defaultValue);
          if (value != null) {
            var newValue = toString(value);
            if (newValue !== node.value) {
              node.value = newValue;
            }
            if (props.defaultValue == null && node.defaultValue !== newValue) {
              node.defaultValue = newValue;
            }
          }
          if (defaultValue != null) {
            node.defaultValue = toString(defaultValue);
          }
        }
        function postMountWrapper$3(element, props) {
          var node = element;
          var textContent = node.textContent;
          if (textContent === node._wrapperState.initialValue) {
            if (textContent !== "" && textContent !== null) {
              node.value = textContent;
            }
          }
        }
        function restoreControlledState$2(element, props) {
          updateWrapper$1(element, props);
        }
        var HTML_NAMESPACE = "http://www.w3.org/1999/xhtml";
        var MATH_NAMESPACE = "http://www.w3.org/1998/Math/MathML";
        var SVG_NAMESPACE = "http://www.w3.org/2000/svg";
        var Namespaces = {
          html: HTML_NAMESPACE,
          mathml: MATH_NAMESPACE,
          svg: SVG_NAMESPACE
        };
        function getIntrinsicNamespace(type) {
          switch (type) {
            case "svg":
              return SVG_NAMESPACE;
            case "math":
              return MATH_NAMESPACE;
            default:
              return HTML_NAMESPACE;
          }
        }
        function getChildNamespace(parentNamespace, type) {
          if (parentNamespace == null || parentNamespace === HTML_NAMESPACE) {
            return getIntrinsicNamespace(type);
          }
          if (parentNamespace === SVG_NAMESPACE && type === "foreignObject") {
            return HTML_NAMESPACE;
          }
          return parentNamespace;
        }
        var createMicrosoftUnsafeLocalFunction = function(func) {
          if (typeof MSApp !== "undefined" && MSApp.execUnsafeLocalFunction) {
            return function(arg0, arg1, arg2, arg3) {
              MSApp.execUnsafeLocalFunction(function() {
                return func(arg0, arg1, arg2, arg3);
              });
            };
          } else {
            return func;
          }
        };
        var reusableSVGContainer;
        var setInnerHTML = createMicrosoftUnsafeLocalFunction(function(node, html) {
          if (node.namespaceURI === Namespaces.svg) {
            if (!("innerHTML" in node)) {
              reusableSVGContainer = reusableSVGContainer || document.createElement("div");
              reusableSVGContainer.innerHTML = "<svg>" + html.valueOf().toString() + "</svg>";
              var svgNode = reusableSVGContainer.firstChild;
              while (node.firstChild) {
                node.removeChild(node.firstChild);
              }
              while (svgNode.firstChild) {
                node.appendChild(svgNode.firstChild);
              }
              return;
            }
          }
          node.innerHTML = html;
        });
        var ELEMENT_NODE = 1;
        var TEXT_NODE = 3;
        var COMMENT_NODE = 8;
        var DOCUMENT_NODE = 9;
        var DOCUMENT_FRAGMENT_NODE = 11;
        var setTextContent = function(node, text) {
          if (text) {
            var firstChild = node.firstChild;
            if (firstChild && firstChild === node.lastChild && firstChild.nodeType === TEXT_NODE) {
              firstChild.nodeValue = text;
              return;
            }
          }
          node.textContent = text;
        };
        var shorthandToLonghand = {
          animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
          background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
          backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
          border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
          borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
          borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
          borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
          borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
          borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
          borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
          borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
          borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
          borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
          borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
          borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
          borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
          borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
          columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
          columns: ["columnCount", "columnWidth"],
          flex: ["flexBasis", "flexGrow", "flexShrink"],
          flexFlow: ["flexDirection", "flexWrap"],
          font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
          fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
          gap: ["columnGap", "rowGap"],
          grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
          gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
          gridColumn: ["gridColumnEnd", "gridColumnStart"],
          gridColumnGap: ["columnGap"],
          gridGap: ["columnGap", "rowGap"],
          gridRow: ["gridRowEnd", "gridRowStart"],
          gridRowGap: ["rowGap"],
          gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
          listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
          margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
          marker: ["markerEnd", "markerMid", "markerStart"],
          mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
          maskPosition: ["maskPositionX", "maskPositionY"],
          outline: ["outlineColor", "outlineStyle", "outlineWidth"],
          overflow: ["overflowX", "overflowY"],
          padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
          placeContent: ["alignContent", "justifyContent"],
          placeItems: ["alignItems", "justifyItems"],
          placeSelf: ["alignSelf", "justifySelf"],
          textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
          textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
          transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
          wordWrap: ["overflowWrap"]
        };
        var isUnitlessNumber = {
          animationIterationCount: true,
          borderImageOutset: true,
          borderImageSlice: true,
          borderImageWidth: true,
          boxFlex: true,
          boxFlexGroup: true,
          boxOrdinalGroup: true,
          columnCount: true,
          columns: true,
          flex: true,
          flexGrow: true,
          flexPositive: true,
          flexShrink: true,
          flexNegative: true,
          flexOrder: true,
          gridArea: true,
          gridRow: true,
          gridRowEnd: true,
          gridRowSpan: true,
          gridRowStart: true,
          gridColumn: true,
          gridColumnEnd: true,
          gridColumnSpan: true,
          gridColumnStart: true,
          fontWeight: true,
          lineClamp: true,
          lineHeight: true,
          opacity: true,
          order: true,
          orphans: true,
          tabSize: true,
          widows: true,
          zIndex: true,
          zoom: true,
          fillOpacity: true,
          floodOpacity: true,
          stopOpacity: true,
          strokeDasharray: true,
          strokeDashoffset: true,
          strokeMiterlimit: true,
          strokeOpacity: true,
          strokeWidth: true
        };
        function prefixKey(prefix2, key) {
          return prefix2 + key.charAt(0).toUpperCase() + key.substring(1);
        }
        var prefixes = ["Webkit", "ms", "Moz", "O"];
        Object.keys(isUnitlessNumber).forEach(function(prop) {
          prefixes.forEach(function(prefix2) {
            isUnitlessNumber[prefixKey(prefix2, prop)] = isUnitlessNumber[prop];
          });
        });
        function dangerousStyleValue(name, value, isCustomProperty) {
          var isEmpty = value == null || typeof value === "boolean" || value === "";
          if (isEmpty) {
            return "";
          }
          if (!isCustomProperty && typeof value === "number" && value !== 0 && !(isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name])) {
            return value + "px";
          }
          return ("" + value).trim();
        }
        var uppercasePattern = /([A-Z])/g;
        var msPattern = /^ms-/;
        function hyphenateStyleName(name) {
          return name.replace(uppercasePattern, "-$1").toLowerCase().replace(msPattern, "-ms-");
        }
        var warnValidStyle = function() {
        };
        {
          var badVendoredStyleNamePattern = /^(?:webkit|moz|o)[A-Z]/;
          var msPattern$1 = /^-ms-/;
          var hyphenPattern = /-(.)/g;
          var badStyleValueWithSemicolonPattern = /;\s*$/;
          var warnedStyleNames = {};
          var warnedStyleValues = {};
          var warnedForNaNValue = false;
          var warnedForInfinityValue = false;
          var camelize = function(string) {
            return string.replace(hyphenPattern, function(_3, character) {
              return character.toUpperCase();
            });
          };
          var warnHyphenatedStyleName = function(name) {
            if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
              return;
            }
            warnedStyleNames[name] = true;
            error("Unsupported style property %s. Did you mean %s?", name, camelize(name.replace(msPattern$1, "ms-")));
          };
          var warnBadVendoredStyleName = function(name) {
            if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
              return;
            }
            warnedStyleNames[name] = true;
            error("Unsupported vendor-prefixed style property %s. Did you mean %s?", name, name.charAt(0).toUpperCase() + name.slice(1));
          };
          var warnStyleValueWithSemicolon = function(name, value) {
            if (warnedStyleValues.hasOwnProperty(value) && warnedStyleValues[value]) {
              return;
            }
            warnedStyleValues[value] = true;
            error(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, name, value.replace(badStyleValueWithSemicolonPattern, ""));
          };
          var warnStyleValueIsNaN = function(name, value) {
            if (warnedForNaNValue) {
              return;
            }
            warnedForNaNValue = true;
            error("`NaN` is an invalid value for the `%s` css style property.", name);
          };
          var warnStyleValueIsInfinity = function(name, value) {
            if (warnedForInfinityValue) {
              return;
            }
            warnedForInfinityValue = true;
            error("`Infinity` is an invalid value for the `%s` css style property.", name);
          };
          warnValidStyle = function(name, value) {
            if (name.indexOf("-") > -1) {
              warnHyphenatedStyleName(name);
            } else if (badVendoredStyleNamePattern.test(name)) {
              warnBadVendoredStyleName(name);
            } else if (badStyleValueWithSemicolonPattern.test(value)) {
              warnStyleValueWithSemicolon(name, value);
            }
            if (typeof value === "number") {
              if (isNaN(value)) {
                warnStyleValueIsNaN(name, value);
              } else if (!isFinite(value)) {
                warnStyleValueIsInfinity(name, value);
              }
            }
          };
        }
        var warnValidStyle$1 = warnValidStyle;
        function createDangerousStringForStyles(styles) {
          {
            var serialized = "";
            var delimiter = "";
            for (var styleName in styles) {
              if (!styles.hasOwnProperty(styleName)) {
                continue;
              }
              var styleValue = styles[styleName];
              if (styleValue != null) {
                var isCustomProperty = styleName.indexOf("--") === 0;
                serialized += delimiter + (isCustomProperty ? styleName : hyphenateStyleName(styleName)) + ":";
                serialized += dangerousStyleValue(styleName, styleValue, isCustomProperty);
                delimiter = ";";
              }
            }
            return serialized || null;
          }
        }
        function setValueForStyles(node, styles) {
          var style2 = node.style;
          for (var styleName in styles) {
            if (!styles.hasOwnProperty(styleName)) {
              continue;
            }
            var isCustomProperty = styleName.indexOf("--") === 0;
            {
              if (!isCustomProperty) {
                warnValidStyle$1(styleName, styles[styleName]);
              }
            }
            var styleValue = dangerousStyleValue(styleName, styles[styleName], isCustomProperty);
            if (styleName === "float") {
              styleName = "cssFloat";
            }
            if (isCustomProperty) {
              style2.setProperty(styleName, styleValue);
            } else {
              style2[styleName] = styleValue;
            }
          }
        }
        function isValueEmpty(value) {
          return value == null || typeof value === "boolean" || value === "";
        }
        function expandShorthandMap(styles) {
          var expanded = {};
          for (var key in styles) {
            var longhands = shorthandToLonghand[key] || [key];
            for (var i4 = 0; i4 < longhands.length; i4++) {
              expanded[longhands[i4]] = key;
            }
          }
          return expanded;
        }
        function validateShorthandPropertyCollisionInDev(styleUpdates, nextStyles) {
          {
            if (!nextStyles) {
              return;
            }
            var expandedUpdates = expandShorthandMap(styleUpdates);
            var expandedStyles = expandShorthandMap(nextStyles);
            var warnedAbout = {};
            for (var key in expandedUpdates) {
              var originalKey = expandedUpdates[key];
              var correctOriginalKey = expandedStyles[key];
              if (correctOriginalKey && originalKey !== correctOriginalKey) {
                var warningKey = originalKey + "," + correctOriginalKey;
                if (warnedAbout[warningKey]) {
                  continue;
                }
                warnedAbout[warningKey] = true;
                error("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", isValueEmpty(styleUpdates[originalKey]) ? "Removing" : "Updating", originalKey, correctOriginalKey);
              }
            }
          }
        }
        var omittedCloseTags = {
          area: true,
          base: true,
          br: true,
          col: true,
          embed: true,
          hr: true,
          img: true,
          input: true,
          keygen: true,
          link: true,
          meta: true,
          param: true,
          source: true,
          track: true,
          wbr: true
        };
        var voidElementTags = _assign({
          menuitem: true
        }, omittedCloseTags);
        var HTML = "__html";
        function assertValidProps(tag, props) {
          if (!props) {
            return;
          }
          if (voidElementTags[tag]) {
            if (!(props.children == null && props.dangerouslySetInnerHTML == null)) {
              {
                throw Error(tag + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
              }
            }
          }
          if (props.dangerouslySetInnerHTML != null) {
            if (!(props.children == null)) {
              {
                throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
              }
            }
            if (!(typeof props.dangerouslySetInnerHTML === "object" && HTML in props.dangerouslySetInnerHTML)) {
              {
                throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
              }
            }
          }
          {
            if (!props.suppressContentEditableWarning && props.contentEditable && props.children != null) {
              error("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional.");
            }
          }
          if (!(props.style == null || typeof props.style === "object")) {
            {
              throw Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
            }
          }
        }
        function isCustomComponent(tagName, props) {
          if (tagName.indexOf("-") === -1) {
            return typeof props.is === "string";
          }
          switch (tagName) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return false;
            default:
              return true;
          }
        }
        var possibleStandardNames = {
          accept: "accept",
          acceptcharset: "acceptCharset",
          "accept-charset": "acceptCharset",
          accesskey: "accessKey",
          action: "action",
          allowfullscreen: "allowFullScreen",
          alt: "alt",
          as: "as",
          async: "async",
          autocapitalize: "autoCapitalize",
          autocomplete: "autoComplete",
          autocorrect: "autoCorrect",
          autofocus: "autoFocus",
          autoplay: "autoPlay",
          autosave: "autoSave",
          capture: "capture",
          cellpadding: "cellPadding",
          cellspacing: "cellSpacing",
          challenge: "challenge",
          charset: "charSet",
          checked: "checked",
          children: "children",
          cite: "cite",
          class: "className",
          classid: "classID",
          classname: "className",
          cols: "cols",
          colspan: "colSpan",
          content: "content",
          contenteditable: "contentEditable",
          contextmenu: "contextMenu",
          controls: "controls",
          controlslist: "controlsList",
          coords: "coords",
          crossorigin: "crossOrigin",
          dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
          data: "data",
          datetime: "dateTime",
          default: "default",
          defaultchecked: "defaultChecked",
          defaultvalue: "defaultValue",
          defer: "defer",
          dir: "dir",
          disabled: "disabled",
          disablepictureinpicture: "disablePictureInPicture",
          disableremoteplayback: "disableRemotePlayback",
          download: "download",
          draggable: "draggable",
          enctype: "encType",
          enterkeyhint: "enterKeyHint",
          for: "htmlFor",
          form: "form",
          formmethod: "formMethod",
          formaction: "formAction",
          formenctype: "formEncType",
          formnovalidate: "formNoValidate",
          formtarget: "formTarget",
          frameborder: "frameBorder",
          headers: "headers",
          height: "height",
          hidden: "hidden",
          high: "high",
          href: "href",
          hreflang: "hrefLang",
          htmlfor: "htmlFor",
          httpequiv: "httpEquiv",
          "http-equiv": "httpEquiv",
          icon: "icon",
          id: "id",
          innerhtml: "innerHTML",
          inputmode: "inputMode",
          integrity: "integrity",
          is: "is",
          itemid: "itemID",
          itemprop: "itemProp",
          itemref: "itemRef",
          itemscope: "itemScope",
          itemtype: "itemType",
          keyparams: "keyParams",
          keytype: "keyType",
          kind: "kind",
          label: "label",
          lang: "lang",
          list: "list",
          loop: "loop",
          low: "low",
          manifest: "manifest",
          marginwidth: "marginWidth",
          marginheight: "marginHeight",
          max: "max",
          maxlength: "maxLength",
          media: "media",
          mediagroup: "mediaGroup",
          method: "method",
          min: "min",
          minlength: "minLength",
          multiple: "multiple",
          muted: "muted",
          name: "name",
          nomodule: "noModule",
          nonce: "nonce",
          novalidate: "noValidate",
          open: "open",
          optimum: "optimum",
          pattern: "pattern",
          placeholder: "placeholder",
          playsinline: "playsInline",
          poster: "poster",
          preload: "preload",
          profile: "profile",
          radiogroup: "radioGroup",
          readonly: "readOnly",
          referrerpolicy: "referrerPolicy",
          rel: "rel",
          required: "required",
          reversed: "reversed",
          role: "role",
          rows: "rows",
          rowspan: "rowSpan",
          sandbox: "sandbox",
          scope: "scope",
          scoped: "scoped",
          scrolling: "scrolling",
          seamless: "seamless",
          selected: "selected",
          shape: "shape",
          size: "size",
          sizes: "sizes",
          span: "span",
          spellcheck: "spellCheck",
          src: "src",
          srcdoc: "srcDoc",
          srclang: "srcLang",
          srcset: "srcSet",
          start: "start",
          step: "step",
          style: "style",
          summary: "summary",
          tabindex: "tabIndex",
          target: "target",
          title: "title",
          type: "type",
          usemap: "useMap",
          value: "value",
          width: "width",
          wmode: "wmode",
          wrap: "wrap",
          about: "about",
          accentheight: "accentHeight",
          "accent-height": "accentHeight",
          accumulate: "accumulate",
          additive: "additive",
          alignmentbaseline: "alignmentBaseline",
          "alignment-baseline": "alignmentBaseline",
          allowreorder: "allowReorder",
          alphabetic: "alphabetic",
          amplitude: "amplitude",
          arabicform: "arabicForm",
          "arabic-form": "arabicForm",
          ascent: "ascent",
          attributename: "attributeName",
          attributetype: "attributeType",
          autoreverse: "autoReverse",
          azimuth: "azimuth",
          basefrequency: "baseFrequency",
          baselineshift: "baselineShift",
          "baseline-shift": "baselineShift",
          baseprofile: "baseProfile",
          bbox: "bbox",
          begin: "begin",
          bias: "bias",
          by: "by",
          calcmode: "calcMode",
          capheight: "capHeight",
          "cap-height": "capHeight",
          clip: "clip",
          clippath: "clipPath",
          "clip-path": "clipPath",
          clippathunits: "clipPathUnits",
          cliprule: "clipRule",
          "clip-rule": "clipRule",
          color: "color",
          colorinterpolation: "colorInterpolation",
          "color-interpolation": "colorInterpolation",
          colorinterpolationfilters: "colorInterpolationFilters",
          "color-interpolation-filters": "colorInterpolationFilters",
          colorprofile: "colorProfile",
          "color-profile": "colorProfile",
          colorrendering: "colorRendering",
          "color-rendering": "colorRendering",
          contentscripttype: "contentScriptType",
          contentstyletype: "contentStyleType",
          cursor: "cursor",
          cx: "cx",
          cy: "cy",
          d: "d",
          datatype: "datatype",
          decelerate: "decelerate",
          descent: "descent",
          diffuseconstant: "diffuseConstant",
          direction: "direction",
          display: "display",
          divisor: "divisor",
          dominantbaseline: "dominantBaseline",
          "dominant-baseline": "dominantBaseline",
          dur: "dur",
          dx: "dx",
          dy: "dy",
          edgemode: "edgeMode",
          elevation: "elevation",
          enablebackground: "enableBackground",
          "enable-background": "enableBackground",
          end: "end",
          exponent: "exponent",
          externalresourcesrequired: "externalResourcesRequired",
          fill: "fill",
          fillopacity: "fillOpacity",
          "fill-opacity": "fillOpacity",
          fillrule: "fillRule",
          "fill-rule": "fillRule",
          filter: "filter",
          filterres: "filterRes",
          filterunits: "filterUnits",
          floodopacity: "floodOpacity",
          "flood-opacity": "floodOpacity",
          floodcolor: "floodColor",
          "flood-color": "floodColor",
          focusable: "focusable",
          fontfamily: "fontFamily",
          "font-family": "fontFamily",
          fontsize: "fontSize",
          "font-size": "fontSize",
          fontsizeadjust: "fontSizeAdjust",
          "font-size-adjust": "fontSizeAdjust",
          fontstretch: "fontStretch",
          "font-stretch": "fontStretch",
          fontstyle: "fontStyle",
          "font-style": "fontStyle",
          fontvariant: "fontVariant",
          "font-variant": "fontVariant",
          fontweight: "fontWeight",
          "font-weight": "fontWeight",
          format: "format",
          from: "from",
          fx: "fx",
          fy: "fy",
          g1: "g1",
          g2: "g2",
          glyphname: "glyphName",
          "glyph-name": "glyphName",
          glyphorientationhorizontal: "glyphOrientationHorizontal",
          "glyph-orientation-horizontal": "glyphOrientationHorizontal",
          glyphorientationvertical: "glyphOrientationVertical",
          "glyph-orientation-vertical": "glyphOrientationVertical",
          glyphref: "glyphRef",
          gradienttransform: "gradientTransform",
          gradientunits: "gradientUnits",
          hanging: "hanging",
          horizadvx: "horizAdvX",
          "horiz-adv-x": "horizAdvX",
          horizoriginx: "horizOriginX",
          "horiz-origin-x": "horizOriginX",
          ideographic: "ideographic",
          imagerendering: "imageRendering",
          "image-rendering": "imageRendering",
          in2: "in2",
          in: "in",
          inlist: "inlist",
          intercept: "intercept",
          k1: "k1",
          k2: "k2",
          k3: "k3",
          k4: "k4",
          k: "k",
          kernelmatrix: "kernelMatrix",
          kernelunitlength: "kernelUnitLength",
          kerning: "kerning",
          keypoints: "keyPoints",
          keysplines: "keySplines",
          keytimes: "keyTimes",
          lengthadjust: "lengthAdjust",
          letterspacing: "letterSpacing",
          "letter-spacing": "letterSpacing",
          lightingcolor: "lightingColor",
          "lighting-color": "lightingColor",
          limitingconeangle: "limitingConeAngle",
          local: "local",
          markerend: "markerEnd",
          "marker-end": "markerEnd",
          markerheight: "markerHeight",
          markermid: "markerMid",
          "marker-mid": "markerMid",
          markerstart: "markerStart",
          "marker-start": "markerStart",
          markerunits: "markerUnits",
          markerwidth: "markerWidth",
          mask: "mask",
          maskcontentunits: "maskContentUnits",
          maskunits: "maskUnits",
          mathematical: "mathematical",
          mode: "mode",
          numoctaves: "numOctaves",
          offset: "offset",
          opacity: "opacity",
          operator: "operator",
          order: "order",
          orient: "orient",
          orientation: "orientation",
          origin: "origin",
          overflow: "overflow",
          overlineposition: "overlinePosition",
          "overline-position": "overlinePosition",
          overlinethickness: "overlineThickness",
          "overline-thickness": "overlineThickness",
          paintorder: "paintOrder",
          "paint-order": "paintOrder",
          panose1: "panose1",
          "panose-1": "panose1",
          pathlength: "pathLength",
          patterncontentunits: "patternContentUnits",
          patterntransform: "patternTransform",
          patternunits: "patternUnits",
          pointerevents: "pointerEvents",
          "pointer-events": "pointerEvents",
          points: "points",
          pointsatx: "pointsAtX",
          pointsaty: "pointsAtY",
          pointsatz: "pointsAtZ",
          prefix: "prefix",
          preservealpha: "preserveAlpha",
          preserveaspectratio: "preserveAspectRatio",
          primitiveunits: "primitiveUnits",
          property: "property",
          r: "r",
          radius: "radius",
          refx: "refX",
          refy: "refY",
          renderingintent: "renderingIntent",
          "rendering-intent": "renderingIntent",
          repeatcount: "repeatCount",
          repeatdur: "repeatDur",
          requiredextensions: "requiredExtensions",
          requiredfeatures: "requiredFeatures",
          resource: "resource",
          restart: "restart",
          result: "result",
          results: "results",
          rotate: "rotate",
          rx: "rx",
          ry: "ry",
          scale: "scale",
          security: "security",
          seed: "seed",
          shaperendering: "shapeRendering",
          "shape-rendering": "shapeRendering",
          slope: "slope",
          spacing: "spacing",
          specularconstant: "specularConstant",
          specularexponent: "specularExponent",
          speed: "speed",
          spreadmethod: "spreadMethod",
          startoffset: "startOffset",
          stddeviation: "stdDeviation",
          stemh: "stemh",
          stemv: "stemv",
          stitchtiles: "stitchTiles",
          stopcolor: "stopColor",
          "stop-color": "stopColor",
          stopopacity: "stopOpacity",
          "stop-opacity": "stopOpacity",
          strikethroughposition: "strikethroughPosition",
          "strikethrough-position": "strikethroughPosition",
          strikethroughthickness: "strikethroughThickness",
          "strikethrough-thickness": "strikethroughThickness",
          string: "string",
          stroke: "stroke",
          strokedasharray: "strokeDasharray",
          "stroke-dasharray": "strokeDasharray",
          strokedashoffset: "strokeDashoffset",
          "stroke-dashoffset": "strokeDashoffset",
          strokelinecap: "strokeLinecap",
          "stroke-linecap": "strokeLinecap",
          strokelinejoin: "strokeLinejoin",
          "stroke-linejoin": "strokeLinejoin",
          strokemiterlimit: "strokeMiterlimit",
          "stroke-miterlimit": "strokeMiterlimit",
          strokewidth: "strokeWidth",
          "stroke-width": "strokeWidth",
          strokeopacity: "strokeOpacity",
          "stroke-opacity": "strokeOpacity",
          suppresscontenteditablewarning: "suppressContentEditableWarning",
          suppresshydrationwarning: "suppressHydrationWarning",
          surfacescale: "surfaceScale",
          systemlanguage: "systemLanguage",
          tablevalues: "tableValues",
          targetx: "targetX",
          targety: "targetY",
          textanchor: "textAnchor",
          "text-anchor": "textAnchor",
          textdecoration: "textDecoration",
          "text-decoration": "textDecoration",
          textlength: "textLength",
          textrendering: "textRendering",
          "text-rendering": "textRendering",
          to: "to",
          transform: "transform",
          typeof: "typeof",
          u1: "u1",
          u2: "u2",
          underlineposition: "underlinePosition",
          "underline-position": "underlinePosition",
          underlinethickness: "underlineThickness",
          "underline-thickness": "underlineThickness",
          unicode: "unicode",
          unicodebidi: "unicodeBidi",
          "unicode-bidi": "unicodeBidi",
          unicoderange: "unicodeRange",
          "unicode-range": "unicodeRange",
          unitsperem: "unitsPerEm",
          "units-per-em": "unitsPerEm",
          unselectable: "unselectable",
          valphabetic: "vAlphabetic",
          "v-alphabetic": "vAlphabetic",
          values: "values",
          vectoreffect: "vectorEffect",
          "vector-effect": "vectorEffect",
          version: "version",
          vertadvy: "vertAdvY",
          "vert-adv-y": "vertAdvY",
          vertoriginx: "vertOriginX",
          "vert-origin-x": "vertOriginX",
          vertoriginy: "vertOriginY",
          "vert-origin-y": "vertOriginY",
          vhanging: "vHanging",
          "v-hanging": "vHanging",
          videographic: "vIdeographic",
          "v-ideographic": "vIdeographic",
          viewbox: "viewBox",
          viewtarget: "viewTarget",
          visibility: "visibility",
          vmathematical: "vMathematical",
          "v-mathematical": "vMathematical",
          vocab: "vocab",
          widths: "widths",
          wordspacing: "wordSpacing",
          "word-spacing": "wordSpacing",
          writingmode: "writingMode",
          "writing-mode": "writingMode",
          x1: "x1",
          x2: "x2",
          x: "x",
          xchannelselector: "xChannelSelector",
          xheight: "xHeight",
          "x-height": "xHeight",
          xlinkactuate: "xlinkActuate",
          "xlink:actuate": "xlinkActuate",
          xlinkarcrole: "xlinkArcrole",
          "xlink:arcrole": "xlinkArcrole",
          xlinkhref: "xlinkHref",
          "xlink:href": "xlinkHref",
          xlinkrole: "xlinkRole",
          "xlink:role": "xlinkRole",
          xlinkshow: "xlinkShow",
          "xlink:show": "xlinkShow",
          xlinktitle: "xlinkTitle",
          "xlink:title": "xlinkTitle",
          xlinktype: "xlinkType",
          "xlink:type": "xlinkType",
          xmlbase: "xmlBase",
          "xml:base": "xmlBase",
          xmllang: "xmlLang",
          "xml:lang": "xmlLang",
          xmlns: "xmlns",
          "xml:space": "xmlSpace",
          xmlnsxlink: "xmlnsXlink",
          "xmlns:xlink": "xmlnsXlink",
          xmlspace: "xmlSpace",
          y1: "y1",
          y2: "y2",
          y: "y",
          ychannelselector: "yChannelSelector",
          z: "z",
          zoomandpan: "zoomAndPan"
        };
        var ariaProperties = {
          "aria-current": 0,
          "aria-details": 0,
          "aria-disabled": 0,
          "aria-hidden": 0,
          "aria-invalid": 0,
          "aria-keyshortcuts": 0,
          "aria-label": 0,
          "aria-roledescription": 0,
          "aria-autocomplete": 0,
          "aria-checked": 0,
          "aria-expanded": 0,
          "aria-haspopup": 0,
          "aria-level": 0,
          "aria-modal": 0,
          "aria-multiline": 0,
          "aria-multiselectable": 0,
          "aria-orientation": 0,
          "aria-placeholder": 0,
          "aria-pressed": 0,
          "aria-readonly": 0,
          "aria-required": 0,
          "aria-selected": 0,
          "aria-sort": 0,
          "aria-valuemax": 0,
          "aria-valuemin": 0,
          "aria-valuenow": 0,
          "aria-valuetext": 0,
          "aria-atomic": 0,
          "aria-busy": 0,
          "aria-live": 0,
          "aria-relevant": 0,
          "aria-dropeffect": 0,
          "aria-grabbed": 0,
          "aria-activedescendant": 0,
          "aria-colcount": 0,
          "aria-colindex": 0,
          "aria-colspan": 0,
          "aria-controls": 0,
          "aria-describedby": 0,
          "aria-errormessage": 0,
          "aria-flowto": 0,
          "aria-labelledby": 0,
          "aria-owns": 0,
          "aria-posinset": 0,
          "aria-rowcount": 0,
          "aria-rowindex": 0,
          "aria-rowspan": 0,
          "aria-setsize": 0
        };
        var warnedProperties = {};
        var rARIA = new RegExp("^(aria)-[" + ATTRIBUTE_NAME_CHAR + "]*$");
        var rARIACamel = new RegExp("^(aria)[A-Z][" + ATTRIBUTE_NAME_CHAR + "]*$");
        var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
        function validateProperty(tagName, name) {
          {
            if (hasOwnProperty$1.call(warnedProperties, name) && warnedProperties[name]) {
              return true;
            }
            if (rARIACamel.test(name)) {
              var ariaName = "aria-" + name.slice(4).toLowerCase();
              var correctName = ariaProperties.hasOwnProperty(ariaName) ? ariaName : null;
              if (correctName == null) {
                error("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", name);
                warnedProperties[name] = true;
                return true;
              }
              if (name !== correctName) {
                error("Invalid ARIA attribute `%s`. Did you mean `%s`?", name, correctName);
                warnedProperties[name] = true;
                return true;
              }
            }
            if (rARIA.test(name)) {
              var lowerCasedName = name.toLowerCase();
              var standardName = ariaProperties.hasOwnProperty(lowerCasedName) ? lowerCasedName : null;
              if (standardName == null) {
                warnedProperties[name] = true;
                return false;
              }
              if (name !== standardName) {
                error("Unknown ARIA attribute `%s`. Did you mean `%s`?", name, standardName);
                warnedProperties[name] = true;
                return true;
              }
            }
          }
          return true;
        }
        function warnInvalidARIAProps(type, props) {
          {
            var invalidProps = [];
            for (var key in props) {
              var isValid = validateProperty(type, key);
              if (!isValid) {
                invalidProps.push(key);
              }
            }
            var unknownPropString = invalidProps.map(function(prop) {
              return "`" + prop + "`";
            }).join(", ");
            if (invalidProps.length === 1) {
              error("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", unknownPropString, type);
            } else if (invalidProps.length > 1) {
              error("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", unknownPropString, type);
            }
          }
        }
        function validateProperties(type, props) {
          if (isCustomComponent(type, props)) {
            return;
          }
          warnInvalidARIAProps(type, props);
        }
        var didWarnValueNull = false;
        function validateProperties$1(type, props) {
          {
            if (type !== "input" && type !== "textarea" && type !== "select") {
              return;
            }
            if (props != null && props.value === null && !didWarnValueNull) {
              didWarnValueNull = true;
              if (type === "select" && props.multiple) {
                error("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", type);
              } else {
                error("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", type);
              }
            }
          }
        }
        var validateProperty$1 = function() {
        };
        {
          var warnedProperties$1 = {};
          var _hasOwnProperty = Object.prototype.hasOwnProperty;
          var EVENT_NAME_REGEX = /^on./;
          var INVALID_EVENT_NAME_REGEX = /^on[^A-Z]/;
          var rARIA$1 = new RegExp("^(aria)-[" + ATTRIBUTE_NAME_CHAR + "]*$");
          var rARIACamel$1 = new RegExp("^(aria)[A-Z][" + ATTRIBUTE_NAME_CHAR + "]*$");
          validateProperty$1 = function(tagName, name, value, eventRegistry) {
            if (_hasOwnProperty.call(warnedProperties$1, name) && warnedProperties$1[name]) {
              return true;
            }
            var lowerCasedName = name.toLowerCase();
            if (lowerCasedName === "onfocusin" || lowerCasedName === "onfocusout") {
              error("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React.");
              warnedProperties$1[name] = true;
              return true;
            }
            if (eventRegistry != null) {
              var registrationNameDependencies2 = eventRegistry.registrationNameDependencies, possibleRegistrationNames2 = eventRegistry.possibleRegistrationNames;
              if (registrationNameDependencies2.hasOwnProperty(name)) {
                return true;
              }
              var registrationName = possibleRegistrationNames2.hasOwnProperty(lowerCasedName) ? possibleRegistrationNames2[lowerCasedName] : null;
              if (registrationName != null) {
                error("Invalid event handler property `%s`. Did you mean `%s`?", name, registrationName);
                warnedProperties$1[name] = true;
                return true;
              }
              if (EVENT_NAME_REGEX.test(name)) {
                error("Unknown event handler property `%s`. It will be ignored.", name);
                warnedProperties$1[name] = true;
                return true;
              }
            } else if (EVENT_NAME_REGEX.test(name)) {
              if (INVALID_EVENT_NAME_REGEX.test(name)) {
                error("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", name);
              }
              warnedProperties$1[name] = true;
              return true;
            }
            if (rARIA$1.test(name) || rARIACamel$1.test(name)) {
              return true;
            }
            if (lowerCasedName === "innerhtml") {
              error("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`.");
              warnedProperties$1[name] = true;
              return true;
            }
            if (lowerCasedName === "aria") {
              error("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead.");
              warnedProperties$1[name] = true;
              return true;
            }
            if (lowerCasedName === "is" && value !== null && value !== void 0 && typeof value !== "string") {
              error("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof value);
              warnedProperties$1[name] = true;
              return true;
            }
            if (typeof value === "number" && isNaN(value)) {
              error("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", name);
              warnedProperties$1[name] = true;
              return true;
            }
            var propertyInfo = getPropertyInfo(name);
            var isReserved = propertyInfo !== null && propertyInfo.type === RESERVED;
            if (possibleStandardNames.hasOwnProperty(lowerCasedName)) {
              var standardName = possibleStandardNames[lowerCasedName];
              if (standardName !== name) {
                error("Invalid DOM property `%s`. Did you mean `%s`?", name, standardName);
                warnedProperties$1[name] = true;
                return true;
              }
            } else if (!isReserved && name !== lowerCasedName) {
              error("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", name, lowerCasedName);
              warnedProperties$1[name] = true;
              return true;
            }
            if (typeof value === "boolean" && shouldRemoveAttributeWithWarning(name, value, propertyInfo, false)) {
              if (value) {
                error('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', value, name, name, value, name);
              } else {
                error('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', value, name, name, value, name, name, name);
              }
              warnedProperties$1[name] = true;
              return true;
            }
            if (isReserved) {
              return true;
            }
            if (shouldRemoveAttributeWithWarning(name, value, propertyInfo, false)) {
              warnedProperties$1[name] = true;
              return false;
            }
            if ((value === "false" || value === "true") && propertyInfo !== null && propertyInfo.type === BOOLEAN) {
              error("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", value, name, value === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', name, value);
              warnedProperties$1[name] = true;
              return true;
            }
            return true;
          };
        }
        var warnUnknownProperties = function(type, props, eventRegistry) {
          {
            var unknownProps = [];
            for (var key in props) {
              var isValid = validateProperty$1(type, key, props[key], eventRegistry);
              if (!isValid) {
                unknownProps.push(key);
              }
            }
            var unknownPropString = unknownProps.map(function(prop) {
              return "`" + prop + "`";
            }).join(", ");
            if (unknownProps.length === 1) {
              error("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", unknownPropString, type);
            } else if (unknownProps.length > 1) {
              error("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", unknownPropString, type);
            }
          }
        };
        function validateProperties$2(type, props, eventRegistry) {
          if (isCustomComponent(type, props)) {
            return;
          }
          warnUnknownProperties(type, props, eventRegistry);
        }
        var IS_EVENT_HANDLE_NON_MANAGED_NODE = 1;
        var IS_NON_DELEGATED = 1 << 1;
        var IS_CAPTURE_PHASE = 1 << 2;
        var IS_REPLAYED = 1 << 4;
        var SHOULD_NOT_PROCESS_POLYFILL_EVENT_PLUGINS = IS_EVENT_HANDLE_NON_MANAGED_NODE | IS_NON_DELEGATED | IS_CAPTURE_PHASE;
        function getEventTarget(nativeEvent) {
          var target = nativeEvent.target || nativeEvent.srcElement || window;
          if (target.correspondingUseElement) {
            target = target.correspondingUseElement;
          }
          return target.nodeType === TEXT_NODE ? target.parentNode : target;
        }
        var restoreImpl = null;
        var restoreTarget = null;
        var restoreQueue = null;
        function restoreStateOfTarget(target) {
          var internalInstance = getInstanceFromNode(target);
          if (!internalInstance) {
            return;
          }
          if (!(typeof restoreImpl === "function")) {
            {
              throw Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
            }
          }
          var stateNode = internalInstance.stateNode;
          if (stateNode) {
            var _props = getFiberCurrentPropsFromNode(stateNode);
            restoreImpl(internalInstance.stateNode, internalInstance.type, _props);
          }
        }
        function setRestoreImplementation(impl) {
          restoreImpl = impl;
        }
        function enqueueStateRestore(target) {
          if (restoreTarget) {
            if (restoreQueue) {
              restoreQueue.push(target);
            } else {
              restoreQueue = [target];
            }
          } else {
            restoreTarget = target;
          }
        }
        function needsStateRestore() {
          return restoreTarget !== null || restoreQueue !== null;
        }
        function restoreStateIfNeeded() {
          if (!restoreTarget) {
            return;
          }
          var target = restoreTarget;
          var queuedTargets = restoreQueue;
          restoreTarget = null;
          restoreQueue = null;
          restoreStateOfTarget(target);
          if (queuedTargets) {
            for (var i4 = 0; i4 < queuedTargets.length; i4++) {
              restoreStateOfTarget(queuedTargets[i4]);
            }
          }
        }
        var batchedUpdatesImpl = function(fn, bookkeeping) {
          return fn(bookkeeping);
        };
        var discreteUpdatesImpl = function(fn, a3, b3, c3, d3) {
          return fn(a3, b3, c3, d3);
        };
        var flushDiscreteUpdatesImpl = function() {
        };
        var batchedEventUpdatesImpl = batchedUpdatesImpl;
        var isInsideEventHandler = false;
        var isBatchingEventUpdates = false;
        function finishEventHandler() {
          var controlledComponentsHavePendingUpdates = needsStateRestore();
          if (controlledComponentsHavePendingUpdates) {
            flushDiscreteUpdatesImpl();
            restoreStateIfNeeded();
          }
        }
        function batchedUpdates(fn, bookkeeping) {
          if (isInsideEventHandler) {
            return fn(bookkeeping);
          }
          isInsideEventHandler = true;
          try {
            return batchedUpdatesImpl(fn, bookkeeping);
          } finally {
            isInsideEventHandler = false;
            finishEventHandler();
          }
        }
        function batchedEventUpdates(fn, a3, b3) {
          if (isBatchingEventUpdates) {
            return fn(a3, b3);
          }
          isBatchingEventUpdates = true;
          try {
            return batchedEventUpdatesImpl(fn, a3, b3);
          } finally {
            isBatchingEventUpdates = false;
            finishEventHandler();
          }
        }
        function discreteUpdates(fn, a3, b3, c3, d3) {
          var prevIsInsideEventHandler = isInsideEventHandler;
          isInsideEventHandler = true;
          try {
            return discreteUpdatesImpl(fn, a3, b3, c3, d3);
          } finally {
            isInsideEventHandler = prevIsInsideEventHandler;
            if (!isInsideEventHandler) {
              finishEventHandler();
            }
          }
        }
        function flushDiscreteUpdatesIfNeeded(timeStamp) {
          {
            if (!isInsideEventHandler) {
              flushDiscreteUpdatesImpl();
            }
          }
        }
        function setBatchingImplementation(_batchedUpdatesImpl, _discreteUpdatesImpl, _flushDiscreteUpdatesImpl, _batchedEventUpdatesImpl) {
          batchedUpdatesImpl = _batchedUpdatesImpl;
          discreteUpdatesImpl = _discreteUpdatesImpl;
          flushDiscreteUpdatesImpl = _flushDiscreteUpdatesImpl;
          batchedEventUpdatesImpl = _batchedEventUpdatesImpl;
        }
        function isInteractive(tag) {
          return tag === "button" || tag === "input" || tag === "select" || tag === "textarea";
        }
        function shouldPreventMouseEvent(name, type, props) {
          switch (name) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
              return !!(props.disabled && isInteractive(type));
            default:
              return false;
          }
        }
        function getListener(inst, registrationName) {
          var stateNode = inst.stateNode;
          if (stateNode === null) {
            return null;
          }
          var props = getFiberCurrentPropsFromNode(stateNode);
          if (props === null) {
            return null;
          }
          var listener = props[registrationName];
          if (shouldPreventMouseEvent(registrationName, inst.type, props)) {
            return null;
          }
          if (!(!listener || typeof listener === "function")) {
            {
              throw Error("Expected `" + registrationName + "` listener to be a function, instead got a value of `" + typeof listener + "` type.");
            }
          }
          return listener;
        }
        var passiveBrowserEventsSupported = false;
        if (canUseDOM) {
          try {
            var options = {};
            Object.defineProperty(options, "passive", {
              get: function() {
                passiveBrowserEventsSupported = true;
              }
            });
            window.addEventListener("test", options, options);
            window.removeEventListener("test", options, options);
          } catch (e3) {
            passiveBrowserEventsSupported = false;
          }
        }
        function invokeGuardedCallbackProd(name, func, context, a3, b3, c3, d3, e3, f2) {
          var funcArgs = Array.prototype.slice.call(arguments, 3);
          try {
            func.apply(context, funcArgs);
          } catch (error2) {
            this.onError(error2);
          }
        }
        var invokeGuardedCallbackImpl = invokeGuardedCallbackProd;
        {
          if (typeof window !== "undefined" && typeof window.dispatchEvent === "function" && typeof document !== "undefined" && typeof document.createEvent === "function") {
            var fakeNode = document.createElement("react");
            invokeGuardedCallbackImpl = function invokeGuardedCallbackDev(name, func, context, a3, b3, c3, d3, e3, f2) {
              if (!(typeof document !== "undefined")) {
                {
                  throw Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
                }
              }
              var evt = document.createEvent("Event");
              var didCall = false;
              var didError = true;
              var windowEvent = window.event;
              var windowEventDescriptor = Object.getOwnPropertyDescriptor(window, "event");
              function restoreAfterDispatch() {
                fakeNode.removeEventListener(evtType, callCallback2, false);
                if (typeof window.event !== "undefined" && window.hasOwnProperty("event")) {
                  window.event = windowEvent;
                }
              }
              var funcArgs = Array.prototype.slice.call(arguments, 3);
              function callCallback2() {
                didCall = true;
                restoreAfterDispatch();
                func.apply(context, funcArgs);
                didError = false;
              }
              var error2;
              var didSetError = false;
              var isCrossOriginError = false;
              function handleWindowError(event) {
                error2 = event.error;
                didSetError = true;
                if (error2 === null && event.colno === 0 && event.lineno === 0) {
                  isCrossOriginError = true;
                }
                if (event.defaultPrevented) {
                  if (error2 != null && typeof error2 === "object") {
                    try {
                      error2._suppressLogging = true;
                    } catch (inner) {
                    }
                  }
                }
              }
              var evtType = "react-" + (name ? name : "invokeguardedcallback");
              window.addEventListener("error", handleWindowError);
              fakeNode.addEventListener(evtType, callCallback2, false);
              evt.initEvent(evtType, false, false);
              fakeNode.dispatchEvent(evt);
              if (windowEventDescriptor) {
                Object.defineProperty(window, "event", windowEventDescriptor);
              }
              if (didCall && didError) {
                if (!didSetError) {
                  error2 = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`);
                } else if (isCrossOriginError) {
                  error2 = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.");
                }
                this.onError(error2);
              }
              window.removeEventListener("error", handleWindowError);
              if (!didCall) {
                restoreAfterDispatch();
                return invokeGuardedCallbackProd.apply(this, arguments);
              }
            };
          }
        }
        var invokeGuardedCallbackImpl$1 = invokeGuardedCallbackImpl;
        var hasError = false;
        var caughtError = null;
        var hasRethrowError = false;
        var rethrowError = null;
        var reporter = {
          onError: function(error2) {
            hasError = true;
            caughtError = error2;
          }
        };
        function invokeGuardedCallback(name, func, context, a3, b3, c3, d3, e3, f2) {
          hasError = false;
          caughtError = null;
          invokeGuardedCallbackImpl$1.apply(reporter, arguments);
        }
        function invokeGuardedCallbackAndCatchFirstError(name, func, context, a3, b3, c3, d3, e3, f2) {
          invokeGuardedCallback.apply(this, arguments);
          if (hasError) {
            var error2 = clearCaughtError();
            if (!hasRethrowError) {
              hasRethrowError = true;
              rethrowError = error2;
            }
          }
        }
        function rethrowCaughtError() {
          if (hasRethrowError) {
            var error2 = rethrowError;
            hasRethrowError = false;
            rethrowError = null;
            throw error2;
          }
        }
        function hasCaughtError() {
          return hasError;
        }
        function clearCaughtError() {
          if (hasError) {
            var error2 = caughtError;
            hasError = false;
            caughtError = null;
            return error2;
          } else {
            {
              {
                throw Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
              }
            }
          }
        }
        function get(key) {
          return key._reactInternals;
        }
        function has(key) {
          return key._reactInternals !== void 0;
        }
        function set(key, value) {
          key._reactInternals = value;
        }
        var NoFlags = 0;
        var PerformedWork = 1;
        var Placement = 2;
        var Update = 4;
        var PlacementAndUpdate = 6;
        var Deletion = 8;
        var ContentReset = 16;
        var Callback = 32;
        var DidCapture = 64;
        var Ref = 128;
        var Snapshot = 256;
        var Passive = 512;
        var PassiveUnmountPendingDev = 8192;
        var Hydrating = 1024;
        var HydratingAndUpdate = 1028;
        var LifecycleEffectMask = 932;
        var HostEffectMask = 2047;
        var Incomplete = 2048;
        var ShouldCapture = 4096;
        var ForceUpdateForLegacySuspense = 16384;
        var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
        function getNearestMountedFiber(fiber) {
          var node = fiber;
          var nearestMounted = fiber;
          if (!fiber.alternate) {
            var nextNode = node;
            do {
              node = nextNode;
              if ((node.flags & (Placement | Hydrating)) !== NoFlags) {
                nearestMounted = node.return;
              }
              nextNode = node.return;
            } while (nextNode);
          } else {
            while (node.return) {
              node = node.return;
            }
          }
          if (node.tag === HostRoot) {
            return nearestMounted;
          }
          return null;
        }
        function getSuspenseInstanceFromFiber(fiber) {
          if (fiber.tag === SuspenseComponent) {
            var suspenseState = fiber.memoizedState;
            if (suspenseState === null) {
              var current2 = fiber.alternate;
              if (current2 !== null) {
                suspenseState = current2.memoizedState;
              }
            }
            if (suspenseState !== null) {
              return suspenseState.dehydrated;
            }
          }
          return null;
        }
        function getContainerFromFiber(fiber) {
          return fiber.tag === HostRoot ? fiber.stateNode.containerInfo : null;
        }
        function isFiberMounted(fiber) {
          return getNearestMountedFiber(fiber) === fiber;
        }
        function isMounted(component) {
          {
            var owner = ReactCurrentOwner.current;
            if (owner !== null && owner.tag === ClassComponent) {
              var ownerFiber = owner;
              var instance = ownerFiber.stateNode;
              if (!instance._warnedAboutRefsInRender) {
                error("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", getComponentName(ownerFiber.type) || "A component");
              }
              instance._warnedAboutRefsInRender = true;
            }
          }
          var fiber = get(component);
          if (!fiber) {
            return false;
          }
          return getNearestMountedFiber(fiber) === fiber;
        }
        function assertIsMounted(fiber) {
          if (!(getNearestMountedFiber(fiber) === fiber)) {
            {
              throw Error("Unable to find node on an unmounted component.");
            }
          }
        }
        function findCurrentFiberUsingSlowPath(fiber) {
          var alternate = fiber.alternate;
          if (!alternate) {
            var nearestMounted = getNearestMountedFiber(fiber);
            if (!(nearestMounted !== null)) {
              {
                throw Error("Unable to find node on an unmounted component.");
              }
            }
            if (nearestMounted !== fiber) {
              return null;
            }
            return fiber;
          }
          var a3 = fiber;
          var b3 = alternate;
          while (true) {
            var parentA = a3.return;
            if (parentA === null) {
              break;
            }
            var parentB = parentA.alternate;
            if (parentB === null) {
              var nextParent = parentA.return;
              if (nextParent !== null) {
                a3 = b3 = nextParent;
                continue;
              }
              break;
            }
            if (parentA.child === parentB.child) {
              var child = parentA.child;
              while (child) {
                if (child === a3) {
                  assertIsMounted(parentA);
                  return fiber;
                }
                if (child === b3) {
                  assertIsMounted(parentA);
                  return alternate;
                }
                child = child.sibling;
              }
              {
                {
                  throw Error("Unable to find node on an unmounted component.");
                }
              }
            }
            if (a3.return !== b3.return) {
              a3 = parentA;
              b3 = parentB;
            } else {
              var didFindChild = false;
              var _child = parentA.child;
              while (_child) {
                if (_child === a3) {
                  didFindChild = true;
                  a3 = parentA;
                  b3 = parentB;
                  break;
                }
                if (_child === b3) {
                  didFindChild = true;
                  b3 = parentA;
                  a3 = parentB;
                  break;
                }
                _child = _child.sibling;
              }
              if (!didFindChild) {
                _child = parentB.child;
                while (_child) {
                  if (_child === a3) {
                    didFindChild = true;
                    a3 = parentB;
                    b3 = parentA;
                    break;
                  }
                  if (_child === b3) {
                    didFindChild = true;
                    b3 = parentB;
                    a3 = parentA;
                    break;
                  }
                  _child = _child.sibling;
                }
                if (!didFindChild) {
                  {
                    throw Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
                  }
                }
              }
            }
            if (!(a3.alternate === b3)) {
              {
                throw Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
              }
            }
          }
          if (!(a3.tag === HostRoot)) {
            {
              throw Error("Unable to find node on an unmounted component.");
            }
          }
          if (a3.stateNode.current === a3) {
            return fiber;
          }
          return alternate;
        }
        function findCurrentHostFiber(parent) {
          var currentParent = findCurrentFiberUsingSlowPath(parent);
          if (!currentParent) {
            return null;
          }
          var node = currentParent;
          while (true) {
            if (node.tag === HostComponent || node.tag === HostText) {
              return node;
            } else if (node.child) {
              node.child.return = node;
              node = node.child;
              continue;
            }
            if (node === currentParent) {
              return null;
            }
            while (!node.sibling) {
              if (!node.return || node.return === currentParent) {
                return null;
              }
              node = node.return;
            }
            node.sibling.return = node.return;
            node = node.sibling;
          }
          return null;
        }
        function findCurrentHostFiberWithNoPortals(parent) {
          var currentParent = findCurrentFiberUsingSlowPath(parent);
          if (!currentParent) {
            return null;
          }
          var node = currentParent;
          while (true) {
            if (node.tag === HostComponent || node.tag === HostText || enableFundamentalAPI) {
              return node;
            } else if (node.child && node.tag !== HostPortal) {
              node.child.return = node;
              node = node.child;
              continue;
            }
            if (node === currentParent) {
              return null;
            }
            while (!node.sibling) {
              if (!node.return || node.return === currentParent) {
                return null;
              }
              node = node.return;
            }
            node.sibling.return = node.return;
            node = node.sibling;
          }
          return null;
        }
        function doesFiberContain(parentFiber, childFiber) {
          var node = childFiber;
          var parentFiberAlternate = parentFiber.alternate;
          while (node !== null) {
            if (node === parentFiber || node === parentFiberAlternate) {
              return true;
            }
            node = node.return;
          }
          return false;
        }
        var attemptUserBlockingHydration;
        function setAttemptUserBlockingHydration(fn) {
          attemptUserBlockingHydration = fn;
        }
        var attemptContinuousHydration;
        function setAttemptContinuousHydration(fn) {
          attemptContinuousHydration = fn;
        }
        var attemptHydrationAtCurrentPriority;
        function setAttemptHydrationAtCurrentPriority(fn) {
          attemptHydrationAtCurrentPriority = fn;
        }
        var attemptHydrationAtPriority;
        function setAttemptHydrationAtPriority(fn) {
          attemptHydrationAtPriority = fn;
        }
        var hasScheduledReplayAttempt = false;
        var queuedDiscreteEvents = [];
        var queuedFocus = null;
        var queuedDrag = null;
        var queuedMouse = null;
        var queuedPointers = new Map();
        var queuedPointerCaptures = new Map();
        var queuedExplicitHydrationTargets = [];
        function hasQueuedDiscreteEvents() {
          return queuedDiscreteEvents.length > 0;
        }
        var discreteReplayableEvents = [
          "mousedown",
          "mouseup",
          "touchcancel",
          "touchend",
          "touchstart",
          "auxclick",
          "dblclick",
          "pointercancel",
          "pointerdown",
          "pointerup",
          "dragend",
          "dragstart",
          "drop",
          "compositionend",
          "compositionstart",
          "keydown",
          "keypress",
          "keyup",
          "input",
          "textInput",
          "copy",
          "cut",
          "paste",
          "click",
          "change",
          "contextmenu",
          "reset",
          "submit"
        ];
        function isReplayableDiscreteEvent(eventType) {
          return discreteReplayableEvents.indexOf(eventType) > -1;
        }
        function createQueuedReplayableEvent(blockedOn, domEventName, eventSystemFlags, targetContainer, nativeEvent) {
          return {
            blockedOn,
            domEventName,
            eventSystemFlags: eventSystemFlags | IS_REPLAYED,
            nativeEvent,
            targetContainers: [targetContainer]
          };
        }
        function queueDiscreteEvent(blockedOn, domEventName, eventSystemFlags, targetContainer, nativeEvent) {
          var queuedEvent = createQueuedReplayableEvent(blockedOn, domEventName, eventSystemFlags, targetContainer, nativeEvent);
          queuedDiscreteEvents.push(queuedEvent);
        }
        function clearIfContinuousEvent(domEventName, nativeEvent) {
          switch (domEventName) {
            case "focusin":
            case "focusout":
              queuedFocus = null;
              break;
            case "dragenter":
            case "dragleave":
              queuedDrag = null;
              break;
            case "mouseover":
            case "mouseout":
              queuedMouse = null;
              break;
            case "pointerover":
            case "pointerout": {
              var pointerId = nativeEvent.pointerId;
              queuedPointers.delete(pointerId);
              break;
            }
            case "gotpointercapture":
            case "lostpointercapture": {
              var _pointerId = nativeEvent.pointerId;
              queuedPointerCaptures.delete(_pointerId);
              break;
            }
          }
        }
        function accumulateOrCreateContinuousQueuedReplayableEvent(existingQueuedEvent, blockedOn, domEventName, eventSystemFlags, targetContainer, nativeEvent) {
          if (existingQueuedEvent === null || existingQueuedEvent.nativeEvent !== nativeEvent) {
            var queuedEvent = createQueuedReplayableEvent(blockedOn, domEventName, eventSystemFlags, targetContainer, nativeEvent);
            if (blockedOn !== null) {
              var _fiber2 = getInstanceFromNode(blockedOn);
              if (_fiber2 !== null) {
                attemptContinuousHydration(_fiber2);
              }
            }
            return queuedEvent;
          }
          existingQueuedEvent.eventSystemFlags |= eventSystemFlags;
          var targetContainers = existingQueuedEvent.targetContainers;
          if (targetContainer !== null && targetContainers.indexOf(targetContainer) === -1) {
            targetContainers.push(targetContainer);
          }
          return existingQueuedEvent;
        }
        function queueIfContinuousEvent(blockedOn, domEventName, eventSystemFlags, targetContainer, nativeEvent) {
          switch (domEventName) {
            case "focusin": {
              var focusEvent = nativeEvent;
              queuedFocus = accumulateOrCreateContinuousQueuedReplayableEvent(queuedFocus, blockedOn, domEventName, eventSystemFlags, targetContainer, focusEvent);
              return true;
            }
            case "dragenter": {
              var dragEvent = nativeEvent;
              queuedDrag = accumulateOrCreateContinuousQueuedReplayableEvent(queuedDrag, blockedOn, domEventName, eventSystemFlags, targetContainer, dragEvent);
              return true;
            }
            case "mouseover": {
              var mouseEvent = nativeEvent;
              queuedMouse = accumulateOrCreateContinuousQueuedReplayableEvent(queuedMouse, blockedOn, domEventName, eventSystemFlags, targetContainer, mouseEvent);
              return true;
            }
            case "pointerover": {
              var pointerEvent = nativeEvent;
              var pointerId = pointerEvent.pointerId;
              queuedPointers.set(pointerId, accumulateOrCreateContinuousQueuedReplayableEvent(queuedPointers.get(pointerId) || null, blockedOn, domEventName, eventSystemFlags, targetContainer, pointerEvent));
              return true;
            }
            case "gotpointercapture": {
              var _pointerEvent = nativeEvent;
              var _pointerId2 = _pointerEvent.pointerId;
              queuedPointerCaptures.set(_pointerId2, accumulateOrCreateContinuousQueuedReplayableEvent(queuedPointerCaptures.get(_pointerId2) || null, blockedOn, domEventName, eventSystemFlags, targetContainer, _pointerEvent));
              return true;
            }
          }
          return false;
        }
        function attemptExplicitHydrationTarget(queuedTarget) {
          var targetInst = getClosestInstanceFromNode(queuedTarget.target);
          if (targetInst !== null) {
            var nearestMounted = getNearestMountedFiber(targetInst);
            if (nearestMounted !== null) {
              var tag = nearestMounted.tag;
              if (tag === SuspenseComponent) {
                var instance = getSuspenseInstanceFromFiber(nearestMounted);
                if (instance !== null) {
                  queuedTarget.blockedOn = instance;
                  attemptHydrationAtPriority(queuedTarget.lanePriority, function() {
                    Scheduler.unstable_runWithPriority(queuedTarget.priority, function() {
                      attemptHydrationAtCurrentPriority(nearestMounted);
                    });
                  });
                  return;
                }
              } else if (tag === HostRoot) {
                var root2 = nearestMounted.stateNode;
                if (root2.hydrate) {
                  queuedTarget.blockedOn = getContainerFromFiber(nearestMounted);
                  return;
                }
              }
            }
          }
          queuedTarget.blockedOn = null;
        }
        function attemptReplayContinuousQueuedEvent(queuedEvent) {
          if (queuedEvent.blockedOn !== null) {
            return false;
          }
          var targetContainers = queuedEvent.targetContainers;
          while (targetContainers.length > 0) {
            var targetContainer = targetContainers[0];
            var nextBlockedOn = attemptToDispatchEvent(queuedEvent.domEventName, queuedEvent.eventSystemFlags, targetContainer, queuedEvent.nativeEvent);
            if (nextBlockedOn !== null) {
              var _fiber3 = getInstanceFromNode(nextBlockedOn);
              if (_fiber3 !== null) {
                attemptContinuousHydration(_fiber3);
              }
              queuedEvent.blockedOn = nextBlockedOn;
              return false;
            }
            targetContainers.shift();
          }
          return true;
        }
        function attemptReplayContinuousQueuedEventInMap(queuedEvent, key, map) {
          if (attemptReplayContinuousQueuedEvent(queuedEvent)) {
            map.delete(key);
          }
        }
        function replayUnblockedEvents() {
          hasScheduledReplayAttempt = false;
          while (queuedDiscreteEvents.length > 0) {
            var nextDiscreteEvent = queuedDiscreteEvents[0];
            if (nextDiscreteEvent.blockedOn !== null) {
              var _fiber4 = getInstanceFromNode(nextDiscreteEvent.blockedOn);
              if (_fiber4 !== null) {
                attemptUserBlockingHydration(_fiber4);
              }
              break;
            }
            var targetContainers = nextDiscreteEvent.targetContainers;
            while (targetContainers.length > 0) {
              var targetContainer = targetContainers[0];
              var nextBlockedOn = attemptToDispatchEvent(nextDiscreteEvent.domEventName, nextDiscreteEvent.eventSystemFlags, targetContainer, nextDiscreteEvent.nativeEvent);
              if (nextBlockedOn !== null) {
                nextDiscreteEvent.blockedOn = nextBlockedOn;
                break;
              }
              targetContainers.shift();
            }
            if (nextDiscreteEvent.blockedOn === null) {
              queuedDiscreteEvents.shift();
            }
          }
          if (queuedFocus !== null && attemptReplayContinuousQueuedEvent(queuedFocus)) {
            queuedFocus = null;
          }
          if (queuedDrag !== null && attemptReplayContinuousQueuedEvent(queuedDrag)) {
            queuedDrag = null;
          }
          if (queuedMouse !== null && attemptReplayContinuousQueuedEvent(queuedMouse)) {
            queuedMouse = null;
          }
          queuedPointers.forEach(attemptReplayContinuousQueuedEventInMap);
          queuedPointerCaptures.forEach(attemptReplayContinuousQueuedEventInMap);
        }
        function scheduleCallbackIfUnblocked(queuedEvent, unblocked) {
          if (queuedEvent.blockedOn === unblocked) {
            queuedEvent.blockedOn = null;
            if (!hasScheduledReplayAttempt) {
              hasScheduledReplayAttempt = true;
              Scheduler.unstable_scheduleCallback(Scheduler.unstable_NormalPriority, replayUnblockedEvents);
            }
          }
        }
        function retryIfBlockedOn(unblocked) {
          if (queuedDiscreteEvents.length > 0) {
            scheduleCallbackIfUnblocked(queuedDiscreteEvents[0], unblocked);
            for (var i4 = 1; i4 < queuedDiscreteEvents.length; i4++) {
              var queuedEvent = queuedDiscreteEvents[i4];
              if (queuedEvent.blockedOn === unblocked) {
                queuedEvent.blockedOn = null;
              }
            }
          }
          if (queuedFocus !== null) {
            scheduleCallbackIfUnblocked(queuedFocus, unblocked);
          }
          if (queuedDrag !== null) {
            scheduleCallbackIfUnblocked(queuedDrag, unblocked);
          }
          if (queuedMouse !== null) {
            scheduleCallbackIfUnblocked(queuedMouse, unblocked);
          }
          var unblock = function(queuedEvent2) {
            return scheduleCallbackIfUnblocked(queuedEvent2, unblocked);
          };
          queuedPointers.forEach(unblock);
          queuedPointerCaptures.forEach(unblock);
          for (var _i = 0; _i < queuedExplicitHydrationTargets.length; _i++) {
            var queuedTarget = queuedExplicitHydrationTargets[_i];
            if (queuedTarget.blockedOn === unblocked) {
              queuedTarget.blockedOn = null;
            }
          }
          while (queuedExplicitHydrationTargets.length > 0) {
            var nextExplicitTarget = queuedExplicitHydrationTargets[0];
            if (nextExplicitTarget.blockedOn !== null) {
              break;
            } else {
              attemptExplicitHydrationTarget(nextExplicitTarget);
              if (nextExplicitTarget.blockedOn === null) {
                queuedExplicitHydrationTargets.shift();
              }
            }
          }
        }
        var DiscreteEvent = 0;
        var UserBlockingEvent = 1;
        var ContinuousEvent = 2;
        function makePrefixMap(styleProp, eventName) {
          var prefixes2 = {};
          prefixes2[styleProp.toLowerCase()] = eventName.toLowerCase();
          prefixes2["Webkit" + styleProp] = "webkit" + eventName;
          prefixes2["Moz" + styleProp] = "moz" + eventName;
          return prefixes2;
        }
        var vendorPrefixes = {
          animationend: makePrefixMap("Animation", "AnimationEnd"),
          animationiteration: makePrefixMap("Animation", "AnimationIteration"),
          animationstart: makePrefixMap("Animation", "AnimationStart"),
          transitionend: makePrefixMap("Transition", "TransitionEnd")
        };
        var prefixedEventNames = {};
        var style = {};
        if (canUseDOM) {
          style = document.createElement("div").style;
          if (!("AnimationEvent" in window)) {
            delete vendorPrefixes.animationend.animation;
            delete vendorPrefixes.animationiteration.animation;
            delete vendorPrefixes.animationstart.animation;
          }
          if (!("TransitionEvent" in window)) {
            delete vendorPrefixes.transitionend.transition;
          }
        }
        function getVendorPrefixedEventName(eventName) {
          if (prefixedEventNames[eventName]) {
            return prefixedEventNames[eventName];
          } else if (!vendorPrefixes[eventName]) {
            return eventName;
          }
          var prefixMap = vendorPrefixes[eventName];
          for (var styleProp in prefixMap) {
            if (prefixMap.hasOwnProperty(styleProp) && styleProp in style) {
              return prefixedEventNames[eventName] = prefixMap[styleProp];
            }
          }
          return eventName;
        }
        var ANIMATION_END = getVendorPrefixedEventName("animationend");
        var ANIMATION_ITERATION = getVendorPrefixedEventName("animationiteration");
        var ANIMATION_START = getVendorPrefixedEventName("animationstart");
        var TRANSITION_END = getVendorPrefixedEventName("transitionend");
        var topLevelEventsToReactNames = new Map();
        var eventPriorities = new Map();
        var discreteEventPairsForSimpleEventPlugin = [
          "cancel",
          "cancel",
          "click",
          "click",
          "close",
          "close",
          "contextmenu",
          "contextMenu",
          "copy",
          "copy",
          "cut",
          "cut",
          "auxclick",
          "auxClick",
          "dblclick",
          "doubleClick",
          "dragend",
          "dragEnd",
          "dragstart",
          "dragStart",
          "drop",
          "drop",
          "focusin",
          "focus",
          "focusout",
          "blur",
          "input",
          "input",
          "invalid",
          "invalid",
          "keydown",
          "keyDown",
          "keypress",
          "keyPress",
          "keyup",
          "keyUp",
          "mousedown",
          "mouseDown",
          "mouseup",
          "mouseUp",
          "paste",
          "paste",
          "pause",
          "pause",
          "play",
          "play",
          "pointercancel",
          "pointerCancel",
          "pointerdown",
          "pointerDown",
          "pointerup",
          "pointerUp",
          "ratechange",
          "rateChange",
          "reset",
          "reset",
          "seeked",
          "seeked",
          "submit",
          "submit",
          "touchcancel",
          "touchCancel",
          "touchend",
          "touchEnd",
          "touchstart",
          "touchStart",
          "volumechange",
          "volumeChange"
        ];
        var otherDiscreteEvents = ["change", "selectionchange", "textInput", "compositionstart", "compositionend", "compositionupdate"];
        var userBlockingPairsForSimpleEventPlugin = ["drag", "drag", "dragenter", "dragEnter", "dragexit", "dragExit", "dragleave", "dragLeave", "dragover", "dragOver", "mousemove", "mouseMove", "mouseout", "mouseOut", "mouseover", "mouseOver", "pointermove", "pointerMove", "pointerout", "pointerOut", "pointerover", "pointerOver", "scroll", "scroll", "toggle", "toggle", "touchmove", "touchMove", "wheel", "wheel"];
        var continuousPairsForSimpleEventPlugin = ["abort", "abort", ANIMATION_END, "animationEnd", ANIMATION_ITERATION, "animationIteration", ANIMATION_START, "animationStart", "canplay", "canPlay", "canplaythrough", "canPlayThrough", "durationchange", "durationChange", "emptied", "emptied", "encrypted", "encrypted", "ended", "ended", "error", "error", "gotpointercapture", "gotPointerCapture", "load", "load", "loadeddata", "loadedData", "loadedmetadata", "loadedMetadata", "loadstart", "loadStart", "lostpointercapture", "lostPointerCapture", "playing", "playing", "progress", "progress", "seeking", "seeking", "stalled", "stalled", "suspend", "suspend", "timeupdate", "timeUpdate", TRANSITION_END, "transitionEnd", "waiting", "waiting"];
        function registerSimplePluginEventsAndSetTheirPriorities(eventTypes, priority) {
          for (var i4 = 0; i4 < eventTypes.length; i4 += 2) {
            var topEvent = eventTypes[i4];
            var event = eventTypes[i4 + 1];
            var capitalizedEvent = event[0].toUpperCase() + event.slice(1);
            var reactName = "on" + capitalizedEvent;
            eventPriorities.set(topEvent, priority);
            topLevelEventsToReactNames.set(topEvent, reactName);
            registerTwoPhaseEvent(reactName, [topEvent]);
          }
        }
        function setEventPriorities(eventTypes, priority) {
          for (var i4 = 0; i4 < eventTypes.length; i4++) {
            eventPriorities.set(eventTypes[i4], priority);
          }
        }
        function getEventPriorityForPluginSystem(domEventName) {
          var priority = eventPriorities.get(domEventName);
          return priority === void 0 ? ContinuousEvent : priority;
        }
        function registerSimpleEvents() {
          registerSimplePluginEventsAndSetTheirPriorities(discreteEventPairsForSimpleEventPlugin, DiscreteEvent);
          registerSimplePluginEventsAndSetTheirPriorities(userBlockingPairsForSimpleEventPlugin, UserBlockingEvent);
          registerSimplePluginEventsAndSetTheirPriorities(continuousPairsForSimpleEventPlugin, ContinuousEvent);
          setEventPriorities(otherDiscreteEvents, DiscreteEvent);
        }
        var Scheduler_now = Scheduler.unstable_now;
        {
          if (!(tracing.__interactionsRef != null && tracing.__interactionsRef.current != null)) {
            {
              throw Error("It is not supported to run the profiling version of a renderer (for example, `react-dom/profiling`) without also replacing the `scheduler/tracing` module with `scheduler/tracing-profiling`. Your bundler might have a setting for aliasing both modules. Learn more at https://reactjs.org/link/profiling");
            }
          }
        }
        var ImmediatePriority = 99;
        var UserBlockingPriority = 98;
        var NormalPriority = 97;
        var LowPriority = 96;
        var IdlePriority = 95;
        var NoPriority = 90;
        var initialTimeMs = Scheduler_now();
        var SyncLanePriority = 15;
        var SyncBatchedLanePriority = 14;
        var InputDiscreteHydrationLanePriority = 13;
        var InputDiscreteLanePriority = 12;
        var InputContinuousHydrationLanePriority = 11;
        var InputContinuousLanePriority = 10;
        var DefaultHydrationLanePriority = 9;
        var DefaultLanePriority = 8;
        var TransitionHydrationPriority = 7;
        var TransitionPriority = 6;
        var RetryLanePriority = 5;
        var SelectiveHydrationLanePriority = 4;
        var IdleHydrationLanePriority = 3;
        var IdleLanePriority = 2;
        var OffscreenLanePriority = 1;
        var NoLanePriority = 0;
        var TotalLanes = 31;
        var NoLanes = 0;
        var NoLane = 0;
        var SyncLane = 1;
        var SyncBatchedLane = 2;
        var InputDiscreteHydrationLane = 4;
        var InputDiscreteLanes = 24;
        var InputContinuousHydrationLane = 32;
        var InputContinuousLanes = 192;
        var DefaultHydrationLane = 256;
        var DefaultLanes = 3584;
        var TransitionHydrationLane = 4096;
        var TransitionLanes = 4186112;
        var RetryLanes = 62914560;
        var SomeRetryLane = 33554432;
        var SelectiveHydrationLane = 67108864;
        var NonIdleLanes = 134217727;
        var IdleHydrationLane = 134217728;
        var IdleLanes = 805306368;
        var OffscreenLane = 1073741824;
        var NoTimestamp = -1;
        function setCurrentUpdateLanePriority(newLanePriority) {
        }
        var return_highestLanePriority = DefaultLanePriority;
        function getHighestPriorityLanes(lanes) {
          if ((SyncLane & lanes) !== NoLanes) {
            return_highestLanePriority = SyncLanePriority;
            return SyncLane;
          }
          if ((SyncBatchedLane & lanes) !== NoLanes) {
            return_highestLanePriority = SyncBatchedLanePriority;
            return SyncBatchedLane;
          }
          if ((InputDiscreteHydrationLane & lanes) !== NoLanes) {
            return_highestLanePriority = InputDiscreteHydrationLanePriority;
            return InputDiscreteHydrationLane;
          }
          var inputDiscreteLanes = InputDiscreteLanes & lanes;
          if (inputDiscreteLanes !== NoLanes) {
            return_highestLanePriority = InputDiscreteLanePriority;
            return inputDiscreteLanes;
          }
          if ((lanes & InputContinuousHydrationLane) !== NoLanes) {
            return_highestLanePriority = InputContinuousHydrationLanePriority;
            return InputContinuousHydrationLane;
          }
          var inputContinuousLanes = InputContinuousLanes & lanes;
          if (inputContinuousLanes !== NoLanes) {
            return_highestLanePriority = InputContinuousLanePriority;
            return inputContinuousLanes;
          }
          if ((lanes & DefaultHydrationLane) !== NoLanes) {
            return_highestLanePriority = DefaultHydrationLanePriority;
            return DefaultHydrationLane;
          }
          var defaultLanes = DefaultLanes & lanes;
          if (defaultLanes !== NoLanes) {
            return_highestLanePriority = DefaultLanePriority;
            return defaultLanes;
          }
          if ((lanes & TransitionHydrationLane) !== NoLanes) {
            return_highestLanePriority = TransitionHydrationPriority;
            return TransitionHydrationLane;
          }
          var transitionLanes = TransitionLanes & lanes;
          if (transitionLanes !== NoLanes) {
            return_highestLanePriority = TransitionPriority;
            return transitionLanes;
          }
          var retryLanes = RetryLanes & lanes;
          if (retryLanes !== NoLanes) {
            return_highestLanePriority = RetryLanePriority;
            return retryLanes;
          }
          if (lanes & SelectiveHydrationLane) {
            return_highestLanePriority = SelectiveHydrationLanePriority;
            return SelectiveHydrationLane;
          }
          if ((lanes & IdleHydrationLane) !== NoLanes) {
            return_highestLanePriority = IdleHydrationLanePriority;
            return IdleHydrationLane;
          }
          var idleLanes = IdleLanes & lanes;
          if (idleLanes !== NoLanes) {
            return_highestLanePriority = IdleLanePriority;
            return idleLanes;
          }
          if ((OffscreenLane & lanes) !== NoLanes) {
            return_highestLanePriority = OffscreenLanePriority;
            return OffscreenLane;
          }
          {
            error("Should have found matching lanes. This is a bug in React.");
          }
          return_highestLanePriority = DefaultLanePriority;
          return lanes;
        }
        function schedulerPriorityToLanePriority(schedulerPriorityLevel) {
          switch (schedulerPriorityLevel) {
            case ImmediatePriority:
              return SyncLanePriority;
            case UserBlockingPriority:
              return InputContinuousLanePriority;
            case NormalPriority:
            case LowPriority:
              return DefaultLanePriority;
            case IdlePriority:
              return IdleLanePriority;
            default:
              return NoLanePriority;
          }
        }
        function lanePriorityToSchedulerPriority(lanePriority) {
          switch (lanePriority) {
            case SyncLanePriority:
            case SyncBatchedLanePriority:
              return ImmediatePriority;
            case InputDiscreteHydrationLanePriority:
            case InputDiscreteLanePriority:
            case InputContinuousHydrationLanePriority:
            case InputContinuousLanePriority:
              return UserBlockingPriority;
            case DefaultHydrationLanePriority:
            case DefaultLanePriority:
            case TransitionHydrationPriority:
            case TransitionPriority:
            case SelectiveHydrationLanePriority:
            case RetryLanePriority:
              return NormalPriority;
            case IdleHydrationLanePriority:
            case IdleLanePriority:
            case OffscreenLanePriority:
              return IdlePriority;
            case NoLanePriority:
              return NoPriority;
            default: {
              {
                throw Error("Invalid update priority: " + lanePriority + ". This is a bug in React.");
              }
            }
          }
        }
        function getNextLanes(root2, wipLanes) {
          var pendingLanes = root2.pendingLanes;
          if (pendingLanes === NoLanes) {
            return_highestLanePriority = NoLanePriority;
            return NoLanes;
          }
          var nextLanes = NoLanes;
          var nextLanePriority = NoLanePriority;
          var expiredLanes = root2.expiredLanes;
          var suspendedLanes = root2.suspendedLanes;
          var pingedLanes = root2.pingedLanes;
          if (expiredLanes !== NoLanes) {
            nextLanes = expiredLanes;
            nextLanePriority = return_highestLanePriority = SyncLanePriority;
          } else {
            var nonIdlePendingLanes = pendingLanes & NonIdleLanes;
            if (nonIdlePendingLanes !== NoLanes) {
              var nonIdleUnblockedLanes = nonIdlePendingLanes & ~suspendedLanes;
              if (nonIdleUnblockedLanes !== NoLanes) {
                nextLanes = getHighestPriorityLanes(nonIdleUnblockedLanes);
                nextLanePriority = return_highestLanePriority;
              } else {
                var nonIdlePingedLanes = nonIdlePendingLanes & pingedLanes;
                if (nonIdlePingedLanes !== NoLanes) {
                  nextLanes = getHighestPriorityLanes(nonIdlePingedLanes);
                  nextLanePriority = return_highestLanePriority;
                }
              }
            } else {
              var unblockedLanes = pendingLanes & ~suspendedLanes;
              if (unblockedLanes !== NoLanes) {
                nextLanes = getHighestPriorityLanes(unblockedLanes);
                nextLanePriority = return_highestLanePriority;
              } else {
                if (pingedLanes !== NoLanes) {
                  nextLanes = getHighestPriorityLanes(pingedLanes);
                  nextLanePriority = return_highestLanePriority;
                }
              }
            }
          }
          if (nextLanes === NoLanes) {
            return NoLanes;
          }
          nextLanes = pendingLanes & getEqualOrHigherPriorityLanes(nextLanes);
          if (wipLanes !== NoLanes && wipLanes !== nextLanes && (wipLanes & suspendedLanes) === NoLanes) {
            getHighestPriorityLanes(wipLanes);
            var wipLanePriority = return_highestLanePriority;
            if (nextLanePriority <= wipLanePriority) {
              return wipLanes;
            } else {
              return_highestLanePriority = nextLanePriority;
            }
          }
          var entangledLanes = root2.entangledLanes;
          if (entangledLanes !== NoLanes) {
            var entanglements = root2.entanglements;
            var lanes = nextLanes & entangledLanes;
            while (lanes > 0) {
              var index3 = pickArbitraryLaneIndex(lanes);
              var lane = 1 << index3;
              nextLanes |= entanglements[index3];
              lanes &= ~lane;
            }
          }
          return nextLanes;
        }
        function getMostRecentEventTime(root2, lanes) {
          var eventTimes = root2.eventTimes;
          var mostRecentEventTime = NoTimestamp;
          while (lanes > 0) {
            var index3 = pickArbitraryLaneIndex(lanes);
            var lane = 1 << index3;
            var eventTime = eventTimes[index3];
            if (eventTime > mostRecentEventTime) {
              mostRecentEventTime = eventTime;
            }
            lanes &= ~lane;
          }
          return mostRecentEventTime;
        }
        function computeExpirationTime(lane, currentTime) {
          getHighestPriorityLanes(lane);
          var priority = return_highestLanePriority;
          if (priority >= InputContinuousLanePriority) {
            return currentTime + 250;
          } else if (priority >= TransitionPriority) {
            return currentTime + 5e3;
          } else {
            return NoTimestamp;
          }
        }
        function markStarvedLanesAsExpired(root2, currentTime) {
          var pendingLanes = root2.pendingLanes;
          var suspendedLanes = root2.suspendedLanes;
          var pingedLanes = root2.pingedLanes;
          var expirationTimes = root2.expirationTimes;
          var lanes = pendingLanes;
          while (lanes > 0) {
            var index3 = pickArbitraryLaneIndex(lanes);
            var lane = 1 << index3;
            var expirationTime = expirationTimes[index3];
            if (expirationTime === NoTimestamp) {
              if ((lane & suspendedLanes) === NoLanes || (lane & pingedLanes) !== NoLanes) {
                expirationTimes[index3] = computeExpirationTime(lane, currentTime);
              }
            } else if (expirationTime <= currentTime) {
              root2.expiredLanes |= lane;
            }
            lanes &= ~lane;
          }
        }
        function getLanesToRetrySynchronouslyOnError(root2) {
          var everythingButOffscreen = root2.pendingLanes & ~OffscreenLane;
          if (everythingButOffscreen !== NoLanes) {
            return everythingButOffscreen;
          }
          if (everythingButOffscreen & OffscreenLane) {
            return OffscreenLane;
          }
          return NoLanes;
        }
        function returnNextLanesPriority() {
          return return_highestLanePriority;
        }
        function includesNonIdleWork(lanes) {
          return (lanes & NonIdleLanes) !== NoLanes;
        }
        function includesOnlyRetries(lanes) {
          return (lanes & RetryLanes) === lanes;
        }
        function includesOnlyTransitions(lanes) {
          return (lanes & TransitionLanes) === lanes;
        }
        function findUpdateLane(lanePriority, wipLanes) {
          switch (lanePriority) {
            case NoLanePriority:
              break;
            case SyncLanePriority:
              return SyncLane;
            case SyncBatchedLanePriority:
              return SyncBatchedLane;
            case InputDiscreteLanePriority: {
              var _lane = pickArbitraryLane(InputDiscreteLanes & ~wipLanes);
              if (_lane === NoLane) {
                return findUpdateLane(InputContinuousLanePriority, wipLanes);
              }
              return _lane;
            }
            case InputContinuousLanePriority: {
              var _lane2 = pickArbitraryLane(InputContinuousLanes & ~wipLanes);
              if (_lane2 === NoLane) {
                return findUpdateLane(DefaultLanePriority, wipLanes);
              }
              return _lane2;
            }
            case DefaultLanePriority: {
              var _lane3 = pickArbitraryLane(DefaultLanes & ~wipLanes);
              if (_lane3 === NoLane) {
                _lane3 = pickArbitraryLane(TransitionLanes & ~wipLanes);
                if (_lane3 === NoLane) {
                  _lane3 = pickArbitraryLane(DefaultLanes);
                }
              }
              return _lane3;
            }
            case TransitionPriority:
            case RetryLanePriority:
              break;
            case IdleLanePriority:
              var lane = pickArbitraryLane(IdleLanes & ~wipLanes);
              if (lane === NoLane) {
                lane = pickArbitraryLane(IdleLanes);
              }
              return lane;
          }
          {
            {
              throw Error("Invalid update priority: " + lanePriority + ". This is a bug in React.");
            }
          }
        }
        function findTransitionLane(wipLanes, pendingLanes) {
          var lane = pickArbitraryLane(TransitionLanes & ~pendingLanes);
          if (lane === NoLane) {
            lane = pickArbitraryLane(TransitionLanes & ~wipLanes);
            if (lane === NoLane) {
              lane = pickArbitraryLane(TransitionLanes);
            }
          }
          return lane;
        }
        function findRetryLane(wipLanes) {
          var lane = pickArbitraryLane(RetryLanes & ~wipLanes);
          if (lane === NoLane) {
            lane = pickArbitraryLane(RetryLanes);
          }
          return lane;
        }
        function getHighestPriorityLane(lanes) {
          return lanes & -lanes;
        }
        function getLowestPriorityLane(lanes) {
          var index3 = 31 - clz32(lanes);
          return index3 < 0 ? NoLanes : 1 << index3;
        }
        function getEqualOrHigherPriorityLanes(lanes) {
          return (getLowestPriorityLane(lanes) << 1) - 1;
        }
        function pickArbitraryLane(lanes) {
          return getHighestPriorityLane(lanes);
        }
        function pickArbitraryLaneIndex(lanes) {
          return 31 - clz32(lanes);
        }
        function laneToIndex(lane) {
          return pickArbitraryLaneIndex(lane);
        }
        function includesSomeLane(a3, b3) {
          return (a3 & b3) !== NoLanes;
        }
        function isSubsetOfLanes(set2, subset) {
          return (set2 & subset) === subset;
        }
        function mergeLanes(a3, b3) {
          return a3 | b3;
        }
        function removeLanes(set2, subset) {
          return set2 & ~subset;
        }
        function laneToLanes(lane) {
          return lane;
        }
        function higherPriorityLane(a3, b3) {
          return a3 !== NoLane && a3 < b3 ? a3 : b3;
        }
        function createLaneMap(initial) {
          var laneMap = [];
          for (var i4 = 0; i4 < TotalLanes; i4++) {
            laneMap.push(initial);
          }
          return laneMap;
        }
        function markRootUpdated(root2, updateLane, eventTime) {
          root2.pendingLanes |= updateLane;
          var higherPriorityLanes = updateLane - 1;
          root2.suspendedLanes &= higherPriorityLanes;
          root2.pingedLanes &= higherPriorityLanes;
          var eventTimes = root2.eventTimes;
          var index3 = laneToIndex(updateLane);
          eventTimes[index3] = eventTime;
        }
        function markRootSuspended(root2, suspendedLanes) {
          root2.suspendedLanes |= suspendedLanes;
          root2.pingedLanes &= ~suspendedLanes;
          var expirationTimes = root2.expirationTimes;
          var lanes = suspendedLanes;
          while (lanes > 0) {
            var index3 = pickArbitraryLaneIndex(lanes);
            var lane = 1 << index3;
            expirationTimes[index3] = NoTimestamp;
            lanes &= ~lane;
          }
        }
        function markRootPinged(root2, pingedLanes, eventTime) {
          root2.pingedLanes |= root2.suspendedLanes & pingedLanes;
        }
        function markDiscreteUpdatesExpired(root2) {
          root2.expiredLanes |= InputDiscreteLanes & root2.pendingLanes;
        }
        function hasDiscreteLanes(lanes) {
          return (lanes & InputDiscreteLanes) !== NoLanes;
        }
        function markRootMutableRead(root2, updateLane) {
          root2.mutableReadLanes |= updateLane & root2.pendingLanes;
        }
        function markRootFinished(root2, remainingLanes) {
          var noLongerPendingLanes = root2.pendingLanes & ~remainingLanes;
          root2.pendingLanes = remainingLanes;
          root2.suspendedLanes = 0;
          root2.pingedLanes = 0;
          root2.expiredLanes &= remainingLanes;
          root2.mutableReadLanes &= remainingLanes;
          root2.entangledLanes &= remainingLanes;
          var entanglements = root2.entanglements;
          var eventTimes = root2.eventTimes;
          var expirationTimes = root2.expirationTimes;
          var lanes = noLongerPendingLanes;
          while (lanes > 0) {
            var index3 = pickArbitraryLaneIndex(lanes);
            var lane = 1 << index3;
            entanglements[index3] = NoLanes;
            eventTimes[index3] = NoTimestamp;
            expirationTimes[index3] = NoTimestamp;
            lanes &= ~lane;
          }
        }
        function markRootEntangled(root2, entangledLanes) {
          root2.entangledLanes |= entangledLanes;
          var entanglements = root2.entanglements;
          var lanes = entangledLanes;
          while (lanes > 0) {
            var index3 = pickArbitraryLaneIndex(lanes);
            var lane = 1 << index3;
            entanglements[index3] |= entangledLanes;
            lanes &= ~lane;
          }
        }
        var clz32 = Math.clz32 ? Math.clz32 : clz32Fallback;
        var log = Math.log;
        var LN2 = Math.LN2;
        function clz32Fallback(lanes) {
          if (lanes === 0) {
            return 32;
          }
          return 31 - (log(lanes) / LN2 | 0) | 0;
        }
        var UserBlockingPriority$1 = Scheduler.unstable_UserBlockingPriority, runWithPriority = Scheduler.unstable_runWithPriority;
        var _enabled = true;
        function setEnabled(enabled) {
          _enabled = !!enabled;
        }
        function isEnabled() {
          return _enabled;
        }
        function createEventListenerWrapperWithPriority(targetContainer, domEventName, eventSystemFlags) {
          var eventPriority = getEventPriorityForPluginSystem(domEventName);
          var listenerWrapper;
          switch (eventPriority) {
            case DiscreteEvent:
              listenerWrapper = dispatchDiscreteEvent;
              break;
            case UserBlockingEvent:
              listenerWrapper = dispatchUserBlockingUpdate;
              break;
            case ContinuousEvent:
            default:
              listenerWrapper = dispatchEvent;
              break;
          }
          return listenerWrapper.bind(null, domEventName, eventSystemFlags, targetContainer);
        }
        function dispatchDiscreteEvent(domEventName, eventSystemFlags, container, nativeEvent) {
          {
            flushDiscreteUpdatesIfNeeded(nativeEvent.timeStamp);
          }
          discreteUpdates(dispatchEvent, domEventName, eventSystemFlags, container, nativeEvent);
        }
        function dispatchUserBlockingUpdate(domEventName, eventSystemFlags, container, nativeEvent) {
          {
            runWithPriority(UserBlockingPriority$1, dispatchEvent.bind(null, domEventName, eventSystemFlags, container, nativeEvent));
          }
        }
        function dispatchEvent(domEventName, eventSystemFlags, targetContainer, nativeEvent) {
          if (!_enabled) {
            return;
          }
          var allowReplay = true;
          {
            allowReplay = (eventSystemFlags & IS_CAPTURE_PHASE) === 0;
          }
          if (allowReplay && hasQueuedDiscreteEvents() && isReplayableDiscreteEvent(domEventName)) {
            queueDiscreteEvent(null, domEventName, eventSystemFlags, targetContainer, nativeEvent);
            return;
          }
          var blockedOn = attemptToDispatchEvent(domEventName, eventSystemFlags, targetContainer, nativeEvent);
          if (blockedOn === null) {
            if (allowReplay) {
              clearIfContinuousEvent(domEventName, nativeEvent);
            }
            return;
          }
          if (allowReplay) {
            if (isReplayableDiscreteEvent(domEventName)) {
              queueDiscreteEvent(blockedOn, domEventName, eventSystemFlags, targetContainer, nativeEvent);
              return;
            }
            if (queueIfContinuousEvent(blockedOn, domEventName, eventSystemFlags, targetContainer, nativeEvent)) {
              return;
            }
            clearIfContinuousEvent(domEventName, nativeEvent);
          }
          dispatchEventForPluginEventSystem(domEventName, eventSystemFlags, nativeEvent, null, targetContainer);
        }
        function attemptToDispatchEvent(domEventName, eventSystemFlags, targetContainer, nativeEvent) {
          var nativeEventTarget = getEventTarget(nativeEvent);
          var targetInst = getClosestInstanceFromNode(nativeEventTarget);
          if (targetInst !== null) {
            var nearestMounted = getNearestMountedFiber(targetInst);
            if (nearestMounted === null) {
              targetInst = null;
            } else {
              var tag = nearestMounted.tag;
              if (tag === SuspenseComponent) {
                var instance = getSuspenseInstanceFromFiber(nearestMounted);
                if (instance !== null) {
                  return instance;
                }
                targetInst = null;
              } else if (tag === HostRoot) {
                var root2 = nearestMounted.stateNode;
                if (root2.hydrate) {
                  return getContainerFromFiber(nearestMounted);
                }
                targetInst = null;
              } else if (nearestMounted !== targetInst) {
                targetInst = null;
              }
            }
          }
          dispatchEventForPluginEventSystem(domEventName, eventSystemFlags, nativeEvent, targetInst, targetContainer);
          return null;
        }
        function addEventBubbleListener(target, eventType, listener) {
          target.addEventListener(eventType, listener, false);
          return listener;
        }
        function addEventCaptureListener(target, eventType, listener) {
          target.addEventListener(eventType, listener, true);
          return listener;
        }
        function addEventCaptureListenerWithPassiveFlag(target, eventType, listener, passive) {
          target.addEventListener(eventType, listener, {
            capture: true,
            passive
          });
          return listener;
        }
        function addEventBubbleListenerWithPassiveFlag(target, eventType, listener, passive) {
          target.addEventListener(eventType, listener, {
            passive
          });
          return listener;
        }
        var root = null;
        var startText = null;
        var fallbackText = null;
        function initialize(nativeEventTarget) {
          root = nativeEventTarget;
          startText = getText();
          return true;
        }
        function reset() {
          root = null;
          startText = null;
          fallbackText = null;
        }
        function getData() {
          if (fallbackText) {
            return fallbackText;
          }
          var start;
          var startValue = startText;
          var startLength = startValue.length;
          var end;
          var endValue = getText();
          var endLength = endValue.length;
          for (start = 0; start < startLength; start++) {
            if (startValue[start] !== endValue[start]) {
              break;
            }
          }
          var minEnd = startLength - start;
          for (end = 1; end <= minEnd; end++) {
            if (startValue[startLength - end] !== endValue[endLength - end]) {
              break;
            }
          }
          var sliceTail = end > 1 ? 1 - end : void 0;
          fallbackText = endValue.slice(start, sliceTail);
          return fallbackText;
        }
        function getText() {
          if ("value" in root) {
            return root.value;
          }
          return root.textContent;
        }
        function getEventCharCode(nativeEvent) {
          var charCode;
          var keyCode = nativeEvent.keyCode;
          if ("charCode" in nativeEvent) {
            charCode = nativeEvent.charCode;
            if (charCode === 0 && keyCode === 13) {
              charCode = 13;
            }
          } else {
            charCode = keyCode;
          }
          if (charCode === 10) {
            charCode = 13;
          }
          if (charCode >= 32 || charCode === 13) {
            return charCode;
          }
          return 0;
        }
        function functionThatReturnsTrue() {
          return true;
        }
        function functionThatReturnsFalse() {
          return false;
        }
        function createSyntheticEvent(Interface) {
          function SyntheticBaseEvent(reactName, reactEventType, targetInst, nativeEvent, nativeEventTarget) {
            this._reactName = reactName;
            this._targetInst = targetInst;
            this.type = reactEventType;
            this.nativeEvent = nativeEvent;
            this.target = nativeEventTarget;
            this.currentTarget = null;
            for (var _propName in Interface) {
              if (!Interface.hasOwnProperty(_propName)) {
                continue;
              }
              var normalize = Interface[_propName];
              if (normalize) {
                this[_propName] = normalize(nativeEvent);
              } else {
                this[_propName] = nativeEvent[_propName];
              }
            }
            var defaultPrevented = nativeEvent.defaultPrevented != null ? nativeEvent.defaultPrevented : nativeEvent.returnValue === false;
            if (defaultPrevented) {
              this.isDefaultPrevented = functionThatReturnsTrue;
            } else {
              this.isDefaultPrevented = functionThatReturnsFalse;
            }
            this.isPropagationStopped = functionThatReturnsFalse;
            return this;
          }
          _assign(SyntheticBaseEvent.prototype, {
            preventDefault: function() {
              this.defaultPrevented = true;
              var event = this.nativeEvent;
              if (!event) {
                return;
              }
              if (event.preventDefault) {
                event.preventDefault();
              } else if (typeof event.returnValue !== "unknown") {
                event.returnValue = false;
              }
              this.isDefaultPrevented = functionThatReturnsTrue;
            },
            stopPropagation: function() {
              var event = this.nativeEvent;
              if (!event) {
                return;
              }
              if (event.stopPropagation) {
                event.stopPropagation();
              } else if (typeof event.cancelBubble !== "unknown") {
                event.cancelBubble = true;
              }
              this.isPropagationStopped = functionThatReturnsTrue;
            },
            persist: function() {
            },
            isPersistent: functionThatReturnsTrue
          });
          return SyntheticBaseEvent;
        }
        var EventInterface = {
          eventPhase: 0,
          bubbles: 0,
          cancelable: 0,
          timeStamp: function(event) {
            return event.timeStamp || Date.now();
          },
          defaultPrevented: 0,
          isTrusted: 0
        };
        var SyntheticEvent = createSyntheticEvent(EventInterface);
        var UIEventInterface = _assign({}, EventInterface, {
          view: 0,
          detail: 0
        });
        var SyntheticUIEvent = createSyntheticEvent(UIEventInterface);
        var lastMovementX;
        var lastMovementY;
        var lastMouseEvent;
        function updateMouseMovementPolyfillState(event) {
          if (event !== lastMouseEvent) {
            if (lastMouseEvent && event.type === "mousemove") {
              lastMovementX = event.screenX - lastMouseEvent.screenX;
              lastMovementY = event.screenY - lastMouseEvent.screenY;
            } else {
              lastMovementX = 0;
              lastMovementY = 0;
            }
            lastMouseEvent = event;
          }
        }
        var MouseEventInterface = _assign({}, UIEventInterface, {
          screenX: 0,
          screenY: 0,
          clientX: 0,
          clientY: 0,
          pageX: 0,
          pageY: 0,
          ctrlKey: 0,
          shiftKey: 0,
          altKey: 0,
          metaKey: 0,
          getModifierState: getEventModifierState,
          button: 0,
          buttons: 0,
          relatedTarget: function(event) {
            if (event.relatedTarget === void 0)
              return event.fromElement === event.srcElement ? event.toElement : event.fromElement;
            return event.relatedTarget;
          },
          movementX: function(event) {
            if ("movementX" in event) {
              return event.movementX;
            }
            updateMouseMovementPolyfillState(event);
            return lastMovementX;
          },
          movementY: function(event) {
            if ("movementY" in event) {
              return event.movementY;
            }
            return lastMovementY;
          }
        });
        var SyntheticMouseEvent = createSyntheticEvent(MouseEventInterface);
        var DragEventInterface = _assign({}, MouseEventInterface, {
          dataTransfer: 0
        });
        var SyntheticDragEvent = createSyntheticEvent(DragEventInterface);
        var FocusEventInterface = _assign({}, UIEventInterface, {
          relatedTarget: 0
        });
        var SyntheticFocusEvent = createSyntheticEvent(FocusEventInterface);
        var AnimationEventInterface = _assign({}, EventInterface, {
          animationName: 0,
          elapsedTime: 0,
          pseudoElement: 0
        });
        var SyntheticAnimationEvent = createSyntheticEvent(AnimationEventInterface);
        var ClipboardEventInterface = _assign({}, EventInterface, {
          clipboardData: function(event) {
            return "clipboardData" in event ? event.clipboardData : window.clipboardData;
          }
        });
        var SyntheticClipboardEvent = createSyntheticEvent(ClipboardEventInterface);
        var CompositionEventInterface = _assign({}, EventInterface, {
          data: 0
        });
        var SyntheticCompositionEvent = createSyntheticEvent(CompositionEventInterface);
        var SyntheticInputEvent = SyntheticCompositionEvent;
        var normalizeKey = {
          Esc: "Escape",
          Spacebar: " ",
          Left: "ArrowLeft",
          Up: "ArrowUp",
          Right: "ArrowRight",
          Down: "ArrowDown",
          Del: "Delete",
          Win: "OS",
          Menu: "ContextMenu",
          Apps: "ContextMenu",
          Scroll: "ScrollLock",
          MozPrintableKey: "Unidentified"
        };
        var translateToKey = {
          "8": "Backspace",
          "9": "Tab",
          "12": "Clear",
          "13": "Enter",
          "16": "Shift",
          "17": "Control",
          "18": "Alt",
          "19": "Pause",
          "20": "CapsLock",
          "27": "Escape",
          "32": " ",
          "33": "PageUp",
          "34": "PageDown",
          "35": "End",
          "36": "Home",
          "37": "ArrowLeft",
          "38": "ArrowUp",
          "39": "ArrowRight",
          "40": "ArrowDown",
          "45": "Insert",
          "46": "Delete",
          "112": "F1",
          "113": "F2",
          "114": "F3",
          "115": "F4",
          "116": "F5",
          "117": "F6",
          "118": "F7",
          "119": "F8",
          "120": "F9",
          "121": "F10",
          "122": "F11",
          "123": "F12",
          "144": "NumLock",
          "145": "ScrollLock",
          "224": "Meta"
        };
        function getEventKey(nativeEvent) {
          if (nativeEvent.key) {
            var key = normalizeKey[nativeEvent.key] || nativeEvent.key;
            if (key !== "Unidentified") {
              return key;
            }
          }
          if (nativeEvent.type === "keypress") {
            var charCode = getEventCharCode(nativeEvent);
            return charCode === 13 ? "Enter" : String.fromCharCode(charCode);
          }
          if (nativeEvent.type === "keydown" || nativeEvent.type === "keyup") {
            return translateToKey[nativeEvent.keyCode] || "Unidentified";
          }
          return "";
        }
        var modifierKeyToProp = {
          Alt: "altKey",
          Control: "ctrlKey",
          Meta: "metaKey",
          Shift: "shiftKey"
        };
        function modifierStateGetter(keyArg) {
          var syntheticEvent = this;
          var nativeEvent = syntheticEvent.nativeEvent;
          if (nativeEvent.getModifierState) {
            return nativeEvent.getModifierState(keyArg);
          }
          var keyProp = modifierKeyToProp[keyArg];
          return keyProp ? !!nativeEvent[keyProp] : false;
        }
        function getEventModifierState(nativeEvent) {
          return modifierStateGetter;
        }
        var KeyboardEventInterface = _assign({}, UIEventInterface, {
          key: getEventKey,
          code: 0,
          location: 0,
          ctrlKey: 0,
          shiftKey: 0,
          altKey: 0,
          metaKey: 0,
          repeat: 0,
          locale: 0,
          getModifierState: getEventModifierState,
          charCode: function(event) {
            if (event.type === "keypress") {
              return getEventCharCode(event);
            }
            return 0;
          },
          keyCode: function(event) {
            if (event.type === "keydown" || event.type === "keyup") {
              return event.keyCode;
            }
            return 0;
          },
          which: function(event) {
            if (event.type === "keypress") {
              return getEventCharCode(event);
            }
            if (event.type === "keydown" || event.type === "keyup") {
              return event.keyCode;
            }
            return 0;
          }
        });
        var SyntheticKeyboardEvent = createSyntheticEvent(KeyboardEventInterface);
        var PointerEventInterface = _assign({}, MouseEventInterface, {
          pointerId: 0,
          width: 0,
          height: 0,
          pressure: 0,
          tangentialPressure: 0,
          tiltX: 0,
          tiltY: 0,
          twist: 0,
          pointerType: 0,
          isPrimary: 0
        });
        var SyntheticPointerEvent = createSyntheticEvent(PointerEventInterface);
        var TouchEventInterface = _assign({}, UIEventInterface, {
          touches: 0,
          targetTouches: 0,
          changedTouches: 0,
          altKey: 0,
          metaKey: 0,
          ctrlKey: 0,
          shiftKey: 0,
          getModifierState: getEventModifierState
        });
        var SyntheticTouchEvent = createSyntheticEvent(TouchEventInterface);
        var TransitionEventInterface = _assign({}, EventInterface, {
          propertyName: 0,
          elapsedTime: 0,
          pseudoElement: 0
        });
        var SyntheticTransitionEvent = createSyntheticEvent(TransitionEventInterface);
        var WheelEventInterface = _assign({}, MouseEventInterface, {
          deltaX: function(event) {
            return "deltaX" in event ? event.deltaX : "wheelDeltaX" in event ? -event.wheelDeltaX : 0;
          },
          deltaY: function(event) {
            return "deltaY" in event ? event.deltaY : "wheelDeltaY" in event ? -event.wheelDeltaY : "wheelDelta" in event ? -event.wheelDelta : 0;
          },
          deltaZ: 0,
          deltaMode: 0
        });
        var SyntheticWheelEvent = createSyntheticEvent(WheelEventInterface);
        var END_KEYCODES = [9, 13, 27, 32];
        var START_KEYCODE = 229;
        var canUseCompositionEvent = canUseDOM && "CompositionEvent" in window;
        var documentMode = null;
        if (canUseDOM && "documentMode" in document) {
          documentMode = document.documentMode;
        }
        var canUseTextInputEvent = canUseDOM && "TextEvent" in window && !documentMode;
        var useFallbackCompositionData = canUseDOM && (!canUseCompositionEvent || documentMode && documentMode > 8 && documentMode <= 11);
        var SPACEBAR_CODE = 32;
        var SPACEBAR_CHAR = String.fromCharCode(SPACEBAR_CODE);
        function registerEvents() {
          registerTwoPhaseEvent("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
          registerTwoPhaseEvent("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
          registerTwoPhaseEvent("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
          registerTwoPhaseEvent("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
        }
        var hasSpaceKeypress = false;
        function isKeypressCommand(nativeEvent) {
          return (nativeEvent.ctrlKey || nativeEvent.altKey || nativeEvent.metaKey) && !(nativeEvent.ctrlKey && nativeEvent.altKey);
        }
        function getCompositionEventType(domEventName) {
          switch (domEventName) {
            case "compositionstart":
              return "onCompositionStart";
            case "compositionend":
              return "onCompositionEnd";
            case "compositionupdate":
              return "onCompositionUpdate";
          }
        }
        function isFallbackCompositionStart(domEventName, nativeEvent) {
          return domEventName === "keydown" && nativeEvent.keyCode === START_KEYCODE;
        }
        function isFallbackCompositionEnd(domEventName, nativeEvent) {
          switch (domEventName) {
            case "keyup":
              return END_KEYCODES.indexOf(nativeEvent.keyCode) !== -1;
            case "keydown":
              return nativeEvent.keyCode !== START_KEYCODE;
            case "keypress":
            case "mousedown":
            case "focusout":
              return true;
            default:
              return false;
          }
        }
        function getDataFromCustomEvent(nativeEvent) {
          var detail = nativeEvent.detail;
          if (typeof detail === "object" && "data" in detail) {
            return detail.data;
          }
          return null;
        }
        function isUsingKoreanIME(nativeEvent) {
          return nativeEvent.locale === "ko";
        }
        var isComposing = false;
        function extractCompositionEvent(dispatchQueue, domEventName, targetInst, nativeEvent, nativeEventTarget) {
          var eventType;
          var fallbackData;
          if (canUseCompositionEvent) {
            eventType = getCompositionEventType(domEventName);
          } else if (!isComposing) {
            if (isFallbackCompositionStart(domEventName, nativeEvent)) {
              eventType = "onCompositionStart";
            }
          } else if (isFallbackCompositionEnd(domEventName, nativeEvent)) {
            eventType = "onCompositionEnd";
          }
          if (!eventType) {
            return null;
          }
          if (useFallbackCompositionData && !isUsingKoreanIME(nativeEvent)) {
            if (!isComposing && eventType === "onCompositionStart") {
              isComposing = initialize(nativeEventTarget);
            } else if (eventType === "onCompositionEnd") {
              if (isComposing) {
                fallbackData = getData();
              }
            }
          }
          var listeners = accumulateTwoPhaseListeners(targetInst, eventType);
          if (listeners.length > 0) {
            var event = new SyntheticCompositionEvent(eventType, domEventName, null, nativeEvent, nativeEventTarget);
            dispatchQueue.push({
              event,
              listeners
            });
            if (fallbackData) {
              event.data = fallbackData;
            } else {
              var customData = getDataFromCustomEvent(nativeEvent);
              if (customData !== null) {
                event.data = customData;
              }
            }
          }
        }
        function getNativeBeforeInputChars(domEventName, nativeEvent) {
          switch (domEventName) {
            case "compositionend":
              return getDataFromCustomEvent(nativeEvent);
            case "keypress":
              var which = nativeEvent.which;
              if (which !== SPACEBAR_CODE) {
                return null;
              }
              hasSpaceKeypress = true;
              return SPACEBAR_CHAR;
            case "textInput":
              var chars = nativeEvent.data;
              if (chars === SPACEBAR_CHAR && hasSpaceKeypress) {
                return null;
              }
              return chars;
            default:
              return null;
          }
        }
        function getFallbackBeforeInputChars(domEventName, nativeEvent) {
          if (isComposing) {
            if (domEventName === "compositionend" || !canUseCompositionEvent && isFallbackCompositionEnd(domEventName, nativeEvent)) {
              var chars = getData();
              reset();
              isComposing = false;
              return chars;
            }
            return null;
          }
          switch (domEventName) {
            case "paste":
              return null;
            case "keypress":
              if (!isKeypressCommand(nativeEvent)) {
                if (nativeEvent.char && nativeEvent.char.length > 1) {
                  return nativeEvent.char;
                } else if (nativeEvent.which) {
                  return String.fromCharCode(nativeEvent.which);
                }
              }
              return null;
            case "compositionend":
              return useFallbackCompositionData && !isUsingKoreanIME(nativeEvent) ? null : nativeEvent.data;
            default:
              return null;
          }
        }
        function extractBeforeInputEvent(dispatchQueue, domEventName, targetInst, nativeEvent, nativeEventTarget) {
          var chars;
          if (canUseTextInputEvent) {
            chars = getNativeBeforeInputChars(domEventName, nativeEvent);
          } else {
            chars = getFallbackBeforeInputChars(domEventName, nativeEvent);
          }
          if (!chars) {
            return null;
          }
          var listeners = accumulateTwoPhaseListeners(targetInst, "onBeforeInput");
          if (listeners.length > 0) {
            var event = new SyntheticInputEvent("onBeforeInput", "beforeinput", null, nativeEvent, nativeEventTarget);
            dispatchQueue.push({
              event,
              listeners
            });
            event.data = chars;
          }
        }
        function extractEvents(dispatchQueue, domEventName, targetInst, nativeEvent, nativeEventTarget, eventSystemFlags, targetContainer) {
          extractCompositionEvent(dispatchQueue, domEventName, targetInst, nativeEvent, nativeEventTarget);
          extractBeforeInputEvent(dispatchQueue, domEventName, targetInst, nativeEvent, nativeEventTarget);
        }
        var supportedInputTypes = {
          color: true,
          date: true,
          datetime: true,
          "datetime-local": true,
          email: true,
          month: true,
          number: true,
          password: true,
          range: true,
          search: true,
          tel: true,
          text: true,
          time: true,
          url: true,
          week: true
        };
        function isTextInputElement(elem) {
          var nodeName = elem && elem.nodeName && elem.nodeName.toLowerCase();
          if (nodeName === "input") {
            return !!supportedInputTypes[elem.type];
          }
          if (nodeName === "textarea") {
            return true;
          }
          return false;
        }
        /**
         * Checks if an event is supported in the current execution environment.
         *
         * NOTE: This will not work correctly for non-generic events such as `change`,
         * `reset`, `load`, `error`, and `select`.
         *
         * Borrows from Modernizr.
         *
         * @param {string} eventNameSuffix Event name, e.g. "click".
         * @return {boolean} True if the event is supported.
         * @internal
         * @license Modernizr 3.0.0pre (Custom Build) | MIT
         */
        function isEventSupported(eventNameSuffix) {
          if (!canUseDOM) {
            return false;
          }
          var eventName = "on" + eventNameSuffix;
          var isSupported = eventName in document;
          if (!isSupported) {
            var element = document.createElement("div");
            element.setAttribute(eventName, "return;");
            isSupported = typeof element[eventName] === "function";
          }
          return isSupported;
        }
        function registerEvents$1() {
          registerTwoPhaseEvent("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
        }
        function createAndAccumulateChangeEvent(dispatchQueue, inst, nativeEvent, target) {
          enqueueStateRestore(target);
          var listeners = accumulateTwoPhaseListeners(inst, "onChange");
          if (listeners.length > 0) {
            var event = new SyntheticEvent("onChange", "change", null, nativeEvent, target);
            dispatchQueue.push({
              event,
              listeners
            });
          }
        }
        var activeElement = null;
        var activeElementInst = null;
        function shouldUseChangeEvent(elem) {
          var nodeName = elem.nodeName && elem.nodeName.toLowerCase();
          return nodeName === "select" || nodeName === "input" && elem.type === "file";
        }
        function manualDispatchChangeEvent(nativeEvent) {
          var dispatchQueue = [];
          createAndAccumulateChangeEvent(dispatchQueue, activeElementInst, nativeEvent, getEventTarget(nativeEvent));
          batchedUpdates(runEventInBatch, dispatchQueue);
        }
        function runEventInBatch(dispatchQueue) {
          processDispatchQueue(dispatchQueue, 0);
        }
        function getInstIfValueChanged(targetInst) {
          var targetNode = getNodeFromInstance(targetInst);
          if (updateValueIfChanged(targetNode)) {
            return targetInst;
          }
        }
        function getTargetInstForChangeEvent(domEventName, targetInst) {
          if (domEventName === "change") {
            return targetInst;
          }
        }
        var isInputEventSupported = false;
        if (canUseDOM) {
          isInputEventSupported = isEventSupported("input") && (!document.documentMode || document.documentMode > 9);
        }
        function startWatchingForValueChange(target, targetInst) {
          activeElement = target;
          activeElementInst = targetInst;
          activeElement.attachEvent("onpropertychange", handlePropertyChange);
        }
        function stopWatchingForValueChange() {
          if (!activeElement) {
            return;
          }
          activeElement.detachEvent("onpropertychange", handlePropertyChange);
          activeElement = null;
          activeElementInst = null;
        }
        function handlePropertyChange(nativeEvent) {
          if (nativeEvent.propertyName !== "value") {
            return;
          }
          if (getInstIfValueChanged(activeElementInst)) {
            manualDispatchChangeEvent(nativeEvent);
          }
        }
        function handleEventsForInputEventPolyfill(domEventName, target, targetInst) {
          if (domEventName === "focusin") {
            stopWatchingForValueChange();
            startWatchingForValueChange(target, targetInst);
          } else if (domEventName === "focusout") {
            stopWatchingForValueChange();
          }
        }
        function getTargetInstForInputEventPolyfill(domEventName, targetInst) {
          if (domEventName === "selectionchange" || domEventName === "keyup" || domEventName === "keydown") {
            return getInstIfValueChanged(activeElementInst);
          }
        }
        function shouldUseClickEvent(elem) {
          var nodeName = elem.nodeName;
          return nodeName && nodeName.toLowerCase() === "input" && (elem.type === "checkbox" || elem.type === "radio");
        }
        function getTargetInstForClickEvent(domEventName, targetInst) {
          if (domEventName === "click") {
            return getInstIfValueChanged(targetInst);
          }
        }
        function getTargetInstForInputOrChangeEvent(domEventName, targetInst) {
          if (domEventName === "input" || domEventName === "change") {
            return getInstIfValueChanged(targetInst);
          }
        }
        function handleControlledInputBlur(node) {
          var state = node._wrapperState;
          if (!state || !state.controlled || node.type !== "number") {
            return;
          }
          {
            setDefaultValue(node, "number", node.value);
          }
        }
        function extractEvents$1(dispatchQueue, domEventName, targetInst, nativeEvent, nativeEventTarget, eventSystemFlags, targetContainer) {
          var targetNode = targetInst ? getNodeFromInstance(targetInst) : window;
          var getTargetInstFunc, handleEventFunc;
          if (shouldUseChangeEvent(targetNode)) {
            getTargetInstFunc = getTargetInstForChangeEvent;
          } else if (isTextInputElement(targetNode)) {
            if (isInputEventSupported) {
              getTargetInstFunc = getTargetInstForInputOrChangeEvent;
            } else {
              getTargetInstFunc = getTargetInstForInputEventPolyfill;
              handleEventFunc = handleEventsForInputEventPolyfill;
            }
          } else if (shouldUseClickEvent(targetNode)) {
            getTargetInstFunc = getTargetInstForClickEvent;
          }
          if (getTargetInstFunc) {
            var inst = getTargetInstFunc(domEventName, targetInst);
            if (inst) {
              createAndAccumulateChangeEvent(dispatchQueue, inst, nativeEvent, nativeEventTarget);
              return;
            }
          }
          if (handleEventFunc) {
            handleEventFunc(domEventName, targetNode, targetInst);
          }
          if (domEventName === "focusout") {
            handleControlledInputBlur(targetNode);
          }
        }
        function registerEvents$2() {
          registerDirectEvent("onMouseEnter", ["mouseout", "mouseover"]);
          registerDirectEvent("onMouseLeave", ["mouseout", "mouseover"]);
          registerDirectEvent("onPointerEnter", ["pointerout", "pointerover"]);
          registerDirectEvent("onPointerLeave", ["pointerout", "pointerover"]);
        }
        function extractEvents$2(dispatchQueue, domEventName, targetInst, nativeEvent, nativeEventTarget, eventSystemFlags, targetContainer) {
          var isOverEvent = domEventName === "mouseover" || domEventName === "pointerover";
          var isOutEvent = domEventName === "mouseout" || domEventName === "pointerout";
          if (isOverEvent && (eventSystemFlags & IS_REPLAYED) === 0) {
            var related = nativeEvent.relatedTarget || nativeEvent.fromElement;
            if (related) {
              if (getClosestInstanceFromNode(related) || isContainerMarkedAsRoot(related)) {
                return;
              }
            }
          }
          if (!isOutEvent && !isOverEvent) {
            return;
          }
          var win;
          if (nativeEventTarget.window === nativeEventTarget) {
            win = nativeEventTarget;
          } else {
            var doc = nativeEventTarget.ownerDocument;
            if (doc) {
              win = doc.defaultView || doc.parentWindow;
            } else {
              win = window;
            }
          }
          var from;
          var to;
          if (isOutEvent) {
            var _related = nativeEvent.relatedTarget || nativeEvent.toElement;
            from = targetInst;
            to = _related ? getClosestInstanceFromNode(_related) : null;
            if (to !== null) {
              var nearestMounted = getNearestMountedFiber(to);
              if (to !== nearestMounted || to.tag !== HostComponent && to.tag !== HostText) {
                to = null;
              }
            }
          } else {
            from = null;
            to = targetInst;
          }
          if (from === to) {
            return;
          }
          var SyntheticEventCtor = SyntheticMouseEvent;
          var leaveEventType = "onMouseLeave";
          var enterEventType = "onMouseEnter";
          var eventTypePrefix = "mouse";
          if (domEventName === "pointerout" || domEventName === "pointerover") {
            SyntheticEventCtor = SyntheticPointerEvent;
            leaveEventType = "onPointerLeave";
            enterEventType = "onPointerEnter";
            eventTypePrefix = "pointer";
          }
          var fromNode = from == null ? win : getNodeFromInstance(from);
          var toNode = to == null ? win : getNodeFromInstance(to);
          var leave = new SyntheticEventCtor(leaveEventType, eventTypePrefix + "leave", from, nativeEvent, nativeEventTarget);
          leave.target = fromNode;
          leave.relatedTarget = toNode;
          var enter = null;
          var nativeTargetInst = getClosestInstanceFromNode(nativeEventTarget);
          if (nativeTargetInst === targetInst) {
            var enterEvent = new SyntheticEventCtor(enterEventType, eventTypePrefix + "enter", to, nativeEvent, nativeEventTarget);
            enterEvent.target = toNode;
            enterEvent.relatedTarget = fromNode;
            enter = enterEvent;
          }
          accumulateEnterLeaveTwoPhaseListeners(dispatchQueue, leave, enter, from, to);
        }
        function is(x3, y3) {
          return x3 === y3 && (x3 !== 0 || 1 / x3 === 1 / y3) || x3 !== x3 && y3 !== y3;
        }
        var objectIs = typeof Object.is === "function" ? Object.is : is;
        var hasOwnProperty$2 = Object.prototype.hasOwnProperty;
        function shallowEqual(objA, objB) {
          if (objectIs(objA, objB)) {
            return true;
          }
          if (typeof objA !== "object" || objA === null || typeof objB !== "object" || objB === null) {
            return false;
          }
          var keysA = Object.keys(objA);
          var keysB = Object.keys(objB);
          if (keysA.length !== keysB.length) {
            return false;
          }
          for (var i4 = 0; i4 < keysA.length; i4++) {
            if (!hasOwnProperty$2.call(objB, keysA[i4]) || !objectIs(objA[keysA[i4]], objB[keysA[i4]])) {
              return false;
            }
          }
          return true;
        }
        function getLeafNode(node) {
          while (node && node.firstChild) {
            node = node.firstChild;
          }
          return node;
        }
        function getSiblingNode(node) {
          while (node) {
            if (node.nextSibling) {
              return node.nextSibling;
            }
            node = node.parentNode;
          }
        }
        function getNodeForCharacterOffset(root2, offset) {
          var node = getLeafNode(root2);
          var nodeStart = 0;
          var nodeEnd = 0;
          while (node) {
            if (node.nodeType === TEXT_NODE) {
              nodeEnd = nodeStart + node.textContent.length;
              if (nodeStart <= offset && nodeEnd >= offset) {
                return {
                  node,
                  offset: offset - nodeStart
                };
              }
              nodeStart = nodeEnd;
            }
            node = getLeafNode(getSiblingNode(node));
          }
        }
        function getOffsets(outerNode) {
          var ownerDocument = outerNode.ownerDocument;
          var win = ownerDocument && ownerDocument.defaultView || window;
          var selection = win.getSelection && win.getSelection();
          if (!selection || selection.rangeCount === 0) {
            return null;
          }
          var anchorNode = selection.anchorNode, anchorOffset = selection.anchorOffset, focusNode = selection.focusNode, focusOffset = selection.focusOffset;
          try {
            anchorNode.nodeType;
            focusNode.nodeType;
          } catch (e3) {
            return null;
          }
          return getModernOffsetsFromPoints(outerNode, anchorNode, anchorOffset, focusNode, focusOffset);
        }
        function getModernOffsetsFromPoints(outerNode, anchorNode, anchorOffset, focusNode, focusOffset) {
          var length = 0;
          var start = -1;
          var end = -1;
          var indexWithinAnchor = 0;
          var indexWithinFocus = 0;
          var node = outerNode;
          var parentNode = null;
          outer:
            while (true) {
              var next = null;
              while (true) {
                if (node === anchorNode && (anchorOffset === 0 || node.nodeType === TEXT_NODE)) {
                  start = length + anchorOffset;
                }
                if (node === focusNode && (focusOffset === 0 || node.nodeType === TEXT_NODE)) {
                  end = length + focusOffset;
                }
                if (node.nodeType === TEXT_NODE) {
                  length += node.nodeValue.length;
                }
                if ((next = node.firstChild) === null) {
                  break;
                }
                parentNode = node;
                node = next;
              }
              while (true) {
                if (node === outerNode) {
                  break outer;
                }
                if (parentNode === anchorNode && ++indexWithinAnchor === anchorOffset) {
                  start = length;
                }
                if (parentNode === focusNode && ++indexWithinFocus === focusOffset) {
                  end = length;
                }
                if ((next = node.nextSibling) !== null) {
                  break;
                }
                node = parentNode;
                parentNode = node.parentNode;
              }
              node = next;
            }
          if (start === -1 || end === -1) {
            return null;
          }
          return {
            start,
            end
          };
        }
        function setOffsets(node, offsets) {
          var doc = node.ownerDocument || document;
          var win = doc && doc.defaultView || window;
          if (!win.getSelection) {
            return;
          }
          var selection = win.getSelection();
          var length = node.textContent.length;
          var start = Math.min(offsets.start, length);
          var end = offsets.end === void 0 ? start : Math.min(offsets.end, length);
          if (!selection.extend && start > end) {
            var temp = end;
            end = start;
            start = temp;
          }
          var startMarker = getNodeForCharacterOffset(node, start);
          var endMarker = getNodeForCharacterOffset(node, end);
          if (startMarker && endMarker) {
            if (selection.rangeCount === 1 && selection.anchorNode === startMarker.node && selection.anchorOffset === startMarker.offset && selection.focusNode === endMarker.node && selection.focusOffset === endMarker.offset) {
              return;
            }
            var range = doc.createRange();
            range.setStart(startMarker.node, startMarker.offset);
            selection.removeAllRanges();
            if (start > end) {
              selection.addRange(range);
              selection.extend(endMarker.node, endMarker.offset);
            } else {
              range.setEnd(endMarker.node, endMarker.offset);
              selection.addRange(range);
            }
          }
        }
        function isTextNode(node) {
          return node && node.nodeType === TEXT_NODE;
        }
        function containsNode(outerNode, innerNode) {
          if (!outerNode || !innerNode) {
            return false;
          } else if (outerNode === innerNode) {
            return true;
          } else if (isTextNode(outerNode)) {
            return false;
          } else if (isTextNode(innerNode)) {
            return containsNode(outerNode, innerNode.parentNode);
          } else if ("contains" in outerNode) {
            return outerNode.contains(innerNode);
          } else if (outerNode.compareDocumentPosition) {
            return !!(outerNode.compareDocumentPosition(innerNode) & 16);
          } else {
            return false;
          }
        }
        function isInDocument(node) {
          return node && node.ownerDocument && containsNode(node.ownerDocument.documentElement, node);
        }
        function isSameOriginFrame(iframe) {
          try {
            return typeof iframe.contentWindow.location.href === "string";
          } catch (err) {
            return false;
          }
        }
        function getActiveElementDeep() {
          var win = window;
          var element = getActiveElement();
          while (element instanceof win.HTMLIFrameElement) {
            if (isSameOriginFrame(element)) {
              win = element.contentWindow;
            } else {
              return element;
            }
            element = getActiveElement(win.document);
          }
          return element;
        }
        function hasSelectionCapabilities(elem) {
          var nodeName = elem && elem.nodeName && elem.nodeName.toLowerCase();
          return nodeName && (nodeName === "input" && (elem.type === "text" || elem.type === "search" || elem.type === "tel" || elem.type === "url" || elem.type === "password") || nodeName === "textarea" || elem.contentEditable === "true");
        }
        function getSelectionInformation() {
          var focusedElem = getActiveElementDeep();
          return {
            focusedElem,
            selectionRange: hasSelectionCapabilities(focusedElem) ? getSelection(focusedElem) : null
          };
        }
        function restoreSelection(priorSelectionInformation) {
          var curFocusedElem = getActiveElementDeep();
          var priorFocusedElem = priorSelectionInformation.focusedElem;
          var priorSelectionRange = priorSelectionInformation.selectionRange;
          if (curFocusedElem !== priorFocusedElem && isInDocument(priorFocusedElem)) {
            if (priorSelectionRange !== null && hasSelectionCapabilities(priorFocusedElem)) {
              setSelection(priorFocusedElem, priorSelectionRange);
            }
            var ancestors = [];
            var ancestor = priorFocusedElem;
            while (ancestor = ancestor.parentNode) {
              if (ancestor.nodeType === ELEMENT_NODE) {
                ancestors.push({
                  element: ancestor,
                  left: ancestor.scrollLeft,
                  top: ancestor.scrollTop
                });
              }
            }
            if (typeof priorFocusedElem.focus === "function") {
              priorFocusedElem.focus();
            }
            for (var i4 = 0; i4 < ancestors.length; i4++) {
              var info = ancestors[i4];
              info.element.scrollLeft = info.left;
              info.element.scrollTop = info.top;
            }
          }
        }
        function getSelection(input) {
          var selection;
          if ("selectionStart" in input) {
            selection = {
              start: input.selectionStart,
              end: input.selectionEnd
            };
          } else {
            selection = getOffsets(input);
          }
          return selection || {
            start: 0,
            end: 0
          };
        }
        function setSelection(input, offsets) {
          var start = offsets.start;
          var end = offsets.end;
          if (end === void 0) {
            end = start;
          }
          if ("selectionStart" in input) {
            input.selectionStart = start;
            input.selectionEnd = Math.min(end, input.value.length);
          } else {
            setOffsets(input, offsets);
          }
        }
        var skipSelectionChangeEvent = canUseDOM && "documentMode" in document && document.documentMode <= 11;
        function registerEvents$3() {
          registerTwoPhaseEvent("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
        }
        var activeElement$1 = null;
        var activeElementInst$1 = null;
        var lastSelection = null;
        var mouseDown = false;
        function getSelection$1(node) {
          if ("selectionStart" in node && hasSelectionCapabilities(node)) {
            return {
              start: node.selectionStart,
              end: node.selectionEnd
            };
          } else {
            var win = node.ownerDocument && node.ownerDocument.defaultView || window;
            var selection = win.getSelection();
            return {
              anchorNode: selection.anchorNode,
              anchorOffset: selection.anchorOffset,
              focusNode: selection.focusNode,
              focusOffset: selection.focusOffset
            };
          }
        }
        function getEventTargetDocument(eventTarget) {
          return eventTarget.window === eventTarget ? eventTarget.document : eventTarget.nodeType === DOCUMENT_NODE ? eventTarget : eventTarget.ownerDocument;
        }
        function constructSelectEvent(dispatchQueue, nativeEvent, nativeEventTarget) {
          var doc = getEventTargetDocument(nativeEventTarget);
          if (mouseDown || activeElement$1 == null || activeElement$1 !== getActiveElement(doc)) {
            return;
          }
          var currentSelection = getSelection$1(activeElement$1);
          if (!lastSelection || !shallowEqual(lastSelection, currentSelection)) {
            lastSelection = currentSelection;
            var listeners = accumulateTwoPhaseListeners(activeElementInst$1, "onSelect");
            if (listeners.length > 0) {
              var event = new SyntheticEvent("onSelect", "select", null, nativeEvent, nativeEventTarget);
              dispatchQueue.push({
                event,
                listeners
              });
              event.target = activeElement$1;
            }
          }
        }
        function extractEvents$3(dispatchQueue, domEventName, targetInst, nativeEvent, nativeEventTarget, eventSystemFlags, targetContainer) {
          var targetNode = targetInst ? getNodeFromInstance(targetInst) : window;
          switch (domEventName) {
            case "focusin":
              if (isTextInputElement(targetNode) || targetNode.contentEditable === "true") {
                activeElement$1 = targetNode;
                activeElementInst$1 = targetInst;
                lastSelection = null;
              }
              break;
            case "focusout":
              activeElement$1 = null;
              activeElementInst$1 = null;
              lastSelection = null;
              break;
            case "mousedown":
              mouseDown = true;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              mouseDown = false;
              constructSelectEvent(dispatchQueue, nativeEvent, nativeEventTarget);
              break;
            case "selectionchange":
              if (skipSelectionChangeEvent) {
                break;
              }
            case "keydown":
            case "keyup":
              constructSelectEvent(dispatchQueue, nativeEvent, nativeEventTarget);
          }
        }
        function extractEvents$4(dispatchQueue, domEventName, targetInst, nativeEvent, nativeEventTarget, eventSystemFlags, targetContainer) {
          var reactName = topLevelEventsToReactNames.get(domEventName);
          if (reactName === void 0) {
            return;
          }
          var SyntheticEventCtor = SyntheticEvent;
          var reactEventType = domEventName;
          switch (domEventName) {
            case "keypress":
              if (getEventCharCode(nativeEvent) === 0) {
                return;
              }
            case "keydown":
            case "keyup":
              SyntheticEventCtor = SyntheticKeyboardEvent;
              break;
            case "focusin":
              reactEventType = "focus";
              SyntheticEventCtor = SyntheticFocusEvent;
              break;
            case "focusout":
              reactEventType = "blur";
              SyntheticEventCtor = SyntheticFocusEvent;
              break;
            case "beforeblur":
            case "afterblur":
              SyntheticEventCtor = SyntheticFocusEvent;
              break;
            case "click":
              if (nativeEvent.button === 2) {
                return;
              }
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              SyntheticEventCtor = SyntheticMouseEvent;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              SyntheticEventCtor = SyntheticDragEvent;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              SyntheticEventCtor = SyntheticTouchEvent;
              break;
            case ANIMATION_END:
            case ANIMATION_ITERATION:
            case ANIMATION_START:
              SyntheticEventCtor = SyntheticAnimationEvent;
              break;
            case TRANSITION_END:
              SyntheticEventCtor = SyntheticTransitionEvent;
              break;
            case "scroll":
              SyntheticEventCtor = SyntheticUIEvent;
              break;
            case "wheel":
              SyntheticEventCtor = SyntheticWheelEvent;
              break;
            case "copy":
            case "cut":
            case "paste":
              SyntheticEventCtor = SyntheticClipboardEvent;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              SyntheticEventCtor = SyntheticPointerEvent;
              break;
          }
          var inCapturePhase = (eventSystemFlags & IS_CAPTURE_PHASE) !== 0;
          {
            var accumulateTargetOnly = !inCapturePhase && domEventName === "scroll";
            var _listeners = accumulateSinglePhaseListeners(targetInst, reactName, nativeEvent.type, inCapturePhase, accumulateTargetOnly);
            if (_listeners.length > 0) {
              var _event = new SyntheticEventCtor(reactName, reactEventType, null, nativeEvent, nativeEventTarget);
              dispatchQueue.push({
                event: _event,
                listeners: _listeners
              });
            }
          }
        }
        registerSimpleEvents();
        registerEvents$2();
        registerEvents$1();
        registerEvents$3();
        registerEvents();
        function extractEvents$5(dispatchQueue, domEventName, targetInst, nativeEvent, nativeEventTarget, eventSystemFlags, targetContainer) {
          extractEvents$4(dispatchQueue, domEventName, targetInst, nativeEvent, nativeEventTarget, eventSystemFlags);
          var shouldProcessPolyfillPlugins = (eventSystemFlags & SHOULD_NOT_PROCESS_POLYFILL_EVENT_PLUGINS) === 0;
          if (shouldProcessPolyfillPlugins) {
            extractEvents$2(dispatchQueue, domEventName, targetInst, nativeEvent, nativeEventTarget, eventSystemFlags);
            extractEvents$1(dispatchQueue, domEventName, targetInst, nativeEvent, nativeEventTarget);
            extractEvents$3(dispatchQueue, domEventName, targetInst, nativeEvent, nativeEventTarget);
            extractEvents(dispatchQueue, domEventName, targetInst, nativeEvent, nativeEventTarget);
          }
        }
        var mediaEventTypes = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"];
        var nonDelegatedEvents = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(mediaEventTypes));
        function executeDispatch(event, listener, currentTarget) {
          var type = event.type || "unknown-event";
          event.currentTarget = currentTarget;
          invokeGuardedCallbackAndCatchFirstError(type, listener, void 0, event);
          event.currentTarget = null;
        }
        function processDispatchQueueItemsInOrder(event, dispatchListeners, inCapturePhase) {
          var previousInstance;
          if (inCapturePhase) {
            for (var i4 = dispatchListeners.length - 1; i4 >= 0; i4--) {
              var _dispatchListeners$i = dispatchListeners[i4], instance = _dispatchListeners$i.instance, currentTarget = _dispatchListeners$i.currentTarget, listener = _dispatchListeners$i.listener;
              if (instance !== previousInstance && event.isPropagationStopped()) {
                return;
              }
              executeDispatch(event, listener, currentTarget);
              previousInstance = instance;
            }
          } else {
            for (var _i = 0; _i < dispatchListeners.length; _i++) {
              var _dispatchListeners$_i = dispatchListeners[_i], _instance = _dispatchListeners$_i.instance, _currentTarget = _dispatchListeners$_i.currentTarget, _listener = _dispatchListeners$_i.listener;
              if (_instance !== previousInstance && event.isPropagationStopped()) {
                return;
              }
              executeDispatch(event, _listener, _currentTarget);
              previousInstance = _instance;
            }
          }
        }
        function processDispatchQueue(dispatchQueue, eventSystemFlags) {
          var inCapturePhase = (eventSystemFlags & IS_CAPTURE_PHASE) !== 0;
          for (var i4 = 0; i4 < dispatchQueue.length; i4++) {
            var _dispatchQueue$i = dispatchQueue[i4], event = _dispatchQueue$i.event, listeners = _dispatchQueue$i.listeners;
            processDispatchQueueItemsInOrder(event, listeners, inCapturePhase);
          }
          rethrowCaughtError();
        }
        function dispatchEventsForPlugins(domEventName, eventSystemFlags, nativeEvent, targetInst, targetContainer) {
          var nativeEventTarget = getEventTarget(nativeEvent);
          var dispatchQueue = [];
          extractEvents$5(dispatchQueue, domEventName, targetInst, nativeEvent, nativeEventTarget, eventSystemFlags);
          processDispatchQueue(dispatchQueue, eventSystemFlags);
        }
        function listenToNonDelegatedEvent(domEventName, targetElement) {
          var isCapturePhaseListener = false;
          var listenerSet = getEventListenerSet(targetElement);
          var listenerSetKey = getListenerSetKey(domEventName, isCapturePhaseListener);
          if (!listenerSet.has(listenerSetKey)) {
            addTrappedEventListener(targetElement, domEventName, IS_NON_DELEGATED, isCapturePhaseListener);
            listenerSet.add(listenerSetKey);
          }
        }
        var listeningMarker = "_reactListening" + Math.random().toString(36).slice(2);
        function listenToAllSupportedEvents(rootContainerElement) {
          {
            if (rootContainerElement[listeningMarker]) {
              return;
            }
            rootContainerElement[listeningMarker] = true;
            allNativeEvents.forEach(function(domEventName) {
              if (!nonDelegatedEvents.has(domEventName)) {
                listenToNativeEvent(domEventName, false, rootContainerElement, null);
              }
              listenToNativeEvent(domEventName, true, rootContainerElement, null);
            });
          }
        }
        function listenToNativeEvent(domEventName, isCapturePhaseListener, rootContainerElement, targetElement) {
          var eventSystemFlags = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
          var target = rootContainerElement;
          if (domEventName === "selectionchange" && rootContainerElement.nodeType !== DOCUMENT_NODE) {
            target = rootContainerElement.ownerDocument;
          }
          if (targetElement !== null && !isCapturePhaseListener && nonDelegatedEvents.has(domEventName)) {
            if (domEventName !== "scroll") {
              return;
            }
            eventSystemFlags |= IS_NON_DELEGATED;
            target = targetElement;
          }
          var listenerSet = getEventListenerSet(target);
          var listenerSetKey = getListenerSetKey(domEventName, isCapturePhaseListener);
          if (!listenerSet.has(listenerSetKey)) {
            if (isCapturePhaseListener) {
              eventSystemFlags |= IS_CAPTURE_PHASE;
            }
            addTrappedEventListener(target, domEventName, eventSystemFlags, isCapturePhaseListener);
            listenerSet.add(listenerSetKey);
          }
        }
        function addTrappedEventListener(targetContainer, domEventName, eventSystemFlags, isCapturePhaseListener, isDeferredListenerForLegacyFBSupport) {
          var listener = createEventListenerWrapperWithPriority(targetContainer, domEventName, eventSystemFlags);
          var isPassiveListener = void 0;
          if (passiveBrowserEventsSupported) {
            if (domEventName === "touchstart" || domEventName === "touchmove" || domEventName === "wheel") {
              isPassiveListener = true;
            }
          }
          targetContainer = targetContainer;
          var unsubscribeListener;
          if (isCapturePhaseListener) {
            if (isPassiveListener !== void 0) {
              unsubscribeListener = addEventCaptureListenerWithPassiveFlag(targetContainer, domEventName, listener, isPassiveListener);
            } else {
              unsubscribeListener = addEventCaptureListener(targetContainer, domEventName, listener);
            }
          } else {
            if (isPassiveListener !== void 0) {
              unsubscribeListener = addEventBubbleListenerWithPassiveFlag(targetContainer, domEventName, listener, isPassiveListener);
            } else {
              unsubscribeListener = addEventBubbleListener(targetContainer, domEventName, listener);
            }
          }
        }
        function isMatchingRootContainer(grandContainer, targetContainer) {
          return grandContainer === targetContainer || grandContainer.nodeType === COMMENT_NODE && grandContainer.parentNode === targetContainer;
        }
        function dispatchEventForPluginEventSystem(domEventName, eventSystemFlags, nativeEvent, targetInst, targetContainer) {
          var ancestorInst = targetInst;
          if ((eventSystemFlags & IS_EVENT_HANDLE_NON_MANAGED_NODE) === 0 && (eventSystemFlags & IS_NON_DELEGATED) === 0) {
            var targetContainerNode = targetContainer;
            if (targetInst !== null) {
              var node = targetInst;
              mainLoop:
                while (true) {
                  if (node === null) {
                    return;
                  }
                  var nodeTag = node.tag;
                  if (nodeTag === HostRoot || nodeTag === HostPortal) {
                    var container = node.stateNode.containerInfo;
                    if (isMatchingRootContainer(container, targetContainerNode)) {
                      break;
                    }
                    if (nodeTag === HostPortal) {
                      var grandNode = node.return;
                      while (grandNode !== null) {
                        var grandTag = grandNode.tag;
                        if (grandTag === HostRoot || grandTag === HostPortal) {
                          var grandContainer = grandNode.stateNode.containerInfo;
                          if (isMatchingRootContainer(grandContainer, targetContainerNode)) {
                            return;
                          }
                        }
                        grandNode = grandNode.return;
                      }
                    }
                    while (container !== null) {
                      var parentNode = getClosestInstanceFromNode(container);
                      if (parentNode === null) {
                        return;
                      }
                      var parentTag = parentNode.tag;
                      if (parentTag === HostComponent || parentTag === HostText) {
                        node = ancestorInst = parentNode;
                        continue mainLoop;
                      }
                      container = container.parentNode;
                    }
                  }
                  node = node.return;
                }
            }
          }
          batchedEventUpdates(function() {
            return dispatchEventsForPlugins(domEventName, eventSystemFlags, nativeEvent, ancestorInst);
          });
        }
        function createDispatchListener(instance, listener, currentTarget) {
          return {
            instance,
            listener,
            currentTarget
          };
        }
        function accumulateSinglePhaseListeners(targetFiber, reactName, nativeEventType, inCapturePhase, accumulateTargetOnly) {
          var captureName = reactName !== null ? reactName + "Capture" : null;
          var reactEventName = inCapturePhase ? captureName : reactName;
          var listeners = [];
          var instance = targetFiber;
          var lastHostComponent = null;
          while (instance !== null) {
            var _instance2 = instance, stateNode = _instance2.stateNode, tag = _instance2.tag;
            if (tag === HostComponent && stateNode !== null) {
              lastHostComponent = stateNode;
              if (reactEventName !== null) {
                var listener = getListener(instance, reactEventName);
                if (listener != null) {
                  listeners.push(createDispatchListener(instance, listener, lastHostComponent));
                }
              }
            }
            if (accumulateTargetOnly) {
              break;
            }
            instance = instance.return;
          }
          return listeners;
        }
        function accumulateTwoPhaseListeners(targetFiber, reactName) {
          var captureName = reactName + "Capture";
          var listeners = [];
          var instance = targetFiber;
          while (instance !== null) {
            var _instance3 = instance, stateNode = _instance3.stateNode, tag = _instance3.tag;
            if (tag === HostComponent && stateNode !== null) {
              var currentTarget = stateNode;
              var captureListener = getListener(instance, captureName);
              if (captureListener != null) {
                listeners.unshift(createDispatchListener(instance, captureListener, currentTarget));
              }
              var bubbleListener = getListener(instance, reactName);
              if (bubbleListener != null) {
                listeners.push(createDispatchListener(instance, bubbleListener, currentTarget));
              }
            }
            instance = instance.return;
          }
          return listeners;
        }
        function getParent(inst) {
          if (inst === null) {
            return null;
          }
          do {
            inst = inst.return;
          } while (inst && inst.tag !== HostComponent);
          if (inst) {
            return inst;
          }
          return null;
        }
        function getLowestCommonAncestor(instA, instB) {
          var nodeA = instA;
          var nodeB = instB;
          var depthA = 0;
          for (var tempA = nodeA; tempA; tempA = getParent(tempA)) {
            depthA++;
          }
          var depthB = 0;
          for (var tempB = nodeB; tempB; tempB = getParent(tempB)) {
            depthB++;
          }
          while (depthA - depthB > 0) {
            nodeA = getParent(nodeA);
            depthA--;
          }
          while (depthB - depthA > 0) {
            nodeB = getParent(nodeB);
            depthB--;
          }
          var depth = depthA;
          while (depth--) {
            if (nodeA === nodeB || nodeB !== null && nodeA === nodeB.alternate) {
              return nodeA;
            }
            nodeA = getParent(nodeA);
            nodeB = getParent(nodeB);
          }
          return null;
        }
        function accumulateEnterLeaveListenersForEvent(dispatchQueue, event, target, common, inCapturePhase) {
          var registrationName = event._reactName;
          var listeners = [];
          var instance = target;
          while (instance !== null) {
            if (instance === common) {
              break;
            }
            var _instance4 = instance, alternate = _instance4.alternate, stateNode = _instance4.stateNode, tag = _instance4.tag;
            if (alternate !== null && alternate === common) {
              break;
            }
            if (tag === HostComponent && stateNode !== null) {
              var currentTarget = stateNode;
              if (inCapturePhase) {
                var captureListener = getListener(instance, registrationName);
                if (captureListener != null) {
                  listeners.unshift(createDispatchListener(instance, captureListener, currentTarget));
                }
              } else if (!inCapturePhase) {
                var bubbleListener = getListener(instance, registrationName);
                if (bubbleListener != null) {
                  listeners.push(createDispatchListener(instance, bubbleListener, currentTarget));
                }
              }
            }
            instance = instance.return;
          }
          if (listeners.length !== 0) {
            dispatchQueue.push({
              event,
              listeners
            });
          }
        }
        function accumulateEnterLeaveTwoPhaseListeners(dispatchQueue, leaveEvent, enterEvent, from, to) {
          var common = from && to ? getLowestCommonAncestor(from, to) : null;
          if (from !== null) {
            accumulateEnterLeaveListenersForEvent(dispatchQueue, leaveEvent, from, common, false);
          }
          if (to !== null && enterEvent !== null) {
            accumulateEnterLeaveListenersForEvent(dispatchQueue, enterEvent, to, common, true);
          }
        }
        function getListenerSetKey(domEventName, capture) {
          return domEventName + "__" + (capture ? "capture" : "bubble");
        }
        var didWarnInvalidHydration = false;
        var DANGEROUSLY_SET_INNER_HTML = "dangerouslySetInnerHTML";
        var SUPPRESS_CONTENT_EDITABLE_WARNING = "suppressContentEditableWarning";
        var SUPPRESS_HYDRATION_WARNING = "suppressHydrationWarning";
        var AUTOFOCUS = "autoFocus";
        var CHILDREN = "children";
        var STYLE = "style";
        var HTML$1 = "__html";
        var HTML_NAMESPACE$1 = Namespaces.html;
        var warnedUnknownTags;
        var suppressHydrationWarning;
        var validatePropertiesInDevelopment;
        var warnForTextDifference;
        var warnForPropDifference;
        var warnForExtraAttributes;
        var warnForInvalidEventListener;
        var canDiffStyleForHydrationWarning;
        var normalizeMarkupForTextOrAttribute;
        var normalizeHTML;
        {
          warnedUnknownTags = {
            dialog: true,
            webview: true
          };
          validatePropertiesInDevelopment = function(type, props) {
            validateProperties(type, props);
            validateProperties$1(type, props);
            validateProperties$2(type, props, {
              registrationNameDependencies,
              possibleRegistrationNames
            });
          };
          canDiffStyleForHydrationWarning = canUseDOM && !document.documentMode;
          var NORMALIZE_NEWLINES_REGEX = /\r\n?/g;
          var NORMALIZE_NULL_AND_REPLACEMENT_REGEX = /\u0000|\uFFFD/g;
          normalizeMarkupForTextOrAttribute = function(markup) {
            var markupString = typeof markup === "string" ? markup : "" + markup;
            return markupString.replace(NORMALIZE_NEWLINES_REGEX, "\n").replace(NORMALIZE_NULL_AND_REPLACEMENT_REGEX, "");
          };
          warnForTextDifference = function(serverText, clientText) {
            if (didWarnInvalidHydration) {
              return;
            }
            var normalizedClientText = normalizeMarkupForTextOrAttribute(clientText);
            var normalizedServerText = normalizeMarkupForTextOrAttribute(serverText);
            if (normalizedServerText === normalizedClientText) {
              return;
            }
            didWarnInvalidHydration = true;
            error('Text content did not match. Server: "%s" Client: "%s"', normalizedServerText, normalizedClientText);
          };
          warnForPropDifference = function(propName, serverValue, clientValue) {
            if (didWarnInvalidHydration) {
              return;
            }
            var normalizedClientValue = normalizeMarkupForTextOrAttribute(clientValue);
            var normalizedServerValue = normalizeMarkupForTextOrAttribute(serverValue);
            if (normalizedServerValue === normalizedClientValue) {
              return;
            }
            didWarnInvalidHydration = true;
            error("Prop `%s` did not match. Server: %s Client: %s", propName, JSON.stringify(normalizedServerValue), JSON.stringify(normalizedClientValue));
          };
          warnForExtraAttributes = function(attributeNames) {
            if (didWarnInvalidHydration) {
              return;
            }
            didWarnInvalidHydration = true;
            var names = [];
            attributeNames.forEach(function(name) {
              names.push(name);
            });
            error("Extra attributes from the server: %s", names);
          };
          warnForInvalidEventListener = function(registrationName, listener) {
            if (listener === false) {
              error("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", registrationName, registrationName, registrationName);
            } else {
              error("Expected `%s` listener to be a function, instead got a value of `%s` type.", registrationName, typeof listener);
            }
          };
          normalizeHTML = function(parent, html) {
            var testElement = parent.namespaceURI === HTML_NAMESPACE$1 ? parent.ownerDocument.createElement(parent.tagName) : parent.ownerDocument.createElementNS(parent.namespaceURI, parent.tagName);
            testElement.innerHTML = html;
            return testElement.innerHTML;
          };
        }
        function getOwnerDocumentFromRootContainer(rootContainerElement) {
          return rootContainerElement.nodeType === DOCUMENT_NODE ? rootContainerElement : rootContainerElement.ownerDocument;
        }
        function noop() {
        }
        function trapClickOnNonInteractiveElement(node) {
          node.onclick = noop;
        }
        function setInitialDOMProperties(tag, domElement, rootContainerElement, nextProps, isCustomComponentTag) {
          for (var propKey in nextProps) {
            if (!nextProps.hasOwnProperty(propKey)) {
              continue;
            }
            var nextProp = nextProps[propKey];
            if (propKey === STYLE) {
              {
                if (nextProp) {
                  Object.freeze(nextProp);
                }
              }
              setValueForStyles(domElement, nextProp);
            } else if (propKey === DANGEROUSLY_SET_INNER_HTML) {
              var nextHtml = nextProp ? nextProp[HTML$1] : void 0;
              if (nextHtml != null) {
                setInnerHTML(domElement, nextHtml);
              }
            } else if (propKey === CHILDREN) {
              if (typeof nextProp === "string") {
                var canSetTextContent = tag !== "textarea" || nextProp !== "";
                if (canSetTextContent) {
                  setTextContent(domElement, nextProp);
                }
              } else if (typeof nextProp === "number") {
                setTextContent(domElement, "" + nextProp);
              }
            } else if (propKey === SUPPRESS_CONTENT_EDITABLE_WARNING || propKey === SUPPRESS_HYDRATION_WARNING)
              ;
            else if (propKey === AUTOFOCUS)
              ;
            else if (registrationNameDependencies.hasOwnProperty(propKey)) {
              if (nextProp != null) {
                if (typeof nextProp !== "function") {
                  warnForInvalidEventListener(propKey, nextProp);
                }
                if (propKey === "onScroll") {
                  listenToNonDelegatedEvent("scroll", domElement);
                }
              }
            } else if (nextProp != null) {
              setValueForProperty(domElement, propKey, nextProp, isCustomComponentTag);
            }
          }
        }
        function updateDOMProperties(domElement, updatePayload, wasCustomComponentTag, isCustomComponentTag) {
          for (var i4 = 0; i4 < updatePayload.length; i4 += 2) {
            var propKey = updatePayload[i4];
            var propValue = updatePayload[i4 + 1];
            if (propKey === STYLE) {
              setValueForStyles(domElement, propValue);
            } else if (propKey === DANGEROUSLY_SET_INNER_HTML) {
              setInnerHTML(domElement, propValue);
            } else if (propKey === CHILDREN) {
              setTextContent(domElement, propValue);
            } else {
              setValueForProperty(domElement, propKey, propValue, isCustomComponentTag);
            }
          }
        }
        function createElement(type, props, rootContainerElement, parentNamespace) {
          var isCustomComponentTag;
          var ownerDocument = getOwnerDocumentFromRootContainer(rootContainerElement);
          var domElement;
          var namespaceURI = parentNamespace;
          if (namespaceURI === HTML_NAMESPACE$1) {
            namespaceURI = getIntrinsicNamespace(type);
          }
          if (namespaceURI === HTML_NAMESPACE$1) {
            {
              isCustomComponentTag = isCustomComponent(type, props);
              if (!isCustomComponentTag && type !== type.toLowerCase()) {
                error("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", type);
              }
            }
            if (type === "script") {
              var div = ownerDocument.createElement("div");
              div.innerHTML = "<script></script>";
              var firstChild = div.firstChild;
              domElement = div.removeChild(firstChild);
            } else if (typeof props.is === "string") {
              domElement = ownerDocument.createElement(type, {
                is: props.is
              });
            } else {
              domElement = ownerDocument.createElement(type);
              if (type === "select") {
                var node = domElement;
                if (props.multiple) {
                  node.multiple = true;
                } else if (props.size) {
                  node.size = props.size;
                }
              }
            }
          } else {
            domElement = ownerDocument.createElementNS(namespaceURI, type);
          }
          {
            if (namespaceURI === HTML_NAMESPACE$1) {
              if (!isCustomComponentTag && Object.prototype.toString.call(domElement) === "[object HTMLUnknownElement]" && !Object.prototype.hasOwnProperty.call(warnedUnknownTags, type)) {
                warnedUnknownTags[type] = true;
                error("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", type);
              }
            }
          }
          return domElement;
        }
        function createTextNode(text, rootContainerElement) {
          return getOwnerDocumentFromRootContainer(rootContainerElement).createTextNode(text);
        }
        function setInitialProperties(domElement, tag, rawProps, rootContainerElement) {
          var isCustomComponentTag = isCustomComponent(tag, rawProps);
          {
            validatePropertiesInDevelopment(tag, rawProps);
          }
          var props;
          switch (tag) {
            case "dialog":
              listenToNonDelegatedEvent("cancel", domElement);
              listenToNonDelegatedEvent("close", domElement);
              props = rawProps;
              break;
            case "iframe":
            case "object":
            case "embed":
              listenToNonDelegatedEvent("load", domElement);
              props = rawProps;
              break;
            case "video":
            case "audio":
              for (var i4 = 0; i4 < mediaEventTypes.length; i4++) {
                listenToNonDelegatedEvent(mediaEventTypes[i4], domElement);
              }
              props = rawProps;
              break;
            case "source":
              listenToNonDelegatedEvent("error", domElement);
              props = rawProps;
              break;
            case "img":
            case "image":
            case "link":
              listenToNonDelegatedEvent("error", domElement);
              listenToNonDelegatedEvent("load", domElement);
              props = rawProps;
              break;
            case "details":
              listenToNonDelegatedEvent("toggle", domElement);
              props = rawProps;
              break;
            case "input":
              initWrapperState(domElement, rawProps);
              props = getHostProps(domElement, rawProps);
              listenToNonDelegatedEvent("invalid", domElement);
              break;
            case "option":
              validateProps(domElement, rawProps);
              props = getHostProps$1(domElement, rawProps);
              break;
            case "select":
              initWrapperState$1(domElement, rawProps);
              props = getHostProps$2(domElement, rawProps);
              listenToNonDelegatedEvent("invalid", domElement);
              break;
            case "textarea":
              initWrapperState$2(domElement, rawProps);
              props = getHostProps$3(domElement, rawProps);
              listenToNonDelegatedEvent("invalid", domElement);
              break;
            default:
              props = rawProps;
          }
          assertValidProps(tag, props);
          setInitialDOMProperties(tag, domElement, rootContainerElement, props, isCustomComponentTag);
          switch (tag) {
            case "input":
              track(domElement);
              postMountWrapper(domElement, rawProps, false);
              break;
            case "textarea":
              track(domElement);
              postMountWrapper$3(domElement);
              break;
            case "option":
              postMountWrapper$1(domElement, rawProps);
              break;
            case "select":
              postMountWrapper$2(domElement, rawProps);
              break;
            default:
              if (typeof props.onClick === "function") {
                trapClickOnNonInteractiveElement(domElement);
              }
              break;
          }
        }
        function diffProperties(domElement, tag, lastRawProps, nextRawProps, rootContainerElement) {
          {
            validatePropertiesInDevelopment(tag, nextRawProps);
          }
          var updatePayload = null;
          var lastProps;
          var nextProps;
          switch (tag) {
            case "input":
              lastProps = getHostProps(domElement, lastRawProps);
              nextProps = getHostProps(domElement, nextRawProps);
              updatePayload = [];
              break;
            case "option":
              lastProps = getHostProps$1(domElement, lastRawProps);
              nextProps = getHostProps$1(domElement, nextRawProps);
              updatePayload = [];
              break;
            case "select":
              lastProps = getHostProps$2(domElement, lastRawProps);
              nextProps = getHostProps$2(domElement, nextRawProps);
              updatePayload = [];
              break;
            case "textarea":
              lastProps = getHostProps$3(domElement, lastRawProps);
              nextProps = getHostProps$3(domElement, nextRawProps);
              updatePayload = [];
              break;
            default:
              lastProps = lastRawProps;
              nextProps = nextRawProps;
              if (typeof lastProps.onClick !== "function" && typeof nextProps.onClick === "function") {
                trapClickOnNonInteractiveElement(domElement);
              }
              break;
          }
          assertValidProps(tag, nextProps);
          var propKey;
          var styleName;
          var styleUpdates = null;
          for (propKey in lastProps) {
            if (nextProps.hasOwnProperty(propKey) || !lastProps.hasOwnProperty(propKey) || lastProps[propKey] == null) {
              continue;
            }
            if (propKey === STYLE) {
              var lastStyle = lastProps[propKey];
              for (styleName in lastStyle) {
                if (lastStyle.hasOwnProperty(styleName)) {
                  if (!styleUpdates) {
                    styleUpdates = {};
                  }
                  styleUpdates[styleName] = "";
                }
              }
            } else if (propKey === DANGEROUSLY_SET_INNER_HTML || propKey === CHILDREN)
              ;
            else if (propKey === SUPPRESS_CONTENT_EDITABLE_WARNING || propKey === SUPPRESS_HYDRATION_WARNING)
              ;
            else if (propKey === AUTOFOCUS)
              ;
            else if (registrationNameDependencies.hasOwnProperty(propKey)) {
              if (!updatePayload) {
                updatePayload = [];
              }
            } else {
              (updatePayload = updatePayload || []).push(propKey, null);
            }
          }
          for (propKey in nextProps) {
            var nextProp = nextProps[propKey];
            var lastProp = lastProps != null ? lastProps[propKey] : void 0;
            if (!nextProps.hasOwnProperty(propKey) || nextProp === lastProp || nextProp == null && lastProp == null) {
              continue;
            }
            if (propKey === STYLE) {
              {
                if (nextProp) {
                  Object.freeze(nextProp);
                }
              }
              if (lastProp) {
                for (styleName in lastProp) {
                  if (lastProp.hasOwnProperty(styleName) && (!nextProp || !nextProp.hasOwnProperty(styleName))) {
                    if (!styleUpdates) {
                      styleUpdates = {};
                    }
                    styleUpdates[styleName] = "";
                  }
                }
                for (styleName in nextProp) {
                  if (nextProp.hasOwnProperty(styleName) && lastProp[styleName] !== nextProp[styleName]) {
                    if (!styleUpdates) {
                      styleUpdates = {};
                    }
                    styleUpdates[styleName] = nextProp[styleName];
                  }
                }
              } else {
                if (!styleUpdates) {
                  if (!updatePayload) {
                    updatePayload = [];
                  }
                  updatePayload.push(propKey, styleUpdates);
                }
                styleUpdates = nextProp;
              }
            } else if (propKey === DANGEROUSLY_SET_INNER_HTML) {
              var nextHtml = nextProp ? nextProp[HTML$1] : void 0;
              var lastHtml = lastProp ? lastProp[HTML$1] : void 0;
              if (nextHtml != null) {
                if (lastHtml !== nextHtml) {
                  (updatePayload = updatePayload || []).push(propKey, nextHtml);
                }
              }
            } else if (propKey === CHILDREN) {
              if (typeof nextProp === "string" || typeof nextProp === "number") {
                (updatePayload = updatePayload || []).push(propKey, "" + nextProp);
              }
            } else if (propKey === SUPPRESS_CONTENT_EDITABLE_WARNING || propKey === SUPPRESS_HYDRATION_WARNING)
              ;
            else if (registrationNameDependencies.hasOwnProperty(propKey)) {
              if (nextProp != null) {
                if (typeof nextProp !== "function") {
                  warnForInvalidEventListener(propKey, nextProp);
                }
                if (propKey === "onScroll") {
                  listenToNonDelegatedEvent("scroll", domElement);
                }
              }
              if (!updatePayload && lastProp !== nextProp) {
                updatePayload = [];
              }
            } else if (typeof nextProp === "object" && nextProp !== null && nextProp.$$typeof === REACT_OPAQUE_ID_TYPE) {
              nextProp.toString();
            } else {
              (updatePayload = updatePayload || []).push(propKey, nextProp);
            }
          }
          if (styleUpdates) {
            {
              validateShorthandPropertyCollisionInDev(styleUpdates, nextProps[STYLE]);
            }
            (updatePayload = updatePayload || []).push(STYLE, styleUpdates);
          }
          return updatePayload;
        }
        function updateProperties(domElement, updatePayload, tag, lastRawProps, nextRawProps) {
          if (tag === "input" && nextRawProps.type === "radio" && nextRawProps.name != null) {
            updateChecked(domElement, nextRawProps);
          }
          var wasCustomComponentTag = isCustomComponent(tag, lastRawProps);
          var isCustomComponentTag = isCustomComponent(tag, nextRawProps);
          updateDOMProperties(domElement, updatePayload, wasCustomComponentTag, isCustomComponentTag);
          switch (tag) {
            case "input":
              updateWrapper(domElement, nextRawProps);
              break;
            case "textarea":
              updateWrapper$1(domElement, nextRawProps);
              break;
            case "select":
              postUpdateWrapper(domElement, nextRawProps);
              break;
          }
        }
        function getPossibleStandardName(propName) {
          {
            var lowerCasedName = propName.toLowerCase();
            if (!possibleStandardNames.hasOwnProperty(lowerCasedName)) {
              return null;
            }
            return possibleStandardNames[lowerCasedName] || null;
          }
        }
        function diffHydratedProperties(domElement, tag, rawProps, parentNamespace, rootContainerElement) {
          var isCustomComponentTag;
          var extraAttributeNames;
          {
            suppressHydrationWarning = rawProps[SUPPRESS_HYDRATION_WARNING] === true;
            isCustomComponentTag = isCustomComponent(tag, rawProps);
            validatePropertiesInDevelopment(tag, rawProps);
          }
          switch (tag) {
            case "dialog":
              listenToNonDelegatedEvent("cancel", domElement);
              listenToNonDelegatedEvent("close", domElement);
              break;
            case "iframe":
            case "object":
            case "embed":
              listenToNonDelegatedEvent("load", domElement);
              break;
            case "video":
            case "audio":
              for (var i4 = 0; i4 < mediaEventTypes.length; i4++) {
                listenToNonDelegatedEvent(mediaEventTypes[i4], domElement);
              }
              break;
            case "source":
              listenToNonDelegatedEvent("error", domElement);
              break;
            case "img":
            case "image":
            case "link":
              listenToNonDelegatedEvent("error", domElement);
              listenToNonDelegatedEvent("load", domElement);
              break;
            case "details":
              listenToNonDelegatedEvent("toggle", domElement);
              break;
            case "input":
              initWrapperState(domElement, rawProps);
              listenToNonDelegatedEvent("invalid", domElement);
              break;
            case "option":
              validateProps(domElement, rawProps);
              break;
            case "select":
              initWrapperState$1(domElement, rawProps);
              listenToNonDelegatedEvent("invalid", domElement);
              break;
            case "textarea":
              initWrapperState$2(domElement, rawProps);
              listenToNonDelegatedEvent("invalid", domElement);
              break;
          }
          assertValidProps(tag, rawProps);
          {
            extraAttributeNames = new Set();
            var attributes = domElement.attributes;
            for (var _i = 0; _i < attributes.length; _i++) {
              var name = attributes[_i].name.toLowerCase();
              switch (name) {
                case "data-reactroot":
                  break;
                case "value":
                  break;
                case "checked":
                  break;
                case "selected":
                  break;
                default:
                  extraAttributeNames.add(attributes[_i].name);
              }
            }
          }
          var updatePayload = null;
          for (var propKey in rawProps) {
            if (!rawProps.hasOwnProperty(propKey)) {
              continue;
            }
            var nextProp = rawProps[propKey];
            if (propKey === CHILDREN) {
              if (typeof nextProp === "string") {
                if (domElement.textContent !== nextProp) {
                  if (!suppressHydrationWarning) {
                    warnForTextDifference(domElement.textContent, nextProp);
                  }
                  updatePayload = [CHILDREN, nextProp];
                }
              } else if (typeof nextProp === "number") {
                if (domElement.textContent !== "" + nextProp) {
                  if (!suppressHydrationWarning) {
                    warnForTextDifference(domElement.textContent, nextProp);
                  }
                  updatePayload = [CHILDREN, "" + nextProp];
                }
              }
            } else if (registrationNameDependencies.hasOwnProperty(propKey)) {
              if (nextProp != null) {
                if (typeof nextProp !== "function") {
                  warnForInvalidEventListener(propKey, nextProp);
                }
                if (propKey === "onScroll") {
                  listenToNonDelegatedEvent("scroll", domElement);
                }
              }
            } else if (typeof isCustomComponentTag === "boolean") {
              var serverValue = void 0;
              var propertyInfo = getPropertyInfo(propKey);
              if (suppressHydrationWarning)
                ;
              else if (propKey === SUPPRESS_CONTENT_EDITABLE_WARNING || propKey === SUPPRESS_HYDRATION_WARNING || propKey === "value" || propKey === "checked" || propKey === "selected")
                ;
              else if (propKey === DANGEROUSLY_SET_INNER_HTML) {
                var serverHTML = domElement.innerHTML;
                var nextHtml = nextProp ? nextProp[HTML$1] : void 0;
                if (nextHtml != null) {
                  var expectedHTML = normalizeHTML(domElement, nextHtml);
                  if (expectedHTML !== serverHTML) {
                    warnForPropDifference(propKey, serverHTML, expectedHTML);
                  }
                }
              } else if (propKey === STYLE) {
                extraAttributeNames.delete(propKey);
                if (canDiffStyleForHydrationWarning) {
                  var expectedStyle = createDangerousStringForStyles(nextProp);
                  serverValue = domElement.getAttribute("style");
                  if (expectedStyle !== serverValue) {
                    warnForPropDifference(propKey, serverValue, expectedStyle);
                  }
                }
              } else if (isCustomComponentTag) {
                extraAttributeNames.delete(propKey.toLowerCase());
                serverValue = getValueForAttribute(domElement, propKey, nextProp);
                if (nextProp !== serverValue) {
                  warnForPropDifference(propKey, serverValue, nextProp);
                }
              } else if (!shouldIgnoreAttribute(propKey, propertyInfo, isCustomComponentTag) && !shouldRemoveAttribute(propKey, nextProp, propertyInfo, isCustomComponentTag)) {
                var isMismatchDueToBadCasing = false;
                if (propertyInfo !== null) {
                  extraAttributeNames.delete(propertyInfo.attributeName);
                  serverValue = getValueForProperty(domElement, propKey, nextProp, propertyInfo);
                } else {
                  var ownNamespace = parentNamespace;
                  if (ownNamespace === HTML_NAMESPACE$1) {
                    ownNamespace = getIntrinsicNamespace(tag);
                  }
                  if (ownNamespace === HTML_NAMESPACE$1) {
                    extraAttributeNames.delete(propKey.toLowerCase());
                  } else {
                    var standardName = getPossibleStandardName(propKey);
                    if (standardName !== null && standardName !== propKey) {
                      isMismatchDueToBadCasing = true;
                      extraAttributeNames.delete(standardName);
                    }
                    extraAttributeNames.delete(propKey);
                  }
                  serverValue = getValueForAttribute(domElement, propKey, nextProp);
                }
                if (nextProp !== serverValue && !isMismatchDueToBadCasing) {
                  warnForPropDifference(propKey, serverValue, nextProp);
                }
              }
            }
          }
          {
            if (extraAttributeNames.size > 0 && !suppressHydrationWarning) {
              warnForExtraAttributes(extraAttributeNames);
            }
          }
          switch (tag) {
            case "input":
              track(domElement);
              postMountWrapper(domElement, rawProps, true);
              break;
            case "textarea":
              track(domElement);
              postMountWrapper$3(domElement);
              break;
            case "select":
            case "option":
              break;
            default:
              if (typeof rawProps.onClick === "function") {
                trapClickOnNonInteractiveElement(domElement);
              }
              break;
          }
          return updatePayload;
        }
        function diffHydratedText(textNode, text) {
          var isDifferent = textNode.nodeValue !== text;
          return isDifferent;
        }
        function warnForUnmatchedText(textNode, text) {
          {
            warnForTextDifference(textNode.nodeValue, text);
          }
        }
        function warnForDeletedHydratableElement(parentNode, child) {
          {
            if (didWarnInvalidHydration) {
              return;
            }
            didWarnInvalidHydration = true;
            error("Did not expect server HTML to contain a <%s> in <%s>.", child.nodeName.toLowerCase(), parentNode.nodeName.toLowerCase());
          }
        }
        function warnForDeletedHydratableText(parentNode, child) {
          {
            if (didWarnInvalidHydration) {
              return;
            }
            didWarnInvalidHydration = true;
            error('Did not expect server HTML to contain the text node "%s" in <%s>.', child.nodeValue, parentNode.nodeName.toLowerCase());
          }
        }
        function warnForInsertedHydratedElement(parentNode, tag, props) {
          {
            if (didWarnInvalidHydration) {
              return;
            }
            didWarnInvalidHydration = true;
            error("Expected server HTML to contain a matching <%s> in <%s>.", tag, parentNode.nodeName.toLowerCase());
          }
        }
        function warnForInsertedHydratedText(parentNode, text) {
          {
            if (text === "") {
              return;
            }
            if (didWarnInvalidHydration) {
              return;
            }
            didWarnInvalidHydration = true;
            error('Expected server HTML to contain a matching text node for "%s" in <%s>.', text, parentNode.nodeName.toLowerCase());
          }
        }
        function restoreControlledState$3(domElement, tag, props) {
          switch (tag) {
            case "input":
              restoreControlledState(domElement, props);
              return;
            case "textarea":
              restoreControlledState$2(domElement, props);
              return;
            case "select":
              restoreControlledState$1(domElement, props);
              return;
          }
        }
        var validateDOMNesting = function() {
        };
        var updatedAncestorInfo = function() {
        };
        {
          var specialTags = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"];
          var inScopeTags = [
            "applet",
            "caption",
            "html",
            "table",
            "td",
            "th",
            "marquee",
            "object",
            "template",
            "foreignObject",
            "desc",
            "title"
          ];
          var buttonScopeTags = inScopeTags.concat(["button"]);
          var impliedEndTags = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"];
          var emptyAncestorInfo = {
            current: null,
            formTag: null,
            aTagInScope: null,
            buttonTagInScope: null,
            nobrTagInScope: null,
            pTagInButtonScope: null,
            listItemTagAutoclosing: null,
            dlItemTagAutoclosing: null
          };
          updatedAncestorInfo = function(oldInfo, tag) {
            var ancestorInfo = _assign({}, oldInfo || emptyAncestorInfo);
            var info = {
              tag
            };
            if (inScopeTags.indexOf(tag) !== -1) {
              ancestorInfo.aTagInScope = null;
              ancestorInfo.buttonTagInScope = null;
              ancestorInfo.nobrTagInScope = null;
            }
            if (buttonScopeTags.indexOf(tag) !== -1) {
              ancestorInfo.pTagInButtonScope = null;
            }
            if (specialTags.indexOf(tag) !== -1 && tag !== "address" && tag !== "div" && tag !== "p") {
              ancestorInfo.listItemTagAutoclosing = null;
              ancestorInfo.dlItemTagAutoclosing = null;
            }
            ancestorInfo.current = info;
            if (tag === "form") {
              ancestorInfo.formTag = info;
            }
            if (tag === "a") {
              ancestorInfo.aTagInScope = info;
            }
            if (tag === "button") {
              ancestorInfo.buttonTagInScope = info;
            }
            if (tag === "nobr") {
              ancestorInfo.nobrTagInScope = info;
            }
            if (tag === "p") {
              ancestorInfo.pTagInButtonScope = info;
            }
            if (tag === "li") {
              ancestorInfo.listItemTagAutoclosing = info;
            }
            if (tag === "dd" || tag === "dt") {
              ancestorInfo.dlItemTagAutoclosing = info;
            }
            return ancestorInfo;
          };
          var isTagValidWithParent = function(tag, parentTag) {
            switch (parentTag) {
              case "select":
                return tag === "option" || tag === "optgroup" || tag === "#text";
              case "optgroup":
                return tag === "option" || tag === "#text";
              case "option":
                return tag === "#text";
              case "tr":
                return tag === "th" || tag === "td" || tag === "style" || tag === "script" || tag === "template";
              case "tbody":
              case "thead":
              case "tfoot":
                return tag === "tr" || tag === "style" || tag === "script" || tag === "template";
              case "colgroup":
                return tag === "col" || tag === "template";
              case "table":
                return tag === "caption" || tag === "colgroup" || tag === "tbody" || tag === "tfoot" || tag === "thead" || tag === "style" || tag === "script" || tag === "template";
              case "head":
                return tag === "base" || tag === "basefont" || tag === "bgsound" || tag === "link" || tag === "meta" || tag === "title" || tag === "noscript" || tag === "noframes" || tag === "style" || tag === "script" || tag === "template";
              case "html":
                return tag === "head" || tag === "body" || tag === "frameset";
              case "frameset":
                return tag === "frame";
              case "#document":
                return tag === "html";
            }
            switch (tag) {
              case "h1":
              case "h2":
              case "h3":
              case "h4":
              case "h5":
              case "h6":
                return parentTag !== "h1" && parentTag !== "h2" && parentTag !== "h3" && parentTag !== "h4" && parentTag !== "h5" && parentTag !== "h6";
              case "rp":
              case "rt":
                return impliedEndTags.indexOf(parentTag) === -1;
              case "body":
              case "caption":
              case "col":
              case "colgroup":
              case "frameset":
              case "frame":
              case "head":
              case "html":
              case "tbody":
              case "td":
              case "tfoot":
              case "th":
              case "thead":
              case "tr":
                return parentTag == null;
            }
            return true;
          };
          var findInvalidAncestorForTag = function(tag, ancestorInfo) {
            switch (tag) {
              case "address":
              case "article":
              case "aside":
              case "blockquote":
              case "center":
              case "details":
              case "dialog":
              case "dir":
              case "div":
              case "dl":
              case "fieldset":
              case "figcaption":
              case "figure":
              case "footer":
              case "header":
              case "hgroup":
              case "main":
              case "menu":
              case "nav":
              case "ol":
              case "p":
              case "section":
              case "summary":
              case "ul":
              case "pre":
              case "listing":
              case "table":
              case "hr":
              case "xmp":
              case "h1":
              case "h2":
              case "h3":
              case "h4":
              case "h5":
              case "h6":
                return ancestorInfo.pTagInButtonScope;
              case "form":
                return ancestorInfo.formTag || ancestorInfo.pTagInButtonScope;
              case "li":
                return ancestorInfo.listItemTagAutoclosing;
              case "dd":
              case "dt":
                return ancestorInfo.dlItemTagAutoclosing;
              case "button":
                return ancestorInfo.buttonTagInScope;
              case "a":
                return ancestorInfo.aTagInScope;
              case "nobr":
                return ancestorInfo.nobrTagInScope;
            }
            return null;
          };
          var didWarn$1 = {};
          validateDOMNesting = function(childTag, childText, ancestorInfo) {
            ancestorInfo = ancestorInfo || emptyAncestorInfo;
            var parentInfo = ancestorInfo.current;
            var parentTag = parentInfo && parentInfo.tag;
            if (childText != null) {
              if (childTag != null) {
                error("validateDOMNesting: when childText is passed, childTag should be null");
              }
              childTag = "#text";
            }
            var invalidParent = isTagValidWithParent(childTag, parentTag) ? null : parentInfo;
            var invalidAncestor = invalidParent ? null : findInvalidAncestorForTag(childTag, ancestorInfo);
            var invalidParentOrAncestor = invalidParent || invalidAncestor;
            if (!invalidParentOrAncestor) {
              return;
            }
            var ancestorTag = invalidParentOrAncestor.tag;
            var warnKey = !!invalidParent + "|" + childTag + "|" + ancestorTag;
            if (didWarn$1[warnKey]) {
              return;
            }
            didWarn$1[warnKey] = true;
            var tagDisplayName = childTag;
            var whitespaceInfo = "";
            if (childTag === "#text") {
              if (/\S/.test(childText)) {
                tagDisplayName = "Text nodes";
              } else {
                tagDisplayName = "Whitespace text nodes";
                whitespaceInfo = " Make sure you don't have any extra whitespace between tags on each line of your source code.";
              }
            } else {
              tagDisplayName = "<" + childTag + ">";
            }
            if (invalidParent) {
              var info = "";
              if (ancestorTag === "table" && childTag === "tr") {
                info += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser.";
              }
              error("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", tagDisplayName, ancestorTag, whitespaceInfo, info);
            } else {
              error("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", tagDisplayName, ancestorTag);
            }
          };
        }
        var SUPPRESS_HYDRATION_WARNING$1;
        {
          SUPPRESS_HYDRATION_WARNING$1 = "suppressHydrationWarning";
        }
        var SUSPENSE_START_DATA = "$";
        var SUSPENSE_END_DATA = "/$";
        var SUSPENSE_PENDING_START_DATA = "$?";
        var SUSPENSE_FALLBACK_START_DATA = "$!";
        var STYLE$1 = "style";
        var eventsEnabled = null;
        var selectionInformation = null;
        function shouldAutoFocusHostComponent(type, props) {
          switch (type) {
            case "button":
            case "input":
            case "select":
            case "textarea":
              return !!props.autoFocus;
          }
          return false;
        }
        function getRootHostContext(rootContainerInstance) {
          var type;
          var namespace;
          var nodeType = rootContainerInstance.nodeType;
          switch (nodeType) {
            case DOCUMENT_NODE:
            case DOCUMENT_FRAGMENT_NODE: {
              type = nodeType === DOCUMENT_NODE ? "#document" : "#fragment";
              var root2 = rootContainerInstance.documentElement;
              namespace = root2 ? root2.namespaceURI : getChildNamespace(null, "");
              break;
            }
            default: {
              var container = nodeType === COMMENT_NODE ? rootContainerInstance.parentNode : rootContainerInstance;
              var ownNamespace = container.namespaceURI || null;
              type = container.tagName;
              namespace = getChildNamespace(ownNamespace, type);
              break;
            }
          }
          {
            var validatedTag = type.toLowerCase();
            var ancestorInfo = updatedAncestorInfo(null, validatedTag);
            return {
              namespace,
              ancestorInfo
            };
          }
        }
        function getChildHostContext(parentHostContext, type, rootContainerInstance) {
          {
            var parentHostContextDev = parentHostContext;
            var namespace = getChildNamespace(parentHostContextDev.namespace, type);
            var ancestorInfo = updatedAncestorInfo(parentHostContextDev.ancestorInfo, type);
            return {
              namespace,
              ancestorInfo
            };
          }
        }
        function getPublicInstance(instance) {
          return instance;
        }
        function prepareForCommit(containerInfo) {
          eventsEnabled = isEnabled();
          selectionInformation = getSelectionInformation();
          var activeInstance = null;
          setEnabled(false);
          return activeInstance;
        }
        function resetAfterCommit(containerInfo) {
          restoreSelection(selectionInformation);
          setEnabled(eventsEnabled);
          eventsEnabled = null;
          selectionInformation = null;
        }
        function createInstance(type, props, rootContainerInstance, hostContext, internalInstanceHandle) {
          var parentNamespace;
          {
            var hostContextDev = hostContext;
            validateDOMNesting(type, null, hostContextDev.ancestorInfo);
            if (typeof props.children === "string" || typeof props.children === "number") {
              var string = "" + props.children;
              var ownAncestorInfo = updatedAncestorInfo(hostContextDev.ancestorInfo, type);
              validateDOMNesting(null, string, ownAncestorInfo);
            }
            parentNamespace = hostContextDev.namespace;
          }
          var domElement = createElement(type, props, rootContainerInstance, parentNamespace);
          precacheFiberNode(internalInstanceHandle, domElement);
          updateFiberProps(domElement, props);
          return domElement;
        }
        function appendInitialChild(parentInstance, child) {
          parentInstance.appendChild(child);
        }
        function finalizeInitialChildren(domElement, type, props, rootContainerInstance, hostContext) {
          setInitialProperties(domElement, type, props, rootContainerInstance);
          return shouldAutoFocusHostComponent(type, props);
        }
        function prepareUpdate(domElement, type, oldProps, newProps, rootContainerInstance, hostContext) {
          {
            var hostContextDev = hostContext;
            if (typeof newProps.children !== typeof oldProps.children && (typeof newProps.children === "string" || typeof newProps.children === "number")) {
              var string = "" + newProps.children;
              var ownAncestorInfo = updatedAncestorInfo(hostContextDev.ancestorInfo, type);
              validateDOMNesting(null, string, ownAncestorInfo);
            }
          }
          return diffProperties(domElement, type, oldProps, newProps);
        }
        function shouldSetTextContent(type, props) {
          return type === "textarea" || type === "option" || type === "noscript" || typeof props.children === "string" || typeof props.children === "number" || typeof props.dangerouslySetInnerHTML === "object" && props.dangerouslySetInnerHTML !== null && props.dangerouslySetInnerHTML.__html != null;
        }
        function createTextInstance(text, rootContainerInstance, hostContext, internalInstanceHandle) {
          {
            var hostContextDev = hostContext;
            validateDOMNesting(null, text, hostContextDev.ancestorInfo);
          }
          var textNode = createTextNode(text, rootContainerInstance);
          precacheFiberNode(internalInstanceHandle, textNode);
          return textNode;
        }
        var scheduleTimeout = typeof setTimeout === "function" ? setTimeout : void 0;
        var cancelTimeout = typeof clearTimeout === "function" ? clearTimeout : void 0;
        var noTimeout = -1;
        function commitMount(domElement, type, newProps, internalInstanceHandle) {
          if (shouldAutoFocusHostComponent(type, newProps)) {
            domElement.focus();
          }
        }
        function commitUpdate(domElement, updatePayload, type, oldProps, newProps, internalInstanceHandle) {
          updateFiberProps(domElement, newProps);
          updateProperties(domElement, updatePayload, type, oldProps, newProps);
        }
        function resetTextContent(domElement) {
          setTextContent(domElement, "");
        }
        function commitTextUpdate(textInstance, oldText, newText) {
          textInstance.nodeValue = newText;
        }
        function appendChild(parentInstance, child) {
          parentInstance.appendChild(child);
        }
        function appendChildToContainer(container, child) {
          var parentNode;
          if (container.nodeType === COMMENT_NODE) {
            parentNode = container.parentNode;
            parentNode.insertBefore(child, container);
          } else {
            parentNode = container;
            parentNode.appendChild(child);
          }
          var reactRootContainer = container._reactRootContainer;
          if ((reactRootContainer === null || reactRootContainer === void 0) && parentNode.onclick === null) {
            trapClickOnNonInteractiveElement(parentNode);
          }
        }
        function insertBefore(parentInstance, child, beforeChild) {
          parentInstance.insertBefore(child, beforeChild);
        }
        function insertInContainerBefore(container, child, beforeChild) {
          if (container.nodeType === COMMENT_NODE) {
            container.parentNode.insertBefore(child, beforeChild);
          } else {
            container.insertBefore(child, beforeChild);
          }
        }
        function removeChild(parentInstance, child) {
          parentInstance.removeChild(child);
        }
        function removeChildFromContainer(container, child) {
          if (container.nodeType === COMMENT_NODE) {
            container.parentNode.removeChild(child);
          } else {
            container.removeChild(child);
          }
        }
        function hideInstance(instance) {
          instance = instance;
          var style2 = instance.style;
          if (typeof style2.setProperty === "function") {
            style2.setProperty("display", "none", "important");
          } else {
            style2.display = "none";
          }
        }
        function hideTextInstance(textInstance) {
          textInstance.nodeValue = "";
        }
        function unhideInstance(instance, props) {
          instance = instance;
          var styleProp = props[STYLE$1];
          var display = styleProp !== void 0 && styleProp !== null && styleProp.hasOwnProperty("display") ? styleProp.display : null;
          instance.style.display = dangerousStyleValue("display", display);
        }
        function unhideTextInstance(textInstance, text) {
          textInstance.nodeValue = text;
        }
        function clearContainer(container) {
          if (container.nodeType === ELEMENT_NODE) {
            container.textContent = "";
          } else if (container.nodeType === DOCUMENT_NODE) {
            var body = container.body;
            if (body != null) {
              body.textContent = "";
            }
          }
        }
        function canHydrateInstance(instance, type, props) {
          if (instance.nodeType !== ELEMENT_NODE || type.toLowerCase() !== instance.nodeName.toLowerCase()) {
            return null;
          }
          return instance;
        }
        function canHydrateTextInstance(instance, text) {
          if (text === "" || instance.nodeType !== TEXT_NODE) {
            return null;
          }
          return instance;
        }
        function isSuspenseInstancePending(instance) {
          return instance.data === SUSPENSE_PENDING_START_DATA;
        }
        function isSuspenseInstanceFallback(instance) {
          return instance.data === SUSPENSE_FALLBACK_START_DATA;
        }
        function getNextHydratable(node) {
          for (; node != null; node = node.nextSibling) {
            var nodeType = node.nodeType;
            if (nodeType === ELEMENT_NODE || nodeType === TEXT_NODE) {
              break;
            }
          }
          return node;
        }
        function getNextHydratableSibling(instance) {
          return getNextHydratable(instance.nextSibling);
        }
        function getFirstHydratableChild(parentInstance) {
          return getNextHydratable(parentInstance.firstChild);
        }
        function hydrateInstance(instance, type, props, rootContainerInstance, hostContext, internalInstanceHandle) {
          precacheFiberNode(internalInstanceHandle, instance);
          updateFiberProps(instance, props);
          var parentNamespace;
          {
            var hostContextDev = hostContext;
            parentNamespace = hostContextDev.namespace;
          }
          return diffHydratedProperties(instance, type, props, parentNamespace);
        }
        function hydrateTextInstance(textInstance, text, internalInstanceHandle) {
          precacheFiberNode(internalInstanceHandle, textInstance);
          return diffHydratedText(textInstance, text);
        }
        function getNextHydratableInstanceAfterSuspenseInstance(suspenseInstance) {
          var node = suspenseInstance.nextSibling;
          var depth = 0;
          while (node) {
            if (node.nodeType === COMMENT_NODE) {
              var data = node.data;
              if (data === SUSPENSE_END_DATA) {
                if (depth === 0) {
                  return getNextHydratableSibling(node);
                } else {
                  depth--;
                }
              } else if (data === SUSPENSE_START_DATA || data === SUSPENSE_FALLBACK_START_DATA || data === SUSPENSE_PENDING_START_DATA) {
                depth++;
              }
            }
            node = node.nextSibling;
          }
          return null;
        }
        function getParentSuspenseInstance(targetInstance) {
          var node = targetInstance.previousSibling;
          var depth = 0;
          while (node) {
            if (node.nodeType === COMMENT_NODE) {
              var data = node.data;
              if (data === SUSPENSE_START_DATA || data === SUSPENSE_FALLBACK_START_DATA || data === SUSPENSE_PENDING_START_DATA) {
                if (depth === 0) {
                  return node;
                } else {
                  depth--;
                }
              } else if (data === SUSPENSE_END_DATA) {
                depth++;
              }
            }
            node = node.previousSibling;
          }
          return null;
        }
        function commitHydratedContainer(container) {
          retryIfBlockedOn(container);
        }
        function commitHydratedSuspenseInstance(suspenseInstance) {
          retryIfBlockedOn(suspenseInstance);
        }
        function didNotMatchHydratedContainerTextInstance(parentContainer, textInstance, text) {
          {
            warnForUnmatchedText(textInstance, text);
          }
        }
        function didNotMatchHydratedTextInstance(parentType, parentProps, parentInstance, textInstance, text) {
          if (parentProps[SUPPRESS_HYDRATION_WARNING$1] !== true) {
            warnForUnmatchedText(textInstance, text);
          }
        }
        function didNotHydrateContainerInstance(parentContainer, instance) {
          {
            if (instance.nodeType === ELEMENT_NODE) {
              warnForDeletedHydratableElement(parentContainer, instance);
            } else if (instance.nodeType === COMMENT_NODE)
              ;
            else {
              warnForDeletedHydratableText(parentContainer, instance);
            }
          }
        }
        function didNotHydrateInstance(parentType, parentProps, parentInstance, instance) {
          if (parentProps[SUPPRESS_HYDRATION_WARNING$1] !== true) {
            if (instance.nodeType === ELEMENT_NODE) {
              warnForDeletedHydratableElement(parentInstance, instance);
            } else if (instance.nodeType === COMMENT_NODE)
              ;
            else {
              warnForDeletedHydratableText(parentInstance, instance);
            }
          }
        }
        function didNotFindHydratableContainerInstance(parentContainer, type, props) {
          {
            warnForInsertedHydratedElement(parentContainer, type);
          }
        }
        function didNotFindHydratableContainerTextInstance(parentContainer, text) {
          {
            warnForInsertedHydratedText(parentContainer, text);
          }
        }
        function didNotFindHydratableInstance(parentType, parentProps, parentInstance, type, props) {
          if (parentProps[SUPPRESS_HYDRATION_WARNING$1] !== true) {
            warnForInsertedHydratedElement(parentInstance, type);
          }
        }
        function didNotFindHydratableTextInstance(parentType, parentProps, parentInstance, text) {
          if (parentProps[SUPPRESS_HYDRATION_WARNING$1] !== true) {
            warnForInsertedHydratedText(parentInstance, text);
          }
        }
        function didNotFindHydratableSuspenseInstance(parentType, parentProps, parentInstance) {
          if (parentProps[SUPPRESS_HYDRATION_WARNING$1] !== true)
            ;
        }
        var clientId = 0;
        function makeClientIdInDEV(warnOnAccessInDEV) {
          var id = "r:" + (clientId++).toString(36);
          return {
            toString: function() {
              warnOnAccessInDEV();
              return id;
            },
            valueOf: function() {
              warnOnAccessInDEV();
              return id;
            }
          };
        }
        function isOpaqueHydratingObject(value) {
          return value !== null && typeof value === "object" && value.$$typeof === REACT_OPAQUE_ID_TYPE;
        }
        function makeOpaqueHydratingObject(attemptToReadValue) {
          return {
            $$typeof: REACT_OPAQUE_ID_TYPE,
            toString: attemptToReadValue,
            valueOf: attemptToReadValue
          };
        }
        function preparePortalMount(portalInstance) {
          {
            listenToAllSupportedEvents(portalInstance);
          }
        }
        var randomKey = Math.random().toString(36).slice(2);
        var internalInstanceKey = "__reactFiber$" + randomKey;
        var internalPropsKey = "__reactProps$" + randomKey;
        var internalContainerInstanceKey = "__reactContainer$" + randomKey;
        var internalEventHandlersKey = "__reactEvents$" + randomKey;
        function precacheFiberNode(hostInst, node) {
          node[internalInstanceKey] = hostInst;
        }
        function markContainerAsRoot(hostRoot, node) {
          node[internalContainerInstanceKey] = hostRoot;
        }
        function unmarkContainerAsRoot(node) {
          node[internalContainerInstanceKey] = null;
        }
        function isContainerMarkedAsRoot(node) {
          return !!node[internalContainerInstanceKey];
        }
        function getClosestInstanceFromNode(targetNode) {
          var targetInst = targetNode[internalInstanceKey];
          if (targetInst) {
            return targetInst;
          }
          var parentNode = targetNode.parentNode;
          while (parentNode) {
            targetInst = parentNode[internalContainerInstanceKey] || parentNode[internalInstanceKey];
            if (targetInst) {
              var alternate = targetInst.alternate;
              if (targetInst.child !== null || alternate !== null && alternate.child !== null) {
                var suspenseInstance = getParentSuspenseInstance(targetNode);
                while (suspenseInstance !== null) {
                  var targetSuspenseInst = suspenseInstance[internalInstanceKey];
                  if (targetSuspenseInst) {
                    return targetSuspenseInst;
                  }
                  suspenseInstance = getParentSuspenseInstance(suspenseInstance);
                }
              }
              return targetInst;
            }
            targetNode = parentNode;
            parentNode = targetNode.parentNode;
          }
          return null;
        }
        function getInstanceFromNode(node) {
          var inst = node[internalInstanceKey] || node[internalContainerInstanceKey];
          if (inst) {
            if (inst.tag === HostComponent || inst.tag === HostText || inst.tag === SuspenseComponent || inst.tag === HostRoot) {
              return inst;
            } else {
              return null;
            }
          }
          return null;
        }
        function getNodeFromInstance(inst) {
          if (inst.tag === HostComponent || inst.tag === HostText) {
            return inst.stateNode;
          }
          {
            {
              throw Error("getNodeFromInstance: Invalid argument.");
            }
          }
        }
        function getFiberCurrentPropsFromNode(node) {
          return node[internalPropsKey] || null;
        }
        function updateFiberProps(node, props) {
          node[internalPropsKey] = props;
        }
        function getEventListenerSet(node) {
          var elementListenerSet = node[internalEventHandlersKey];
          if (elementListenerSet === void 0) {
            elementListenerSet = node[internalEventHandlersKey] = new Set();
          }
          return elementListenerSet;
        }
        var loggedTypeFailures = {};
        var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame$1.setExtraStackFrame(null);
            }
          }
        }
        function checkPropTypes(typeSpecs, values, location, componentName, element) {
          {
            var has2 = Function.call.bind(Object.prototype.hasOwnProperty);
            for (var typeSpecName in typeSpecs) {
              if (has2(typeSpecs, typeSpecName)) {
                var error$1 = void 0;
                try {
                  if (typeof typeSpecs[typeSpecName] !== "function") {
                    var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                    err.name = "Invariant Violation";
                    throw err;
                  }
                  error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                } catch (ex) {
                  error$1 = ex;
                }
                if (error$1 && !(error$1 instanceof Error)) {
                  setCurrentlyValidatingElement(element);
                  error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                  setCurrentlyValidatingElement(null);
                }
                if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                  loggedTypeFailures[error$1.message] = true;
                  setCurrentlyValidatingElement(element);
                  error("Failed %s type: %s", location, error$1.message);
                  setCurrentlyValidatingElement(null);
                }
              }
            }
          }
        }
        var valueStack = [];
        var fiberStack;
        {
          fiberStack = [];
        }
        var index2 = -1;
        function createCursor(defaultValue) {
          return {
            current: defaultValue
          };
        }
        function pop(cursor, fiber) {
          if (index2 < 0) {
            {
              error("Unexpected pop.");
            }
            return;
          }
          {
            if (fiber !== fiberStack[index2]) {
              error("Unexpected Fiber popped.");
            }
          }
          cursor.current = valueStack[index2];
          valueStack[index2] = null;
          {
            fiberStack[index2] = null;
          }
          index2--;
        }
        function push(cursor, value, fiber) {
          index2++;
          valueStack[index2] = cursor.current;
          {
            fiberStack[index2] = fiber;
          }
          cursor.current = value;
        }
        var warnedAboutMissingGetChildContext;
        {
          warnedAboutMissingGetChildContext = {};
        }
        var emptyContextObject = {};
        {
          Object.freeze(emptyContextObject);
        }
        var contextStackCursor = createCursor(emptyContextObject);
        var didPerformWorkStackCursor = createCursor(false);
        var previousContext = emptyContextObject;
        function getUnmaskedContext(workInProgress2, Component, didPushOwnContextIfProvider) {
          {
            if (didPushOwnContextIfProvider && isContextProvider(Component)) {
              return previousContext;
            }
            return contextStackCursor.current;
          }
        }
        function cacheContext(workInProgress2, unmaskedContext, maskedContext) {
          {
            var instance = workInProgress2.stateNode;
            instance.__reactInternalMemoizedUnmaskedChildContext = unmaskedContext;
            instance.__reactInternalMemoizedMaskedChildContext = maskedContext;
          }
        }
        function getMaskedContext(workInProgress2, unmaskedContext) {
          {
            var type = workInProgress2.type;
            var contextTypes = type.contextTypes;
            if (!contextTypes) {
              return emptyContextObject;
            }
            var instance = workInProgress2.stateNode;
            if (instance && instance.__reactInternalMemoizedUnmaskedChildContext === unmaskedContext) {
              return instance.__reactInternalMemoizedMaskedChildContext;
            }
            var context = {};
            for (var key in contextTypes) {
              context[key] = unmaskedContext[key];
            }
            {
              var name = getComponentName(type) || "Unknown";
              checkPropTypes(contextTypes, context, "context", name);
            }
            if (instance) {
              cacheContext(workInProgress2, unmaskedContext, context);
            }
            return context;
          }
        }
        function hasContextChanged() {
          {
            return didPerformWorkStackCursor.current;
          }
        }
        function isContextProvider(type) {
          {
            var childContextTypes = type.childContextTypes;
            return childContextTypes !== null && childContextTypes !== void 0;
          }
        }
        function popContext(fiber) {
          {
            pop(didPerformWorkStackCursor, fiber);
            pop(contextStackCursor, fiber);
          }
        }
        function popTopLevelContextObject(fiber) {
          {
            pop(didPerformWorkStackCursor, fiber);
            pop(contextStackCursor, fiber);
          }
        }
        function pushTopLevelContextObject(fiber, context, didChange) {
          {
            if (!(contextStackCursor.current === emptyContextObject)) {
              {
                throw Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
              }
            }
            push(contextStackCursor, context, fiber);
            push(didPerformWorkStackCursor, didChange, fiber);
          }
        }
        function processChildContext(fiber, type, parentContext) {
          {
            var instance = fiber.stateNode;
            var childContextTypes = type.childContextTypes;
            if (typeof instance.getChildContext !== "function") {
              {
                var componentName = getComponentName(type) || "Unknown";
                if (!warnedAboutMissingGetChildContext[componentName]) {
                  warnedAboutMissingGetChildContext[componentName] = true;
                  error("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", componentName, componentName);
                }
              }
              return parentContext;
            }
            var childContext = instance.getChildContext();
            for (var contextKey in childContext) {
              if (!(contextKey in childContextTypes)) {
                {
                  throw Error((getComponentName(type) || "Unknown") + '.getChildContext(): key "' + contextKey + '" is not defined in childContextTypes.');
                }
              }
            }
            {
              var name = getComponentName(type) || "Unknown";
              checkPropTypes(childContextTypes, childContext, "child context", name);
            }
            return _assign({}, parentContext, childContext);
          }
        }
        function pushContextProvider(workInProgress2) {
          {
            var instance = workInProgress2.stateNode;
            var memoizedMergedChildContext = instance && instance.__reactInternalMemoizedMergedChildContext || emptyContextObject;
            previousContext = contextStackCursor.current;
            push(contextStackCursor, memoizedMergedChildContext, workInProgress2);
            push(didPerformWorkStackCursor, didPerformWorkStackCursor.current, workInProgress2);
            return true;
          }
        }
        function invalidateContextProvider(workInProgress2, type, didChange) {
          {
            var instance = workInProgress2.stateNode;
            if (!instance) {
              {
                throw Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
              }
            }
            if (didChange) {
              var mergedContext = processChildContext(workInProgress2, type, previousContext);
              instance.__reactInternalMemoizedMergedChildContext = mergedContext;
              pop(didPerformWorkStackCursor, workInProgress2);
              pop(contextStackCursor, workInProgress2);
              push(contextStackCursor, mergedContext, workInProgress2);
              push(didPerformWorkStackCursor, didChange, workInProgress2);
            } else {
              pop(didPerformWorkStackCursor, workInProgress2);
              push(didPerformWorkStackCursor, didChange, workInProgress2);
            }
          }
        }
        function findCurrentUnmaskedContext(fiber) {
          {
            if (!(isFiberMounted(fiber) && fiber.tag === ClassComponent)) {
              {
                throw Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
              }
            }
            var node = fiber;
            do {
              switch (node.tag) {
                case HostRoot:
                  return node.stateNode.context;
                case ClassComponent: {
                  var Component = node.type;
                  if (isContextProvider(Component)) {
                    return node.stateNode.__reactInternalMemoizedMergedChildContext;
                  }
                  break;
                }
              }
              node = node.return;
            } while (node !== null);
            {
              {
                throw Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
              }
            }
          }
        }
        var LegacyRoot = 0;
        var BlockingRoot = 1;
        var ConcurrentRoot = 2;
        var rendererID = null;
        var injectedHook = null;
        var hasLoggedError = false;
        var isDevToolsPresent = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined";
        function injectInternals(internals) {
          if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined") {
            return false;
          }
          var hook = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (hook.isDisabled) {
            return true;
          }
          if (!hook.supportsFiber) {
            {
              error("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools");
            }
            return true;
          }
          try {
            rendererID = hook.inject(internals);
            injectedHook = hook;
          } catch (err) {
            {
              error("React instrumentation encountered an error: %s.", err);
            }
          }
          return true;
        }
        function onScheduleRoot(root2, children) {
          {
            if (injectedHook && typeof injectedHook.onScheduleFiberRoot === "function") {
              try {
                injectedHook.onScheduleFiberRoot(rendererID, root2, children);
              } catch (err) {
                if (!hasLoggedError) {
                  hasLoggedError = true;
                  error("React instrumentation encountered an error: %s", err);
                }
              }
            }
          }
        }
        function onCommitRoot(root2, priorityLevel) {
          if (injectedHook && typeof injectedHook.onCommitFiberRoot === "function") {
            try {
              var didError = (root2.current.flags & DidCapture) === DidCapture;
              if (enableProfilerTimer) {
                injectedHook.onCommitFiberRoot(rendererID, root2, priorityLevel, didError);
              } else {
                injectedHook.onCommitFiberRoot(rendererID, root2, void 0, didError);
              }
            } catch (err) {
              {
                if (!hasLoggedError) {
                  hasLoggedError = true;
                  error("React instrumentation encountered an error: %s", err);
                }
              }
            }
          }
        }
        function onCommitUnmount(fiber) {
          if (injectedHook && typeof injectedHook.onCommitFiberUnmount === "function") {
            try {
              injectedHook.onCommitFiberUnmount(rendererID, fiber);
            } catch (err) {
              {
                if (!hasLoggedError) {
                  hasLoggedError = true;
                  error("React instrumentation encountered an error: %s", err);
                }
              }
            }
          }
        }
        var Scheduler_runWithPriority = Scheduler.unstable_runWithPriority, Scheduler_scheduleCallback = Scheduler.unstable_scheduleCallback, Scheduler_cancelCallback = Scheduler.unstable_cancelCallback, Scheduler_shouldYield = Scheduler.unstable_shouldYield, Scheduler_requestPaint = Scheduler.unstable_requestPaint, Scheduler_now$1 = Scheduler.unstable_now, Scheduler_getCurrentPriorityLevel = Scheduler.unstable_getCurrentPriorityLevel, Scheduler_ImmediatePriority = Scheduler.unstable_ImmediatePriority, Scheduler_UserBlockingPriority = Scheduler.unstable_UserBlockingPriority, Scheduler_NormalPriority = Scheduler.unstable_NormalPriority, Scheduler_LowPriority = Scheduler.unstable_LowPriority, Scheduler_IdlePriority = Scheduler.unstable_IdlePriority;
        {
          if (!(tracing.__interactionsRef != null && tracing.__interactionsRef.current != null)) {
            {
              throw Error("It is not supported to run the profiling version of a renderer (for example, `react-dom/profiling`) without also replacing the `scheduler/tracing` module with `scheduler/tracing-profiling`. Your bundler might have a setting for aliasing both modules. Learn more at https://reactjs.org/link/profiling");
            }
          }
        }
        var fakeCallbackNode = {};
        var ImmediatePriority$1 = 99;
        var UserBlockingPriority$2 = 98;
        var NormalPriority$1 = 97;
        var LowPriority$1 = 96;
        var IdlePriority$1 = 95;
        var NoPriority$1 = 90;
        var shouldYield = Scheduler_shouldYield;
        var requestPaint = Scheduler_requestPaint !== void 0 ? Scheduler_requestPaint : function() {
        };
        var syncQueue = null;
        var immediateQueueCallbackNode = null;
        var isFlushingSyncQueue = false;
        var initialTimeMs$1 = Scheduler_now$1();
        var now = initialTimeMs$1 < 1e4 ? Scheduler_now$1 : function() {
          return Scheduler_now$1() - initialTimeMs$1;
        };
        function getCurrentPriorityLevel() {
          switch (Scheduler_getCurrentPriorityLevel()) {
            case Scheduler_ImmediatePriority:
              return ImmediatePriority$1;
            case Scheduler_UserBlockingPriority:
              return UserBlockingPriority$2;
            case Scheduler_NormalPriority:
              return NormalPriority$1;
            case Scheduler_LowPriority:
              return LowPriority$1;
            case Scheduler_IdlePriority:
              return IdlePriority$1;
            default: {
              {
                throw Error("Unknown priority level.");
              }
            }
          }
        }
        function reactPriorityToSchedulerPriority(reactPriorityLevel) {
          switch (reactPriorityLevel) {
            case ImmediatePriority$1:
              return Scheduler_ImmediatePriority;
            case UserBlockingPriority$2:
              return Scheduler_UserBlockingPriority;
            case NormalPriority$1:
              return Scheduler_NormalPriority;
            case LowPriority$1:
              return Scheduler_LowPriority;
            case IdlePriority$1:
              return Scheduler_IdlePriority;
            default: {
              {
                throw Error("Unknown priority level.");
              }
            }
          }
        }
        function runWithPriority$1(reactPriorityLevel, fn) {
          var priorityLevel = reactPriorityToSchedulerPriority(reactPriorityLevel);
          return Scheduler_runWithPriority(priorityLevel, fn);
        }
        function scheduleCallback(reactPriorityLevel, callback, options2) {
          var priorityLevel = reactPriorityToSchedulerPriority(reactPriorityLevel);
          return Scheduler_scheduleCallback(priorityLevel, callback, options2);
        }
        function scheduleSyncCallback(callback) {
          if (syncQueue === null) {
            syncQueue = [callback];
            immediateQueueCallbackNode = Scheduler_scheduleCallback(Scheduler_ImmediatePriority, flushSyncCallbackQueueImpl);
          } else {
            syncQueue.push(callback);
          }
          return fakeCallbackNode;
        }
        function cancelCallback(callbackNode) {
          if (callbackNode !== fakeCallbackNode) {
            Scheduler_cancelCallback(callbackNode);
          }
        }
        function flushSyncCallbackQueue() {
          if (immediateQueueCallbackNode !== null) {
            var node = immediateQueueCallbackNode;
            immediateQueueCallbackNode = null;
            Scheduler_cancelCallback(node);
          }
          flushSyncCallbackQueueImpl();
        }
        function flushSyncCallbackQueueImpl() {
          if (!isFlushingSyncQueue && syncQueue !== null) {
            isFlushingSyncQueue = true;
            var i4 = 0;
            {
              try {
                var _isSync2 = true;
                var _queue = syncQueue;
                runWithPriority$1(ImmediatePriority$1, function() {
                  for (; i4 < _queue.length; i4++) {
                    var callback = _queue[i4];
                    do {
                      callback = callback(_isSync2);
                    } while (callback !== null);
                  }
                });
                syncQueue = null;
              } catch (error2) {
                if (syncQueue !== null) {
                  syncQueue = syncQueue.slice(i4 + 1);
                }
                Scheduler_scheduleCallback(Scheduler_ImmediatePriority, flushSyncCallbackQueue);
                throw error2;
              } finally {
                isFlushingSyncQueue = false;
              }
            }
          }
        }
        var ReactVersion = "17.0.1";
        var NoMode = 0;
        var StrictMode = 1;
        var BlockingMode = 2;
        var ConcurrentMode = 4;
        var ProfileMode = 8;
        var DebugTracingMode = 16;
        var ReactCurrentBatchConfig = ReactSharedInternals.ReactCurrentBatchConfig;
        var NoTransition = 0;
        function requestCurrentTransition() {
          return ReactCurrentBatchConfig.transition;
        }
        var ReactStrictModeWarnings = {
          recordUnsafeLifecycleWarnings: function(fiber, instance) {
          },
          flushPendingUnsafeLifecycleWarnings: function() {
          },
          recordLegacyContextWarning: function(fiber, instance) {
          },
          flushLegacyContextWarning: function() {
          },
          discardPendingWarnings: function() {
          }
        };
        {
          var findStrictRoot = function(fiber) {
            var maybeStrictRoot = null;
            var node = fiber;
            while (node !== null) {
              if (node.mode & StrictMode) {
                maybeStrictRoot = node;
              }
              node = node.return;
            }
            return maybeStrictRoot;
          };
          var setToSortedString = function(set2) {
            var array = [];
            set2.forEach(function(value) {
              array.push(value);
            });
            return array.sort().join(", ");
          };
          var pendingComponentWillMountWarnings = [];
          var pendingUNSAFE_ComponentWillMountWarnings = [];
          var pendingComponentWillReceivePropsWarnings = [];
          var pendingUNSAFE_ComponentWillReceivePropsWarnings = [];
          var pendingComponentWillUpdateWarnings = [];
          var pendingUNSAFE_ComponentWillUpdateWarnings = [];
          var didWarnAboutUnsafeLifecycles = new Set();
          ReactStrictModeWarnings.recordUnsafeLifecycleWarnings = function(fiber, instance) {
            if (didWarnAboutUnsafeLifecycles.has(fiber.type)) {
              return;
            }
            if (typeof instance.componentWillMount === "function" && instance.componentWillMount.__suppressDeprecationWarning !== true) {
              pendingComponentWillMountWarnings.push(fiber);
            }
            if (fiber.mode & StrictMode && typeof instance.UNSAFE_componentWillMount === "function") {
              pendingUNSAFE_ComponentWillMountWarnings.push(fiber);
            }
            if (typeof instance.componentWillReceiveProps === "function" && instance.componentWillReceiveProps.__suppressDeprecationWarning !== true) {
              pendingComponentWillReceivePropsWarnings.push(fiber);
            }
            if (fiber.mode & StrictMode && typeof instance.UNSAFE_componentWillReceiveProps === "function") {
              pendingUNSAFE_ComponentWillReceivePropsWarnings.push(fiber);
            }
            if (typeof instance.componentWillUpdate === "function" && instance.componentWillUpdate.__suppressDeprecationWarning !== true) {
              pendingComponentWillUpdateWarnings.push(fiber);
            }
            if (fiber.mode & StrictMode && typeof instance.UNSAFE_componentWillUpdate === "function") {
              pendingUNSAFE_ComponentWillUpdateWarnings.push(fiber);
            }
          };
          ReactStrictModeWarnings.flushPendingUnsafeLifecycleWarnings = function() {
            var componentWillMountUniqueNames = new Set();
            if (pendingComponentWillMountWarnings.length > 0) {
              pendingComponentWillMountWarnings.forEach(function(fiber) {
                componentWillMountUniqueNames.add(getComponentName(fiber.type) || "Component");
                didWarnAboutUnsafeLifecycles.add(fiber.type);
              });
              pendingComponentWillMountWarnings = [];
            }
            var UNSAFE_componentWillMountUniqueNames = new Set();
            if (pendingUNSAFE_ComponentWillMountWarnings.length > 0) {
              pendingUNSAFE_ComponentWillMountWarnings.forEach(function(fiber) {
                UNSAFE_componentWillMountUniqueNames.add(getComponentName(fiber.type) || "Component");
                didWarnAboutUnsafeLifecycles.add(fiber.type);
              });
              pendingUNSAFE_ComponentWillMountWarnings = [];
            }
            var componentWillReceivePropsUniqueNames = new Set();
            if (pendingComponentWillReceivePropsWarnings.length > 0) {
              pendingComponentWillReceivePropsWarnings.forEach(function(fiber) {
                componentWillReceivePropsUniqueNames.add(getComponentName(fiber.type) || "Component");
                didWarnAboutUnsafeLifecycles.add(fiber.type);
              });
              pendingComponentWillReceivePropsWarnings = [];
            }
            var UNSAFE_componentWillReceivePropsUniqueNames = new Set();
            if (pendingUNSAFE_ComponentWillReceivePropsWarnings.length > 0) {
              pendingUNSAFE_ComponentWillReceivePropsWarnings.forEach(function(fiber) {
                UNSAFE_componentWillReceivePropsUniqueNames.add(getComponentName(fiber.type) || "Component");
                didWarnAboutUnsafeLifecycles.add(fiber.type);
              });
              pendingUNSAFE_ComponentWillReceivePropsWarnings = [];
            }
            var componentWillUpdateUniqueNames = new Set();
            if (pendingComponentWillUpdateWarnings.length > 0) {
              pendingComponentWillUpdateWarnings.forEach(function(fiber) {
                componentWillUpdateUniqueNames.add(getComponentName(fiber.type) || "Component");
                didWarnAboutUnsafeLifecycles.add(fiber.type);
              });
              pendingComponentWillUpdateWarnings = [];
            }
            var UNSAFE_componentWillUpdateUniqueNames = new Set();
            if (pendingUNSAFE_ComponentWillUpdateWarnings.length > 0) {
              pendingUNSAFE_ComponentWillUpdateWarnings.forEach(function(fiber) {
                UNSAFE_componentWillUpdateUniqueNames.add(getComponentName(fiber.type) || "Component");
                didWarnAboutUnsafeLifecycles.add(fiber.type);
              });
              pendingUNSAFE_ComponentWillUpdateWarnings = [];
            }
            if (UNSAFE_componentWillMountUniqueNames.size > 0) {
              var sortedNames = setToSortedString(UNSAFE_componentWillMountUniqueNames);
              error("Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n* Move code with side effects to componentDidMount, and set initial state in the constructor.\n\nPlease update the following components: %s", sortedNames);
            }
            if (UNSAFE_componentWillReceivePropsUniqueNames.size > 0) {
              var _sortedNames = setToSortedString(UNSAFE_componentWillReceivePropsUniqueNames);
              error("Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n* Move data fetching code or side effects to componentDidUpdate.\n* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state\n\nPlease update the following components: %s", _sortedNames);
            }
            if (UNSAFE_componentWillUpdateUniqueNames.size > 0) {
              var _sortedNames2 = setToSortedString(UNSAFE_componentWillUpdateUniqueNames);
              error("Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n* Move data fetching code or side effects to componentDidUpdate.\n\nPlease update the following components: %s", _sortedNames2);
            }
            if (componentWillMountUniqueNames.size > 0) {
              var _sortedNames3 = setToSortedString(componentWillMountUniqueNames);
              warn("componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n* Move code with side effects to componentDidMount, and set initial state in the constructor.\n* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run `npx react-codemod rename-unsafe-lifecycles` in your project source folder.\n\nPlease update the following components: %s", _sortedNames3);
            }
            if (componentWillReceivePropsUniqueNames.size > 0) {
              var _sortedNames4 = setToSortedString(componentWillReceivePropsUniqueNames);
              warn("componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n* Move data fetching code or side effects to componentDidUpdate.\n* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state\n* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run `npx react-codemod rename-unsafe-lifecycles` in your project source folder.\n\nPlease update the following components: %s", _sortedNames4);
            }
            if (componentWillUpdateUniqueNames.size > 0) {
              var _sortedNames5 = setToSortedString(componentWillUpdateUniqueNames);
              warn("componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n* Move data fetching code or side effects to componentDidUpdate.\n* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run `npx react-codemod rename-unsafe-lifecycles` in your project source folder.\n\nPlease update the following components: %s", _sortedNames5);
            }
          };
          var pendingLegacyContextWarning = new Map();
          var didWarnAboutLegacyContext = new Set();
          ReactStrictModeWarnings.recordLegacyContextWarning = function(fiber, instance) {
            var strictRoot = findStrictRoot(fiber);
            if (strictRoot === null) {
              error("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
              return;
            }
            if (didWarnAboutLegacyContext.has(fiber.type)) {
              return;
            }
            var warningsForRoot = pendingLegacyContextWarning.get(strictRoot);
            if (fiber.type.contextTypes != null || fiber.type.childContextTypes != null || instance !== null && typeof instance.getChildContext === "function") {
              if (warningsForRoot === void 0) {
                warningsForRoot = [];
                pendingLegacyContextWarning.set(strictRoot, warningsForRoot);
              }
              warningsForRoot.push(fiber);
            }
          };
          ReactStrictModeWarnings.flushLegacyContextWarning = function() {
            pendingLegacyContextWarning.forEach(function(fiberArray, strictRoot) {
              if (fiberArray.length === 0) {
                return;
              }
              var firstFiber = fiberArray[0];
              var uniqueNames = new Set();
              fiberArray.forEach(function(fiber) {
                uniqueNames.add(getComponentName(fiber.type) || "Component");
                didWarnAboutLegacyContext.add(fiber.type);
              });
              var sortedNames = setToSortedString(uniqueNames);
              try {
                setCurrentFiber(firstFiber);
                error("Legacy context API has been detected within a strict-mode tree.\n\nThe old API will be supported in all 16.x releases, but applications using it should migrate to the new version.\n\nPlease update the following components: %s\n\nLearn more about this warning here: https://reactjs.org/link/legacy-context", sortedNames);
              } finally {
                resetCurrentFiber();
              }
            });
          };
          ReactStrictModeWarnings.discardPendingWarnings = function() {
            pendingComponentWillMountWarnings = [];
            pendingUNSAFE_ComponentWillMountWarnings = [];
            pendingComponentWillReceivePropsWarnings = [];
            pendingUNSAFE_ComponentWillReceivePropsWarnings = [];
            pendingComponentWillUpdateWarnings = [];
            pendingUNSAFE_ComponentWillUpdateWarnings = [];
            pendingLegacyContextWarning = new Map();
          };
        }
        function resolveDefaultProps(Component, baseProps) {
          if (Component && Component.defaultProps) {
            var props = _assign({}, baseProps);
            var defaultProps = Component.defaultProps;
            for (var propName in defaultProps) {
              if (props[propName] === void 0) {
                props[propName] = defaultProps[propName];
              }
            }
            return props;
          }
          return baseProps;
        }
        var MAX_SIGNED_31_BIT_INT = 1073741823;
        var valueCursor = createCursor(null);
        var rendererSigil;
        {
          rendererSigil = {};
        }
        var currentlyRenderingFiber = null;
        var lastContextDependency = null;
        var lastContextWithAllBitsObserved = null;
        var isDisallowedContextReadInDEV = false;
        function resetContextDependencies() {
          currentlyRenderingFiber = null;
          lastContextDependency = null;
          lastContextWithAllBitsObserved = null;
          {
            isDisallowedContextReadInDEV = false;
          }
        }
        function enterDisallowedContextReadInDEV() {
          {
            isDisallowedContextReadInDEV = true;
          }
        }
        function exitDisallowedContextReadInDEV() {
          {
            isDisallowedContextReadInDEV = false;
          }
        }
        function pushProvider(providerFiber, nextValue) {
          var context = providerFiber.type._context;
          {
            push(valueCursor, context._currentValue, providerFiber);
            context._currentValue = nextValue;
            {
              if (context._currentRenderer !== void 0 && context._currentRenderer !== null && context._currentRenderer !== rendererSigil) {
                error("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported.");
              }
              context._currentRenderer = rendererSigil;
            }
          }
        }
        function popProvider(providerFiber) {
          var currentValue = valueCursor.current;
          pop(valueCursor, providerFiber);
          var context = providerFiber.type._context;
          {
            context._currentValue = currentValue;
          }
        }
        function calculateChangedBits(context, newValue, oldValue) {
          if (objectIs(oldValue, newValue)) {
            return 0;
          } else {
            var changedBits = typeof context._calculateChangedBits === "function" ? context._calculateChangedBits(oldValue, newValue) : MAX_SIGNED_31_BIT_INT;
            {
              if ((changedBits & MAX_SIGNED_31_BIT_INT) !== changedBits) {
                error("calculateChangedBits: Expected the return value to be a 31-bit integer. Instead received: %s", changedBits);
              }
            }
            return changedBits | 0;
          }
        }
        function scheduleWorkOnParentPath(parent, renderLanes2) {
          var node = parent;
          while (node !== null) {
            var alternate = node.alternate;
            if (!isSubsetOfLanes(node.childLanes, renderLanes2)) {
              node.childLanes = mergeLanes(node.childLanes, renderLanes2);
              if (alternate !== null) {
                alternate.childLanes = mergeLanes(alternate.childLanes, renderLanes2);
              }
            } else if (alternate !== null && !isSubsetOfLanes(alternate.childLanes, renderLanes2)) {
              alternate.childLanes = mergeLanes(alternate.childLanes, renderLanes2);
            } else {
              break;
            }
            node = node.return;
          }
        }
        function propagateContextChange(workInProgress2, context, changedBits, renderLanes2) {
          var fiber = workInProgress2.child;
          if (fiber !== null) {
            fiber.return = workInProgress2;
          }
          while (fiber !== null) {
            var nextFiber = void 0;
            var list = fiber.dependencies;
            if (list !== null) {
              nextFiber = fiber.child;
              var dependency = list.firstContext;
              while (dependency !== null) {
                if (dependency.context === context && (dependency.observedBits & changedBits) !== 0) {
                  if (fiber.tag === ClassComponent) {
                    var update = createUpdate(NoTimestamp, pickArbitraryLane(renderLanes2));
                    update.tag = ForceUpdate;
                    enqueueUpdate(fiber, update);
                  }
                  fiber.lanes = mergeLanes(fiber.lanes, renderLanes2);
                  var alternate = fiber.alternate;
                  if (alternate !== null) {
                    alternate.lanes = mergeLanes(alternate.lanes, renderLanes2);
                  }
                  scheduleWorkOnParentPath(fiber.return, renderLanes2);
                  list.lanes = mergeLanes(list.lanes, renderLanes2);
                  break;
                }
                dependency = dependency.next;
              }
            } else if (fiber.tag === ContextProvider) {
              nextFiber = fiber.type === workInProgress2.type ? null : fiber.child;
            } else {
              nextFiber = fiber.child;
            }
            if (nextFiber !== null) {
              nextFiber.return = fiber;
            } else {
              nextFiber = fiber;
              while (nextFiber !== null) {
                if (nextFiber === workInProgress2) {
                  nextFiber = null;
                  break;
                }
                var sibling = nextFiber.sibling;
                if (sibling !== null) {
                  sibling.return = nextFiber.return;
                  nextFiber = sibling;
                  break;
                }
                nextFiber = nextFiber.return;
              }
            }
            fiber = nextFiber;
          }
        }
        function prepareToReadContext(workInProgress2, renderLanes2) {
          currentlyRenderingFiber = workInProgress2;
          lastContextDependency = null;
          lastContextWithAllBitsObserved = null;
          var dependencies = workInProgress2.dependencies;
          if (dependencies !== null) {
            var firstContext = dependencies.firstContext;
            if (firstContext !== null) {
              if (includesSomeLane(dependencies.lanes, renderLanes2)) {
                markWorkInProgressReceivedUpdate();
              }
              dependencies.firstContext = null;
            }
          }
        }
        function readContext(context, observedBits) {
          {
            if (isDisallowedContextReadInDEV) {
              error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
            }
          }
          if (lastContextWithAllBitsObserved === context)
            ;
          else if (observedBits === false || observedBits === 0)
            ;
          else {
            var resolvedObservedBits;
            if (typeof observedBits !== "number" || observedBits === MAX_SIGNED_31_BIT_INT) {
              lastContextWithAllBitsObserved = context;
              resolvedObservedBits = MAX_SIGNED_31_BIT_INT;
            } else {
              resolvedObservedBits = observedBits;
            }
            var contextItem = {
              context,
              observedBits: resolvedObservedBits,
              next: null
            };
            if (lastContextDependency === null) {
              if (!(currentlyRenderingFiber !== null)) {
                {
                  throw Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
                }
              }
              lastContextDependency = contextItem;
              currentlyRenderingFiber.dependencies = {
                lanes: NoLanes,
                firstContext: contextItem,
                responders: null
              };
            } else {
              lastContextDependency = lastContextDependency.next = contextItem;
            }
          }
          return context._currentValue;
        }
        var UpdateState = 0;
        var ReplaceState = 1;
        var ForceUpdate = 2;
        var CaptureUpdate = 3;
        var hasForceUpdate = false;
        var didWarnUpdateInsideUpdate;
        var currentlyProcessingQueue;
        {
          didWarnUpdateInsideUpdate = false;
          currentlyProcessingQueue = null;
        }
        function initializeUpdateQueue(fiber) {
          var queue = {
            baseState: fiber.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
              pending: null
            },
            effects: null
          };
          fiber.updateQueue = queue;
        }
        function cloneUpdateQueue(current2, workInProgress2) {
          var queue = workInProgress2.updateQueue;
          var currentQueue = current2.updateQueue;
          if (queue === currentQueue) {
            var clone = {
              baseState: currentQueue.baseState,
              firstBaseUpdate: currentQueue.firstBaseUpdate,
              lastBaseUpdate: currentQueue.lastBaseUpdate,
              shared: currentQueue.shared,
              effects: currentQueue.effects
            };
            workInProgress2.updateQueue = clone;
          }
        }
        function createUpdate(eventTime, lane) {
          var update = {
            eventTime,
            lane,
            tag: UpdateState,
            payload: null,
            callback: null,
            next: null
          };
          return update;
        }
        function enqueueUpdate(fiber, update) {
          var updateQueue = fiber.updateQueue;
          if (updateQueue === null) {
            return;
          }
          var sharedQueue = updateQueue.shared;
          var pending = sharedQueue.pending;
          if (pending === null) {
            update.next = update;
          } else {
            update.next = pending.next;
            pending.next = update;
          }
          sharedQueue.pending = update;
          {
            if (currentlyProcessingQueue === sharedQueue && !didWarnUpdateInsideUpdate) {
              error("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback.");
              didWarnUpdateInsideUpdate = true;
            }
          }
        }
        function enqueueCapturedUpdate(workInProgress2, capturedUpdate) {
          var queue = workInProgress2.updateQueue;
          var current2 = workInProgress2.alternate;
          if (current2 !== null) {
            var currentQueue = current2.updateQueue;
            if (queue === currentQueue) {
              var newFirst = null;
              var newLast = null;
              var firstBaseUpdate = queue.firstBaseUpdate;
              if (firstBaseUpdate !== null) {
                var update = firstBaseUpdate;
                do {
                  var clone = {
                    eventTime: update.eventTime,
                    lane: update.lane,
                    tag: update.tag,
                    payload: update.payload,
                    callback: update.callback,
                    next: null
                  };
                  if (newLast === null) {
                    newFirst = newLast = clone;
                  } else {
                    newLast.next = clone;
                    newLast = clone;
                  }
                  update = update.next;
                } while (update !== null);
                if (newLast === null) {
                  newFirst = newLast = capturedUpdate;
                } else {
                  newLast.next = capturedUpdate;
                  newLast = capturedUpdate;
                }
              } else {
                newFirst = newLast = capturedUpdate;
              }
              queue = {
                baseState: currentQueue.baseState,
                firstBaseUpdate: newFirst,
                lastBaseUpdate: newLast,
                shared: currentQueue.shared,
                effects: currentQueue.effects
              };
              workInProgress2.updateQueue = queue;
              return;
            }
          }
          var lastBaseUpdate = queue.lastBaseUpdate;
          if (lastBaseUpdate === null) {
            queue.firstBaseUpdate = capturedUpdate;
          } else {
            lastBaseUpdate.next = capturedUpdate;
          }
          queue.lastBaseUpdate = capturedUpdate;
        }
        function getStateFromUpdate(workInProgress2, queue, update, prevState, nextProps, instance) {
          switch (update.tag) {
            case ReplaceState: {
              var payload = update.payload;
              if (typeof payload === "function") {
                {
                  enterDisallowedContextReadInDEV();
                }
                var nextState = payload.call(instance, prevState, nextProps);
                {
                  if (workInProgress2.mode & StrictMode) {
                    disableLogs();
                    try {
                      payload.call(instance, prevState, nextProps);
                    } finally {
                      reenableLogs();
                    }
                  }
                  exitDisallowedContextReadInDEV();
                }
                return nextState;
              }
              return payload;
            }
            case CaptureUpdate: {
              workInProgress2.flags = workInProgress2.flags & ~ShouldCapture | DidCapture;
            }
            case UpdateState: {
              var _payload = update.payload;
              var partialState;
              if (typeof _payload === "function") {
                {
                  enterDisallowedContextReadInDEV();
                }
                partialState = _payload.call(instance, prevState, nextProps);
                {
                  if (workInProgress2.mode & StrictMode) {
                    disableLogs();
                    try {
                      _payload.call(instance, prevState, nextProps);
                    } finally {
                      reenableLogs();
                    }
                  }
                  exitDisallowedContextReadInDEV();
                }
              } else {
                partialState = _payload;
              }
              if (partialState === null || partialState === void 0) {
                return prevState;
              }
              return _assign({}, prevState, partialState);
            }
            case ForceUpdate: {
              hasForceUpdate = true;
              return prevState;
            }
          }
          return prevState;
        }
        function processUpdateQueue(workInProgress2, props, instance, renderLanes2) {
          var queue = workInProgress2.updateQueue;
          hasForceUpdate = false;
          {
            currentlyProcessingQueue = queue.shared;
          }
          var firstBaseUpdate = queue.firstBaseUpdate;
          var lastBaseUpdate = queue.lastBaseUpdate;
          var pendingQueue = queue.shared.pending;
          if (pendingQueue !== null) {
            queue.shared.pending = null;
            var lastPendingUpdate = pendingQueue;
            var firstPendingUpdate = lastPendingUpdate.next;
            lastPendingUpdate.next = null;
            if (lastBaseUpdate === null) {
              firstBaseUpdate = firstPendingUpdate;
            } else {
              lastBaseUpdate.next = firstPendingUpdate;
            }
            lastBaseUpdate = lastPendingUpdate;
            var current2 = workInProgress2.alternate;
            if (current2 !== null) {
              var currentQueue = current2.updateQueue;
              var currentLastBaseUpdate = currentQueue.lastBaseUpdate;
              if (currentLastBaseUpdate !== lastBaseUpdate) {
                if (currentLastBaseUpdate === null) {
                  currentQueue.firstBaseUpdate = firstPendingUpdate;
                } else {
                  currentLastBaseUpdate.next = firstPendingUpdate;
                }
                currentQueue.lastBaseUpdate = lastPendingUpdate;
              }
            }
          }
          if (firstBaseUpdate !== null) {
            var newState = queue.baseState;
            var newLanes = NoLanes;
            var newBaseState = null;
            var newFirstBaseUpdate = null;
            var newLastBaseUpdate = null;
            var update = firstBaseUpdate;
            do {
              var updateLane = update.lane;
              var updateEventTime = update.eventTime;
              if (!isSubsetOfLanes(renderLanes2, updateLane)) {
                var clone = {
                  eventTime: updateEventTime,
                  lane: updateLane,
                  tag: update.tag,
                  payload: update.payload,
                  callback: update.callback,
                  next: null
                };
                if (newLastBaseUpdate === null) {
                  newFirstBaseUpdate = newLastBaseUpdate = clone;
                  newBaseState = newState;
                } else {
                  newLastBaseUpdate = newLastBaseUpdate.next = clone;
                }
                newLanes = mergeLanes(newLanes, updateLane);
              } else {
                if (newLastBaseUpdate !== null) {
                  var _clone = {
                    eventTime: updateEventTime,
                    lane: NoLane,
                    tag: update.tag,
                    payload: update.payload,
                    callback: update.callback,
                    next: null
                  };
                  newLastBaseUpdate = newLastBaseUpdate.next = _clone;
                }
                newState = getStateFromUpdate(workInProgress2, queue, update, newState, props, instance);
                var callback = update.callback;
                if (callback !== null) {
                  workInProgress2.flags |= Callback;
                  var effects = queue.effects;
                  if (effects === null) {
                    queue.effects = [update];
                  } else {
                    effects.push(update);
                  }
                }
              }
              update = update.next;
              if (update === null) {
                pendingQueue = queue.shared.pending;
                if (pendingQueue === null) {
                  break;
                } else {
                  var _lastPendingUpdate = pendingQueue;
                  var _firstPendingUpdate = _lastPendingUpdate.next;
                  _lastPendingUpdate.next = null;
                  update = _firstPendingUpdate;
                  queue.lastBaseUpdate = _lastPendingUpdate;
                  queue.shared.pending = null;
                }
              }
            } while (true);
            if (newLastBaseUpdate === null) {
              newBaseState = newState;
            }
            queue.baseState = newBaseState;
            queue.firstBaseUpdate = newFirstBaseUpdate;
            queue.lastBaseUpdate = newLastBaseUpdate;
            markSkippedUpdateLanes(newLanes);
            workInProgress2.lanes = newLanes;
            workInProgress2.memoizedState = newState;
          }
          {
            currentlyProcessingQueue = null;
          }
        }
        function callCallback(callback, context) {
          if (!(typeof callback === "function")) {
            {
              throw Error("Invalid argument passed as callback. Expected a function. Instead received: " + callback);
            }
          }
          callback.call(context);
        }
        function resetHasForceUpdateBeforeProcessing() {
          hasForceUpdate = false;
        }
        function checkHasForceUpdateAfterProcessing() {
          return hasForceUpdate;
        }
        function commitUpdateQueue(finishedWork, finishedQueue, instance) {
          var effects = finishedQueue.effects;
          finishedQueue.effects = null;
          if (effects !== null) {
            for (var i4 = 0; i4 < effects.length; i4++) {
              var effect = effects[i4];
              var callback = effect.callback;
              if (callback !== null) {
                effect.callback = null;
                callCallback(callback, instance);
              }
            }
          }
        }
        var fakeInternalInstance = {};
        var isArray = Array.isArray;
        var emptyRefsObject = new React6.Component().refs;
        var didWarnAboutStateAssignmentForComponent;
        var didWarnAboutUninitializedState;
        var didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate;
        var didWarnAboutLegacyLifecyclesAndDerivedState;
        var didWarnAboutUndefinedDerivedState;
        var warnOnUndefinedDerivedState;
        var warnOnInvalidCallback;
        var didWarnAboutDirectlyAssigningPropsToState;
        var didWarnAboutContextTypeAndContextTypes;
        var didWarnAboutInvalidateContextType;
        {
          didWarnAboutStateAssignmentForComponent = new Set();
          didWarnAboutUninitializedState = new Set();
          didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate = new Set();
          didWarnAboutLegacyLifecyclesAndDerivedState = new Set();
          didWarnAboutDirectlyAssigningPropsToState = new Set();
          didWarnAboutUndefinedDerivedState = new Set();
          didWarnAboutContextTypeAndContextTypes = new Set();
          didWarnAboutInvalidateContextType = new Set();
          var didWarnOnInvalidCallback = new Set();
          warnOnInvalidCallback = function(callback, callerName) {
            if (callback === null || typeof callback === "function") {
              return;
            }
            var key = callerName + "_" + callback;
            if (!didWarnOnInvalidCallback.has(key)) {
              didWarnOnInvalidCallback.add(key);
              error("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", callerName, callback);
            }
          };
          warnOnUndefinedDerivedState = function(type, partialState) {
            if (partialState === void 0) {
              var componentName = getComponentName(type) || "Component";
              if (!didWarnAboutUndefinedDerivedState.has(componentName)) {
                didWarnAboutUndefinedDerivedState.add(componentName);
                error("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", componentName);
              }
            }
          };
          Object.defineProperty(fakeInternalInstance, "_processChildContext", {
            enumerable: false,
            value: function() {
              {
                {
                  throw Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
                }
              }
            }
          });
          Object.freeze(fakeInternalInstance);
        }
        function applyDerivedStateFromProps(workInProgress2, ctor, getDerivedStateFromProps, nextProps) {
          var prevState = workInProgress2.memoizedState;
          {
            if (workInProgress2.mode & StrictMode) {
              disableLogs();
              try {
                getDerivedStateFromProps(nextProps, prevState);
              } finally {
                reenableLogs();
              }
            }
          }
          var partialState = getDerivedStateFromProps(nextProps, prevState);
          {
            warnOnUndefinedDerivedState(ctor, partialState);
          }
          var memoizedState = partialState === null || partialState === void 0 ? prevState : _assign({}, prevState, partialState);
          workInProgress2.memoizedState = memoizedState;
          if (workInProgress2.lanes === NoLanes) {
            var updateQueue = workInProgress2.updateQueue;
            updateQueue.baseState = memoizedState;
          }
        }
        var classComponentUpdater = {
          isMounted,
          enqueueSetState: function(inst, payload, callback) {
            var fiber = get(inst);
            var eventTime = requestEventTime();
            var lane = requestUpdateLane(fiber);
            var update = createUpdate(eventTime, lane);
            update.payload = payload;
            if (callback !== void 0 && callback !== null) {
              {
                warnOnInvalidCallback(callback, "setState");
              }
              update.callback = callback;
            }
            enqueueUpdate(fiber, update);
            scheduleUpdateOnFiber(fiber, lane, eventTime);
          },
          enqueueReplaceState: function(inst, payload, callback) {
            var fiber = get(inst);
            var eventTime = requestEventTime();
            var lane = requestUpdateLane(fiber);
            var update = createUpdate(eventTime, lane);
            update.tag = ReplaceState;
            update.payload = payload;
            if (callback !== void 0 && callback !== null) {
              {
                warnOnInvalidCallback(callback, "replaceState");
              }
              update.callback = callback;
            }
            enqueueUpdate(fiber, update);
            scheduleUpdateOnFiber(fiber, lane, eventTime);
          },
          enqueueForceUpdate: function(inst, callback) {
            var fiber = get(inst);
            var eventTime = requestEventTime();
            var lane = requestUpdateLane(fiber);
            var update = createUpdate(eventTime, lane);
            update.tag = ForceUpdate;
            if (callback !== void 0 && callback !== null) {
              {
                warnOnInvalidCallback(callback, "forceUpdate");
              }
              update.callback = callback;
            }
            enqueueUpdate(fiber, update);
            scheduleUpdateOnFiber(fiber, lane, eventTime);
          }
        };
        function checkShouldComponentUpdate(workInProgress2, ctor, oldProps, newProps, oldState, newState, nextContext) {
          var instance = workInProgress2.stateNode;
          if (typeof instance.shouldComponentUpdate === "function") {
            {
              if (workInProgress2.mode & StrictMode) {
                disableLogs();
                try {
                  instance.shouldComponentUpdate(newProps, newState, nextContext);
                } finally {
                  reenableLogs();
                }
              }
            }
            var shouldUpdate = instance.shouldComponentUpdate(newProps, newState, nextContext);
            {
              if (shouldUpdate === void 0) {
                error("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", getComponentName(ctor) || "Component");
              }
            }
            return shouldUpdate;
          }
          if (ctor.prototype && ctor.prototype.isPureReactComponent) {
            return !shallowEqual(oldProps, newProps) || !shallowEqual(oldState, newState);
          }
          return true;
        }
        function checkClassInstance(workInProgress2, ctor, newProps) {
          var instance = workInProgress2.stateNode;
          {
            var name = getComponentName(ctor) || "Component";
            var renderPresent = instance.render;
            if (!renderPresent) {
              if (ctor.prototype && typeof ctor.prototype.render === "function") {
                error("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", name);
              } else {
                error("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", name);
              }
            }
            if (instance.getInitialState && !instance.getInitialState.isReactClassApproved && !instance.state) {
              error("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", name);
            }
            if (instance.getDefaultProps && !instance.getDefaultProps.isReactClassApproved) {
              error("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", name);
            }
            if (instance.propTypes) {
              error("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", name);
            }
            if (instance.contextType) {
              error("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", name);
            }
            {
              if (instance.contextTypes) {
                error("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", name);
              }
              if (ctor.contextType && ctor.contextTypes && !didWarnAboutContextTypeAndContextTypes.has(ctor)) {
                didWarnAboutContextTypeAndContextTypes.add(ctor);
                error("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", name);
              }
            }
            if (typeof instance.componentShouldUpdate === "function") {
              error("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", name);
            }
            if (ctor.prototype && ctor.prototype.isPureReactComponent && typeof instance.shouldComponentUpdate !== "undefined") {
              error("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", getComponentName(ctor) || "A pure component");
            }
            if (typeof instance.componentDidUnmount === "function") {
              error("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", name);
            }
            if (typeof instance.componentDidReceiveProps === "function") {
              error("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", name);
            }
            if (typeof instance.componentWillRecieveProps === "function") {
              error("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", name);
            }
            if (typeof instance.UNSAFE_componentWillRecieveProps === "function") {
              error("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", name);
            }
            var hasMutatedProps = instance.props !== newProps;
            if (instance.props !== void 0 && hasMutatedProps) {
              error("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", name, name);
            }
            if (instance.defaultProps) {
              error("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", name, name);
            }
            if (typeof instance.getSnapshotBeforeUpdate === "function" && typeof instance.componentDidUpdate !== "function" && !didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate.has(ctor)) {
              didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate.add(ctor);
              error("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", getComponentName(ctor));
            }
            if (typeof instance.getDerivedStateFromProps === "function") {
              error("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", name);
            }
            if (typeof instance.getDerivedStateFromError === "function") {
              error("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", name);
            }
            if (typeof ctor.getSnapshotBeforeUpdate === "function") {
              error("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", name);
            }
            var _state = instance.state;
            if (_state && (typeof _state !== "object" || isArray(_state))) {
              error("%s.state: must be set to an object or null", name);
            }
            if (typeof instance.getChildContext === "function" && typeof ctor.childContextTypes !== "object") {
              error("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", name);
            }
          }
        }
        function adoptClassInstance(workInProgress2, instance) {
          instance.updater = classComponentUpdater;
          workInProgress2.stateNode = instance;
          set(instance, workInProgress2);
          {
            instance._reactInternalInstance = fakeInternalInstance;
          }
        }
        function constructClassInstance(workInProgress2, ctor, props) {
          var isLegacyContextConsumer = false;
          var unmaskedContext = emptyContextObject;
          var context = emptyContextObject;
          var contextType = ctor.contextType;
          {
            if ("contextType" in ctor) {
              var isValid = contextType === null || contextType !== void 0 && contextType.$$typeof === REACT_CONTEXT_TYPE && contextType._context === void 0;
              if (!isValid && !didWarnAboutInvalidateContextType.has(ctor)) {
                didWarnAboutInvalidateContextType.add(ctor);
                var addendum = "";
                if (contextType === void 0) {
                  addendum = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file.";
                } else if (typeof contextType !== "object") {
                  addendum = " However, it is set to a " + typeof contextType + ".";
                } else if (contextType.$$typeof === REACT_PROVIDER_TYPE) {
                  addendum = " Did you accidentally pass the Context.Provider instead?";
                } else if (contextType._context !== void 0) {
                  addendum = " Did you accidentally pass the Context.Consumer instead?";
                } else {
                  addendum = " However, it is set to an object with keys {" + Object.keys(contextType).join(", ") + "}.";
                }
                error("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", getComponentName(ctor) || "Component", addendum);
              }
            }
          }
          if (typeof contextType === "object" && contextType !== null) {
            context = readContext(contextType);
          } else {
            unmaskedContext = getUnmaskedContext(workInProgress2, ctor, true);
            var contextTypes = ctor.contextTypes;
            isLegacyContextConsumer = contextTypes !== null && contextTypes !== void 0;
            context = isLegacyContextConsumer ? getMaskedContext(workInProgress2, unmaskedContext) : emptyContextObject;
          }
          {
            if (workInProgress2.mode & StrictMode) {
              disableLogs();
              try {
                new ctor(props, context);
              } finally {
                reenableLogs();
              }
            }
          }
          var instance = new ctor(props, context);
          var state = workInProgress2.memoizedState = instance.state !== null && instance.state !== void 0 ? instance.state : null;
          adoptClassInstance(workInProgress2, instance);
          {
            if (typeof ctor.getDerivedStateFromProps === "function" && state === null) {
              var componentName = getComponentName(ctor) || "Component";
              if (!didWarnAboutUninitializedState.has(componentName)) {
                didWarnAboutUninitializedState.add(componentName);
                error("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", componentName, instance.state === null ? "null" : "undefined", componentName);
              }
            }
            if (typeof ctor.getDerivedStateFromProps === "function" || typeof instance.getSnapshotBeforeUpdate === "function") {
              var foundWillMountName = null;
              var foundWillReceivePropsName = null;
              var foundWillUpdateName = null;
              if (typeof instance.componentWillMount === "function" && instance.componentWillMount.__suppressDeprecationWarning !== true) {
                foundWillMountName = "componentWillMount";
              } else if (typeof instance.UNSAFE_componentWillMount === "function") {
                foundWillMountName = "UNSAFE_componentWillMount";
              }
              if (typeof instance.componentWillReceiveProps === "function" && instance.componentWillReceiveProps.__suppressDeprecationWarning !== true) {
                foundWillReceivePropsName = "componentWillReceiveProps";
              } else if (typeof instance.UNSAFE_componentWillReceiveProps === "function") {
                foundWillReceivePropsName = "UNSAFE_componentWillReceiveProps";
              }
              if (typeof instance.componentWillUpdate === "function" && instance.componentWillUpdate.__suppressDeprecationWarning !== true) {
                foundWillUpdateName = "componentWillUpdate";
              } else if (typeof instance.UNSAFE_componentWillUpdate === "function") {
                foundWillUpdateName = "UNSAFE_componentWillUpdate";
              }
              if (foundWillMountName !== null || foundWillReceivePropsName !== null || foundWillUpdateName !== null) {
                var _componentName = getComponentName(ctor) || "Component";
                var newApiName = typeof ctor.getDerivedStateFromProps === "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
                if (!didWarnAboutLegacyLifecyclesAndDerivedState.has(_componentName)) {
                  didWarnAboutLegacyLifecyclesAndDerivedState.add(_componentName);
                  error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n%s uses %s but also contains the following legacy lifecycles:%s%s%s\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://reactjs.org/link/unsafe-component-lifecycles", _componentName, newApiName, foundWillMountName !== null ? "\n  " + foundWillMountName : "", foundWillReceivePropsName !== null ? "\n  " + foundWillReceivePropsName : "", foundWillUpdateName !== null ? "\n  " + foundWillUpdateName : "");
                }
              }
            }
          }
          if (isLegacyContextConsumer) {
            cacheContext(workInProgress2, unmaskedContext, context);
          }
          return instance;
        }
        function callComponentWillMount(workInProgress2, instance) {
          var oldState = instance.state;
          if (typeof instance.componentWillMount === "function") {
            instance.componentWillMount();
          }
          if (typeof instance.UNSAFE_componentWillMount === "function") {
            instance.UNSAFE_componentWillMount();
          }
          if (oldState !== instance.state) {
            {
              error("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", getComponentName(workInProgress2.type) || "Component");
            }
            classComponentUpdater.enqueueReplaceState(instance, instance.state, null);
          }
        }
        function callComponentWillReceiveProps(workInProgress2, instance, newProps, nextContext) {
          var oldState = instance.state;
          if (typeof instance.componentWillReceiveProps === "function") {
            instance.componentWillReceiveProps(newProps, nextContext);
          }
          if (typeof instance.UNSAFE_componentWillReceiveProps === "function") {
            instance.UNSAFE_componentWillReceiveProps(newProps, nextContext);
          }
          if (instance.state !== oldState) {
            {
              var componentName = getComponentName(workInProgress2.type) || "Component";
              if (!didWarnAboutStateAssignmentForComponent.has(componentName)) {
                didWarnAboutStateAssignmentForComponent.add(componentName);
                error("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", componentName);
              }
            }
            classComponentUpdater.enqueueReplaceState(instance, instance.state, null);
          }
        }
        function mountClassInstance(workInProgress2, ctor, newProps, renderLanes2) {
          {
            checkClassInstance(workInProgress2, ctor, newProps);
          }
          var instance = workInProgress2.stateNode;
          instance.props = newProps;
          instance.state = workInProgress2.memoizedState;
          instance.refs = emptyRefsObject;
          initializeUpdateQueue(workInProgress2);
          var contextType = ctor.contextType;
          if (typeof contextType === "object" && contextType !== null) {
            instance.context = readContext(contextType);
          } else {
            var unmaskedContext = getUnmaskedContext(workInProgress2, ctor, true);
            instance.context = getMaskedContext(workInProgress2, unmaskedContext);
          }
          {
            if (instance.state === newProps) {
              var componentName = getComponentName(ctor) || "Component";
              if (!didWarnAboutDirectlyAssigningPropsToState.has(componentName)) {
                didWarnAboutDirectlyAssigningPropsToState.add(componentName);
                error("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", componentName);
              }
            }
            if (workInProgress2.mode & StrictMode) {
              ReactStrictModeWarnings.recordLegacyContextWarning(workInProgress2, instance);
            }
            {
              ReactStrictModeWarnings.recordUnsafeLifecycleWarnings(workInProgress2, instance);
            }
          }
          processUpdateQueue(workInProgress2, newProps, instance, renderLanes2);
          instance.state = workInProgress2.memoizedState;
          var getDerivedStateFromProps = ctor.getDerivedStateFromProps;
          if (typeof getDerivedStateFromProps === "function") {
            applyDerivedStateFromProps(workInProgress2, ctor, getDerivedStateFromProps, newProps);
            instance.state = workInProgress2.memoizedState;
          }
          if (typeof ctor.getDerivedStateFromProps !== "function" && typeof instance.getSnapshotBeforeUpdate !== "function" && (typeof instance.UNSAFE_componentWillMount === "function" || typeof instance.componentWillMount === "function")) {
            callComponentWillMount(workInProgress2, instance);
            processUpdateQueue(workInProgress2, newProps, instance, renderLanes2);
            instance.state = workInProgress2.memoizedState;
          }
          if (typeof instance.componentDidMount === "function") {
            workInProgress2.flags |= Update;
          }
        }
        function resumeMountClassInstance(workInProgress2, ctor, newProps, renderLanes2) {
          var instance = workInProgress2.stateNode;
          var oldProps = workInProgress2.memoizedProps;
          instance.props = oldProps;
          var oldContext = instance.context;
          var contextType = ctor.contextType;
          var nextContext = emptyContextObject;
          if (typeof contextType === "object" && contextType !== null) {
            nextContext = readContext(contextType);
          } else {
            var nextLegacyUnmaskedContext = getUnmaskedContext(workInProgress2, ctor, true);
            nextContext = getMaskedContext(workInProgress2, nextLegacyUnmaskedContext);
          }
          var getDerivedStateFromProps = ctor.getDerivedStateFromProps;
          var hasNewLifecycles = typeof getDerivedStateFromProps === "function" || typeof instance.getSnapshotBeforeUpdate === "function";
          if (!hasNewLifecycles && (typeof instance.UNSAFE_componentWillReceiveProps === "function" || typeof instance.componentWillReceiveProps === "function")) {
            if (oldProps !== newProps || oldContext !== nextContext) {
              callComponentWillReceiveProps(workInProgress2, instance, newProps, nextContext);
            }
          }
          resetHasForceUpdateBeforeProcessing();
          var oldState = workInProgress2.memoizedState;
          var newState = instance.state = oldState;
          processUpdateQueue(workInProgress2, newProps, instance, renderLanes2);
          newState = workInProgress2.memoizedState;
          if (oldProps === newProps && oldState === newState && !hasContextChanged() && !checkHasForceUpdateAfterProcessing()) {
            if (typeof instance.componentDidMount === "function") {
              workInProgress2.flags |= Update;
            }
            return false;
          }
          if (typeof getDerivedStateFromProps === "function") {
            applyDerivedStateFromProps(workInProgress2, ctor, getDerivedStateFromProps, newProps);
            newState = workInProgress2.memoizedState;
          }
          var shouldUpdate = checkHasForceUpdateAfterProcessing() || checkShouldComponentUpdate(workInProgress2, ctor, oldProps, newProps, oldState, newState, nextContext);
          if (shouldUpdate) {
            if (!hasNewLifecycles && (typeof instance.UNSAFE_componentWillMount === "function" || typeof instance.componentWillMount === "function")) {
              if (typeof instance.componentWillMount === "function") {
                instance.componentWillMount();
              }
              if (typeof instance.UNSAFE_componentWillMount === "function") {
                instance.UNSAFE_componentWillMount();
              }
            }
            if (typeof instance.componentDidMount === "function") {
              workInProgress2.flags |= Update;
            }
          } else {
            if (typeof instance.componentDidMount === "function") {
              workInProgress2.flags |= Update;
            }
            workInProgress2.memoizedProps = newProps;
            workInProgress2.memoizedState = newState;
          }
          instance.props = newProps;
          instance.state = newState;
          instance.context = nextContext;
          return shouldUpdate;
        }
        function updateClassInstance(current2, workInProgress2, ctor, newProps, renderLanes2) {
          var instance = workInProgress2.stateNode;
          cloneUpdateQueue(current2, workInProgress2);
          var unresolvedOldProps = workInProgress2.memoizedProps;
          var oldProps = workInProgress2.type === workInProgress2.elementType ? unresolvedOldProps : resolveDefaultProps(workInProgress2.type, unresolvedOldProps);
          instance.props = oldProps;
          var unresolvedNewProps = workInProgress2.pendingProps;
          var oldContext = instance.context;
          var contextType = ctor.contextType;
          var nextContext = emptyContextObject;
          if (typeof contextType === "object" && contextType !== null) {
            nextContext = readContext(contextType);
          } else {
            var nextUnmaskedContext = getUnmaskedContext(workInProgress2, ctor, true);
            nextContext = getMaskedContext(workInProgress2, nextUnmaskedContext);
          }
          var getDerivedStateFromProps = ctor.getDerivedStateFromProps;
          var hasNewLifecycles = typeof getDerivedStateFromProps === "function" || typeof instance.getSnapshotBeforeUpdate === "function";
          if (!hasNewLifecycles && (typeof instance.UNSAFE_componentWillReceiveProps === "function" || typeof instance.componentWillReceiveProps === "function")) {
            if (unresolvedOldProps !== unresolvedNewProps || oldContext !== nextContext) {
              callComponentWillReceiveProps(workInProgress2, instance, newProps, nextContext);
            }
          }
          resetHasForceUpdateBeforeProcessing();
          var oldState = workInProgress2.memoizedState;
          var newState = instance.state = oldState;
          processUpdateQueue(workInProgress2, newProps, instance, renderLanes2);
          newState = workInProgress2.memoizedState;
          if (unresolvedOldProps === unresolvedNewProps && oldState === newState && !hasContextChanged() && !checkHasForceUpdateAfterProcessing()) {
            if (typeof instance.componentDidUpdate === "function") {
              if (unresolvedOldProps !== current2.memoizedProps || oldState !== current2.memoizedState) {
                workInProgress2.flags |= Update;
              }
            }
            if (typeof instance.getSnapshotBeforeUpdate === "function") {
              if (unresolvedOldProps !== current2.memoizedProps || oldState !== current2.memoizedState) {
                workInProgress2.flags |= Snapshot;
              }
            }
            return false;
          }
          if (typeof getDerivedStateFromProps === "function") {
            applyDerivedStateFromProps(workInProgress2, ctor, getDerivedStateFromProps, newProps);
            newState = workInProgress2.memoizedState;
          }
          var shouldUpdate = checkHasForceUpdateAfterProcessing() || checkShouldComponentUpdate(workInProgress2, ctor, oldProps, newProps, oldState, newState, nextContext);
          if (shouldUpdate) {
            if (!hasNewLifecycles && (typeof instance.UNSAFE_componentWillUpdate === "function" || typeof instance.componentWillUpdate === "function")) {
              if (typeof instance.componentWillUpdate === "function") {
                instance.componentWillUpdate(newProps, newState, nextContext);
              }
              if (typeof instance.UNSAFE_componentWillUpdate === "function") {
                instance.UNSAFE_componentWillUpdate(newProps, newState, nextContext);
              }
            }
            if (typeof instance.componentDidUpdate === "function") {
              workInProgress2.flags |= Update;
            }
            if (typeof instance.getSnapshotBeforeUpdate === "function") {
              workInProgress2.flags |= Snapshot;
            }
          } else {
            if (typeof instance.componentDidUpdate === "function") {
              if (unresolvedOldProps !== current2.memoizedProps || oldState !== current2.memoizedState) {
                workInProgress2.flags |= Update;
              }
            }
            if (typeof instance.getSnapshotBeforeUpdate === "function") {
              if (unresolvedOldProps !== current2.memoizedProps || oldState !== current2.memoizedState) {
                workInProgress2.flags |= Snapshot;
              }
            }
            workInProgress2.memoizedProps = newProps;
            workInProgress2.memoizedState = newState;
          }
          instance.props = newProps;
          instance.state = newState;
          instance.context = nextContext;
          return shouldUpdate;
        }
        var didWarnAboutMaps;
        var didWarnAboutGenerators;
        var didWarnAboutStringRefs;
        var ownerHasKeyUseWarning;
        var ownerHasFunctionTypeWarning;
        var warnForMissingKey = function(child, returnFiber) {
        };
        {
          didWarnAboutMaps = false;
          didWarnAboutGenerators = false;
          didWarnAboutStringRefs = {};
          ownerHasKeyUseWarning = {};
          ownerHasFunctionTypeWarning = {};
          warnForMissingKey = function(child, returnFiber) {
            if (child === null || typeof child !== "object") {
              return;
            }
            if (!child._store || child._store.validated || child.key != null) {
              return;
            }
            if (!(typeof child._store === "object")) {
              {
                throw Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
              }
            }
            child._store.validated = true;
            var componentName = getComponentName(returnFiber.type) || "Component";
            if (ownerHasKeyUseWarning[componentName]) {
              return;
            }
            ownerHasKeyUseWarning[componentName] = true;
            error('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.');
          };
        }
        var isArray$1 = Array.isArray;
        function coerceRef(returnFiber, current2, element) {
          var mixedRef = element.ref;
          if (mixedRef !== null && typeof mixedRef !== "function" && typeof mixedRef !== "object") {
            {
              if ((returnFiber.mode & StrictMode || warnAboutStringRefs) && !(element._owner && element._self && element._owner.stateNode !== element._self)) {
                var componentName = getComponentName(returnFiber.type) || "Component";
                if (!didWarnAboutStringRefs[componentName]) {
                  {
                    error('A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', mixedRef);
                  }
                  didWarnAboutStringRefs[componentName] = true;
                }
              }
            }
            if (element._owner) {
              var owner = element._owner;
              var inst;
              if (owner) {
                var ownerFiber = owner;
                if (!(ownerFiber.tag === ClassComponent)) {
                  {
                    throw Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
                  }
                }
                inst = ownerFiber.stateNode;
              }
              if (!inst) {
                {
                  throw Error("Missing owner for string ref " + mixedRef + ". This error is likely caused by a bug in React. Please file an issue.");
                }
              }
              var stringRef = "" + mixedRef;
              if (current2 !== null && current2.ref !== null && typeof current2.ref === "function" && current2.ref._stringRef === stringRef) {
                return current2.ref;
              }
              var ref = function(value) {
                var refs = inst.refs;
                if (refs === emptyRefsObject) {
                  refs = inst.refs = {};
                }
                if (value === null) {
                  delete refs[stringRef];
                } else {
                  refs[stringRef] = value;
                }
              };
              ref._stringRef = stringRef;
              return ref;
            } else {
              if (!(typeof mixedRef === "string")) {
                {
                  throw Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
                }
              }
              if (!element._owner) {
                {
                  throw Error("Element ref was specified as a string (" + mixedRef + ") but no owner was set. This could happen for one of the following reasons:\n1. You may be adding a ref to a function component\n2. You may be adding a ref to a component that was not created inside a component's render method\n3. You have multiple copies of React loaded\nSee https://reactjs.org/link/refs-must-have-owner for more information.");
                }
              }
            }
          }
          return mixedRef;
        }
        function throwOnInvalidObjectType(returnFiber, newChild) {
          if (returnFiber.type !== "textarea") {
            {
              {
                throw Error("Objects are not valid as a React child (found: " + (Object.prototype.toString.call(newChild) === "[object Object]" ? "object with keys {" + Object.keys(newChild).join(", ") + "}" : newChild) + "). If you meant to render a collection of children, use an array instead.");
              }
            }
          }
        }
        function warnOnFunctionType(returnFiber) {
          {
            var componentName = getComponentName(returnFiber.type) || "Component";
            if (ownerHasFunctionTypeWarning[componentName]) {
              return;
            }
            ownerHasFunctionTypeWarning[componentName] = true;
            error("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
          }
        }
        function ChildReconciler(shouldTrackSideEffects) {
          function deleteChild(returnFiber, childToDelete) {
            if (!shouldTrackSideEffects) {
              return;
            }
            var last = returnFiber.lastEffect;
            if (last !== null) {
              last.nextEffect = childToDelete;
              returnFiber.lastEffect = childToDelete;
            } else {
              returnFiber.firstEffect = returnFiber.lastEffect = childToDelete;
            }
            childToDelete.nextEffect = null;
            childToDelete.flags = Deletion;
          }
          function deleteRemainingChildren(returnFiber, currentFirstChild) {
            if (!shouldTrackSideEffects) {
              return null;
            }
            var childToDelete = currentFirstChild;
            while (childToDelete !== null) {
              deleteChild(returnFiber, childToDelete);
              childToDelete = childToDelete.sibling;
            }
            return null;
          }
          function mapRemainingChildren(returnFiber, currentFirstChild) {
            var existingChildren = new Map();
            var existingChild = currentFirstChild;
            while (existingChild !== null) {
              if (existingChild.key !== null) {
                existingChildren.set(existingChild.key, existingChild);
              } else {
                existingChildren.set(existingChild.index, existingChild);
              }
              existingChild = existingChild.sibling;
            }
            return existingChildren;
          }
          function useFiber(fiber, pendingProps) {
            var clone = createWorkInProgress(fiber, pendingProps);
            clone.index = 0;
            clone.sibling = null;
            return clone;
          }
          function placeChild(newFiber, lastPlacedIndex, newIndex) {
            newFiber.index = newIndex;
            if (!shouldTrackSideEffects) {
              return lastPlacedIndex;
            }
            var current2 = newFiber.alternate;
            if (current2 !== null) {
              var oldIndex = current2.index;
              if (oldIndex < lastPlacedIndex) {
                newFiber.flags = Placement;
                return lastPlacedIndex;
              } else {
                return oldIndex;
              }
            } else {
              newFiber.flags = Placement;
              return lastPlacedIndex;
            }
          }
          function placeSingleChild(newFiber) {
            if (shouldTrackSideEffects && newFiber.alternate === null) {
              newFiber.flags = Placement;
            }
            return newFiber;
          }
          function updateTextNode(returnFiber, current2, textContent, lanes) {
            if (current2 === null || current2.tag !== HostText) {
              var created = createFiberFromText(textContent, returnFiber.mode, lanes);
              created.return = returnFiber;
              return created;
            } else {
              var existing = useFiber(current2, textContent);
              existing.return = returnFiber;
              return existing;
            }
          }
          function updateElement(returnFiber, current2, element, lanes) {
            if (current2 !== null) {
              if (current2.elementType === element.type || isCompatibleFamilyForHotReloading(current2, element)) {
                var existing = useFiber(current2, element.props);
                existing.ref = coerceRef(returnFiber, current2, element);
                existing.return = returnFiber;
                {
                  existing._debugSource = element._source;
                  existing._debugOwner = element._owner;
                }
                return existing;
              }
            }
            var created = createFiberFromElement(element, returnFiber.mode, lanes);
            created.ref = coerceRef(returnFiber, current2, element);
            created.return = returnFiber;
            return created;
          }
          function updatePortal(returnFiber, current2, portal, lanes) {
            if (current2 === null || current2.tag !== HostPortal || current2.stateNode.containerInfo !== portal.containerInfo || current2.stateNode.implementation !== portal.implementation) {
              var created = createFiberFromPortal(portal, returnFiber.mode, lanes);
              created.return = returnFiber;
              return created;
            } else {
              var existing = useFiber(current2, portal.children || []);
              existing.return = returnFiber;
              return existing;
            }
          }
          function updateFragment2(returnFiber, current2, fragment, lanes, key) {
            if (current2 === null || current2.tag !== Fragment) {
              var created = createFiberFromFragment(fragment, returnFiber.mode, lanes, key);
              created.return = returnFiber;
              return created;
            } else {
              var existing = useFiber(current2, fragment);
              existing.return = returnFiber;
              return existing;
            }
          }
          function createChild(returnFiber, newChild, lanes) {
            if (typeof newChild === "string" || typeof newChild === "number") {
              var created = createFiberFromText("" + newChild, returnFiber.mode, lanes);
              created.return = returnFiber;
              return created;
            }
            if (typeof newChild === "object" && newChild !== null) {
              switch (newChild.$$typeof) {
                case REACT_ELEMENT_TYPE: {
                  var _created = createFiberFromElement(newChild, returnFiber.mode, lanes);
                  _created.ref = coerceRef(returnFiber, null, newChild);
                  _created.return = returnFiber;
                  return _created;
                }
                case REACT_PORTAL_TYPE: {
                  var _created2 = createFiberFromPortal(newChild, returnFiber.mode, lanes);
                  _created2.return = returnFiber;
                  return _created2;
                }
              }
              if (isArray$1(newChild) || getIteratorFn(newChild)) {
                var _created3 = createFiberFromFragment(newChild, returnFiber.mode, lanes, null);
                _created3.return = returnFiber;
                return _created3;
              }
              throwOnInvalidObjectType(returnFiber, newChild);
            }
            {
              if (typeof newChild === "function") {
                warnOnFunctionType(returnFiber);
              }
            }
            return null;
          }
          function updateSlot(returnFiber, oldFiber, newChild, lanes) {
            var key = oldFiber !== null ? oldFiber.key : null;
            if (typeof newChild === "string" || typeof newChild === "number") {
              if (key !== null) {
                return null;
              }
              return updateTextNode(returnFiber, oldFiber, "" + newChild, lanes);
            }
            if (typeof newChild === "object" && newChild !== null) {
              switch (newChild.$$typeof) {
                case REACT_ELEMENT_TYPE: {
                  if (newChild.key === key) {
                    if (newChild.type === REACT_FRAGMENT_TYPE) {
                      return updateFragment2(returnFiber, oldFiber, newChild.props.children, lanes, key);
                    }
                    return updateElement(returnFiber, oldFiber, newChild, lanes);
                  } else {
                    return null;
                  }
                }
                case REACT_PORTAL_TYPE: {
                  if (newChild.key === key) {
                    return updatePortal(returnFiber, oldFiber, newChild, lanes);
                  } else {
                    return null;
                  }
                }
              }
              if (isArray$1(newChild) || getIteratorFn(newChild)) {
                if (key !== null) {
                  return null;
                }
                return updateFragment2(returnFiber, oldFiber, newChild, lanes, null);
              }
              throwOnInvalidObjectType(returnFiber, newChild);
            }
            {
              if (typeof newChild === "function") {
                warnOnFunctionType(returnFiber);
              }
            }
            return null;
          }
          function updateFromMap(existingChildren, returnFiber, newIdx, newChild, lanes) {
            if (typeof newChild === "string" || typeof newChild === "number") {
              var matchedFiber = existingChildren.get(newIdx) || null;
              return updateTextNode(returnFiber, matchedFiber, "" + newChild, lanes);
            }
            if (typeof newChild === "object" && newChild !== null) {
              switch (newChild.$$typeof) {
                case REACT_ELEMENT_TYPE: {
                  var _matchedFiber = existingChildren.get(newChild.key === null ? newIdx : newChild.key) || null;
                  if (newChild.type === REACT_FRAGMENT_TYPE) {
                    return updateFragment2(returnFiber, _matchedFiber, newChild.props.children, lanes, newChild.key);
                  }
                  return updateElement(returnFiber, _matchedFiber, newChild, lanes);
                }
                case REACT_PORTAL_TYPE: {
                  var _matchedFiber2 = existingChildren.get(newChild.key === null ? newIdx : newChild.key) || null;
                  return updatePortal(returnFiber, _matchedFiber2, newChild, lanes);
                }
              }
              if (isArray$1(newChild) || getIteratorFn(newChild)) {
                var _matchedFiber3 = existingChildren.get(newIdx) || null;
                return updateFragment2(returnFiber, _matchedFiber3, newChild, lanes, null);
              }
              throwOnInvalidObjectType(returnFiber, newChild);
            }
            {
              if (typeof newChild === "function") {
                warnOnFunctionType(returnFiber);
              }
            }
            return null;
          }
          function warnOnInvalidKey(child, knownKeys, returnFiber) {
            {
              if (typeof child !== "object" || child === null) {
                return knownKeys;
              }
              switch (child.$$typeof) {
                case REACT_ELEMENT_TYPE:
                case REACT_PORTAL_TYPE:
                  warnForMissingKey(child, returnFiber);
                  var key = child.key;
                  if (typeof key !== "string") {
                    break;
                  }
                  if (knownKeys === null) {
                    knownKeys = new Set();
                    knownKeys.add(key);
                    break;
                  }
                  if (!knownKeys.has(key)) {
                    knownKeys.add(key);
                    break;
                  }
                  error("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted \u2014 the behavior is unsupported and could change in a future version.", key);
                  break;
              }
            }
            return knownKeys;
          }
          function reconcileChildrenArray(returnFiber, currentFirstChild, newChildren, lanes) {
            {
              var knownKeys = null;
              for (var i4 = 0; i4 < newChildren.length; i4++) {
                var child = newChildren[i4];
                knownKeys = warnOnInvalidKey(child, knownKeys, returnFiber);
              }
            }
            var resultingFirstChild = null;
            var previousNewFiber = null;
            var oldFiber = currentFirstChild;
            var lastPlacedIndex = 0;
            var newIdx = 0;
            var nextOldFiber = null;
            for (; oldFiber !== null && newIdx < newChildren.length; newIdx++) {
              if (oldFiber.index > newIdx) {
                nextOldFiber = oldFiber;
                oldFiber = null;
              } else {
                nextOldFiber = oldFiber.sibling;
              }
              var newFiber = updateSlot(returnFiber, oldFiber, newChildren[newIdx], lanes);
              if (newFiber === null) {
                if (oldFiber === null) {
                  oldFiber = nextOldFiber;
                }
                break;
              }
              if (shouldTrackSideEffects) {
                if (oldFiber && newFiber.alternate === null) {
                  deleteChild(returnFiber, oldFiber);
                }
              }
              lastPlacedIndex = placeChild(newFiber, lastPlacedIndex, newIdx);
              if (previousNewFiber === null) {
                resultingFirstChild = newFiber;
              } else {
                previousNewFiber.sibling = newFiber;
              }
              previousNewFiber = newFiber;
              oldFiber = nextOldFiber;
            }
            if (newIdx === newChildren.length) {
              deleteRemainingChildren(returnFiber, oldFiber);
              return resultingFirstChild;
            }
            if (oldFiber === null) {
              for (; newIdx < newChildren.length; newIdx++) {
                var _newFiber = createChild(returnFiber, newChildren[newIdx], lanes);
                if (_newFiber === null) {
                  continue;
                }
                lastPlacedIndex = placeChild(_newFiber, lastPlacedIndex, newIdx);
                if (previousNewFiber === null) {
                  resultingFirstChild = _newFiber;
                } else {
                  previousNewFiber.sibling = _newFiber;
                }
                previousNewFiber = _newFiber;
              }
              return resultingFirstChild;
            }
            var existingChildren = mapRemainingChildren(returnFiber, oldFiber);
            for (; newIdx < newChildren.length; newIdx++) {
              var _newFiber2 = updateFromMap(existingChildren, returnFiber, newIdx, newChildren[newIdx], lanes);
              if (_newFiber2 !== null) {
                if (shouldTrackSideEffects) {
                  if (_newFiber2.alternate !== null) {
                    existingChildren.delete(_newFiber2.key === null ? newIdx : _newFiber2.key);
                  }
                }
                lastPlacedIndex = placeChild(_newFiber2, lastPlacedIndex, newIdx);
                if (previousNewFiber === null) {
                  resultingFirstChild = _newFiber2;
                } else {
                  previousNewFiber.sibling = _newFiber2;
                }
                previousNewFiber = _newFiber2;
              }
            }
            if (shouldTrackSideEffects) {
              existingChildren.forEach(function(child2) {
                return deleteChild(returnFiber, child2);
              });
            }
            return resultingFirstChild;
          }
          function reconcileChildrenIterator(returnFiber, currentFirstChild, newChildrenIterable, lanes) {
            var iteratorFn = getIteratorFn(newChildrenIterable);
            if (!(typeof iteratorFn === "function")) {
              {
                throw Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
              }
            }
            {
              if (typeof Symbol === "function" && newChildrenIterable[Symbol.toStringTag] === "Generator") {
                if (!didWarnAboutGenerators) {
                  error("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers.");
                }
                didWarnAboutGenerators = true;
              }
              if (newChildrenIterable.entries === iteratorFn) {
                if (!didWarnAboutMaps) {
                  error("Using Maps as children is not supported. Use an array of keyed ReactElements instead.");
                }
                didWarnAboutMaps = true;
              }
              var _newChildren = iteratorFn.call(newChildrenIterable);
              if (_newChildren) {
                var knownKeys = null;
                var _step = _newChildren.next();
                for (; !_step.done; _step = _newChildren.next()) {
                  var child = _step.value;
                  knownKeys = warnOnInvalidKey(child, knownKeys, returnFiber);
                }
              }
            }
            var newChildren = iteratorFn.call(newChildrenIterable);
            if (!(newChildren != null)) {
              {
                throw Error("An iterable object provided no iterator.");
              }
            }
            var resultingFirstChild = null;
            var previousNewFiber = null;
            var oldFiber = currentFirstChild;
            var lastPlacedIndex = 0;
            var newIdx = 0;
            var nextOldFiber = null;
            var step = newChildren.next();
            for (; oldFiber !== null && !step.done; newIdx++, step = newChildren.next()) {
              if (oldFiber.index > newIdx) {
                nextOldFiber = oldFiber;
                oldFiber = null;
              } else {
                nextOldFiber = oldFiber.sibling;
              }
              var newFiber = updateSlot(returnFiber, oldFiber, step.value, lanes);
              if (newFiber === null) {
                if (oldFiber === null) {
                  oldFiber = nextOldFiber;
                }
                break;
              }
              if (shouldTrackSideEffects) {
                if (oldFiber && newFiber.alternate === null) {
                  deleteChild(returnFiber, oldFiber);
                }
              }
              lastPlacedIndex = placeChild(newFiber, lastPlacedIndex, newIdx);
              if (previousNewFiber === null) {
                resultingFirstChild = newFiber;
              } else {
                previousNewFiber.sibling = newFiber;
              }
              previousNewFiber = newFiber;
              oldFiber = nextOldFiber;
            }
            if (step.done) {
              deleteRemainingChildren(returnFiber, oldFiber);
              return resultingFirstChild;
            }
            if (oldFiber === null) {
              for (; !step.done; newIdx++, step = newChildren.next()) {
                var _newFiber3 = createChild(returnFiber, step.value, lanes);
                if (_newFiber3 === null) {
                  continue;
                }
                lastPlacedIndex = placeChild(_newFiber3, lastPlacedIndex, newIdx);
                if (previousNewFiber === null) {
                  resultingFirstChild = _newFiber3;
                } else {
                  previousNewFiber.sibling = _newFiber3;
                }
                previousNewFiber = _newFiber3;
              }
              return resultingFirstChild;
            }
            var existingChildren = mapRemainingChildren(returnFiber, oldFiber);
            for (; !step.done; newIdx++, step = newChildren.next()) {
              var _newFiber4 = updateFromMap(existingChildren, returnFiber, newIdx, step.value, lanes);
              if (_newFiber4 !== null) {
                if (shouldTrackSideEffects) {
                  if (_newFiber4.alternate !== null) {
                    existingChildren.delete(_newFiber4.key === null ? newIdx : _newFiber4.key);
                  }
                }
                lastPlacedIndex = placeChild(_newFiber4, lastPlacedIndex, newIdx);
                if (previousNewFiber === null) {
                  resultingFirstChild = _newFiber4;
                } else {
                  previousNewFiber.sibling = _newFiber4;
                }
                previousNewFiber = _newFiber4;
              }
            }
            if (shouldTrackSideEffects) {
              existingChildren.forEach(function(child2) {
                return deleteChild(returnFiber, child2);
              });
            }
            return resultingFirstChild;
          }
          function reconcileSingleTextNode(returnFiber, currentFirstChild, textContent, lanes) {
            if (currentFirstChild !== null && currentFirstChild.tag === HostText) {
              deleteRemainingChildren(returnFiber, currentFirstChild.sibling);
              var existing = useFiber(currentFirstChild, textContent);
              existing.return = returnFiber;
              return existing;
            }
            deleteRemainingChildren(returnFiber, currentFirstChild);
            var created = createFiberFromText(textContent, returnFiber.mode, lanes);
            created.return = returnFiber;
            return created;
          }
          function reconcileSingleElement(returnFiber, currentFirstChild, element, lanes) {
            var key = element.key;
            var child = currentFirstChild;
            while (child !== null) {
              if (child.key === key) {
                switch (child.tag) {
                  case Fragment: {
                    if (element.type === REACT_FRAGMENT_TYPE) {
                      deleteRemainingChildren(returnFiber, child.sibling);
                      var existing = useFiber(child, element.props.children);
                      existing.return = returnFiber;
                      {
                        existing._debugSource = element._source;
                        existing._debugOwner = element._owner;
                      }
                      return existing;
                    }
                    break;
                  }
                  case Block:
                  default: {
                    if (child.elementType === element.type || isCompatibleFamilyForHotReloading(child, element)) {
                      deleteRemainingChildren(returnFiber, child.sibling);
                      var _existing3 = useFiber(child, element.props);
                      _existing3.ref = coerceRef(returnFiber, child, element);
                      _existing3.return = returnFiber;
                      {
                        _existing3._debugSource = element._source;
                        _existing3._debugOwner = element._owner;
                      }
                      return _existing3;
                    }
                    break;
                  }
                }
                deleteRemainingChildren(returnFiber, child);
                break;
              } else {
                deleteChild(returnFiber, child);
              }
              child = child.sibling;
            }
            if (element.type === REACT_FRAGMENT_TYPE) {
              var created = createFiberFromFragment(element.props.children, returnFiber.mode, lanes, element.key);
              created.return = returnFiber;
              return created;
            } else {
              var _created4 = createFiberFromElement(element, returnFiber.mode, lanes);
              _created4.ref = coerceRef(returnFiber, currentFirstChild, element);
              _created4.return = returnFiber;
              return _created4;
            }
          }
          function reconcileSinglePortal(returnFiber, currentFirstChild, portal, lanes) {
            var key = portal.key;
            var child = currentFirstChild;
            while (child !== null) {
              if (child.key === key) {
                if (child.tag === HostPortal && child.stateNode.containerInfo === portal.containerInfo && child.stateNode.implementation === portal.implementation) {
                  deleteRemainingChildren(returnFiber, child.sibling);
                  var existing = useFiber(child, portal.children || []);
                  existing.return = returnFiber;
                  return existing;
                } else {
                  deleteRemainingChildren(returnFiber, child);
                  break;
                }
              } else {
                deleteChild(returnFiber, child);
              }
              child = child.sibling;
            }
            var created = createFiberFromPortal(portal, returnFiber.mode, lanes);
            created.return = returnFiber;
            return created;
          }
          function reconcileChildFibers2(returnFiber, currentFirstChild, newChild, lanes) {
            var isUnkeyedTopLevelFragment = typeof newChild === "object" && newChild !== null && newChild.type === REACT_FRAGMENT_TYPE && newChild.key === null;
            if (isUnkeyedTopLevelFragment) {
              newChild = newChild.props.children;
            }
            var isObject = typeof newChild === "object" && newChild !== null;
            if (isObject) {
              switch (newChild.$$typeof) {
                case REACT_ELEMENT_TYPE:
                  return placeSingleChild(reconcileSingleElement(returnFiber, currentFirstChild, newChild, lanes));
                case REACT_PORTAL_TYPE:
                  return placeSingleChild(reconcileSinglePortal(returnFiber, currentFirstChild, newChild, lanes));
              }
            }
            if (typeof newChild === "string" || typeof newChild === "number") {
              return placeSingleChild(reconcileSingleTextNode(returnFiber, currentFirstChild, "" + newChild, lanes));
            }
            if (isArray$1(newChild)) {
              return reconcileChildrenArray(returnFiber, currentFirstChild, newChild, lanes);
            }
            if (getIteratorFn(newChild)) {
              return reconcileChildrenIterator(returnFiber, currentFirstChild, newChild, lanes);
            }
            if (isObject) {
              throwOnInvalidObjectType(returnFiber, newChild);
            }
            {
              if (typeof newChild === "function") {
                warnOnFunctionType(returnFiber);
              }
            }
            if (typeof newChild === "undefined" && !isUnkeyedTopLevelFragment) {
              switch (returnFiber.tag) {
                case ClassComponent: {
                  {
                    var instance = returnFiber.stateNode;
                    if (instance.render._isMockFunction) {
                      break;
                    }
                  }
                }
                case Block:
                case FunctionComponent2:
                case ForwardRef:
                case SimpleMemoComponent: {
                  {
                    {
                      throw Error((getComponentName(returnFiber.type) || "Component") + "(...): Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null.");
                    }
                  }
                }
              }
            }
            return deleteRemainingChildren(returnFiber, currentFirstChild);
          }
          return reconcileChildFibers2;
        }
        var reconcileChildFibers = ChildReconciler(true);
        var mountChildFibers = ChildReconciler(false);
        function cloneChildFibers(current2, workInProgress2) {
          if (!(current2 === null || workInProgress2.child === current2.child)) {
            {
              throw Error("Resuming work not yet implemented.");
            }
          }
          if (workInProgress2.child === null) {
            return;
          }
          var currentChild = workInProgress2.child;
          var newChild = createWorkInProgress(currentChild, currentChild.pendingProps);
          workInProgress2.child = newChild;
          newChild.return = workInProgress2;
          while (currentChild.sibling !== null) {
            currentChild = currentChild.sibling;
            newChild = newChild.sibling = createWorkInProgress(currentChild, currentChild.pendingProps);
            newChild.return = workInProgress2;
          }
          newChild.sibling = null;
        }
        function resetChildFibers(workInProgress2, lanes) {
          var child = workInProgress2.child;
          while (child !== null) {
            resetWorkInProgress(child, lanes);
            child = child.sibling;
          }
        }
        var NO_CONTEXT = {};
        var contextStackCursor$1 = createCursor(NO_CONTEXT);
        var contextFiberStackCursor = createCursor(NO_CONTEXT);
        var rootInstanceStackCursor = createCursor(NO_CONTEXT);
        function requiredContext(c3) {
          if (!(c3 !== NO_CONTEXT)) {
            {
              throw Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
            }
          }
          return c3;
        }
        function getRootHostContainer() {
          var rootInstance = requiredContext(rootInstanceStackCursor.current);
          return rootInstance;
        }
        function pushHostContainer(fiber, nextRootInstance) {
          push(rootInstanceStackCursor, nextRootInstance, fiber);
          push(contextFiberStackCursor, fiber, fiber);
          push(contextStackCursor$1, NO_CONTEXT, fiber);
          var nextRootContext = getRootHostContext(nextRootInstance);
          pop(contextStackCursor$1, fiber);
          push(contextStackCursor$1, nextRootContext, fiber);
        }
        function popHostContainer(fiber) {
          pop(contextStackCursor$1, fiber);
          pop(contextFiberStackCursor, fiber);
          pop(rootInstanceStackCursor, fiber);
        }
        function getHostContext() {
          var context = requiredContext(contextStackCursor$1.current);
          return context;
        }
        function pushHostContext(fiber) {
          var rootInstance = requiredContext(rootInstanceStackCursor.current);
          var context = requiredContext(contextStackCursor$1.current);
          var nextContext = getChildHostContext(context, fiber.type);
          if (context === nextContext) {
            return;
          }
          push(contextFiberStackCursor, fiber, fiber);
          push(contextStackCursor$1, nextContext, fiber);
        }
        function popHostContext(fiber) {
          if (contextFiberStackCursor.current !== fiber) {
            return;
          }
          pop(contextStackCursor$1, fiber);
          pop(contextFiberStackCursor, fiber);
        }
        var DefaultSuspenseContext = 0;
        var SubtreeSuspenseContextMask = 1;
        var InvisibleParentSuspenseContext = 1;
        var ForceSuspenseFallback = 2;
        var suspenseStackCursor = createCursor(DefaultSuspenseContext);
        function hasSuspenseContext(parentContext, flag) {
          return (parentContext & flag) !== 0;
        }
        function setDefaultShallowSuspenseContext(parentContext) {
          return parentContext & SubtreeSuspenseContextMask;
        }
        function setShallowSuspenseContext(parentContext, shallowContext) {
          return parentContext & SubtreeSuspenseContextMask | shallowContext;
        }
        function addSubtreeSuspenseContext(parentContext, subtreeContext) {
          return parentContext | subtreeContext;
        }
        function pushSuspenseContext(fiber, newContext) {
          push(suspenseStackCursor, newContext, fiber);
        }
        function popSuspenseContext(fiber) {
          pop(suspenseStackCursor, fiber);
        }
        function shouldCaptureSuspense(workInProgress2, hasInvisibleParent) {
          var nextState = workInProgress2.memoizedState;
          if (nextState !== null) {
            if (nextState.dehydrated !== null) {
              return true;
            }
            return false;
          }
          var props = workInProgress2.memoizedProps;
          if (props.fallback === void 0) {
            return false;
          }
          if (props.unstable_avoidThisFallback !== true) {
            return true;
          }
          if (hasInvisibleParent) {
            return false;
          }
          return true;
        }
        function findFirstSuspended(row) {
          var node = row;
          while (node !== null) {
            if (node.tag === SuspenseComponent) {
              var state = node.memoizedState;
              if (state !== null) {
                var dehydrated = state.dehydrated;
                if (dehydrated === null || isSuspenseInstancePending(dehydrated) || isSuspenseInstanceFallback(dehydrated)) {
                  return node;
                }
              }
            } else if (node.tag === SuspenseListComponent && node.memoizedProps.revealOrder !== void 0) {
              var didSuspend = (node.flags & DidCapture) !== NoFlags;
              if (didSuspend) {
                return node;
              }
            } else if (node.child !== null) {
              node.child.return = node;
              node = node.child;
              continue;
            }
            if (node === row) {
              return null;
            }
            while (node.sibling === null) {
              if (node.return === null || node.return === row) {
                return null;
              }
              node = node.return;
            }
            node.sibling.return = node.return;
            node = node.sibling;
          }
          return null;
        }
        var NoFlags$1 = 0;
        var HasEffect = 1;
        var Layout = 2;
        var Passive$1 = 4;
        var hydrationParentFiber = null;
        var nextHydratableInstance = null;
        var isHydrating = false;
        function enterHydrationState(fiber) {
          var parentInstance = fiber.stateNode.containerInfo;
          nextHydratableInstance = getFirstHydratableChild(parentInstance);
          hydrationParentFiber = fiber;
          isHydrating = true;
          return true;
        }
        function deleteHydratableInstance(returnFiber, instance) {
          {
            switch (returnFiber.tag) {
              case HostRoot:
                didNotHydrateContainerInstance(returnFiber.stateNode.containerInfo, instance);
                break;
              case HostComponent:
                didNotHydrateInstance(returnFiber.type, returnFiber.memoizedProps, returnFiber.stateNode, instance);
                break;
            }
          }
          var childToDelete = createFiberFromHostInstanceForDeletion();
          childToDelete.stateNode = instance;
          childToDelete.return = returnFiber;
          childToDelete.flags = Deletion;
          if (returnFiber.lastEffect !== null) {
            returnFiber.lastEffect.nextEffect = childToDelete;
            returnFiber.lastEffect = childToDelete;
          } else {
            returnFiber.firstEffect = returnFiber.lastEffect = childToDelete;
          }
        }
        function insertNonHydratedInstance(returnFiber, fiber) {
          fiber.flags = fiber.flags & ~Hydrating | Placement;
          {
            switch (returnFiber.tag) {
              case HostRoot: {
                var parentContainer = returnFiber.stateNode.containerInfo;
                switch (fiber.tag) {
                  case HostComponent:
                    var type = fiber.type;
                    var props = fiber.pendingProps;
                    didNotFindHydratableContainerInstance(parentContainer, type);
                    break;
                  case HostText:
                    var text = fiber.pendingProps;
                    didNotFindHydratableContainerTextInstance(parentContainer, text);
                    break;
                }
                break;
              }
              case HostComponent: {
                var parentType = returnFiber.type;
                var parentProps = returnFiber.memoizedProps;
                var parentInstance = returnFiber.stateNode;
                switch (fiber.tag) {
                  case HostComponent:
                    var _type = fiber.type;
                    var _props = fiber.pendingProps;
                    didNotFindHydratableInstance(parentType, parentProps, parentInstance, _type);
                    break;
                  case HostText:
                    var _text = fiber.pendingProps;
                    didNotFindHydratableTextInstance(parentType, parentProps, parentInstance, _text);
                    break;
                  case SuspenseComponent:
                    didNotFindHydratableSuspenseInstance(parentType, parentProps);
                    break;
                }
                break;
              }
              default:
                return;
            }
          }
        }
        function tryHydrate(fiber, nextInstance) {
          switch (fiber.tag) {
            case HostComponent: {
              var type = fiber.type;
              var props = fiber.pendingProps;
              var instance = canHydrateInstance(nextInstance, type);
              if (instance !== null) {
                fiber.stateNode = instance;
                return true;
              }
              return false;
            }
            case HostText: {
              var text = fiber.pendingProps;
              var textInstance = canHydrateTextInstance(nextInstance, text);
              if (textInstance !== null) {
                fiber.stateNode = textInstance;
                return true;
              }
              return false;
            }
            case SuspenseComponent: {
              return false;
            }
            default:
              return false;
          }
        }
        function tryToClaimNextHydratableInstance(fiber) {
          if (!isHydrating) {
            return;
          }
          var nextInstance = nextHydratableInstance;
          if (!nextInstance) {
            insertNonHydratedInstance(hydrationParentFiber, fiber);
            isHydrating = false;
            hydrationParentFiber = fiber;
            return;
          }
          var firstAttemptedInstance = nextInstance;
          if (!tryHydrate(fiber, nextInstance)) {
            nextInstance = getNextHydratableSibling(firstAttemptedInstance);
            if (!nextInstance || !tryHydrate(fiber, nextInstance)) {
              insertNonHydratedInstance(hydrationParentFiber, fiber);
              isHydrating = false;
              hydrationParentFiber = fiber;
              return;
            }
            deleteHydratableInstance(hydrationParentFiber, firstAttemptedInstance);
          }
          hydrationParentFiber = fiber;
          nextHydratableInstance = getFirstHydratableChild(nextInstance);
        }
        function prepareToHydrateHostInstance(fiber, rootContainerInstance, hostContext) {
          var instance = fiber.stateNode;
          var updatePayload = hydrateInstance(instance, fiber.type, fiber.memoizedProps, rootContainerInstance, hostContext, fiber);
          fiber.updateQueue = updatePayload;
          if (updatePayload !== null) {
            return true;
          }
          return false;
        }
        function prepareToHydrateHostTextInstance(fiber) {
          var textInstance = fiber.stateNode;
          var textContent = fiber.memoizedProps;
          var shouldUpdate = hydrateTextInstance(textInstance, textContent, fiber);
          {
            if (shouldUpdate) {
              var returnFiber = hydrationParentFiber;
              if (returnFiber !== null) {
                switch (returnFiber.tag) {
                  case HostRoot: {
                    var parentContainer = returnFiber.stateNode.containerInfo;
                    didNotMatchHydratedContainerTextInstance(parentContainer, textInstance, textContent);
                    break;
                  }
                  case HostComponent: {
                    var parentType = returnFiber.type;
                    var parentProps = returnFiber.memoizedProps;
                    var parentInstance = returnFiber.stateNode;
                    didNotMatchHydratedTextInstance(parentType, parentProps, parentInstance, textInstance, textContent);
                    break;
                  }
                }
              }
            }
          }
          return shouldUpdate;
        }
        function skipPastDehydratedSuspenseInstance(fiber) {
          var suspenseState = fiber.memoizedState;
          var suspenseInstance = suspenseState !== null ? suspenseState.dehydrated : null;
          if (!suspenseInstance) {
            {
              throw Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
            }
          }
          return getNextHydratableInstanceAfterSuspenseInstance(suspenseInstance);
        }
        function popToNextHostParent(fiber) {
          var parent = fiber.return;
          while (parent !== null && parent.tag !== HostComponent && parent.tag !== HostRoot && parent.tag !== SuspenseComponent) {
            parent = parent.return;
          }
          hydrationParentFiber = parent;
        }
        function popHydrationState(fiber) {
          if (fiber !== hydrationParentFiber) {
            return false;
          }
          if (!isHydrating) {
            popToNextHostParent(fiber);
            isHydrating = true;
            return false;
          }
          var type = fiber.type;
          if (fiber.tag !== HostComponent || type !== "head" && type !== "body" && !shouldSetTextContent(type, fiber.memoizedProps)) {
            var nextInstance = nextHydratableInstance;
            while (nextInstance) {
              deleteHydratableInstance(fiber, nextInstance);
              nextInstance = getNextHydratableSibling(nextInstance);
            }
          }
          popToNextHostParent(fiber);
          if (fiber.tag === SuspenseComponent) {
            nextHydratableInstance = skipPastDehydratedSuspenseInstance(fiber);
          } else {
            nextHydratableInstance = hydrationParentFiber ? getNextHydratableSibling(fiber.stateNode) : null;
          }
          return true;
        }
        function resetHydrationState() {
          hydrationParentFiber = null;
          nextHydratableInstance = null;
          isHydrating = false;
        }
        function getIsHydrating() {
          return isHydrating;
        }
        var workInProgressSources = [];
        var rendererSigil$1;
        {
          rendererSigil$1 = {};
        }
        function markSourceAsDirty(mutableSource) {
          workInProgressSources.push(mutableSource);
        }
        function resetWorkInProgressVersions() {
          for (var i4 = 0; i4 < workInProgressSources.length; i4++) {
            var mutableSource = workInProgressSources[i4];
            {
              mutableSource._workInProgressVersionPrimary = null;
            }
          }
          workInProgressSources.length = 0;
        }
        function getWorkInProgressVersion(mutableSource) {
          {
            return mutableSource._workInProgressVersionPrimary;
          }
        }
        function setWorkInProgressVersion(mutableSource, version) {
          {
            mutableSource._workInProgressVersionPrimary = version;
          }
          workInProgressSources.push(mutableSource);
        }
        function warnAboutMultipleRenderersDEV(mutableSource) {
          {
            {
              if (mutableSource._currentPrimaryRenderer == null) {
                mutableSource._currentPrimaryRenderer = rendererSigil$1;
              } else if (mutableSource._currentPrimaryRenderer !== rendererSigil$1) {
                error("Detected multiple renderers concurrently rendering the same mutable source. This is currently unsupported.");
              }
            }
          }
        }
        var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher, ReactCurrentBatchConfig$1 = ReactSharedInternals.ReactCurrentBatchConfig;
        var didWarnAboutMismatchedHooksForComponent;
        var didWarnAboutUseOpaqueIdentifier;
        {
          didWarnAboutUseOpaqueIdentifier = {};
          didWarnAboutMismatchedHooksForComponent = new Set();
        }
        var renderLanes = NoLanes;
        var currentlyRenderingFiber$1 = null;
        var currentHook = null;
        var workInProgressHook = null;
        var didScheduleRenderPhaseUpdate = false;
        var didScheduleRenderPhaseUpdateDuringThisPass = false;
        var RE_RENDER_LIMIT = 25;
        var currentHookNameInDev = null;
        var hookTypesDev = null;
        var hookTypesUpdateIndexDev = -1;
        var ignorePreviousDependencies = false;
        function mountHookTypesDev() {
          {
            var hookName = currentHookNameInDev;
            if (hookTypesDev === null) {
              hookTypesDev = [hookName];
            } else {
              hookTypesDev.push(hookName);
            }
          }
        }
        function updateHookTypesDev() {
          {
            var hookName = currentHookNameInDev;
            if (hookTypesDev !== null) {
              hookTypesUpdateIndexDev++;
              if (hookTypesDev[hookTypesUpdateIndexDev] !== hookName) {
                warnOnHookMismatchInDev(hookName);
              }
            }
          }
        }
        function checkDepsAreArrayDev(deps) {
          {
            if (deps !== void 0 && deps !== null && !Array.isArray(deps)) {
              error("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", currentHookNameInDev, typeof deps);
            }
          }
        }
        function warnOnHookMismatchInDev(currentHookName) {
          {
            var componentName = getComponentName(currentlyRenderingFiber$1.type);
            if (!didWarnAboutMismatchedHooksForComponent.has(componentName)) {
              didWarnAboutMismatchedHooksForComponent.add(componentName);
              if (hookTypesDev !== null) {
                var table = "";
                var secondColumnStart = 30;
                for (var i4 = 0; i4 <= hookTypesUpdateIndexDev; i4++) {
                  var oldHookName = hookTypesDev[i4];
                  var newHookName = i4 === hookTypesUpdateIndexDev ? currentHookName : oldHookName;
                  var row = i4 + 1 + ". " + oldHookName;
                  while (row.length < secondColumnStart) {
                    row += " ";
                  }
                  row += newHookName + "\n";
                  table += row;
                }
                error("React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks\n\n   Previous render            Next render\n   ------------------------------------------------------\n%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n", componentName, table);
              }
            }
          }
        }
        function throwInvalidHookError() {
          {
            {
              throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");
            }
          }
        }
        function areHookInputsEqual(nextDeps, prevDeps) {
          {
            if (ignorePreviousDependencies) {
              return false;
            }
          }
          if (prevDeps === null) {
            {
              error("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", currentHookNameInDev);
            }
            return false;
          }
          {
            if (nextDeps.length !== prevDeps.length) {
              error("The final argument passed to %s changed size between renders. The order and size of this array must remain constant.\n\nPrevious: %s\nIncoming: %s", currentHookNameInDev, "[" + prevDeps.join(", ") + "]", "[" + nextDeps.join(", ") + "]");
            }
          }
          for (var i4 = 0; i4 < prevDeps.length && i4 < nextDeps.length; i4++) {
            if (objectIs(nextDeps[i4], prevDeps[i4])) {
              continue;
            }
            return false;
          }
          return true;
        }
        function renderWithHooks(current2, workInProgress2, Component, props, secondArg, nextRenderLanes) {
          renderLanes = nextRenderLanes;
          currentlyRenderingFiber$1 = workInProgress2;
          {
            hookTypesDev = current2 !== null ? current2._debugHookTypes : null;
            hookTypesUpdateIndexDev = -1;
            ignorePreviousDependencies = current2 !== null && current2.type !== workInProgress2.type;
          }
          workInProgress2.memoizedState = null;
          workInProgress2.updateQueue = null;
          workInProgress2.lanes = NoLanes;
          {
            if (current2 !== null && current2.memoizedState !== null) {
              ReactCurrentDispatcher$1.current = HooksDispatcherOnUpdateInDEV;
            } else if (hookTypesDev !== null) {
              ReactCurrentDispatcher$1.current = HooksDispatcherOnMountWithHookTypesInDEV;
            } else {
              ReactCurrentDispatcher$1.current = HooksDispatcherOnMountInDEV;
            }
          }
          var children = Component(props, secondArg);
          if (didScheduleRenderPhaseUpdateDuringThisPass) {
            var numberOfReRenders = 0;
            do {
              didScheduleRenderPhaseUpdateDuringThisPass = false;
              if (!(numberOfReRenders < RE_RENDER_LIMIT)) {
                {
                  throw Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
                }
              }
              numberOfReRenders += 1;
              {
                ignorePreviousDependencies = false;
              }
              currentHook = null;
              workInProgressHook = null;
              workInProgress2.updateQueue = null;
              {
                hookTypesUpdateIndexDev = -1;
              }
              ReactCurrentDispatcher$1.current = HooksDispatcherOnRerenderInDEV;
              children = Component(props, secondArg);
            } while (didScheduleRenderPhaseUpdateDuringThisPass);
          }
          ReactCurrentDispatcher$1.current = ContextOnlyDispatcher;
          {
            workInProgress2._debugHookTypes = hookTypesDev;
          }
          var didRenderTooFewHooks = currentHook !== null && currentHook.next !== null;
          renderLanes = NoLanes;
          currentlyRenderingFiber$1 = null;
          currentHook = null;
          workInProgressHook = null;
          {
            currentHookNameInDev = null;
            hookTypesDev = null;
            hookTypesUpdateIndexDev = -1;
          }
          didScheduleRenderPhaseUpdate = false;
          if (!!didRenderTooFewHooks) {
            {
              throw Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
            }
          }
          return children;
        }
        function bailoutHooks(current2, workInProgress2, lanes) {
          workInProgress2.updateQueue = current2.updateQueue;
          workInProgress2.flags &= ~(Passive | Update);
          current2.lanes = removeLanes(current2.lanes, lanes);
        }
        function resetHooksAfterThrow() {
          ReactCurrentDispatcher$1.current = ContextOnlyDispatcher;
          if (didScheduleRenderPhaseUpdate) {
            var hook = currentlyRenderingFiber$1.memoizedState;
            while (hook !== null) {
              var queue = hook.queue;
              if (queue !== null) {
                queue.pending = null;
              }
              hook = hook.next;
            }
            didScheduleRenderPhaseUpdate = false;
          }
          renderLanes = NoLanes;
          currentlyRenderingFiber$1 = null;
          currentHook = null;
          workInProgressHook = null;
          {
            hookTypesDev = null;
            hookTypesUpdateIndexDev = -1;
            currentHookNameInDev = null;
            isUpdatingOpaqueValueInRenderPhase = false;
          }
          didScheduleRenderPhaseUpdateDuringThisPass = false;
        }
        function mountWorkInProgressHook() {
          var hook = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
          };
          if (workInProgressHook === null) {
            currentlyRenderingFiber$1.memoizedState = workInProgressHook = hook;
          } else {
            workInProgressHook = workInProgressHook.next = hook;
          }
          return workInProgressHook;
        }
        function updateWorkInProgressHook() {
          var nextCurrentHook;
          if (currentHook === null) {
            var current2 = currentlyRenderingFiber$1.alternate;
            if (current2 !== null) {
              nextCurrentHook = current2.memoizedState;
            } else {
              nextCurrentHook = null;
            }
          } else {
            nextCurrentHook = currentHook.next;
          }
          var nextWorkInProgressHook;
          if (workInProgressHook === null) {
            nextWorkInProgressHook = currentlyRenderingFiber$1.memoizedState;
          } else {
            nextWorkInProgressHook = workInProgressHook.next;
          }
          if (nextWorkInProgressHook !== null) {
            workInProgressHook = nextWorkInProgressHook;
            nextWorkInProgressHook = workInProgressHook.next;
            currentHook = nextCurrentHook;
          } else {
            if (!(nextCurrentHook !== null)) {
              {
                throw Error("Rendered more hooks than during the previous render.");
              }
            }
            currentHook = nextCurrentHook;
            var newHook = {
              memoizedState: currentHook.memoizedState,
              baseState: currentHook.baseState,
              baseQueue: currentHook.baseQueue,
              queue: currentHook.queue,
              next: null
            };
            if (workInProgressHook === null) {
              currentlyRenderingFiber$1.memoizedState = workInProgressHook = newHook;
            } else {
              workInProgressHook = workInProgressHook.next = newHook;
            }
          }
          return workInProgressHook;
        }
        function createFunctionComponentUpdateQueue() {
          return {
            lastEffect: null
          };
        }
        function basicStateReducer(state, action) {
          return typeof action === "function" ? action(state) : action;
        }
        function mountReducer(reducer2, initialArg, init) {
          var hook = mountWorkInProgressHook();
          var initialState2;
          if (init !== void 0) {
            initialState2 = init(initialArg);
          } else {
            initialState2 = initialArg;
          }
          hook.memoizedState = hook.baseState = initialState2;
          var queue = hook.queue = {
            pending: null,
            dispatch: null,
            lastRenderedReducer: reducer2,
            lastRenderedState: initialState2
          };
          var dispatch = queue.dispatch = dispatchAction.bind(null, currentlyRenderingFiber$1, queue);
          return [hook.memoizedState, dispatch];
        }
        function updateReducer(reducer2, initialArg, init) {
          var hook = updateWorkInProgressHook();
          var queue = hook.queue;
          if (!(queue !== null)) {
            {
              throw Error("Should have a queue. This is likely a bug in React. Please file an issue.");
            }
          }
          queue.lastRenderedReducer = reducer2;
          var current2 = currentHook;
          var baseQueue = current2.baseQueue;
          var pendingQueue = queue.pending;
          if (pendingQueue !== null) {
            if (baseQueue !== null) {
              var baseFirst = baseQueue.next;
              var pendingFirst = pendingQueue.next;
              baseQueue.next = pendingFirst;
              pendingQueue.next = baseFirst;
            }
            {
              if (current2.baseQueue !== baseQueue) {
                error("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React.");
              }
            }
            current2.baseQueue = baseQueue = pendingQueue;
            queue.pending = null;
          }
          if (baseQueue !== null) {
            var first = baseQueue.next;
            var newState = current2.baseState;
            var newBaseState = null;
            var newBaseQueueFirst = null;
            var newBaseQueueLast = null;
            var update = first;
            do {
              var updateLane = update.lane;
              if (!isSubsetOfLanes(renderLanes, updateLane)) {
                var clone = {
                  lane: updateLane,
                  action: update.action,
                  eagerReducer: update.eagerReducer,
                  eagerState: update.eagerState,
                  next: null
                };
                if (newBaseQueueLast === null) {
                  newBaseQueueFirst = newBaseQueueLast = clone;
                  newBaseState = newState;
                } else {
                  newBaseQueueLast = newBaseQueueLast.next = clone;
                }
                currentlyRenderingFiber$1.lanes = mergeLanes(currentlyRenderingFiber$1.lanes, updateLane);
                markSkippedUpdateLanes(updateLane);
              } else {
                if (newBaseQueueLast !== null) {
                  var _clone = {
                    lane: NoLane,
                    action: update.action,
                    eagerReducer: update.eagerReducer,
                    eagerState: update.eagerState,
                    next: null
                  };
                  newBaseQueueLast = newBaseQueueLast.next = _clone;
                }
                if (update.eagerReducer === reducer2) {
                  newState = update.eagerState;
                } else {
                  var action = update.action;
                  newState = reducer2(newState, action);
                }
              }
              update = update.next;
            } while (update !== null && update !== first);
            if (newBaseQueueLast === null) {
              newBaseState = newState;
            } else {
              newBaseQueueLast.next = newBaseQueueFirst;
            }
            if (!objectIs(newState, hook.memoizedState)) {
              markWorkInProgressReceivedUpdate();
            }
            hook.memoizedState = newState;
            hook.baseState = newBaseState;
            hook.baseQueue = newBaseQueueLast;
            queue.lastRenderedState = newState;
          }
          var dispatch = queue.dispatch;
          return [hook.memoizedState, dispatch];
        }
        function rerenderReducer(reducer2, initialArg, init) {
          var hook = updateWorkInProgressHook();
          var queue = hook.queue;
          if (!(queue !== null)) {
            {
              throw Error("Should have a queue. This is likely a bug in React. Please file an issue.");
            }
          }
          queue.lastRenderedReducer = reducer2;
          var dispatch = queue.dispatch;
          var lastRenderPhaseUpdate = queue.pending;
          var newState = hook.memoizedState;
          if (lastRenderPhaseUpdate !== null) {
            queue.pending = null;
            var firstRenderPhaseUpdate = lastRenderPhaseUpdate.next;
            var update = firstRenderPhaseUpdate;
            do {
              var action = update.action;
              newState = reducer2(newState, action);
              update = update.next;
            } while (update !== firstRenderPhaseUpdate);
            if (!objectIs(newState, hook.memoizedState)) {
              markWorkInProgressReceivedUpdate();
            }
            hook.memoizedState = newState;
            if (hook.baseQueue === null) {
              hook.baseState = newState;
            }
            queue.lastRenderedState = newState;
          }
          return [newState, dispatch];
        }
        function readFromUnsubcribedMutableSource(root2, source, getSnapshot) {
          {
            warnAboutMultipleRenderersDEV(source);
          }
          var getVersion = source._getVersion;
          var version = getVersion(source._source);
          var isSafeToReadFromSource = false;
          var currentRenderVersion = getWorkInProgressVersion(source);
          if (currentRenderVersion !== null) {
            isSafeToReadFromSource = currentRenderVersion === version;
          } else {
            isSafeToReadFromSource = isSubsetOfLanes(renderLanes, root2.mutableReadLanes);
            if (isSafeToReadFromSource) {
              setWorkInProgressVersion(source, version);
            }
          }
          if (isSafeToReadFromSource) {
            var snapshot = getSnapshot(source._source);
            {
              if (typeof snapshot === "function") {
                error("Mutable source should not return a function as the snapshot value. Functions may close over mutable values and cause tearing.");
              }
            }
            return snapshot;
          } else {
            markSourceAsDirty(source);
            {
              {
                throw Error("Cannot read from mutable source during the current render without tearing. This is a bug in React. Please file an issue.");
              }
            }
          }
        }
        function useMutableSource(hook, source, getSnapshot, subscribe) {
          var root2 = getWorkInProgressRoot();
          if (!(root2 !== null)) {
            {
              throw Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
            }
          }
          var getVersion = source._getVersion;
          var version = getVersion(source._source);
          var dispatcher = ReactCurrentDispatcher$1.current;
          var _dispatcher$useState = dispatcher.useState(function() {
            return readFromUnsubcribedMutableSource(root2, source, getSnapshot);
          }), currentSnapshot = _dispatcher$useState[0], setSnapshot = _dispatcher$useState[1];
          var snapshot = currentSnapshot;
          var stateHook = workInProgressHook;
          var memoizedState = hook.memoizedState;
          var refs = memoizedState.refs;
          var prevGetSnapshot = refs.getSnapshot;
          var prevSource = memoizedState.source;
          var prevSubscribe = memoizedState.subscribe;
          var fiber = currentlyRenderingFiber$1;
          hook.memoizedState = {
            refs,
            source,
            subscribe
          };
          dispatcher.useEffect(function() {
            refs.getSnapshot = getSnapshot;
            refs.setSnapshot = setSnapshot;
            var maybeNewVersion = getVersion(source._source);
            if (!objectIs(version, maybeNewVersion)) {
              var maybeNewSnapshot = getSnapshot(source._source);
              {
                if (typeof maybeNewSnapshot === "function") {
                  error("Mutable source should not return a function as the snapshot value. Functions may close over mutable values and cause tearing.");
                }
              }
              if (!objectIs(snapshot, maybeNewSnapshot)) {
                setSnapshot(maybeNewSnapshot);
                var lane = requestUpdateLane(fiber);
                markRootMutableRead(root2, lane);
              }
              markRootEntangled(root2, root2.mutableReadLanes);
            }
          }, [getSnapshot, source, subscribe]);
          dispatcher.useEffect(function() {
            var handleChange = function() {
              var latestGetSnapshot = refs.getSnapshot;
              var latestSetSnapshot = refs.setSnapshot;
              try {
                latestSetSnapshot(latestGetSnapshot(source._source));
                var lane = requestUpdateLane(fiber);
                markRootMutableRead(root2, lane);
              } catch (error2) {
                latestSetSnapshot(function() {
                  throw error2;
                });
              }
            };
            var unsubscribe = subscribe(source._source, handleChange);
            {
              if (typeof unsubscribe !== "function") {
                error("Mutable source subscribe function must return an unsubscribe function.");
              }
            }
            return unsubscribe;
          }, [source, subscribe]);
          if (!objectIs(prevGetSnapshot, getSnapshot) || !objectIs(prevSource, source) || !objectIs(prevSubscribe, subscribe)) {
            var newQueue = {
              pending: null,
              dispatch: null,
              lastRenderedReducer: basicStateReducer,
              lastRenderedState: snapshot
            };
            newQueue.dispatch = setSnapshot = dispatchAction.bind(null, currentlyRenderingFiber$1, newQueue);
            stateHook.queue = newQueue;
            stateHook.baseQueue = null;
            snapshot = readFromUnsubcribedMutableSource(root2, source, getSnapshot);
            stateHook.memoizedState = stateHook.baseState = snapshot;
          }
          return snapshot;
        }
        function mountMutableSource(source, getSnapshot, subscribe) {
          var hook = mountWorkInProgressHook();
          hook.memoizedState = {
            refs: {
              getSnapshot,
              setSnapshot: null
            },
            source,
            subscribe
          };
          return useMutableSource(hook, source, getSnapshot, subscribe);
        }
        function updateMutableSource(source, getSnapshot, subscribe) {
          var hook = updateWorkInProgressHook();
          return useMutableSource(hook, source, getSnapshot, subscribe);
        }
        function mountState(initialState2) {
          var hook = mountWorkInProgressHook();
          if (typeof initialState2 === "function") {
            initialState2 = initialState2();
          }
          hook.memoizedState = hook.baseState = initialState2;
          var queue = hook.queue = {
            pending: null,
            dispatch: null,
            lastRenderedReducer: basicStateReducer,
            lastRenderedState: initialState2
          };
          var dispatch = queue.dispatch = dispatchAction.bind(null, currentlyRenderingFiber$1, queue);
          return [hook.memoizedState, dispatch];
        }
        function updateState(initialState2) {
          return updateReducer(basicStateReducer);
        }
        function rerenderState(initialState2) {
          return rerenderReducer(basicStateReducer);
        }
        function pushEffect(tag, create, destroy, deps) {
          var effect = {
            tag,
            create,
            destroy,
            deps,
            next: null
          };
          var componentUpdateQueue = currentlyRenderingFiber$1.updateQueue;
          if (componentUpdateQueue === null) {
            componentUpdateQueue = createFunctionComponentUpdateQueue();
            currentlyRenderingFiber$1.updateQueue = componentUpdateQueue;
            componentUpdateQueue.lastEffect = effect.next = effect;
          } else {
            var lastEffect = componentUpdateQueue.lastEffect;
            if (lastEffect === null) {
              componentUpdateQueue.lastEffect = effect.next = effect;
            } else {
              var firstEffect = lastEffect.next;
              lastEffect.next = effect;
              effect.next = firstEffect;
              componentUpdateQueue.lastEffect = effect;
            }
          }
          return effect;
        }
        function mountRef(initialValue) {
          var hook = mountWorkInProgressHook();
          var ref = {
            current: initialValue
          };
          {
            Object.seal(ref);
          }
          hook.memoizedState = ref;
          return ref;
        }
        function updateRef(initialValue) {
          var hook = updateWorkInProgressHook();
          return hook.memoizedState;
        }
        function mountEffectImpl(fiberFlags, hookFlags, create, deps) {
          var hook = mountWorkInProgressHook();
          var nextDeps = deps === void 0 ? null : deps;
          currentlyRenderingFiber$1.flags |= fiberFlags;
          hook.memoizedState = pushEffect(HasEffect | hookFlags, create, void 0, nextDeps);
        }
        function updateEffectImpl(fiberFlags, hookFlags, create, deps) {
          var hook = updateWorkInProgressHook();
          var nextDeps = deps === void 0 ? null : deps;
          var destroy = void 0;
          if (currentHook !== null) {
            var prevEffect = currentHook.memoizedState;
            destroy = prevEffect.destroy;
            if (nextDeps !== null) {
              var prevDeps = prevEffect.deps;
              if (areHookInputsEqual(nextDeps, prevDeps)) {
                pushEffect(hookFlags, create, destroy, nextDeps);
                return;
              }
            }
          }
          currentlyRenderingFiber$1.flags |= fiberFlags;
          hook.memoizedState = pushEffect(HasEffect | hookFlags, create, destroy, nextDeps);
        }
        function mountEffect(create, deps) {
          {
            if (typeof jest !== "undefined") {
              warnIfNotCurrentlyActingEffectsInDEV(currentlyRenderingFiber$1);
            }
          }
          return mountEffectImpl(Update | Passive, Passive$1, create, deps);
        }
        function updateEffect(create, deps) {
          {
            if (typeof jest !== "undefined") {
              warnIfNotCurrentlyActingEffectsInDEV(currentlyRenderingFiber$1);
            }
          }
          return updateEffectImpl(Update | Passive, Passive$1, create, deps);
        }
        function mountLayoutEffect(create, deps) {
          return mountEffectImpl(Update, Layout, create, deps);
        }
        function updateLayoutEffect(create, deps) {
          return updateEffectImpl(Update, Layout, create, deps);
        }
        function imperativeHandleEffect(create, ref) {
          if (typeof ref === "function") {
            var refCallback = ref;
            var _inst = create();
            refCallback(_inst);
            return function() {
              refCallback(null);
            };
          } else if (ref !== null && ref !== void 0) {
            var refObject = ref;
            {
              if (!refObject.hasOwnProperty("current")) {
                error("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(refObject).join(", ") + "}");
              }
            }
            var _inst2 = create();
            refObject.current = _inst2;
            return function() {
              refObject.current = null;
            };
          }
        }
        function mountImperativeHandle(ref, create, deps) {
          {
            if (typeof create !== "function") {
              error("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", create !== null ? typeof create : "null");
            }
          }
          var effectDeps = deps !== null && deps !== void 0 ? deps.concat([ref]) : null;
          return mountEffectImpl(Update, Layout, imperativeHandleEffect.bind(null, create, ref), effectDeps);
        }
        function updateImperativeHandle(ref, create, deps) {
          {
            if (typeof create !== "function") {
              error("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", create !== null ? typeof create : "null");
            }
          }
          var effectDeps = deps !== null && deps !== void 0 ? deps.concat([ref]) : null;
          return updateEffectImpl(Update, Layout, imperativeHandleEffect.bind(null, create, ref), effectDeps);
        }
        function mountDebugValue(value, formatterFn) {
        }
        var updateDebugValue = mountDebugValue;
        function mountCallback(callback, deps) {
          var hook = mountWorkInProgressHook();
          var nextDeps = deps === void 0 ? null : deps;
          hook.memoizedState = [callback, nextDeps];
          return callback;
        }
        function updateCallback(callback, deps) {
          var hook = updateWorkInProgressHook();
          var nextDeps = deps === void 0 ? null : deps;
          var prevState = hook.memoizedState;
          if (prevState !== null) {
            if (nextDeps !== null) {
              var prevDeps = prevState[1];
              if (areHookInputsEqual(nextDeps, prevDeps)) {
                return prevState[0];
              }
            }
          }
          hook.memoizedState = [callback, nextDeps];
          return callback;
        }
        function mountMemo(nextCreate, deps) {
          var hook = mountWorkInProgressHook();
          var nextDeps = deps === void 0 ? null : deps;
          var nextValue = nextCreate();
          hook.memoizedState = [nextValue, nextDeps];
          return nextValue;
        }
        function updateMemo(nextCreate, deps) {
          var hook = updateWorkInProgressHook();
          var nextDeps = deps === void 0 ? null : deps;
          var prevState = hook.memoizedState;
          if (prevState !== null) {
            if (nextDeps !== null) {
              var prevDeps = prevState[1];
              if (areHookInputsEqual(nextDeps, prevDeps)) {
                return prevState[0];
              }
            }
          }
          var nextValue = nextCreate();
          hook.memoizedState = [nextValue, nextDeps];
          return nextValue;
        }
        function mountDeferredValue(value) {
          var _mountState = mountState(value), prevValue = _mountState[0], setValue = _mountState[1];
          mountEffect(function() {
            var prevTransition = ReactCurrentBatchConfig$1.transition;
            ReactCurrentBatchConfig$1.transition = 1;
            try {
              setValue(value);
            } finally {
              ReactCurrentBatchConfig$1.transition = prevTransition;
            }
          }, [value]);
          return prevValue;
        }
        function updateDeferredValue(value) {
          var _updateState = updateState(), prevValue = _updateState[0], setValue = _updateState[1];
          updateEffect(function() {
            var prevTransition = ReactCurrentBatchConfig$1.transition;
            ReactCurrentBatchConfig$1.transition = 1;
            try {
              setValue(value);
            } finally {
              ReactCurrentBatchConfig$1.transition = prevTransition;
            }
          }, [value]);
          return prevValue;
        }
        function rerenderDeferredValue(value) {
          var _rerenderState = rerenderState(), prevValue = _rerenderState[0], setValue = _rerenderState[1];
          updateEffect(function() {
            var prevTransition = ReactCurrentBatchConfig$1.transition;
            ReactCurrentBatchConfig$1.transition = 1;
            try {
              setValue(value);
            } finally {
              ReactCurrentBatchConfig$1.transition = prevTransition;
            }
          }, [value]);
          return prevValue;
        }
        function startTransition(setPending, callback) {
          var priorityLevel = getCurrentPriorityLevel();
          {
            runWithPriority$1(priorityLevel < UserBlockingPriority$2 ? UserBlockingPriority$2 : priorityLevel, function() {
              setPending(true);
            });
            runWithPriority$1(priorityLevel > NormalPriority$1 ? NormalPriority$1 : priorityLevel, function() {
              var prevTransition = ReactCurrentBatchConfig$1.transition;
              ReactCurrentBatchConfig$1.transition = 1;
              try {
                setPending(false);
                callback();
              } finally {
                ReactCurrentBatchConfig$1.transition = prevTransition;
              }
            });
          }
        }
        function mountTransition() {
          var _mountState2 = mountState(false), isPending = _mountState2[0], setPending = _mountState2[1];
          var start = startTransition.bind(null, setPending);
          mountRef(start);
          return [start, isPending];
        }
        function updateTransition() {
          var _updateState2 = updateState(), isPending = _updateState2[0];
          var startRef = updateRef();
          var start = startRef.current;
          return [start, isPending];
        }
        function rerenderTransition() {
          var _rerenderState2 = rerenderState(), isPending = _rerenderState2[0];
          var startRef = updateRef();
          var start = startRef.current;
          return [start, isPending];
        }
        var isUpdatingOpaqueValueInRenderPhase = false;
        function getIsUpdatingOpaqueValueInRenderPhaseInDEV() {
          {
            return isUpdatingOpaqueValueInRenderPhase;
          }
        }
        function warnOnOpaqueIdentifierAccessInDEV(fiber) {
          {
            var name = getComponentName(fiber.type) || "Unknown";
            if (getIsRendering() && !didWarnAboutUseOpaqueIdentifier[name]) {
              error("The object passed back from useOpaqueIdentifier is meant to be passed through to attributes only. Do not read the value directly.");
              didWarnAboutUseOpaqueIdentifier[name] = true;
            }
          }
        }
        function mountOpaqueIdentifier() {
          var makeId = makeClientIdInDEV.bind(null, warnOnOpaqueIdentifierAccessInDEV.bind(null, currentlyRenderingFiber$1));
          if (getIsHydrating()) {
            var didUpgrade = false;
            var fiber = currentlyRenderingFiber$1;
            var readValue = function() {
              if (!didUpgrade) {
                didUpgrade = true;
                {
                  isUpdatingOpaqueValueInRenderPhase = true;
                  setId(makeId());
                  isUpdatingOpaqueValueInRenderPhase = false;
                  warnOnOpaqueIdentifierAccessInDEV(fiber);
                }
              }
              {
                {
                  throw Error("The object passed back from useOpaqueIdentifier is meant to be passed through to attributes only. Do not read the value directly.");
                }
              }
            };
            var id = makeOpaqueHydratingObject(readValue);
            var setId = mountState(id)[1];
            if ((currentlyRenderingFiber$1.mode & BlockingMode) === NoMode) {
              currentlyRenderingFiber$1.flags |= Update | Passive;
              pushEffect(HasEffect | Passive$1, function() {
                setId(makeId());
              }, void 0, null);
            }
            return id;
          } else {
            var _id = makeId();
            mountState(_id);
            return _id;
          }
        }
        function updateOpaqueIdentifier() {
          var id = updateState()[0];
          return id;
        }
        function rerenderOpaqueIdentifier() {
          var id = rerenderState()[0];
          return id;
        }
        function dispatchAction(fiber, queue, action) {
          {
            if (typeof arguments[3] === "function") {
              error("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
            }
          }
          var eventTime = requestEventTime();
          var lane = requestUpdateLane(fiber);
          var update = {
            lane,
            action,
            eagerReducer: null,
            eagerState: null,
            next: null
          };
          var pending = queue.pending;
          if (pending === null) {
            update.next = update;
          } else {
            update.next = pending.next;
            pending.next = update;
          }
          queue.pending = update;
          var alternate = fiber.alternate;
          if (fiber === currentlyRenderingFiber$1 || alternate !== null && alternate === currentlyRenderingFiber$1) {
            didScheduleRenderPhaseUpdateDuringThisPass = didScheduleRenderPhaseUpdate = true;
          } else {
            if (fiber.lanes === NoLanes && (alternate === null || alternate.lanes === NoLanes)) {
              var lastRenderedReducer = queue.lastRenderedReducer;
              if (lastRenderedReducer !== null) {
                var prevDispatcher;
                {
                  prevDispatcher = ReactCurrentDispatcher$1.current;
                  ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnUpdateInDEV;
                }
                try {
                  var currentState = queue.lastRenderedState;
                  var eagerState = lastRenderedReducer(currentState, action);
                  update.eagerReducer = lastRenderedReducer;
                  update.eagerState = eagerState;
                  if (objectIs(eagerState, currentState)) {
                    return;
                  }
                } catch (error2) {
                } finally {
                  {
                    ReactCurrentDispatcher$1.current = prevDispatcher;
                  }
                }
              }
            }
            {
              if (typeof jest !== "undefined") {
                warnIfNotScopedWithMatchingAct(fiber);
                warnIfNotCurrentlyActingUpdatesInDev(fiber);
              }
            }
            scheduleUpdateOnFiber(fiber, lane, eventTime);
          }
        }
        var ContextOnlyDispatcher = {
          readContext,
          useCallback: throwInvalidHookError,
          useContext: throwInvalidHookError,
          useEffect: throwInvalidHookError,
          useImperativeHandle: throwInvalidHookError,
          useLayoutEffect: throwInvalidHookError,
          useMemo: throwInvalidHookError,
          useReducer: throwInvalidHookError,
          useRef: throwInvalidHookError,
          useState: throwInvalidHookError,
          useDebugValue: throwInvalidHookError,
          useDeferredValue: throwInvalidHookError,
          useTransition: throwInvalidHookError,
          useMutableSource: throwInvalidHookError,
          useOpaqueIdentifier: throwInvalidHookError,
          unstable_isNewReconciler: enableNewReconciler
        };
        var HooksDispatcherOnMountInDEV = null;
        var HooksDispatcherOnMountWithHookTypesInDEV = null;
        var HooksDispatcherOnUpdateInDEV = null;
        var HooksDispatcherOnRerenderInDEV = null;
        var InvalidNestedHooksDispatcherOnMountInDEV = null;
        var InvalidNestedHooksDispatcherOnUpdateInDEV = null;
        var InvalidNestedHooksDispatcherOnRerenderInDEV = null;
        {
          var warnInvalidContextAccess = function() {
            error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          };
          var warnInvalidHookAccess = function() {
            error("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
          };
          HooksDispatcherOnMountInDEV = {
            readContext: function(context, observedBits) {
              return readContext(context, observedBits);
            },
            useCallback: function(callback, deps) {
              currentHookNameInDev = "useCallback";
              mountHookTypesDev();
              checkDepsAreArrayDev(deps);
              return mountCallback(callback, deps);
            },
            useContext: function(context, observedBits) {
              currentHookNameInDev = "useContext";
              mountHookTypesDev();
              return readContext(context, observedBits);
            },
            useEffect: function(create, deps) {
              currentHookNameInDev = "useEffect";
              mountHookTypesDev();
              checkDepsAreArrayDev(deps);
              return mountEffect(create, deps);
            },
            useImperativeHandle: function(ref, create, deps) {
              currentHookNameInDev = "useImperativeHandle";
              mountHookTypesDev();
              checkDepsAreArrayDev(deps);
              return mountImperativeHandle(ref, create, deps);
            },
            useLayoutEffect: function(create, deps) {
              currentHookNameInDev = "useLayoutEffect";
              mountHookTypesDev();
              checkDepsAreArrayDev(deps);
              return mountLayoutEffect(create, deps);
            },
            useMemo: function(create, deps) {
              currentHookNameInDev = "useMemo";
              mountHookTypesDev();
              checkDepsAreArrayDev(deps);
              var prevDispatcher = ReactCurrentDispatcher$1.current;
              ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnMountInDEV;
              try {
                return mountMemo(create, deps);
              } finally {
                ReactCurrentDispatcher$1.current = prevDispatcher;
              }
            },
            useReducer: function(reducer2, initialArg, init) {
              currentHookNameInDev = "useReducer";
              mountHookTypesDev();
              var prevDispatcher = ReactCurrentDispatcher$1.current;
              ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnMountInDEV;
              try {
                return mountReducer(reducer2, initialArg, init);
              } finally {
                ReactCurrentDispatcher$1.current = prevDispatcher;
              }
            },
            useRef: function(initialValue) {
              currentHookNameInDev = "useRef";
              mountHookTypesDev();
              return mountRef(initialValue);
            },
            useState: function(initialState2) {
              currentHookNameInDev = "useState";
              mountHookTypesDev();
              var prevDispatcher = ReactCurrentDispatcher$1.current;
              ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnMountInDEV;
              try {
                return mountState(initialState2);
              } finally {
                ReactCurrentDispatcher$1.current = prevDispatcher;
              }
            },
            useDebugValue: function(value, formatterFn) {
              currentHookNameInDev = "useDebugValue";
              mountHookTypesDev();
              return mountDebugValue();
            },
            useDeferredValue: function(value) {
              currentHookNameInDev = "useDeferredValue";
              mountHookTypesDev();
              return mountDeferredValue(value);
            },
            useTransition: function() {
              currentHookNameInDev = "useTransition";
              mountHookTypesDev();
              return mountTransition();
            },
            useMutableSource: function(source, getSnapshot, subscribe) {
              currentHookNameInDev = "useMutableSource";
              mountHookTypesDev();
              return mountMutableSource(source, getSnapshot, subscribe);
            },
            useOpaqueIdentifier: function() {
              currentHookNameInDev = "useOpaqueIdentifier";
              mountHookTypesDev();
              return mountOpaqueIdentifier();
            },
            unstable_isNewReconciler: enableNewReconciler
          };
          HooksDispatcherOnMountWithHookTypesInDEV = {
            readContext: function(context, observedBits) {
              return readContext(context, observedBits);
            },
            useCallback: function(callback, deps) {
              currentHookNameInDev = "useCallback";
              updateHookTypesDev();
              return mountCallback(callback, deps);
            },
            useContext: function(context, observedBits) {
              currentHookNameInDev = "useContext";
              updateHookTypesDev();
              return readContext(context, observedBits);
            },
            useEffect: function(create, deps) {
              currentHookNameInDev = "useEffect";
              updateHookTypesDev();
              return mountEffect(create, deps);
            },
            useImperativeHandle: function(ref, create, deps) {
              currentHookNameInDev = "useImperativeHandle";
              updateHookTypesDev();
              return mountImperativeHandle(ref, create, deps);
            },
            useLayoutEffect: function(create, deps) {
              currentHookNameInDev = "useLayoutEffect";
              updateHookTypesDev();
              return mountLayoutEffect(create, deps);
            },
            useMemo: function(create, deps) {
              currentHookNameInDev = "useMemo";
              updateHookTypesDev();
              var prevDispatcher = ReactCurrentDispatcher$1.current;
              ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnMountInDEV;
              try {
                return mountMemo(create, deps);
              } finally {
                ReactCurrentDispatcher$1.current = prevDispatcher;
              }
            },
            useReducer: function(reducer2, initialArg, init) {
              currentHookNameInDev = "useReducer";
              updateHookTypesDev();
              var prevDispatcher = ReactCurrentDispatcher$1.current;
              ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnMountInDEV;
              try {
                return mountReducer(reducer2, initialArg, init);
              } finally {
                ReactCurrentDispatcher$1.current = prevDispatcher;
              }
            },
            useRef: function(initialValue) {
              currentHookNameInDev = "useRef";
              updateHookTypesDev();
              return mountRef(initialValue);
            },
            useState: function(initialState2) {
              currentHookNameInDev = "useState";
              updateHookTypesDev();
              var prevDispatcher = ReactCurrentDispatcher$1.current;
              ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnMountInDEV;
              try {
                return mountState(initialState2);
              } finally {
                ReactCurrentDispatcher$1.current = prevDispatcher;
              }
            },
            useDebugValue: function(value, formatterFn) {
              currentHookNameInDev = "useDebugValue";
              updateHookTypesDev();
              return mountDebugValue();
            },
            useDeferredValue: function(value) {
              currentHookNameInDev = "useDeferredValue";
              updateHookTypesDev();
              return mountDeferredValue(value);
            },
            useTransition: function() {
              currentHookNameInDev = "useTransition";
              updateHookTypesDev();
              return mountTransition();
            },
            useMutableSource: function(source, getSnapshot, subscribe) {
              currentHookNameInDev = "useMutableSource";
              updateHookTypesDev();
              return mountMutableSource(source, getSnapshot, subscribe);
            },
            useOpaqueIdentifier: function() {
              currentHookNameInDev = "useOpaqueIdentifier";
              updateHookTypesDev();
              return mountOpaqueIdentifier();
            },
            unstable_isNewReconciler: enableNewReconciler
          };
          HooksDispatcherOnUpdateInDEV = {
            readContext: function(context, observedBits) {
              return readContext(context, observedBits);
            },
            useCallback: function(callback, deps) {
              currentHookNameInDev = "useCallback";
              updateHookTypesDev();
              return updateCallback(callback, deps);
            },
            useContext: function(context, observedBits) {
              currentHookNameInDev = "useContext";
              updateHookTypesDev();
              return readContext(context, observedBits);
            },
            useEffect: function(create, deps) {
              currentHookNameInDev = "useEffect";
              updateHookTypesDev();
              return updateEffect(create, deps);
            },
            useImperativeHandle: function(ref, create, deps) {
              currentHookNameInDev = "useImperativeHandle";
              updateHookTypesDev();
              return updateImperativeHandle(ref, create, deps);
            },
            useLayoutEffect: function(create, deps) {
              currentHookNameInDev = "useLayoutEffect";
              updateHookTypesDev();
              return updateLayoutEffect(create, deps);
            },
            useMemo: function(create, deps) {
              currentHookNameInDev = "useMemo";
              updateHookTypesDev();
              var prevDispatcher = ReactCurrentDispatcher$1.current;
              ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnUpdateInDEV;
              try {
                return updateMemo(create, deps);
              } finally {
                ReactCurrentDispatcher$1.current = prevDispatcher;
              }
            },
            useReducer: function(reducer2, initialArg, init) {
              currentHookNameInDev = "useReducer";
              updateHookTypesDev();
              var prevDispatcher = ReactCurrentDispatcher$1.current;
              ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnUpdateInDEV;
              try {
                return updateReducer(reducer2, initialArg, init);
              } finally {
                ReactCurrentDispatcher$1.current = prevDispatcher;
              }
            },
            useRef: function(initialValue) {
              currentHookNameInDev = "useRef";
              updateHookTypesDev();
              return updateRef();
            },
            useState: function(initialState2) {
              currentHookNameInDev = "useState";
              updateHookTypesDev();
              var prevDispatcher = ReactCurrentDispatcher$1.current;
              ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnUpdateInDEV;
              try {
                return updateState(initialState2);
              } finally {
                ReactCurrentDispatcher$1.current = prevDispatcher;
              }
            },
            useDebugValue: function(value, formatterFn) {
              currentHookNameInDev = "useDebugValue";
              updateHookTypesDev();
              return updateDebugValue();
            },
            useDeferredValue: function(value) {
              currentHookNameInDev = "useDeferredValue";
              updateHookTypesDev();
              return updateDeferredValue(value);
            },
            useTransition: function() {
              currentHookNameInDev = "useTransition";
              updateHookTypesDev();
              return updateTransition();
            },
            useMutableSource: function(source, getSnapshot, subscribe) {
              currentHookNameInDev = "useMutableSource";
              updateHookTypesDev();
              return updateMutableSource(source, getSnapshot, subscribe);
            },
            useOpaqueIdentifier: function() {
              currentHookNameInDev = "useOpaqueIdentifier";
              updateHookTypesDev();
              return updateOpaqueIdentifier();
            },
            unstable_isNewReconciler: enableNewReconciler
          };
          HooksDispatcherOnRerenderInDEV = {
            readContext: function(context, observedBits) {
              return readContext(context, observedBits);
            },
            useCallback: function(callback, deps) {
              currentHookNameInDev = "useCallback";
              updateHookTypesDev();
              return updateCallback(callback, deps);
            },
            useContext: function(context, observedBits) {
              currentHookNameInDev = "useContext";
              updateHookTypesDev();
              return readContext(context, observedBits);
            },
            useEffect: function(create, deps) {
              currentHookNameInDev = "useEffect";
              updateHookTypesDev();
              return updateEffect(create, deps);
            },
            useImperativeHandle: function(ref, create, deps) {
              currentHookNameInDev = "useImperativeHandle";
              updateHookTypesDev();
              return updateImperativeHandle(ref, create, deps);
            },
            useLayoutEffect: function(create, deps) {
              currentHookNameInDev = "useLayoutEffect";
              updateHookTypesDev();
              return updateLayoutEffect(create, deps);
            },
            useMemo: function(create, deps) {
              currentHookNameInDev = "useMemo";
              updateHookTypesDev();
              var prevDispatcher = ReactCurrentDispatcher$1.current;
              ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnRerenderInDEV;
              try {
                return updateMemo(create, deps);
              } finally {
                ReactCurrentDispatcher$1.current = prevDispatcher;
              }
            },
            useReducer: function(reducer2, initialArg, init) {
              currentHookNameInDev = "useReducer";
              updateHookTypesDev();
              var prevDispatcher = ReactCurrentDispatcher$1.current;
              ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnRerenderInDEV;
              try {
                return rerenderReducer(reducer2, initialArg, init);
              } finally {
                ReactCurrentDispatcher$1.current = prevDispatcher;
              }
            },
            useRef: function(initialValue) {
              currentHookNameInDev = "useRef";
              updateHookTypesDev();
              return updateRef();
            },
            useState: function(initialState2) {
              currentHookNameInDev = "useState";
              updateHookTypesDev();
              var prevDispatcher = ReactCurrentDispatcher$1.current;
              ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnRerenderInDEV;
              try {
                return rerenderState(initialState2);
              } finally {
                ReactCurrentDispatcher$1.current = prevDispatcher;
              }
            },
            useDebugValue: function(value, formatterFn) {
              currentHookNameInDev = "useDebugValue";
              updateHookTypesDev();
              return updateDebugValue();
            },
            useDeferredValue: function(value) {
              currentHookNameInDev = "useDeferredValue";
              updateHookTypesDev();
              return rerenderDeferredValue(value);
            },
            useTransition: function() {
              currentHookNameInDev = "useTransition";
              updateHookTypesDev();
              return rerenderTransition();
            },
            useMutableSource: function(source, getSnapshot, subscribe) {
              currentHookNameInDev = "useMutableSource";
              updateHookTypesDev();
              return updateMutableSource(source, getSnapshot, subscribe);
            },
            useOpaqueIdentifier: function() {
              currentHookNameInDev = "useOpaqueIdentifier";
              updateHookTypesDev();
              return rerenderOpaqueIdentifier();
            },
            unstable_isNewReconciler: enableNewReconciler
          };
          InvalidNestedHooksDispatcherOnMountInDEV = {
            readContext: function(context, observedBits) {
              warnInvalidContextAccess();
              return readContext(context, observedBits);
            },
            useCallback: function(callback, deps) {
              currentHookNameInDev = "useCallback";
              warnInvalidHookAccess();
              mountHookTypesDev();
              return mountCallback(callback, deps);
            },
            useContext: function(context, observedBits) {
              currentHookNameInDev = "useContext";
              warnInvalidHookAccess();
              mountHookTypesDev();
              return readContext(context, observedBits);
            },
            useEffect: function(create, deps) {
              currentHookNameInDev = "useEffect";
              warnInvalidHookAccess();
              mountHookTypesDev();
              return mountEffect(create, deps);
            },
            useImperativeHandle: function(ref, create, deps) {
              currentHookNameInDev = "useImperativeHandle";
              warnInvalidHookAccess();
              mountHookTypesDev();
              return mountImperativeHandle(ref, create, deps);
            },
            useLayoutEffect: function(create, deps) {
              currentHookNameInDev = "useLayoutEffect";
              warnInvalidHookAccess();
              mountHookTypesDev();
              return mountLayoutEffect(create, deps);
            },
            useMemo: function(create, deps) {
              currentHookNameInDev = "useMemo";
              warnInvalidHookAccess();
              mountHookTypesDev();
              var prevDispatcher = ReactCurrentDispatcher$1.current;
              ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnMountInDEV;
              try {
                return mountMemo(create, deps);
              } finally {
                ReactCurrentDispatcher$1.current = prevDispatcher;
              }
            },
            useReducer: function(reducer2, initialArg, init) {
              currentHookNameInDev = "useReducer";
              warnInvalidHookAccess();
              mountHookTypesDev();
              var prevDispatcher = ReactCurrentDispatcher$1.current;
              ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnMountInDEV;
              try {
                return mountReducer(reducer2, initialArg, init);
              } finally {
                ReactCurrentDispatcher$1.current = prevDispatcher;
              }
            },
            useRef: function(initialValue) {
              currentHookNameInDev = "useRef";
              warnInvalidHookAccess();
              mountHookTypesDev();
              return mountRef(initialValue);
            },
            useState: function(initialState2) {
              currentHookNameInDev = "useState";
              warnInvalidHookAccess();
              mountHookTypesDev();
              var prevDispatcher = ReactCurrentDispatcher$1.current;
              ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnMountInDEV;
              try {
                return mountState(initialState2);
              } finally {
                ReactCurrentDispatcher$1.current = prevDispatcher;
              }
            },
            useDebugValue: function(value, formatterFn) {
              currentHookNameInDev = "useDebugValue";
              warnInvalidHookAccess();
              mountHookTypesDev();
              return mountDebugValue();
            },
            useDeferredValue: function(value) {
              currentHookNameInDev = "useDeferredValue";
              warnInvalidHookAccess();
              mountHookTypesDev();
              return mountDeferredValue(value);
            },
            useTransition: function() {
              currentHookNameInDev = "useTransition";
              warnInvalidHookAccess();
              mountHookTypesDev();
              return mountTransition();
            },
            useMutableSource: function(source, getSnapshot, subscribe) {
              currentHookNameInDev = "useMutableSource";
              warnInvalidHookAccess();
              mountHookTypesDev();
              return mountMutableSource(source, getSnapshot, subscribe);
            },
            useOpaqueIdentifier: function() {
              currentHookNameInDev = "useOpaqueIdentifier";
              warnInvalidHookAccess();
              mountHookTypesDev();
              return mountOpaqueIdentifier();
            },
            unstable_isNewReconciler: enableNewReconciler
          };
          InvalidNestedHooksDispatcherOnUpdateInDEV = {
            readContext: function(context, observedBits) {
              warnInvalidContextAccess();
              return readContext(context, observedBits);
            },
            useCallback: function(callback, deps) {
              currentHookNameInDev = "useCallback";
              warnInvalidHookAccess();
              updateHookTypesDev();
              return updateCallback(callback, deps);
            },
            useContext: function(context, observedBits) {
              currentHookNameInDev = "useContext";
              warnInvalidHookAccess();
              updateHookTypesDev();
              return readContext(context, observedBits);
            },
            useEffect: function(create, deps) {
              currentHookNameInDev = "useEffect";
              warnInvalidHookAccess();
              updateHookTypesDev();
              return updateEffect(create, deps);
            },
            useImperativeHandle: function(ref, create, deps) {
              currentHookNameInDev = "useImperativeHandle";
              warnInvalidHookAccess();
              updateHookTypesDev();
              return updateImperativeHandle(ref, create, deps);
            },
            useLayoutEffect: function(create, deps) {
              currentHookNameInDev = "useLayoutEffect";
              warnInvalidHookAccess();
              updateHookTypesDev();
              return updateLayoutEffect(create, deps);
            },
            useMemo: function(create, deps) {
              currentHookNameInDev = "useMemo";
              warnInvalidHookAccess();
              updateHookTypesDev();
              var prevDispatcher = ReactCurrentDispatcher$1.current;
              ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnUpdateInDEV;
              try {
                return updateMemo(create, deps);
              } finally {
                ReactCurrentDispatcher$1.current = prevDispatcher;
              }
            },
            useReducer: function(reducer2, initialArg, init) {
              currentHookNameInDev = "useReducer";
              warnInvalidHookAccess();
              updateHookTypesDev();
              var prevDispatcher = ReactCurrentDispatcher$1.current;
              ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnUpdateInDEV;
              try {
                return updateReducer(reducer2, initialArg, init);
              } finally {
                ReactCurrentDispatcher$1.current = prevDispatcher;
              }
            },
            useRef: function(initialValue) {
              currentHookNameInDev = "useRef";
              warnInvalidHookAccess();
              updateHookTypesDev();
              return updateRef();
            },
            useState: function(initialState2) {
              currentHookNameInDev = "useState";
              warnInvalidHookAccess();
              updateHookTypesDev();
              var prevDispatcher = ReactCurrentDispatcher$1.current;
              ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnUpdateInDEV;
              try {
                return updateState(initialState2);
              } finally {
                ReactCurrentDispatcher$1.current = prevDispatcher;
              }
            },
            useDebugValue: function(value, formatterFn) {
              currentHookNameInDev = "useDebugValue";
              warnInvalidHookAccess();
              updateHookTypesDev();
              return updateDebugValue();
            },
            useDeferredValue: function(value) {
              currentHookNameInDev = "useDeferredValue";
              warnInvalidHookAccess();
              updateHookTypesDev();
              return updateDeferredValue(value);
            },
            useTransition: function() {
              currentHookNameInDev = "useTransition";
              warnInvalidHookAccess();
              updateHookTypesDev();
              return updateTransition();
            },
            useMutableSource: function(source, getSnapshot, subscribe) {
              currentHookNameInDev = "useMutableSource";
              warnInvalidHookAccess();
              updateHookTypesDev();
              return updateMutableSource(source, getSnapshot, subscribe);
            },
            useOpaqueIdentifier: function() {
              currentHookNameInDev = "useOpaqueIdentifier";
              warnInvalidHookAccess();
              updateHookTypesDev();
              return updateOpaqueIdentifier();
            },
            unstable_isNewReconciler: enableNewReconciler
          };
          InvalidNestedHooksDispatcherOnRerenderInDEV = {
            readContext: function(context, observedBits) {
              warnInvalidContextAccess();
              return readContext(context, observedBits);
            },
            useCallback: function(callback, deps) {
              currentHookNameInDev = "useCallback";
              warnInvalidHookAccess();
              updateHookTypesDev();
              return updateCallback(callback, deps);
            },
            useContext: function(context, observedBits) {
              currentHookNameInDev = "useContext";
              warnInvalidHookAccess();
              updateHookTypesDev();
              return readContext(context, observedBits);
            },
            useEffect: function(create, deps) {
              currentHookNameInDev = "useEffect";
              warnInvalidHookAccess();
              updateHookTypesDev();
              return updateEffect(create, deps);
            },
            useImperativeHandle: function(ref, create, deps) {
              currentHookNameInDev = "useImperativeHandle";
              warnInvalidHookAccess();
              updateHookTypesDev();
              return updateImperativeHandle(ref, create, deps);
            },
            useLayoutEffect: function(create, deps) {
              currentHookNameInDev = "useLayoutEffect";
              warnInvalidHookAccess();
              updateHookTypesDev();
              return updateLayoutEffect(create, deps);
            },
            useMemo: function(create, deps) {
              currentHookNameInDev = "useMemo";
              warnInvalidHookAccess();
              updateHookTypesDev();
              var prevDispatcher = ReactCurrentDispatcher$1.current;
              ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnUpdateInDEV;
              try {
                return updateMemo(create, deps);
              } finally {
                ReactCurrentDispatcher$1.current = prevDispatcher;
              }
            },
            useReducer: function(reducer2, initialArg, init) {
              currentHookNameInDev = "useReducer";
              warnInvalidHookAccess();
              updateHookTypesDev();
              var prevDispatcher = ReactCurrentDispatcher$1.current;
              ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnUpdateInDEV;
              try {
                return rerenderReducer(reducer2, initialArg, init);
              } finally {
                ReactCurrentDispatcher$1.current = prevDispatcher;
              }
            },
            useRef: function(initialValue) {
              currentHookNameInDev = "useRef";
              warnInvalidHookAccess();
              updateHookTypesDev();
              return updateRef();
            },
            useState: function(initialState2) {
              currentHookNameInDev = "useState";
              warnInvalidHookAccess();
              updateHookTypesDev();
              var prevDispatcher = ReactCurrentDispatcher$1.current;
              ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnUpdateInDEV;
              try {
                return rerenderState(initialState2);
              } finally {
                ReactCurrentDispatcher$1.current = prevDispatcher;
              }
            },
            useDebugValue: function(value, formatterFn) {
              currentHookNameInDev = "useDebugValue";
              warnInvalidHookAccess();
              updateHookTypesDev();
              return updateDebugValue();
            },
            useDeferredValue: function(value) {
              currentHookNameInDev = "useDeferredValue";
              warnInvalidHookAccess();
              updateHookTypesDev();
              return rerenderDeferredValue(value);
            },
            useTransition: function() {
              currentHookNameInDev = "useTransition";
              warnInvalidHookAccess();
              updateHookTypesDev();
              return rerenderTransition();
            },
            useMutableSource: function(source, getSnapshot, subscribe) {
              currentHookNameInDev = "useMutableSource";
              warnInvalidHookAccess();
              updateHookTypesDev();
              return updateMutableSource(source, getSnapshot, subscribe);
            },
            useOpaqueIdentifier: function() {
              currentHookNameInDev = "useOpaqueIdentifier";
              warnInvalidHookAccess();
              updateHookTypesDev();
              return rerenderOpaqueIdentifier();
            },
            unstable_isNewReconciler: enableNewReconciler
          };
        }
        var now$1 = Scheduler.unstable_now;
        var commitTime = 0;
        var profilerStartTime = -1;
        function getCommitTime() {
          return commitTime;
        }
        function recordCommitTime() {
          commitTime = now$1();
        }
        function startProfilerTimer(fiber) {
          profilerStartTime = now$1();
          if (fiber.actualStartTime < 0) {
            fiber.actualStartTime = now$1();
          }
        }
        function stopProfilerTimerIfRunning(fiber) {
          profilerStartTime = -1;
        }
        function stopProfilerTimerIfRunningAndRecordDelta(fiber, overrideBaseTime) {
          if (profilerStartTime >= 0) {
            var elapsedTime = now$1() - profilerStartTime;
            fiber.actualDuration += elapsedTime;
            if (overrideBaseTime) {
              fiber.selfBaseDuration = elapsedTime;
            }
            profilerStartTime = -1;
          }
        }
        function transferActualDuration(fiber) {
          var child = fiber.child;
          while (child) {
            fiber.actualDuration += child.actualDuration;
            child = child.sibling;
          }
        }
        var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
        var didReceiveUpdate = false;
        var didWarnAboutBadClass;
        var didWarnAboutModulePatternComponent;
        var didWarnAboutContextTypeOnFunctionComponent;
        var didWarnAboutGetDerivedStateOnFunctionComponent;
        var didWarnAboutFunctionRefs;
        var didWarnAboutReassigningProps;
        var didWarnAboutRevealOrder;
        var didWarnAboutTailOptions;
        {
          didWarnAboutBadClass = {};
          didWarnAboutModulePatternComponent = {};
          didWarnAboutContextTypeOnFunctionComponent = {};
          didWarnAboutGetDerivedStateOnFunctionComponent = {};
          didWarnAboutFunctionRefs = {};
          didWarnAboutReassigningProps = false;
          didWarnAboutRevealOrder = {};
          didWarnAboutTailOptions = {};
        }
        function reconcileChildren(current2, workInProgress2, nextChildren, renderLanes2) {
          if (current2 === null) {
            workInProgress2.child = mountChildFibers(workInProgress2, null, nextChildren, renderLanes2);
          } else {
            workInProgress2.child = reconcileChildFibers(workInProgress2, current2.child, nextChildren, renderLanes2);
          }
        }
        function forceUnmountCurrentAndReconcile(current2, workInProgress2, nextChildren, renderLanes2) {
          workInProgress2.child = reconcileChildFibers(workInProgress2, current2.child, null, renderLanes2);
          workInProgress2.child = reconcileChildFibers(workInProgress2, null, nextChildren, renderLanes2);
        }
        function updateForwardRef(current2, workInProgress2, Component, nextProps, renderLanes2) {
          {
            if (workInProgress2.type !== workInProgress2.elementType) {
              var innerPropTypes = Component.propTypes;
              if (innerPropTypes) {
                checkPropTypes(innerPropTypes, nextProps, "prop", getComponentName(Component));
              }
            }
          }
          var render2 = Component.render;
          var ref = workInProgress2.ref;
          var nextChildren;
          prepareToReadContext(workInProgress2, renderLanes2);
          {
            ReactCurrentOwner$1.current = workInProgress2;
            setIsRendering(true);
            nextChildren = renderWithHooks(current2, workInProgress2, render2, nextProps, ref, renderLanes2);
            if (workInProgress2.mode & StrictMode) {
              disableLogs();
              try {
                nextChildren = renderWithHooks(current2, workInProgress2, render2, nextProps, ref, renderLanes2);
              } finally {
                reenableLogs();
              }
            }
            setIsRendering(false);
          }
          if (current2 !== null && !didReceiveUpdate) {
            bailoutHooks(current2, workInProgress2, renderLanes2);
            return bailoutOnAlreadyFinishedWork(current2, workInProgress2, renderLanes2);
          }
          workInProgress2.flags |= PerformedWork;
          reconcileChildren(current2, workInProgress2, nextChildren, renderLanes2);
          return workInProgress2.child;
        }
        function updateMemoComponent(current2, workInProgress2, Component, nextProps, updateLanes, renderLanes2) {
          if (current2 === null) {
            var type = Component.type;
            if (isSimpleFunctionComponent(type) && Component.compare === null && Component.defaultProps === void 0) {
              var resolvedType = type;
              {
                resolvedType = resolveFunctionForHotReloading(type);
              }
              workInProgress2.tag = SimpleMemoComponent;
              workInProgress2.type = resolvedType;
              {
                validateFunctionComponentInDev(workInProgress2, type);
              }
              return updateSimpleMemoComponent(current2, workInProgress2, resolvedType, nextProps, updateLanes, renderLanes2);
            }
            {
              var innerPropTypes = type.propTypes;
              if (innerPropTypes) {
                checkPropTypes(innerPropTypes, nextProps, "prop", getComponentName(type));
              }
            }
            var child = createFiberFromTypeAndProps(Component.type, null, nextProps, workInProgress2, workInProgress2.mode, renderLanes2);
            child.ref = workInProgress2.ref;
            child.return = workInProgress2;
            workInProgress2.child = child;
            return child;
          }
          {
            var _type = Component.type;
            var _innerPropTypes = _type.propTypes;
            if (_innerPropTypes) {
              checkPropTypes(_innerPropTypes, nextProps, "prop", getComponentName(_type));
            }
          }
          var currentChild = current2.child;
          if (!includesSomeLane(updateLanes, renderLanes2)) {
            var prevProps = currentChild.memoizedProps;
            var compare = Component.compare;
            compare = compare !== null ? compare : shallowEqual;
            if (compare(prevProps, nextProps) && current2.ref === workInProgress2.ref) {
              return bailoutOnAlreadyFinishedWork(current2, workInProgress2, renderLanes2);
            }
          }
          workInProgress2.flags |= PerformedWork;
          var newChild = createWorkInProgress(currentChild, nextProps);
          newChild.ref = workInProgress2.ref;
          newChild.return = workInProgress2;
          workInProgress2.child = newChild;
          return newChild;
        }
        function updateSimpleMemoComponent(current2, workInProgress2, Component, nextProps, updateLanes, renderLanes2) {
          {
            if (workInProgress2.type !== workInProgress2.elementType) {
              var outerMemoType = workInProgress2.elementType;
              if (outerMemoType.$$typeof === REACT_LAZY_TYPE) {
                var lazyComponent = outerMemoType;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  outerMemoType = init(payload);
                } catch (x3) {
                  outerMemoType = null;
                }
                var outerPropTypes = outerMemoType && outerMemoType.propTypes;
                if (outerPropTypes) {
                  checkPropTypes(outerPropTypes, nextProps, "prop", getComponentName(outerMemoType));
                }
              }
            }
          }
          if (current2 !== null) {
            var prevProps = current2.memoizedProps;
            if (shallowEqual(prevProps, nextProps) && current2.ref === workInProgress2.ref && workInProgress2.type === current2.type) {
              didReceiveUpdate = false;
              if (!includesSomeLane(renderLanes2, updateLanes)) {
                workInProgress2.lanes = current2.lanes;
                return bailoutOnAlreadyFinishedWork(current2, workInProgress2, renderLanes2);
              } else if ((current2.flags & ForceUpdateForLegacySuspense) !== NoFlags) {
                didReceiveUpdate = true;
              }
            }
          }
          return updateFunctionComponent(current2, workInProgress2, Component, nextProps, renderLanes2);
        }
        function updateOffscreenComponent(current2, workInProgress2, renderLanes2) {
          var nextProps = workInProgress2.pendingProps;
          var nextChildren = nextProps.children;
          var prevState = current2 !== null ? current2.memoizedState : null;
          if (nextProps.mode === "hidden" || nextProps.mode === "unstable-defer-without-hiding") {
            if ((workInProgress2.mode & ConcurrentMode) === NoMode) {
              var nextState = {
                baseLanes: NoLanes
              };
              workInProgress2.memoizedState = nextState;
              pushRenderLanes(workInProgress2, renderLanes2);
            } else if (!includesSomeLane(renderLanes2, OffscreenLane)) {
              var nextBaseLanes;
              if (prevState !== null) {
                var prevBaseLanes = prevState.baseLanes;
                nextBaseLanes = mergeLanes(prevBaseLanes, renderLanes2);
              } else {
                nextBaseLanes = renderLanes2;
              }
              {
                markSpawnedWork(OffscreenLane);
              }
              workInProgress2.lanes = workInProgress2.childLanes = laneToLanes(OffscreenLane);
              var _nextState = {
                baseLanes: nextBaseLanes
              };
              workInProgress2.memoizedState = _nextState;
              pushRenderLanes(workInProgress2, nextBaseLanes);
              return null;
            } else {
              var _nextState2 = {
                baseLanes: NoLanes
              };
              workInProgress2.memoizedState = _nextState2;
              var subtreeRenderLanes2 = prevState !== null ? prevState.baseLanes : renderLanes2;
              pushRenderLanes(workInProgress2, subtreeRenderLanes2);
            }
          } else {
            var _subtreeRenderLanes;
            if (prevState !== null) {
              _subtreeRenderLanes = mergeLanes(prevState.baseLanes, renderLanes2);
              workInProgress2.memoizedState = null;
            } else {
              _subtreeRenderLanes = renderLanes2;
            }
            pushRenderLanes(workInProgress2, _subtreeRenderLanes);
          }
          reconcileChildren(current2, workInProgress2, nextChildren, renderLanes2);
          return workInProgress2.child;
        }
        var updateLegacyHiddenComponent = updateOffscreenComponent;
        function updateFragment(current2, workInProgress2, renderLanes2) {
          var nextChildren = workInProgress2.pendingProps;
          reconcileChildren(current2, workInProgress2, nextChildren, renderLanes2);
          return workInProgress2.child;
        }
        function updateMode(current2, workInProgress2, renderLanes2) {
          var nextChildren = workInProgress2.pendingProps.children;
          reconcileChildren(current2, workInProgress2, nextChildren, renderLanes2);
          return workInProgress2.child;
        }
        function updateProfiler(current2, workInProgress2, renderLanes2) {
          {
            workInProgress2.flags |= Update;
            var stateNode = workInProgress2.stateNode;
            stateNode.effectDuration = 0;
            stateNode.passiveEffectDuration = 0;
          }
          var nextProps = workInProgress2.pendingProps;
          var nextChildren = nextProps.children;
          reconcileChildren(current2, workInProgress2, nextChildren, renderLanes2);
          return workInProgress2.child;
        }
        function markRef(current2, workInProgress2) {
          var ref = workInProgress2.ref;
          if (current2 === null && ref !== null || current2 !== null && current2.ref !== ref) {
            workInProgress2.flags |= Ref;
          }
        }
        function updateFunctionComponent(current2, workInProgress2, Component, nextProps, renderLanes2) {
          {
            if (workInProgress2.type !== workInProgress2.elementType) {
              var innerPropTypes = Component.propTypes;
              if (innerPropTypes) {
                checkPropTypes(innerPropTypes, nextProps, "prop", getComponentName(Component));
              }
            }
          }
          var context;
          {
            var unmaskedContext = getUnmaskedContext(workInProgress2, Component, true);
            context = getMaskedContext(workInProgress2, unmaskedContext);
          }
          var nextChildren;
          prepareToReadContext(workInProgress2, renderLanes2);
          {
            ReactCurrentOwner$1.current = workInProgress2;
            setIsRendering(true);
            nextChildren = renderWithHooks(current2, workInProgress2, Component, nextProps, context, renderLanes2);
            if (workInProgress2.mode & StrictMode) {
              disableLogs();
              try {
                nextChildren = renderWithHooks(current2, workInProgress2, Component, nextProps, context, renderLanes2);
              } finally {
                reenableLogs();
              }
            }
            setIsRendering(false);
          }
          if (current2 !== null && !didReceiveUpdate) {
            bailoutHooks(current2, workInProgress2, renderLanes2);
            return bailoutOnAlreadyFinishedWork(current2, workInProgress2, renderLanes2);
          }
          workInProgress2.flags |= PerformedWork;
          reconcileChildren(current2, workInProgress2, nextChildren, renderLanes2);
          return workInProgress2.child;
        }
        function updateClassComponent(current2, workInProgress2, Component, nextProps, renderLanes2) {
          {
            if (workInProgress2.type !== workInProgress2.elementType) {
              var innerPropTypes = Component.propTypes;
              if (innerPropTypes) {
                checkPropTypes(innerPropTypes, nextProps, "prop", getComponentName(Component));
              }
            }
          }
          var hasContext;
          if (isContextProvider(Component)) {
            hasContext = true;
            pushContextProvider(workInProgress2);
          } else {
            hasContext = false;
          }
          prepareToReadContext(workInProgress2, renderLanes2);
          var instance = workInProgress2.stateNode;
          var shouldUpdate;
          if (instance === null) {
            if (current2 !== null) {
              current2.alternate = null;
              workInProgress2.alternate = null;
              workInProgress2.flags |= Placement;
            }
            constructClassInstance(workInProgress2, Component, nextProps);
            mountClassInstance(workInProgress2, Component, nextProps, renderLanes2);
            shouldUpdate = true;
          } else if (current2 === null) {
            shouldUpdate = resumeMountClassInstance(workInProgress2, Component, nextProps, renderLanes2);
          } else {
            shouldUpdate = updateClassInstance(current2, workInProgress2, Component, nextProps, renderLanes2);
          }
          var nextUnitOfWork = finishClassComponent(current2, workInProgress2, Component, shouldUpdate, hasContext, renderLanes2);
          {
            var inst = workInProgress2.stateNode;
            if (shouldUpdate && inst.props !== nextProps) {
              if (!didWarnAboutReassigningProps) {
                error("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", getComponentName(workInProgress2.type) || "a component");
              }
              didWarnAboutReassigningProps = true;
            }
          }
          return nextUnitOfWork;
        }
        function finishClassComponent(current2, workInProgress2, Component, shouldUpdate, hasContext, renderLanes2) {
          markRef(current2, workInProgress2);
          var didCaptureError = (workInProgress2.flags & DidCapture) !== NoFlags;
          if (!shouldUpdate && !didCaptureError) {
            if (hasContext) {
              invalidateContextProvider(workInProgress2, Component, false);
            }
            return bailoutOnAlreadyFinishedWork(current2, workInProgress2, renderLanes2);
          }
          var instance = workInProgress2.stateNode;
          ReactCurrentOwner$1.current = workInProgress2;
          var nextChildren;
          if (didCaptureError && typeof Component.getDerivedStateFromError !== "function") {
            nextChildren = null;
            {
              stopProfilerTimerIfRunning();
            }
          } else {
            {
              setIsRendering(true);
              nextChildren = instance.render();
              if (workInProgress2.mode & StrictMode) {
                disableLogs();
                try {
                  instance.render();
                } finally {
                  reenableLogs();
                }
              }
              setIsRendering(false);
            }
          }
          workInProgress2.flags |= PerformedWork;
          if (current2 !== null && didCaptureError) {
            forceUnmountCurrentAndReconcile(current2, workInProgress2, nextChildren, renderLanes2);
          } else {
            reconcileChildren(current2, workInProgress2, nextChildren, renderLanes2);
          }
          workInProgress2.memoizedState = instance.state;
          if (hasContext) {
            invalidateContextProvider(workInProgress2, Component, true);
          }
          return workInProgress2.child;
        }
        function pushHostRootContext(workInProgress2) {
          var root2 = workInProgress2.stateNode;
          if (root2.pendingContext) {
            pushTopLevelContextObject(workInProgress2, root2.pendingContext, root2.pendingContext !== root2.context);
          } else if (root2.context) {
            pushTopLevelContextObject(workInProgress2, root2.context, false);
          }
          pushHostContainer(workInProgress2, root2.containerInfo);
        }
        function updateHostRoot(current2, workInProgress2, renderLanes2) {
          pushHostRootContext(workInProgress2);
          var updateQueue = workInProgress2.updateQueue;
          if (!(current2 !== null && updateQueue !== null)) {
            {
              throw Error("If the root does not have an updateQueue, we should have already bailed out. This error is likely caused by a bug in React. Please file an issue.");
            }
          }
          var nextProps = workInProgress2.pendingProps;
          var prevState = workInProgress2.memoizedState;
          var prevChildren = prevState !== null ? prevState.element : null;
          cloneUpdateQueue(current2, workInProgress2);
          processUpdateQueue(workInProgress2, nextProps, null, renderLanes2);
          var nextState = workInProgress2.memoizedState;
          var nextChildren = nextState.element;
          if (nextChildren === prevChildren) {
            resetHydrationState();
            return bailoutOnAlreadyFinishedWork(current2, workInProgress2, renderLanes2);
          }
          var root2 = workInProgress2.stateNode;
          if (root2.hydrate && enterHydrationState(workInProgress2)) {
            {
              var mutableSourceEagerHydrationData = root2.mutableSourceEagerHydrationData;
              if (mutableSourceEagerHydrationData != null) {
                for (var i4 = 0; i4 < mutableSourceEagerHydrationData.length; i4 += 2) {
                  var mutableSource = mutableSourceEagerHydrationData[i4];
                  var version = mutableSourceEagerHydrationData[i4 + 1];
                  setWorkInProgressVersion(mutableSource, version);
                }
              }
            }
            var child = mountChildFibers(workInProgress2, null, nextChildren, renderLanes2);
            workInProgress2.child = child;
            var node = child;
            while (node) {
              node.flags = node.flags & ~Placement | Hydrating;
              node = node.sibling;
            }
          } else {
            reconcileChildren(current2, workInProgress2, nextChildren, renderLanes2);
            resetHydrationState();
          }
          return workInProgress2.child;
        }
        function updateHostComponent(current2, workInProgress2, renderLanes2) {
          pushHostContext(workInProgress2);
          if (current2 === null) {
            tryToClaimNextHydratableInstance(workInProgress2);
          }
          var type = workInProgress2.type;
          var nextProps = workInProgress2.pendingProps;
          var prevProps = current2 !== null ? current2.memoizedProps : null;
          var nextChildren = nextProps.children;
          var isDirectTextChild = shouldSetTextContent(type, nextProps);
          if (isDirectTextChild) {
            nextChildren = null;
          } else if (prevProps !== null && shouldSetTextContent(type, prevProps)) {
            workInProgress2.flags |= ContentReset;
          }
          markRef(current2, workInProgress2);
          reconcileChildren(current2, workInProgress2, nextChildren, renderLanes2);
          return workInProgress2.child;
        }
        function updateHostText(current2, workInProgress2) {
          if (current2 === null) {
            tryToClaimNextHydratableInstance(workInProgress2);
          }
          return null;
        }
        function mountLazyComponent(_current, workInProgress2, elementType, updateLanes, renderLanes2) {
          if (_current !== null) {
            _current.alternate = null;
            workInProgress2.alternate = null;
            workInProgress2.flags |= Placement;
          }
          var props = workInProgress2.pendingProps;
          var lazyComponent = elementType;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;
          var Component = init(payload);
          workInProgress2.type = Component;
          var resolvedTag = workInProgress2.tag = resolveLazyComponentTag(Component);
          var resolvedProps = resolveDefaultProps(Component, props);
          var child;
          switch (resolvedTag) {
            case FunctionComponent2: {
              {
                validateFunctionComponentInDev(workInProgress2, Component);
                workInProgress2.type = Component = resolveFunctionForHotReloading(Component);
              }
              child = updateFunctionComponent(null, workInProgress2, Component, resolvedProps, renderLanes2);
              return child;
            }
            case ClassComponent: {
              {
                workInProgress2.type = Component = resolveClassForHotReloading(Component);
              }
              child = updateClassComponent(null, workInProgress2, Component, resolvedProps, renderLanes2);
              return child;
            }
            case ForwardRef: {
              {
                workInProgress2.type = Component = resolveForwardRefForHotReloading(Component);
              }
              child = updateForwardRef(null, workInProgress2, Component, resolvedProps, renderLanes2);
              return child;
            }
            case MemoComponent: {
              {
                if (workInProgress2.type !== workInProgress2.elementType) {
                  var outerPropTypes = Component.propTypes;
                  if (outerPropTypes) {
                    checkPropTypes(outerPropTypes, resolvedProps, "prop", getComponentName(Component));
                  }
                }
              }
              child = updateMemoComponent(null, workInProgress2, Component, resolveDefaultProps(Component.type, resolvedProps), updateLanes, renderLanes2);
              return child;
            }
          }
          var hint = "";
          {
            if (Component !== null && typeof Component === "object" && Component.$$typeof === REACT_LAZY_TYPE) {
              hint = " Did you wrap a component in React.lazy() more than once?";
            }
          }
          {
            {
              throw Error("Element type is invalid. Received a promise that resolves to: " + Component + ". Lazy element type must resolve to a class or function." + hint);
            }
          }
        }
        function mountIncompleteClassComponent(_current, workInProgress2, Component, nextProps, renderLanes2) {
          if (_current !== null) {
            _current.alternate = null;
            workInProgress2.alternate = null;
            workInProgress2.flags |= Placement;
          }
          workInProgress2.tag = ClassComponent;
          var hasContext;
          if (isContextProvider(Component)) {
            hasContext = true;
            pushContextProvider(workInProgress2);
          } else {
            hasContext = false;
          }
          prepareToReadContext(workInProgress2, renderLanes2);
          constructClassInstance(workInProgress2, Component, nextProps);
          mountClassInstance(workInProgress2, Component, nextProps, renderLanes2);
          return finishClassComponent(null, workInProgress2, Component, true, hasContext, renderLanes2);
        }
        function mountIndeterminateComponent(_current, workInProgress2, Component, renderLanes2) {
          if (_current !== null) {
            _current.alternate = null;
            workInProgress2.alternate = null;
            workInProgress2.flags |= Placement;
          }
          var props = workInProgress2.pendingProps;
          var context;
          {
            var unmaskedContext = getUnmaskedContext(workInProgress2, Component, false);
            context = getMaskedContext(workInProgress2, unmaskedContext);
          }
          prepareToReadContext(workInProgress2, renderLanes2);
          var value;
          {
            if (Component.prototype && typeof Component.prototype.render === "function") {
              var componentName = getComponentName(Component) || "Unknown";
              if (!didWarnAboutBadClass[componentName]) {
                error("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", componentName, componentName);
                didWarnAboutBadClass[componentName] = true;
              }
            }
            if (workInProgress2.mode & StrictMode) {
              ReactStrictModeWarnings.recordLegacyContextWarning(workInProgress2, null);
            }
            setIsRendering(true);
            ReactCurrentOwner$1.current = workInProgress2;
            value = renderWithHooks(null, workInProgress2, Component, props, context, renderLanes2);
            setIsRendering(false);
          }
          workInProgress2.flags |= PerformedWork;
          {
            if (typeof value === "object" && value !== null && typeof value.render === "function" && value.$$typeof === void 0) {
              var _componentName = getComponentName(Component) || "Unknown";
              if (!didWarnAboutModulePatternComponent[_componentName]) {
                error("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", _componentName, _componentName, _componentName);
                didWarnAboutModulePatternComponent[_componentName] = true;
              }
            }
          }
          if (typeof value === "object" && value !== null && typeof value.render === "function" && value.$$typeof === void 0) {
            {
              var _componentName2 = getComponentName(Component) || "Unknown";
              if (!didWarnAboutModulePatternComponent[_componentName2]) {
                error("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", _componentName2, _componentName2, _componentName2);
                didWarnAboutModulePatternComponent[_componentName2] = true;
              }
            }
            workInProgress2.tag = ClassComponent;
            workInProgress2.memoizedState = null;
            workInProgress2.updateQueue = null;
            var hasContext = false;
            if (isContextProvider(Component)) {
              hasContext = true;
              pushContextProvider(workInProgress2);
            } else {
              hasContext = false;
            }
            workInProgress2.memoizedState = value.state !== null && value.state !== void 0 ? value.state : null;
            initializeUpdateQueue(workInProgress2);
            var getDerivedStateFromProps = Component.getDerivedStateFromProps;
            if (typeof getDerivedStateFromProps === "function") {
              applyDerivedStateFromProps(workInProgress2, Component, getDerivedStateFromProps, props);
            }
            adoptClassInstance(workInProgress2, value);
            mountClassInstance(workInProgress2, Component, props, renderLanes2);
            return finishClassComponent(null, workInProgress2, Component, true, hasContext, renderLanes2);
          } else {
            workInProgress2.tag = FunctionComponent2;
            {
              if (workInProgress2.mode & StrictMode) {
                disableLogs();
                try {
                  value = renderWithHooks(null, workInProgress2, Component, props, context, renderLanes2);
                } finally {
                  reenableLogs();
                }
              }
            }
            reconcileChildren(null, workInProgress2, value, renderLanes2);
            {
              validateFunctionComponentInDev(workInProgress2, Component);
            }
            return workInProgress2.child;
          }
        }
        function validateFunctionComponentInDev(workInProgress2, Component) {
          {
            if (Component) {
              if (Component.childContextTypes) {
                error("%s(...): childContextTypes cannot be defined on a function component.", Component.displayName || Component.name || "Component");
              }
            }
            if (workInProgress2.ref !== null) {
              var info = "";
              var ownerName = getCurrentFiberOwnerNameInDevOrNull();
              if (ownerName) {
                info += "\n\nCheck the render method of `" + ownerName + "`.";
              }
              var warningKey = ownerName || workInProgress2._debugID || "";
              var debugSource = workInProgress2._debugSource;
              if (debugSource) {
                warningKey = debugSource.fileName + ":" + debugSource.lineNumber;
              }
              if (!didWarnAboutFunctionRefs[warningKey]) {
                didWarnAboutFunctionRefs[warningKey] = true;
                error("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", info);
              }
            }
            if (typeof Component.getDerivedStateFromProps === "function") {
              var _componentName3 = getComponentName(Component) || "Unknown";
              if (!didWarnAboutGetDerivedStateOnFunctionComponent[_componentName3]) {
                error("%s: Function components do not support getDerivedStateFromProps.", _componentName3);
                didWarnAboutGetDerivedStateOnFunctionComponent[_componentName3] = true;
              }
            }
            if (typeof Component.contextType === "object" && Component.contextType !== null) {
              var _componentName4 = getComponentName(Component) || "Unknown";
              if (!didWarnAboutContextTypeOnFunctionComponent[_componentName4]) {
                error("%s: Function components do not support contextType.", _componentName4);
                didWarnAboutContextTypeOnFunctionComponent[_componentName4] = true;
              }
            }
          }
        }
        var SUSPENDED_MARKER = {
          dehydrated: null,
          retryLane: NoLane
        };
        function mountSuspenseOffscreenState(renderLanes2) {
          return {
            baseLanes: renderLanes2
          };
        }
        function updateSuspenseOffscreenState(prevOffscreenState, renderLanes2) {
          return {
            baseLanes: mergeLanes(prevOffscreenState.baseLanes, renderLanes2)
          };
        }
        function shouldRemainOnFallback(suspenseContext, current2, workInProgress2, renderLanes2) {
          if (current2 !== null) {
            var suspenseState = current2.memoizedState;
            if (suspenseState === null) {
              return false;
            }
          }
          return hasSuspenseContext(suspenseContext, ForceSuspenseFallback);
        }
        function getRemainingWorkInPrimaryTree(current2, renderLanes2) {
          return removeLanes(current2.childLanes, renderLanes2);
        }
        function updateSuspenseComponent(current2, workInProgress2, renderLanes2) {
          var nextProps = workInProgress2.pendingProps;
          {
            if (shouldSuspend(workInProgress2)) {
              workInProgress2.flags |= DidCapture;
            }
          }
          var suspenseContext = suspenseStackCursor.current;
          var showFallback = false;
          var didSuspend = (workInProgress2.flags & DidCapture) !== NoFlags;
          if (didSuspend || shouldRemainOnFallback(suspenseContext, current2)) {
            showFallback = true;
            workInProgress2.flags &= ~DidCapture;
          } else {
            if (current2 === null || current2.memoizedState !== null) {
              if (nextProps.fallback !== void 0 && nextProps.unstable_avoidThisFallback !== true) {
                suspenseContext = addSubtreeSuspenseContext(suspenseContext, InvisibleParentSuspenseContext);
              }
            }
          }
          suspenseContext = setDefaultShallowSuspenseContext(suspenseContext);
          pushSuspenseContext(workInProgress2, suspenseContext);
          if (current2 === null) {
            if (nextProps.fallback !== void 0) {
              tryToClaimNextHydratableInstance(workInProgress2);
            }
            var nextPrimaryChildren = nextProps.children;
            var nextFallbackChildren = nextProps.fallback;
            if (showFallback) {
              var fallbackFragment = mountSuspenseFallbackChildren(workInProgress2, nextPrimaryChildren, nextFallbackChildren, renderLanes2);
              var primaryChildFragment = workInProgress2.child;
              primaryChildFragment.memoizedState = mountSuspenseOffscreenState(renderLanes2);
              workInProgress2.memoizedState = SUSPENDED_MARKER;
              return fallbackFragment;
            } else if (typeof nextProps.unstable_expectedLoadTime === "number") {
              var _fallbackFragment = mountSuspenseFallbackChildren(workInProgress2, nextPrimaryChildren, nextFallbackChildren, renderLanes2);
              var _primaryChildFragment = workInProgress2.child;
              _primaryChildFragment.memoizedState = mountSuspenseOffscreenState(renderLanes2);
              workInProgress2.memoizedState = SUSPENDED_MARKER;
              workInProgress2.lanes = SomeRetryLane;
              {
                markSpawnedWork(SomeRetryLane);
              }
              return _fallbackFragment;
            } else {
              return mountSuspensePrimaryChildren(workInProgress2, nextPrimaryChildren, renderLanes2);
            }
          } else {
            var prevState = current2.memoizedState;
            if (prevState !== null) {
              if (showFallback) {
                var _nextFallbackChildren2 = nextProps.fallback;
                var _nextPrimaryChildren2 = nextProps.children;
                var _fallbackChildFragment = updateSuspenseFallbackChildren(current2, workInProgress2, _nextPrimaryChildren2, _nextFallbackChildren2, renderLanes2);
                var _primaryChildFragment3 = workInProgress2.child;
                var prevOffscreenState = current2.child.memoizedState;
                _primaryChildFragment3.memoizedState = prevOffscreenState === null ? mountSuspenseOffscreenState(renderLanes2) : updateSuspenseOffscreenState(prevOffscreenState, renderLanes2);
                _primaryChildFragment3.childLanes = getRemainingWorkInPrimaryTree(current2, renderLanes2);
                workInProgress2.memoizedState = SUSPENDED_MARKER;
                return _fallbackChildFragment;
              } else {
                var _nextPrimaryChildren3 = nextProps.children;
                var _primaryChildFragment4 = updateSuspensePrimaryChildren(current2, workInProgress2, _nextPrimaryChildren3, renderLanes2);
                workInProgress2.memoizedState = null;
                return _primaryChildFragment4;
              }
            } else {
              if (showFallback) {
                var _nextFallbackChildren3 = nextProps.fallback;
                var _nextPrimaryChildren4 = nextProps.children;
                var _fallbackChildFragment2 = updateSuspenseFallbackChildren(current2, workInProgress2, _nextPrimaryChildren4, _nextFallbackChildren3, renderLanes2);
                var _primaryChildFragment5 = workInProgress2.child;
                var _prevOffscreenState = current2.child.memoizedState;
                _primaryChildFragment5.memoizedState = _prevOffscreenState === null ? mountSuspenseOffscreenState(renderLanes2) : updateSuspenseOffscreenState(_prevOffscreenState, renderLanes2);
                _primaryChildFragment5.childLanes = getRemainingWorkInPrimaryTree(current2, renderLanes2);
                workInProgress2.memoizedState = SUSPENDED_MARKER;
                return _fallbackChildFragment2;
              } else {
                var _nextPrimaryChildren5 = nextProps.children;
                var _primaryChildFragment6 = updateSuspensePrimaryChildren(current2, workInProgress2, _nextPrimaryChildren5, renderLanes2);
                workInProgress2.memoizedState = null;
                return _primaryChildFragment6;
              }
            }
          }
        }
        function mountSuspensePrimaryChildren(workInProgress2, primaryChildren, renderLanes2) {
          var mode = workInProgress2.mode;
          var primaryChildProps = {
            mode: "visible",
            children: primaryChildren
          };
          var primaryChildFragment = createFiberFromOffscreen(primaryChildProps, mode, renderLanes2, null);
          primaryChildFragment.return = workInProgress2;
          workInProgress2.child = primaryChildFragment;
          return primaryChildFragment;
        }
        function mountSuspenseFallbackChildren(workInProgress2, primaryChildren, fallbackChildren, renderLanes2) {
          var mode = workInProgress2.mode;
          var progressedPrimaryFragment = workInProgress2.child;
          var primaryChildProps = {
            mode: "hidden",
            children: primaryChildren
          };
          var primaryChildFragment;
          var fallbackChildFragment;
          if ((mode & BlockingMode) === NoMode && progressedPrimaryFragment !== null) {
            primaryChildFragment = progressedPrimaryFragment;
            primaryChildFragment.childLanes = NoLanes;
            primaryChildFragment.pendingProps = primaryChildProps;
            if (workInProgress2.mode & ProfileMode) {
              primaryChildFragment.actualDuration = 0;
              primaryChildFragment.actualStartTime = -1;
              primaryChildFragment.selfBaseDuration = 0;
              primaryChildFragment.treeBaseDuration = 0;
            }
            fallbackChildFragment = createFiberFromFragment(fallbackChildren, mode, renderLanes2, null);
          } else {
            primaryChildFragment = createFiberFromOffscreen(primaryChildProps, mode, NoLanes, null);
            fallbackChildFragment = createFiberFromFragment(fallbackChildren, mode, renderLanes2, null);
          }
          primaryChildFragment.return = workInProgress2;
          fallbackChildFragment.return = workInProgress2;
          primaryChildFragment.sibling = fallbackChildFragment;
          workInProgress2.child = primaryChildFragment;
          return fallbackChildFragment;
        }
        function createWorkInProgressOffscreenFiber(current2, offscreenProps) {
          return createWorkInProgress(current2, offscreenProps);
        }
        function updateSuspensePrimaryChildren(current2, workInProgress2, primaryChildren, renderLanes2) {
          var currentPrimaryChildFragment = current2.child;
          var currentFallbackChildFragment = currentPrimaryChildFragment.sibling;
          var primaryChildFragment = createWorkInProgressOffscreenFiber(currentPrimaryChildFragment, {
            mode: "visible",
            children: primaryChildren
          });
          if ((workInProgress2.mode & BlockingMode) === NoMode) {
            primaryChildFragment.lanes = renderLanes2;
          }
          primaryChildFragment.return = workInProgress2;
          primaryChildFragment.sibling = null;
          if (currentFallbackChildFragment !== null) {
            currentFallbackChildFragment.nextEffect = null;
            currentFallbackChildFragment.flags = Deletion;
            workInProgress2.firstEffect = workInProgress2.lastEffect = currentFallbackChildFragment;
          }
          workInProgress2.child = primaryChildFragment;
          return primaryChildFragment;
        }
        function updateSuspenseFallbackChildren(current2, workInProgress2, primaryChildren, fallbackChildren, renderLanes2) {
          var mode = workInProgress2.mode;
          var currentPrimaryChildFragment = current2.child;
          var currentFallbackChildFragment = currentPrimaryChildFragment.sibling;
          var primaryChildProps = {
            mode: "hidden",
            children: primaryChildren
          };
          var primaryChildFragment;
          if ((mode & BlockingMode) === NoMode && workInProgress2.child !== currentPrimaryChildFragment) {
            var progressedPrimaryFragment = workInProgress2.child;
            primaryChildFragment = progressedPrimaryFragment;
            primaryChildFragment.childLanes = NoLanes;
            primaryChildFragment.pendingProps = primaryChildProps;
            if (workInProgress2.mode & ProfileMode) {
              primaryChildFragment.actualDuration = 0;
              primaryChildFragment.actualStartTime = -1;
              primaryChildFragment.selfBaseDuration = currentPrimaryChildFragment.selfBaseDuration;
              primaryChildFragment.treeBaseDuration = currentPrimaryChildFragment.treeBaseDuration;
            }
            var progressedLastEffect = primaryChildFragment.lastEffect;
            if (progressedLastEffect !== null) {
              workInProgress2.firstEffect = primaryChildFragment.firstEffect;
              workInProgress2.lastEffect = progressedLastEffect;
              progressedLastEffect.nextEffect = null;
            } else {
              workInProgress2.firstEffect = workInProgress2.lastEffect = null;
            }
          } else {
            primaryChildFragment = createWorkInProgressOffscreenFiber(currentPrimaryChildFragment, primaryChildProps);
          }
          var fallbackChildFragment;
          if (currentFallbackChildFragment !== null) {
            fallbackChildFragment = createWorkInProgress(currentFallbackChildFragment, fallbackChildren);
          } else {
            fallbackChildFragment = createFiberFromFragment(fallbackChildren, mode, renderLanes2, null);
            fallbackChildFragment.flags |= Placement;
          }
          fallbackChildFragment.return = workInProgress2;
          primaryChildFragment.return = workInProgress2;
          primaryChildFragment.sibling = fallbackChildFragment;
          workInProgress2.child = primaryChildFragment;
          return fallbackChildFragment;
        }
        function scheduleWorkOnFiber(fiber, renderLanes2) {
          fiber.lanes = mergeLanes(fiber.lanes, renderLanes2);
          var alternate = fiber.alternate;
          if (alternate !== null) {
            alternate.lanes = mergeLanes(alternate.lanes, renderLanes2);
          }
          scheduleWorkOnParentPath(fiber.return, renderLanes2);
        }
        function propagateSuspenseContextChange(workInProgress2, firstChild, renderLanes2) {
          var node = firstChild;
          while (node !== null) {
            if (node.tag === SuspenseComponent) {
              var state = node.memoizedState;
              if (state !== null) {
                scheduleWorkOnFiber(node, renderLanes2);
              }
            } else if (node.tag === SuspenseListComponent) {
              scheduleWorkOnFiber(node, renderLanes2);
            } else if (node.child !== null) {
              node.child.return = node;
              node = node.child;
              continue;
            }
            if (node === workInProgress2) {
              return;
            }
            while (node.sibling === null) {
              if (node.return === null || node.return === workInProgress2) {
                return;
              }
              node = node.return;
            }
            node.sibling.return = node.return;
            node = node.sibling;
          }
        }
        function findLastContentRow(firstChild) {
          var row = firstChild;
          var lastContentRow = null;
          while (row !== null) {
            var currentRow = row.alternate;
            if (currentRow !== null && findFirstSuspended(currentRow) === null) {
              lastContentRow = row;
            }
            row = row.sibling;
          }
          return lastContentRow;
        }
        function validateRevealOrder(revealOrder) {
          {
            if (revealOrder !== void 0 && revealOrder !== "forwards" && revealOrder !== "backwards" && revealOrder !== "together" && !didWarnAboutRevealOrder[revealOrder]) {
              didWarnAboutRevealOrder[revealOrder] = true;
              if (typeof revealOrder === "string") {
                switch (revealOrder.toLowerCase()) {
                  case "together":
                  case "forwards":
                  case "backwards": {
                    error('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', revealOrder, revealOrder.toLowerCase());
                    break;
                  }
                  case "forward":
                  case "backward": {
                    error('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', revealOrder, revealOrder.toLowerCase());
                    break;
                  }
                  default:
                    error('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', revealOrder);
                    break;
                }
              } else {
                error('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', revealOrder);
              }
            }
          }
        }
        function validateTailOptions(tailMode, revealOrder) {
          {
            if (tailMode !== void 0 && !didWarnAboutTailOptions[tailMode]) {
              if (tailMode !== "collapsed" && tailMode !== "hidden") {
                didWarnAboutTailOptions[tailMode] = true;
                error('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', tailMode);
              } else if (revealOrder !== "forwards" && revealOrder !== "backwards") {
                didWarnAboutTailOptions[tailMode] = true;
                error('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', tailMode);
              }
            }
          }
        }
        function validateSuspenseListNestedChild(childSlot, index3) {
          {
            var isArray2 = Array.isArray(childSlot);
            var isIterable = !isArray2 && typeof getIteratorFn(childSlot) === "function";
            if (isArray2 || isIterable) {
              var type = isArray2 ? "array" : "iterable";
              error("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", type, index3, type);
              return false;
            }
          }
          return true;
        }
        function validateSuspenseListChildren(children, revealOrder) {
          {
            if ((revealOrder === "forwards" || revealOrder === "backwards") && children !== void 0 && children !== null && children !== false) {
              if (Array.isArray(children)) {
                for (var i4 = 0; i4 < children.length; i4++) {
                  if (!validateSuspenseListNestedChild(children[i4], i4)) {
                    return;
                  }
                }
              } else {
                var iteratorFn = getIteratorFn(children);
                if (typeof iteratorFn === "function") {
                  var childrenIterator = iteratorFn.call(children);
                  if (childrenIterator) {
                    var step = childrenIterator.next();
                    var _i = 0;
                    for (; !step.done; step = childrenIterator.next()) {
                      if (!validateSuspenseListNestedChild(step.value, _i)) {
                        return;
                      }
                      _i++;
                    }
                  }
                } else {
                  error('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', revealOrder);
                }
              }
            }
          }
        }
        function initSuspenseListRenderState(workInProgress2, isBackwards, tail, lastContentRow, tailMode, lastEffectBeforeRendering) {
          var renderState = workInProgress2.memoizedState;
          if (renderState === null) {
            workInProgress2.memoizedState = {
              isBackwards,
              rendering: null,
              renderingStartTime: 0,
              last: lastContentRow,
              tail,
              tailMode,
              lastEffect: lastEffectBeforeRendering
            };
          } else {
            renderState.isBackwards = isBackwards;
            renderState.rendering = null;
            renderState.renderingStartTime = 0;
            renderState.last = lastContentRow;
            renderState.tail = tail;
            renderState.tailMode = tailMode;
            renderState.lastEffect = lastEffectBeforeRendering;
          }
        }
        function updateSuspenseListComponent(current2, workInProgress2, renderLanes2) {
          var nextProps = workInProgress2.pendingProps;
          var revealOrder = nextProps.revealOrder;
          var tailMode = nextProps.tail;
          var newChildren = nextProps.children;
          validateRevealOrder(revealOrder);
          validateTailOptions(tailMode, revealOrder);
          validateSuspenseListChildren(newChildren, revealOrder);
          reconcileChildren(current2, workInProgress2, newChildren, renderLanes2);
          var suspenseContext = suspenseStackCursor.current;
          var shouldForceFallback = hasSuspenseContext(suspenseContext, ForceSuspenseFallback);
          if (shouldForceFallback) {
            suspenseContext = setShallowSuspenseContext(suspenseContext, ForceSuspenseFallback);
            workInProgress2.flags |= DidCapture;
          } else {
            var didSuspendBefore = current2 !== null && (current2.flags & DidCapture) !== NoFlags;
            if (didSuspendBefore) {
              propagateSuspenseContextChange(workInProgress2, workInProgress2.child, renderLanes2);
            }
            suspenseContext = setDefaultShallowSuspenseContext(suspenseContext);
          }
          pushSuspenseContext(workInProgress2, suspenseContext);
          if ((workInProgress2.mode & BlockingMode) === NoMode) {
            workInProgress2.memoizedState = null;
          } else {
            switch (revealOrder) {
              case "forwards": {
                var lastContentRow = findLastContentRow(workInProgress2.child);
                var tail;
                if (lastContentRow === null) {
                  tail = workInProgress2.child;
                  workInProgress2.child = null;
                } else {
                  tail = lastContentRow.sibling;
                  lastContentRow.sibling = null;
                }
                initSuspenseListRenderState(workInProgress2, false, tail, lastContentRow, tailMode, workInProgress2.lastEffect);
                break;
              }
              case "backwards": {
                var _tail = null;
                var row = workInProgress2.child;
                workInProgress2.child = null;
                while (row !== null) {
                  var currentRow = row.alternate;
                  if (currentRow !== null && findFirstSuspended(currentRow) === null) {
                    workInProgress2.child = row;
                    break;
                  }
                  var nextRow = row.sibling;
                  row.sibling = _tail;
                  _tail = row;
                  row = nextRow;
                }
                initSuspenseListRenderState(workInProgress2, true, _tail, null, tailMode, workInProgress2.lastEffect);
                break;
              }
              case "together": {
                initSuspenseListRenderState(workInProgress2, false, null, null, void 0, workInProgress2.lastEffect);
                break;
              }
              default: {
                workInProgress2.memoizedState = null;
              }
            }
          }
          return workInProgress2.child;
        }
        function updatePortalComponent(current2, workInProgress2, renderLanes2) {
          pushHostContainer(workInProgress2, workInProgress2.stateNode.containerInfo);
          var nextChildren = workInProgress2.pendingProps;
          if (current2 === null) {
            workInProgress2.child = reconcileChildFibers(workInProgress2, null, nextChildren, renderLanes2);
          } else {
            reconcileChildren(current2, workInProgress2, nextChildren, renderLanes2);
          }
          return workInProgress2.child;
        }
        var hasWarnedAboutUsingNoValuePropOnContextProvider = false;
        function updateContextProvider(current2, workInProgress2, renderLanes2) {
          var providerType = workInProgress2.type;
          var context = providerType._context;
          var newProps = workInProgress2.pendingProps;
          var oldProps = workInProgress2.memoizedProps;
          var newValue = newProps.value;
          {
            if (!("value" in newProps)) {
              if (!hasWarnedAboutUsingNoValuePropOnContextProvider) {
                hasWarnedAboutUsingNoValuePropOnContextProvider = true;
                error("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?");
              }
            }
            var providerPropTypes = workInProgress2.type.propTypes;
            if (providerPropTypes) {
              checkPropTypes(providerPropTypes, newProps, "prop", "Context.Provider");
            }
          }
          pushProvider(workInProgress2, newValue);
          if (oldProps !== null) {
            var oldValue = oldProps.value;
            var changedBits = calculateChangedBits(context, newValue, oldValue);
            if (changedBits === 0) {
              if (oldProps.children === newProps.children && !hasContextChanged()) {
                return bailoutOnAlreadyFinishedWork(current2, workInProgress2, renderLanes2);
              }
            } else {
              propagateContextChange(workInProgress2, context, changedBits, renderLanes2);
            }
          }
          var newChildren = newProps.children;
          reconcileChildren(current2, workInProgress2, newChildren, renderLanes2);
          return workInProgress2.child;
        }
        var hasWarnedAboutUsingContextAsConsumer = false;
        function updateContextConsumer(current2, workInProgress2, renderLanes2) {
          var context = workInProgress2.type;
          {
            if (context._context === void 0) {
              if (context !== context.Consumer) {
                if (!hasWarnedAboutUsingContextAsConsumer) {
                  hasWarnedAboutUsingContextAsConsumer = true;
                  error("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?");
                }
              }
            } else {
              context = context._context;
            }
          }
          var newProps = workInProgress2.pendingProps;
          var render2 = newProps.children;
          {
            if (typeof render2 !== "function") {
              error("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it.");
            }
          }
          prepareToReadContext(workInProgress2, renderLanes2);
          var newValue = readContext(context, newProps.unstable_observedBits);
          var newChildren;
          {
            ReactCurrentOwner$1.current = workInProgress2;
            setIsRendering(true);
            newChildren = render2(newValue);
            setIsRendering(false);
          }
          workInProgress2.flags |= PerformedWork;
          reconcileChildren(current2, workInProgress2, newChildren, renderLanes2);
          return workInProgress2.child;
        }
        function markWorkInProgressReceivedUpdate() {
          didReceiveUpdate = true;
        }
        function bailoutOnAlreadyFinishedWork(current2, workInProgress2, renderLanes2) {
          if (current2 !== null) {
            workInProgress2.dependencies = current2.dependencies;
          }
          {
            stopProfilerTimerIfRunning();
          }
          markSkippedUpdateLanes(workInProgress2.lanes);
          if (!includesSomeLane(renderLanes2, workInProgress2.childLanes)) {
            return null;
          } else {
            cloneChildFibers(current2, workInProgress2);
            return workInProgress2.child;
          }
        }
        function remountFiber(current2, oldWorkInProgress, newWorkInProgress) {
          {
            var returnFiber = oldWorkInProgress.return;
            if (returnFiber === null) {
              throw new Error("Cannot swap the root fiber.");
            }
            current2.alternate = null;
            oldWorkInProgress.alternate = null;
            newWorkInProgress.index = oldWorkInProgress.index;
            newWorkInProgress.sibling = oldWorkInProgress.sibling;
            newWorkInProgress.return = oldWorkInProgress.return;
            newWorkInProgress.ref = oldWorkInProgress.ref;
            if (oldWorkInProgress === returnFiber.child) {
              returnFiber.child = newWorkInProgress;
            } else {
              var prevSibling = returnFiber.child;
              if (prevSibling === null) {
                throw new Error("Expected parent to have a child.");
              }
              while (prevSibling.sibling !== oldWorkInProgress) {
                prevSibling = prevSibling.sibling;
                if (prevSibling === null) {
                  throw new Error("Expected to find the previous sibling.");
                }
              }
              prevSibling.sibling = newWorkInProgress;
            }
            var last = returnFiber.lastEffect;
            if (last !== null) {
              last.nextEffect = current2;
              returnFiber.lastEffect = current2;
            } else {
              returnFiber.firstEffect = returnFiber.lastEffect = current2;
            }
            current2.nextEffect = null;
            current2.flags = Deletion;
            newWorkInProgress.flags |= Placement;
            return newWorkInProgress;
          }
        }
        function beginWork(current2, workInProgress2, renderLanes2) {
          var updateLanes = workInProgress2.lanes;
          {
            if (workInProgress2._debugNeedsRemount && current2 !== null) {
              return remountFiber(current2, workInProgress2, createFiberFromTypeAndProps(workInProgress2.type, workInProgress2.key, workInProgress2.pendingProps, workInProgress2._debugOwner || null, workInProgress2.mode, workInProgress2.lanes));
            }
          }
          if (current2 !== null) {
            var oldProps = current2.memoizedProps;
            var newProps = workInProgress2.pendingProps;
            if (oldProps !== newProps || hasContextChanged() || workInProgress2.type !== current2.type) {
              didReceiveUpdate = true;
            } else if (!includesSomeLane(renderLanes2, updateLanes)) {
              didReceiveUpdate = false;
              switch (workInProgress2.tag) {
                case HostRoot:
                  pushHostRootContext(workInProgress2);
                  resetHydrationState();
                  break;
                case HostComponent:
                  pushHostContext(workInProgress2);
                  break;
                case ClassComponent: {
                  var Component = workInProgress2.type;
                  if (isContextProvider(Component)) {
                    pushContextProvider(workInProgress2);
                  }
                  break;
                }
                case HostPortal:
                  pushHostContainer(workInProgress2, workInProgress2.stateNode.containerInfo);
                  break;
                case ContextProvider: {
                  var newValue = workInProgress2.memoizedProps.value;
                  pushProvider(workInProgress2, newValue);
                  break;
                }
                case Profiler:
                  {
                    var hasChildWork = includesSomeLane(renderLanes2, workInProgress2.childLanes);
                    if (hasChildWork) {
                      workInProgress2.flags |= Update;
                    }
                    var stateNode = workInProgress2.stateNode;
                    stateNode.effectDuration = 0;
                    stateNode.passiveEffectDuration = 0;
                  }
                  break;
                case SuspenseComponent: {
                  var state = workInProgress2.memoizedState;
                  if (state !== null) {
                    var primaryChildFragment = workInProgress2.child;
                    var primaryChildLanes = primaryChildFragment.childLanes;
                    if (includesSomeLane(renderLanes2, primaryChildLanes)) {
                      return updateSuspenseComponent(current2, workInProgress2, renderLanes2);
                    } else {
                      pushSuspenseContext(workInProgress2, setDefaultShallowSuspenseContext(suspenseStackCursor.current));
                      var child = bailoutOnAlreadyFinishedWork(current2, workInProgress2, renderLanes2);
                      if (child !== null) {
                        return child.sibling;
                      } else {
                        return null;
                      }
                    }
                  } else {
                    pushSuspenseContext(workInProgress2, setDefaultShallowSuspenseContext(suspenseStackCursor.current));
                  }
                  break;
                }
                case SuspenseListComponent: {
                  var didSuspendBefore = (current2.flags & DidCapture) !== NoFlags;
                  var _hasChildWork = includesSomeLane(renderLanes2, workInProgress2.childLanes);
                  if (didSuspendBefore) {
                    if (_hasChildWork) {
                      return updateSuspenseListComponent(current2, workInProgress2, renderLanes2);
                    }
                    workInProgress2.flags |= DidCapture;
                  }
                  var renderState = workInProgress2.memoizedState;
                  if (renderState !== null) {
                    renderState.rendering = null;
                    renderState.tail = null;
                    renderState.lastEffect = null;
                  }
                  pushSuspenseContext(workInProgress2, suspenseStackCursor.current);
                  if (_hasChildWork) {
                    break;
                  } else {
                    return null;
                  }
                }
                case OffscreenComponent:
                case LegacyHiddenComponent: {
                  workInProgress2.lanes = NoLanes;
                  return updateOffscreenComponent(current2, workInProgress2, renderLanes2);
                }
              }
              return bailoutOnAlreadyFinishedWork(current2, workInProgress2, renderLanes2);
            } else {
              if ((current2.flags & ForceUpdateForLegacySuspense) !== NoFlags) {
                didReceiveUpdate = true;
              } else {
                didReceiveUpdate = false;
              }
            }
          } else {
            didReceiveUpdate = false;
          }
          workInProgress2.lanes = NoLanes;
          switch (workInProgress2.tag) {
            case IndeterminateComponent: {
              return mountIndeterminateComponent(current2, workInProgress2, workInProgress2.type, renderLanes2);
            }
            case LazyComponent: {
              var elementType = workInProgress2.elementType;
              return mountLazyComponent(current2, workInProgress2, elementType, updateLanes, renderLanes2);
            }
            case FunctionComponent2: {
              var _Component = workInProgress2.type;
              var unresolvedProps = workInProgress2.pendingProps;
              var resolvedProps = workInProgress2.elementType === _Component ? unresolvedProps : resolveDefaultProps(_Component, unresolvedProps);
              return updateFunctionComponent(current2, workInProgress2, _Component, resolvedProps, renderLanes2);
            }
            case ClassComponent: {
              var _Component2 = workInProgress2.type;
              var _unresolvedProps = workInProgress2.pendingProps;
              var _resolvedProps = workInProgress2.elementType === _Component2 ? _unresolvedProps : resolveDefaultProps(_Component2, _unresolvedProps);
              return updateClassComponent(current2, workInProgress2, _Component2, _resolvedProps, renderLanes2);
            }
            case HostRoot:
              return updateHostRoot(current2, workInProgress2, renderLanes2);
            case HostComponent:
              return updateHostComponent(current2, workInProgress2, renderLanes2);
            case HostText:
              return updateHostText(current2, workInProgress2);
            case SuspenseComponent:
              return updateSuspenseComponent(current2, workInProgress2, renderLanes2);
            case HostPortal:
              return updatePortalComponent(current2, workInProgress2, renderLanes2);
            case ForwardRef: {
              var type = workInProgress2.type;
              var _unresolvedProps2 = workInProgress2.pendingProps;
              var _resolvedProps2 = workInProgress2.elementType === type ? _unresolvedProps2 : resolveDefaultProps(type, _unresolvedProps2);
              return updateForwardRef(current2, workInProgress2, type, _resolvedProps2, renderLanes2);
            }
            case Fragment:
              return updateFragment(current2, workInProgress2, renderLanes2);
            case Mode:
              return updateMode(current2, workInProgress2, renderLanes2);
            case Profiler:
              return updateProfiler(current2, workInProgress2, renderLanes2);
            case ContextProvider:
              return updateContextProvider(current2, workInProgress2, renderLanes2);
            case ContextConsumer:
              return updateContextConsumer(current2, workInProgress2, renderLanes2);
            case MemoComponent: {
              var _type2 = workInProgress2.type;
              var _unresolvedProps3 = workInProgress2.pendingProps;
              var _resolvedProps3 = resolveDefaultProps(_type2, _unresolvedProps3);
              {
                if (workInProgress2.type !== workInProgress2.elementType) {
                  var outerPropTypes = _type2.propTypes;
                  if (outerPropTypes) {
                    checkPropTypes(outerPropTypes, _resolvedProps3, "prop", getComponentName(_type2));
                  }
                }
              }
              _resolvedProps3 = resolveDefaultProps(_type2.type, _resolvedProps3);
              return updateMemoComponent(current2, workInProgress2, _type2, _resolvedProps3, updateLanes, renderLanes2);
            }
            case SimpleMemoComponent: {
              return updateSimpleMemoComponent(current2, workInProgress2, workInProgress2.type, workInProgress2.pendingProps, updateLanes, renderLanes2);
            }
            case IncompleteClassComponent: {
              var _Component3 = workInProgress2.type;
              var _unresolvedProps4 = workInProgress2.pendingProps;
              var _resolvedProps4 = workInProgress2.elementType === _Component3 ? _unresolvedProps4 : resolveDefaultProps(_Component3, _unresolvedProps4);
              return mountIncompleteClassComponent(current2, workInProgress2, _Component3, _resolvedProps4, renderLanes2);
            }
            case SuspenseListComponent: {
              return updateSuspenseListComponent(current2, workInProgress2, renderLanes2);
            }
            case FundamentalComponent: {
              break;
            }
            case ScopeComponent: {
              break;
            }
            case Block: {
              break;
            }
            case OffscreenComponent: {
              return updateOffscreenComponent(current2, workInProgress2, renderLanes2);
            }
            case LegacyHiddenComponent: {
              return updateLegacyHiddenComponent(current2, workInProgress2, renderLanes2);
            }
          }
          {
            {
              throw Error("Unknown unit of work tag (" + workInProgress2.tag + "). This error is likely caused by a bug in React. Please file an issue.");
            }
          }
        }
        function markUpdate(workInProgress2) {
          workInProgress2.flags |= Update;
        }
        function markRef$1(workInProgress2) {
          workInProgress2.flags |= Ref;
        }
        var appendAllChildren;
        var updateHostContainer;
        var updateHostComponent$1;
        var updateHostText$1;
        {
          appendAllChildren = function(parent, workInProgress2, needsVisibilityToggle, isHidden) {
            var node = workInProgress2.child;
            while (node !== null) {
              if (node.tag === HostComponent || node.tag === HostText) {
                appendInitialChild(parent, node.stateNode);
              } else if (node.tag === HostPortal)
                ;
              else if (node.child !== null) {
                node.child.return = node;
                node = node.child;
                continue;
              }
              if (node === workInProgress2) {
                return;
              }
              while (node.sibling === null) {
                if (node.return === null || node.return === workInProgress2) {
                  return;
                }
                node = node.return;
              }
              node.sibling.return = node.return;
              node = node.sibling;
            }
          };
          updateHostContainer = function(workInProgress2) {
          };
          updateHostComponent$1 = function(current2, workInProgress2, type, newProps, rootContainerInstance) {
            var oldProps = current2.memoizedProps;
            if (oldProps === newProps) {
              return;
            }
            var instance = workInProgress2.stateNode;
            var currentHostContext = getHostContext();
            var updatePayload = prepareUpdate(instance, type, oldProps, newProps, rootContainerInstance, currentHostContext);
            workInProgress2.updateQueue = updatePayload;
            if (updatePayload) {
              markUpdate(workInProgress2);
            }
          };
          updateHostText$1 = function(current2, workInProgress2, oldText, newText) {
            if (oldText !== newText) {
              markUpdate(workInProgress2);
            }
          };
        }
        function cutOffTailIfNeeded(renderState, hasRenderedATailFallback) {
          if (getIsHydrating()) {
            return;
          }
          switch (renderState.tailMode) {
            case "hidden": {
              var tailNode = renderState.tail;
              var lastTailNode = null;
              while (tailNode !== null) {
                if (tailNode.alternate !== null) {
                  lastTailNode = tailNode;
                }
                tailNode = tailNode.sibling;
              }
              if (lastTailNode === null) {
                renderState.tail = null;
              } else {
                lastTailNode.sibling = null;
              }
              break;
            }
            case "collapsed": {
              var _tailNode = renderState.tail;
              var _lastTailNode = null;
              while (_tailNode !== null) {
                if (_tailNode.alternate !== null) {
                  _lastTailNode = _tailNode;
                }
                _tailNode = _tailNode.sibling;
              }
              if (_lastTailNode === null) {
                if (!hasRenderedATailFallback && renderState.tail !== null) {
                  renderState.tail.sibling = null;
                } else {
                  renderState.tail = null;
                }
              } else {
                _lastTailNode.sibling = null;
              }
              break;
            }
          }
        }
        function completeWork(current2, workInProgress2, renderLanes2) {
          var newProps = workInProgress2.pendingProps;
          switch (workInProgress2.tag) {
            case IndeterminateComponent:
            case LazyComponent:
            case SimpleMemoComponent:
            case FunctionComponent2:
            case ForwardRef:
            case Fragment:
            case Mode:
            case Profiler:
            case ContextConsumer:
            case MemoComponent:
              return null;
            case ClassComponent: {
              var Component = workInProgress2.type;
              if (isContextProvider(Component)) {
                popContext(workInProgress2);
              }
              return null;
            }
            case HostRoot: {
              popHostContainer(workInProgress2);
              popTopLevelContextObject(workInProgress2);
              resetWorkInProgressVersions();
              var fiberRoot = workInProgress2.stateNode;
              if (fiberRoot.pendingContext) {
                fiberRoot.context = fiberRoot.pendingContext;
                fiberRoot.pendingContext = null;
              }
              if (current2 === null || current2.child === null) {
                var wasHydrated = popHydrationState(workInProgress2);
                if (wasHydrated) {
                  markUpdate(workInProgress2);
                } else if (!fiberRoot.hydrate) {
                  workInProgress2.flags |= Snapshot;
                }
              }
              updateHostContainer(workInProgress2);
              return null;
            }
            case HostComponent: {
              popHostContext(workInProgress2);
              var rootContainerInstance = getRootHostContainer();
              var type = workInProgress2.type;
              if (current2 !== null && workInProgress2.stateNode != null) {
                updateHostComponent$1(current2, workInProgress2, type, newProps, rootContainerInstance);
                if (current2.ref !== workInProgress2.ref) {
                  markRef$1(workInProgress2);
                }
              } else {
                if (!newProps) {
                  if (!(workInProgress2.stateNode !== null)) {
                    {
                      throw Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
                    }
                  }
                  return null;
                }
                var currentHostContext = getHostContext();
                var _wasHydrated = popHydrationState(workInProgress2);
                if (_wasHydrated) {
                  if (prepareToHydrateHostInstance(workInProgress2, rootContainerInstance, currentHostContext)) {
                    markUpdate(workInProgress2);
                  }
                } else {
                  var instance = createInstance(type, newProps, rootContainerInstance, currentHostContext, workInProgress2);
                  appendAllChildren(instance, workInProgress2, false, false);
                  workInProgress2.stateNode = instance;
                  if (finalizeInitialChildren(instance, type, newProps, rootContainerInstance)) {
                    markUpdate(workInProgress2);
                  }
                }
                if (workInProgress2.ref !== null) {
                  markRef$1(workInProgress2);
                }
              }
              return null;
            }
            case HostText: {
              var newText = newProps;
              if (current2 && workInProgress2.stateNode != null) {
                var oldText = current2.memoizedProps;
                updateHostText$1(current2, workInProgress2, oldText, newText);
              } else {
                if (typeof newText !== "string") {
                  if (!(workInProgress2.stateNode !== null)) {
                    {
                      throw Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
                    }
                  }
                }
                var _rootContainerInstance = getRootHostContainer();
                var _currentHostContext = getHostContext();
                var _wasHydrated2 = popHydrationState(workInProgress2);
                if (_wasHydrated2) {
                  if (prepareToHydrateHostTextInstance(workInProgress2)) {
                    markUpdate(workInProgress2);
                  }
                } else {
                  workInProgress2.stateNode = createTextInstance(newText, _rootContainerInstance, _currentHostContext, workInProgress2);
                }
              }
              return null;
            }
            case SuspenseComponent: {
              popSuspenseContext(workInProgress2);
              var nextState = workInProgress2.memoizedState;
              if ((workInProgress2.flags & DidCapture) !== NoFlags) {
                workInProgress2.lanes = renderLanes2;
                if ((workInProgress2.mode & ProfileMode) !== NoMode) {
                  transferActualDuration(workInProgress2);
                }
                return workInProgress2;
              }
              var nextDidTimeout = nextState !== null;
              var prevDidTimeout = false;
              if (current2 === null) {
                if (workInProgress2.memoizedProps.fallback !== void 0) {
                  popHydrationState(workInProgress2);
                }
              } else {
                var prevState = current2.memoizedState;
                prevDidTimeout = prevState !== null;
              }
              if (nextDidTimeout && !prevDidTimeout) {
                if ((workInProgress2.mode & BlockingMode) !== NoMode) {
                  var hasInvisibleChildContext = current2 === null && workInProgress2.memoizedProps.unstable_avoidThisFallback !== true;
                  if (hasInvisibleChildContext || hasSuspenseContext(suspenseStackCursor.current, InvisibleParentSuspenseContext)) {
                    renderDidSuspend();
                  } else {
                    renderDidSuspendDelayIfPossible();
                  }
                }
              }
              {
                if (nextDidTimeout || prevDidTimeout) {
                  workInProgress2.flags |= Update;
                }
              }
              return null;
            }
            case HostPortal:
              popHostContainer(workInProgress2);
              updateHostContainer(workInProgress2);
              if (current2 === null) {
                preparePortalMount(workInProgress2.stateNode.containerInfo);
              }
              return null;
            case ContextProvider:
              popProvider(workInProgress2);
              return null;
            case IncompleteClassComponent: {
              var _Component = workInProgress2.type;
              if (isContextProvider(_Component)) {
                popContext(workInProgress2);
              }
              return null;
            }
            case SuspenseListComponent: {
              popSuspenseContext(workInProgress2);
              var renderState = workInProgress2.memoizedState;
              if (renderState === null) {
                return null;
              }
              var didSuspendAlready = (workInProgress2.flags & DidCapture) !== NoFlags;
              var renderedTail = renderState.rendering;
              if (renderedTail === null) {
                if (!didSuspendAlready) {
                  var cannotBeSuspended = renderHasNotSuspendedYet() && (current2 === null || (current2.flags & DidCapture) === NoFlags);
                  if (!cannotBeSuspended) {
                    var row = workInProgress2.child;
                    while (row !== null) {
                      var suspended = findFirstSuspended(row);
                      if (suspended !== null) {
                        didSuspendAlready = true;
                        workInProgress2.flags |= DidCapture;
                        cutOffTailIfNeeded(renderState, false);
                        var newThennables = suspended.updateQueue;
                        if (newThennables !== null) {
                          workInProgress2.updateQueue = newThennables;
                          workInProgress2.flags |= Update;
                        }
                        if (renderState.lastEffect === null) {
                          workInProgress2.firstEffect = null;
                        }
                        workInProgress2.lastEffect = renderState.lastEffect;
                        resetChildFibers(workInProgress2, renderLanes2);
                        pushSuspenseContext(workInProgress2, setShallowSuspenseContext(suspenseStackCursor.current, ForceSuspenseFallback));
                        return workInProgress2.child;
                      }
                      row = row.sibling;
                    }
                  }
                  if (renderState.tail !== null && now() > getRenderTargetTime()) {
                    workInProgress2.flags |= DidCapture;
                    didSuspendAlready = true;
                    cutOffTailIfNeeded(renderState, false);
                    workInProgress2.lanes = SomeRetryLane;
                    {
                      markSpawnedWork(SomeRetryLane);
                    }
                  }
                } else {
                  cutOffTailIfNeeded(renderState, false);
                }
              } else {
                if (!didSuspendAlready) {
                  var _suspended = findFirstSuspended(renderedTail);
                  if (_suspended !== null) {
                    workInProgress2.flags |= DidCapture;
                    didSuspendAlready = true;
                    var _newThennables = _suspended.updateQueue;
                    if (_newThennables !== null) {
                      workInProgress2.updateQueue = _newThennables;
                      workInProgress2.flags |= Update;
                    }
                    cutOffTailIfNeeded(renderState, true);
                    if (renderState.tail === null && renderState.tailMode === "hidden" && !renderedTail.alternate && !getIsHydrating()) {
                      var lastEffect = workInProgress2.lastEffect = renderState.lastEffect;
                      if (lastEffect !== null) {
                        lastEffect.nextEffect = null;
                      }
                      return null;
                    }
                  } else if (now() * 2 - renderState.renderingStartTime > getRenderTargetTime() && renderLanes2 !== OffscreenLane) {
                    workInProgress2.flags |= DidCapture;
                    didSuspendAlready = true;
                    cutOffTailIfNeeded(renderState, false);
                    workInProgress2.lanes = SomeRetryLane;
                    {
                      markSpawnedWork(SomeRetryLane);
                    }
                  }
                }
                if (renderState.isBackwards) {
                  renderedTail.sibling = workInProgress2.child;
                  workInProgress2.child = renderedTail;
                } else {
                  var previousSibling = renderState.last;
                  if (previousSibling !== null) {
                    previousSibling.sibling = renderedTail;
                  } else {
                    workInProgress2.child = renderedTail;
                  }
                  renderState.last = renderedTail;
                }
              }
              if (renderState.tail !== null) {
                var next = renderState.tail;
                renderState.rendering = next;
                renderState.tail = next.sibling;
                renderState.lastEffect = workInProgress2.lastEffect;
                renderState.renderingStartTime = now();
                next.sibling = null;
                var suspenseContext = suspenseStackCursor.current;
                if (didSuspendAlready) {
                  suspenseContext = setShallowSuspenseContext(suspenseContext, ForceSuspenseFallback);
                } else {
                  suspenseContext = setDefaultShallowSuspenseContext(suspenseContext);
                }
                pushSuspenseContext(workInProgress2, suspenseContext);
                return next;
              }
              return null;
            }
            case FundamentalComponent: {
              break;
            }
            case ScopeComponent: {
              break;
            }
            case Block:
              break;
            case OffscreenComponent:
            case LegacyHiddenComponent: {
              popRenderLanes(workInProgress2);
              if (current2 !== null) {
                var _nextState = workInProgress2.memoizedState;
                var _prevState = current2.memoizedState;
                var prevIsHidden = _prevState !== null;
                var nextIsHidden = _nextState !== null;
                if (prevIsHidden !== nextIsHidden && newProps.mode !== "unstable-defer-without-hiding") {
                  workInProgress2.flags |= Update;
                }
              }
              return null;
            }
          }
          {
            {
              throw Error("Unknown unit of work tag (" + workInProgress2.tag + "). This error is likely caused by a bug in React. Please file an issue.");
            }
          }
        }
        function unwindWork(workInProgress2, renderLanes2) {
          switch (workInProgress2.tag) {
            case ClassComponent: {
              var Component = workInProgress2.type;
              if (isContextProvider(Component)) {
                popContext(workInProgress2);
              }
              var flags = workInProgress2.flags;
              if (flags & ShouldCapture) {
                workInProgress2.flags = flags & ~ShouldCapture | DidCapture;
                if ((workInProgress2.mode & ProfileMode) !== NoMode) {
                  transferActualDuration(workInProgress2);
                }
                return workInProgress2;
              }
              return null;
            }
            case HostRoot: {
              popHostContainer(workInProgress2);
              popTopLevelContextObject(workInProgress2);
              resetWorkInProgressVersions();
              var _flags = workInProgress2.flags;
              if (!((_flags & DidCapture) === NoFlags)) {
                {
                  throw Error("The root failed to unmount after an error. This is likely a bug in React. Please file an issue.");
                }
              }
              workInProgress2.flags = _flags & ~ShouldCapture | DidCapture;
              return workInProgress2;
            }
            case HostComponent: {
              popHostContext(workInProgress2);
              return null;
            }
            case SuspenseComponent: {
              popSuspenseContext(workInProgress2);
              var _flags2 = workInProgress2.flags;
              if (_flags2 & ShouldCapture) {
                workInProgress2.flags = _flags2 & ~ShouldCapture | DidCapture;
                if ((workInProgress2.mode & ProfileMode) !== NoMode) {
                  transferActualDuration(workInProgress2);
                }
                return workInProgress2;
              }
              return null;
            }
            case SuspenseListComponent: {
              popSuspenseContext(workInProgress2);
              return null;
            }
            case HostPortal:
              popHostContainer(workInProgress2);
              return null;
            case ContextProvider:
              popProvider(workInProgress2);
              return null;
            case OffscreenComponent:
            case LegacyHiddenComponent:
              popRenderLanes(workInProgress2);
              return null;
            default:
              return null;
          }
        }
        function unwindInterruptedWork(interruptedWork) {
          switch (interruptedWork.tag) {
            case ClassComponent: {
              var childContextTypes = interruptedWork.type.childContextTypes;
              if (childContextTypes !== null && childContextTypes !== void 0) {
                popContext(interruptedWork);
              }
              break;
            }
            case HostRoot: {
              popHostContainer(interruptedWork);
              popTopLevelContextObject(interruptedWork);
              resetWorkInProgressVersions();
              break;
            }
            case HostComponent: {
              popHostContext(interruptedWork);
              break;
            }
            case HostPortal:
              popHostContainer(interruptedWork);
              break;
            case SuspenseComponent:
              popSuspenseContext(interruptedWork);
              break;
            case SuspenseListComponent:
              popSuspenseContext(interruptedWork);
              break;
            case ContextProvider:
              popProvider(interruptedWork);
              break;
            case OffscreenComponent:
            case LegacyHiddenComponent:
              popRenderLanes(interruptedWork);
              break;
          }
        }
        function createCapturedValue(value, source) {
          return {
            value,
            source,
            stack: getStackByFiberInDevAndProd(source)
          };
        }
        function showErrorDialog(boundary, errorInfo) {
          return true;
        }
        function logCapturedError(boundary, errorInfo) {
          try {
            var logError = showErrorDialog(boundary, errorInfo);
            if (logError === false) {
              return;
            }
            var error2 = errorInfo.value;
            if (true) {
              var source = errorInfo.source;
              var stack = errorInfo.stack;
              var componentStack = stack !== null ? stack : "";
              if (error2 != null && error2._suppressLogging) {
                if (boundary.tag === ClassComponent) {
                  return;
                }
                console["error"](error2);
              }
              var componentName = source ? getComponentName(source.type) : null;
              var componentNameMessage = componentName ? "The above error occurred in the <" + componentName + "> component:" : "The above error occurred in one of your React components:";
              var errorBoundaryMessage;
              var errorBoundaryName = getComponentName(boundary.type);
              if (errorBoundaryName) {
                errorBoundaryMessage = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + errorBoundaryName + ".");
              } else {
                errorBoundaryMessage = "Consider adding an error boundary to your tree to customize error handling behavior.\nVisit https://reactjs.org/link/error-boundaries to learn more about error boundaries.";
              }
              var combinedMessage = componentNameMessage + "\n" + componentStack + "\n\n" + ("" + errorBoundaryMessage);
              console["error"](combinedMessage);
            } else {
              console["error"](error2);
            }
          } catch (e3) {
            setTimeout(function() {
              throw e3;
            });
          }
        }
        var PossiblyWeakMap$1 = typeof WeakMap === "function" ? WeakMap : Map;
        function createRootErrorUpdate(fiber, errorInfo, lane) {
          var update = createUpdate(NoTimestamp, lane);
          update.tag = CaptureUpdate;
          update.payload = {
            element: null
          };
          var error2 = errorInfo.value;
          update.callback = function() {
            onUncaughtError(error2);
            logCapturedError(fiber, errorInfo);
          };
          return update;
        }
        function createClassErrorUpdate(fiber, errorInfo, lane) {
          var update = createUpdate(NoTimestamp, lane);
          update.tag = CaptureUpdate;
          var getDerivedStateFromError = fiber.type.getDerivedStateFromError;
          if (typeof getDerivedStateFromError === "function") {
            var error$1 = errorInfo.value;
            update.payload = function() {
              logCapturedError(fiber, errorInfo);
              return getDerivedStateFromError(error$1);
            };
          }
          var inst = fiber.stateNode;
          if (inst !== null && typeof inst.componentDidCatch === "function") {
            update.callback = function callback() {
              {
                markFailedErrorBoundaryForHotReloading(fiber);
              }
              if (typeof getDerivedStateFromError !== "function") {
                markLegacyErrorBoundaryAsFailed(this);
                logCapturedError(fiber, errorInfo);
              }
              var error$12 = errorInfo.value;
              var stack = errorInfo.stack;
              this.componentDidCatch(error$12, {
                componentStack: stack !== null ? stack : ""
              });
              {
                if (typeof getDerivedStateFromError !== "function") {
                  if (!includesSomeLane(fiber.lanes, SyncLane)) {
                    error("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", getComponentName(fiber.type) || "Unknown");
                  }
                }
              }
            };
          } else {
            update.callback = function() {
              markFailedErrorBoundaryForHotReloading(fiber);
            };
          }
          return update;
        }
        function attachPingListener(root2, wakeable, lanes) {
          var pingCache = root2.pingCache;
          var threadIDs;
          if (pingCache === null) {
            pingCache = root2.pingCache = new PossiblyWeakMap$1();
            threadIDs = new Set();
            pingCache.set(wakeable, threadIDs);
          } else {
            threadIDs = pingCache.get(wakeable);
            if (threadIDs === void 0) {
              threadIDs = new Set();
              pingCache.set(wakeable, threadIDs);
            }
          }
          if (!threadIDs.has(lanes)) {
            threadIDs.add(lanes);
            var ping = pingSuspendedRoot.bind(null, root2, wakeable, lanes);
            wakeable.then(ping, ping);
          }
        }
        function throwException(root2, returnFiber, sourceFiber, value, rootRenderLanes) {
          sourceFiber.flags |= Incomplete;
          sourceFiber.firstEffect = sourceFiber.lastEffect = null;
          if (value !== null && typeof value === "object" && typeof value.then === "function") {
            var wakeable = value;
            if ((sourceFiber.mode & BlockingMode) === NoMode) {
              var currentSource = sourceFiber.alternate;
              if (currentSource) {
                sourceFiber.updateQueue = currentSource.updateQueue;
                sourceFiber.memoizedState = currentSource.memoizedState;
                sourceFiber.lanes = currentSource.lanes;
              } else {
                sourceFiber.updateQueue = null;
                sourceFiber.memoizedState = null;
              }
            }
            var hasInvisibleParentBoundary = hasSuspenseContext(suspenseStackCursor.current, InvisibleParentSuspenseContext);
            var _workInProgress = returnFiber;
            do {
              if (_workInProgress.tag === SuspenseComponent && shouldCaptureSuspense(_workInProgress, hasInvisibleParentBoundary)) {
                var wakeables = _workInProgress.updateQueue;
                if (wakeables === null) {
                  var updateQueue = new Set();
                  updateQueue.add(wakeable);
                  _workInProgress.updateQueue = updateQueue;
                } else {
                  wakeables.add(wakeable);
                }
                if ((_workInProgress.mode & BlockingMode) === NoMode) {
                  _workInProgress.flags |= DidCapture;
                  sourceFiber.flags |= ForceUpdateForLegacySuspense;
                  sourceFiber.flags &= ~(LifecycleEffectMask | Incomplete);
                  if (sourceFiber.tag === ClassComponent) {
                    var currentSourceFiber = sourceFiber.alternate;
                    if (currentSourceFiber === null) {
                      sourceFiber.tag = IncompleteClassComponent;
                    } else {
                      var update = createUpdate(NoTimestamp, SyncLane);
                      update.tag = ForceUpdate;
                      enqueueUpdate(sourceFiber, update);
                    }
                  }
                  sourceFiber.lanes = mergeLanes(sourceFiber.lanes, SyncLane);
                  return;
                }
                attachPingListener(root2, wakeable, rootRenderLanes);
                _workInProgress.flags |= ShouldCapture;
                _workInProgress.lanes = rootRenderLanes;
                return;
              }
              _workInProgress = _workInProgress.return;
            } while (_workInProgress !== null);
            value = new Error((getComponentName(sourceFiber.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.");
          }
          renderDidError();
          value = createCapturedValue(value, sourceFiber);
          var workInProgress2 = returnFiber;
          do {
            switch (workInProgress2.tag) {
              case HostRoot: {
                var _errorInfo = value;
                workInProgress2.flags |= ShouldCapture;
                var lane = pickArbitraryLane(rootRenderLanes);
                workInProgress2.lanes = mergeLanes(workInProgress2.lanes, lane);
                var _update = createRootErrorUpdate(workInProgress2, _errorInfo, lane);
                enqueueCapturedUpdate(workInProgress2, _update);
                return;
              }
              case ClassComponent:
                var errorInfo = value;
                var ctor = workInProgress2.type;
                var instance = workInProgress2.stateNode;
                if ((workInProgress2.flags & DidCapture) === NoFlags && (typeof ctor.getDerivedStateFromError === "function" || instance !== null && typeof instance.componentDidCatch === "function" && !isAlreadyFailedLegacyErrorBoundary(instance))) {
                  workInProgress2.flags |= ShouldCapture;
                  var _lane = pickArbitraryLane(rootRenderLanes);
                  workInProgress2.lanes = mergeLanes(workInProgress2.lanes, _lane);
                  var _update2 = createClassErrorUpdate(workInProgress2, errorInfo, _lane);
                  enqueueCapturedUpdate(workInProgress2, _update2);
                  return;
                }
                break;
            }
            workInProgress2 = workInProgress2.return;
          } while (workInProgress2 !== null);
        }
        var didWarnAboutUndefinedSnapshotBeforeUpdate = null;
        {
          didWarnAboutUndefinedSnapshotBeforeUpdate = new Set();
        }
        var PossiblyWeakSet = typeof WeakSet === "function" ? WeakSet : Set;
        var callComponentWillUnmountWithTimer = function(current2, instance) {
          instance.props = current2.memoizedProps;
          instance.state = current2.memoizedState;
          {
            instance.componentWillUnmount();
          }
        };
        function safelyCallComponentWillUnmount(current2, instance) {
          {
            invokeGuardedCallback(null, callComponentWillUnmountWithTimer, null, current2, instance);
            if (hasCaughtError()) {
              var unmountError = clearCaughtError();
              captureCommitPhaseError(current2, unmountError);
            }
          }
        }
        function safelyDetachRef(current2) {
          var ref = current2.ref;
          if (ref !== null) {
            if (typeof ref === "function") {
              {
                invokeGuardedCallback(null, ref, null, null);
                if (hasCaughtError()) {
                  var refError = clearCaughtError();
                  captureCommitPhaseError(current2, refError);
                }
              }
            } else {
              ref.current = null;
            }
          }
        }
        function safelyCallDestroy(current2, destroy) {
          {
            invokeGuardedCallback(null, destroy, null);
            if (hasCaughtError()) {
              var error2 = clearCaughtError();
              captureCommitPhaseError(current2, error2);
            }
          }
        }
        function commitBeforeMutationLifeCycles(current2, finishedWork) {
          switch (finishedWork.tag) {
            case FunctionComponent2:
            case ForwardRef:
            case SimpleMemoComponent:
            case Block: {
              return;
            }
            case ClassComponent: {
              if (finishedWork.flags & Snapshot) {
                if (current2 !== null) {
                  var prevProps = current2.memoizedProps;
                  var prevState = current2.memoizedState;
                  var instance = finishedWork.stateNode;
                  {
                    if (finishedWork.type === finishedWork.elementType && !didWarnAboutReassigningProps) {
                      if (instance.props !== finishedWork.memoizedProps) {
                        error("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", getComponentName(finishedWork.type) || "instance");
                      }
                      if (instance.state !== finishedWork.memoizedState) {
                        error("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", getComponentName(finishedWork.type) || "instance");
                      }
                    }
                  }
                  var snapshot = instance.getSnapshotBeforeUpdate(finishedWork.elementType === finishedWork.type ? prevProps : resolveDefaultProps(finishedWork.type, prevProps), prevState);
                  {
                    var didWarnSet = didWarnAboutUndefinedSnapshotBeforeUpdate;
                    if (snapshot === void 0 && !didWarnSet.has(finishedWork.type)) {
                      didWarnSet.add(finishedWork.type);
                      error("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", getComponentName(finishedWork.type));
                    }
                  }
                  instance.__reactInternalSnapshotBeforeUpdate = snapshot;
                }
              }
              return;
            }
            case HostRoot: {
              {
                if (finishedWork.flags & Snapshot) {
                  var root2 = finishedWork.stateNode;
                  clearContainer(root2.containerInfo);
                }
              }
              return;
            }
            case HostComponent:
            case HostText:
            case HostPortal:
            case IncompleteClassComponent:
              return;
          }
          {
            {
              throw Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
            }
          }
        }
        function commitHookEffectListUnmount(tag, finishedWork) {
          var updateQueue = finishedWork.updateQueue;
          var lastEffect = updateQueue !== null ? updateQueue.lastEffect : null;
          if (lastEffect !== null) {
            var firstEffect = lastEffect.next;
            var effect = firstEffect;
            do {
              if ((effect.tag & tag) === tag) {
                var destroy = effect.destroy;
                effect.destroy = void 0;
                if (destroy !== void 0) {
                  destroy();
                }
              }
              effect = effect.next;
            } while (effect !== firstEffect);
          }
        }
        function commitHookEffectListMount(tag, finishedWork) {
          var updateQueue = finishedWork.updateQueue;
          var lastEffect = updateQueue !== null ? updateQueue.lastEffect : null;
          if (lastEffect !== null) {
            var firstEffect = lastEffect.next;
            var effect = firstEffect;
            do {
              if ((effect.tag & tag) === tag) {
                var create = effect.create;
                effect.destroy = create();
                {
                  var destroy = effect.destroy;
                  if (destroy !== void 0 && typeof destroy !== "function") {
                    var addendum = void 0;
                    if (destroy === null) {
                      addendum = " You returned null. If your effect does not require clean up, return undefined (or nothing).";
                    } else if (typeof destroy.then === "function") {
                      addendum = "\n\nIt looks like you wrote useEffect(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:\n\nuseEffect(() => {\n  async function fetchData() {\n    // You can await here\n    const response = await MyAPI.getData(someId);\n    // ...\n  }\n  fetchData();\n}, [someId]); // Or [] if effect doesn't need props or state\n\nLearn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching";
                    } else {
                      addendum = " You returned: " + destroy;
                    }
                    error("An effect function must not return anything besides a function, which is used for clean-up.%s", addendum);
                  }
                }
              }
              effect = effect.next;
            } while (effect !== firstEffect);
          }
        }
        function schedulePassiveEffects(finishedWork) {
          var updateQueue = finishedWork.updateQueue;
          var lastEffect = updateQueue !== null ? updateQueue.lastEffect : null;
          if (lastEffect !== null) {
            var firstEffect = lastEffect.next;
            var effect = firstEffect;
            do {
              var _effect = effect, next = _effect.next, tag = _effect.tag;
              if ((tag & Passive$1) !== NoFlags$1 && (tag & HasEffect) !== NoFlags$1) {
                enqueuePendingPassiveHookEffectUnmount(finishedWork, effect);
                enqueuePendingPassiveHookEffectMount(finishedWork, effect);
              }
              effect = next;
            } while (effect !== firstEffect);
          }
        }
        function commitLifeCycles(finishedRoot, current2, finishedWork, committedLanes) {
          switch (finishedWork.tag) {
            case FunctionComponent2:
            case ForwardRef:
            case SimpleMemoComponent:
            case Block: {
              {
                commitHookEffectListMount(Layout | HasEffect, finishedWork);
              }
              schedulePassiveEffects(finishedWork);
              return;
            }
            case ClassComponent: {
              var instance = finishedWork.stateNode;
              if (finishedWork.flags & Update) {
                if (current2 === null) {
                  {
                    if (finishedWork.type === finishedWork.elementType && !didWarnAboutReassigningProps) {
                      if (instance.props !== finishedWork.memoizedProps) {
                        error("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", getComponentName(finishedWork.type) || "instance");
                      }
                      if (instance.state !== finishedWork.memoizedState) {
                        error("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", getComponentName(finishedWork.type) || "instance");
                      }
                    }
                  }
                  {
                    instance.componentDidMount();
                  }
                } else {
                  var prevProps = finishedWork.elementType === finishedWork.type ? current2.memoizedProps : resolveDefaultProps(finishedWork.type, current2.memoizedProps);
                  var prevState = current2.memoizedState;
                  {
                    if (finishedWork.type === finishedWork.elementType && !didWarnAboutReassigningProps) {
                      if (instance.props !== finishedWork.memoizedProps) {
                        error("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", getComponentName(finishedWork.type) || "instance");
                      }
                      if (instance.state !== finishedWork.memoizedState) {
                        error("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", getComponentName(finishedWork.type) || "instance");
                      }
                    }
                  }
                  {
                    instance.componentDidUpdate(prevProps, prevState, instance.__reactInternalSnapshotBeforeUpdate);
                  }
                }
              }
              var updateQueue = finishedWork.updateQueue;
              if (updateQueue !== null) {
                {
                  if (finishedWork.type === finishedWork.elementType && !didWarnAboutReassigningProps) {
                    if (instance.props !== finishedWork.memoizedProps) {
                      error("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", getComponentName(finishedWork.type) || "instance");
                    }
                    if (instance.state !== finishedWork.memoizedState) {
                      error("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", getComponentName(finishedWork.type) || "instance");
                    }
                  }
                }
                commitUpdateQueue(finishedWork, updateQueue, instance);
              }
              return;
            }
            case HostRoot: {
              var _updateQueue = finishedWork.updateQueue;
              if (_updateQueue !== null) {
                var _instance = null;
                if (finishedWork.child !== null) {
                  switch (finishedWork.child.tag) {
                    case HostComponent:
                      _instance = getPublicInstance(finishedWork.child.stateNode);
                      break;
                    case ClassComponent:
                      _instance = finishedWork.child.stateNode;
                      break;
                  }
                }
                commitUpdateQueue(finishedWork, _updateQueue, _instance);
              }
              return;
            }
            case HostComponent: {
              var _instance2 = finishedWork.stateNode;
              if (current2 === null && finishedWork.flags & Update) {
                var type = finishedWork.type;
                var props = finishedWork.memoizedProps;
                commitMount(_instance2, type, props);
              }
              return;
            }
            case HostText: {
              return;
            }
            case HostPortal: {
              return;
            }
            case Profiler: {
              {
                var _finishedWork$memoize2 = finishedWork.memoizedProps, onCommit = _finishedWork$memoize2.onCommit, onRender = _finishedWork$memoize2.onRender;
                var effectDuration = finishedWork.stateNode.effectDuration;
                var commitTime2 = getCommitTime();
                if (typeof onRender === "function") {
                  {
                    onRender(finishedWork.memoizedProps.id, current2 === null ? "mount" : "update", finishedWork.actualDuration, finishedWork.treeBaseDuration, finishedWork.actualStartTime, commitTime2, finishedRoot.memoizedInteractions);
                  }
                }
              }
              return;
            }
            case SuspenseComponent: {
              commitSuspenseHydrationCallbacks(finishedRoot, finishedWork);
              return;
            }
            case SuspenseListComponent:
            case IncompleteClassComponent:
            case FundamentalComponent:
            case ScopeComponent:
            case OffscreenComponent:
            case LegacyHiddenComponent:
              return;
          }
          {
            {
              throw Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
            }
          }
        }
        function hideOrUnhideAllChildren(finishedWork, isHidden) {
          {
            var node = finishedWork;
            while (true) {
              if (node.tag === HostComponent) {
                var instance = node.stateNode;
                if (isHidden) {
                  hideInstance(instance);
                } else {
                  unhideInstance(node.stateNode, node.memoizedProps);
                }
              } else if (node.tag === HostText) {
                var _instance3 = node.stateNode;
                if (isHidden) {
                  hideTextInstance(_instance3);
                } else {
                  unhideTextInstance(_instance3, node.memoizedProps);
                }
              } else if ((node.tag === OffscreenComponent || node.tag === LegacyHiddenComponent) && node.memoizedState !== null && node !== finishedWork)
                ;
              else if (node.child !== null) {
                node.child.return = node;
                node = node.child;
                continue;
              }
              if (node === finishedWork) {
                return;
              }
              while (node.sibling === null) {
                if (node.return === null || node.return === finishedWork) {
                  return;
                }
                node = node.return;
              }
              node.sibling.return = node.return;
              node = node.sibling;
            }
          }
        }
        function commitAttachRef(finishedWork) {
          var ref = finishedWork.ref;
          if (ref !== null) {
            var instance = finishedWork.stateNode;
            var instanceToUse;
            switch (finishedWork.tag) {
              case HostComponent:
                instanceToUse = getPublicInstance(instance);
                break;
              default:
                instanceToUse = instance;
            }
            if (typeof ref === "function") {
              ref(instanceToUse);
            } else {
              {
                if (!ref.hasOwnProperty("current")) {
                  error("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", getComponentName(finishedWork.type));
                }
              }
              ref.current = instanceToUse;
            }
          }
        }
        function commitDetachRef(current2) {
          var currentRef = current2.ref;
          if (currentRef !== null) {
            if (typeof currentRef === "function") {
              currentRef(null);
            } else {
              currentRef.current = null;
            }
          }
        }
        function commitUnmount(finishedRoot, current2, renderPriorityLevel) {
          onCommitUnmount(current2);
          switch (current2.tag) {
            case FunctionComponent2:
            case ForwardRef:
            case MemoComponent:
            case SimpleMemoComponent:
            case Block: {
              var updateQueue = current2.updateQueue;
              if (updateQueue !== null) {
                var lastEffect = updateQueue.lastEffect;
                if (lastEffect !== null) {
                  var firstEffect = lastEffect.next;
                  var effect = firstEffect;
                  do {
                    var _effect2 = effect, destroy = _effect2.destroy, tag = _effect2.tag;
                    if (destroy !== void 0) {
                      if ((tag & Passive$1) !== NoFlags$1) {
                        enqueuePendingPassiveHookEffectUnmount(current2, effect);
                      } else {
                        {
                          safelyCallDestroy(current2, destroy);
                        }
                      }
                    }
                    effect = effect.next;
                  } while (effect !== firstEffect);
                }
              }
              return;
            }
            case ClassComponent: {
              safelyDetachRef(current2);
              var instance = current2.stateNode;
              if (typeof instance.componentWillUnmount === "function") {
                safelyCallComponentWillUnmount(current2, instance);
              }
              return;
            }
            case HostComponent: {
              safelyDetachRef(current2);
              return;
            }
            case HostPortal: {
              {
                unmountHostComponents(finishedRoot, current2);
              }
              return;
            }
            case FundamentalComponent: {
              return;
            }
            case DehydratedFragment: {
              return;
            }
            case ScopeComponent: {
              return;
            }
          }
        }
        function commitNestedUnmounts(finishedRoot, root2, renderPriorityLevel) {
          var node = root2;
          while (true) {
            commitUnmount(finishedRoot, node);
            if (node.child !== null && node.tag !== HostPortal) {
              node.child.return = node;
              node = node.child;
              continue;
            }
            if (node === root2) {
              return;
            }
            while (node.sibling === null) {
              if (node.return === null || node.return === root2) {
                return;
              }
              node = node.return;
            }
            node.sibling.return = node.return;
            node = node.sibling;
          }
        }
        function detachFiberMutation(fiber) {
          fiber.alternate = null;
          fiber.child = null;
          fiber.dependencies = null;
          fiber.firstEffect = null;
          fiber.lastEffect = null;
          fiber.memoizedProps = null;
          fiber.memoizedState = null;
          fiber.pendingProps = null;
          fiber.return = null;
          fiber.updateQueue = null;
          {
            fiber._debugOwner = null;
          }
        }
        function getHostParentFiber(fiber) {
          var parent = fiber.return;
          while (parent !== null) {
            if (isHostParent(parent)) {
              return parent;
            }
            parent = parent.return;
          }
          {
            {
              throw Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
            }
          }
        }
        function isHostParent(fiber) {
          return fiber.tag === HostComponent || fiber.tag === HostRoot || fiber.tag === HostPortal;
        }
        function getHostSibling(fiber) {
          var node = fiber;
          siblings:
            while (true) {
              while (node.sibling === null) {
                if (node.return === null || isHostParent(node.return)) {
                  return null;
                }
                node = node.return;
              }
              node.sibling.return = node.return;
              node = node.sibling;
              while (node.tag !== HostComponent && node.tag !== HostText && node.tag !== DehydratedFragment) {
                if (node.flags & Placement) {
                  continue siblings;
                }
                if (node.child === null || node.tag === HostPortal) {
                  continue siblings;
                } else {
                  node.child.return = node;
                  node = node.child;
                }
              }
              if (!(node.flags & Placement)) {
                return node.stateNode;
              }
            }
        }
        function commitPlacement(finishedWork) {
          var parentFiber = getHostParentFiber(finishedWork);
          var parent;
          var isContainer;
          var parentStateNode = parentFiber.stateNode;
          switch (parentFiber.tag) {
            case HostComponent:
              parent = parentStateNode;
              isContainer = false;
              break;
            case HostRoot:
              parent = parentStateNode.containerInfo;
              isContainer = true;
              break;
            case HostPortal:
              parent = parentStateNode.containerInfo;
              isContainer = true;
              break;
            case FundamentalComponent:
            default: {
              {
                throw Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
              }
            }
          }
          if (parentFiber.flags & ContentReset) {
            resetTextContent(parent);
            parentFiber.flags &= ~ContentReset;
          }
          var before = getHostSibling(finishedWork);
          if (isContainer) {
            insertOrAppendPlacementNodeIntoContainer(finishedWork, before, parent);
          } else {
            insertOrAppendPlacementNode(finishedWork, before, parent);
          }
        }
        function insertOrAppendPlacementNodeIntoContainer(node, before, parent) {
          var tag = node.tag;
          var isHost = tag === HostComponent || tag === HostText;
          if (isHost || enableFundamentalAPI) {
            var stateNode = isHost ? node.stateNode : node.stateNode.instance;
            if (before) {
              insertInContainerBefore(parent, stateNode, before);
            } else {
              appendChildToContainer(parent, stateNode);
            }
          } else if (tag === HostPortal)
            ;
          else {
            var child = node.child;
            if (child !== null) {
              insertOrAppendPlacementNodeIntoContainer(child, before, parent);
              var sibling = child.sibling;
              while (sibling !== null) {
                insertOrAppendPlacementNodeIntoContainer(sibling, before, parent);
                sibling = sibling.sibling;
              }
            }
          }
        }
        function insertOrAppendPlacementNode(node, before, parent) {
          var tag = node.tag;
          var isHost = tag === HostComponent || tag === HostText;
          if (isHost || enableFundamentalAPI) {
            var stateNode = isHost ? node.stateNode : node.stateNode.instance;
            if (before) {
              insertBefore(parent, stateNode, before);
            } else {
              appendChild(parent, stateNode);
            }
          } else if (tag === HostPortal)
            ;
          else {
            var child = node.child;
            if (child !== null) {
              insertOrAppendPlacementNode(child, before, parent);
              var sibling = child.sibling;
              while (sibling !== null) {
                insertOrAppendPlacementNode(sibling, before, parent);
                sibling = sibling.sibling;
              }
            }
          }
        }
        function unmountHostComponents(finishedRoot, current2, renderPriorityLevel) {
          var node = current2;
          var currentParentIsValid = false;
          var currentParent;
          var currentParentIsContainer;
          while (true) {
            if (!currentParentIsValid) {
              var parent = node.return;
              findParent:
                while (true) {
                  if (!(parent !== null)) {
                    {
                      throw Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
                    }
                  }
                  var parentStateNode = parent.stateNode;
                  switch (parent.tag) {
                    case HostComponent:
                      currentParent = parentStateNode;
                      currentParentIsContainer = false;
                      break findParent;
                    case HostRoot:
                      currentParent = parentStateNode.containerInfo;
                      currentParentIsContainer = true;
                      break findParent;
                    case HostPortal:
                      currentParent = parentStateNode.containerInfo;
                      currentParentIsContainer = true;
                      break findParent;
                  }
                  parent = parent.return;
                }
              currentParentIsValid = true;
            }
            if (node.tag === HostComponent || node.tag === HostText) {
              commitNestedUnmounts(finishedRoot, node);
              if (currentParentIsContainer) {
                removeChildFromContainer(currentParent, node.stateNode);
              } else {
                removeChild(currentParent, node.stateNode);
              }
            } else if (node.tag === HostPortal) {
              if (node.child !== null) {
                currentParent = node.stateNode.containerInfo;
                currentParentIsContainer = true;
                node.child.return = node;
                node = node.child;
                continue;
              }
            } else {
              commitUnmount(finishedRoot, node);
              if (node.child !== null) {
                node.child.return = node;
                node = node.child;
                continue;
              }
            }
            if (node === current2) {
              return;
            }
            while (node.sibling === null) {
              if (node.return === null || node.return === current2) {
                return;
              }
              node = node.return;
              if (node.tag === HostPortal) {
                currentParentIsValid = false;
              }
            }
            node.sibling.return = node.return;
            node = node.sibling;
          }
        }
        function commitDeletion(finishedRoot, current2, renderPriorityLevel) {
          {
            unmountHostComponents(finishedRoot, current2);
          }
          var alternate = current2.alternate;
          detachFiberMutation(current2);
          if (alternate !== null) {
            detachFiberMutation(alternate);
          }
        }
        function commitWork(current2, finishedWork) {
          switch (finishedWork.tag) {
            case FunctionComponent2:
            case ForwardRef:
            case MemoComponent:
            case SimpleMemoComponent:
            case Block: {
              {
                commitHookEffectListUnmount(Layout | HasEffect, finishedWork);
              }
              return;
            }
            case ClassComponent: {
              return;
            }
            case HostComponent: {
              var instance = finishedWork.stateNode;
              if (instance != null) {
                var newProps = finishedWork.memoizedProps;
                var oldProps = current2 !== null ? current2.memoizedProps : newProps;
                var type = finishedWork.type;
                var updatePayload = finishedWork.updateQueue;
                finishedWork.updateQueue = null;
                if (updatePayload !== null) {
                  commitUpdate(instance, updatePayload, type, oldProps, newProps);
                }
              }
              return;
            }
            case HostText: {
              if (!(finishedWork.stateNode !== null)) {
                {
                  throw Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
                }
              }
              var textInstance = finishedWork.stateNode;
              var newText = finishedWork.memoizedProps;
              var oldText = current2 !== null ? current2.memoizedProps : newText;
              commitTextUpdate(textInstance, oldText, newText);
              return;
            }
            case HostRoot: {
              {
                var _root = finishedWork.stateNode;
                if (_root.hydrate) {
                  _root.hydrate = false;
                  commitHydratedContainer(_root.containerInfo);
                }
              }
              return;
            }
            case Profiler: {
              return;
            }
            case SuspenseComponent: {
              commitSuspenseComponent(finishedWork);
              attachSuspenseRetryListeners(finishedWork);
              return;
            }
            case SuspenseListComponent: {
              attachSuspenseRetryListeners(finishedWork);
              return;
            }
            case IncompleteClassComponent: {
              return;
            }
            case FundamentalComponent: {
              break;
            }
            case ScopeComponent: {
              break;
            }
            case OffscreenComponent:
            case LegacyHiddenComponent: {
              var newState = finishedWork.memoizedState;
              var isHidden = newState !== null;
              hideOrUnhideAllChildren(finishedWork, isHidden);
              return;
            }
          }
          {
            {
              throw Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
            }
          }
        }
        function commitSuspenseComponent(finishedWork) {
          var newState = finishedWork.memoizedState;
          if (newState !== null) {
            markCommitTimeOfFallback();
            {
              var primaryChildParent = finishedWork.child;
              hideOrUnhideAllChildren(primaryChildParent, true);
            }
          }
        }
        function commitSuspenseHydrationCallbacks(finishedRoot, finishedWork) {
          var newState = finishedWork.memoizedState;
          if (newState === null) {
            var current2 = finishedWork.alternate;
            if (current2 !== null) {
              var prevState = current2.memoizedState;
              if (prevState !== null) {
                var suspenseInstance = prevState.dehydrated;
                if (suspenseInstance !== null) {
                  commitHydratedSuspenseInstance(suspenseInstance);
                }
              }
            }
          }
        }
        function attachSuspenseRetryListeners(finishedWork) {
          var wakeables = finishedWork.updateQueue;
          if (wakeables !== null) {
            finishedWork.updateQueue = null;
            var retryCache = finishedWork.stateNode;
            if (retryCache === null) {
              retryCache = finishedWork.stateNode = new PossiblyWeakSet();
            }
            wakeables.forEach(function(wakeable) {
              var retry = resolveRetryWakeable.bind(null, finishedWork, wakeable);
              if (!retryCache.has(wakeable)) {
                {
                  if (wakeable.__reactDoNotTraceInteractions !== true) {
                    retry = tracing.unstable_wrap(retry);
                  }
                }
                retryCache.add(wakeable);
                wakeable.then(retry, retry);
              }
            });
          }
        }
        function isSuspenseBoundaryBeingHidden(current2, finishedWork) {
          if (current2 !== null) {
            var oldState = current2.memoizedState;
            if (oldState === null || oldState.dehydrated !== null) {
              var newState = finishedWork.memoizedState;
              return newState !== null && newState.dehydrated === null;
            }
          }
          return false;
        }
        function commitResetTextContent(current2) {
          resetTextContent(current2.stateNode);
        }
        var COMPONENT_TYPE = 0;
        var HAS_PSEUDO_CLASS_TYPE = 1;
        var ROLE_TYPE = 2;
        var TEST_NAME_TYPE = 3;
        var TEXT_TYPE = 4;
        if (typeof Symbol === "function" && Symbol.for) {
          var symbolFor$1 = Symbol.for;
          COMPONENT_TYPE = symbolFor$1("selector.component");
          HAS_PSEUDO_CLASS_TYPE = symbolFor$1("selector.has_pseudo_class");
          ROLE_TYPE = symbolFor$1("selector.role");
          TEST_NAME_TYPE = symbolFor$1("selector.test_id");
          TEXT_TYPE = symbolFor$1("selector.text");
        }
        var commitHooks = [];
        function onCommitRoot$1() {
          {
            commitHooks.forEach(function(commitHook) {
              return commitHook();
            });
          }
        }
        var ceil = Math.ceil;
        var ReactCurrentDispatcher$2 = ReactSharedInternals.ReactCurrentDispatcher, ReactCurrentOwner$2 = ReactSharedInternals.ReactCurrentOwner, IsSomeRendererActing = ReactSharedInternals.IsSomeRendererActing;
        var NoContext = 0;
        var BatchedContext = 1;
        var EventContext = 2;
        var DiscreteEventContext = 4;
        var LegacyUnbatchedContext = 8;
        var RenderContext = 16;
        var CommitContext = 32;
        var RetryAfterError = 64;
        var RootIncomplete = 0;
        var RootFatalErrored = 1;
        var RootErrored = 2;
        var RootSuspended = 3;
        var RootSuspendedWithDelay = 4;
        var RootCompleted = 5;
        var executionContext = NoContext;
        var workInProgressRoot = null;
        var workInProgress = null;
        var workInProgressRootRenderLanes = NoLanes;
        var subtreeRenderLanes = NoLanes;
        var subtreeRenderLanesCursor = createCursor(NoLanes);
        var workInProgressRootExitStatus = RootIncomplete;
        var workInProgressRootFatalError = null;
        var workInProgressRootIncludedLanes = NoLanes;
        var workInProgressRootSkippedLanes = NoLanes;
        var workInProgressRootUpdatedLanes = NoLanes;
        var workInProgressRootPingedLanes = NoLanes;
        var mostRecentlyUpdatedRoot = null;
        var globalMostRecentFallbackTime = 0;
        var FALLBACK_THROTTLE_MS = 500;
        var workInProgressRootRenderTargetTime = Infinity;
        var RENDER_TIMEOUT_MS = 500;
        function resetRenderTimer() {
          workInProgressRootRenderTargetTime = now() + RENDER_TIMEOUT_MS;
        }
        function getRenderTargetTime() {
          return workInProgressRootRenderTargetTime;
        }
        var nextEffect = null;
        var hasUncaughtError = false;
        var firstUncaughtError = null;
        var legacyErrorBoundariesThatAlreadyFailed = null;
        var rootDoesHavePassiveEffects = false;
        var rootWithPendingPassiveEffects = null;
        var pendingPassiveEffectsRenderPriority = NoPriority$1;
        var pendingPassiveEffectsLanes = NoLanes;
        var pendingPassiveHookEffectsMount = [];
        var pendingPassiveHookEffectsUnmount = [];
        var rootsWithPendingDiscreteUpdates = null;
        var NESTED_UPDATE_LIMIT = 50;
        var nestedUpdateCount = 0;
        var rootWithNestedUpdates = null;
        var NESTED_PASSIVE_UPDATE_LIMIT = 50;
        var nestedPassiveUpdateCount = 0;
        var spawnedWorkDuringRender = null;
        var currentEventTime = NoTimestamp;
        var currentEventWipLanes = NoLanes;
        var currentEventPendingLanes = NoLanes;
        var isFlushingPassiveEffects = false;
        var focusedInstanceHandle = null;
        var shouldFireAfterActiveInstanceBlur = false;
        function getWorkInProgressRoot() {
          return workInProgressRoot;
        }
        function requestEventTime() {
          if ((executionContext & (RenderContext | CommitContext)) !== NoContext) {
            return now();
          }
          if (currentEventTime !== NoTimestamp) {
            return currentEventTime;
          }
          currentEventTime = now();
          return currentEventTime;
        }
        function requestUpdateLane(fiber) {
          var mode = fiber.mode;
          if ((mode & BlockingMode) === NoMode) {
            return SyncLane;
          } else if ((mode & ConcurrentMode) === NoMode) {
            return getCurrentPriorityLevel() === ImmediatePriority$1 ? SyncLane : SyncBatchedLane;
          }
          if (currentEventWipLanes === NoLanes) {
            currentEventWipLanes = workInProgressRootIncludedLanes;
          }
          var isTransition = requestCurrentTransition() !== NoTransition;
          if (isTransition) {
            if (currentEventPendingLanes !== NoLanes) {
              currentEventPendingLanes = mostRecentlyUpdatedRoot !== null ? mostRecentlyUpdatedRoot.pendingLanes : NoLanes;
            }
            return findTransitionLane(currentEventWipLanes, currentEventPendingLanes);
          }
          var schedulerPriority = getCurrentPriorityLevel();
          var lane;
          if ((executionContext & DiscreteEventContext) !== NoContext && schedulerPriority === UserBlockingPriority$2) {
            lane = findUpdateLane(InputDiscreteLanePriority, currentEventWipLanes);
          } else {
            var schedulerLanePriority = schedulerPriorityToLanePriority(schedulerPriority);
            lane = findUpdateLane(schedulerLanePriority, currentEventWipLanes);
          }
          return lane;
        }
        function requestRetryLane(fiber) {
          var mode = fiber.mode;
          if ((mode & BlockingMode) === NoMode) {
            return SyncLane;
          } else if ((mode & ConcurrentMode) === NoMode) {
            return getCurrentPriorityLevel() === ImmediatePriority$1 ? SyncLane : SyncBatchedLane;
          }
          if (currentEventWipLanes === NoLanes) {
            currentEventWipLanes = workInProgressRootIncludedLanes;
          }
          return findRetryLane(currentEventWipLanes);
        }
        function scheduleUpdateOnFiber(fiber, lane, eventTime) {
          checkForNestedUpdates();
          warnAboutRenderPhaseUpdatesInDEV(fiber);
          var root2 = markUpdateLaneFromFiberToRoot(fiber, lane);
          if (root2 === null) {
            warnAboutUpdateOnUnmountedFiberInDEV(fiber);
            return null;
          }
          markRootUpdated(root2, lane, eventTime);
          if (root2 === workInProgressRoot) {
            {
              workInProgressRootUpdatedLanes = mergeLanes(workInProgressRootUpdatedLanes, lane);
            }
            if (workInProgressRootExitStatus === RootSuspendedWithDelay) {
              markRootSuspended$1(root2, workInProgressRootRenderLanes);
            }
          }
          var priorityLevel = getCurrentPriorityLevel();
          if (lane === SyncLane) {
            if ((executionContext & LegacyUnbatchedContext) !== NoContext && (executionContext & (RenderContext | CommitContext)) === NoContext) {
              schedulePendingInteractions(root2, lane);
              performSyncWorkOnRoot(root2);
            } else {
              ensureRootIsScheduled(root2, eventTime);
              schedulePendingInteractions(root2, lane);
              if (executionContext === NoContext) {
                resetRenderTimer();
                flushSyncCallbackQueue();
              }
            }
          } else {
            if ((executionContext & DiscreteEventContext) !== NoContext && (priorityLevel === UserBlockingPriority$2 || priorityLevel === ImmediatePriority$1)) {
              if (rootsWithPendingDiscreteUpdates === null) {
                rootsWithPendingDiscreteUpdates = new Set([root2]);
              } else {
                rootsWithPendingDiscreteUpdates.add(root2);
              }
            }
            ensureRootIsScheduled(root2, eventTime);
            schedulePendingInteractions(root2, lane);
          }
          mostRecentlyUpdatedRoot = root2;
        }
        function markUpdateLaneFromFiberToRoot(sourceFiber, lane) {
          sourceFiber.lanes = mergeLanes(sourceFiber.lanes, lane);
          var alternate = sourceFiber.alternate;
          if (alternate !== null) {
            alternate.lanes = mergeLanes(alternate.lanes, lane);
          }
          {
            if (alternate === null && (sourceFiber.flags & (Placement | Hydrating)) !== NoFlags) {
              warnAboutUpdateOnNotYetMountedFiberInDEV(sourceFiber);
            }
          }
          var node = sourceFiber;
          var parent = sourceFiber.return;
          while (parent !== null) {
            parent.childLanes = mergeLanes(parent.childLanes, lane);
            alternate = parent.alternate;
            if (alternate !== null) {
              alternate.childLanes = mergeLanes(alternate.childLanes, lane);
            } else {
              {
                if ((parent.flags & (Placement | Hydrating)) !== NoFlags) {
                  warnAboutUpdateOnNotYetMountedFiberInDEV(sourceFiber);
                }
              }
            }
            node = parent;
            parent = parent.return;
          }
          if (node.tag === HostRoot) {
            var root2 = node.stateNode;
            return root2;
          } else {
            return null;
          }
        }
        function ensureRootIsScheduled(root2, currentTime) {
          var existingCallbackNode = root2.callbackNode;
          markStarvedLanesAsExpired(root2, currentTime);
          var nextLanes = getNextLanes(root2, root2 === workInProgressRoot ? workInProgressRootRenderLanes : NoLanes);
          var newCallbackPriority = returnNextLanesPriority();
          if (nextLanes === NoLanes) {
            if (existingCallbackNode !== null) {
              cancelCallback(existingCallbackNode);
              root2.callbackNode = null;
              root2.callbackPriority = NoLanePriority;
            }
            return;
          }
          if (existingCallbackNode !== null) {
            var existingCallbackPriority = root2.callbackPriority;
            if (existingCallbackPriority === newCallbackPriority) {
              return;
            }
            cancelCallback(existingCallbackNode);
          }
          var newCallbackNode;
          if (newCallbackPriority === SyncLanePriority) {
            newCallbackNode = scheduleSyncCallback(performSyncWorkOnRoot.bind(null, root2));
          } else if (newCallbackPriority === SyncBatchedLanePriority) {
            newCallbackNode = scheduleCallback(ImmediatePriority$1, performSyncWorkOnRoot.bind(null, root2));
          } else {
            var schedulerPriorityLevel = lanePriorityToSchedulerPriority(newCallbackPriority);
            newCallbackNode = scheduleCallback(schedulerPriorityLevel, performConcurrentWorkOnRoot.bind(null, root2));
          }
          root2.callbackPriority = newCallbackPriority;
          root2.callbackNode = newCallbackNode;
        }
        function performConcurrentWorkOnRoot(root2) {
          currentEventTime = NoTimestamp;
          currentEventWipLanes = NoLanes;
          currentEventPendingLanes = NoLanes;
          if (!((executionContext & (RenderContext | CommitContext)) === NoContext)) {
            {
              throw Error("Should not already be working.");
            }
          }
          var originalCallbackNode = root2.callbackNode;
          var didFlushPassiveEffects = flushPassiveEffects();
          if (didFlushPassiveEffects) {
            if (root2.callbackNode !== originalCallbackNode) {
              return null;
            }
          }
          var lanes = getNextLanes(root2, root2 === workInProgressRoot ? workInProgressRootRenderLanes : NoLanes);
          if (lanes === NoLanes) {
            return null;
          }
          var exitStatus = renderRootConcurrent(root2, lanes);
          if (includesSomeLane(workInProgressRootIncludedLanes, workInProgressRootUpdatedLanes)) {
            prepareFreshStack(root2, NoLanes);
          } else if (exitStatus !== RootIncomplete) {
            if (exitStatus === RootErrored) {
              executionContext |= RetryAfterError;
              if (root2.hydrate) {
                root2.hydrate = false;
                clearContainer(root2.containerInfo);
              }
              lanes = getLanesToRetrySynchronouslyOnError(root2);
              if (lanes !== NoLanes) {
                exitStatus = renderRootSync(root2, lanes);
              }
            }
            if (exitStatus === RootFatalErrored) {
              var fatalError = workInProgressRootFatalError;
              prepareFreshStack(root2, NoLanes);
              markRootSuspended$1(root2, lanes);
              ensureRootIsScheduled(root2, now());
              throw fatalError;
            }
            var finishedWork = root2.current.alternate;
            root2.finishedWork = finishedWork;
            root2.finishedLanes = lanes;
            finishConcurrentRender(root2, exitStatus, lanes);
          }
          ensureRootIsScheduled(root2, now());
          if (root2.callbackNode === originalCallbackNode) {
            return performConcurrentWorkOnRoot.bind(null, root2);
          }
          return null;
        }
        function finishConcurrentRender(root2, exitStatus, lanes) {
          switch (exitStatus) {
            case RootIncomplete:
            case RootFatalErrored: {
              {
                {
                  throw Error("Root did not complete. This is a bug in React.");
                }
              }
            }
            case RootErrored: {
              commitRoot(root2);
              break;
            }
            case RootSuspended: {
              markRootSuspended$1(root2, lanes);
              if (includesOnlyRetries(lanes) && !shouldForceFlushFallbacksInDEV()) {
                var msUntilTimeout = globalMostRecentFallbackTime + FALLBACK_THROTTLE_MS - now();
                if (msUntilTimeout > 10) {
                  var nextLanes = getNextLanes(root2, NoLanes);
                  if (nextLanes !== NoLanes) {
                    break;
                  }
                  var suspendedLanes = root2.suspendedLanes;
                  if (!isSubsetOfLanes(suspendedLanes, lanes)) {
                    var eventTime = requestEventTime();
                    markRootPinged(root2, suspendedLanes);
                    break;
                  }
                  root2.timeoutHandle = scheduleTimeout(commitRoot.bind(null, root2), msUntilTimeout);
                  break;
                }
              }
              commitRoot(root2);
              break;
            }
            case RootSuspendedWithDelay: {
              markRootSuspended$1(root2, lanes);
              if (includesOnlyTransitions(lanes)) {
                break;
              }
              if (!shouldForceFlushFallbacksInDEV()) {
                var mostRecentEventTime = getMostRecentEventTime(root2, lanes);
                var eventTimeMs = mostRecentEventTime;
                var timeElapsedMs = now() - eventTimeMs;
                var _msUntilTimeout = jnd(timeElapsedMs) - timeElapsedMs;
                if (_msUntilTimeout > 10) {
                  root2.timeoutHandle = scheduleTimeout(commitRoot.bind(null, root2), _msUntilTimeout);
                  break;
                }
              }
              commitRoot(root2);
              break;
            }
            case RootCompleted: {
              commitRoot(root2);
              break;
            }
            default: {
              {
                {
                  throw Error("Unknown root exit status.");
                }
              }
            }
          }
        }
        function markRootSuspended$1(root2, suspendedLanes) {
          suspendedLanes = removeLanes(suspendedLanes, workInProgressRootPingedLanes);
          suspendedLanes = removeLanes(suspendedLanes, workInProgressRootUpdatedLanes);
          markRootSuspended(root2, suspendedLanes);
        }
        function performSyncWorkOnRoot(root2) {
          if (!((executionContext & (RenderContext | CommitContext)) === NoContext)) {
            {
              throw Error("Should not already be working.");
            }
          }
          flushPassiveEffects();
          var lanes;
          var exitStatus;
          if (root2 === workInProgressRoot && includesSomeLane(root2.expiredLanes, workInProgressRootRenderLanes)) {
            lanes = workInProgressRootRenderLanes;
            exitStatus = renderRootSync(root2, lanes);
            if (includesSomeLane(workInProgressRootIncludedLanes, workInProgressRootUpdatedLanes)) {
              lanes = getNextLanes(root2, lanes);
              exitStatus = renderRootSync(root2, lanes);
            }
          } else {
            lanes = getNextLanes(root2, NoLanes);
            exitStatus = renderRootSync(root2, lanes);
          }
          if (root2.tag !== LegacyRoot && exitStatus === RootErrored) {
            executionContext |= RetryAfterError;
            if (root2.hydrate) {
              root2.hydrate = false;
              clearContainer(root2.containerInfo);
            }
            lanes = getLanesToRetrySynchronouslyOnError(root2);
            if (lanes !== NoLanes) {
              exitStatus = renderRootSync(root2, lanes);
            }
          }
          if (exitStatus === RootFatalErrored) {
            var fatalError = workInProgressRootFatalError;
            prepareFreshStack(root2, NoLanes);
            markRootSuspended$1(root2, lanes);
            ensureRootIsScheduled(root2, now());
            throw fatalError;
          }
          var finishedWork = root2.current.alternate;
          root2.finishedWork = finishedWork;
          root2.finishedLanes = lanes;
          commitRoot(root2);
          ensureRootIsScheduled(root2, now());
          return null;
        }
        function flushDiscreteUpdates() {
          if ((executionContext & (BatchedContext | RenderContext | CommitContext)) !== NoContext) {
            {
              if ((executionContext & RenderContext) !== NoContext) {
                error("unstable_flushDiscreteUpdates: Cannot flush updates when React is already rendering.");
              }
            }
            return;
          }
          flushPendingDiscreteUpdates();
          flushPassiveEffects();
        }
        function flushPendingDiscreteUpdates() {
          if (rootsWithPendingDiscreteUpdates !== null) {
            var roots = rootsWithPendingDiscreteUpdates;
            rootsWithPendingDiscreteUpdates = null;
            roots.forEach(function(root2) {
              markDiscreteUpdatesExpired(root2);
              ensureRootIsScheduled(root2, now());
            });
          }
          flushSyncCallbackQueue();
        }
        function batchedUpdates$1(fn, a3) {
          var prevExecutionContext = executionContext;
          executionContext |= BatchedContext;
          try {
            return fn(a3);
          } finally {
            executionContext = prevExecutionContext;
            if (executionContext === NoContext) {
              resetRenderTimer();
              flushSyncCallbackQueue();
            }
          }
        }
        function batchedEventUpdates$1(fn, a3) {
          var prevExecutionContext = executionContext;
          executionContext |= EventContext;
          try {
            return fn(a3);
          } finally {
            executionContext = prevExecutionContext;
            if (executionContext === NoContext) {
              resetRenderTimer();
              flushSyncCallbackQueue();
            }
          }
        }
        function discreteUpdates$1(fn, a3, b3, c3, d3) {
          var prevExecutionContext = executionContext;
          executionContext |= DiscreteEventContext;
          {
            try {
              return runWithPriority$1(UserBlockingPriority$2, fn.bind(null, a3, b3, c3, d3));
            } finally {
              executionContext = prevExecutionContext;
              if (executionContext === NoContext) {
                resetRenderTimer();
                flushSyncCallbackQueue();
              }
            }
          }
        }
        function unbatchedUpdates(fn, a3) {
          var prevExecutionContext = executionContext;
          executionContext &= ~BatchedContext;
          executionContext |= LegacyUnbatchedContext;
          try {
            return fn(a3);
          } finally {
            executionContext = prevExecutionContext;
            if (executionContext === NoContext) {
              resetRenderTimer();
              flushSyncCallbackQueue();
            }
          }
        }
        function flushSync(fn, a3) {
          var prevExecutionContext = executionContext;
          if ((prevExecutionContext & (RenderContext | CommitContext)) !== NoContext) {
            {
              error("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task.");
            }
            return fn(a3);
          }
          executionContext |= BatchedContext;
          {
            try {
              if (fn) {
                return runWithPriority$1(ImmediatePriority$1, fn.bind(null, a3));
              } else {
                return void 0;
              }
            } finally {
              executionContext = prevExecutionContext;
              flushSyncCallbackQueue();
            }
          }
        }
        function pushRenderLanes(fiber, lanes) {
          push(subtreeRenderLanesCursor, subtreeRenderLanes, fiber);
          subtreeRenderLanes = mergeLanes(subtreeRenderLanes, lanes);
          workInProgressRootIncludedLanes = mergeLanes(workInProgressRootIncludedLanes, lanes);
        }
        function popRenderLanes(fiber) {
          subtreeRenderLanes = subtreeRenderLanesCursor.current;
          pop(subtreeRenderLanesCursor, fiber);
        }
        function prepareFreshStack(root2, lanes) {
          root2.finishedWork = null;
          root2.finishedLanes = NoLanes;
          var timeoutHandle = root2.timeoutHandle;
          if (timeoutHandle !== noTimeout) {
            root2.timeoutHandle = noTimeout;
            cancelTimeout(timeoutHandle);
          }
          if (workInProgress !== null) {
            var interruptedWork = workInProgress.return;
            while (interruptedWork !== null) {
              unwindInterruptedWork(interruptedWork);
              interruptedWork = interruptedWork.return;
            }
          }
          workInProgressRoot = root2;
          workInProgress = createWorkInProgress(root2.current, null);
          workInProgressRootRenderLanes = subtreeRenderLanes = workInProgressRootIncludedLanes = lanes;
          workInProgressRootExitStatus = RootIncomplete;
          workInProgressRootFatalError = null;
          workInProgressRootSkippedLanes = NoLanes;
          workInProgressRootUpdatedLanes = NoLanes;
          workInProgressRootPingedLanes = NoLanes;
          {
            spawnedWorkDuringRender = null;
          }
          {
            ReactStrictModeWarnings.discardPendingWarnings();
          }
        }
        function handleError(root2, thrownValue) {
          do {
            var erroredWork = workInProgress;
            try {
              resetContextDependencies();
              resetHooksAfterThrow();
              resetCurrentFiber();
              ReactCurrentOwner$2.current = null;
              if (erroredWork === null || erroredWork.return === null) {
                workInProgressRootExitStatus = RootFatalErrored;
                workInProgressRootFatalError = thrownValue;
                workInProgress = null;
                return;
              }
              if (enableProfilerTimer && erroredWork.mode & ProfileMode) {
                stopProfilerTimerIfRunningAndRecordDelta(erroredWork, true);
              }
              throwException(root2, erroredWork.return, erroredWork, thrownValue, workInProgressRootRenderLanes);
              completeUnitOfWork(erroredWork);
            } catch (yetAnotherThrownValue) {
              thrownValue = yetAnotherThrownValue;
              if (workInProgress === erroredWork && erroredWork !== null) {
                erroredWork = erroredWork.return;
                workInProgress = erroredWork;
              } else {
                erroredWork = workInProgress;
              }
              continue;
            }
            return;
          } while (true);
        }
        function pushDispatcher() {
          var prevDispatcher = ReactCurrentDispatcher$2.current;
          ReactCurrentDispatcher$2.current = ContextOnlyDispatcher;
          if (prevDispatcher === null) {
            return ContextOnlyDispatcher;
          } else {
            return prevDispatcher;
          }
        }
        function popDispatcher(prevDispatcher) {
          ReactCurrentDispatcher$2.current = prevDispatcher;
        }
        function pushInteractions(root2) {
          {
            var prevInteractions = tracing.__interactionsRef.current;
            tracing.__interactionsRef.current = root2.memoizedInteractions;
            return prevInteractions;
          }
        }
        function popInteractions(prevInteractions) {
          {
            tracing.__interactionsRef.current = prevInteractions;
          }
        }
        function markCommitTimeOfFallback() {
          globalMostRecentFallbackTime = now();
        }
        function markSkippedUpdateLanes(lane) {
          workInProgressRootSkippedLanes = mergeLanes(lane, workInProgressRootSkippedLanes);
        }
        function renderDidSuspend() {
          if (workInProgressRootExitStatus === RootIncomplete) {
            workInProgressRootExitStatus = RootSuspended;
          }
        }
        function renderDidSuspendDelayIfPossible() {
          if (workInProgressRootExitStatus === RootIncomplete || workInProgressRootExitStatus === RootSuspended) {
            workInProgressRootExitStatus = RootSuspendedWithDelay;
          }
          if (workInProgressRoot !== null && (includesNonIdleWork(workInProgressRootSkippedLanes) || includesNonIdleWork(workInProgressRootUpdatedLanes))) {
            markRootSuspended$1(workInProgressRoot, workInProgressRootRenderLanes);
          }
        }
        function renderDidError() {
          if (workInProgressRootExitStatus !== RootCompleted) {
            workInProgressRootExitStatus = RootErrored;
          }
        }
        function renderHasNotSuspendedYet() {
          return workInProgressRootExitStatus === RootIncomplete;
        }
        function renderRootSync(root2, lanes) {
          var prevExecutionContext = executionContext;
          executionContext |= RenderContext;
          var prevDispatcher = pushDispatcher();
          if (workInProgressRoot !== root2 || workInProgressRootRenderLanes !== lanes) {
            prepareFreshStack(root2, lanes);
            startWorkOnPendingInteractions(root2, lanes);
          }
          var prevInteractions = pushInteractions(root2);
          do {
            try {
              workLoopSync();
              break;
            } catch (thrownValue) {
              handleError(root2, thrownValue);
            }
          } while (true);
          resetContextDependencies();
          {
            popInteractions(prevInteractions);
          }
          executionContext = prevExecutionContext;
          popDispatcher(prevDispatcher);
          if (workInProgress !== null) {
            {
              {
                throw Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
              }
            }
          }
          workInProgressRoot = null;
          workInProgressRootRenderLanes = NoLanes;
          return workInProgressRootExitStatus;
        }
        function workLoopSync() {
          while (workInProgress !== null) {
            performUnitOfWork(workInProgress);
          }
        }
        function renderRootConcurrent(root2, lanes) {
          var prevExecutionContext = executionContext;
          executionContext |= RenderContext;
          var prevDispatcher = pushDispatcher();
          if (workInProgressRoot !== root2 || workInProgressRootRenderLanes !== lanes) {
            resetRenderTimer();
            prepareFreshStack(root2, lanes);
            startWorkOnPendingInteractions(root2, lanes);
          }
          var prevInteractions = pushInteractions(root2);
          do {
            try {
              workLoopConcurrent();
              break;
            } catch (thrownValue) {
              handleError(root2, thrownValue);
            }
          } while (true);
          resetContextDependencies();
          {
            popInteractions(prevInteractions);
          }
          popDispatcher(prevDispatcher);
          executionContext = prevExecutionContext;
          if (workInProgress !== null) {
            return RootIncomplete;
          } else {
            workInProgressRoot = null;
            workInProgressRootRenderLanes = NoLanes;
            return workInProgressRootExitStatus;
          }
        }
        function workLoopConcurrent() {
          while (workInProgress !== null && !shouldYield()) {
            performUnitOfWork(workInProgress);
          }
        }
        function performUnitOfWork(unitOfWork) {
          var current2 = unitOfWork.alternate;
          setCurrentFiber(unitOfWork);
          var next;
          if ((unitOfWork.mode & ProfileMode) !== NoMode) {
            startProfilerTimer(unitOfWork);
            next = beginWork$1(current2, unitOfWork, subtreeRenderLanes);
            stopProfilerTimerIfRunningAndRecordDelta(unitOfWork, true);
          } else {
            next = beginWork$1(current2, unitOfWork, subtreeRenderLanes);
          }
          resetCurrentFiber();
          unitOfWork.memoizedProps = unitOfWork.pendingProps;
          if (next === null) {
            completeUnitOfWork(unitOfWork);
          } else {
            workInProgress = next;
          }
          ReactCurrentOwner$2.current = null;
        }
        function completeUnitOfWork(unitOfWork) {
          var completedWork = unitOfWork;
          do {
            var current2 = completedWork.alternate;
            var returnFiber = completedWork.return;
            if ((completedWork.flags & Incomplete) === NoFlags) {
              setCurrentFiber(completedWork);
              var next = void 0;
              if ((completedWork.mode & ProfileMode) === NoMode) {
                next = completeWork(current2, completedWork, subtreeRenderLanes);
              } else {
                startProfilerTimer(completedWork);
                next = completeWork(current2, completedWork, subtreeRenderLanes);
                stopProfilerTimerIfRunningAndRecordDelta(completedWork, false);
              }
              resetCurrentFiber();
              if (next !== null) {
                workInProgress = next;
                return;
              }
              resetChildLanes(completedWork);
              if (returnFiber !== null && (returnFiber.flags & Incomplete) === NoFlags) {
                if (returnFiber.firstEffect === null) {
                  returnFiber.firstEffect = completedWork.firstEffect;
                }
                if (completedWork.lastEffect !== null) {
                  if (returnFiber.lastEffect !== null) {
                    returnFiber.lastEffect.nextEffect = completedWork.firstEffect;
                  }
                  returnFiber.lastEffect = completedWork.lastEffect;
                }
                var flags = completedWork.flags;
                if (flags > PerformedWork) {
                  if (returnFiber.lastEffect !== null) {
                    returnFiber.lastEffect.nextEffect = completedWork;
                  } else {
                    returnFiber.firstEffect = completedWork;
                  }
                  returnFiber.lastEffect = completedWork;
                }
              }
            } else {
              var _next = unwindWork(completedWork);
              if (_next !== null) {
                _next.flags &= HostEffectMask;
                workInProgress = _next;
                return;
              }
              if ((completedWork.mode & ProfileMode) !== NoMode) {
                stopProfilerTimerIfRunningAndRecordDelta(completedWork, false);
                var actualDuration = completedWork.actualDuration;
                var child = completedWork.child;
                while (child !== null) {
                  actualDuration += child.actualDuration;
                  child = child.sibling;
                }
                completedWork.actualDuration = actualDuration;
              }
              if (returnFiber !== null) {
                returnFiber.firstEffect = returnFiber.lastEffect = null;
                returnFiber.flags |= Incomplete;
              }
            }
            var siblingFiber = completedWork.sibling;
            if (siblingFiber !== null) {
              workInProgress = siblingFiber;
              return;
            }
            completedWork = returnFiber;
            workInProgress = completedWork;
          } while (completedWork !== null);
          if (workInProgressRootExitStatus === RootIncomplete) {
            workInProgressRootExitStatus = RootCompleted;
          }
        }
        function resetChildLanes(completedWork) {
          if ((completedWork.tag === LegacyHiddenComponent || completedWork.tag === OffscreenComponent) && completedWork.memoizedState !== null && !includesSomeLane(subtreeRenderLanes, OffscreenLane) && (completedWork.mode & ConcurrentMode) !== NoLanes) {
            return;
          }
          var newChildLanes = NoLanes;
          if ((completedWork.mode & ProfileMode) !== NoMode) {
            var actualDuration = completedWork.actualDuration;
            var treeBaseDuration = completedWork.selfBaseDuration;
            var shouldBubbleActualDurations = completedWork.alternate === null || completedWork.child !== completedWork.alternate.child;
            var child = completedWork.child;
            while (child !== null) {
              newChildLanes = mergeLanes(newChildLanes, mergeLanes(child.lanes, child.childLanes));
              if (shouldBubbleActualDurations) {
                actualDuration += child.actualDuration;
              }
              treeBaseDuration += child.treeBaseDuration;
              child = child.sibling;
            }
            var isTimedOutSuspense = completedWork.tag === SuspenseComponent && completedWork.memoizedState !== null;
            if (isTimedOutSuspense) {
              var primaryChildFragment = completedWork.child;
              if (primaryChildFragment !== null) {
                treeBaseDuration -= primaryChildFragment.treeBaseDuration;
              }
            }
            completedWork.actualDuration = actualDuration;
            completedWork.treeBaseDuration = treeBaseDuration;
          } else {
            var _child = completedWork.child;
            while (_child !== null) {
              newChildLanes = mergeLanes(newChildLanes, mergeLanes(_child.lanes, _child.childLanes));
              _child = _child.sibling;
            }
          }
          completedWork.childLanes = newChildLanes;
        }
        function commitRoot(root2) {
          var renderPriorityLevel = getCurrentPriorityLevel();
          runWithPriority$1(ImmediatePriority$1, commitRootImpl.bind(null, root2, renderPriorityLevel));
          return null;
        }
        function commitRootImpl(root2, renderPriorityLevel) {
          do {
            flushPassiveEffects();
          } while (rootWithPendingPassiveEffects !== null);
          flushRenderPhaseStrictModeWarningsInDEV();
          if (!((executionContext & (RenderContext | CommitContext)) === NoContext)) {
            {
              throw Error("Should not already be working.");
            }
          }
          var finishedWork = root2.finishedWork;
          var lanes = root2.finishedLanes;
          if (finishedWork === null) {
            return null;
          }
          root2.finishedWork = null;
          root2.finishedLanes = NoLanes;
          if (!(finishedWork !== root2.current)) {
            {
              throw Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
            }
          }
          root2.callbackNode = null;
          var remainingLanes = mergeLanes(finishedWork.lanes, finishedWork.childLanes);
          markRootFinished(root2, remainingLanes);
          if (rootsWithPendingDiscreteUpdates !== null) {
            if (!hasDiscreteLanes(remainingLanes) && rootsWithPendingDiscreteUpdates.has(root2)) {
              rootsWithPendingDiscreteUpdates.delete(root2);
            }
          }
          if (root2 === workInProgressRoot) {
            workInProgressRoot = null;
            workInProgress = null;
            workInProgressRootRenderLanes = NoLanes;
          }
          var firstEffect;
          if (finishedWork.flags > PerformedWork) {
            if (finishedWork.lastEffect !== null) {
              finishedWork.lastEffect.nextEffect = finishedWork;
              firstEffect = finishedWork.firstEffect;
            } else {
              firstEffect = finishedWork;
            }
          } else {
            firstEffect = finishedWork.firstEffect;
          }
          if (firstEffect !== null) {
            var prevExecutionContext = executionContext;
            executionContext |= CommitContext;
            var prevInteractions = pushInteractions(root2);
            ReactCurrentOwner$2.current = null;
            focusedInstanceHandle = prepareForCommit(root2.containerInfo);
            shouldFireAfterActiveInstanceBlur = false;
            nextEffect = firstEffect;
            do {
              {
                invokeGuardedCallback(null, commitBeforeMutationEffects, null);
                if (hasCaughtError()) {
                  if (!(nextEffect !== null)) {
                    {
                      throw Error("Should be working on an effect.");
                    }
                  }
                  var error2 = clearCaughtError();
                  captureCommitPhaseError(nextEffect, error2);
                  nextEffect = nextEffect.nextEffect;
                }
              }
            } while (nextEffect !== null);
            focusedInstanceHandle = null;
            {
              recordCommitTime();
            }
            nextEffect = firstEffect;
            do {
              {
                invokeGuardedCallback(null, commitMutationEffects, null, root2, renderPriorityLevel);
                if (hasCaughtError()) {
                  if (!(nextEffect !== null)) {
                    {
                      throw Error("Should be working on an effect.");
                    }
                  }
                  var _error = clearCaughtError();
                  captureCommitPhaseError(nextEffect, _error);
                  nextEffect = nextEffect.nextEffect;
                }
              }
            } while (nextEffect !== null);
            resetAfterCommit(root2.containerInfo);
            root2.current = finishedWork;
            nextEffect = firstEffect;
            do {
              {
                invokeGuardedCallback(null, commitLayoutEffects, null, root2, lanes);
                if (hasCaughtError()) {
                  if (!(nextEffect !== null)) {
                    {
                      throw Error("Should be working on an effect.");
                    }
                  }
                  var _error2 = clearCaughtError();
                  captureCommitPhaseError(nextEffect, _error2);
                  nextEffect = nextEffect.nextEffect;
                }
              }
            } while (nextEffect !== null);
            nextEffect = null;
            requestPaint();
            {
              popInteractions(prevInteractions);
            }
            executionContext = prevExecutionContext;
          } else {
            root2.current = finishedWork;
            {
              recordCommitTime();
            }
          }
          var rootDidHavePassiveEffects = rootDoesHavePassiveEffects;
          if (rootDoesHavePassiveEffects) {
            rootDoesHavePassiveEffects = false;
            rootWithPendingPassiveEffects = root2;
            pendingPassiveEffectsLanes = lanes;
            pendingPassiveEffectsRenderPriority = renderPriorityLevel;
          } else {
            nextEffect = firstEffect;
            while (nextEffect !== null) {
              var nextNextEffect = nextEffect.nextEffect;
              nextEffect.nextEffect = null;
              if (nextEffect.flags & Deletion) {
                detachFiberAfterEffects(nextEffect);
              }
              nextEffect = nextNextEffect;
            }
          }
          remainingLanes = root2.pendingLanes;
          if (remainingLanes !== NoLanes) {
            {
              if (spawnedWorkDuringRender !== null) {
                var expirationTimes = spawnedWorkDuringRender;
                spawnedWorkDuringRender = null;
                for (var i4 = 0; i4 < expirationTimes.length; i4++) {
                  scheduleInteractions(root2, expirationTimes[i4], root2.memoizedInteractions);
                }
              }
              schedulePendingInteractions(root2, remainingLanes);
            }
          } else {
            legacyErrorBoundariesThatAlreadyFailed = null;
          }
          {
            if (!rootDidHavePassiveEffects) {
              finishPendingInteractions(root2, lanes);
            }
          }
          if (remainingLanes === SyncLane) {
            if (root2 === rootWithNestedUpdates) {
              nestedUpdateCount++;
            } else {
              nestedUpdateCount = 0;
              rootWithNestedUpdates = root2;
            }
          } else {
            nestedUpdateCount = 0;
          }
          onCommitRoot(finishedWork.stateNode, renderPriorityLevel);
          {
            onCommitRoot$1();
          }
          ensureRootIsScheduled(root2, now());
          if (hasUncaughtError) {
            hasUncaughtError = false;
            var _error3 = firstUncaughtError;
            firstUncaughtError = null;
            throw _error3;
          }
          if ((executionContext & LegacyUnbatchedContext) !== NoContext) {
            return null;
          }
          flushSyncCallbackQueue();
          return null;
        }
        function commitBeforeMutationEffects() {
          while (nextEffect !== null) {
            var current2 = nextEffect.alternate;
            if (!shouldFireAfterActiveInstanceBlur && focusedInstanceHandle !== null) {
              if ((nextEffect.flags & Deletion) !== NoFlags) {
                if (doesFiberContain(nextEffect, focusedInstanceHandle)) {
                  shouldFireAfterActiveInstanceBlur = true;
                }
              } else {
                if (nextEffect.tag === SuspenseComponent && isSuspenseBoundaryBeingHidden(current2, nextEffect) && doesFiberContain(nextEffect, focusedInstanceHandle)) {
                  shouldFireAfterActiveInstanceBlur = true;
                }
              }
            }
            var flags = nextEffect.flags;
            if ((flags & Snapshot) !== NoFlags) {
              setCurrentFiber(nextEffect);
              commitBeforeMutationLifeCycles(current2, nextEffect);
              resetCurrentFiber();
            }
            if ((flags & Passive) !== NoFlags) {
              if (!rootDoesHavePassiveEffects) {
                rootDoesHavePassiveEffects = true;
                scheduleCallback(NormalPriority$1, function() {
                  flushPassiveEffects();
                  return null;
                });
              }
            }
            nextEffect = nextEffect.nextEffect;
          }
        }
        function commitMutationEffects(root2, renderPriorityLevel) {
          while (nextEffect !== null) {
            setCurrentFiber(nextEffect);
            var flags = nextEffect.flags;
            if (flags & ContentReset) {
              commitResetTextContent(nextEffect);
            }
            if (flags & Ref) {
              var current2 = nextEffect.alternate;
              if (current2 !== null) {
                commitDetachRef(current2);
              }
            }
            var primaryFlags = flags & (Placement | Update | Deletion | Hydrating);
            switch (primaryFlags) {
              case Placement: {
                commitPlacement(nextEffect);
                nextEffect.flags &= ~Placement;
                break;
              }
              case PlacementAndUpdate: {
                commitPlacement(nextEffect);
                nextEffect.flags &= ~Placement;
                var _current = nextEffect.alternate;
                commitWork(_current, nextEffect);
                break;
              }
              case Hydrating: {
                nextEffect.flags &= ~Hydrating;
                break;
              }
              case HydratingAndUpdate: {
                nextEffect.flags &= ~Hydrating;
                var _current2 = nextEffect.alternate;
                commitWork(_current2, nextEffect);
                break;
              }
              case Update: {
                var _current3 = nextEffect.alternate;
                commitWork(_current3, nextEffect);
                break;
              }
              case Deletion: {
                commitDeletion(root2, nextEffect);
                break;
              }
            }
            resetCurrentFiber();
            nextEffect = nextEffect.nextEffect;
          }
        }
        function commitLayoutEffects(root2, committedLanes) {
          while (nextEffect !== null) {
            setCurrentFiber(nextEffect);
            var flags = nextEffect.flags;
            if (flags & (Update | Callback)) {
              var current2 = nextEffect.alternate;
              commitLifeCycles(root2, current2, nextEffect);
            }
            {
              if (flags & Ref) {
                commitAttachRef(nextEffect);
              }
            }
            resetCurrentFiber();
            nextEffect = nextEffect.nextEffect;
          }
        }
        function flushPassiveEffects() {
          if (pendingPassiveEffectsRenderPriority !== NoPriority$1) {
            var priorityLevel = pendingPassiveEffectsRenderPriority > NormalPriority$1 ? NormalPriority$1 : pendingPassiveEffectsRenderPriority;
            pendingPassiveEffectsRenderPriority = NoPriority$1;
            {
              return runWithPriority$1(priorityLevel, flushPassiveEffectsImpl);
            }
          }
          return false;
        }
        function enqueuePendingPassiveHookEffectMount(fiber, effect) {
          pendingPassiveHookEffectsMount.push(effect, fiber);
          if (!rootDoesHavePassiveEffects) {
            rootDoesHavePassiveEffects = true;
            scheduleCallback(NormalPriority$1, function() {
              flushPassiveEffects();
              return null;
            });
          }
        }
        function enqueuePendingPassiveHookEffectUnmount(fiber, effect) {
          pendingPassiveHookEffectsUnmount.push(effect, fiber);
          {
            fiber.flags |= PassiveUnmountPendingDev;
            var alternate = fiber.alternate;
            if (alternate !== null) {
              alternate.flags |= PassiveUnmountPendingDev;
            }
          }
          if (!rootDoesHavePassiveEffects) {
            rootDoesHavePassiveEffects = true;
            scheduleCallback(NormalPriority$1, function() {
              flushPassiveEffects();
              return null;
            });
          }
        }
        function invokePassiveEffectCreate(effect) {
          var create = effect.create;
          effect.destroy = create();
        }
        function flushPassiveEffectsImpl() {
          if (rootWithPendingPassiveEffects === null) {
            return false;
          }
          var root2 = rootWithPendingPassiveEffects;
          var lanes = pendingPassiveEffectsLanes;
          rootWithPendingPassiveEffects = null;
          pendingPassiveEffectsLanes = NoLanes;
          if (!((executionContext & (RenderContext | CommitContext)) === NoContext)) {
            {
              throw Error("Cannot flush passive effects while already rendering.");
            }
          }
          {
            isFlushingPassiveEffects = true;
          }
          var prevExecutionContext = executionContext;
          executionContext |= CommitContext;
          var prevInteractions = pushInteractions(root2);
          var unmountEffects = pendingPassiveHookEffectsUnmount;
          pendingPassiveHookEffectsUnmount = [];
          for (var i4 = 0; i4 < unmountEffects.length; i4 += 2) {
            var _effect = unmountEffects[i4];
            var fiber = unmountEffects[i4 + 1];
            var destroy = _effect.destroy;
            _effect.destroy = void 0;
            {
              fiber.flags &= ~PassiveUnmountPendingDev;
              var alternate = fiber.alternate;
              if (alternate !== null) {
                alternate.flags &= ~PassiveUnmountPendingDev;
              }
            }
            if (typeof destroy === "function") {
              {
                setCurrentFiber(fiber);
                {
                  invokeGuardedCallback(null, destroy, null);
                }
                if (hasCaughtError()) {
                  if (!(fiber !== null)) {
                    {
                      throw Error("Should be working on an effect.");
                    }
                  }
                  var error2 = clearCaughtError();
                  captureCommitPhaseError(fiber, error2);
                }
                resetCurrentFiber();
              }
            }
          }
          var mountEffects = pendingPassiveHookEffectsMount;
          pendingPassiveHookEffectsMount = [];
          for (var _i = 0; _i < mountEffects.length; _i += 2) {
            var _effect2 = mountEffects[_i];
            var _fiber = mountEffects[_i + 1];
            {
              setCurrentFiber(_fiber);
              {
                invokeGuardedCallback(null, invokePassiveEffectCreate, null, _effect2);
              }
              if (hasCaughtError()) {
                if (!(_fiber !== null)) {
                  {
                    throw Error("Should be working on an effect.");
                  }
                }
                var _error4 = clearCaughtError();
                captureCommitPhaseError(_fiber, _error4);
              }
              resetCurrentFiber();
            }
          }
          var effect = root2.current.firstEffect;
          while (effect !== null) {
            var nextNextEffect = effect.nextEffect;
            effect.nextEffect = null;
            if (effect.flags & Deletion) {
              detachFiberAfterEffects(effect);
            }
            effect = nextNextEffect;
          }
          {
            popInteractions(prevInteractions);
            finishPendingInteractions(root2, lanes);
          }
          {
            isFlushingPassiveEffects = false;
          }
          executionContext = prevExecutionContext;
          flushSyncCallbackQueue();
          nestedPassiveUpdateCount = rootWithPendingPassiveEffects === null ? 0 : nestedPassiveUpdateCount + 1;
          return true;
        }
        function isAlreadyFailedLegacyErrorBoundary(instance) {
          return legacyErrorBoundariesThatAlreadyFailed !== null && legacyErrorBoundariesThatAlreadyFailed.has(instance);
        }
        function markLegacyErrorBoundaryAsFailed(instance) {
          if (legacyErrorBoundariesThatAlreadyFailed === null) {
            legacyErrorBoundariesThatAlreadyFailed = new Set([instance]);
          } else {
            legacyErrorBoundariesThatAlreadyFailed.add(instance);
          }
        }
        function prepareToThrowUncaughtError(error2) {
          if (!hasUncaughtError) {
            hasUncaughtError = true;
            firstUncaughtError = error2;
          }
        }
        var onUncaughtError = prepareToThrowUncaughtError;
        function captureCommitPhaseErrorOnRoot(rootFiber, sourceFiber, error2) {
          var errorInfo = createCapturedValue(error2, sourceFiber);
          var update = createRootErrorUpdate(rootFiber, errorInfo, SyncLane);
          enqueueUpdate(rootFiber, update);
          var eventTime = requestEventTime();
          var root2 = markUpdateLaneFromFiberToRoot(rootFiber, SyncLane);
          if (root2 !== null) {
            markRootUpdated(root2, SyncLane, eventTime);
            ensureRootIsScheduled(root2, eventTime);
            schedulePendingInteractions(root2, SyncLane);
          }
        }
        function captureCommitPhaseError(sourceFiber, error2) {
          if (sourceFiber.tag === HostRoot) {
            captureCommitPhaseErrorOnRoot(sourceFiber, sourceFiber, error2);
            return;
          }
          var fiber = sourceFiber.return;
          while (fiber !== null) {
            if (fiber.tag === HostRoot) {
              captureCommitPhaseErrorOnRoot(fiber, sourceFiber, error2);
              return;
            } else if (fiber.tag === ClassComponent) {
              var ctor = fiber.type;
              var instance = fiber.stateNode;
              if (typeof ctor.getDerivedStateFromError === "function" || typeof instance.componentDidCatch === "function" && !isAlreadyFailedLegacyErrorBoundary(instance)) {
                var errorInfo = createCapturedValue(error2, sourceFiber);
                var update = createClassErrorUpdate(fiber, errorInfo, SyncLane);
                enqueueUpdate(fiber, update);
                var eventTime = requestEventTime();
                var root2 = markUpdateLaneFromFiberToRoot(fiber, SyncLane);
                if (root2 !== null) {
                  markRootUpdated(root2, SyncLane, eventTime);
                  ensureRootIsScheduled(root2, eventTime);
                  schedulePendingInteractions(root2, SyncLane);
                } else {
                  if (typeof instance.componentDidCatch === "function" && !isAlreadyFailedLegacyErrorBoundary(instance)) {
                    try {
                      instance.componentDidCatch(error2, errorInfo);
                    } catch (errorToIgnore) {
                    }
                  }
                }
                return;
              }
            }
            fiber = fiber.return;
          }
        }
        function pingSuspendedRoot(root2, wakeable, pingedLanes) {
          var pingCache = root2.pingCache;
          if (pingCache !== null) {
            pingCache.delete(wakeable);
          }
          var eventTime = requestEventTime();
          markRootPinged(root2, pingedLanes);
          if (workInProgressRoot === root2 && isSubsetOfLanes(workInProgressRootRenderLanes, pingedLanes)) {
            if (workInProgressRootExitStatus === RootSuspendedWithDelay || workInProgressRootExitStatus === RootSuspended && includesOnlyRetries(workInProgressRootRenderLanes) && now() - globalMostRecentFallbackTime < FALLBACK_THROTTLE_MS) {
              prepareFreshStack(root2, NoLanes);
            } else {
              workInProgressRootPingedLanes = mergeLanes(workInProgressRootPingedLanes, pingedLanes);
            }
          }
          ensureRootIsScheduled(root2, eventTime);
          schedulePendingInteractions(root2, pingedLanes);
        }
        function retryTimedOutBoundary(boundaryFiber, retryLane) {
          if (retryLane === NoLane) {
            retryLane = requestRetryLane(boundaryFiber);
          }
          var eventTime = requestEventTime();
          var root2 = markUpdateLaneFromFiberToRoot(boundaryFiber, retryLane);
          if (root2 !== null) {
            markRootUpdated(root2, retryLane, eventTime);
            ensureRootIsScheduled(root2, eventTime);
            schedulePendingInteractions(root2, retryLane);
          }
        }
        function resolveRetryWakeable(boundaryFiber, wakeable) {
          var retryLane = NoLane;
          var retryCache;
          {
            retryCache = boundaryFiber.stateNode;
          }
          if (retryCache !== null) {
            retryCache.delete(wakeable);
          }
          retryTimedOutBoundary(boundaryFiber, retryLane);
        }
        function jnd(timeElapsed) {
          return timeElapsed < 120 ? 120 : timeElapsed < 480 ? 480 : timeElapsed < 1080 ? 1080 : timeElapsed < 1920 ? 1920 : timeElapsed < 3e3 ? 3e3 : timeElapsed < 4320 ? 4320 : ceil(timeElapsed / 1960) * 1960;
        }
        function checkForNestedUpdates() {
          if (nestedUpdateCount > NESTED_UPDATE_LIMIT) {
            nestedUpdateCount = 0;
            rootWithNestedUpdates = null;
            {
              {
                throw Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
              }
            }
          }
          {
            if (nestedPassiveUpdateCount > NESTED_PASSIVE_UPDATE_LIMIT) {
              nestedPassiveUpdateCount = 0;
              error("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render.");
            }
          }
        }
        function flushRenderPhaseStrictModeWarningsInDEV() {
          {
            ReactStrictModeWarnings.flushLegacyContextWarning();
            {
              ReactStrictModeWarnings.flushPendingUnsafeLifecycleWarnings();
            }
          }
        }
        var didWarnStateUpdateForNotYetMountedComponent = null;
        function warnAboutUpdateOnNotYetMountedFiberInDEV(fiber) {
          {
            if ((executionContext & RenderContext) !== NoContext) {
              return;
            }
            if (!(fiber.mode & (BlockingMode | ConcurrentMode))) {
              return;
            }
            var tag = fiber.tag;
            if (tag !== IndeterminateComponent && tag !== HostRoot && tag !== ClassComponent && tag !== FunctionComponent2 && tag !== ForwardRef && tag !== MemoComponent && tag !== SimpleMemoComponent && tag !== Block) {
              return;
            }
            var componentName = getComponentName(fiber.type) || "ReactComponent";
            if (didWarnStateUpdateForNotYetMountedComponent !== null) {
              if (didWarnStateUpdateForNotYetMountedComponent.has(componentName)) {
                return;
              }
              didWarnStateUpdateForNotYetMountedComponent.add(componentName);
            } else {
              didWarnStateUpdateForNotYetMountedComponent = new Set([componentName]);
            }
            var previousFiber = current;
            try {
              setCurrentFiber(fiber);
              error("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
            } finally {
              if (previousFiber) {
                setCurrentFiber(fiber);
              } else {
                resetCurrentFiber();
              }
            }
          }
        }
        var didWarnStateUpdateForUnmountedComponent = null;
        function warnAboutUpdateOnUnmountedFiberInDEV(fiber) {
          {
            var tag = fiber.tag;
            if (tag !== HostRoot && tag !== ClassComponent && tag !== FunctionComponent2 && tag !== ForwardRef && tag !== MemoComponent && tag !== SimpleMemoComponent && tag !== Block) {
              return;
            }
            if ((fiber.flags & PassiveUnmountPendingDev) !== NoFlags) {
              return;
            }
            var componentName = getComponentName(fiber.type) || "ReactComponent";
            if (didWarnStateUpdateForUnmountedComponent !== null) {
              if (didWarnStateUpdateForUnmountedComponent.has(componentName)) {
                return;
              }
              didWarnStateUpdateForUnmountedComponent.add(componentName);
            } else {
              didWarnStateUpdateForUnmountedComponent = new Set([componentName]);
            }
            if (isFlushingPassiveEffects)
              ;
            else {
              var previousFiber = current;
              try {
                setCurrentFiber(fiber);
                error("Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in %s.", tag === ClassComponent ? "the componentWillUnmount method" : "a useEffect cleanup function");
              } finally {
                if (previousFiber) {
                  setCurrentFiber(fiber);
                } else {
                  resetCurrentFiber();
                }
              }
            }
          }
        }
        var beginWork$1;
        {
          var dummyFiber = null;
          beginWork$1 = function(current2, unitOfWork, lanes) {
            var originalWorkInProgressCopy = assignFiberPropertiesInDEV(dummyFiber, unitOfWork);
            try {
              return beginWork(current2, unitOfWork, lanes);
            } catch (originalError) {
              if (originalError !== null && typeof originalError === "object" && typeof originalError.then === "function") {
                throw originalError;
              }
              resetContextDependencies();
              resetHooksAfterThrow();
              unwindInterruptedWork(unitOfWork);
              assignFiberPropertiesInDEV(unitOfWork, originalWorkInProgressCopy);
              if (unitOfWork.mode & ProfileMode) {
                startProfilerTimer(unitOfWork);
              }
              invokeGuardedCallback(null, beginWork, null, current2, unitOfWork, lanes);
              if (hasCaughtError()) {
                var replayError = clearCaughtError();
                throw replayError;
              } else {
                throw originalError;
              }
            }
          };
        }
        var didWarnAboutUpdateInRender = false;
        var didWarnAboutUpdateInRenderForAnotherComponent;
        {
          didWarnAboutUpdateInRenderForAnotherComponent = new Set();
        }
        function warnAboutRenderPhaseUpdatesInDEV(fiber) {
          {
            if (isRendering && (executionContext & RenderContext) !== NoContext && !getIsUpdatingOpaqueValueInRenderPhaseInDEV()) {
              switch (fiber.tag) {
                case FunctionComponent2:
                case ForwardRef:
                case SimpleMemoComponent: {
                  var renderingComponentName = workInProgress && getComponentName(workInProgress.type) || "Unknown";
                  var dedupeKey = renderingComponentName;
                  if (!didWarnAboutUpdateInRenderForAnotherComponent.has(dedupeKey)) {
                    didWarnAboutUpdateInRenderForAnotherComponent.add(dedupeKey);
                    var setStateComponentName = getComponentName(fiber.type) || "Unknown";
                    error("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", setStateComponentName, renderingComponentName, renderingComponentName);
                  }
                  break;
                }
                case ClassComponent: {
                  if (!didWarnAboutUpdateInRender) {
                    error("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state.");
                    didWarnAboutUpdateInRender = true;
                  }
                  break;
                }
              }
            }
          }
        }
        var IsThisRendererActing = {
          current: false
        };
        function warnIfNotScopedWithMatchingAct(fiber) {
          {
            if (IsSomeRendererActing.current === true && IsThisRendererActing.current !== true) {
              var previousFiber = current;
              try {
                setCurrentFiber(fiber);
                error("It looks like you're using the wrong act() around your test interactions.\nBe sure to use the matching version of act() corresponding to your renderer:\n\n// for react-dom:\nimport {act} from 'react-dom/test-utils';\n// ...\nact(() => ...);\n\n// for react-test-renderer:\nimport TestRenderer from react-test-renderer';\nconst {act} = TestRenderer;\n// ...\nact(() => ...);");
              } finally {
                if (previousFiber) {
                  setCurrentFiber(fiber);
                } else {
                  resetCurrentFiber();
                }
              }
            }
          }
        }
        function warnIfNotCurrentlyActingEffectsInDEV(fiber) {
          {
            if ((fiber.mode & StrictMode) !== NoMode && IsSomeRendererActing.current === false && IsThisRendererActing.current === false) {
              error("An update to %s ran an effect, but was not wrapped in act(...).\n\nWhen testing, code that causes React state updates should be wrapped into act(...):\n\nact(() => {\n  /* fire events that update state */\n});\n/* assert on the output */\n\nThis ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act", getComponentName(fiber.type));
            }
          }
        }
        function warnIfNotCurrentlyActingUpdatesInDEV(fiber) {
          {
            if (executionContext === NoContext && IsSomeRendererActing.current === false && IsThisRendererActing.current === false) {
              var previousFiber = current;
              try {
                setCurrentFiber(fiber);
                error("An update to %s inside a test was not wrapped in act(...).\n\nWhen testing, code that causes React state updates should be wrapped into act(...):\n\nact(() => {\n  /* fire events that update state */\n});\n/* assert on the output */\n\nThis ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act", getComponentName(fiber.type));
              } finally {
                if (previousFiber) {
                  setCurrentFiber(fiber);
                } else {
                  resetCurrentFiber();
                }
              }
            }
          }
        }
        var warnIfNotCurrentlyActingUpdatesInDev = warnIfNotCurrentlyActingUpdatesInDEV;
        var didWarnAboutUnmockedScheduler = false;
        function warnIfUnmockedScheduler(fiber) {
          {
            if (didWarnAboutUnmockedScheduler === false && Scheduler.unstable_flushAllWithoutAsserting === void 0) {
              if (fiber.mode & BlockingMode || fiber.mode & ConcurrentMode) {
                didWarnAboutUnmockedScheduler = true;
                error(`In Concurrent or Sync modes, the "scheduler" module needs to be mocked to guarantee consistent behaviour across tests and browsers. For example, with jest: 
jest.mock('scheduler', () => require('scheduler/unstable_mock'));

For more info, visit https://reactjs.org/link/mock-scheduler`);
              }
            }
          }
        }
        function computeThreadID(root2, lane) {
          return lane * 1e3 + root2.interactionThreadID;
        }
        function markSpawnedWork(lane) {
          if (spawnedWorkDuringRender === null) {
            spawnedWorkDuringRender = [lane];
          } else {
            spawnedWorkDuringRender.push(lane);
          }
        }
        function scheduleInteractions(root2, lane, interactions) {
          if (interactions.size > 0) {
            var pendingInteractionMap = root2.pendingInteractionMap;
            var pendingInteractions = pendingInteractionMap.get(lane);
            if (pendingInteractions != null) {
              interactions.forEach(function(interaction) {
                if (!pendingInteractions.has(interaction)) {
                  interaction.__count++;
                }
                pendingInteractions.add(interaction);
              });
            } else {
              pendingInteractionMap.set(lane, new Set(interactions));
              interactions.forEach(function(interaction) {
                interaction.__count++;
              });
            }
            var subscriber = tracing.__subscriberRef.current;
            if (subscriber !== null) {
              var threadID = computeThreadID(root2, lane);
              subscriber.onWorkScheduled(interactions, threadID);
            }
          }
        }
        function schedulePendingInteractions(root2, lane) {
          scheduleInteractions(root2, lane, tracing.__interactionsRef.current);
        }
        function startWorkOnPendingInteractions(root2, lanes) {
          var interactions = new Set();
          root2.pendingInteractionMap.forEach(function(scheduledInteractions, scheduledLane) {
            if (includesSomeLane(lanes, scheduledLane)) {
              scheduledInteractions.forEach(function(interaction) {
                return interactions.add(interaction);
              });
            }
          });
          root2.memoizedInteractions = interactions;
          if (interactions.size > 0) {
            var subscriber = tracing.__subscriberRef.current;
            if (subscriber !== null) {
              var threadID = computeThreadID(root2, lanes);
              try {
                subscriber.onWorkStarted(interactions, threadID);
              } catch (error2) {
                scheduleCallback(ImmediatePriority$1, function() {
                  throw error2;
                });
              }
            }
          }
        }
        function finishPendingInteractions(root2, committedLanes) {
          var remainingLanesAfterCommit = root2.pendingLanes;
          var subscriber;
          try {
            subscriber = tracing.__subscriberRef.current;
            if (subscriber !== null && root2.memoizedInteractions.size > 0) {
              var threadID = computeThreadID(root2, committedLanes);
              subscriber.onWorkStopped(root2.memoizedInteractions, threadID);
            }
          } catch (error2) {
            scheduleCallback(ImmediatePriority$1, function() {
              throw error2;
            });
          } finally {
            var pendingInteractionMap = root2.pendingInteractionMap;
            pendingInteractionMap.forEach(function(scheduledInteractions, lane) {
              if (!includesSomeLane(remainingLanesAfterCommit, lane)) {
                pendingInteractionMap.delete(lane);
                scheduledInteractions.forEach(function(interaction) {
                  interaction.__count--;
                  if (subscriber !== null && interaction.__count === 0) {
                    try {
                      subscriber.onInteractionScheduledWorkCompleted(interaction);
                    } catch (error2) {
                      scheduleCallback(ImmediatePriority$1, function() {
                        throw error2;
                      });
                    }
                  }
                });
              }
            });
          }
        }
        function shouldForceFlushFallbacksInDEV() {
          return actingUpdatesScopeDepth > 0;
        }
        var actingUpdatesScopeDepth = 0;
        function detachFiberAfterEffects(fiber) {
          fiber.sibling = null;
          fiber.stateNode = null;
        }
        var resolveFamily = null;
        var failedBoundaries = null;
        var setRefreshHandler = function(handler) {
          {
            resolveFamily = handler;
          }
        };
        function resolveFunctionForHotReloading(type) {
          {
            if (resolveFamily === null) {
              return type;
            }
            var family = resolveFamily(type);
            if (family === void 0) {
              return type;
            }
            return family.current;
          }
        }
        function resolveClassForHotReloading(type) {
          return resolveFunctionForHotReloading(type);
        }
        function resolveForwardRefForHotReloading(type) {
          {
            if (resolveFamily === null) {
              return type;
            }
            var family = resolveFamily(type);
            if (family === void 0) {
              if (type !== null && type !== void 0 && typeof type.render === "function") {
                var currentRender = resolveFunctionForHotReloading(type.render);
                if (type.render !== currentRender) {
                  var syntheticType = {
                    $$typeof: REACT_FORWARD_REF_TYPE,
                    render: currentRender
                  };
                  if (type.displayName !== void 0) {
                    syntheticType.displayName = type.displayName;
                  }
                  return syntheticType;
                }
              }
              return type;
            }
            return family.current;
          }
        }
        function isCompatibleFamilyForHotReloading(fiber, element) {
          {
            if (resolveFamily === null) {
              return false;
            }
            var prevType = fiber.elementType;
            var nextType = element.type;
            var needsCompareFamilies = false;
            var $$typeofNextType = typeof nextType === "object" && nextType !== null ? nextType.$$typeof : null;
            switch (fiber.tag) {
              case ClassComponent: {
                if (typeof nextType === "function") {
                  needsCompareFamilies = true;
                }
                break;
              }
              case FunctionComponent2: {
                if (typeof nextType === "function") {
                  needsCompareFamilies = true;
                } else if ($$typeofNextType === REACT_LAZY_TYPE) {
                  needsCompareFamilies = true;
                }
                break;
              }
              case ForwardRef: {
                if ($$typeofNextType === REACT_FORWARD_REF_TYPE) {
                  needsCompareFamilies = true;
                } else if ($$typeofNextType === REACT_LAZY_TYPE) {
                  needsCompareFamilies = true;
                }
                break;
              }
              case MemoComponent:
              case SimpleMemoComponent: {
                if ($$typeofNextType === REACT_MEMO_TYPE) {
                  needsCompareFamilies = true;
                } else if ($$typeofNextType === REACT_LAZY_TYPE) {
                  needsCompareFamilies = true;
                }
                break;
              }
              default:
                return false;
            }
            if (needsCompareFamilies) {
              var prevFamily = resolveFamily(prevType);
              if (prevFamily !== void 0 && prevFamily === resolveFamily(nextType)) {
                return true;
              }
            }
            return false;
          }
        }
        function markFailedErrorBoundaryForHotReloading(fiber) {
          {
            if (resolveFamily === null) {
              return;
            }
            if (typeof WeakSet !== "function") {
              return;
            }
            if (failedBoundaries === null) {
              failedBoundaries = new WeakSet();
            }
            failedBoundaries.add(fiber);
          }
        }
        var scheduleRefresh = function(root2, update) {
          {
            if (resolveFamily === null) {
              return;
            }
            var staleFamilies = update.staleFamilies, updatedFamilies = update.updatedFamilies;
            flushPassiveEffects();
            flushSync(function() {
              scheduleFibersWithFamiliesRecursively(root2.current, updatedFamilies, staleFamilies);
            });
          }
        };
        var scheduleRoot = function(root2, element) {
          {
            if (root2.context !== emptyContextObject) {
              return;
            }
            flushPassiveEffects();
            flushSync(function() {
              updateContainer(element, root2, null, null);
            });
          }
        };
        function scheduleFibersWithFamiliesRecursively(fiber, updatedFamilies, staleFamilies) {
          {
            var alternate = fiber.alternate, child = fiber.child, sibling = fiber.sibling, tag = fiber.tag, type = fiber.type;
            var candidateType = null;
            switch (tag) {
              case FunctionComponent2:
              case SimpleMemoComponent:
              case ClassComponent:
                candidateType = type;
                break;
              case ForwardRef:
                candidateType = type.render;
                break;
            }
            if (resolveFamily === null) {
              throw new Error("Expected resolveFamily to be set during hot reload.");
            }
            var needsRender = false;
            var needsRemount = false;
            if (candidateType !== null) {
              var family = resolveFamily(candidateType);
              if (family !== void 0) {
                if (staleFamilies.has(family)) {
                  needsRemount = true;
                } else if (updatedFamilies.has(family)) {
                  if (tag === ClassComponent) {
                    needsRemount = true;
                  } else {
                    needsRender = true;
                  }
                }
              }
            }
            if (failedBoundaries !== null) {
              if (failedBoundaries.has(fiber) || alternate !== null && failedBoundaries.has(alternate)) {
                needsRemount = true;
              }
            }
            if (needsRemount) {
              fiber._debugNeedsRemount = true;
            }
            if (needsRemount || needsRender) {
              scheduleUpdateOnFiber(fiber, SyncLane, NoTimestamp);
            }
            if (child !== null && !needsRemount) {
              scheduleFibersWithFamiliesRecursively(child, updatedFamilies, staleFamilies);
            }
            if (sibling !== null) {
              scheduleFibersWithFamiliesRecursively(sibling, updatedFamilies, staleFamilies);
            }
          }
        }
        var findHostInstancesForRefresh = function(root2, families) {
          {
            var hostInstances = new Set();
            var types = new Set(families.map(function(family) {
              return family.current;
            }));
            findHostInstancesForMatchingFibersRecursively(root2.current, types, hostInstances);
            return hostInstances;
          }
        };
        function findHostInstancesForMatchingFibersRecursively(fiber, types, hostInstances) {
          {
            var child = fiber.child, sibling = fiber.sibling, tag = fiber.tag, type = fiber.type;
            var candidateType = null;
            switch (tag) {
              case FunctionComponent2:
              case SimpleMemoComponent:
              case ClassComponent:
                candidateType = type;
                break;
              case ForwardRef:
                candidateType = type.render;
                break;
            }
            var didMatch = false;
            if (candidateType !== null) {
              if (types.has(candidateType)) {
                didMatch = true;
              }
            }
            if (didMatch) {
              findHostInstancesForFiberShallowly(fiber, hostInstances);
            } else {
              if (child !== null) {
                findHostInstancesForMatchingFibersRecursively(child, types, hostInstances);
              }
            }
            if (sibling !== null) {
              findHostInstancesForMatchingFibersRecursively(sibling, types, hostInstances);
            }
          }
        }
        function findHostInstancesForFiberShallowly(fiber, hostInstances) {
          {
            var foundHostInstances = findChildHostInstancesForFiberShallowly(fiber, hostInstances);
            if (foundHostInstances) {
              return;
            }
            var node = fiber;
            while (true) {
              switch (node.tag) {
                case HostComponent:
                  hostInstances.add(node.stateNode);
                  return;
                case HostPortal:
                  hostInstances.add(node.stateNode.containerInfo);
                  return;
                case HostRoot:
                  hostInstances.add(node.stateNode.containerInfo);
                  return;
              }
              if (node.return === null) {
                throw new Error("Expected to reach root first.");
              }
              node = node.return;
            }
          }
        }
        function findChildHostInstancesForFiberShallowly(fiber, hostInstances) {
          {
            var node = fiber;
            var foundHostInstances = false;
            while (true) {
              if (node.tag === HostComponent) {
                foundHostInstances = true;
                hostInstances.add(node.stateNode);
              } else if (node.child !== null) {
                node.child.return = node;
                node = node.child;
                continue;
              }
              if (node === fiber) {
                return foundHostInstances;
              }
              while (node.sibling === null) {
                if (node.return === null || node.return === fiber) {
                  return foundHostInstances;
                }
                node = node.return;
              }
              node.sibling.return = node.return;
              node = node.sibling;
            }
          }
          return false;
        }
        var hasBadMapPolyfill;
        {
          hasBadMapPolyfill = false;
          try {
            var nonExtensibleObject = Object.preventExtensions({});
            new Map([[nonExtensibleObject, null]]);
            new Set([nonExtensibleObject]);
          } catch (e3) {
            hasBadMapPolyfill = true;
          }
        }
        var debugCounter = 1;
        function FiberNode(tag, pendingProps, key, mode) {
          this.tag = tag;
          this.key = key;
          this.elementType = null;
          this.type = null;
          this.stateNode = null;
          this.return = null;
          this.child = null;
          this.sibling = null;
          this.index = 0;
          this.ref = null;
          this.pendingProps = pendingProps;
          this.memoizedProps = null;
          this.updateQueue = null;
          this.memoizedState = null;
          this.dependencies = null;
          this.mode = mode;
          this.flags = NoFlags;
          this.nextEffect = null;
          this.firstEffect = null;
          this.lastEffect = null;
          this.lanes = NoLanes;
          this.childLanes = NoLanes;
          this.alternate = null;
          {
            this.actualDuration = Number.NaN;
            this.actualStartTime = Number.NaN;
            this.selfBaseDuration = Number.NaN;
            this.treeBaseDuration = Number.NaN;
            this.actualDuration = 0;
            this.actualStartTime = -1;
            this.selfBaseDuration = 0;
            this.treeBaseDuration = 0;
          }
          {
            this._debugID = debugCounter++;
            this._debugSource = null;
            this._debugOwner = null;
            this._debugNeedsRemount = false;
            this._debugHookTypes = null;
            if (!hasBadMapPolyfill && typeof Object.preventExtensions === "function") {
              Object.preventExtensions(this);
            }
          }
        }
        var createFiber = function(tag, pendingProps, key, mode) {
          return new FiberNode(tag, pendingProps, key, mode);
        };
        function shouldConstruct$1(Component) {
          var prototype = Component.prototype;
          return !!(prototype && prototype.isReactComponent);
        }
        function isSimpleFunctionComponent(type) {
          return typeof type === "function" && !shouldConstruct$1(type) && type.defaultProps === void 0;
        }
        function resolveLazyComponentTag(Component) {
          if (typeof Component === "function") {
            return shouldConstruct$1(Component) ? ClassComponent : FunctionComponent2;
          } else if (Component !== void 0 && Component !== null) {
            var $$typeof = Component.$$typeof;
            if ($$typeof === REACT_FORWARD_REF_TYPE) {
              return ForwardRef;
            }
            if ($$typeof === REACT_MEMO_TYPE) {
              return MemoComponent;
            }
          }
          return IndeterminateComponent;
        }
        function createWorkInProgress(current2, pendingProps) {
          var workInProgress2 = current2.alternate;
          if (workInProgress2 === null) {
            workInProgress2 = createFiber(current2.tag, pendingProps, current2.key, current2.mode);
            workInProgress2.elementType = current2.elementType;
            workInProgress2.type = current2.type;
            workInProgress2.stateNode = current2.stateNode;
            {
              workInProgress2._debugID = current2._debugID;
              workInProgress2._debugSource = current2._debugSource;
              workInProgress2._debugOwner = current2._debugOwner;
              workInProgress2._debugHookTypes = current2._debugHookTypes;
            }
            workInProgress2.alternate = current2;
            current2.alternate = workInProgress2;
          } else {
            workInProgress2.pendingProps = pendingProps;
            workInProgress2.type = current2.type;
            workInProgress2.flags = NoFlags;
            workInProgress2.nextEffect = null;
            workInProgress2.firstEffect = null;
            workInProgress2.lastEffect = null;
            {
              workInProgress2.actualDuration = 0;
              workInProgress2.actualStartTime = -1;
            }
          }
          workInProgress2.childLanes = current2.childLanes;
          workInProgress2.lanes = current2.lanes;
          workInProgress2.child = current2.child;
          workInProgress2.memoizedProps = current2.memoizedProps;
          workInProgress2.memoizedState = current2.memoizedState;
          workInProgress2.updateQueue = current2.updateQueue;
          var currentDependencies = current2.dependencies;
          workInProgress2.dependencies = currentDependencies === null ? null : {
            lanes: currentDependencies.lanes,
            firstContext: currentDependencies.firstContext
          };
          workInProgress2.sibling = current2.sibling;
          workInProgress2.index = current2.index;
          workInProgress2.ref = current2.ref;
          {
            workInProgress2.selfBaseDuration = current2.selfBaseDuration;
            workInProgress2.treeBaseDuration = current2.treeBaseDuration;
          }
          {
            workInProgress2._debugNeedsRemount = current2._debugNeedsRemount;
            switch (workInProgress2.tag) {
              case IndeterminateComponent:
              case FunctionComponent2:
              case SimpleMemoComponent:
                workInProgress2.type = resolveFunctionForHotReloading(current2.type);
                break;
              case ClassComponent:
                workInProgress2.type = resolveClassForHotReloading(current2.type);
                break;
              case ForwardRef:
                workInProgress2.type = resolveForwardRefForHotReloading(current2.type);
                break;
            }
          }
          return workInProgress2;
        }
        function resetWorkInProgress(workInProgress2, renderLanes2) {
          workInProgress2.flags &= Placement;
          workInProgress2.nextEffect = null;
          workInProgress2.firstEffect = null;
          workInProgress2.lastEffect = null;
          var current2 = workInProgress2.alternate;
          if (current2 === null) {
            workInProgress2.childLanes = NoLanes;
            workInProgress2.lanes = renderLanes2;
            workInProgress2.child = null;
            workInProgress2.memoizedProps = null;
            workInProgress2.memoizedState = null;
            workInProgress2.updateQueue = null;
            workInProgress2.dependencies = null;
            workInProgress2.stateNode = null;
            {
              workInProgress2.selfBaseDuration = 0;
              workInProgress2.treeBaseDuration = 0;
            }
          } else {
            workInProgress2.childLanes = current2.childLanes;
            workInProgress2.lanes = current2.lanes;
            workInProgress2.child = current2.child;
            workInProgress2.memoizedProps = current2.memoizedProps;
            workInProgress2.memoizedState = current2.memoizedState;
            workInProgress2.updateQueue = current2.updateQueue;
            workInProgress2.type = current2.type;
            var currentDependencies = current2.dependencies;
            workInProgress2.dependencies = currentDependencies === null ? null : {
              lanes: currentDependencies.lanes,
              firstContext: currentDependencies.firstContext
            };
            {
              workInProgress2.selfBaseDuration = current2.selfBaseDuration;
              workInProgress2.treeBaseDuration = current2.treeBaseDuration;
            }
          }
          return workInProgress2;
        }
        function createHostRootFiber(tag) {
          var mode;
          if (tag === ConcurrentRoot) {
            mode = ConcurrentMode | BlockingMode | StrictMode;
          } else if (tag === BlockingRoot) {
            mode = BlockingMode | StrictMode;
          } else {
            mode = NoMode;
          }
          if (isDevToolsPresent) {
            mode |= ProfileMode;
          }
          return createFiber(HostRoot, null, null, mode);
        }
        function createFiberFromTypeAndProps(type, key, pendingProps, owner, mode, lanes) {
          var fiberTag = IndeterminateComponent;
          var resolvedType = type;
          if (typeof type === "function") {
            if (shouldConstruct$1(type)) {
              fiberTag = ClassComponent;
              {
                resolvedType = resolveClassForHotReloading(resolvedType);
              }
            } else {
              {
                resolvedType = resolveFunctionForHotReloading(resolvedType);
              }
            }
          } else if (typeof type === "string") {
            fiberTag = HostComponent;
          } else {
            getTag:
              switch (type) {
                case REACT_FRAGMENT_TYPE:
                  return createFiberFromFragment(pendingProps.children, mode, lanes, key);
                case REACT_DEBUG_TRACING_MODE_TYPE:
                  fiberTag = Mode;
                  mode |= DebugTracingMode;
                  break;
                case REACT_STRICT_MODE_TYPE:
                  fiberTag = Mode;
                  mode |= StrictMode;
                  break;
                case REACT_PROFILER_TYPE:
                  return createFiberFromProfiler(pendingProps, mode, lanes, key);
                case REACT_SUSPENSE_TYPE:
                  return createFiberFromSuspense(pendingProps, mode, lanes, key);
                case REACT_SUSPENSE_LIST_TYPE:
                  return createFiberFromSuspenseList(pendingProps, mode, lanes, key);
                case REACT_OFFSCREEN_TYPE:
                  return createFiberFromOffscreen(pendingProps, mode, lanes, key);
                case REACT_LEGACY_HIDDEN_TYPE:
                  return createFiberFromLegacyHidden(pendingProps, mode, lanes, key);
                case REACT_SCOPE_TYPE:
                default: {
                  if (typeof type === "object" && type !== null) {
                    switch (type.$$typeof) {
                      case REACT_PROVIDER_TYPE:
                        fiberTag = ContextProvider;
                        break getTag;
                      case REACT_CONTEXT_TYPE:
                        fiberTag = ContextConsumer;
                        break getTag;
                      case REACT_FORWARD_REF_TYPE:
                        fiberTag = ForwardRef;
                        {
                          resolvedType = resolveForwardRefForHotReloading(resolvedType);
                        }
                        break getTag;
                      case REACT_MEMO_TYPE:
                        fiberTag = MemoComponent;
                        break getTag;
                      case REACT_LAZY_TYPE:
                        fiberTag = LazyComponent;
                        resolvedType = null;
                        break getTag;
                      case REACT_BLOCK_TYPE:
                        fiberTag = Block;
                        break getTag;
                    }
                  }
                  var info = "";
                  {
                    if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
                      info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
                    }
                    var ownerName = owner ? getComponentName(owner.type) : null;
                    if (ownerName) {
                      info += "\n\nCheck the render method of `" + ownerName + "`.";
                    }
                  }
                  {
                    {
                      throw Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + (type == null ? type : typeof type) + "." + info);
                    }
                  }
                }
              }
          }
          var fiber = createFiber(fiberTag, pendingProps, key, mode);
          fiber.elementType = type;
          fiber.type = resolvedType;
          fiber.lanes = lanes;
          {
            fiber._debugOwner = owner;
          }
          return fiber;
        }
        function createFiberFromElement(element, mode, lanes) {
          var owner = null;
          {
            owner = element._owner;
          }
          var type = element.type;
          var key = element.key;
          var pendingProps = element.props;
          var fiber = createFiberFromTypeAndProps(type, key, pendingProps, owner, mode, lanes);
          {
            fiber._debugSource = element._source;
            fiber._debugOwner = element._owner;
          }
          return fiber;
        }
        function createFiberFromFragment(elements, mode, lanes, key) {
          var fiber = createFiber(Fragment, elements, key, mode);
          fiber.lanes = lanes;
          return fiber;
        }
        function createFiberFromProfiler(pendingProps, mode, lanes, key) {
          {
            if (typeof pendingProps.id !== "string") {
              error('Profiler must specify an "id" as a prop');
            }
          }
          var fiber = createFiber(Profiler, pendingProps, key, mode | ProfileMode);
          fiber.elementType = REACT_PROFILER_TYPE;
          fiber.type = REACT_PROFILER_TYPE;
          fiber.lanes = lanes;
          {
            fiber.stateNode = {
              effectDuration: 0,
              passiveEffectDuration: 0
            };
          }
          return fiber;
        }
        function createFiberFromSuspense(pendingProps, mode, lanes, key) {
          var fiber = createFiber(SuspenseComponent, pendingProps, key, mode);
          fiber.type = REACT_SUSPENSE_TYPE;
          fiber.elementType = REACT_SUSPENSE_TYPE;
          fiber.lanes = lanes;
          return fiber;
        }
        function createFiberFromSuspenseList(pendingProps, mode, lanes, key) {
          var fiber = createFiber(SuspenseListComponent, pendingProps, key, mode);
          {
            fiber.type = REACT_SUSPENSE_LIST_TYPE;
          }
          fiber.elementType = REACT_SUSPENSE_LIST_TYPE;
          fiber.lanes = lanes;
          return fiber;
        }
        function createFiberFromOffscreen(pendingProps, mode, lanes, key) {
          var fiber = createFiber(OffscreenComponent, pendingProps, key, mode);
          {
            fiber.type = REACT_OFFSCREEN_TYPE;
          }
          fiber.elementType = REACT_OFFSCREEN_TYPE;
          fiber.lanes = lanes;
          return fiber;
        }
        function createFiberFromLegacyHidden(pendingProps, mode, lanes, key) {
          var fiber = createFiber(LegacyHiddenComponent, pendingProps, key, mode);
          {
            fiber.type = REACT_LEGACY_HIDDEN_TYPE;
          }
          fiber.elementType = REACT_LEGACY_HIDDEN_TYPE;
          fiber.lanes = lanes;
          return fiber;
        }
        function createFiberFromText(content, mode, lanes) {
          var fiber = createFiber(HostText, content, null, mode);
          fiber.lanes = lanes;
          return fiber;
        }
        function createFiberFromHostInstanceForDeletion() {
          var fiber = createFiber(HostComponent, null, null, NoMode);
          fiber.elementType = "DELETED";
          fiber.type = "DELETED";
          return fiber;
        }
        function createFiberFromPortal(portal, mode, lanes) {
          var pendingProps = portal.children !== null ? portal.children : [];
          var fiber = createFiber(HostPortal, pendingProps, portal.key, mode);
          fiber.lanes = lanes;
          fiber.stateNode = {
            containerInfo: portal.containerInfo,
            pendingChildren: null,
            implementation: portal.implementation
          };
          return fiber;
        }
        function assignFiberPropertiesInDEV(target, source) {
          if (target === null) {
            target = createFiber(IndeterminateComponent, null, null, NoMode);
          }
          target.tag = source.tag;
          target.key = source.key;
          target.elementType = source.elementType;
          target.type = source.type;
          target.stateNode = source.stateNode;
          target.return = source.return;
          target.child = source.child;
          target.sibling = source.sibling;
          target.index = source.index;
          target.ref = source.ref;
          target.pendingProps = source.pendingProps;
          target.memoizedProps = source.memoizedProps;
          target.updateQueue = source.updateQueue;
          target.memoizedState = source.memoizedState;
          target.dependencies = source.dependencies;
          target.mode = source.mode;
          target.flags = source.flags;
          target.nextEffect = source.nextEffect;
          target.firstEffect = source.firstEffect;
          target.lastEffect = source.lastEffect;
          target.lanes = source.lanes;
          target.childLanes = source.childLanes;
          target.alternate = source.alternate;
          {
            target.actualDuration = source.actualDuration;
            target.actualStartTime = source.actualStartTime;
            target.selfBaseDuration = source.selfBaseDuration;
            target.treeBaseDuration = source.treeBaseDuration;
          }
          target._debugID = source._debugID;
          target._debugSource = source._debugSource;
          target._debugOwner = source._debugOwner;
          target._debugNeedsRemount = source._debugNeedsRemount;
          target._debugHookTypes = source._debugHookTypes;
          return target;
        }
        function FiberRootNode(containerInfo, tag, hydrate2) {
          this.tag = tag;
          this.containerInfo = containerInfo;
          this.pendingChildren = null;
          this.current = null;
          this.pingCache = null;
          this.finishedWork = null;
          this.timeoutHandle = noTimeout;
          this.context = null;
          this.pendingContext = null;
          this.hydrate = hydrate2;
          this.callbackNode = null;
          this.callbackPriority = NoLanePriority;
          this.eventTimes = createLaneMap(NoLanes);
          this.expirationTimes = createLaneMap(NoTimestamp);
          this.pendingLanes = NoLanes;
          this.suspendedLanes = NoLanes;
          this.pingedLanes = NoLanes;
          this.expiredLanes = NoLanes;
          this.mutableReadLanes = NoLanes;
          this.finishedLanes = NoLanes;
          this.entangledLanes = NoLanes;
          this.entanglements = createLaneMap(NoLanes);
          {
            this.mutableSourceEagerHydrationData = null;
          }
          {
            this.interactionThreadID = tracing.unstable_getThreadID();
            this.memoizedInteractions = new Set();
            this.pendingInteractionMap = new Map();
          }
          {
            switch (tag) {
              case BlockingRoot:
                this._debugRootType = "createBlockingRoot()";
                break;
              case ConcurrentRoot:
                this._debugRootType = "createRoot()";
                break;
              case LegacyRoot:
                this._debugRootType = "createLegacyRoot()";
                break;
            }
          }
        }
        function createFiberRoot(containerInfo, tag, hydrate2, hydrationCallbacks) {
          var root2 = new FiberRootNode(containerInfo, tag, hydrate2);
          var uninitializedFiber = createHostRootFiber(tag);
          root2.current = uninitializedFiber;
          uninitializedFiber.stateNode = root2;
          initializeUpdateQueue(uninitializedFiber);
          return root2;
        }
        function registerMutableSourceForHydration(root2, mutableSource) {
          var getVersion = mutableSource._getVersion;
          var version = getVersion(mutableSource._source);
          if (root2.mutableSourceEagerHydrationData == null) {
            root2.mutableSourceEagerHydrationData = [mutableSource, version];
          } else {
            root2.mutableSourceEagerHydrationData.push(mutableSource, version);
          }
        }
        function createPortal(children, containerInfo, implementation) {
          var key = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
          return {
            $$typeof: REACT_PORTAL_TYPE,
            key: key == null ? null : "" + key,
            children,
            containerInfo,
            implementation
          };
        }
        var didWarnAboutNestedUpdates;
        var didWarnAboutFindNodeInStrictMode;
        {
          didWarnAboutNestedUpdates = false;
          didWarnAboutFindNodeInStrictMode = {};
        }
        function getContextForSubtree(parentComponent) {
          if (!parentComponent) {
            return emptyContextObject;
          }
          var fiber = get(parentComponent);
          var parentContext = findCurrentUnmaskedContext(fiber);
          if (fiber.tag === ClassComponent) {
            var Component = fiber.type;
            if (isContextProvider(Component)) {
              return processChildContext(fiber, Component, parentContext);
            }
          }
          return parentContext;
        }
        function findHostInstanceWithWarning(component, methodName) {
          {
            var fiber = get(component);
            if (fiber === void 0) {
              if (typeof component.render === "function") {
                {
                  {
                    throw Error("Unable to find node on an unmounted component.");
                  }
                }
              } else {
                {
                  {
                    throw Error("Argument appears to not be a ReactComponent. Keys: " + Object.keys(component));
                  }
                }
              }
            }
            var hostFiber = findCurrentHostFiber(fiber);
            if (hostFiber === null) {
              return null;
            }
            if (hostFiber.mode & StrictMode) {
              var componentName = getComponentName(fiber.type) || "Component";
              if (!didWarnAboutFindNodeInStrictMode[componentName]) {
                didWarnAboutFindNodeInStrictMode[componentName] = true;
                var previousFiber = current;
                try {
                  setCurrentFiber(hostFiber);
                  if (fiber.mode & StrictMode) {
                    error("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", methodName, methodName, componentName);
                  } else {
                    error("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", methodName, methodName, componentName);
                  }
                } finally {
                  if (previousFiber) {
                    setCurrentFiber(previousFiber);
                  } else {
                    resetCurrentFiber();
                  }
                }
              }
            }
            return hostFiber.stateNode;
          }
        }
        function createContainer(containerInfo, tag, hydrate2, hydrationCallbacks) {
          return createFiberRoot(containerInfo, tag, hydrate2);
        }
        function updateContainer(element, container, parentComponent, callback) {
          {
            onScheduleRoot(container, element);
          }
          var current$1 = container.current;
          var eventTime = requestEventTime();
          {
            if (typeof jest !== "undefined") {
              warnIfUnmockedScheduler(current$1);
              warnIfNotScopedWithMatchingAct(current$1);
            }
          }
          var lane = requestUpdateLane(current$1);
          var context = getContextForSubtree(parentComponent);
          if (container.context === null) {
            container.context = context;
          } else {
            container.pendingContext = context;
          }
          {
            if (isRendering && current !== null && !didWarnAboutNestedUpdates) {
              didWarnAboutNestedUpdates = true;
              error("Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.\n\nCheck the render method of %s.", getComponentName(current.type) || "Unknown");
            }
          }
          var update = createUpdate(eventTime, lane);
          update.payload = {
            element
          };
          callback = callback === void 0 ? null : callback;
          if (callback !== null) {
            {
              if (typeof callback !== "function") {
                error("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", callback);
              }
            }
            update.callback = callback;
          }
          enqueueUpdate(current$1, update);
          scheduleUpdateOnFiber(current$1, lane, eventTime);
          return lane;
        }
        function getPublicRootInstance(container) {
          var containerFiber = container.current;
          if (!containerFiber.child) {
            return null;
          }
          switch (containerFiber.child.tag) {
            case HostComponent:
              return getPublicInstance(containerFiber.child.stateNode);
            default:
              return containerFiber.child.stateNode;
          }
        }
        function markRetryLaneImpl(fiber, retryLane) {
          var suspenseState = fiber.memoizedState;
          if (suspenseState !== null && suspenseState.dehydrated !== null) {
            suspenseState.retryLane = higherPriorityLane(suspenseState.retryLane, retryLane);
          }
        }
        function markRetryLaneIfNotHydrated(fiber, retryLane) {
          markRetryLaneImpl(fiber, retryLane);
          var alternate = fiber.alternate;
          if (alternate) {
            markRetryLaneImpl(alternate, retryLane);
          }
        }
        function attemptUserBlockingHydration$1(fiber) {
          if (fiber.tag !== SuspenseComponent) {
            return;
          }
          var eventTime = requestEventTime();
          var lane = InputDiscreteHydrationLane;
          scheduleUpdateOnFiber(fiber, lane, eventTime);
          markRetryLaneIfNotHydrated(fiber, lane);
        }
        function attemptContinuousHydration$1(fiber) {
          if (fiber.tag !== SuspenseComponent) {
            return;
          }
          var eventTime = requestEventTime();
          var lane = SelectiveHydrationLane;
          scheduleUpdateOnFiber(fiber, lane, eventTime);
          markRetryLaneIfNotHydrated(fiber, lane);
        }
        function attemptHydrationAtCurrentPriority$1(fiber) {
          if (fiber.tag !== SuspenseComponent) {
            return;
          }
          var eventTime = requestEventTime();
          var lane = requestUpdateLane(fiber);
          scheduleUpdateOnFiber(fiber, lane, eventTime);
          markRetryLaneIfNotHydrated(fiber, lane);
        }
        function runWithPriority$2(priority, fn) {
          try {
            setCurrentUpdateLanePriority(priority);
            return fn();
          } finally {
          }
        }
        function findHostInstanceWithNoPortals(fiber) {
          var hostFiber = findCurrentHostFiberWithNoPortals(fiber);
          if (hostFiber === null) {
            return null;
          }
          if (hostFiber.tag === FundamentalComponent) {
            return hostFiber.stateNode.instance;
          }
          return hostFiber.stateNode;
        }
        var shouldSuspendImpl = function(fiber) {
          return false;
        };
        function shouldSuspend(fiber) {
          return shouldSuspendImpl(fiber);
        }
        var overrideHookState = null;
        var overrideHookStateDeletePath = null;
        var overrideHookStateRenamePath = null;
        var overrideProps = null;
        var overridePropsDeletePath = null;
        var overridePropsRenamePath = null;
        var scheduleUpdate = null;
        var setSuspenseHandler = null;
        {
          var copyWithDeleteImpl = function(obj, path, index3) {
            var key = path[index3];
            var updated = Array.isArray(obj) ? obj.slice() : _assign({}, obj);
            if (index3 + 1 === path.length) {
              if (Array.isArray(updated)) {
                updated.splice(key, 1);
              } else {
                delete updated[key];
              }
              return updated;
            }
            updated[key] = copyWithDeleteImpl(obj[key], path, index3 + 1);
            return updated;
          };
          var copyWithDelete = function(obj, path) {
            return copyWithDeleteImpl(obj, path, 0);
          };
          var copyWithRenameImpl = function(obj, oldPath, newPath, index3) {
            var oldKey = oldPath[index3];
            var updated = Array.isArray(obj) ? obj.slice() : _assign({}, obj);
            if (index3 + 1 === oldPath.length) {
              var newKey = newPath[index3];
              updated[newKey] = updated[oldKey];
              if (Array.isArray(updated)) {
                updated.splice(oldKey, 1);
              } else {
                delete updated[oldKey];
              }
            } else {
              updated[oldKey] = copyWithRenameImpl(obj[oldKey], oldPath, newPath, index3 + 1);
            }
            return updated;
          };
          var copyWithRename = function(obj, oldPath, newPath) {
            if (oldPath.length !== newPath.length) {
              warn("copyWithRename() expects paths of the same length");
              return;
            } else {
              for (var i4 = 0; i4 < newPath.length - 1; i4++) {
                if (oldPath[i4] !== newPath[i4]) {
                  warn("copyWithRename() expects paths to be the same except for the deepest key");
                  return;
                }
              }
            }
            return copyWithRenameImpl(obj, oldPath, newPath, 0);
          };
          var copyWithSetImpl = function(obj, path, index3, value) {
            if (index3 >= path.length) {
              return value;
            }
            var key = path[index3];
            var updated = Array.isArray(obj) ? obj.slice() : _assign({}, obj);
            updated[key] = copyWithSetImpl(obj[key], path, index3 + 1, value);
            return updated;
          };
          var copyWithSet = function(obj, path, value) {
            return copyWithSetImpl(obj, path, 0, value);
          };
          var findHook = function(fiber, id) {
            var currentHook2 = fiber.memoizedState;
            while (currentHook2 !== null && id > 0) {
              currentHook2 = currentHook2.next;
              id--;
            }
            return currentHook2;
          };
          overrideHookState = function(fiber, id, path, value) {
            var hook = findHook(fiber, id);
            if (hook !== null) {
              var newState = copyWithSet(hook.memoizedState, path, value);
              hook.memoizedState = newState;
              hook.baseState = newState;
              fiber.memoizedProps = _assign({}, fiber.memoizedProps);
              scheduleUpdateOnFiber(fiber, SyncLane, NoTimestamp);
            }
          };
          overrideHookStateDeletePath = function(fiber, id, path) {
            var hook = findHook(fiber, id);
            if (hook !== null) {
              var newState = copyWithDelete(hook.memoizedState, path);
              hook.memoizedState = newState;
              hook.baseState = newState;
              fiber.memoizedProps = _assign({}, fiber.memoizedProps);
              scheduleUpdateOnFiber(fiber, SyncLane, NoTimestamp);
            }
          };
          overrideHookStateRenamePath = function(fiber, id, oldPath, newPath) {
            var hook = findHook(fiber, id);
            if (hook !== null) {
              var newState = copyWithRename(hook.memoizedState, oldPath, newPath);
              hook.memoizedState = newState;
              hook.baseState = newState;
              fiber.memoizedProps = _assign({}, fiber.memoizedProps);
              scheduleUpdateOnFiber(fiber, SyncLane, NoTimestamp);
            }
          };
          overrideProps = function(fiber, path, value) {
            fiber.pendingProps = copyWithSet(fiber.memoizedProps, path, value);
            if (fiber.alternate) {
              fiber.alternate.pendingProps = fiber.pendingProps;
            }
            scheduleUpdateOnFiber(fiber, SyncLane, NoTimestamp);
          };
          overridePropsDeletePath = function(fiber, path) {
            fiber.pendingProps = copyWithDelete(fiber.memoizedProps, path);
            if (fiber.alternate) {
              fiber.alternate.pendingProps = fiber.pendingProps;
            }
            scheduleUpdateOnFiber(fiber, SyncLane, NoTimestamp);
          };
          overridePropsRenamePath = function(fiber, oldPath, newPath) {
            fiber.pendingProps = copyWithRename(fiber.memoizedProps, oldPath, newPath);
            if (fiber.alternate) {
              fiber.alternate.pendingProps = fiber.pendingProps;
            }
            scheduleUpdateOnFiber(fiber, SyncLane, NoTimestamp);
          };
          scheduleUpdate = function(fiber) {
            scheduleUpdateOnFiber(fiber, SyncLane, NoTimestamp);
          };
          setSuspenseHandler = function(newShouldSuspendImpl) {
            shouldSuspendImpl = newShouldSuspendImpl;
          };
        }
        function findHostInstanceByFiber(fiber) {
          var hostFiber = findCurrentHostFiber(fiber);
          if (hostFiber === null) {
            return null;
          }
          return hostFiber.stateNode;
        }
        function emptyFindFiberByHostInstance(instance) {
          return null;
        }
        function getCurrentFiberForDevTools() {
          return current;
        }
        function injectIntoDevTools(devToolsConfig) {
          var findFiberByHostInstance = devToolsConfig.findFiberByHostInstance;
          var ReactCurrentDispatcher2 = ReactSharedInternals.ReactCurrentDispatcher;
          return injectInternals({
            bundleType: devToolsConfig.bundleType,
            version: devToolsConfig.version,
            rendererPackageName: devToolsConfig.rendererPackageName,
            rendererConfig: devToolsConfig.rendererConfig,
            overrideHookState,
            overrideHookStateDeletePath,
            overrideHookStateRenamePath,
            overrideProps,
            overridePropsDeletePath,
            overridePropsRenamePath,
            setSuspenseHandler,
            scheduleUpdate,
            currentDispatcherRef: ReactCurrentDispatcher2,
            findHostInstanceByFiber,
            findFiberByHostInstance: findFiberByHostInstance || emptyFindFiberByHostInstance,
            findHostInstancesForRefresh,
            scheduleRefresh,
            scheduleRoot,
            setRefreshHandler,
            getCurrentFiber: getCurrentFiberForDevTools
          });
        }
        function ReactDOMRoot(container, options2) {
          this._internalRoot = createRootImpl(container, ConcurrentRoot, options2);
        }
        function ReactDOMBlockingRoot(container, tag, options2) {
          this._internalRoot = createRootImpl(container, tag, options2);
        }
        ReactDOMRoot.prototype.render = ReactDOMBlockingRoot.prototype.render = function(children) {
          var root2 = this._internalRoot;
          {
            if (typeof arguments[1] === "function") {
              error("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
            }
            var container = root2.containerInfo;
            if (container.nodeType !== COMMENT_NODE) {
              var hostInstance = findHostInstanceWithNoPortals(root2.current);
              if (hostInstance) {
                if (hostInstance.parentNode !== container) {
                  error("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
                }
              }
            }
          }
          updateContainer(children, root2, null, null);
        };
        ReactDOMRoot.prototype.unmount = ReactDOMBlockingRoot.prototype.unmount = function() {
          {
            if (typeof arguments[0] === "function") {
              error("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
            }
          }
          var root2 = this._internalRoot;
          var container = root2.containerInfo;
          updateContainer(null, root2, null, function() {
            unmarkContainerAsRoot(container);
          });
        };
        function createRootImpl(container, tag, options2) {
          var hydrate2 = options2 != null && options2.hydrate === true;
          var hydrationCallbacks = options2 != null && options2.hydrationOptions || null;
          var mutableSources = options2 != null && options2.hydrationOptions != null && options2.hydrationOptions.mutableSources || null;
          var root2 = createContainer(container, tag, hydrate2);
          markContainerAsRoot(root2.current, container);
          var containerNodeType = container.nodeType;
          {
            var rootContainerElement = container.nodeType === COMMENT_NODE ? container.parentNode : container;
            listenToAllSupportedEvents(rootContainerElement);
          }
          if (mutableSources) {
            for (var i4 = 0; i4 < mutableSources.length; i4++) {
              var mutableSource = mutableSources[i4];
              registerMutableSourceForHydration(root2, mutableSource);
            }
          }
          return root2;
        }
        function createLegacyRoot(container, options2) {
          return new ReactDOMBlockingRoot(container, LegacyRoot, options2);
        }
        function isValidContainer(node) {
          return !!(node && (node.nodeType === ELEMENT_NODE || node.nodeType === DOCUMENT_NODE || node.nodeType === DOCUMENT_FRAGMENT_NODE || node.nodeType === COMMENT_NODE && node.nodeValue === " react-mount-point-unstable "));
        }
        var ReactCurrentOwner$3 = ReactSharedInternals.ReactCurrentOwner;
        var topLevelUpdateWarnings;
        var warnedAboutHydrateAPI = false;
        {
          topLevelUpdateWarnings = function(container) {
            if (container._reactRootContainer && container.nodeType !== COMMENT_NODE) {
              var hostInstance = findHostInstanceWithNoPortals(container._reactRootContainer._internalRoot.current);
              if (hostInstance) {
                if (hostInstance.parentNode !== container) {
                  error("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
                }
              }
            }
            var isRootRenderedBySomeReact = !!container._reactRootContainer;
            var rootEl = getReactRootElementInContainer(container);
            var hasNonRootReactChild = !!(rootEl && getInstanceFromNode(rootEl));
            if (hasNonRootReactChild && !isRootRenderedBySomeReact) {
              error("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render.");
            }
            if (container.nodeType === ELEMENT_NODE && container.tagName && container.tagName.toUpperCase() === "BODY") {
              error("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
            }
          };
        }
        function getReactRootElementInContainer(container) {
          if (!container) {
            return null;
          }
          if (container.nodeType === DOCUMENT_NODE) {
            return container.documentElement;
          } else {
            return container.firstChild;
          }
        }
        function shouldHydrateDueToLegacyHeuristic(container) {
          var rootElement = getReactRootElementInContainer(container);
          return !!(rootElement && rootElement.nodeType === ELEMENT_NODE && rootElement.hasAttribute(ROOT_ATTRIBUTE_NAME));
        }
        function legacyCreateRootFromDOMContainer(container, forceHydrate) {
          var shouldHydrate = forceHydrate || shouldHydrateDueToLegacyHeuristic(container);
          if (!shouldHydrate) {
            var warned = false;
            var rootSibling;
            while (rootSibling = container.lastChild) {
              {
                if (!warned && rootSibling.nodeType === ELEMENT_NODE && rootSibling.hasAttribute(ROOT_ATTRIBUTE_NAME)) {
                  warned = true;
                  error("render(): Target node has markup rendered by React, but there are unrelated nodes as well. This is most commonly caused by white-space inserted around server-rendered markup.");
                }
              }
              container.removeChild(rootSibling);
            }
          }
          {
            if (shouldHydrate && !forceHydrate && !warnedAboutHydrateAPI) {
              warnedAboutHydrateAPI = true;
              warn("render(): Calling ReactDOM.render() to hydrate server-rendered markup will stop working in React v18. Replace the ReactDOM.render() call with ReactDOM.hydrate() if you want React to attach to the server HTML.");
            }
          }
          return createLegacyRoot(container, shouldHydrate ? {
            hydrate: true
          } : void 0);
        }
        function warnOnInvalidCallback$1(callback, callerName) {
          {
            if (callback !== null && typeof callback !== "function") {
              error("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", callerName, callback);
            }
          }
        }
        function legacyRenderSubtreeIntoContainer(parentComponent, children, container, forceHydrate, callback) {
          {
            topLevelUpdateWarnings(container);
            warnOnInvalidCallback$1(callback === void 0 ? null : callback, "render");
          }
          var root2 = container._reactRootContainer;
          var fiberRoot;
          if (!root2) {
            root2 = container._reactRootContainer = legacyCreateRootFromDOMContainer(container, forceHydrate);
            fiberRoot = root2._internalRoot;
            if (typeof callback === "function") {
              var originalCallback = callback;
              callback = function() {
                var instance = getPublicRootInstance(fiberRoot);
                originalCallback.call(instance);
              };
            }
            unbatchedUpdates(function() {
              updateContainer(children, fiberRoot, parentComponent, callback);
            });
          } else {
            fiberRoot = root2._internalRoot;
            if (typeof callback === "function") {
              var _originalCallback = callback;
              callback = function() {
                var instance = getPublicRootInstance(fiberRoot);
                _originalCallback.call(instance);
              };
            }
            updateContainer(children, fiberRoot, parentComponent, callback);
          }
          return getPublicRootInstance(fiberRoot);
        }
        function findDOMNode(componentOrElement) {
          {
            var owner = ReactCurrentOwner$3.current;
            if (owner !== null && owner.stateNode !== null) {
              var warnedAboutRefsInRender = owner.stateNode._warnedAboutRefsInRender;
              if (!warnedAboutRefsInRender) {
                error("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", getComponentName(owner.type) || "A component");
              }
              owner.stateNode._warnedAboutRefsInRender = true;
            }
          }
          if (componentOrElement == null) {
            return null;
          }
          if (componentOrElement.nodeType === ELEMENT_NODE) {
            return componentOrElement;
          }
          {
            return findHostInstanceWithWarning(componentOrElement, "findDOMNode");
          }
        }
        function hydrate(element, container, callback) {
          if (!isValidContainer(container)) {
            {
              throw Error("Target container is not a DOM element.");
            }
          }
          {
            var isModernRoot = isContainerMarkedAsRoot(container) && container._reactRootContainer === void 0;
            if (isModernRoot) {
              error("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOM.createRoot(). This is not supported. Did you mean to call createRoot(container, {hydrate: true}).render(element)?");
            }
          }
          return legacyRenderSubtreeIntoContainer(null, element, container, true, callback);
        }
        function render(element, container, callback) {
          if (!isValidContainer(container)) {
            {
              throw Error("Target container is not a DOM element.");
            }
          }
          {
            var isModernRoot = isContainerMarkedAsRoot(container) && container._reactRootContainer === void 0;
            if (isModernRoot) {
              error("You are calling ReactDOM.render() on a container that was previously passed to ReactDOM.createRoot(). This is not supported. Did you mean to call root.render(element)?");
            }
          }
          return legacyRenderSubtreeIntoContainer(null, element, container, false, callback);
        }
        function unstable_renderSubtreeIntoContainer(parentComponent, element, containerNode, callback) {
          if (!isValidContainer(containerNode)) {
            {
              throw Error("Target container is not a DOM element.");
            }
          }
          if (!(parentComponent != null && has(parentComponent))) {
            {
              throw Error("parentComponent must be a valid React Component");
            }
          }
          return legacyRenderSubtreeIntoContainer(parentComponent, element, containerNode, false, callback);
        }
        function unmountComponentAtNode(container) {
          if (!isValidContainer(container)) {
            {
              throw Error("unmountComponentAtNode(...): Target container is not a DOM element.");
            }
          }
          {
            var isModernRoot = isContainerMarkedAsRoot(container) && container._reactRootContainer === void 0;
            if (isModernRoot) {
              error("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOM.createRoot(). This is not supported. Did you mean to call root.unmount()?");
            }
          }
          if (container._reactRootContainer) {
            {
              var rootEl = getReactRootElementInContainer(container);
              var renderedByDifferentReact = rootEl && !getInstanceFromNode(rootEl);
              if (renderedByDifferentReact) {
                error("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
              }
            }
            unbatchedUpdates(function() {
              legacyRenderSubtreeIntoContainer(null, null, container, false, function() {
                container._reactRootContainer = null;
                unmarkContainerAsRoot(container);
              });
            });
            return true;
          } else {
            {
              var _rootEl = getReactRootElementInContainer(container);
              var hasNonRootReactChild = !!(_rootEl && getInstanceFromNode(_rootEl));
              var isContainerReactRoot = container.nodeType === ELEMENT_NODE && isValidContainer(container.parentNode) && !!container.parentNode._reactRootContainer;
              if (hasNonRootReactChild) {
                error("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", isContainerReactRoot ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
              }
            }
            return false;
          }
        }
        setAttemptUserBlockingHydration(attemptUserBlockingHydration$1);
        setAttemptContinuousHydration(attemptContinuousHydration$1);
        setAttemptHydrationAtCurrentPriority(attemptHydrationAtCurrentPriority$1);
        setAttemptHydrationAtPriority(runWithPriority$2);
        var didWarnAboutUnstableCreatePortal = false;
        {
          if (typeof Map !== "function" || Map.prototype == null || typeof Map.prototype.forEach !== "function" || typeof Set !== "function" || Set.prototype == null || typeof Set.prototype.clear !== "function" || typeof Set.prototype.forEach !== "function") {
            error("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
          }
        }
        setRestoreImplementation(restoreControlledState$3);
        setBatchingImplementation(batchedUpdates$1, discreteUpdates$1, flushDiscreteUpdates, batchedEventUpdates$1);
        function createPortal$1(children, container) {
          var key = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
          if (!isValidContainer(container)) {
            {
              throw Error("Target container is not a DOM element.");
            }
          }
          return createPortal(children, container, null, key);
        }
        function renderSubtreeIntoContainer(parentComponent, element, containerNode, callback) {
          return unstable_renderSubtreeIntoContainer(parentComponent, element, containerNode, callback);
        }
        function unstable_createPortal(children, container) {
          var key = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
          {
            if (!didWarnAboutUnstableCreatePortal) {
              didWarnAboutUnstableCreatePortal = true;
              warn('The ReactDOM.unstable_createPortal() alias has been deprecated, and will be removed in React 18+. Update your code to use ReactDOM.createPortal() instead. It has the exact same API, but without the "unstable_" prefix.');
            }
          }
          return createPortal$1(children, container, key);
        }
        var Internals = {
          Events: [
            getInstanceFromNode,
            getNodeFromInstance,
            getFiberCurrentPropsFromNode,
            enqueueStateRestore,
            restoreStateIfNeeded,
            flushPassiveEffects,
            IsThisRendererActing
          ]
        };
        var foundDevTools = injectIntoDevTools({
          findFiberByHostInstance: getClosestInstanceFromNode,
          bundleType: 1,
          version: ReactVersion,
          rendererPackageName: "react-dom"
        });
        {
          if (!foundDevTools && canUseDOM && window.top === window.self) {
            if (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1) {
              var protocol = window.location.protocol;
              if (/^(https?|file):$/.test(protocol)) {
                console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (protocol === "file:" ? "\nYou might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq" : ""), "font-weight:bold");
              }
            }
          }
        }
        exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Internals;
        exports.createPortal = createPortal$1;
        exports.findDOMNode = findDOMNode;
        exports.flushSync = flushSync;
        exports.hydrate = hydrate;
        exports.render = render;
        exports.unmountComponentAtNode = unmountComponentAtNode;
        exports.unstable_batchedUpdates = batchedUpdates$1;
        exports.unstable_createPortal = unstable_createPortal;
        exports.unstable_renderSubtreeIntoContainer = renderSubtreeIntoContainer;
        exports.version = ReactVersion;
      })();
    }
  });

  // node_modules/react-dom/index.js
  var require_react_dom = __commonJS((exports, module) => {
    "use strict";
    if (false) {
      checkDCE();
      module.exports = null;
    } else {
      module.exports = require_react_dom_development();
    }
  });

  // node_modules/react-is/cjs/react-is.development.js
  var require_react_is_development = __commonJS((exports) => {
    /** @license React v16.13.1
     * react-is.development.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var hasSymbol = typeof Symbol === "function" && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
        function isValidElementType(type) {
          return typeof type === "string" || typeof type === "function" || type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function typeOf(object) {
          if (typeof object === "object" && object !== null) {
            var $$typeof = object.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;
                switch (type) {
                  case REACT_ASYNC_MODE_TYPE:
                  case REACT_CONCURRENT_MODE_TYPE:
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
            }
          }
          return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
        }
        function isConcurrentMode(object) {
          return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
          return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
          return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
          return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        exports.AsyncMode = AsyncMode;
        exports.ConcurrentMode = ConcurrentMode;
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
      })();
    }
  });

  // node_modules/react-is/index.js
  var require_react_is = __commonJS((exports, module) => {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_is_development();
    }
  });

  // node_modules/shallowequal/index.js
  var require_shallowequal = __commonJS((exports, module) => {
    module.exports = function shallowEqual(objA, objB, compare, compareContext) {
      var ret = compare ? compare.call(compareContext, objA, objB) : void 0;
      if (ret !== void 0) {
        return !!ret;
      }
      if (objA === objB) {
        return true;
      }
      if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
        return false;
      }
      var keysA = Object.keys(objA);
      var keysB = Object.keys(objB);
      if (keysA.length !== keysB.length) {
        return false;
      }
      var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
      for (var idx = 0; idx < keysA.length; idx++) {
        var key = keysA[idx];
        if (!bHasOwnProperty(key)) {
          return false;
        }
        var valueA = objA[key];
        var valueB = objB[key];
        ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;
        if (ret === false || ret === void 0 && valueA !== valueB) {
          return false;
        }
      }
      return true;
    };
  });

  // node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js
  var require_hoist_non_react_statics_cjs = __commonJS((exports, module) => {
    "use strict";
    var reactIs = require_react_is();
    var REACT_STATICS = {
      childContextTypes: true,
      contextType: true,
      contextTypes: true,
      defaultProps: true,
      displayName: true,
      getDefaultProps: true,
      getDerivedStateFromError: true,
      getDerivedStateFromProps: true,
      mixins: true,
      propTypes: true,
      type: true
    };
    var KNOWN_STATICS = {
      name: true,
      length: true,
      prototype: true,
      caller: true,
      callee: true,
      arguments: true,
      arity: true
    };
    var FORWARD_REF_STATICS = {
      $$typeof: true,
      render: true,
      defaultProps: true,
      displayName: true,
      propTypes: true
    };
    var MEMO_STATICS = {
      $$typeof: true,
      compare: true,
      defaultProps: true,
      displayName: true,
      propTypes: true,
      type: true
    };
    var TYPE_STATICS = {};
    TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
    TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
    function getStatics(component) {
      if (reactIs.isMemo(component)) {
        return MEMO_STATICS;
      }
      return TYPE_STATICS[component["$$typeof"]] || REACT_STATICS;
    }
    var defineProperty = Object.defineProperty;
    var getOwnPropertyNames = Object.getOwnPropertyNames;
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var getPrototypeOf = Object.getPrototypeOf;
    var objectPrototype = Object.prototype;
    function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
      if (typeof sourceComponent !== "string") {
        if (objectPrototype) {
          var inheritedComponent = getPrototypeOf(sourceComponent);
          if (inheritedComponent && inheritedComponent !== objectPrototype) {
            hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
          }
        }
        var keys = getOwnPropertyNames(sourceComponent);
        if (getOwnPropertySymbols) {
          keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }
        var targetStatics = getStatics(targetComponent);
        var sourceStatics = getStatics(sourceComponent);
        for (var i4 = 0; i4 < keys.length; ++i4) {
          var key = keys[i4];
          if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
            var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
            try {
              defineProperty(targetComponent, key, descriptor);
            } catch (e3) {
            }
          }
        }
      }
      return targetComponent;
    }
    module.exports = hoistNonReactStatics;
  });

  // node_modules/lodash.pick/index.js
  var require_lodash = __commonJS((exports, module) => {
    var INFINITY = 1 / 0;
    var MAX_SAFE_INTEGER = 9007199254740991;
    var argsTag = "[object Arguments]";
    var funcTag = "[object Function]";
    var genTag = "[object GeneratorFunction]";
    var symbolTag = "[object Symbol]";
    var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    function apply(func, thisArg, args) {
      switch (args.length) {
        case 0:
          return func.call(thisArg);
        case 1:
          return func.call(thisArg, args[0]);
        case 2:
          return func.call(thisArg, args[0], args[1]);
        case 3:
          return func.call(thisArg, args[0], args[1], args[2]);
      }
      return func.apply(thisArg, args);
    }
    function arrayMap(array, iteratee) {
      var index2 = -1, length = array ? array.length : 0, result = Array(length);
      while (++index2 < length) {
        result[index2] = iteratee(array[index2], index2, array);
      }
      return result;
    }
    function arrayPush(array, values) {
      var index2 = -1, length = values.length, offset = array.length;
      while (++index2 < length) {
        array[offset + index2] = values[index2];
      }
      return array;
    }
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var objectToString = objectProto.toString;
    var Symbol2 = root.Symbol;
    var propertyIsEnumerable = objectProto.propertyIsEnumerable;
    var spreadableSymbol = Symbol2 ? Symbol2.isConcatSpreadable : void 0;
    var nativeMax = Math.max;
    function baseFlatten(array, depth, predicate, isStrict, result) {
      var index2 = -1, length = array.length;
      predicate || (predicate = isFlattenable);
      result || (result = []);
      while (++index2 < length) {
        var value = array[index2];
        if (depth > 0 && predicate(value)) {
          if (depth > 1) {
            baseFlatten(value, depth - 1, predicate, isStrict, result);
          } else {
            arrayPush(result, value);
          }
        } else if (!isStrict) {
          result[result.length] = value;
        }
      }
      return result;
    }
    function basePick(object, props) {
      object = Object(object);
      return basePickBy(object, props, function(value, key) {
        return key in object;
      });
    }
    function basePickBy(object, props, predicate) {
      var index2 = -1, length = props.length, result = {};
      while (++index2 < length) {
        var key = props[index2], value = object[key];
        if (predicate(value, key)) {
          result[key] = value;
        }
      }
      return result;
    }
    function baseRest(func, start) {
      start = nativeMax(start === void 0 ? func.length - 1 : start, 0);
      return function() {
        var args = arguments, index2 = -1, length = nativeMax(args.length - start, 0), array = Array(length);
        while (++index2 < length) {
          array[index2] = args[start + index2];
        }
        index2 = -1;
        var otherArgs = Array(start + 1);
        while (++index2 < start) {
          otherArgs[index2] = args[index2];
        }
        otherArgs[start] = array;
        return apply(func, this, otherArgs);
      };
    }
    function isFlattenable(value) {
      return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
    }
    function toKey(value) {
      if (typeof value == "string" || isSymbol(value)) {
        return value;
      }
      var result = value + "";
      return result == "0" && 1 / value == -INFINITY ? "-0" : result;
    }
    function isArguments(value) {
      return isArrayLikeObject(value) && hasOwnProperty.call(value, "callee") && (!propertyIsEnumerable.call(value, "callee") || objectToString.call(value) == argsTag);
    }
    var isArray = Array.isArray;
    function isArrayLike(value) {
      return value != null && isLength(value.length) && !isFunction(value);
    }
    function isArrayLikeObject(value) {
      return isObjectLike(value) && isArrayLike(value);
    }
    function isFunction(value) {
      var tag = isObject(value) ? objectToString.call(value) : "";
      return tag == funcTag || tag == genTag;
    }
    function isLength(value) {
      return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }
    function isObject(value) {
      var type = typeof value;
      return !!value && (type == "object" || type == "function");
    }
    function isObjectLike(value) {
      return !!value && typeof value == "object";
    }
    function isSymbol(value) {
      return typeof value == "symbol" || isObjectLike(value) && objectToString.call(value) == symbolTag;
    }
    var pick2 = baseRest(function(object, props) {
      return object == null ? {} : basePick(object, arrayMap(baseFlatten(props, 1), toKey));
    });
    module.exports = pick2;
  });

  // src/index.tsx
  var import_react_dom = __toModule(require_react_dom());
  var import_react7 = __toModule(require_react());

  // src/entry/App.tsx
  var import_react6 = __toModule(require_react());

  // src/components/Github/index.tsx
  var import_react2 = __toModule(require_react());

  // node_modules/styled-components/dist/styled-components.browser.esm.js
  var import_react_is = __toModule(require_react_is());
  var import_react = __toModule(require_react());
  var import_shallowequal = __toModule(require_shallowequal());

  // node_modules/@emotion/stylis/dist/stylis.browser.esm.js
  function stylis_min(W3) {
    function M3(d3, c3, e3, h3, a3) {
      for (var m = 0, b3 = 0, v3 = 0, n4 = 0, q3, g3, x3 = 0, K2 = 0, k3, u3 = k3 = q3 = 0, l3 = 0, r3 = 0, I3 = 0, t4 = 0, B4 = e3.length, J2 = B4 - 1, y3, f2 = "", p2 = "", F3 = "", G4 = "", C; l3 < B4; ) {
        g3 = e3.charCodeAt(l3);
        l3 === J2 && b3 + n4 + v3 + m !== 0 && (b3 !== 0 && (g3 = b3 === 47 ? 10 : 47), n4 = v3 = m = 0, B4++, J2++);
        if (b3 + n4 + v3 + m === 0) {
          if (l3 === J2 && (0 < r3 && (f2 = f2.replace(N3, "")), 0 < f2.trim().length)) {
            switch (g3) {
              case 32:
              case 9:
              case 59:
              case 13:
              case 10:
                break;
              default:
                f2 += e3.charAt(l3);
            }
            g3 = 59;
          }
          switch (g3) {
            case 123:
              f2 = f2.trim();
              q3 = f2.charCodeAt(0);
              k3 = 1;
              for (t4 = ++l3; l3 < B4; ) {
                switch (g3 = e3.charCodeAt(l3)) {
                  case 123:
                    k3++;
                    break;
                  case 125:
                    k3--;
                    break;
                  case 47:
                    switch (g3 = e3.charCodeAt(l3 + 1)) {
                      case 42:
                      case 47:
                        a: {
                          for (u3 = l3 + 1; u3 < J2; ++u3) {
                            switch (e3.charCodeAt(u3)) {
                              case 47:
                                if (g3 === 42 && e3.charCodeAt(u3 - 1) === 42 && l3 + 2 !== u3) {
                                  l3 = u3 + 1;
                                  break a;
                                }
                                break;
                              case 10:
                                if (g3 === 47) {
                                  l3 = u3 + 1;
                                  break a;
                                }
                            }
                          }
                          l3 = u3;
                        }
                    }
                    break;
                  case 91:
                    g3++;
                  case 40:
                    g3++;
                  case 34:
                  case 39:
                    for (; l3++ < J2 && e3.charCodeAt(l3) !== g3; ) {
                    }
                }
                if (k3 === 0)
                  break;
                l3++;
              }
              k3 = e3.substring(t4, l3);
              q3 === 0 && (q3 = (f2 = f2.replace(ca, "").trim()).charCodeAt(0));
              switch (q3) {
                case 64:
                  0 < r3 && (f2 = f2.replace(N3, ""));
                  g3 = f2.charCodeAt(1);
                  switch (g3) {
                    case 100:
                    case 109:
                    case 115:
                    case 45:
                      r3 = c3;
                      break;
                    default:
                      r3 = O3;
                  }
                  k3 = M3(c3, r3, k3, g3, a3 + 1);
                  t4 = k3.length;
                  0 < A3 && (r3 = X3(O3, f2, I3), C = H3(3, k3, r3, c3, D3, z3, t4, g3, a3, h3), f2 = r3.join(""), C !== void 0 && (t4 = (k3 = C.trim()).length) === 0 && (g3 = 0, k3 = ""));
                  if (0 < t4)
                    switch (g3) {
                      case 115:
                        f2 = f2.replace(da, ea);
                      case 100:
                      case 109:
                      case 45:
                        k3 = f2 + "{" + k3 + "}";
                        break;
                      case 107:
                        f2 = f2.replace(fa, "$1 $2");
                        k3 = f2 + "{" + k3 + "}";
                        k3 = w3 === 1 || w3 === 2 && L3("@" + k3, 3) ? "@-webkit-" + k3 + "@" + k3 : "@" + k3;
                        break;
                      default:
                        k3 = f2 + k3, h3 === 112 && (k3 = (p2 += k3, ""));
                    }
                  else
                    k3 = "";
                  break;
                default:
                  k3 = M3(c3, X3(c3, f2, I3), k3, h3, a3 + 1);
              }
              F3 += k3;
              k3 = I3 = r3 = u3 = q3 = 0;
              f2 = "";
              g3 = e3.charCodeAt(++l3);
              break;
            case 125:
            case 59:
              f2 = (0 < r3 ? f2.replace(N3, "") : f2).trim();
              if (1 < (t4 = f2.length))
                switch (u3 === 0 && (q3 = f2.charCodeAt(0), q3 === 45 || 96 < q3 && 123 > q3) && (t4 = (f2 = f2.replace(" ", ":")).length), 0 < A3 && (C = H3(1, f2, c3, d3, D3, z3, p2.length, h3, a3, h3)) !== void 0 && (t4 = (f2 = C.trim()).length) === 0 && (f2 = "\0\0"), q3 = f2.charCodeAt(0), g3 = f2.charCodeAt(1), q3) {
                  case 0:
                    break;
                  case 64:
                    if (g3 === 105 || g3 === 99) {
                      G4 += f2 + e3.charAt(l3);
                      break;
                    }
                  default:
                    f2.charCodeAt(t4 - 1) !== 58 && (p2 += P3(f2, q3, g3, f2.charCodeAt(2)));
                }
              I3 = r3 = u3 = q3 = 0;
              f2 = "";
              g3 = e3.charCodeAt(++l3);
          }
        }
        switch (g3) {
          case 13:
          case 10:
            b3 === 47 ? b3 = 0 : 1 + q3 === 0 && h3 !== 107 && 0 < f2.length && (r3 = 1, f2 += "\0");
            0 < A3 * Y3 && H3(0, f2, c3, d3, D3, z3, p2.length, h3, a3, h3);
            z3 = 1;
            D3++;
            break;
          case 59:
          case 125:
            if (b3 + n4 + v3 + m === 0) {
              z3++;
              break;
            }
          default:
            z3++;
            y3 = e3.charAt(l3);
            switch (g3) {
              case 9:
              case 32:
                if (n4 + m + b3 === 0)
                  switch (x3) {
                    case 44:
                    case 58:
                    case 9:
                    case 32:
                      y3 = "";
                      break;
                    default:
                      g3 !== 32 && (y3 = " ");
                  }
                break;
              case 0:
                y3 = "\\0";
                break;
              case 12:
                y3 = "\\f";
                break;
              case 11:
                y3 = "\\v";
                break;
              case 38:
                n4 + b3 + m === 0 && (r3 = I3 = 1, y3 = "\f" + y3);
                break;
              case 108:
                if (n4 + b3 + m + E3 === 0 && 0 < u3)
                  switch (l3 - u3) {
                    case 2:
                      x3 === 112 && e3.charCodeAt(l3 - 3) === 58 && (E3 = x3);
                    case 8:
                      K2 === 111 && (E3 = K2);
                  }
                break;
              case 58:
                n4 + b3 + m === 0 && (u3 = l3);
                break;
              case 44:
                b3 + v3 + n4 + m === 0 && (r3 = 1, y3 += "\r");
                break;
              case 34:
              case 39:
                b3 === 0 && (n4 = n4 === g3 ? 0 : n4 === 0 ? g3 : n4);
                break;
              case 91:
                n4 + b3 + v3 === 0 && m++;
                break;
              case 93:
                n4 + b3 + v3 === 0 && m--;
                break;
              case 41:
                n4 + b3 + m === 0 && v3--;
                break;
              case 40:
                if (n4 + b3 + m === 0) {
                  if (q3 === 0)
                    switch (2 * x3 + 3 * K2) {
                      case 533:
                        break;
                      default:
                        q3 = 1;
                    }
                  v3++;
                }
                break;
              case 64:
                b3 + v3 + n4 + m + u3 + k3 === 0 && (k3 = 1);
                break;
              case 42:
              case 47:
                if (!(0 < n4 + m + v3))
                  switch (b3) {
                    case 0:
                      switch (2 * g3 + 3 * e3.charCodeAt(l3 + 1)) {
                        case 235:
                          b3 = 47;
                          break;
                        case 220:
                          t4 = l3, b3 = 42;
                      }
                      break;
                    case 42:
                      g3 === 47 && x3 === 42 && t4 + 2 !== l3 && (e3.charCodeAt(t4 + 2) === 33 && (p2 += e3.substring(t4, l3 + 1)), y3 = "", b3 = 0);
                  }
            }
            b3 === 0 && (f2 += y3);
        }
        K2 = x3;
        x3 = g3;
        l3++;
      }
      t4 = p2.length;
      if (0 < t4) {
        r3 = c3;
        if (0 < A3 && (C = H3(2, p2, r3, d3, D3, z3, t4, h3, a3, h3), C !== void 0 && (p2 = C).length === 0))
          return G4 + p2 + F3;
        p2 = r3.join(",") + "{" + p2 + "}";
        if (w3 * E3 !== 0) {
          w3 !== 2 || L3(p2, 2) || (E3 = 0);
          switch (E3) {
            case 111:
              p2 = p2.replace(ha, ":-moz-$1") + p2;
              break;
            case 112:
              p2 = p2.replace(Q3, "::-webkit-input-$1") + p2.replace(Q3, "::-moz-$1") + p2.replace(Q3, ":-ms-input-$1") + p2;
          }
          E3 = 0;
        }
      }
      return G4 + p2 + F3;
    }
    function X3(d3, c3, e3) {
      var h3 = c3.trim().split(ia);
      c3 = h3;
      var a3 = h3.length, m = d3.length;
      switch (m) {
        case 0:
        case 1:
          var b3 = 0;
          for (d3 = m === 0 ? "" : d3[0] + " "; b3 < a3; ++b3) {
            c3[b3] = Z3(d3, c3[b3], e3).trim();
          }
          break;
        default:
          var v3 = b3 = 0;
          for (c3 = []; b3 < a3; ++b3) {
            for (var n4 = 0; n4 < m; ++n4) {
              c3[v3++] = Z3(d3[n4] + " ", h3[b3], e3).trim();
            }
          }
      }
      return c3;
    }
    function Z3(d3, c3, e3) {
      var h3 = c3.charCodeAt(0);
      33 > h3 && (h3 = (c3 = c3.trim()).charCodeAt(0));
      switch (h3) {
        case 38:
          return c3.replace(F2, "$1" + d3.trim());
        case 58:
          return d3.trim() + c3.replace(F2, "$1" + d3.trim());
        default:
          if (0 < 1 * e3 && 0 < c3.indexOf("\f"))
            return c3.replace(F2, (d3.charCodeAt(0) === 58 ? "" : "$1") + d3.trim());
      }
      return d3 + c3;
    }
    function P3(d3, c3, e3, h3) {
      var a3 = d3 + ";", m = 2 * c3 + 3 * e3 + 4 * h3;
      if (m === 944) {
        d3 = a3.indexOf(":", 9) + 1;
        var b3 = a3.substring(d3, a3.length - 1).trim();
        b3 = a3.substring(0, d3).trim() + b3 + ";";
        return w3 === 1 || w3 === 2 && L3(b3, 1) ? "-webkit-" + b3 + b3 : b3;
      }
      if (w3 === 0 || w3 === 2 && !L3(a3, 1))
        return a3;
      switch (m) {
        case 1015:
          return a3.charCodeAt(10) === 97 ? "-webkit-" + a3 + a3 : a3;
        case 951:
          return a3.charCodeAt(3) === 116 ? "-webkit-" + a3 + a3 : a3;
        case 963:
          return a3.charCodeAt(5) === 110 ? "-webkit-" + a3 + a3 : a3;
        case 1009:
          if (a3.charCodeAt(4) !== 100)
            break;
        case 969:
        case 942:
          return "-webkit-" + a3 + a3;
        case 978:
          return "-webkit-" + a3 + "-moz-" + a3 + a3;
        case 1019:
        case 983:
          return "-webkit-" + a3 + "-moz-" + a3 + "-ms-" + a3 + a3;
        case 883:
          if (a3.charCodeAt(8) === 45)
            return "-webkit-" + a3 + a3;
          if (0 < a3.indexOf("image-set(", 11))
            return a3.replace(ja, "$1-webkit-$2") + a3;
          break;
        case 932:
          if (a3.charCodeAt(4) === 45)
            switch (a3.charCodeAt(5)) {
              case 103:
                return "-webkit-box-" + a3.replace("-grow", "") + "-webkit-" + a3 + "-ms-" + a3.replace("grow", "positive") + a3;
              case 115:
                return "-webkit-" + a3 + "-ms-" + a3.replace("shrink", "negative") + a3;
              case 98:
                return "-webkit-" + a3 + "-ms-" + a3.replace("basis", "preferred-size") + a3;
            }
          return "-webkit-" + a3 + "-ms-" + a3 + a3;
        case 964:
          return "-webkit-" + a3 + "-ms-flex-" + a3 + a3;
        case 1023:
          if (a3.charCodeAt(8) !== 99)
            break;
          b3 = a3.substring(a3.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify");
          return "-webkit-box-pack" + b3 + "-webkit-" + a3 + "-ms-flex-pack" + b3 + a3;
        case 1005:
          return ka.test(a3) ? a3.replace(aa, ":-webkit-") + a3.replace(aa, ":-moz-") + a3 : a3;
        case 1e3:
          b3 = a3.substring(13).trim();
          c3 = b3.indexOf("-") + 1;
          switch (b3.charCodeAt(0) + b3.charCodeAt(c3)) {
            case 226:
              b3 = a3.replace(G3, "tb");
              break;
            case 232:
              b3 = a3.replace(G3, "tb-rl");
              break;
            case 220:
              b3 = a3.replace(G3, "lr");
              break;
            default:
              return a3;
          }
          return "-webkit-" + a3 + "-ms-" + b3 + a3;
        case 1017:
          if (a3.indexOf("sticky", 9) === -1)
            break;
        case 975:
          c3 = (a3 = d3).length - 10;
          b3 = (a3.charCodeAt(c3) === 33 ? a3.substring(0, c3) : a3).substring(d3.indexOf(":", 7) + 1).trim();
          switch (m = b3.charCodeAt(0) + (b3.charCodeAt(7) | 0)) {
            case 203:
              if (111 > b3.charCodeAt(8))
                break;
            case 115:
              a3 = a3.replace(b3, "-webkit-" + b3) + ";" + a3;
              break;
            case 207:
            case 102:
              a3 = a3.replace(b3, "-webkit-" + (102 < m ? "inline-" : "") + "box") + ";" + a3.replace(b3, "-webkit-" + b3) + ";" + a3.replace(b3, "-ms-" + b3 + "box") + ";" + a3;
          }
          return a3 + ";";
        case 938:
          if (a3.charCodeAt(5) === 45)
            switch (a3.charCodeAt(6)) {
              case 105:
                return b3 = a3.replace("-items", ""), "-webkit-" + a3 + "-webkit-box-" + b3 + "-ms-flex-" + b3 + a3;
              case 115:
                return "-webkit-" + a3 + "-ms-flex-item-" + a3.replace(ba, "") + a3;
              default:
                return "-webkit-" + a3 + "-ms-flex-line-pack" + a3.replace("align-content", "").replace(ba, "") + a3;
            }
          break;
        case 973:
        case 989:
          if (a3.charCodeAt(3) !== 45 || a3.charCodeAt(4) === 122)
            break;
        case 931:
        case 953:
          if (la.test(d3) === true)
            return (b3 = d3.substring(d3.indexOf(":") + 1)).charCodeAt(0) === 115 ? P3(d3.replace("stretch", "fill-available"), c3, e3, h3).replace(":fill-available", ":stretch") : a3.replace(b3, "-webkit-" + b3) + a3.replace(b3, "-moz-" + b3.replace("fill-", "")) + a3;
          break;
        case 962:
          if (a3 = "-webkit-" + a3 + (a3.charCodeAt(5) === 102 ? "-ms-" + a3 : "") + a3, e3 + h3 === 211 && a3.charCodeAt(13) === 105 && 0 < a3.indexOf("transform", 10))
            return a3.substring(0, a3.indexOf(";", 27) + 1).replace(ma, "$1-webkit-$2") + a3;
      }
      return a3;
    }
    function L3(d3, c3) {
      var e3 = d3.indexOf(c3 === 1 ? ":" : "{"), h3 = d3.substring(0, c3 !== 3 ? e3 : 10);
      e3 = d3.substring(e3 + 1, d3.length - 1);
      return R3(c3 !== 2 ? h3 : h3.replace(na, "$1"), e3, c3);
    }
    function ea(d3, c3) {
      var e3 = P3(c3, c3.charCodeAt(0), c3.charCodeAt(1), c3.charCodeAt(2));
      return e3 !== c3 + ";" ? e3.replace(oa, " or ($1)").substring(4) : "(" + c3 + ")";
    }
    function H3(d3, c3, e3, h3, a3, m, b3, v3, n4, q3) {
      for (var g3 = 0, x3 = c3, w4; g3 < A3; ++g3) {
        switch (w4 = S3[g3].call(B3, d3, x3, e3, h3, a3, m, b3, v3, n4, q3)) {
          case void 0:
          case false:
          case true:
          case null:
            break;
          default:
            x3 = w4;
        }
      }
      if (x3 !== c3)
        return x3;
    }
    function T2(d3) {
      switch (d3) {
        case void 0:
        case null:
          A3 = S3.length = 0;
          break;
        default:
          if (typeof d3 === "function")
            S3[A3++] = d3;
          else if (typeof d3 === "object")
            for (var c3 = 0, e3 = d3.length; c3 < e3; ++c3) {
              T2(d3[c3]);
            }
          else
            Y3 = !!d3 | 0;
      }
      return T2;
    }
    function U3(d3) {
      d3 = d3.prefix;
      d3 !== void 0 && (R3 = null, d3 ? typeof d3 !== "function" ? w3 = 1 : (w3 = 2, R3 = d3) : w3 = 0);
      return U3;
    }
    function B3(d3, c3) {
      var e3 = d3;
      33 > e3.charCodeAt(0) && (e3 = e3.trim());
      V3 = e3;
      e3 = [V3];
      if (0 < A3) {
        var h3 = H3(-1, c3, e3, e3, D3, z3, 0, 0, 0, 0);
        h3 !== void 0 && typeof h3 === "string" && (c3 = h3);
      }
      var a3 = M3(O3, e3, c3, 0, 0);
      0 < A3 && (h3 = H3(-2, a3, e3, e3, D3, z3, a3.length, 0, 0, 0), h3 !== void 0 && (a3 = h3));
      V3 = "";
      E3 = 0;
      z3 = D3 = 1;
      return a3;
    }
    var ca = /^\0+/g, N3 = /[\0\r\f]/g, aa = /: */g, ka = /zoo|gra/, ma = /([,: ])(transform)/g, ia = /,\r+?/g, F2 = /([\t\r\n ])*\f?&/g, fa = /@(k\w+)\s*(\S*)\s*/, Q3 = /::(place)/g, ha = /:(read-only)/g, G3 = /[svh]\w+-[tblr]{2}/, da = /\(\s*(.*)\s*\)/g, oa = /([\s\S]*?);/g, ba = /-self|flex-/g, na = /[^]*?(:[rp][el]a[\w-]+)[^]*/, la = /stretch|:\s*\w+\-(?:conte|avail)/, ja = /([^-])(image-set\()/, z3 = 1, D3 = 1, E3 = 0, w3 = 1, O3 = [], S3 = [], A3 = 0, R3 = null, Y3 = 0, V3 = "";
    B3.use = T2;
    B3.set = U3;
    W3 !== void 0 && U3(W3);
    return B3;
  }
  var stylis_browser_esm_default = stylis_min;

  // node_modules/@emotion/unitless/dist/unitless.browser.esm.js
  var unitlessKeys = {
    animationIterationCount: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1
  };
  var unitless_browser_esm_default = unitlessKeys;

  // node_modules/@emotion/memoize/dist/memoize.browser.esm.js
  function memoize(fn) {
    var cache = {};
    return function(arg) {
      if (cache[arg] === void 0)
        cache[arg] = fn(arg);
      return cache[arg];
    };
  }
  var memoize_browser_esm_default = memoize;

  // node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js
  var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
  var index = memoize_browser_esm_default(function(prop) {
    return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111 && prop.charCodeAt(1) === 110 && prop.charCodeAt(2) < 91;
  });
  var is_prop_valid_browser_esm_default = index;

  // node_modules/styled-components/dist/styled-components.browser.esm.js
  var import_hoist_non_react_statics = __toModule(require_hoist_non_react_statics_cjs());
  function v() {
    return (v = Object.assign || function(e3) {
      for (var t4 = 1; t4 < arguments.length; t4++) {
        var n4 = arguments[t4];
        for (var r3 in n4)
          Object.prototype.hasOwnProperty.call(n4, r3) && (e3[r3] = n4[r3]);
      }
      return e3;
    }).apply(this, arguments);
  }
  var g = function(e3, t4) {
    for (var n4 = [e3[0]], r3 = 0, o4 = t4.length; r3 < o4; r3 += 1)
      n4.push(t4[r3], e3[r3 + 1]);
    return n4;
  };
  var S = function(t4) {
    return t4 !== null && typeof t4 == "object" && (t4.toString ? t4.toString() : Object.prototype.toString.call(t4)) === "[object Object]" && !import_react_is.typeOf(t4);
  };
  var w = Object.freeze([]);
  var E = Object.freeze({});
  function b(e3) {
    return typeof e3 == "function";
  }
  function _(e3) {
    return typeof e3 == "string" && e3 || e3.displayName || e3.name || "Component";
  }
  function N(e3) {
    return e3 && typeof e3.styledComponentId == "string";
  }
  var A = typeof process != "undefined" && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled";
  var I = typeof window != "undefined" && "HTMLElement" in window;
  var P = Boolean(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process != "undefined" && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process != "undefined" && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : true);
  var O = {};
  var R = true ? {1: "Cannot create styled-component for component: %s.\n\n", 2: "Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n", 3: "Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n", 4: "The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n", 5: "The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n", 6: "Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n", 7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', 8: 'ThemeProvider: Please make your "theme" prop an object.\n\n', 9: "Missing document `<head>`\n\n", 10: "Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n", 11: "_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n", 12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", 13: "%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n\n", 14: 'ThemeProvider: "theme" prop is required.\n\n', 15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", 16: "Reached the limit of how many styled components may be created at group %s.\nYou may only create up to 1,073,741,824 components. If you're creating components dynamically,\nas for instance in your render method then you may be running into this limitation.\n\n", 17: "CSSStyleSheet could not be found on HTMLStyleElement.\nHas styled-components' style tag been unmounted or altered by another script?\n"} : {};
  function D() {
    for (var e3 = arguments.length <= 0 ? void 0 : arguments[0], t4 = [], n4 = 1, r3 = arguments.length; n4 < r3; n4 += 1)
      t4.push(n4 < 0 || arguments.length <= n4 ? void 0 : arguments[n4]);
    return t4.forEach(function(t5) {
      e3 = e3.replace(/%[a-z]/, t5);
    }), e3;
  }
  function j(e3) {
    for (var t4 = arguments.length, n4 = new Array(t4 > 1 ? t4 - 1 : 0), r3 = 1; r3 < t4; r3++)
      n4[r3 - 1] = arguments[r3];
    throw false ? new Error("An error occurred. See https://git.io/JUIaE#" + e3 + " for more information." + (n4.length > 0 ? " Args: " + n4.join(", ") : "")) : new Error(D.apply(void 0, [R[e3]].concat(n4)).trim());
  }
  var T = function() {
    function e3(e4) {
      this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = e4;
    }
    var t4 = e3.prototype;
    return t4.indexOfGroup = function(e4) {
      for (var t5 = 0, n4 = 0; n4 < e4; n4++)
        t5 += this.groupSizes[n4];
      return t5;
    }, t4.insertRules = function(e4, t5) {
      if (e4 >= this.groupSizes.length) {
        for (var n4 = this.groupSizes, r3 = n4.length, o4 = r3; e4 >= o4; )
          (o4 <<= 1) < 0 && j(16, "" + e4);
        this.groupSizes = new Uint32Array(o4), this.groupSizes.set(n4), this.length = o4;
        for (var s3 = r3; s3 < o4; s3++)
          this.groupSizes[s3] = 0;
      }
      for (var i4 = this.indexOfGroup(e4 + 1), a3 = 0, c3 = t5.length; a3 < c3; a3++)
        this.tag.insertRule(i4, t5[a3]) && (this.groupSizes[e4]++, i4++);
    }, t4.clearGroup = function(e4) {
      if (e4 < this.length) {
        var t5 = this.groupSizes[e4], n4 = this.indexOfGroup(e4), r3 = n4 + t5;
        this.groupSizes[e4] = 0;
        for (var o4 = n4; o4 < r3; o4++)
          this.tag.deleteRule(n4);
      }
    }, t4.getGroup = function(e4) {
      var t5 = "";
      if (e4 >= this.length || this.groupSizes[e4] === 0)
        return t5;
      for (var n4 = this.groupSizes[e4], r3 = this.indexOfGroup(e4), o4 = r3 + n4, s3 = r3; s3 < o4; s3++)
        t5 += this.tag.getRule(s3) + "/*!sc*/\n";
      return t5;
    }, e3;
  }();
  var k = new Map();
  var x = new Map();
  var V = 1;
  var B = function(e3) {
    if (k.has(e3))
      return k.get(e3);
    for (; x.has(V); )
      V++;
    var t4 = V++;
    return ((0 | t4) < 0 || t4 > 1 << 30) && j(16, "" + t4), k.set(e3, t4), x.set(t4, e3), t4;
  };
  var M = function(e3) {
    return x.get(e3);
  };
  var z = function(e3, t4) {
    k.set(e3, t4), x.set(t4, e3);
  };
  var L = "style[" + A + '][data-styled-version="5.2.1"]';
  var G = new RegExp("^" + A + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)');
  var F = function(e3, t4, n4) {
    for (var r3, o4 = n4.split(","), s3 = 0, i4 = o4.length; s3 < i4; s3++)
      (r3 = o4[s3]) && e3.registerName(t4, r3);
  };
  var Y = function(e3, t4) {
    for (var n4 = t4.innerHTML.split("/*!sc*/\n"), r3 = [], o4 = 0, s3 = n4.length; o4 < s3; o4++) {
      var i4 = n4[o4].trim();
      if (i4) {
        var a3 = i4.match(G);
        if (a3) {
          var c3 = 0 | parseInt(a3[1], 10), u3 = a3[2];
          c3 !== 0 && (z(u3, c3), F(e3, u3, a3[3]), e3.getTag().insertRules(c3, r3)), r3.length = 0;
        } else
          r3.push(i4);
      }
    }
  };
  var q = function() {
    return typeof __webpack_nonce__ != "undefined" ? __webpack_nonce__ : null;
  };
  var H = function(e3) {
    var t4 = document.head, n4 = e3 || t4, r3 = document.createElement("style"), o4 = function(e4) {
      for (var t5 = e4.childNodes, n5 = t5.length; n5 >= 0; n5--) {
        var r4 = t5[n5];
        if (r4 && r4.nodeType === 1 && r4.hasAttribute(A))
          return r4;
      }
    }(n4), s3 = o4 !== void 0 ? o4.nextSibling : null;
    r3.setAttribute(A, "active"), r3.setAttribute("data-styled-version", "5.2.1");
    var i4 = q();
    return i4 && r3.setAttribute("nonce", i4), n4.insertBefore(r3, s3), r3;
  };
  var $ = function() {
    function e3(e4) {
      var t5 = this.element = H(e4);
      t5.appendChild(document.createTextNode("")), this.sheet = function(e5) {
        if (e5.sheet)
          return e5.sheet;
        for (var t6 = document.styleSheets, n4 = 0, r3 = t6.length; n4 < r3; n4++) {
          var o4 = t6[n4];
          if (o4.ownerNode === e5)
            return o4;
        }
        j(17);
      }(t5), this.length = 0;
    }
    var t4 = e3.prototype;
    return t4.insertRule = function(e4, t5) {
      try {
        return this.sheet.insertRule(t5, e4), this.length++, true;
      } catch (e5) {
        return false;
      }
    }, t4.deleteRule = function(e4) {
      this.sheet.deleteRule(e4), this.length--;
    }, t4.getRule = function(e4) {
      var t5 = this.sheet.cssRules[e4];
      return t5 !== void 0 && typeof t5.cssText == "string" ? t5.cssText : "";
    }, e3;
  }();
  var W = function() {
    function e3(e4) {
      var t5 = this.element = H(e4);
      this.nodes = t5.childNodes, this.length = 0;
    }
    var t4 = e3.prototype;
    return t4.insertRule = function(e4, t5) {
      if (e4 <= this.length && e4 >= 0) {
        var n4 = document.createTextNode(t5), r3 = this.nodes[e4];
        return this.element.insertBefore(n4, r3 || null), this.length++, true;
      }
      return false;
    }, t4.deleteRule = function(e4) {
      this.element.removeChild(this.nodes[e4]), this.length--;
    }, t4.getRule = function(e4) {
      return e4 < this.length ? this.nodes[e4].textContent : "";
    }, e3;
  }();
  var U = function() {
    function e3(e4) {
      this.rules = [], this.length = 0;
    }
    var t4 = e3.prototype;
    return t4.insertRule = function(e4, t5) {
      return e4 <= this.length && (this.rules.splice(e4, 0, t5), this.length++, true);
    }, t4.deleteRule = function(e4) {
      this.rules.splice(e4, 1), this.length--;
    }, t4.getRule = function(e4) {
      return e4 < this.length ? this.rules[e4] : "";
    }, e3;
  }();
  var J = I;
  var X = {isServer: !I, useCSSOMInjection: !P};
  var Z = function() {
    function e3(e4, t5, n4) {
      e4 === void 0 && (e4 = E), t5 === void 0 && (t5 = {}), this.options = v({}, X, {}, e4), this.gs = t5, this.names = new Map(n4), !this.options.isServer && I && J && (J = false, function(e5) {
        for (var t6 = document.querySelectorAll(L), n5 = 0, r3 = t6.length; n5 < r3; n5++) {
          var o4 = t6[n5];
          o4 && o4.getAttribute(A) !== "active" && (Y(e5, o4), o4.parentNode && o4.parentNode.removeChild(o4));
        }
      }(this));
    }
    e3.registerId = function(e4) {
      return B(e4);
    };
    var t4 = e3.prototype;
    return t4.reconstructWithOptions = function(t5, n4) {
      return n4 === void 0 && (n4 = true), new e3(v({}, this.options, {}, t5), this.gs, n4 && this.names || void 0);
    }, t4.allocateGSInstance = function(e4) {
      return this.gs[e4] = (this.gs[e4] || 0) + 1;
    }, t4.getTag = function() {
      return this.tag || (this.tag = (n4 = (t5 = this.options).isServer, r3 = t5.useCSSOMInjection, o4 = t5.target, e4 = n4 ? new U(o4) : r3 ? new $(o4) : new W(o4), new T(e4)));
      var e4, t5, n4, r3, o4;
    }, t4.hasNameForId = function(e4, t5) {
      return this.names.has(e4) && this.names.get(e4).has(t5);
    }, t4.registerName = function(e4, t5) {
      if (B(e4), this.names.has(e4))
        this.names.get(e4).add(t5);
      else {
        var n4 = new Set();
        n4.add(t5), this.names.set(e4, n4);
      }
    }, t4.insertRules = function(e4, t5, n4) {
      this.registerName(e4, t5), this.getTag().insertRules(B(e4), n4);
    }, t4.clearNames = function(e4) {
      this.names.has(e4) && this.names.get(e4).clear();
    }, t4.clearRules = function(e4) {
      this.getTag().clearGroup(B(e4)), this.clearNames(e4);
    }, t4.clearTag = function() {
      this.tag = void 0;
    }, t4.toString = function() {
      return function(e4) {
        for (var t5 = e4.getTag(), n4 = t5.length, r3 = "", o4 = 0; o4 < n4; o4++) {
          var s3 = M(o4);
          if (s3 !== void 0) {
            var i4 = e4.names.get(s3), a3 = t5.getGroup(o4);
            if (i4 !== void 0 && a3.length !== 0) {
              var c3 = A + ".g" + o4 + '[id="' + s3 + '"]', u3 = "";
              i4 !== void 0 && i4.forEach(function(e5) {
                e5.length > 0 && (u3 += e5 + ",");
              }), r3 += "" + a3 + c3 + '{content:"' + u3 + '"}/*!sc*/\n';
            }
          }
        }
        return r3;
      }(this);
    }, e3;
  }();
  var K = /(a)(d)/gi;
  var Q = function(e3) {
    return String.fromCharCode(e3 + (e3 > 25 ? 39 : 97));
  };
  function ee(e3) {
    var t4, n4 = "";
    for (t4 = Math.abs(e3); t4 > 52; t4 = t4 / 52 | 0)
      n4 = Q(t4 % 52) + n4;
    return (Q(t4 % 52) + n4).replace(K, "$1-$2");
  }
  var te = function(e3, t4) {
    for (var n4 = t4.length; n4; )
      e3 = 33 * e3 ^ t4.charCodeAt(--n4);
    return e3;
  };
  var ne = function(e3) {
    return te(5381, e3);
  };
  function re(e3) {
    for (var t4 = 0; t4 < e3.length; t4 += 1) {
      var n4 = e3[t4];
      if (b(n4) && !N(n4))
        return false;
    }
    return true;
  }
  var oe = ne("5.2.1");
  var se = function() {
    function e3(e4, t4, n4) {
      this.rules = e4, this.staticRulesId = "", this.isStatic = false, this.componentId = t4, this.baseHash = te(oe, t4), this.baseStyle = n4, Z.registerId(t4);
    }
    return e3.prototype.generateAndInjectStyles = function(e4, t4, n4) {
      var r3 = this.componentId, o4 = [];
      if (this.baseStyle && o4.push(this.baseStyle.generateAndInjectStyles(e4, t4, n4)), this.isStatic && !n4.hash)
        if (this.staticRulesId && t4.hasNameForId(r3, this.staticRulesId))
          o4.push(this.staticRulesId);
        else {
          var s3 = Ne(this.rules, e4, t4, n4).join(""), i4 = ee(te(this.baseHash, s3.length) >>> 0);
          if (!t4.hasNameForId(r3, i4)) {
            var a3 = n4(s3, "." + i4, void 0, r3);
            t4.insertRules(r3, i4, a3);
          }
          o4.push(i4), this.staticRulesId = i4;
        }
      else {
        for (var c3 = this.rules.length, u3 = te(this.baseHash, n4.hash), l3 = "", d3 = 0; d3 < c3; d3++) {
          var h3 = this.rules[d3];
          if (typeof h3 == "string")
            l3 += h3, u3 = te(u3, h3 + d3);
          else if (h3) {
            var p2 = Ne(h3, e4, t4, n4), f2 = Array.isArray(p2) ? p2.join("") : p2;
            u3 = te(u3, f2 + d3), l3 += f2;
          }
        }
        if (l3) {
          var m = ee(u3 >>> 0);
          if (!t4.hasNameForId(r3, m)) {
            var y3 = n4(l3, "." + m, void 0, r3);
            t4.insertRules(r3, m, y3);
          }
          o4.push(m);
        }
      }
      return o4.join(" ");
    }, e3;
  }();
  var ie = /^\s*\/\/.*$/gm;
  var ae = [":", "[", ".", "#"];
  function ce(e3) {
    var t4, n4, r3, o4, s3 = e3 === void 0 ? E : e3, i4 = s3.options, a3 = i4 === void 0 ? E : i4, c3 = s3.plugins, u3 = c3 === void 0 ? w : c3, l3 = new stylis_browser_esm_default(a3), d3 = [], h3 = function(e4) {
      function t5(t6) {
        if (t6)
          try {
            e4(t6 + "}");
          } catch (e5) {
          }
      }
      return function(n5, r4, o5, s4, i5, a4, c4, u4, l4, d4) {
        switch (n5) {
          case 1:
            if (l4 === 0 && r4.charCodeAt(0) === 64)
              return e4(r4 + ";"), "";
            break;
          case 2:
            if (u4 === 0)
              return r4 + "/*|*/";
            break;
          case 3:
            switch (u4) {
              case 102:
              case 112:
                return e4(o5[0] + r4), "";
              default:
                return r4 + (d4 === 0 ? "/*|*/" : "");
            }
          case -2:
            r4.split("/*|*/}").forEach(t5);
        }
      };
    }(function(e4) {
      d3.push(e4);
    }), f2 = function(e4, r4, s4) {
      return r4 === 0 && ae.includes(s4[n4.length]) || s4.match(o4) ? e4 : "." + t4;
    };
    function m(e4, s4, i5, a4) {
      a4 === void 0 && (a4 = "&");
      var c4 = e4.replace(ie, ""), u4 = s4 && i5 ? i5 + " " + s4 + " { " + c4 + " }" : c4;
      return t4 = a4, n4 = s4, r3 = new RegExp("\\" + n4 + "\\b", "g"), o4 = new RegExp("(\\" + n4 + "\\b){2,}"), l3(i5 || !s4 ? "" : s4, u4);
    }
    return l3.use([].concat(u3, [function(e4, t5, o5) {
      e4 === 2 && o5.length && o5[0].lastIndexOf(n4) > 0 && (o5[0] = o5[0].replace(r3, f2));
    }, h3, function(e4) {
      if (e4 === -2) {
        var t5 = d3;
        return d3 = [], t5;
      }
    }])), m.hash = u3.length ? u3.reduce(function(e4, t5) {
      return t5.name || j(15), te(e4, t5.name);
    }, 5381).toString() : "", m;
  }
  var ue = import_react.default.createContext();
  var le = ue.Consumer;
  var de = import_react.default.createContext();
  var he = (de.Consumer, new Z());
  var pe = ce();
  function fe() {
    return import_react.useContext(ue) || he;
  }
  function me() {
    return import_react.useContext(de) || pe;
  }
  function ye(e3) {
    var t4 = import_react.useState(e3.stylisPlugins), n4 = t4[0], s3 = t4[1], c3 = fe(), u3 = import_react.useMemo(function() {
      var t5 = c3;
      return e3.sheet ? t5 = e3.sheet : e3.target && (t5 = t5.reconstructWithOptions({target: e3.target}, false)), e3.disableCSSOMInjection && (t5 = t5.reconstructWithOptions({useCSSOMInjection: false})), t5;
    }, [e3.disableCSSOMInjection, e3.sheet, e3.target]), l3 = import_react.useMemo(function() {
      return ce({options: {prefix: !e3.disableVendorPrefixes}, plugins: n4});
    }, [e3.disableVendorPrefixes, n4]);
    return import_react.useEffect(function() {
      import_shallowequal.default(n4, e3.stylisPlugins) || s3(e3.stylisPlugins);
    }, [e3.stylisPlugins]), import_react.default.createElement(ue.Provider, {value: u3}, import_react.default.createElement(de.Provider, {value: l3}, true ? import_react.default.Children.only(e3.children) : e3.children));
  }
  var ve = function() {
    function e3(e4, t4) {
      var n4 = this;
      this.inject = function(e5, t5) {
        t5 === void 0 && (t5 = pe);
        var r3 = n4.name + t5.hash;
        e5.hasNameForId(n4.id, r3) || e5.insertRules(n4.id, r3, t5(n4.rules, r3, "@keyframes"));
      }, this.toString = function() {
        return j(12, String(n4.name));
      }, this.name = e4, this.id = "sc-keyframes-" + e4, this.rules = t4;
    }
    return e3.prototype.getName = function(e4) {
      return e4 === void 0 && (e4 = pe), this.name + e4.hash;
    }, e3;
  }();
  var ge = /([A-Z])/;
  var Se = /([A-Z])/g;
  var we = /^ms-/;
  var Ee = function(e3) {
    return "-" + e3.toLowerCase();
  };
  function be(e3) {
    return ge.test(e3) ? e3.replace(Se, Ee).replace(we, "-ms-") : e3;
  }
  var _e = function(e3) {
    return e3 == null || e3 === false || e3 === "";
  };
  function Ne(e3, n4, r3, o4) {
    if (Array.isArray(e3)) {
      for (var s3, i4 = [], a3 = 0, c3 = e3.length; a3 < c3; a3 += 1)
        (s3 = Ne(e3[a3], n4, r3, o4)) !== "" && (Array.isArray(s3) ? i4.push.apply(i4, s3) : i4.push(s3));
      return i4;
    }
    if (_e(e3))
      return "";
    if (N(e3))
      return "." + e3.styledComponentId;
    if (b(e3)) {
      if (typeof (l3 = e3) != "function" || l3.prototype && l3.prototype.isReactComponent || !n4)
        return e3;
      var u3 = e3(n4);
      return import_react_is.isElement(u3) && console.warn(_(e3) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), Ne(u3, n4, r3, o4);
    }
    var l3;
    return e3 instanceof ve ? r3 ? (e3.inject(r3, o4), e3.getName(o4)) : e3 : S(e3) ? function e4(t4, n5) {
      var r4, o5, s4 = [];
      for (var i5 in t4)
        t4.hasOwnProperty(i5) && !_e(t4[i5]) && (S(t4[i5]) ? s4.push.apply(s4, e4(t4[i5], i5)) : b(t4[i5]) ? s4.push(be(i5) + ":", t4[i5], ";") : s4.push(be(i5) + ": " + (r4 = i5, (o5 = t4[i5]) == null || typeof o5 == "boolean" || o5 === "" ? "" : typeof o5 != "number" || o5 === 0 || r4 in unitless_browser_esm_default ? String(o5).trim() : o5 + "px") + ";"));
      return n5 ? [n5 + " {"].concat(s4, ["}"]) : s4;
    }(e3) : e3.toString();
  }
  function Ae(e3) {
    for (var t4 = arguments.length, n4 = new Array(t4 > 1 ? t4 - 1 : 0), r3 = 1; r3 < t4; r3++)
      n4[r3 - 1] = arguments[r3];
    return b(e3) || S(e3) ? Ne(g(w, [e3].concat(n4))) : n4.length === 0 && e3.length === 1 && typeof e3[0] == "string" ? e3 : Ne(g(e3, n4));
  }
  var Ce = /invalid hook call/i;
  var Ie = new Set();
  var Pe = function(e3, t4) {
    if (true) {
      var n4 = "The component " + e3 + (t4 ? ' with the id of "' + t4 + '"' : "") + " has been created dynamically.\nYou may see this warning because you've called styled inside another component.\nTo resolve this only create new StyledComponents outside of any render method and function component.";
      try {
        import_react.useRef(), Ie.has(n4) || (console.warn(n4), Ie.add(n4));
      } catch (e4) {
        Ce.test(e4.message) && Ie.delete(n4);
      }
    }
  };
  var Oe = function(e3, t4, n4) {
    return n4 === void 0 && (n4 = E), e3.theme !== n4.theme && e3.theme || t4 || n4.theme;
  };
  var Re = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g;
  var De = /(^-|-$)/g;
  function je(e3) {
    return e3.replace(Re, "-").replace(De, "");
  }
  var Te = function(e3) {
    return ee(ne(e3) >>> 0);
  };
  function ke(e3) {
    return typeof e3 == "string" && e3.charAt(0) === e3.charAt(0).toLowerCase();
  }
  var xe = function(e3) {
    return typeof e3 == "function" || typeof e3 == "object" && e3 !== null && !Array.isArray(e3);
  };
  var Ve = function(e3) {
    return e3 !== "__proto__" && e3 !== "constructor" && e3 !== "prototype";
  };
  function Be(e3, t4, n4) {
    var r3 = e3[n4];
    xe(t4) && xe(r3) ? Me(r3, t4) : e3[n4] = t4;
  }
  function Me(e3) {
    for (var t4 = arguments.length, n4 = new Array(t4 > 1 ? t4 - 1 : 0), r3 = 1; r3 < t4; r3++)
      n4[r3 - 1] = arguments[r3];
    for (var o4 = 0, s3 = n4; o4 < s3.length; o4++) {
      var i4 = s3[o4];
      if (xe(i4))
        for (var a3 in i4)
          Ve(a3) && Be(e3, i4[a3], a3);
    }
    return e3;
  }
  var ze = import_react.default.createContext();
  var Le = ze.Consumer;
  function Ge(e3) {
    var t4 = import_react.useContext(ze), n4 = import_react.useMemo(function() {
      return function(e4, t5) {
        if (!e4)
          return j(14);
        if (b(e4)) {
          var n5 = e4(t5);
          return n5 !== null && !Array.isArray(n5) && typeof n5 == "object" ? n5 : j(7);
        }
        return Array.isArray(e4) || typeof e4 != "object" ? j(8) : t5 ? v({}, t5, {}, e4) : e4;
      }(e3.theme, t4);
    }, [e3.theme, t4]);
    return e3.children ? import_react.default.createElement(ze.Provider, {value: n4}, e3.children) : null;
  }
  var Fe = {};
  function Ye(e3, t4, n4) {
    var o4 = N(e3), i4 = !ke(e3), a3 = t4.attrs, c3 = a3 === void 0 ? w : a3, d3 = t4.componentId, h3 = d3 === void 0 ? function(e4, t5) {
      var n5 = typeof e4 != "string" ? "sc" : je(e4);
      Fe[n5] = (Fe[n5] || 0) + 1;
      var r3 = n5 + "-" + Te("5.2.1" + n5 + Fe[n5]);
      return t5 ? t5 + "-" + r3 : r3;
    }(t4.displayName, t4.parentComponentId) : d3, p2 = t4.displayName, f2 = p2 === void 0 ? function(e4) {
      return ke(e4) ? "styled." + e4 : "Styled(" + _(e4) + ")";
    }(e3) : p2, g3 = t4.displayName && t4.componentId ? je(t4.displayName) + "-" + t4.componentId : t4.componentId || h3, S3 = o4 && e3.attrs ? Array.prototype.concat(e3.attrs, c3).filter(Boolean) : c3, A3 = t4.shouldForwardProp;
    o4 && e3.shouldForwardProp && (A3 = t4.shouldForwardProp ? function(n5, r3) {
      return e3.shouldForwardProp(n5, r3) && t4.shouldForwardProp(n5, r3);
    } : e3.shouldForwardProp);
    var C, I3 = new se(n4, g3, o4 ? e3.componentStyle : void 0), P3 = I3.isStatic && c3.length === 0, O3 = function(e4, t5) {
      return function(e5, t6, n5, r3) {
        var o5 = e5.attrs, i5 = e5.componentStyle, a4 = e5.defaultProps, c4 = e5.foldedComponentIds, d4 = e5.shouldForwardProp, h4 = e5.styledComponentId, p3 = e5.target;
        import_react.useDebugValue(h4);
        var f3 = function(e6, t7, n6) {
          e6 === void 0 && (e6 = E);
          var r4 = v({}, t7, {theme: e6}), o6 = {};
          return n6.forEach(function(e7) {
            var t8, n7, s3, i6 = e7;
            for (t8 in b(i6) && (i6 = i6(r4)), i6)
              r4[t8] = o6[t8] = t8 === "className" ? (n7 = o6[t8], s3 = i6[t8], n7 && s3 ? n7 + " " + s3 : n7 || s3) : i6[t8];
          }), [r4, o6];
        }(Oe(t6, import_react.useContext(ze), a4) || E, t6, o5), y3 = f3[0], g4 = f3[1], S4 = function(e6, t7, n6, r4) {
          var o6 = fe(), s3 = me(), i6 = t7 ? e6.generateAndInjectStyles(E, o6, s3) : e6.generateAndInjectStyles(n6, o6, s3);
          return import_react.useDebugValue(i6), !t7 && r4 && r4(i6), i6;
        }(i5, r3, y3, true ? e5.warnTooManyClasses : void 0), w3 = n5, _3 = g4.$as || t6.$as || g4.as || t6.as || p3, N3 = ke(_3), A4 = g4 !== t6 ? v({}, t6, {}, g4) : t6, C2 = {};
        for (var I4 in A4)
          I4[0] !== "$" && I4 !== "as" && (I4 === "forwardedAs" ? C2.as = A4[I4] : (d4 ? d4(I4, is_prop_valid_browser_esm_default) : !N3 || is_prop_valid_browser_esm_default(I4)) && (C2[I4] = A4[I4]));
        return t6.style && g4.style !== t6.style && (C2.style = v({}, t6.style, {}, g4.style)), C2.className = Array.prototype.concat(c4, h4, S4 !== h4 ? S4 : null, t6.className, g4.className).filter(Boolean).join(" "), C2.ref = w3, import_react.createElement(_3, C2);
      }(C, e4, t5, P3);
    };
    return O3.displayName = f2, (C = import_react.default.forwardRef(O3)).attrs = S3, C.componentStyle = I3, C.displayName = f2, C.shouldForwardProp = A3, C.foldedComponentIds = o4 ? Array.prototype.concat(e3.foldedComponentIds, e3.styledComponentId) : w, C.styledComponentId = g3, C.target = o4 ? e3.target : e3, C.withComponent = function(e4) {
      var r3 = t4.componentId, o5 = function(e5, t5) {
        if (e5 == null)
          return {};
        var n5, r4, o6 = {}, s4 = Object.keys(e5);
        for (r4 = 0; r4 < s4.length; r4++)
          n5 = s4[r4], t5.indexOf(n5) >= 0 || (o6[n5] = e5[n5]);
        return o6;
      }(t4, ["componentId"]), s3 = r3 && r3 + "-" + (ke(e4) ? e4 : je(_(e4)));
      return Ye(e4, v({}, o5, {attrs: S3, componentId: s3}), n4);
    }, Object.defineProperty(C, "defaultProps", {get: function() {
      return this._foldedDefaultProps;
    }, set: function(t5) {
      this._foldedDefaultProps = o4 ? Me({}, e3.defaultProps, t5) : t5;
    }}), Pe(f2, g3), C.warnTooManyClasses = function(e4, t5) {
      var n5 = {}, r3 = false;
      return function(o5) {
        if (!r3 && (n5[o5] = true, Object.keys(n5).length >= 200)) {
          var s3 = t5 ? ' with the id of "' + t5 + '"' : "";
          console.warn("Over 200 classes were generated for component " + e4 + s3 + ".\nConsider using the attrs method, together with a style object for frequently changed styles.\nExample:\n  const Component = styled.div.attrs(props => ({\n    style: {\n      background: props.background,\n    },\n  }))`width: 100%;`\n\n  <Component />"), r3 = true, n5 = {};
        }
      };
    }(f2, g3), C.toString = function() {
      return "." + C.styledComponentId;
    }, i4 && import_hoist_non_react_statics.default(C, e3, {attrs: true, componentStyle: true, displayName: true, foldedComponentIds: true, shouldForwardProp: true, styledComponentId: true, target: true, withComponent: true}), C;
  }
  var qe = function(e3) {
    return function e4(t4, r3, o4) {
      if (o4 === void 0 && (o4 = E), !import_react_is.isValidElementType(r3))
        return j(1, String(r3));
      var s3 = function() {
        return t4(r3, o4, Ae.apply(void 0, arguments));
      };
      return s3.withConfig = function(n4) {
        return e4(t4, r3, v({}, o4, {}, n4));
      }, s3.attrs = function(n4) {
        return e4(t4, r3, v({}, o4, {attrs: Array.prototype.concat(o4.attrs, n4).filter(Boolean)}));
      }, s3;
    }(Ye, e3);
  };
  ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"].forEach(function(e3) {
    qe[e3] = qe(e3);
  });
  var He = function() {
    function e3(e4, t5) {
      this.rules = e4, this.componentId = t5, this.isStatic = re(e4), Z.registerId(this.componentId + 1);
    }
    var t4 = e3.prototype;
    return t4.createStyles = function(e4, t5, n4, r3) {
      var o4 = r3(Ne(this.rules, t5, n4, r3).join(""), ""), s3 = this.componentId + e4;
      n4.insertRules(s3, s3, o4);
    }, t4.removeStyles = function(e4, t5) {
      t5.clearRules(this.componentId + e4);
    }, t4.renderStyles = function(e4, t5, n4, r3) {
      e4 > 2 && Z.registerId(this.componentId + e4), this.removeStyles(e4, n4), this.createStyles(e4, t5, n4, r3);
    }, e3;
  }();
  function $e(e3) {
    for (var t4 = arguments.length, n4 = new Array(t4 > 1 ? t4 - 1 : 0), o4 = 1; o4 < t4; o4++)
      n4[o4 - 1] = arguments[o4];
    var i4 = Ae.apply(void 0, [e3].concat(n4)), a3 = "sc-global-" + Te(JSON.stringify(i4)), u3 = new He(i4, a3);
    function l3(e4) {
      var t5 = fe(), n5 = me(), o5 = import_react.useContext(ze), l4 = import_react.useRef(t5.allocateGSInstance(a3)).current;
      return import_react.default.Children.count(e4.children) && console.warn("The global style component " + a3 + " was given child JSX. createGlobalStyle does not render children."), i4.some(function(e5) {
        return typeof e5 == "string" && e5.indexOf("@import") !== -1;
      }) && console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."), import_react.useLayoutEffect(function() {
        return h3(l4, e4, t5, o5, n5), function() {
          return u3.removeStyles(l4, t5);
        };
      }, [l4, e4, t5, o5, n5]), null;
    }
    function h3(e4, t5, n5, r3, o5) {
      if (u3.isStatic)
        u3.renderStyles(e4, O, n5, o5);
      else {
        var s3 = v({}, t5, {theme: Oe(t5, r3, l3.defaultProps)});
        u3.renderStyles(e4, s3, n5, o5);
      }
    }
    return Pe(a3), import_react.default.memo(l3);
  }
  var Ue = function() {
    function e3() {
      var e4 = this;
      this._emitSheetCSS = function() {
        var t5 = e4.instance.toString(), n4 = q();
        return "<style " + [n4 && 'nonce="' + n4 + '"', A + '="true"', 'data-styled-version="5.2.1"'].filter(Boolean).join(" ") + ">" + t5 + "</style>";
      }, this.getStyleTags = function() {
        return e4.sealed ? j(2) : e4._emitSheetCSS();
      }, this.getStyleElement = function() {
        var t5;
        if (e4.sealed)
          return j(2);
        var n4 = ((t5 = {})[A] = "", t5["data-styled-version"] = "5.2.1", t5.dangerouslySetInnerHTML = {__html: e4.instance.toString()}, t5), o4 = q();
        return o4 && (n4.nonce = o4), [import_react.default.createElement("style", v({}, n4, {key: "sc-0-0"}))];
      }, this.seal = function() {
        e4.sealed = true;
      }, this.instance = new Z({isServer: true}), this.sealed = false;
    }
    var t4 = e3.prototype;
    return t4.collectStyles = function(e4) {
      return this.sealed ? j(2) : import_react.default.createElement(ye, {sheet: this.instance}, e4);
    }, t4.interleaveWithNodeStream = function(e4) {
      return j(3);
    }, e3;
  }();
  var Je = function(e3) {
    var t4 = import_react.default.forwardRef(function(t5, n4) {
      var o4 = import_react.useContext(ze), i4 = e3.defaultProps, a3 = Oe(t5, o4, i4);
      return a3 === void 0 && console.warn('[withTheme] You are not using a ThemeProvider nor passing a theme prop or a theme in defaultProps in component class "' + _(e3) + '"'), import_react.default.createElement(e3, v({}, t5, {theme: a3, ref: n4}));
    });
    return import_hoist_non_react_statics.default(t4, e3), t4.displayName = "WithTheme(" + _(e3) + ")", t4;
  };
  typeof navigator != "undefined" && navigator.product === "ReactNative" && console.warn("It looks like you've imported 'styled-components' on React Native.\nPerhaps you're looking to import 'styled-components/native'?\nRead more about this at https://www.styled-components.com/docs/basics#react-native"), window["__styled-components-init__"] = window["__styled-components-init__"] || 0, window["__styled-components-init__"] === 1 && console.warn("It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.\n\nSee https://s-c.sh/2BAXzed for more info."), window["__styled-components-init__"] += 1;
  var styled_components_browser_esm_default = qe;

  // src/components/Github/index.tsx
  var SvgContainer = Je(styled_components_browser_esm_default.svg`
  color: rgb(255, 255, 255);
  position: absolute;
  top: 0px;
  border: 0px;
  right: 0px;
  fill: ${({theme: theme2}) => theme2.primaryColor};
  height: 40px;
  width: 40px;
`);
  var pathStyle = {
    transformOrigin: "130px 106px"
  };
  var Github = import_react2.memo(() => {
    return /* @__PURE__ */ import_react2.default.createElement("a", {
      href: "https://github.com/nusr/react-esbuild-boilerplate",
      "aria-label": "View source on Github",
      target: "_blank",
      rel: "noreferrer"
    }, /* @__PURE__ */ import_react2.default.createElement(SvgContainer, {
      viewBox: "0 0 250 250",
      "aria-hidden": "true"
    }, /* @__PURE__ */ import_react2.default.createElement("path", {
      d: "M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"
    }), /* @__PURE__ */ import_react2.default.createElement("path", {
      d: "M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",
      fill: "currentColor",
      style: pathStyle
    }), /* @__PURE__ */ import_react2.default.createElement("path", {
      d: "M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",
      fill: "currentColor"
    })));
  });
  Github.displayName = "Github";

  // src/components/BaseIcon/index.tsx
  var import_react3 = __toModule(require_react());
  var SvgContainer2 = styled_components_browser_esm_default.svg`
  width: 1em;
  height: 1em;
  fill: currentColor;
  overflow: hidden;
`;
  var BaseIcon = import_react3.memo((props) => {
    const {className = "", name} = props;
    return /* @__PURE__ */ import_react3.default.createElement(SvgContainer2, {
      className,
      "aria-hidden": "true"
    }, /* @__PURE__ */ import_react3.default.createElement("use", {
      xlinkHref: `#icon-${name}`
    }));
  });
  BaseIcon.displayName = "BaseIcon";

  // src/entry/GlobalStyle.tsx
  var GlobalStyle = $e`
    html {
        font-size: ${(props) => props.theme.font};
        font-family: ${(props) => props.theme.fontFamily};
        color: ${(props) => props.theme.contentColor};
    }
    body,html { 
        margin: 0;
        padding: 0;
    }
`;

  // src/theme/size.ts
  var size = {
    smallFont: "10px",
    font: `14px`,
    largeFont: "14px",
    padding: "12px",
    margin: "12px",
    fontFamily: "simsun,sans-serif"
  };
  var size_default = size;

  // src/theme/color.ts
  var color = {
    primaryColor: "#217346",
    buttonActiveColor: "#c6c6c6",
    backgroundColor: "#e6e6e6",
    white: "#ffffff",
    black: "#000000",
    gridStrokeColor: "#d4d4d4",
    triangleFillColor: "#b4b4b4",
    contentColor: "#333333"
  };
  var color_default = color;

  // src/theme/index.ts
  var theme = {
    ...size_default,
    ...color_default
  };
  var theme_default = theme;

  // src/store/store.tsx
  var import_react5 = __toModule(require_react());
  var import_lodash = __toModule(require_lodash());

  // node_modules/immer/dist/immer.esm.js
  function t2(t4) {
    for (var n4 = arguments.length, r3 = Array(n4 > 1 ? n4 - 1 : 0), e3 = 1; e3 < n4; e3++)
      r3[e3 - 1] = arguments[e3];
    if (true) {
      var i4 = Y2[t4], o4 = i4 ? typeof i4 == "function" ? i4.apply(null, r3) : i4 : "unknown error nr: " + t4;
      throw Error("[Immer] " + o4);
    }
    throw Error("[Immer] minified error nr: " + t4 + (r3.length ? " " + r3.map(function(t5) {
      return "'" + t5 + "'";
    }).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf");
  }
  function n2(t4) {
    return !!t4 && !!t4[Q2];
  }
  function r2(t4) {
    return !!t4 && (function(t5) {
      if (!t5 || typeof t5 != "object")
        return false;
      var n4 = Object.getPrototypeOf(t5);
      return !n4 || n4 === Object.prototype;
    }(t4) || Array.isArray(t4) || !!t4[L2] || !!t4.constructor[L2] || s2(t4) || v2(t4));
  }
  function i2(t4, n4, r3) {
    r3 === void 0 && (r3 = false), o2(t4) === 0 ? (r3 ? Object.keys : Z2)(t4).forEach(function(e3) {
      r3 && typeof e3 == "symbol" || n4(e3, t4[e3], t4);
    }) : t4.forEach(function(r4, e3) {
      return n4(e3, r4, t4);
    });
  }
  function o2(t4) {
    var n4 = t4[Q2];
    return n4 ? n4.i > 3 ? n4.i - 4 : n4.i : Array.isArray(t4) ? 1 : s2(t4) ? 2 : v2(t4) ? 3 : 0;
  }
  function u2(t4, n4) {
    return o2(t4) === 2 ? t4.has(n4) : Object.prototype.hasOwnProperty.call(t4, n4);
  }
  function a2(t4, n4) {
    return o2(t4) === 2 ? t4.get(n4) : t4[n4];
  }
  function f(t4, n4, r3) {
    var e3 = o2(t4);
    e3 === 2 ? t4.set(n4, r3) : e3 === 3 ? (t4.delete(n4), t4.add(r3)) : t4[n4] = r3;
  }
  function c2(t4, n4) {
    return t4 === n4 ? t4 !== 0 || 1 / t4 == 1 / n4 : t4 != t4 && n4 != n4;
  }
  function s2(t4) {
    return X2 && t4 instanceof Map;
  }
  function v2(t4) {
    return q2 && t4 instanceof Set;
  }
  function p(t4) {
    return t4.o || t4.t;
  }
  function l2(t4) {
    if (Array.isArray(t4))
      return Array.prototype.slice.call(t4);
    var n4 = tt(t4);
    delete n4[Q2];
    for (var r3 = Z2(n4), e3 = 0; e3 < r3.length; e3++) {
      var i4 = r3[e3], o4 = n4[i4];
      o4.writable === false && (o4.writable = true, o4.configurable = true), (o4.get || o4.set) && (n4[i4] = {configurable: true, writable: true, enumerable: o4.enumerable, value: t4[i4]});
    }
    return Object.create(Object.getPrototypeOf(t4), n4);
  }
  function d2(t4, e3) {
    return e3 === void 0 && (e3 = false), y2(t4) || n2(t4) || !r2(t4) ? t4 : (o2(t4) > 1 && (t4.set = t4.add = t4.clear = t4.delete = h2), Object.freeze(t4), e3 && i2(t4, function(t5, n4) {
      return d2(n4, true);
    }, true), t4);
  }
  function h2() {
    t2(2);
  }
  function y2(t4) {
    return t4 == null || typeof t4 != "object" || Object.isFrozen(t4);
  }
  function b2(n4) {
    var r3 = nt[n4];
    return r3 || t2(18, n4), r3;
  }
  function _2() {
    return U2 || t2(0), U2;
  }
  function j2(t4, n4) {
    n4 && (b2("Patches"), t4.u = [], t4.s = [], t4.v = n4);
  }
  function g2(t4) {
    w2(t4), t4.p.forEach(S2), t4.p = null;
  }
  function w2(t4) {
    t4 === U2 && (U2 = t4.l);
  }
  function O2(t4) {
    return U2 = {p: [], l: U2, h: t4, m: true, _: 0};
  }
  function S2(t4) {
    var n4 = t4[Q2];
    n4.i === 0 || n4.i === 1 ? n4.j() : n4.g = true;
  }
  function P2(n4, e3) {
    e3._ = e3.p.length;
    var i4 = e3.p[0], o4 = n4 !== void 0 && n4 !== i4;
    return e3.h.O || b2("ES5").S(e3, n4, o4), o4 ? (i4[Q2].P && (g2(e3), t2(4)), r2(n4) && (n4 = M2(e3, n4), e3.l || x2(e3, n4)), e3.u && b2("Patches").M(i4[Q2], n4, e3.u, e3.s)) : n4 = M2(e3, i4, []), g2(e3), e3.u && e3.v(e3.u, e3.s), n4 !== H2 ? n4 : void 0;
  }
  function M2(t4, n4, r3) {
    if (y2(n4))
      return n4;
    var e3 = n4[Q2];
    if (!e3)
      return i2(n4, function(i4, o5) {
        return A2(t4, e3, n4, i4, o5, r3);
      }, true), n4;
    if (e3.A !== t4)
      return n4;
    if (!e3.P)
      return x2(t4, e3.t, true), e3.t;
    if (!e3.I) {
      e3.I = true, e3.A._--;
      var o4 = e3.i === 4 || e3.i === 5 ? e3.o = l2(e3.k) : e3.o;
      i2(e3.i === 3 ? new Set(o4) : o4, function(n5, i4) {
        return A2(t4, e3, o4, n5, i4, r3);
      }), x2(t4, o4, false), r3 && t4.u && b2("Patches").R(e3, r3, t4.u, t4.s);
    }
    return e3.o;
  }
  function A2(e3, i4, o4, a3, c3, s3) {
    if (c3 === o4 && t2(5), n2(c3)) {
      var v3 = M2(e3, c3, s3 && i4 && i4.i !== 3 && !u2(i4.D, a3) ? s3.concat(a3) : void 0);
      if (f(o4, a3, v3), !n2(v3))
        return;
      e3.m = false;
    }
    if (r2(c3) && !y2(c3)) {
      if (!e3.h.N && e3._ < 1)
        return;
      M2(e3, c3), i4 && i4.A.l || x2(e3, c3);
    }
  }
  function x2(t4, n4, r3) {
    r3 === void 0 && (r3 = false), t4.h.N && t4.m && d2(n4, r3);
  }
  function z2(t4, n4) {
    var r3 = t4[Q2];
    return (r3 ? p(r3) : t4)[n4];
  }
  function I2(t4, n4) {
    if (n4 in t4)
      for (var r3 = Object.getPrototypeOf(t4); r3; ) {
        var e3 = Object.getOwnPropertyDescriptor(r3, n4);
        if (e3)
          return e3;
        r3 = Object.getPrototypeOf(r3);
      }
  }
  function k2(t4) {
    t4.P || (t4.P = true, t4.l && k2(t4.l));
  }
  function E2(t4) {
    t4.o || (t4.o = l2(t4.t));
  }
  function R2(t4, n4, r3) {
    var e3 = s2(n4) ? b2("MapSet").T(n4, r3) : v2(n4) ? b2("MapSet").F(n4, r3) : t4.O ? function(t5, n5) {
      var r4 = Array.isArray(t5), e4 = {i: r4 ? 1 : 0, A: n5 ? n5.A : _2(), P: false, I: false, D: {}, l: n5, t: t5, k: null, o: null, j: null, C: false}, i4 = e4, o4 = rt;
      r4 && (i4 = [e4], o4 = et);
      var u3 = Proxy.revocable(i4, o4), a3 = u3.revoke, f2 = u3.proxy;
      return e4.k = f2, e4.j = a3, f2;
    }(n4, r3) : b2("ES5").J(n4, r3);
    return (r3 ? r3.A : _2()).p.push(e3), e3;
  }
  function D2(e3) {
    return n2(e3) || t2(22, e3), function t4(n4) {
      if (!r2(n4))
        return n4;
      var e4, u3 = n4[Q2], c3 = o2(n4);
      if (u3) {
        if (!u3.P && (u3.i < 4 || !b2("ES5").K(u3)))
          return u3.t;
        u3.I = true, e4 = N2(n4, c3), u3.I = false;
      } else
        e4 = N2(n4, c3);
      return i2(e4, function(n5, r3) {
        u3 && a2(u3.t, n5) === r3 || f(e4, n5, t4(r3));
      }), c3 === 3 ? new Set(e4) : e4;
    }(e3);
  }
  function N2(t4, n4) {
    switch (n4) {
      case 2:
        return new Map(t4);
      case 3:
        return Array.from(t4);
    }
    return l2(t4);
  }
  var G2;
  var U2;
  var W2 = typeof Symbol != "undefined" && typeof Symbol("x") == "symbol";
  var X2 = typeof Map != "undefined";
  var q2 = typeof Set != "undefined";
  var B2 = typeof Proxy != "undefined" && Proxy.revocable !== void 0 && typeof Reflect != "undefined";
  var H2 = W2 ? Symbol.for("immer-nothing") : ((G2 = {})["immer-nothing"] = true, G2);
  var L2 = W2 ? Symbol.for("immer-draftable") : "__$immer_draftable";
  var Q2 = W2 ? Symbol.for("immer-state") : "__$immer_state";
  var V2 = typeof Symbol != "undefined" && Symbol.iterator || "@@iterator";
  var Y2 = {0: "Illegal state", 1: "Immer drafts cannot have computed properties", 2: "This object has been frozen and should not be mutated", 3: function(t4) {
    return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + t4;
  }, 4: "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.", 5: "Immer forbids circular references", 6: "The first or second argument to `produce` must be a function", 7: "The third argument to `produce` must be a function or undefined", 8: "First argument to `createDraft` must be a plain object, an array, or an immerable object", 9: "First argument to `finishDraft` must be a draft returned by `createDraft`", 10: "The given draft is already finalized", 11: "Object.defineProperty() cannot be used on an Immer draft", 12: "Object.setPrototypeOf() cannot be used on an Immer draft", 13: "Immer only supports deleting array indices", 14: "Immer only supports setting array indices and the 'length' property", 15: function(t4) {
    return "Cannot apply patch, path doesn't resolve: " + t4;
  }, 16: 'Sets cannot have "replace" patches.', 17: function(t4) {
    return "Unsupported patch operation: " + t4;
  }, 18: function(t4) {
    return "The plugin for '" + t4 + "' has not been loaded into Immer. To enable the plugin, import and call `enable" + t4 + "()` when initializing your application.";
  }, 20: "Cannot use proxies if Proxy, Proxy.revocable or Reflect are not available", 21: function(t4) {
    return "produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '" + t4 + "'";
  }, 22: function(t4) {
    return "'current' expects a draft, got: " + t4;
  }, 23: function(t4) {
    return "'original' expects a draft, got: " + t4;
  }, 24: "Patching reserved attributes like __proto__, prototype and constructor is not allowed"};
  var Z2 = typeof Reflect != "undefined" && Reflect.ownKeys ? Reflect.ownKeys : Object.getOwnPropertySymbols !== void 0 ? function(t4) {
    return Object.getOwnPropertyNames(t4).concat(Object.getOwnPropertySymbols(t4));
  } : Object.getOwnPropertyNames;
  var tt = Object.getOwnPropertyDescriptors || function(t4) {
    var n4 = {};
    return Z2(t4).forEach(function(r3) {
      n4[r3] = Object.getOwnPropertyDescriptor(t4, r3);
    }), n4;
  };
  var nt = {};
  var rt = {get: function(t4, n4) {
    if (n4 === Q2)
      return t4;
    var e3 = p(t4);
    if (!u2(e3, n4))
      return function(t5, n5, r3) {
        var e4, i5 = I2(n5, r3);
        return i5 ? "value" in i5 ? i5.value : (e4 = i5.get) === null || e4 === void 0 ? void 0 : e4.call(t5.k) : void 0;
      }(t4, e3, n4);
    var i4 = e3[n4];
    return t4.I || !r2(i4) ? i4 : i4 === z2(t4.t, n4) ? (E2(t4), t4.o[n4] = R2(t4.A.h, i4, t4)) : i4;
  }, has: function(t4, n4) {
    return n4 in p(t4);
  }, ownKeys: function(t4) {
    return Reflect.ownKeys(p(t4));
  }, set: function(t4, n4, r3) {
    var e3 = I2(p(t4), n4);
    if (e3 == null ? void 0 : e3.set)
      return e3.set.call(t4.k, r3), true;
    if (!t4.P) {
      var i4 = z2(p(t4), n4), o4 = i4 == null ? void 0 : i4[Q2];
      if (o4 && o4.t === r3)
        return t4.o[n4] = r3, t4.D[n4] = false, true;
      if (c2(r3, i4) && (r3 !== void 0 || u2(t4.t, n4)))
        return true;
      E2(t4), k2(t4);
    }
    return t4.o[n4] = r3, t4.D[n4] = true, true;
  }, deleteProperty: function(t4, n4) {
    return z2(t4.t, n4) !== void 0 || n4 in t4.t ? (t4.D[n4] = false, E2(t4), k2(t4)) : delete t4.D[n4], t4.o && delete t4.o[n4], true;
  }, getOwnPropertyDescriptor: function(t4, n4) {
    var r3 = p(t4), e3 = Reflect.getOwnPropertyDescriptor(r3, n4);
    return e3 ? {writable: true, configurable: t4.i !== 1 || n4 !== "length", enumerable: e3.enumerable, value: r3[n4]} : e3;
  }, defineProperty: function() {
    t2(11);
  }, getPrototypeOf: function(t4) {
    return Object.getPrototypeOf(t4.t);
  }, setPrototypeOf: function() {
    t2(12);
  }};
  var et = {};
  i2(rt, function(t4, n4) {
    et[t4] = function() {
      return arguments[0] = arguments[0][0], n4.apply(this, arguments);
    };
  }), et.deleteProperty = function(n4, r3) {
    return isNaN(parseInt(r3)) && t2(13), rt.deleteProperty.call(this, n4[0], r3);
  }, et.set = function(n4, r3, e3) {
    return r3 !== "length" && isNaN(parseInt(r3)) && t2(14), rt.set.call(this, n4[0], r3, e3, n4[0]);
  };
  var it = function() {
    function e3(t4) {
      this.O = B2, this.N = true, typeof (t4 == null ? void 0 : t4.useProxies) == "boolean" && this.setUseProxies(t4.useProxies), typeof (t4 == null ? void 0 : t4.autoFreeze) == "boolean" && this.setAutoFreeze(t4.autoFreeze), this.produce = this.produce.bind(this), this.produceWithPatches = this.produceWithPatches.bind(this);
    }
    var i4 = e3.prototype;
    return i4.produce = function(n4, e4, i5) {
      if (typeof n4 == "function" && typeof e4 != "function") {
        var o4 = e4;
        e4 = n4;
        var u3 = this;
        return function(t4) {
          var n5 = this;
          t4 === void 0 && (t4 = o4);
          for (var r3 = arguments.length, i6 = Array(r3 > 1 ? r3 - 1 : 0), a4 = 1; a4 < r3; a4++)
            i6[a4 - 1] = arguments[a4];
          return u3.produce(t4, function(t5) {
            var r4;
            return (r4 = e4).call.apply(r4, [n5, t5].concat(i6));
          });
        };
      }
      var a3;
      if (typeof e4 != "function" && t2(6), i5 !== void 0 && typeof i5 != "function" && t2(7), r2(n4)) {
        var f2 = O2(this), c3 = R2(this, n4, void 0), s3 = true;
        try {
          a3 = e4(c3), s3 = false;
        } finally {
          s3 ? g2(f2) : w2(f2);
        }
        return typeof Promise != "undefined" && a3 instanceof Promise ? a3.then(function(t4) {
          return j2(f2, i5), P2(t4, f2);
        }, function(t4) {
          throw g2(f2), t4;
        }) : (j2(f2, i5), P2(a3, f2));
      }
      if (!n4 || typeof n4 != "object") {
        if ((a3 = e4(n4)) === H2)
          return;
        return a3 === void 0 && (a3 = n4), this.N && d2(a3, true), a3;
      }
      t2(21, n4);
    }, i4.produceWithPatches = function(t4, n4) {
      var r3, e4, i5 = this;
      return typeof t4 == "function" ? function(n5) {
        for (var r4 = arguments.length, e5 = Array(r4 > 1 ? r4 - 1 : 0), o4 = 1; o4 < r4; o4++)
          e5[o4 - 1] = arguments[o4];
        return i5.produceWithPatches(n5, function(n6) {
          return t4.apply(void 0, [n6].concat(e5));
        });
      } : [this.produce(t4, n4, function(t5, n5) {
        r3 = t5, e4 = n5;
      }), r3, e4];
    }, i4.createDraft = function(e4) {
      r2(e4) || t2(8), n2(e4) && (e4 = D2(e4));
      var i5 = O2(this), o4 = R2(this, e4, void 0);
      return o4[Q2].C = true, w2(i5), o4;
    }, i4.finishDraft = function(n4, r3) {
      var e4 = n4 && n4[Q2];
      e4 && e4.C || t2(9), e4.I && t2(10);
      var i5 = e4.A;
      return j2(i5, r3), P2(void 0, i5);
    }, i4.setAutoFreeze = function(t4) {
      this.N = t4;
    }, i4.setUseProxies = function(n4) {
      n4 && !B2 && t2(20), this.O = n4;
    }, i4.applyPatches = function(t4, r3) {
      var e4;
      for (e4 = r3.length - 1; e4 >= 0; e4--) {
        var i5 = r3[e4];
        if (i5.path.length === 0 && i5.op === "replace") {
          t4 = i5.value;
          break;
        }
      }
      var o4 = b2("Patches").$;
      return n2(t4) ? o4(t4, r3) : this.produce(t4, function(t5) {
        return o4(t5, r3.slice(e4 + 1));
      });
    }, e3;
  }();
  var ot = new it();
  var ut = ot.produce;
  var at = ot.produceWithPatches.bind(ot);
  var ft = ot.setAutoFreeze.bind(ot);
  var ct = ot.setUseProxies.bind(ot);
  var st = ot.applyPatches.bind(ot);
  var vt = ot.createDraft.bind(ot);
  var pt = ot.finishDraft.bind(ot);
  var immer_esm_default = ut;

  // node_modules/use-immer/dist/use-immer.module.js
  var import_react4 = __toModule(require_react());
  function e2(n4, t4, u3) {
    var e3 = import_react4.useMemo(function() {
      return immer_esm_default(n4);
    }, [n4]);
    return import_react4.useReducer(e3, t4, u3);
  }

  // src/store/reducer.ts
  var initialState = {
    activeColor: "#217346"
  };
  var reducer = (state, action) => {
    console.log(`%c action type: ${action.type}`, "color: red;", action);
    switch (action.type) {
      case "CHANGE_ACTIVE_COLOR":
        state.activeColor = action.payload;
        break;
      case "RESET":
        state = initialState;
        break;
      default:
        break;
    }
    return state;
  };

  // src/store/store.tsx
  var storeContext = import_react5.default.createContext(initialState);
  var dispatchContext = import_react5.default.createContext(() => 0);
  var StoreProvider = import_react5.memo((props) => {
    const {children} = props;
    const [state, dispatch] = e2(reducer, initialState);
    return /* @__PURE__ */ import_react5.default.createElement(dispatchContext.Provider, {
      value: dispatch
    }, /* @__PURE__ */ import_react5.default.createElement(storeContext.Provider, {
      value: state
    }, children));
  });
  StoreProvider.displayName = "StoreProvider";
  var useDispatch = () => {
    return import_react5.useContext(dispatchContext);
  };
  function useSelector(pickStr) {
    const cache = import_react5.useContext(storeContext);
    return import_lodash.default(cache, pickStr);
  }

  // src/util/EventEmitter.ts
  var EventEmitter = class {
    constructor() {
      this.event = {};
    }
    getEventLength(name) {
      const temp = this.event[name];
      return temp && temp.length || 0;
    }
    on(name, callback) {
      this.event[name] = this.event[name] || [];
      this.event[name].push(callback);
      return () => this.off(name, callback);
    }
    emitAsync(name, data) {
      const list = this.event[name];
      if (!list || list.length <= 0) {
        return;
      }
      for (const item of list) {
        window.requestAnimationFrame(() => {
          item(data);
        });
      }
    }
    emit(name, data) {
      const list = this.event[name];
      if (!list || list.length <= 0) {
        return;
      }
      for (const item of list) {
        item(data);
      }
    }
    off(name, callback) {
      const result = [];
      const events = this.event[name];
      if (events && callback) {
        for (const item of events) {
          if (item !== callback && item._ !== callback) {
            result.push(item);
          }
        }
      }
      if (result.length) {
        this.event[name] = result;
      } else {
        delete this.event[name];
      }
    }
    offAll() {
      this.event = {};
    }
    once(name, callback) {
      const listener = (data) => {
        this.off(name, listener);
        callback(data);
      };
      listener._ = callback;
      return this.on(name, listener);
    }
  };
  var emitter = new EventEmitter();

  // src/util/error.ts
  function handleBuildError() {
    fetch("/buildError.txt").then((res) => {
      if (res.status === 404) {
        return "";
      }
      return res.text();
    }).then((data) => {
      if (data) {
        console.error(data);
      }
    }).catch(console.error);
  }

  // src/entry/App.tsx
  var IconList = styled_components_browser_esm_default.div`
  font-size: 16px;
  display: flex;
  text-align: center;
`;
  var IconItem = styled_components_browser_esm_default.div`
  margin: 10px;
`;
  var ICON_LIST = ["bold", "italic", "underline"];
  var App = import_react6.default.memo(() => {
    const dispatch = useDispatch();
    const {activeColor} = useSelector(["activeColor"]);
    import_react6.useEffect(() => {
      if (true) {
        handleBuildError();
      }
    }, []);
    const onChangeColor = import_react6.useCallback((event) => {
      const {value} = event.target;
      dispatch({type: "CHANGE_ACTIVE_COLOR", payload: value});
    }, [dispatch]);
    return /* @__PURE__ */ import_react6.default.createElement(Ge, {
      theme: theme_default
    }, /* @__PURE__ */ import_react6.default.createElement(GlobalStyle, null), /* @__PURE__ */ import_react6.default.createElement(Github, null), /* @__PURE__ */ import_react6.default.createElement(IconList, {
      style: {color: activeColor}
    }, ICON_LIST.map((key) => /* @__PURE__ */ import_react6.default.createElement(IconItem, {
      key
    }, /* @__PURE__ */ import_react6.default.createElement(BaseIcon, {
      name: key
    }), /* @__PURE__ */ import_react6.default.createElement("div", null, `<BaseIcon name="${key}" />`))), /* @__PURE__ */ import_react6.default.createElement("input", {
      type: "color",
      value: activeColor,
      onChange: onChangeColor
    })));
  });
  App.displayName = "APP";

  // src/index.tsx
  import_react_dom.default.render(/* @__PURE__ */ import_react7.default.createElement(import_react7.default.StrictMode, null, /* @__PURE__ */ import_react7.default.createElement(StoreProvider, null, /* @__PURE__ */ import_react7.default.createElement(App, null))), document.getElementById("root"));
})();
//# sourceMappingURL=index.js.map
