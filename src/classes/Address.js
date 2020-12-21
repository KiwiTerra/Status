const { promise } = require("ping");
exports.Address = class Address {
  constructor(address) {
    this.address = address;
  }

  async update() {
    const response = await promise.probe(this.address, { timeout: 1000 });
    this.ping = response.min === "unknown" ? -1 : Number.parseInt(response.min);
  }

  isOnline() {
    return this.ping !== -1;
  }
};
