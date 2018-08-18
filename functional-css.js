
(function(){
    var $counterMax = 50;
    var $counterMult = 1;
    /*
    xs up to $sm
    sm up to $md
    md up to $lg
    lg up to $xl
    xl above
    using bootstrap 4 default breakpoints
    */
    var $sm = 576;
    var $md = 768;
    var $lg= 992;
    var $xl= 1200;
    var current;
    var stylesheet = cssx();
    function createLoop(className, attribute, $functionCounterMult, $unit, $iterable, $alternateMax){
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
            'lg' : $lg,
            'xl' : $xl
        }
        var mediaKeys = [
            'all',
            'xs',
            'sm',
            'md',
            'lg',
            'xl'
        ];
            
        mediaSheet = {};
        var key;
        var nextKey;
        for(var mediaCounter = 0; mediaCounter < mediaKeys.length; mediaCounter += 1){
            key = mediaKeys[mediaCounter];
            current = {}; 
            //all will cover any length
            if(key == 'all'){
                sheet = {'@media all': {}};
                mediaSheet[key] = stylesheet.add( sheet );
            } else
            //xs will cover any length up to the sm length
            if(key == 'xs'){
                var sheet = {};
                sheet['@media  (max-width: ' + medias[key] + 'px)'] = {};
                mediaSheet[key] = stylesheet.add(sheet);
                //sm and beyond will cover their respective lengths
            } else if (key == 'xl'){
                var sheet = {};
                sheet['@media  (min-width: ' + medias[key] + 'px)'] = {};
                mediaSheet[key] = stylesheet.add(sheet);
            } else {
                var nextKey = mediaKeys[mediaCounter + 1];
                var sheet = {};
                var line = '@media (min-width: ' + medias[key] + 'px) and (max-width: ' + medias[nextKey] + 'px)';
                sheet[line] = {};
                mediaSheet[key] = stylesheet.add(sheet);
            }
            var prefix = key != 'all' ? key + '-' : '';
            //everything is important that we do here
            var important = "!important";
            if(window.isNaN($functionCounterMult)){
                fullKey = "." + prefix + className;
                current[fullKey] = {};
                current[fullKey][attribute] = $functionCounterMult + important;                   
            }
            if($iterable !== undefined){
                for(var $counter in $iterable) {
                    var fullKey = "." + prefix + className + "-" + $counter;
                    current[fullKey] = {};
                    current[fullKey][attribute] = $iterable[$counter] + important;                   
                }
            } else {
                var $max = $alternateMax ? $alternateMax : $counterMax;
                for(var $counter = 0; $counter <= $max; $counter +=1) {
                    var fullKey = "." + prefix + className + '-' + ($counter  * $functionCounterMult);
                    current[fullKey] = {};
                    current[fullKey][attribute] = ($counter * $counterMult * $functionCounterMult) + $unit + important;                   
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

    createLoop('h', 'height', 1);
    createLoop('hm', 'max-height', 1);
    createLoop('w', 'width', 1);
    createLoop('wm', 'max-width', 1);

    createLoop('lh', 'line-height', 1);

    createLoop('hp', 'height', 2, "%");
    createLoop('wp', 'width', 2, "%");
    createLoop('hmp', 'max-height', 2, "%");
    createLoop('wmp', 'max-width', 2, "%");

    createLoop('pl', 'padding-left');
    createLoop('pr', 'padding-right');
    createLoop('pt', 'padding-top');
    createLoop('pb', 'padding-bottom');
    createLoop('pa', 'padding');

    createLoop('brtrp', 'border-radius-top-right', 1, '%');
    createLoop('brtlp', 'border-radius-top-left', 1, '%');
    createLoop('brbrp', 'border-radius-bottom-right', 1, '%');
    createLoop('brblp', 'border-radius-bottom-left', 1, '%');

    createLoop('brtp', 'border-radius-top-right', 1, '%');
    createLoop('brtp', 'border-radius-top-left', 1, '%');

    createLoop('brbp', 'border-radius-bottom-right', 1, '%');
    createLoop('brbp', 'border-radius-bottom-left', 1, '%');

    createLoop('brap', 'border-radius', 1, '%');

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
    createLoop('fw', 'font-weight', 100, '', undefined, 1000);

    createLoop('bw', 'border-width');
    createLoop('bsa', 'border-style', 1, '', {
        'dashed':'dashed',
        'solid':'solid'
    });

    createLoop('bst', 'border-style', 1, '', {
        'dashed':'dashed',
        'solid':'solid',
        'double':'double',
        'dotted':'dotted',
    });
    createLoop('tac', 'text-align', 'center');
    createLoop('tal', 'text-align', 'left');
    createLoop('tar', 'text-align', 'right');
})()
