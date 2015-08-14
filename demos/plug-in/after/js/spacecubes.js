var spaceCube = {};
spaceCube.init = function ( options ) {
  var planets = $(options.planets);
  var cubes = $(options.cubes);
  // setup
  var gutter_str = '<div class="sc-gutter"></div>';
  planets.addClass('sc-planet');
  cubes.addClass('sc-cube');
  cubes.before(gutter_str);
  planets.append(gutter_str);
  
  // animtion cascade
  planets.on( 'click', '.sc-cube', function () {
    var cube = $(this);
    var gutter = cube.next();
    var planet = cube.parents('.sc-planet');
    var old_w = cube.width();
    var old_h = cube.height();
    cube.animate( {
      width: 0,
      height: 0
    }, 400, 'easeInQuad', function () {
      gutter.animate( {
        'flex-grow': 0.00001
      }, 400, 'easeOutQuad', function () {
        cube.remove();
        gutter.remove();
        planets.each( function ( i, e ) {
          if ( planet[0] === e ) {
            planets.eq( (i+1) % planets.length ).append( cube, gutter );
          }
        } );
        gutter.animate( {
          'flex-grow': 1
        }, 400, 'easeInQuad', function () {
          cube.animate( {
            width: old_w,
            height: old_h
          }, 400, 'easeOutQuad', function () {} )
        } );
      } );
    } );
  } );
};