document.addEventListener("DOMContentLoaded", function() {
    // Get the element where the job listings will be inserted
    var jobListings = document.getElementById("mock");

    // Use fetch to get the JSON data
    fetch("mock.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        // Loop through the job listings array
        data.forEach(function(job) {
        // Create a new list item for each job listing
        var newItem = document.createElement("li");

        // Set the inner HTML of the list item to the job listing
        newItem.innerHTML = "<h3>" + job.jobTitle + "</h3><p>" + job.company + "<br>" + job.location + "</p><p>" + job.description + "</p>";

        // Append the list item to the job listings element
        jobListings.appendChild(newItem);
        });
    });
});
function filterJobs() {
    // Get the search keyword and location
    var keyword = document.getElementById("keywords").value.toLowerCase();
    var location = document.getElementById("location").value.toLowerCase();

    // Get the job listings element
    var jobListings = document.getElementById("job-listings");

    // Get all the job listing elements
    var jobListingElements = jobListings.getElementsByTagName("li");

    // Loop through all the job listing elements
    for (var i = 0; i < jobListingElements.length; i++) {
        var job = jobListingElements[i];
        var jobTitle = job.getElementsByTagName("h3")[0].textContent.toLowerCase();
        var jobLocation = job.getElementsByTagName("p")[1].textContent.toLowerCase();

        // Check if the job title or location contains the search keyword or location
        if (jobTitle.indexOf(keyword) !== -1 || jobLocation.indexOf(location) !== -1) {
            job.style.display = "block";
        } else {
            job.style.display = "none";
        }
    }
}
