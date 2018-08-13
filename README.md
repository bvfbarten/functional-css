# functional-css

#    Compile bash requires uglifyjs.

Sizes:
xs,sm,md,lg,xl act as prefixes

* example: 
    * xs-ml-10 margin-left:10px for extra-small devices 
    * xs-ml--10 margin-left:-10px for extra-small devices
    
    


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
    
