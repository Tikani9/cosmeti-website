// Order product
function orderProduct(productName) {
    alert(`You have ordered: ${productName}`);
}

// Claim offer
function claimOffer() {
    alert("Offer claimed! Discount applied at checkout.");
}

// Submit review
function submitReview() {
    const reviewText = document.getElementById("review-text").value;
    if (reviewText) {
        const reviewList = document.getElementById("review-list");
        const newReview = document.createElement("p");
        newReview.textContent = reviewText;
        reviewList.appendChild(newReview);
        document.getElementById("review-text").value = ""; // Clear input
        alert("Thank you for your review!");
    } else {
        alert("Please write a review before submitting.");
    }
}
