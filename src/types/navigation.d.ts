export type AppRootParamList = {
    main: undefined;
	editor: {
		noteId: string,
		status: string
	};
};

// This registers which makes navigation fully type-safe.
// https://reactnavigation.org/docs/typescript#specifying-default-types-for-usenavigation-link-ref-etc
declare global {
    namespace ReactNavigation {
        interface RootParamList extends AppRootParamList {}
    }
}
