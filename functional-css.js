
(function(){
    var $counterMax = 50;
    var $counterMult = 1;
    /*
    xs up to $sm
    sm up to $md
    md up to $lg
    lg above
    */
    var $sm = 768;
    var $md = 992;
    var $lg= 1200;
    var stylesheet = cssx();
    function createLoop(className, attribute, $functionCounterMult, $unit, $iterable){
        if($functionCounterMult === undefined){
            $functionCounterMult = 1;
        }
        if($unit === undefined){
            $unit = 'px';
        }
        
        var medias = {
            'all' : 0,
            'xs' : $sm,
            'sm' : $sm,
            'md' : $md,
            'lg' : $lg
        }
        mediaSheet = {};
        for(var key in medias){
            current = {}; 
            if(key == 'all'){
                mediaSheet[key] = stylesheet.add( { });
            }
            if(key == 'xs'){
                var sheet = {};
                sheet['@media screen and (max-width: ' + medias[key] + 'px)'] = {};
                mediaSheet[key] = stylesheet.add(sheet);
            } else {
                var sheet = {};
                sheet['@media screen and (min-width: ' + medias[key] + 'px)'] = {};
                mediaSheet[key] = stylesheet.add(sheet);
            }
            var prefix = key != 'all' ? key + '-' : '';
            if(window.isNaN($functionCounterMult)){
                fullKey = "." + prefix + className;
                current[fullKey] = {};
                current[fullKey][attribute] = $functionCounterMult;                   
            }
            if($iterable !== undefined){
                for(var $counter in $iterable) {
                    var fullKey = "." + prefix + className + "-" + $counter;
                    current[fullKey] = {};
                    current[fullKey][attribute] = $iterable[$counter];                   
                }
            } else {
                for(var $counter = 0; $counter < $counterMax; $counter +=1) {
                    var fullKey = "." + prefix + className + '-' + ($counter  * $functionCounterMult);
                    current[fullKey] = {};
                    current[fullKey][attribute] = ($counter * $counterMult * $functionCounterMult) + $unit;                   
                }
            }
            mediaSheet[key].nested(current);
        }
    }
    createLoop('ml', 'margin-left');
    createLoop('mr', 'margin-right');
    createLoop('mt', 'margin-top');
    createLoop('mb', 'margin-bottom');
    createLoop('ma', 'margin');

    createLoop('ml', 'margin-left', -1);
    createLoop('mr', 'margin-right', -1);
    createLoop('mt', 'margin-top', -1);
    createLoop('mb', 'margin-bottom', -1);
    createLoop('ma', 'margin', -1);

    createLoop('pl', 'padding-left');
    createLoop('pr', 'padding-right');
    createLoop('pt', 'padding-top');
    createLoop('pb', 'padding-bottom');
    createLoop('pa', 'padding');

    createLoop('brtr', 'border-radius-top-right');
    createLoop('brtl', 'border-radius-top-left');
    createLoop('brbr', 'border-radius-bottom-right');
    createLoop('brbl', 'border-radius-bottom-left');

    createLoop('brt', 'border-radius-top-right');
    createLoop('brt', 'border-radius-top-left');

    createLoop('brb', 'border-radius-bottom-right');
    createLoop('brb', 'border-radius-bottom-left');

    createLoop('bra', 'border-radius');

    createLoop('fs', 'font-size');

    createLoop('bw', 'border-width');
    createLoop('bsa', 'border-style', 1, '', {
        'dashed':'dashed',
        'solid':'solid'
    });

    createLoop('bst', 'border-style', 1, '', {
        'dashed':'dashed',
        'solid':'solid'
    });
    createLoop('bsb', 'border-style', 1, '', {
        'dashed':'dashed',
        'solid':'solid'
    });
    createLoop('bsr', 'border-style', 1, '', {
        'dashed':'dashed',
        'solid':'solid'
    });
    createLoop('bsl', 'border-style', 1, '', {
        'dashed':'dashed',
        'solid':'solid'
    });
    createLoop('tac', 'text-align', 'center');
    createLoop('tal', 'text-align', 'left');
    createLoop('tar', 'text-align', 'right');

})()
