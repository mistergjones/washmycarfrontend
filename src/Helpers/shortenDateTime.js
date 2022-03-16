export default function shortenDate(providedDate) {
    console.log("The provided date", providedDate);

    var shortenedDate = providedDate.slice(0, 8);

    console.log("Shroted date is", shortenedDate);
}
