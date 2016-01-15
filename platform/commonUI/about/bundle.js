/*****************************************************************************
 * Open MCT Web, Copyright (c) 2014-2015, United States Government
 * as represented by the Administrator of the National Aeronautics and Space
 * Administration. All rights reserved.
 *
 * Open MCT Web is licensed under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0.
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 *
 * Open MCT Web includes source code licensed under additional open source
 * licenses. See the Open Source Licenses file (LICENSES.md) included with
 * this source code distribution or the Licensing information page available
 * at runtime from the About dialog for additional information.
 *****************************************************************************/
/*global define*/

define([
    "./src/LogoController",
    "./src/AboutController",
    "./src/LicenseController",
    'legacyRegistry'
], function (
    LogoController,
    AboutController,
    LicenseController,
    legacyRegistry
) {
    "use strict";

    legacyRegistry.register("platform/commonUI/about", {
        "name": "About Open MCT Web",
        "extensions": {
            "templates": [
                {
                    "key": "app-logo",
                    "priority": "optional",
                    "templateUrl": "templates/app-logo.html"
                },
                {
                    "key": "about-logo",
                    "priority": "preferred",
                    "templateUrl": "templates/about-logo.html"
                },
                {
                    "key": "about-dialog",
                    "templateUrl": "templates/about-dialog.html"
                },
                {
                    "key": "overlay-about",
                    "templateUrl": "templates/overlay-about.html"
                },
                {
                    "key": "license-apache",
                    "templateUrl": "templates/license-apache.html"
                },
                {
                    "key": "license-mit",
                    "templateUrl": "templates/license-mit.html"
                }
            ],
            "controllers": [
                {
                    "key": "LogoController",
                    "depends": [
                        "overlayService"
                    ],
                    "implementation": LogoController
                },
                {
                    "key": "AboutController",
                    "depends": [
                        "versions[]",
                        "$window"
                    ],
                    "implementation": AboutController
                },
                {
                    "key": "LicenseController",
                    "depends": [
                        "licenses[]"
                    ],
                    "implementation": LicenseController
                }
            ],
            "licenses": [
                {
                    "name": "Json.NET",
                    "version": "6.0.8",
                    "author": "Newtonsoft",
                    "description": "JSON serialization/deserialization",
                    "website": "http://www.newtonsoft.com/json",
                    "copyright": "Copyright (c) 2007 James Newton-King",
                    "license": "license-mit",
                    "link": "https://github.com/JamesNK/Newtonsoft.Json/blob/master/LICENSE.md"
                },
                {
                    "name": "Nancy",
                    "version": "0.23.2",
                    "author": "Andreas Håkansson, Steven Robbins and contributors",
                    "description": "Embedded web server",
                    "website": "http://nancyfx.org/",
                    "copyright": "Copyright © 2010 Andreas Håkansson, Steven Robbins and contributors",
                    "license": "license-mit",
                    "link": "http://www.opensource.org/licenses/mit-license.php"
                },
                {
                    "name": "Nancy.Hosting.Self",
                    "version": "0.23.2",
                    "author": "Andreas Håkansson, Steven Robbins and contributors",
                    "description": "Embedded web server",
                    "website": "http://nancyfx.org/",
                    "copyright": "Copyright © 2010 Andreas Håkansson, Steven Robbins and contributors",
                    "license": "license-mit",
                    "link": "http://www.opensource.org/licenses/mit-license.php"
                },
                {
                    "name": "SuperSocket",
                    "version": "0.9.0.2",
                    "author": " Kerry Jiang",
                    "description": "Supports SuperWebSocket",
                    "website": "https://supersocket.codeplex.com/",
                    "copyright": "Copyright 2010-2014 Kerry Jiang (kerry-jiang@hotmail.com)",
                    "license": "license-apache",
                    "link": "https://supersocket.codeplex.com/license"
                },
                {
                    "name": "SuperWebSocket",
                    "version": "0.9.0.2",
                    "author": " Kerry Jiang",
                    "description": "WebSocket implementation for client-server communication",
                    "website": "https://superwebsocket.codeplex.com/",
                    "copyright": "Copyright 2010-2014 Kerry Jiang (kerry-jiang@hotmail.com)",
                    "license": "license-apache",
                    "link": "https://superwebsocket.codeplex.com/license"
                },
                {
                    "name": "log4net",
                    "version": "2.0.3",
                    "author": "Apache Software Foundation",
                    "description": "Logging",
                    "website": "http://logging.apache.org/log4net/",
                    "copyright": "Copyright © 2004-2015 Apache Software Foundation.",
                    "license": "license-apache",
                    "link": "http://logging.apache.org/log4net/license.html"
                }
            ],
            "routes": [
                {
                    "when": "/licenses",
                    "templateUrl": "templates/licenses.html"
                },
                {
                    "when": "/licenses-md",
                    "templateUrl": "templates/licenses-export-md.html"
                }
            ]
        }
    });
});
