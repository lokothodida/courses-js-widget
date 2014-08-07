/**

Copyright (c) 2013 University of Oxford

All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
* Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
* Neither the name of the University of Oxford nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

*/

(function($) {
  // load the scripts
  var url = '';

  $('head').append(
    '<script src="' + url + 'lib/dataTables/js/jquery.dataTables.min.js"></script>' +
    '<script src="' + url + 'lib/moment/moment.min.js"></script>' +
    '<script src="' + url + 'js/column.js"></script>' +
    '<script src="' + url + 'js/parametersreader.js"></script>' +
    '<script src="' + url + 'js/options.js"></script>' +
    '<script src="' + url + 'js/widgetui.js"></script>' +
    '<script src="' + url + 'js/oxdatacall.js"></script>' +
    '<script src="' + url + 'js/responseparser.js"></script>' +
    '<script src="' + url + 'js/tablebuilder.js"></script>' +
    '<script src="' + url + 'js/globals.js"></script>' +
    '<script src="' + url + 'js/row.js"></script>'
  );
})(jQuery);

(function($, moment, OxfordCoursesWidget) {
  // bring globals into scope
  for (i in OxfordCoursesWidget) {
    var global = OxfordCoursesWidget[i];
    window[i] = global;
  }

  add_css("//static.data.ox.ac.uk/lib/DataTables/media/css/jquery.dataTables.css");
  add_css("//static.data.ox.ac.uk/courses-js-widget/courses.css");

  // load the jQuery plugin
  $.fn.oxfordCoursesWidget = function(options) {
    var settings = $.extend({
      dataTablesConfig: {}
    }, options);

    return this.each(function(i, e) {
      setUp(e, settings.dataTablesConfig);
    });
  };

  // run plugin on the containers
  $(document).ready(function() {
    $('.courses-widget-container').oxfordCoursesWidget();
  });
})(jQuery, moment, OxfordCoursesWidget);
