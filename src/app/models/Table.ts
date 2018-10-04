export class Table {
	public privileges: Array<string> = [];
	constructor(public t_name?: string) {}

	public setPrivilege(privilege: string): void {
		this.privileges.unshift(privilege);
	}
}
