/**
 * GNU LibreJS - A browser add-on to block nonfree nontrivial JavaScript.
 * *
 * Copyright (C) 2011, 2012, 2014 Loic J. Duros
 * Copyright (C) 2014, 2015 Nik Nyby
 *
 * This file is part of GNU LibreJS.
 *
 * GNU LibreJS is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * GNU LibreJS is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with GNU LibreJS.  If not, see <http://www.gnu.org/licenses/>.
 */

var streamLoader = require("../lib/http_observer/stream_loader.js");
var {Cc, Ci, Cu, Cm, Cr} = require("chrome");

exports.testListener = function (assert) { 
    var mozStreamLoader = Cc["@mozilla.org/network/unichar-stream-loader;1"].
        createInstance(Ci.nsIUnicharStreamLoader);
    mozStreamLoader.init(streamLoader.streamLoader().listener);
    var ios = Cc["@mozilla.org/network/io-service;1"]
            .getService(Ci.nsIIOService);
    var chan = ios.newChannel("http://example.com", null, null);
    chan.asyncOpen(mozStreamLoader, null);
    assert.ok(true);
};

require('sdk/test').run(exports);
