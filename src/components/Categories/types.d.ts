interface ICategory {
    name: string;
    imageUri: string;
    emoji?: string;
    locale: string;
    // TODO: NEED FIX, IDK WHAT IS IT
    localizations: any;
}

type TCategoryProps = {
    // TODO: type here when done
    item: ICategory;
};
