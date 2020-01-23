(global as any).fetch = () => {
	throw new Error("'fetch()' calls must be mocked");
};
