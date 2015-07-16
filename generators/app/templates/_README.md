# Chapter 3: <small>Functions</small>

Welcome to *Eloquent JavaScript*, Chapter 3!

These are the instructions for the exercises in Chapter 3. Render them in
Mardown for maximum readablility. Remember that all your work will be done in
the `./index.js` file, and you can check your work by running

    $ ywca test chapter03 --color | less

from your `ywebca` directory. When all your tests are green, run

    $ hostname > check.txt
    $ pwd >> check.txt
    $ ywca test chapter03 >> check.txt

and attach `check.txt` to the appropriate card on Trello.

### End of Chapter Exercises

* [Minimum](#minimum)
* [Recursion](#recrusion-exercise)
* [Bean Counting](#bean-counting)

<br / >

* * *

<br / >

## Defining a Function

These exercises correspond to [this section of the text](http://eloquentjavascript.net/03_functions.html#p_pZXHY2QZfp).

<table>
  <thead>
    <tr>
      <th>Exercise #</th>
      <th>Goal</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Defining 1</th>
      <td>
        Use a function expression to define a function named <code>three</code>.
        That function should return the value <code>3</code>.
      </td>
    </tr>
    <tr>
      <th>Defining 2</th>
      <td>
        <p>
          Use a function expression to define a function named
          <code>myLog</code>. <code>myLog</code> should accept one parameter
          named <code>message</code>. <code>myLog</code> should output to the
          console...
        </p>
        <pre>The Log Says: {message}</pre>
        <p>
          ...where <code>{message}</code> is the value of the parameter
          <code>message</code>. Do not include the braces in your output.
        </p>
      </td>
    </tr>
    <tr>
      <th>Defining 3</th>
      <td>
        Use a function expression to define a function named
        <code>square</code>. <code>square</code> should accept one parameter
        named <code>number</code>. The function should square
        <code>number</code> (i.e. multiply it by itself). Output the result to
        the console. Then return the result.
      </td>
    </tr>
  </tbody>
</table>

<br / >

* * *

<br / >

## Parameters and Scopes

These exercises correspond to [this section of the text](http://eloquentjavascript.net/03_functions.html#p_PmG96omvw7).

<table>
  <thead>
    <tr>
      <th>Exercise #</th>
      <th>Goal</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Parameters 1</th>
      <td>
        <ul>
          <li>
            Create a function inside <code>Exer.parameters1</code> named
            <code>spaceCubeDetector</code>.
          </li>
          <li>
            <code>spaceCubeDetector</code> should accept a <code>length</code>,
            <code>width</code>, and <code>height</code>.
          </li>
          <li>
            When length, width, and height are all equal,
            <code>spaceCubeDetector</code> should return the string value
            <code>SPACE CUBE DETECTED!!</code>
          </li>
          <li>
            When its length, width, or height is not all equal to each other, it
            should return the string value <code>THIS IS NO SPACE CUBE!</code>
          </li>
          <li>
            <code>Exer.parameters1</code> should return
            <code>spaceCubeDetector</code>.
          </li>
      </td>
    </tr>
    <tr>
      <th>Parameters 2</th>
      <td>
        <p>
          <code>Exer.parameters2</code> receives <code>spaceCubeDetector</code>
          as a paremeter.
        </p>
        <ul>
          <li>
            Run <code>spaceCubeDetecor</code> once with a length of
            <code>3</code>, width of <code>5</code>, and height of
            <code>3.14159265359</code>. Log its return value.
          </li>
          <li>
            Run it with a length of <code>7</code>, width of <code>7</code>, and
            height of <code>7</code> and log its return value.
          </li>
          <li>
            Run it with a length of <code>1</code>, width of <code>2</code>, and
            height of <code>3</code> and log its return value.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th>Scope 1&ndash;5</th>
      <td>
        <p>
          For Scope exercises 1-5, read through the following code and find the
          values for the variables where noted by the comments. Write your
          asnwers as return values for the functions
          <code>Exer.scope[1-5]</code>.
        </p>
<pre>Exer.scopeExample = function() {

  var foo = 2;
  var bar = 7;
  var quux = 11;

  var skip = function() {
    var foo = 5;
    console.log(foo); // Scope 1: What value of foo is logged?
    quux = foo *  bar;
    console.log(quux); // Scope 2: What value of quux is logged?
    return bar;
  };

  var scoop = function(quux) {
    console.log(quux); // Scope 4: What value of quux is logged?
  };

  var scrap = function() {
    console.log(quux); // Scope 5: What value of quux is logged?
  };

  foo = skip();
  scoop(foo); // Scope 3: What value of foo is passed to the function Scoop?
  scrap();

};</pre>
        <p>
          This code also appears in <code>./index.js</code>. You may find
          the syntax highlighting helpful.
        </p>
      </td>
    </tr>
  </tbody>
</table>

<br / >

* * *

<br / >

## Nested Scope

These exercises correspond to [this section of the text](http://eloquentjavascript.net/03_functions.html#p_xIVEBXHt8p).

<table>
  <thead>
    <tr>
      <th>Exercise #</th>
      <th>Goal</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nested 1-20</th>
      <td>
        <p>
          For Nested Scope exercises 1-20, read through the following code and
          find the values for the variables where noted by the comments. Write
          your answers as the return values for functions Exer.nest[1-20].
        </p>
<pre>Exer.nestExample = function() {

  var foo = 2;
  var bar = 5;
  var quux = 7;

  var nest = function(foo) {

    var bar = 11;

    var finch = function(foo) {
      console.log(foo); // Nest 8: What value of foo is logged?
      bar = foo;
      quux = foo;
    };

    console.log(bar); // Nest 4: What value of bar is logged?
    console.log(quux); // Nest 5: What value of quux is logged?

    var robin = function() {
      var bar = 13;
      quux = bar;
      console.log(quux); // Nest 11: What value of quux is logged?
    };

    console.log(bar); // Nest 6: What value of bar is logged?
    console.log(quux); // Nest 7: What value of quux is logged?

    var batman = function() {
      foo = 0;
      bar = 0;
      quux = 0;
      return "I AM THE NIGHT!!";
    };

    finch(17);

    console.log(bar); // Nest 9: What value of bar is logged?
    console.log(quux); // Nest 10: What value of quux is logged?

    robin();

    console.log(quux); // Nest 12: What value of quux is logged?

    if (batman()) {
      console.log(foo); // Nest 13: What value of foo is logged?
      console.log(bar); // Nest 14: What value of bar is logged?
      console.log(quux); // Nest 15: What value of quux is logged?
    }
  };

  console.log(foo); // Nest 1: What value of foo is logged?
  console.log(bar); // Nest 2: What value of bar is logged?
  console.log(quux); // Nest 3: What value of quux is logged?

  nest(19);

  console.log(foo); // Nest 16: What value of foo is logged?
  console.log(bar); // Nest 17: What value of bar is logged?
  console.log(quux); // Nest 18: What value of quux is logged?

};</pre>
        <p>
          This code also appears in <code>./index.js</code>. You may find
          the syntax highlighting helpful.
        </p>
      </td>
    </tr>
  </tbody>
</table>

<br / >

* * *

<br / >

## Functions as Values

These exercises correspond to [this section of the text](http://eloquentjavascript.net/03_functions.html#p_uliI/PmHtG).

<table>
  <thead>
    <tr>
      <th>Exercise #</th>
      <th>Goal</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Values 1</th>
      <td>
        <p>
          Your project manager heard about your function
          <code>spaceCubeDetector</code>. Understanding that it takes a length,
          a width, and a height, he has decided that it would make a good
          function to find the volume of a rectangular prism. You try to correct
          him, but the boss is the boss.
        </p>
        <p>
          Given the parameters <code>volume</code> and
          <code>spaceCubeDetector</code>, assign the
          <code>spaceCubeDetector</code> function value to the
          <code>volume</code> variable. Call <code>volume</code> after the
          assignment to assure it was assigned. Then, return the
          <code>volume</code> variable.
        </p>
        <p>Your project manager can figure out his mistake later.</p>
      </td>
    </tr>
    <tr>
      <th>Values 2</th>
      <td>
        <p>
          Your project manager just came back. He doesn't think the volume of a
          7 by 3 by 2 space is "THIS IS NO SPACE CUBE!" He is right. You were
          right first, but it's best not to correct him. Just make the
          necessary changes.
        </p>
        <p>
          <code>volume</code> has been passed back to you. Assign a new
          function to <code>volume</code> that takes a length, a width, and a
          height and returns their product. Return the new <code>volume</code>
          function when you are done.
        </p>
      </td>
    </tr>
  </tbody>
</table>

<br / >

* * *

<br / >

## Declaration Notation

These exercises correspond to [this section of the text](http://eloquentjavascript.net/03_functions.html#p_OGu288jvIV).

<table>
  <thead>
    <tr>
      <th>Exercise #</th>
      <th>Goal</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Declaration 1</th>
      <td>
        Use declaration notation to declare a function called
        <code>testNinja</code> that takes no parameters and logs the string
        <code>You gotta believe!</code>.
      </td>
    </tr>
    <tr>
      <th>Declaration 2</th>
      <td>
        <ol>
          <li>
            Call a function called <code>trainNinja</code> with the argument
            <code>"punch"</code> and log what <code>trainNinja</code>
            returns.
          </li>
          <li>
            After/below that, use declaration notation to declare the
            <code>trainNinja</code> function. <code>trainNinja</code> takes one
            argument called <code>move</code>. <code>trainNinja</code> should
            use <code>move</code> to return the string <code>Kick, {move},
            block! It's all in the mind!</code> (do not include the curly braces
            in your return string).
          </li>
        </ol>
      </td>
    </tr>
  </tbody>
</table>

<br / >

* * *

<br / >

## The Call Stack

These exercises correspond to [this section of the text](http://eloquentjavascript.net/03_functions.html#c_wm1DV2942b).

You are given your very own pancake flipping robot named `jack`. He can make
pancakes with his two spatula arms and hold warm pancakes on a plate on
his head.

Jack responds to two oddly-named commands: `push()` and `pop()`. When you tell
Jack to `push`, he cooks and flips a flapjack onto his stack. When you tell
Jack to `pop`, he takes a flapjack off of his stack and gives it to you. And
the best part is that you can tell him what flavor of pancake to `push` by
invoking the command with a string.

So you have:

* `jack`: a pancake-flipping robot. You can log Jack to see what pancakes are
  on his plate, i.e. `console.log( jack )`
* `jack.push( 'flavor' )`: put a pancake of `flavor` on Jack's stack. You can
  push multiple flavors at once, e.g.
  `jack.push( 'flavor1', 'flavor2', 'flavor3' )`
* `jack.pop()`: get a pancake off the stack. `pop()` returns a string

<table>
  <thead>
    <tr>
      <th>Exercise #</th>
      <th>Goal</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Stack 1</th>
      <td>
        <ol>
          <li>
            Push three pancakes in this order: <code>apple</code>,
            <code>banana</code>, and <code>chocolate chip</code>.
          </li>
          <li>
            Pop one pancake and save it in a variable called <code>yum</code>.
          </li>
          <li>
            Push two pancakes: <code>bacon</code> and <code>snozzberries</code>.
          </li>
          <li>
            Pop one pancake and concatenate it to the end of <code>yum</code>,
            but put a space (<code>' '</code>) between the two flavors.
          </li>
          <li>Return <code>yum</code>.</li>
        </ol>
      </td>
    </tr>
    <tr>
      <th>Stack 2</th>
      <td>
        <p>
          Jack already has three pancakes warming on his plate:
          <code>apple</code>, <code>banana</code>, and <code>bacon</code>.
        </p>
        <ol>
          <li>Pop two pancakes.</li>
          <li>Push one <code>breadfruit</code> pancake.</li>
          <li>Log how many pancakes Jack has.</li>
          <li>
            Push two pancakes: <code>strawberry</code> and <code>durian</code>.
          </li>
          <li>Pop one pancake and then push it back on.</li>
          <li>Log the flavor of the pancake on top of the stack.</li>
          <li>
            Pancake number 2 from the bottom is pancake number _____ from the
            top. Log your answer.
          </li>
          <li>Return Jack.</li>
        </ol>
      </td>
    </tr>
  </tbody>
</table>

So what does a stack of pancakes have to do with running a program? Whenever
you call a function, the program has to remember where to return to when the
function ends. So, the program makes a note and pushes the note onto the call
stack. When the function returns, the program pops the last location off the
stack and goes back to where it left off before the call. We can only add new
calls (pancakes) to the top of the stack, and we can only remove them from the
very top of the stack. That means we can only return to where were were
last&mdash;we can't skip any steps.

<br / >

* * *

<br / >

## Optional Arguments

These exercises correspond to [this section of the text](http://eloquentjavascript.net/03_functions.html#c_d9pZXzK1kY).

<table>
  <thead>
    <tr>
      <th>Exercise #</th>
      <th>Goal</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Optional 1</th>
      <td>
        Define a function that takes 2 parameters and return it.
      </td>
    </tr>
    <tr>
      <th>Optional 2</th>
      <td>
        We've passed you back the function value from the function you made last exercise. Call it with 4 arguments.
      </td>
    </tr>
  </tbody>
</table>

<br / >

* * *

<br / >

## Closure

These exercises correspond to [this section of the text](http://eloquentjavascript.net/03_functions.html#c_rwDFIqBrDl).

<table>
  <thead>
    <tr>
      <th>Exercise #</th>
      <th>Goal</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Closures 1</th>
      <td>
        <p>
          Your project manager tells you that your function
          <code>spaceCubeDetector</code> has been a great boon to the company
          and is producing value hand over fist. However, the department in
          charge of producing heights takes twice as long as the as either of
          the departments for length or width. The department in charge of
          running <code>spaceCubeDetector</code> is getting held up while
          waiting for heights to come in. Your project manager would like it if
          the length and width could be entered seperately from the height.
        </p>
        <p>
          Create a new version of spaceCubeDetector that takes a length and a
          width and returns another function. The function spaceCubeDetector
          returns should take a height and return the string <code>SPACE CUBE
          DETECTED!!</code> when length, width, and height are the same and the
          string <code>THIS IS NO SPACE CUBE!</code> when they do not.
        </p>
        <p>Return the new <code>spaceCubeDetector</code>.</p>
      </td>
    </tr>
    <tr>
      <th>Closures 2</th>
      <td>
        <p>
          Your project manager loves the changes you made, however, the llamas
          responsible for opperating <code>spaceCubeDetector</code> have been
          sacked. The management would like to change the workflow for
          <code>spaceCubeDetector</code> such that the
          <code>spaceCubeDetector</code> fuction will be sent to the length
          department, who will then pass a function to the width department,
          who, in turn, will pass a function to the height department. The
          height department will, in turn (when they get to it), pass the
          results to the relevant llamas.
        </p>
        <p>
          Your job in all of this is to make <code>spaceCubeDetector</code> into
          a function that takes a length and returns a function that takes a
          width and returns a function that takes a height and returns the
          normal results for <code>spaceCubeDetector</code>.
        </p>
        <p>Return the new <code>spaceCubeDetector</code>.</p>
      </td>
    </tr>
  </tbody>
</table>

<br / >

* * *

<br / >

## Recursion

These exercises correspond to [this section of the text](http://eloquentjavascript.net/03_functions.html#p_SZYpNI2fMu).

<table>
  <thead>
    <tr>
      <th>Exercise #</th>
      <th>Goal</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Recursion 1</th>
      <td>
        The AI department is developing a system to beat the game Contra for the
        Nintendo Entertainment System. The AI they've built is not very good. Your
        project manager a code that can be entered into the game to increase the AI's
        chances of beating the game. You are given the code and a virtual controller.
          
        Create a function to add to the AI that accepts `code` and `controller`.
          
        `code` is given as an object that contains a sequence of strings accessed through
        a `next`, `last`, and `curr`. `next` changes the current item of the sequence to
        the next. `last` changes the current item of the sequence to the last. `next`
        and `last` return the current item on success and undefined on fail. `curr`
        returns the current item in the sequence.
    
        'controller' accepts a string. When it recives the correct string for a sequence
        and is ready to receive another string in the sequence
    
        Note: The AI does not have access to for or while loops
      </td>
    </tr>
    <tr>
      <th>Recursion 2</th>
      <td>
        The neckbeards in archival found a puzzle box and want to see what it does.
        They've hooked it up to the mainframe and provided a JavaScript interface. They
        would like you to remotely open it, not that they think puzzle boxes can be
        dangerous.

        There are two things you can do to the puzzle box: click it and twist it. For
        each time it is clicked it can be twisted. To solve the puzzle box it must be
        clicked until it won't click anymore. Then it must be twisted for each time it
        was clicked.

        `puzzleBox` has a function `click` that, when called, returns a function value or
        `undefined` when it is out of functions. The returned function values can be called
        to twist `puzzleBox`.

        To solve `puzzleBox`, you must call the function values `click` returns in reverse
        order. To do this call `click` until it returns `undefined`. Then call each
        function value `click` returned.

        We'll use a recursive function that calls `puzzleBox.click` and stores its
        returned function value. If `puzzleBox.click` returns `undefined` instead of
        a function value the function will just end. Otherwise, call the recursive function
        again with `puzzleBox` as a parameter then call `puzzleBox.click`'s returned
        function value.
      </td>
    </tr>
  </tbody>
</table>

<br / >

* * *

<br / >

## Growing Functions

These exercises correspond to [this section of the text](http://eloquentjavascript.net/03_functions.html#p_acU+LwVT0i).

<table>
  <thead>
    <tr>
      <th>Exercise #</th>
      <th>Goal</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Growing 1</th>
      <td>
        Reduce the code in `Exer.growing1` by placing repetitive code into a new reusable function.
      </td>
    </tr>
  </tbody>
</table>

<br / >

* * *

<br / >

## Functions and Side Effects

These exercises correspond to [this section of the text](http://eloquentjavascript.net/03_functions.html#p_EWzoSpSKwh).

<table>
  <thead>
    <tr>
      <th>Exercise #</th>
      <th>Goal</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Side Effects 1</th>
      <td>
        Call each function defined in `Exer.sideEffectsExample` that is a pure function.
      </td>
    </tr>
    <tr>
      <th>Side Effects 2</th>
      <td>
        Call each function defined in `Exer.sideEffectsExample` that is not a pure function.
      </td>
    </tr>
  </tbody>
</table>

<br / >

* * *

<br / >

# End of Chapter Exercises

## Minimum

The instructions for this exercise can be found in [this section of the text](http://eloquentjavascript.net/03_functions.html#h_XTmO7z7MPq).

Work your solution in `./minimum.js`.

Once you have completed the specifications in the book,

1.  Prepare your solution so the test runner can see it. Modify `min`'s
    declaration to make it a member of the `Exer` object. It should look
    something like

        Exer.min = function ( arg1, arg2 ) { ...

2.  Create a function called `min3` (that is also a member of `Exer`) that
    accepts three parameters and returns the minimum of all three.

3.  Modify your solution such that `min` can find the minimum of either two or
    three arguments.

<br / >

* * *

<br / >

## Recursion exercise

The instructions for this exercise can be found in [this section of the text](http://eloquentjavascript.net/03_functions.html#p_iDq2OgBOGw).

Work your solution in `./recursion.js`.

Once you have completed the specifications in the book,

1.  Prepare your solution so the test runner can see it. Modify `isEven`'s
    declaration to make it a member of the `Exer` object. It should look
    something like

        Exer.isEven = function ( arg ) { ...

2.  Create a funciton called `isFooDivByBar` (that is also a member of Exer).
    This function should accept two parameters, `foo` and `bar`, and should
    return `true` if `foo` is divisible by `bar` and `false` if it isn't.

3.  Create a function called `isDivisibleBy` (that is also a member of Exer)
    that accepts one parameter (e.g. `foo`) and returns a function that
    determines whether or not an argument (e.g. `bar`) is divisible by the
    parameter (`foo`).

<br / >

* * *

<br / >

## Bean Counting

The instructions for this exercise can be found in [this section of the text](http://eloquentjavascript.net/03_functions.html#h_3rsiDgC2do).

Work your solution in `./bean.js`.

Once you have completed the specifications in the book,

1.  Prepare your solution so the test runner can see it. Modify `countBs` and
    `countChar` to make them members of the `Exer` object.

2.  Create a function called `countCharX` (that is also a member of Exer) that
    accepts one parameter (e.g. `char`) and returns a function that counts the
    number of `char`s that appear in a given string argument.
