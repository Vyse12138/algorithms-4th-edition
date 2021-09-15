export class UF2 {
  /**
   * Number of union
   */
  count: number = 0

  /**
   * Array to store all points and their unino
   */
  id: number[] = []

  /**
   * Init a new union finder instance with the given number of points
   *
   * @param n Number of points
   */
  constructor(n: number) {
    if (!Number.isInteger(n)) {
      throw new Error('n must be an interger')
    }
    if (n <= 0) {
      throw new Error('n must be greater than 0')
    }
    this.count = n
    for (let i = 0; i < n; i++) {
      this.id[i] = i
    }
  }

  /**
   * Check if two points are connected
   *
   * @param p Point 1
   * @param q Point 2
   * @returns Are two points connected
   */
  connected(p: number, q: number): boolean {
    return this.find(p) === this.find(q)
  }

  /**
   * Find the union of a point
   *
   * @param p Point
   * @returns Union
   */
  find(p: number): number {
    while (p !== this.id[p]) {
      p = this.id[p]
    }
    return p
  }

  /**
   * Function to unionize two points
   *
   * @param p Point 1
   * @param q Point 2
   * @param method Method u wanna use, 1 for quickFind, 2 for quickUnion
   * @returns Void
   */
  union(p: number, q: number): void {
    let pId = this.find(p)
    let qId = this.find(q)
    if (pId === qId) {
      return
    }
    for (let i in this.id) {
      if (this.id[i] === pId) {
        this.id[i] = qId
      }
    }
    this.count--
  }
}
