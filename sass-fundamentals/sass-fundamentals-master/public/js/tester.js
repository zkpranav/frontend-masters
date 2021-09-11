(function() {
  function printValue(txt) {
    if (txt.indexOf('rgb(') === 0) {
      let hex = txt
        .replace('rgb(', '')
        .replace(')', '').trim()
        .split(',')
        .map(function(c) {
          let x = parseInt(c.trim(), 10).toString(16);
          return x.length < 2 ? '0' + x : x;
        })
        .join('');
      return '#' + hex;
    } else {
      return txt;
    }
  }

  const assert = {
    compare: {
      truthy() {
        return {
          check: function(x) {
            return !!x
          },
          description: 'Should be non-empty'
        };
      },
      gt(num) {
        return {
          check: function(x) {
            return parseFloat(x, 10) > num;
          },
          description: 'Greater than ' + num
        };
      },
      lt(num) {
        return {
          check: function(x) {
            return parseFloat(x, 10) < num;
          },
          description: 'Less than ' + num
        };
      },
      gte(num) {
        return {
          check: function(x) {
            return parseFloat(x, 10) >= num;
          },
          description: 'Greater than or equal to' + num
        };
      },
      lte(num) {
        return {
          check: function(x) {
            return parseFloat(x, 10) <= num;
          },
          description: 'Less than or equal to' + num
        };
      },
      eq(y) {
        return {
          check: function(x) {
            return x == y;
          },
          description: 'Equal to ' + y
        };
      }
    },
    ok: function(check, description) {
      if (!check) {
        throw { description };
      }
    },
    equal: function(a, b, description) {
      if (a !== b) {
        throw { description };
      }
    },
    hasStyle: function(selector, styles, description) {
      var elem = document.querySelector(selector);
      if (!elem) {
        throw {
          description: 'No element found: ' + selector
        };
      }
      var elemStyles = window.getComputedStyle(elem);
      for (let s in styles) {
        if (styles.hasOwnProperty(s)) {
          switch (typeof styles[s]) {
            case 'object':
              if (!styles[s].check(elemStyles[s])) {
                throw { description,
                  detail: 'Expected $("' + selector + '") to meet the following condition for ' + s + ':\n' + styles[s].description + '\nFound: ' + elemStyles[s]
                };
              }
              break;
            default:
              if (elemStyles[s] !== styles[s] && styles[s] !== printValue(elemStyles[s])) {
                throw { description,
                  detail: 'Expected $("' + selector + '") to have value for ' + s + ':\n' + styles[s] + '.\n' + printValue(elemStyles[s]) + ' was found instead'
                }
              }
              break;
          }
        }
      }
    }
  };
  var _errorContainer = null;
  
  function setupErrorList() {
    _errorContainer = document.createElement('ul');
    _errorContainer.className = 'test-failures';
    _errorContainer.style = 'position: fixed;bottom: 0; max-height: 100vh; overflow-y: scroll; right: 0; width: 200px; padding-left:0; background: red; list-style: none; color: white; font-family: Sans-Serif';
    document.body.appendChild(_errorContainer);
    return _errorContainer;
  }

  function addErrorToList(info) {
    var li = document.createElement('li');
    li.className = 'test-failure';
    li.style = 'margin: 10px; background: #f55; padding: 10px'
    var s = '<h4 style="text-transform: uppercase">' + info.name + '</h4><b >' + info.description + '</b>';
    if (info.detail) {
      s += '<pre style="font-size: 0.8rem; font-family: Monospace; white-space: pre-wrap">' + info.detail + '</pre>';
    }
    li.innerHTML = s;
    _errorContainer.appendChild(li);
  }

  function onFail(info) {
    if (!_errorContainer) {
      setupErrorList();
    }
    addErrorToList(info);
  }

  function test(name, cb) {
    try {
      cb(assert);
    } catch(e) {
      console.error(e);
      onFail(Object.assign(e, { name }));
    }
  };

  function start() {
    window.test = test;
  };
  window.onload = start();
}());