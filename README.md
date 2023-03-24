# JS-challenge-repo

##Challenge Goal
From the starter code, modify the Javascript and create functionality to generate randomized passwords from multiple character arrays.
The end goal is a page that prompts users to specify parameters for the page to use to generate randomized passwords.

## Acceptance Criteria
1. The code should prompt the user to specify how many characters the password should be, with a lower limit of 8 and an upper limit of 128.
2. There should also be further prompts to clarify if the user wants to include:
  a) upper case letters
  b) lower case letters
  c) special characters
  d) numbers
3. Once prompts are answered and the user clicks the "Generate Password" button, a password matching the specified criteria is returned
either in the box or as an alert.

##  Methods Used
I first defined the raw data the generator would be pulling from by defining 4 separate global variable arrays containing lower case letters, upper case
letters, special characters and numbers.  The starter code had the generatePassword function defined, so I had to code the parameters inside the given function.
I started by adding an alert to prompt for password length, using conditional if statements to prompt users to input a number between 8 and 128 and returning to
the beginning if they put in a number that was too small or large or a non-number.

Then I added Boolean variables to prompt users to include or not include the other types of characters and letters. To complete that, I added a prompt in case
users didn't select any of the arrays that would send it back to the beginning.

Now that the criteria had been defined, I created a for loop with Math.floor(Math.random()) to randomize the selected variable arrays, closed the loop and finished
the function by having it return result to finally generate the password.

There were some bugs in the final code and I learned to remove the array commas by using the array method join() to have a coherent random password.  Finally,
to stop the bug that stacked the generated passwords and didn't clear the field when users clicked multiple times, the TAs helped me to realize I had to add an empty
array to clear the display box when the function ran again.  This completed the challenge.

## Resources
The TAs Brad and Steven were very helpful and helped me put together the disparate pieces of code together.  They pointed out where I was
making mistakes with logic or sytnax.
My classmate Leng helped me work out the final bugs, as well.
MDN, w3schools and stack-overflow were useful for understanding individual functions and elements.
