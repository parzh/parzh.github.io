(global as any).fetch = () => {
	throw new Error("Calls to 'fetch()' in tests must be mocked");
};
