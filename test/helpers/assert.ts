export default function assert(value: unknown, message: string): void {
	if (!value) {
		process.nextTick(process.exit, 1);
		throw new Error(`AssertionError: ${ message }`);
	}
}
