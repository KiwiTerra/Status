const { Address } = require("./Address");

exports.Service = class Service {
  constructor(name, addresses) {
    this.name = name;
    this.addresses = addresses;
    this.ping = -1;
  }

  getFormat() {
    return `${this.name} : ${this.addresses
      .map((address) => (address.isOnline() ? "🔹" : "🔸"))
      .join("")} (${this.addresses[this.addresses.length - 1].ping}ms)`;
  }

  async update() {
    for (const address of this.addresses) {
      await address.update();
    }
  }

  static parseFromConfig(data) {
    const name = data[0];
    data.shift();
    return new Service(
      name,
      data.map((address) => new Address(address))
    );
  }
};
