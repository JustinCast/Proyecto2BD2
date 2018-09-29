export class Connection {
  constructor(
    public name?: string,
    public server?: string,
    public port?: number,
    public database?: string,
    public user?: string,
    public password?: string
  ) {}
}
