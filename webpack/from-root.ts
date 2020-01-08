import path from "path";

export default function fromRoot(...segments: string[]): string {
	return path.resolve(__dirname, "..", ...segments);
}
