const { Service } = require("./Service");

exports.Category = class Category {
  constructor(name) {
    this.name = name;
    this.services = [];
  }

  getFormat() {
    return `[**${this.name}**]\n${this.services
      .map((service) => service.getFormat())
      .join("\n")}\n`;
  }

  static parseFromConfig(data) {
    const category = new Category(data.name);
    for (const serviceData of data.servers) {
      const service = Service.parseFromConfig(serviceData);
      category.services.push(service);
    }
    return category;
  }
};
