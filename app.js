const textInput = document.getElementById('adult-no');  // Gets elemet with the adult-no ID
const textInput2 = document.getElementById('child-no'); // Gets element with the chil-no ID
const numberSelector = document.getElementById('number-dropdown'); // Gets element with the number-dropdown ID 
const numberSelector2 = document.getElementById('number-dropdown2'); // Gets element with the number-dropdown2 ID

/* By assigning the elements to variables, we no longer need to write the full expression of "document.getElementById()".
We can just write down the variable and add the property we need behind it.*/

numberSelector.addEventListener('change', () => {
    textInput.value = numberSelector.value;
});    
 /*Selects the element with Id of number-dropdown that we assigned to the variable called numberSelector and adds an event listner
which listens for actions performed on the element. We are LISTENING for CHANGE to the element, which in this case is a change in 
the number.
Once the event listner detects a change, it carries out a designated function. What i used here is an arrow function which is a 
shorthand form of writing functions. 
What this function does is that the value of the textInput will become whatever value of the numberSelector is set to 
Basically, whatever number we choose from the dropdown is what will be written inside the input field with the ID of "adult-no"
*/
numberSelector2.addEventListener('change', () => {
    textInput2.value = numberSelector2.value;
}); 
/*This is the same as the one above. I wrote 2 because there are 2 dropdowns.It's bad practice to repeat the same code but this is
very small and won't be touched again so i'm ok with repeating myself here*/


// Get references to all the buttons and the form template
const showFormButtons = document.querySelectorAll('.showFormButton'); 
//QuerySelector is a more complex form of getElementById but performs the
//same task of selecting elements in the DOM(Document Object Model). DOM is where your html sits
const formTemplate = document.getElementById('form-template');
//Selects element with the id "Form-template" i.e the book now form

// Create a flag to track the form's visibility. So we can decide whether to display the form or not. We set the flag to be a boolean for off and on
let isFormVisible = false;

// Attach a click event listener to each button using the forEach property that arrays have. 
/*When you use the queryselect there are two versions, QuerySelect and querySelectorAll. 
-QuerySelector returns a single element with the stated id or class (the first one that matches the selector) or null if no element matches.
-QuerySelectorAll  returns a collection of elements. This collection behaves like an array but is not a true array and can't use other
array properties like pop,push,map. (It returns a NodeList, which is a static, non-live collection of elements that match the specified selector)
*/

//The for Each method iterates and performs an action on every element in an array. In this case we're adding an event listener to every button
showFormButtons.forEach(button => { 
    button.addEventListener('click', () => {
     // On click we Find the parent container div of the button and assign it to a variable called container so it will be easy to reference later
        const container = button.parentElement;

        // Toggle the visibility of the form
        // If the form is visible we set the display to none
        if (isFormVisible) { 
            formTemplate.style.display = 'none';} 
        else {
            container.appendChild(formTemplate);
            formTemplate.style.display = 'block';
        }
        /*If the form is not visible(which it won't be when we first load up the page) we will make it visible and append(add to the end) 
        the form template to the container. Remember, container is just variable for the parent element of the button we click
        */

        // Once we go through the if else statement, we will set the flag to true but using the NOT logical operator (!)
        isFormVisible = !isFormVisible;
    });
});

const bookNow = document.getElementById('book-now'); //Select the element with the id book-now, which is the button in the form
bookNow.addEventListener('click', () => { // On click the button will set the visibility of the form to none. 
    formTemplate.style.display = 'none'; //I'm able to acces the formTemplate variable here because it's a global variable
}
);

document.addEventListener("DOMContentLoaded", function () {
    const testimonialsContainer = document.querySelector(".testimonials");
    const testimonials = document.querySelectorAll(".testimonial");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    let currentIndex = 0;
    const testimonialWidth = testimonials[0].offsetWidth * 3; // Width of 3 testimonials

    function showTestimonials(index) {
        const translateX = -index * testimonialWidth;
        testimonialsContainer.style.transform = `translateX(${translateX}px)`;
    }

    function nextTestimonials() {
        currentIndex++;
        if (currentIndex >= testimonials.length / 3) {
            currentIndex = 0;
        }
        showTestimonials(currentIndex);
    }

    function prevTestimonials() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = testimonials.length / 3 - 1;
        }
        showTestimonials(currentIndex);
    }

    nextBtn.addEventListener("click", nextTestimonials);
    prevBtn.addEventListener("click", prevTestimonials);

    showTestimonials(currentIndex);
});
