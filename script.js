function compoundInterest() {
    const principal = Number(prompt("Enter Principal Amount:"));
    const rate = Number(prompt("Enter Annual Interest Rate (%):"));
    const time = Number(prompt("Enter Time (years):"));
    const n = Number(prompt("Enter number of times interest compounds per year:"));

    const amount = principal * (1 + (rate / (100 * n))) ** (n * time);

    console.log("Total Amount:", amount);
}

compoundInterest();