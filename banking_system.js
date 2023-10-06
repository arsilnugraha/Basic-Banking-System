// Kelas abstrak BankingSystem
class BankingSystem {
  constructor(saldo) {
    if (this.constructor === BankingSystem) {
      throw new Error("Cannot instantiate from abstract class.");
    }

    if (isNaN(saldo) || saldo < 0) {
      throw new Error("Saldo harus merupakan angka positif.");
    }
    this.saldo = saldo;
  }

  deposit(amount) {
    if (isNaN(amount) || amount <= 0) {
      throw new Error("Input tidak valid. Harap masukkan angka positif.");
    }
    setTimeout(() => {
      this.saldo += amount;
      this.updateSaldoDisplay();
    }, 1000); // Menunda eksekusi selama 1 detik (1000 milidetik)
  }

  withdraw(amount) {
    if (isNaN(amount) || amount <= 0 || amount > this.saldo) {
      throw new Error("Input tidak valid atau melebihi saldo saat ini.");
    }
    setTimeout(() => {
      this.saldo -= amount;
      this.updateSaldoDisplay();
    }, 1000); // Menunda eksekusi selama 1 detik (1000 milidetik)
  }

  updateSaldoDisplay() {
    const saldoDisplay = document.getElementById("saldo");
    saldoDisplay.textContent = this.saldo;
  }
}

export default BankingSystem;
