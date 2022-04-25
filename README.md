## The Golden Rule: 

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1) **Make a drawing of your app. Simple "wireframes"** 
3 pics
3 buttons
3 diffrent result boards
1) **Look at the drawing and name the HTML elements you'll need to realize your vision**
shell img
click button to find red dot.
click button to find red dot.
click button to find red dot.
increase number, win, lose and total.
1) **Look at the drawing and imagine using the app. What _state_ do you need to track?** 
need to track wins, loses and total clicks.
1) **For each HTML element ask: Why do I need this? (i.e., "we need div to display the results in")** 
show image and red dot under to see if we win or lose.
click button to see if we win or lose. 
1) **Once we know _why_ we need each element, think about how to implement the "Why" as a "How" (i.e., `resultsEl.textContent = newResults`)**
click button 1 = red dot = win or lose.
click button 2 = red dot = win or lose.
click button 3 = red dot = win or lose.
track clicks: win, loses and total.
1) **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change? Does any DOM update?**
user clicks, reveals red ball or not
counter updates, win or loses and total.
updates and resets.
1) **Think about how to validate each of your features according to a Definition of Done. (Hint: console.log usually helps here.)**
1) **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**

Additional considerations:
- Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
- Consider your data model. 
  - What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need? 
  - What are the key/value pairs? 
  - What arrays might you need? 
  - What needs to live in a persistence layer?
- Is there some state we need to initialize?
- Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be resused?)
