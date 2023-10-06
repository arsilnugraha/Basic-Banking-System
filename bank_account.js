import BankingSystem from "./banking_system.js";

// Kelas turunan BankAccount
class BankAccount extends BankingSystem {
  constructor(saldo) {
    super(saldo);
  }

  deposit(amount) {
    try {
      super.deposit(amount);
    } catch (error) {
      alert(error.message);
    }
  }

  withdraw(amount) {
    try {
      super.withdraw(amount);
    } catch (error) {
      alert(error.message);
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const bankAccount = new BankAccount(100000);
  bankAccount.updateSaldoDisplay();

  const tambahButton = document.getElementById("tambahButton");
  tambahButton.addEventListener("click", () => {
    const amount = parseFloat(prompt("Masukkan jumlah saldo yang ditambahkan"));
    bankAccount.deposit(amount);
  });

  const kurangButton = document.getElementById("kurangButton");
  kurangButton.addEventListener("click", () => {
    const amount = parseFloat(prompt("Masukkan jumlah saldo yang dikurangi"));
    bankAccount.withdraw(amount);
  });
});
