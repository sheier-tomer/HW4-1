// validation.js
$(document).ready(function () {
    $("form").validate({
        rules: {
            minRow: {
                required: true,
                number: true,
                range: [-50, 50]
            },
            maxRow: {
                required: true,
                number: true,
                range: [-50, 50]
            },
            minCol: {
                required: true,
                number: true,
                range: [-50, 50]
            },
            maxCol: {
                required: true,
                number: true,
                range: [-50, 50]
            }
        },
        messages: {
            minRow: {
                required: "Please enter a value for Minimum Row",
                number: "Please enter a valid number",
                range: "Value must be between -50 and 50"
            },
            maxRow: {
                required: "Please enter a value for Maximum Row",
                number: "Please enter a valid number",
                range: "Value must be between -50 and 50"
            },
            minCol: {
                required: "Please enter a value for Minimum Column",
                number: "Please enter a valid number",
                range: "Value must be between -50 and 50"
            },
            maxCol: {
                required: "Please enter a value for Maximum Column",
                number: "Please enter a valid number",
                range: "Value must be between -50 and 50"
            }
        },
        errorPlacement: function (error, element) {
            // Customize the placement of error messages
            error.insertAfter(element);
        },
        submitHandler: function (form) {
            // Validation passed, call createTable function
            console.log("Form is valid. Calling createTable...");
            createTable();
            return false; // Prevent form submission
        }
    });

    // Attach click event to the button
    $("#createTableBtn").click(function () {
        // Manually trigger form validation
        $("form").submit(); // Submit the form to trigger validation
    });
});
