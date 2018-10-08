export class Col {
	public values: Array<any> = [];
	constructor(
		public name?: string
	) {}

	public setValue(value: any): void {
		this.values.unshift(value);
	}
	public getValue(c: string) {
		
	}
}
