class Car {
  static list = [];

  static init(cars) {
    this.list = cars.map((i) => new this(i));
  }

  constructor({
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    type,
    year,
    options,
    specs,
    availableAt,
    typeDriver
  }) {
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
    this.typeDriver = typeDriver
  }

  render() {
    return `
      <p>id: <b>${this.id}</b></p>
      <p>plate: <b>${this.plate}</b></p>
      <p>manufacture: <b>${this.manufacture}</b></p>
      <p>model: <b>${this.model}</b></p>
      <p>type driver: <b>${this.typeDriver}</b></p>
      <p>available at: <b>${this.availableAt}</b></p>
      <img src="${this.image}" alt="${this.manufacture}" width="400px">
    `;
  }
}
