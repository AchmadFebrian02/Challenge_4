class App {
  constructor() {
    // this.clearButton = document.getElementById("clear-btn");
    // this.loadButton = document.getElementById("load-btn");
    this.filterButton = document.getElementById("filter");
    this.carContainerElement = document.getElementById("cars-container");
  }

  async init() {
    await this.load();

    // Register click listener

    // this.loadButton.onclick = this.run;
    this.filterButton.onclick = this.filter;
  }

  run = () => {
    Car.list.forEach((car) => {
      const node = document.createElement("div");
      node.innerHTML = car.render();
      this.carContainerElement.appendChild(node);
    });
  };

  async filter() {
    const driver = document.getElementById("tipedriver").value
    console.log(driver)
    const date = document.getElementById("Tanggal").value
    console.log(date)
    const time = document.getElementById("Waktu").value
    console.log(time)
    const cars = await Binar.listCars((e) => {
      // tambahkan fungsi filter
      return e.typeDriver === driver
    });
    
    Car.init(cars);
    document.getElementById("cars-container").innerHTML = ''
    Car.list.forEach((car) => {
      const node = document.createElement("div");
      node.innerHTML = car.render();
      document.getElementById("cars-container").appendChild(node);
    });
  }

  async load(filter) {
    const cars = await Binar.listCars(filter);
    Car.init(cars);
  }

  clear = () => {
    let child = this.carContainerElement.firstElementChild;

    while (child) {
      child.remove();
      child = this.carContainerElement.firstElementChild;
    }
  };
}
