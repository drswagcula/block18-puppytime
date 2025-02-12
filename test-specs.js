// test-specs.js

const testSpecifications = {
    unitTests: {
        multiplication: [
            "Expect multiplication(2, 3) to be a number",
            "Expect multiplication(2, 3) to be equal to 6",
            "Expect multiplication(-2, 3) to be equal to -6",
            "Expect multiplication(0, 10) to be equal to 0",
            "Expect multiplication(5, 0) to be equal to 0",
            "Expect multiplication(-2, -3) to be equal to 6",
            "Expect multiplication(2.5, 4) to be equal to 10",
            "Expect multiplication(\"a\", 3) to be an error",
            "Expect multiplication(null, 3) to be an error",
            "Expect multiplication(undefined, 3) to be an error"
        ],
        concatOdds: [
            "Expect concatOdds([3, 2, 1], [9, 1, 1, 1, 4, 15, -1]) to be [-1, 1, 3, 9, 15]",
            "Expect concatOdds([], []) to be []",
            "Expect concatOdds([2, 4, 6], [8, 10]) to be []",
            "Expect concatOdds([1, 3, 5], [7, 9, 11]) to be [1, 3, 5, 7, 9, 11]",
            "Expect concatOdds([1, 1, 1], [1, 1, 1]) to be [1]",
            "Expect concatOdds([5, -3, 7], [-9, 11, 3]) to be [-9, -3, 3, 5, 7, 11]",
            "Expect concatOdds([1, 2, \"a\"], [3, 4, 5]) to be an error",
            "Expect concatOdds(null, [1, 3, 5]) to be an error"
        ]
    },
    functionalTests: {
        shoppingCartCheckout: [
            "When a user attempts to check out with an empty cart, they should be shown an error message.",
            "When a user proceeds to checkout as a guest, they should be asked if they want to create an account.",
            "When a logged-in user proceeds to checkout, they should be taken directly to the payment page.",
            "When a user enters an invalid payment method, they should be prompted to enter a valid one.",
            "When a user successfully completes payment, they should see an order confirmation page.",
            "When a user abandons checkout, their cart should be saved for later.",
            "When a user applies a discount code, the total price should be adjusted accordingly.",
            "When a user selects shipping options, the estimated delivery date should be updated.",
            "When a guest user completes checkout, they should have an option to save their details for future purchases."
        ]
    }
};

console.log(testSpecifications);
