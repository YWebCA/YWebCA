## How to Use

You should call the `spaceCube.init()` function at the bottom of your `body` element. `init()` takes a POJO of the following options:

* `planets`: a string that selects all your containers
* `cubes`: a string that selects all your movable widgets

    <script>
      spaceCube.init({
        planets: 'section',
        cubes: 'div'
      });
    </script>