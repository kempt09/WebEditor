function collect(){

    'use strict';

    var html = $('#HTML').val(),
        css = $('#CSS').val(),
        js = $('#JS').val(),
        visibleContent;

    function format() {

        var print = [

            { code: '<div id="content">' + '<style>' + css},
            { code: '<div>' + html + '</div>'       },
            { code: '</style>' + '<script>' + js + '</script>'   },
            { code: '</div>'                        }
        ];

        visibleContent = print.map(function (content) {

            return content.code;

        });
    }

    $('#display').empty().append(format(), visibleContent);

}

