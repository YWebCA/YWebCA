$(document).ready( function () {

  // setup
  var nodes = $('#top').children();
  nodes.addClass('node');
  nodes.before('<div class="gutter"></div>');
  nodes.last().after('<div class="gutter"></div>');
  $('#bottom').append('<div class="gutter"></div>');
  
  // animtion cascade
  $('section').on( 'click', '.node', function () {
    var cube = $(this);
    var gutter = cube.next();
    var parent = cube.closest('section');
    cube.animate( {
      width: 0,
      height: 0
    }, 400, 'easeInQuad', function () {
      gutter.animate( {
        'flex-grow': 0.00001
      }, 400, 'easeOutQuad', function () {
        cube.remove();
        gutter.remove();
        if ( parent.next().length == 0 )
          parent.siblings().first().append(cube, gutter);
        else parent.next().append(cube, gutter);
        gutter.animate( {
          'flex-grow': 1
        }, 400, 'easeInQuad', function () {
          cube.animate( {
            width: '10vw',
            height: '10vw'
          }, 400, 'easeOutQuad', function () {} )
        } );
      } );
    } );
  } );

} );