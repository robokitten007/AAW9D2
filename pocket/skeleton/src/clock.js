
export default class Clock {
  constructor() {
    // 1. Create a Date object.
    // 2. Store the hours, minutes, and seconds.
    // 3. Call printTime.
    // 4. Schedule the tick at 1 second intervals.
    this.date = new Date;
    this.printTime();
    // this._tick = this._tick.bind(this);
    setInterval(() => this._tick(), 1000);

  }

  printTime() {
    // Format the time in HH:MM:SS
    // Use console.log to print it.
    // console.log(this.date.toLocaleString("en-US"));
    return this.date.toLocaleString("en-US");
  }

  _tick() {
    // 1. Increment the time by one second.
    // 2. Call printTime.
    // console.log(this)
    this.date.setSeconds(this.date.getSeconds() + 1)
    this.printTime()
  }
}




