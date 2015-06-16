(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/// <reference path="../typings/angular2/angular2.d.ts"/>
/// <reference path="../typings/es6-promise/es6-promise.d.ts"/>
'use strict';

require('whatwg-fetch');
// const reflect = require('reflect-metadata');
require('./utils/innertext-polyfill');
var angular2_1 = require('./angular2');
var bootstrap = angular2_1.angular.bootstrap;
var app_1 = require('./components/app');
bootstrap(app_1.App);

},{"./angular2":2,"./components/app":4,"./utils/innertext-polyfill":9,"whatwg-fetch":10}],2:[function(require,module,exports){
"use strict";

exports.angular = window.angular;

},{}],3:[function(require,module,exports){
"use strict";
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2:
            return decorators.reduceRight(function (o, d) {
                return d && d(o) || o;
            }, target);
        case 3:
            return decorators.reduceRight(function (o, d) {
                return (d && d(target, key), void 0);
            }, void 0);
        case 4:
            return decorators.reduceRight(function (o, d) {
                return d && d(target, key, o) || o;
            }, desc);
    }
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require("../angular2");
var Component = angular2_1.angular.Component,
    View = angular2_1.angular.View,
    NgFor = angular2_1.angular.NgFor;
var bootstrap_grid_1 = require("../utils/directives/bootstrap-grid");
var AboutComponent = (function () {
    function AboutComponent() {
        this.message = ["ng-kyotoはAngularをテーマに京都で活動を行っているユーザーコミュニティです。", "日本の古都、京都から最先端のWeb技術を学び、発信していきます。", "古都の空気に触れながら、Angularの未来を一緒に学びませんか？", "Angularって聞くと「なんぎやな、ややこしな」と思わはるかもしれませんけど、", "周りと一緒に勉強したら意外ととっつきやすいんですよ。"];
        //
    }
    AboutComponent = __decorate([Component({
        selector: "about"
    }), View({
        directives: [bootstrap_grid_1.Row, bootstrap_grid_1.Col, NgFor],
        templateUrl: "./app/components/about.html"
    }), __metadata("design:paramtypes", [])], AboutComponent);
    return AboutComponent;
})();
exports.AboutComponent = AboutComponent;

},{"../angular2":2,"../utils/directives/bootstrap-grid":8}],4:[function(require,module,exports){
"use strict";
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2:
            return decorators.reduceRight(function (o, d) {
                return d && d(o) || o;
            }, target);
        case 3:
            return decorators.reduceRight(function (o, d) {
                return (d && d(target, key), void 0);
            }, void 0);
        case 4:
            return decorators.reduceRight(function (o, d) {
                return d && d(target, key, o) || o;
            }, desc);
    }
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require("../angular2");
var Component = angular2_1.angular.Component,
    View = angular2_1.angular.View;
var header_1 = require("./header");
var about_1 = require("./about");
var organizers_1 = require("./organizers");
var footer_1 = require("./footer");
var App = (function () {
    function App() {}
    App = __decorate([Component({
        selector: "ng-kyoto-app"
    }), View({
        templateUrl: "./app/components/app.html",
        directives: [header_1.HeaderComponent, about_1.AboutComponent, organizers_1.OrganizersComponent, footer_1.FooterComponent]
    }), __metadata("design:paramtypes", [])], App);
    return App;
})();
exports.App = App;

// noop

},{"../angular2":2,"./about":3,"./footer":5,"./header":6,"./organizers":7}],5:[function(require,module,exports){
"use strict";
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2:
            return decorators.reduceRight(function (o, d) {
                return d && d(o) || o;
            }, target);
        case 3:
            return decorators.reduceRight(function (o, d) {
                return (d && d(target, key), void 0);
            }, void 0);
        case 4:
            return decorators.reduceRight(function (o, d) {
                return d && d(target, key, o) || o;
            }, desc);
    }
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require("../angular2");
var Component = angular2_1.angular.Component,
    View = angular2_1.angular.View;
var bootstrap_grid_1 = require("../utils/directives/bootstrap-grid");
var FooterComponent = (function () {
    function FooterComponent() {}
    FooterComponent = __decorate([Component({
        selector: "ng-kyoto-footer"
    }), View({
        directives: [bootstrap_grid_1.Row, bootstrap_grid_1.Col],
        templateUrl: "./app/components/footer.html"
    }), __metadata("design:paramtypes", [])], FooterComponent);
    return FooterComponent;
})();
exports.FooterComponent = FooterComponent;

// noop

},{"../angular2":2,"../utils/directives/bootstrap-grid":8}],6:[function(require,module,exports){
"use strict";

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2:
            return decorators.reduceRight(function (o, d) {
                return d && d(o) || o;
            }, target);
        case 3:
            return decorators.reduceRight(function (o, d) {
                return (d && d(target, key), void 0);
            }, void 0);
        case 4:
            return decorators.reduceRight(function (o, d) {
                return d && d(target, key, o) || o;
            }, desc);
    }
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
;
var angular2_1 = require("../angular2");
var Component = angular2_1.angular.Component,
    View = angular2_1.angular.View,
    ViewContainerRef = angular2_1.angular.ViewContainerRef;
var bootstrap_grid_1 = require("../utils/directives/bootstrap-grid");
var ApplyButton = (function () {
    function ApplyButton(viewContainer) {
        this.label = viewContainer.element.domElement.innerText;
    }
    ApplyButton = __decorate([Component({
        selector: "apply-button",
        properties: {
            "href": "href"
        }
    }), View({
        directives: [bootstrap_grid_1.Row, bootstrap_grid_1.Col],
        template: "\n  <row>\n    <bcol all=\"12 8 6 4\" all-offset=\"0 2 3 4\">\n      <a class=\"apply\" href=\"{{href}}\">{{label}}</a>\n    </bcol>\n  </row>"
    }), __metadata("design:paramtypes", [ViewContainerRef])], ApplyButton);
    return ApplyButton;
})();
var HeaderComponent = (function () {
    function HeaderComponent() {}
    HeaderComponent = __decorate([Component({
        selector: "ng-kyoto-header"
    }), View({
        directives: [bootstrap_grid_1.Row, bootstrap_grid_1.Col, ApplyButton],
        templateUrl: "./app/components/header.html"
    }), __metadata("design:paramtypes", [])], HeaderComponent);
    return HeaderComponent;
})();
exports.HeaderComponent = HeaderComponent;

// noop

},{"../angular2":2,"../utils/directives/bootstrap-grid":8}],7:[function(require,module,exports){
"use strict";
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2:
            return decorators.reduceRight(function (o, d) {
                return d && d(o) || o;
            }, target);
        case 3:
            return decorators.reduceRight(function (o, d) {
                return (d && d(target, key), void 0);
            }, void 0);
        case 4:
            return decorators.reduceRight(function (o, d) {
                return d && d(target, key, o) || o;
            }, desc);
    }
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require("../angular2");
var Component = angular2_1.angular.Component,
    View = angular2_1.angular.View,
    NgFor = angular2_1.angular.NgFor;
var bootstrap_grid_1 = require("../utils/directives/bootstrap-grid");
var OrganizersComponent = (function () {
    function OrganizersComponent() {
        this.angularPosts = this.fetchUser();
        this.angularPosts.then(function (res) {
            return console.log(res);
        });
    }
    /**
     * @returns {Promise}
     */
    OrganizersComponent.prototype.fetchUser = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            fetch("http://qiita.com/api/v2/items?per_page=20&query=user:_likr%20or%20user:armorik83%20or%20user:shinsukeimai", {
                method: "get"
            }).then(function (res) {
                return res.json();
            }).then(function (json) {
                return resolve(_this.filterPost(json));
            })["catch"](function (err) {
                return reject(err);
            });
        });
    };
    /**
     * @param {Array<*>} posts
     * @returns {Array<*>}
     */
    OrganizersComponent.prototype.filterPost = function (posts) {
        var organizersPosts = {};
        posts.map(function (post) {
            var isAngularPost = post.tags.some(function (tag) {
                return tag.name.match(/ngular/);
            });
            return isAngularPost ? post : void 0;
        }).filter(function (post) {
            return post;
        }).filter(function (post, idx) {
            return idx < 20;
        }).forEach(function (post) {
            organizersPosts[post.user.id] = organizersPosts[post.user.id] || [];
            if (5 <= organizersPosts[post.user.id].length) {
                return;
            }
            organizersPosts[post.user.id].push(post);
        });
        var result = [];
        Object.keys(organizersPosts).forEach(function (organizer) {
            return result.push(organizersPosts[organizer]);
        });
        return result;
    };
    OrganizersComponent = __decorate([Component({
        selector: "organizers" }), View({
        directives: [bootstrap_grid_1.Row, bootstrap_grid_1.Col, NgFor],
        templateUrl: "./app/components/organizers.html"
    }), __metadata("design:paramtypes", [])], OrganizersComponent);
    return OrganizersComponent;
})();
exports.OrganizersComponent = OrganizersComponent;

},{"../angular2":2,"../utils/directives/bootstrap-grid":8}],8:[function(require,module,exports){
"use strict";

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2:
            return decorators.reduceRight(function (o, d) {
                return d && d(o) || o;
            }, target);
        case 3:
            return decorators.reduceRight(function (o, d) {
                return (d && d(target, key), void 0);
            }, void 0);
        case 4:
            return decorators.reduceRight(function (o, d) {
                return d && d(target, key, o) || o;
            }, desc);
    }
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require("../../angular2");
var Directive = angular2_1.angular.Directive,
    ViewContainerRef = angular2_1.angular.ViewContainerRef;
var rowTag = "row";
var colTag = "bcol"; // <col> overlap with the existing elements
document.addEventListener("DOMContentLoaded", function (event) {
    var style = document.createElement("style");
    var text = rowTag + ", " + colTag + " { display: block; }";
    if (style.innerText === void 0) {
        style.textContent = text;
    } else {
        style.innerText = text;
    }
    document.head.appendChild(style);
});
var Row = (function () {
    function Row(viewContainer) {
        var elm = viewContainer.element.domElement;
        elm.classList.add("row");
    }
    Row = __decorate([Directive({
        selector: rowTag
    }), __metadata("design:paramtypes", [ViewContainerRef])], Row);
    return Row;
})();
exports.Row = Row;
var Col = (function () {
    function Col(viewContainer) {
        this.viewContainer = viewContainer;
        //
    }
    Col.prototype.addClass = function (cls) {
        this.viewContainer.element.domElement.classList.add(cls);
    };
    Object.defineProperty(Col.prototype, "xs", {
        set: function set(n) {
            if (+n === 0) {
                return;
            }this.addClass("col-xs-" + n);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Col.prototype, "sm", {
        set: function set(n) {
            if (+n === 0) {
                return;
            }this.addClass("col-sm-" + n);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Col.prototype, "md", {
        set: function set(n) {
            if (+n === 0) {
                return;
            }this.addClass("col-md-" + n);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Col.prototype, "lg", {
        set: function set(n) {
            if (+n === 0) {
                return;
            }this.addClass("col-lg-" + n);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Col.prototype, "xsOffset", {
        set: function set(n) {
            if (+n === 0) {
                return;
            }this.addClass("col-xs-offset-" + n);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Col.prototype, "smOffset", {
        set: function set(n) {
            if (+n === 0) {
                return;
            }this.addClass("col-sm-offset-" + n);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Col.prototype, "mdOffset", {
        set: function set(n) {
            if (+n === 0) {
                return;
            }this.addClass("col-md-offset-" + n);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Col.prototype, "lgOffset", {
        set: function set(n) {
            if (+n === 0) {
                return;
            }this.addClass("col-lg-offset-" + n);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Col.prototype, "xsPush", {
        set: function set(n) {
            if (+n === 0) {
                return;
            }this.addClass("col-xs-push-" + n);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Col.prototype, "smPush", {
        set: function set(n) {
            if (+n === 0) {
                return;
            }this.addClass("col-sm-push-" + n);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Col.prototype, "mdPush", {
        set: function set(n) {
            if (+n === 0) {
                return;
            }this.addClass("col-md-push-" + n);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Col.prototype, "lgPush", {
        set: function set(n) {
            if (+n === 0) {
                return;
            }this.addClass("col-lg-push-" + n);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Col.prototype, "xsPull", {
        set: function set(n) {
            if (+n === 0) {
                return;
            }this.addClass("col-xs-pull-" + n);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Col.prototype, "smPull", {
        set: function set(n) {
            if (+n === 0) {
                return;
            }this.addClass("col-sm-pull-" + n);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Col.prototype, "mdPull", {
        set: function set(n) {
            if (+n === 0) {
                return;
            }this.addClass("col-md-pull-" + n);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Col.prototype, "lgPull", {
        set: function set(n) {
            if (+n === 0) {
                return;
            }this.addClass("col-lg-pull-" + n);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Col.prototype, "all", {
        set: function set(allval) {
            var vals = allval.split(" ");
            this.xs = vals[0];
            this.sm = vals[1];
            this.md = vals[2];
            this.lg = vals[3];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Col.prototype, "allOffset", {
        set: function set(allval) {
            var vals = allval.split(" ");
            this.xsOffset = vals[0];
            this.smOffset = vals[1];
            this.mdOffset = vals[2];
            this.lgOffset = vals[3];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Col.prototype, "allPush", {
        set: function set(allval) {
            var vals = allval.split(" ");
            this.xsPush = vals[0];
            this.smPush = vals[1];
            this.mdPush = vals[2];
            this.lgPush = vals[3];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Col.prototype, "allPull", {
        set: function set(allval) {
            var vals = allval.split(" ");
            this.xsPull = vals[0];
            this.smPull = vals[1];
            this.mdPull = vals[2];
            this.lgPull = vals[3];
        },
        enumerable: true,
        configurable: true
    });
    Col = __decorate([Directive({
        selector: colTag,
        properties: {
            "xs": "xs",
            "sm": "sm",
            "md": "md",
            "lg": "lg",
            "xsOffset": "xsOffset",
            "smOffset": "smOffset",
            "mdOffset": "mdOffset",
            "lgOffset": "lgOffset",
            "xsPush": "xsPush",
            "smPush": "smPush",
            "mdPush": "mdPush",
            "lgPush": "lgPush",
            "xsPull": "xsPull",
            "smPull": "smPull",
            "mdPull": "mdPull",
            "lgPull": "lgPull",
            "all": "all",
            "allOffset": "allOffset",
            "allPush": "allPush",
            "allPull": "allPull"
        }
    }), __metadata("design:paramtypes", [ViewContainerRef])], Col);
    return Col;
})();
exports.Col = Col;

},{"../../angular2":2}],9:[function(require,module,exports){
'use strict';
// innerText polyfill for Firefox
(function (document) {
    var dummy = document.createElement('div');
    if (dummy.innerText === void 0) {
        Object.defineProperty(HTMLElement.prototype, 'innerText', {
            get: function get() {
                return this.textContent;
            },
            set: function set(v) {
                this.textContent = v;
            }
        });
    }
})(document);

},{}],10:[function(require,module,exports){
(function() {
  'use strict';

  if (self.fetch) {
    return
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = name.toString();
    }
    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = value.toString();
    }
    return value
  }

  function Headers(headers) {
    this.map = {}

    var self = this
    if (headers instanceof Headers) {
      headers.forEach(function(name, values) {
        values.forEach(function(value) {
          self.append(name, value)
        })
      })

    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        self.append(name, headers[name])
      })
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name)
    value = normalizeValue(value)
    var list = this.map[name]
    if (!list) {
      list = []
      this.map[name] = list
    }
    list.push(value)
  }

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)]
  }

  Headers.prototype.get = function(name) {
    var values = this.map[normalizeName(name)]
    return values ? values[0] : null
  }

  Headers.prototype.getAll = function(name) {
    return this.map[normalizeName(name)] || []
  }

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  }

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = [normalizeValue(value)]
  }

  // Instead of iterable for now.
  Headers.prototype.forEach = function(callback) {
    var self = this
    Object.getOwnPropertyNames(this.map).forEach(function(name) {
      callback(name, self.map[name])
    })
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result)
      }
      reader.onerror = function() {
        reject(reader.error)
      }
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader()
    reader.readAsArrayBuffer(blob)
    return fileReaderReady(reader)
  }

  function readBlobAsText(blob) {
    var reader = new FileReader()
    reader.readAsText(blob)
    return fileReaderReady(reader)
  }

  var support = {
    blob: 'FileReader' in self && 'Blob' in self && (function() {
      try {
        new Blob();
        return true
      } catch(e) {
        return false
      }
    })(),
    formData: 'FormData' in self
  }

  function Body() {
    this.bodyUsed = false


    this._initBody = function(body) {
      this._bodyInit = body
      if (typeof body === 'string') {
        this._bodyText = body
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body
      } else if (!body) {
        this._bodyText = ''
      } else {
        throw new Error('unsupported BodyInit type')
      }
    }

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this)
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      }

      this.arrayBuffer = function() {
        return this.blob().then(readBlobAsArrayBuffer)
      }

      this.text = function() {
        var rejected = consumed(this)
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return readBlobAsText(this._bodyBlob)
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as text')
        } else {
          return Promise.resolve(this._bodyText)
        }
      }
    } else {
      this.text = function() {
        var rejected = consumed(this)
        return rejected ? rejected : Promise.resolve(this._bodyText)
      }
    }

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      }
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    }

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

  function normalizeMethod(method) {
    var upcased = method.toUpperCase()
    return (methods.indexOf(upcased) > -1) ? upcased : method
  }

  function Request(url, options) {
    options = options || {}
    this.url = url

    this.credentials = options.credentials || 'omit'
    this.headers = new Headers(options.headers)
    this.method = normalizeMethod(options.method || 'GET')
    this.mode = options.mode || null
    this.referrer = null

    if ((this.method === 'GET' || this.method === 'HEAD') && options.body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(options.body)
  }

  function decode(body) {
    var form = new FormData()
    body.trim().split('&').forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
    return form
  }

  function headers(xhr) {
    var head = new Headers()
    var pairs = xhr.getAllResponseHeaders().trim().split('\n')
    pairs.forEach(function(header) {
      var split = header.trim().split(':')
      var key = split.shift().trim()
      var value = split.join(':').trim()
      head.append(key, value)
    })
    return head
  }

  Body.call(Request.prototype)

  function Response(bodyInit, options) {
    if (!options) {
      options = {}
    }

    this._initBody(bodyInit)
    this.type = 'default'
    this.url = null
    this.status = options.status
    this.ok = this.status >= 200 && this.status < 300
    this.statusText = options.statusText
    this.headers = options.headers instanceof Headers ? options.headers : new Headers(options.headers)
    this.url = options.url || ''
  }

  Body.call(Response.prototype)

  self.Headers = Headers;
  self.Request = Request;
  self.Response = Response;

  self.fetch = function(input, init) {
    // TODO: Request constructor should accept input, init
    var request
    if (Request.prototype.isPrototypeOf(input) && !init) {
      request = input
    } else {
      request = new Request(input, init)
    }

    return new Promise(function(resolve, reject) {
      var xhr = new XMLHttpRequest()

      function responseURL() {
        if ('responseURL' in xhr) {
          return xhr.responseURL
        }

        // Avoid security warnings on getResponseHeader when not allowed by CORS
        if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
          return xhr.getResponseHeader('X-Request-URL')
        }

        return;
      }

      xhr.onload = function() {
        var status = (xhr.status === 1223) ? 204 : xhr.status
        if (status < 100 || status > 599) {
          reject(new TypeError('Network request failed'))
          return
        }
        var options = {
          status: status,
          statusText: xhr.statusText,
          headers: headers(xhr),
          url: responseURL()
        }
        var body = 'response' in xhr ? xhr.response : xhr.responseText;
        resolve(new Response(body, options))
      }

      xhr.onerror = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.open(request.method, request.url, true)

      if (request.credentials === 'include') {
        xhr.withCredentials = true
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob'
      }

      request.headers.forEach(function(name, values) {
        values.forEach(function(value) {
          xhr.setRequestHeader(name, value)
        })
      })

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
    })
  }
  self.fetch.polyfill = true
})();

},{}]},{},[1]);
