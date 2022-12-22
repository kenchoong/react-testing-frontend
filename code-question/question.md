I try my best to answer all this question based on my own understanding 

And a couple of questions:
## Write a brief summary of what the React lifecycle is and how it works
React lifecycle is like phase of the app that I can manipulate. 
Which is: 
Mounting: Putting the element into the DOM 
Updating: Update the element in DOM when some event happen. like `useState`, `useEffect` etc. 
Unmounting: Remove the element from the DOM 

## Write a brief summary of what Redux is and how it might be integrated into an app

Redux is a library to handle the state. Normally I need to write the custom hook to manage the state and logic. 
When the app grows, it will having a lot of boilerplate code, a lot of `Provider` need to wrap around `App`, which root of the app. 
Therefore Redux comes, it let me define the state, and what will happen if some state happened into a single object. 
Using Redux-toolkit together, will be easier. 


## Write a brief summary of what unit testing or smoke testing is and why it's useful

Unit testing is like 
- We want to build an aeroplane. 
- Aeroplane have a lot of components need to build. 
- Therefore we break all this component into a small parts 
- Then list down the requirements of a parts. 
- All the requirement for this parts is write in form of code. 
- This is the Unit test. A test aka requirements of a Unit. 
- We will use this Unit test for automated testing which will defined in CI/CD
- Therefore before our changes deployed, all the test should be passed. 
- If not passed, this means something wrong to our code. 
- Before we make changes to our existing code, we need to change the test first. This is call TDD, Test Driven Development. 

My 2 cents understanding about Unit Test

Smoke test 
- This I never done before, and I not so sure. 
- I googled it, read this link a little bit https://www.guru99.com/smoke-testing.html 
- It seems like manually test the important features before release to QA tester. 
- If so, then how I do it is: 
- - I define a given scenario and what will happen for that feature. 
- - - Write in Layman terms. 
- - - manually test it and verified it. 

For example, here is what I do before I release anything: 
```
Given the membership tier 
Gold 5000 points 
Diamond 7000 points 
Platinum 9000 points 

Scenario 1
Tier 1: Gold 5000 

Membership A: already 5001 point, so already achieve Gold 

Sales portal user, one days, headache, change the Gold tier to 6000 point 

Desired outcome: 
Membership A, still in Gold (because he already in Gold tier) at this moment 
UI will attached a screenshot and drawing to point out. 
```


Not sure is this what it mean for Smoke test. But the reason I do this is because 
- In written form, so everytime can refer back, so no need to retest again and again 
- Can give context to everyone in the team, no matter what role they are 
- Easier to confirm with Product owner or Project manager. This act as foundation of every discussion. 
- Save my time, and everyone time. Need a bit work in short term, but benefit will come very soon.  
- Reduce the bug and whatever unexpected stuff happen in production. 


Ya thats all my answer for the question asked. All based on my own understanding. 

Thank you for giving me this chance. 
