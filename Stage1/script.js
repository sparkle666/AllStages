document.addEventListener("DOMContentLoaded", function() {
    // Get the current date
    const currentDate = new Date();

    // Get the current day of the week
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDay = daysOfWeek[currentDate.getUTCDay()];

    // Get the current UTC time in milliseconds
    const currentUTCTime = currentDate.getTime();

    // Display the current day of the week and UTC time
    document.querySelector("[data-testid='currentDayOfTheWeek']").textContent = currentDay;
    document.querySelector("[data-testid='currentUTCTime']").textContent = currentUTCTime;
});
