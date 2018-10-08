export class Col {
	public rows: Array<string> = [];
	constructor(public col_name?: string) {}

	public setRow(row: string): void {
		this.rows.unshift(row);
	}
}
