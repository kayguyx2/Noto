import { INote } from "@/store/types";

export type AppRootParamList = {
    main: undefined;
    note: undefined;
    editor: {
        status: string;
        note: INote
    };
};

// This registers which makes navigation fully type-safe.
// https://reactnavigation.org/docs/typescript#specifying-default-types-for-usenavigation-link-ref-etc
declare global {
    namespace ReactNavigation {
        interface RootParamList extends AppRootParamList {}
    }
}
