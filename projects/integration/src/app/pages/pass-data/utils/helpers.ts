export namespace Helpers {

  export const random = () => {
    let min = 1000; let max = 9999;
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
