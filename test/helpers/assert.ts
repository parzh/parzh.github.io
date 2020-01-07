export default function assert(value: any, message: string): void {
	if (!value) {
		process.nextTick(process.exit, 1);
		throw new Error(`AssertionError: ${ message }`);
	}
}
