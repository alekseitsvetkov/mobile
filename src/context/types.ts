export interface IMe {
    id: string;
}

export interface IAppContextType {
    me: IMe;
    updateMe: (me: IMe) => void;
}
