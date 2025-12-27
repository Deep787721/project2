// add new feature - form

console.log("Form feature added");
function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    console.log("Form submitted with data:", Object.fromEntries(formData.entries()));
}